import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the terms and conditions for using OFM Social OS.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Terms of Service
      </h1>
      <p className="text-gray-700 leading-relaxed">
        These terms govern your use of the OFM Social OS platform. By
        accessing or using our services, you agree to be bound by these
        conditions. We reserve the right to update these terms at any time,
        and it is your responsibility to review them periodically.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">Use of service</h2>
      <p className="text-gray-700 leading-relaxed">
        You agree to use the platform only for lawful purposes and in
        accordance with all applicable laws. You may not misuse the platform or
        attempt to access restricted areas without authorization.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">
        Intellectual property
      </h2>
      <p className="text-gray-700 leading-relaxed">
        All content and materials on the site, including text, graphics, and
        software, are the property of OFM Social OS or its licensors and are
        protected by copyright and other intellectual property laws. You may
        not copy, modify, or distribute any part of the site without prior
        written consent.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">
        Disclaimer of warranties
      </h2>
      <p className="text-gray-700 leading-relaxed">
        The platform is provided “as is” and without warranties of any kind.
        We do not warrant that the services will be uninterrupted, error‑free,
        or secure. Your use of the platform is at your own risk.
      </p>
    </div>
  );
}