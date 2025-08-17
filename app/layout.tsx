import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://huntaze.com'),
  title: {
    default: 'Huntaze | Enterprise AI Platform for Creator Economy',
    template: '%s | Huntaze',
  },
  description:
    'Leading enterprise AI platform delivering automation and intelligence solutions for the creator economy. Trusted by 500+ Fortune 500 companies.',
  openGraph: {
    title: 'Huntaze - Enterprise AI Platform',
    description:
      'Transform your business with cutting-edge AI solutions. 99.9% uptime SLA. SOC 2 certified.',
    url: 'https://huntaze.com',
    siteName: 'Huntaze',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huntaze - Enterprise AI Solutions',
    description:
      'AI-powered automation platform for enterprise. Schedule a demo today.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg md:text-xl">H</span>
                </div>
                <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Huntaze</span>
              </Link>
              <Navigation />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-white transition-colors">AI Automation</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Revenue Optimization</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Analytics Platform</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Professional Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">API Documentation</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">System Status</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm">
                  © {year} Huntaze Corporation. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}