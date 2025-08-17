# Huntaze - Marketing & AI Chatting Platform

A Next.js 14+ website showcasing Huntaze, featuring multi-platform marketing tools and an AI chatting assistant. Built with TypeScript, Tailwind CSS v4, and serverless Postgres via Neon.

## Features

### Marketing Suite
- **Multi-platform Publishing**: Instagram, TikTok, X, and Reddit from one dashboard
- **Durable Workflows**: Powered by Temporal for enterprise-grade reliability
- **Media Pipeline**: FFmpeg and Whisper for video processing and transcription
- **Observability**: Real-time metrics with Prometheus and Grafana
- **Security & GDPR**: Official APIs only, no engagement manipulation

### AI Chatting Assistant
- **Fan Profiling**: Intelligent audience understanding and segmentation
- **Personalized Messages**: IRAS engine for contextual responses
- **Inbox-safe Behaviors**: Platform-compliant messaging patterns
- **Analytics**: Conversation insights without unrealistic promises

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Neon Postgres database ([sign up free](https://neon.tech))

### Installation

1. Clone and install dependencies:
```bash
git clone <repo-url>
cd site-web
npm install
```

2. Configure environment:
```bash
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL from Neon
```

3. Run development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for production:
```bash
npm run build
npm start
```

## API Endpoints

### POST /api/waitlist
Accepts JSON with fields:
- `email` (required, valid email)
- `handle_ig` (optional, Instagram handle)
- `niche` (optional, content niche)
- `timezone` (optional, ET/CT/MT/PT)
- `consent` (optional, boolean)

Rate limited to 30 requests/minute per IP.

Example:
```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H 'Content-Type: application/json' \
  -d '{"email":"user@example.com","timezone":"PT"}'
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab/Bitbucket
2. Import to Vercel
3. Add `DATABASE_URL` in environment variables
4. Deploy

The Neon serverless driver works perfectly with Vercel Edge Functions.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── marketing/         # Marketing features page
│   ├── chatting/          # AI chatting page
│   ├── join/              # Waitlist form
│   └── learn/             # How it works
├── components/ui/         # Reusable UI components
├── src/lib/              # Utilities and database
└── public/               # Static assets
```

## Compliance Note

This platform strictly adheres to:
- Official platform APIs only
- No engagement manipulation
- GDPR compliance
- Platform terms of service

## License

MIT License - see LICENSE file for details.