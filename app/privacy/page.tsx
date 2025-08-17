import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how Huntaze collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed">
        We respect your privacy and are committed to protecting your personal
        data. This policy explains what information we collect, why we collect
        it, and how we use it. We only use official platform APIs to access
        data and do not engage in any form of engagement manipulation. For
        further details or questions, please contact us.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">
        Information we collect
      </h2>
      <p className="text-gray-700 leading-relaxed">
        When you join our waitlist or use our services, we collect information
        that you provide directly, such as your email address, social handles,
        and any optional data you choose to share. We may also collect usage
        statistics to improve the performance and reliability of our platform.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">
        How we use your information
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Your information is used to communicate with you about your account and
        to provide the services you request. We may also use aggregated,
        anonymized data to analyze product usage and improve our features. We
        do not sell or share your personal data with third parties for
        marketing purposes.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6">
        Data retention and security
      </h2>
      <p className="text-gray-700 leading-relaxed">
        We retain your data only as long as necessary to provide our services
        and comply with legal obligations. Appropriate technical and
        organizational measures are in place to safeguard your information.
      </p>
    </div>
  );
}