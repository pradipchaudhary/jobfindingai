import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Read our privacy policy" />
            </Head>
            <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

                    <p className="mb-4">
                        Your privacy is important to us. This privacy policy explains how we collect, use, and safeguard your information.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information such as your name, email address, and usage data when you use our website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
                    <p className="mb-4">
                        We use your information to provide and improve our services, communicate with you, and ensure security.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
                    <p className="mb-4">
                        Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                    <p className="mb-4">
                        We implement security measures to protect your data, but no method of transmission is 100% secure.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
                    <p className="mb-4">
                        We may use third-party services for analytics or other functions, which may collect data according to their own policies.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
                    <p className="mb-4">
                        You may request access to or deletion of your personal data by contacting us.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
                    <p className="mb-4">
                        We may update this policy from time to time. Any changes will be posted on this page.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
                    <p>
                        If you have any questions about this policy, you can contact us at{' '}
                        <a href="mailto:support@example.com" className="text-blue-600 underline">
                            support@example.com
                        </a>
                        .
                    </p>
                </div>
            </main>
        </>
    );
}
