import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { z } from 'zod';
// Import the Neon client from our local library.  Because this file lives
// within `app/api/waitlist`, we must traverse up three directories to reach
// `src/lib/db`.
import { sql } from '../../../src/lib/db';

// Rate limiter allowing up to 30 requests per minute per IP address.  A
// memory‑based store is sufficient here because Vercel serverless
// functions are short‑lived and the memory store will reset between
// invocations.  For more persistent storage, consider using Redis.
const rateLimiter = new RateLimiterMemory({ points: 30, duration: 60 });

// Define the expected shape of the incoming payload.  Optional fields
// default to undefined so they are omitted in the SQL query when not
// provided.  The `email` field must be a valid email address.
const waitlistSchema = z.object({
  email: z.string().email(),
  handle_ig: z.string().optional(),
  niche: z.string().optional(),
  timezone: z.enum(['ET', 'CT', 'MT', 'PT']).optional(),
  consent: z.boolean().optional(),
});

async function ensureTable() {
  // Create the waitlist table if it does not already exist.  The table
  // enforces a unique constraint on the email field so that repeated
  // submissions from the same email update the existing record rather than
  // creating duplicates.
  await sql`CREATE TABLE IF NOT EXISTS marketing_waitlist (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    handle_ig TEXT,
    niche TEXT,
    timezone TEXT,
    consent BOOLEAN DEFAULT false,
    inserted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`;
}

export async function GET() {
  // A simple health check endpoint can be used by uptime monitors.
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  // Rate limit the incoming request based on the client IP.  Many deployment
  // platforms provide the originating IP address via the `x-forwarded-for`
  // header.  If absent, fall back to a placeholder value so that rate
  // limiting still occurs across all clients.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  try {
    await rateLimiter.consume(ip);
  } catch (err) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  // Parse and validate the request body.  Return a 400 error if JSON
  // decoding fails, or a 422 error if the payload does not match the
  // schema.
  let payload: unknown;
  try {
    payload = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }
  const result = waitlistSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { email, handle_ig, niche, timezone, consent } = result.data;

  // Ensure the table exists before inserting.  This is safe to call on
  // every request because the CREATE TABLE statement is idempotent.
  await ensureTable();

  try {
    await sql`INSERT INTO marketing_waitlist (email, handle_ig, niche, timezone, consent)
      VALUES (${email}, ${handle_ig ?? null}, ${niche ?? null}, ${
      timezone ?? null
    }, ${consent ?? false})
      ON CONFLICT (email) DO UPDATE SET
        handle_ig = EXCLUDED.handle_ig,
        niche = EXCLUDED.niche,
        timezone = EXCLUDED.timezone,
        consent = EXCLUDED.consent`;
  } catch (error) {
    console.error('Database error', error);
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
  return NextResponse.json({ ok: true });
}