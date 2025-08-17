import Head from 'next/head';

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service</title>
                <meta name="description" content="Read our terms of service" />
            </Head>
            <main className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

                    <p className="mb-4">
                        These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Our Service</h2>
                    <p className="mb-4">
                        You agree to use our website in accordance with all applicable laws and regulations. You may not use the service for any unlawful or harmful purpose.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Accounts</h2>
                    <p className="mb-4">
                        If you create an account, you are responsible for maintaining the security of your account and for all activities that occur under your account.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
                    <p className="mb-4">
                        All content and materials on this website are the property of the site owner or licensors and are protected by intellectual property laws.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Termination</h2>
                    <p className="mb-4">
                        We may suspend or terminate your access to the service at any time, without notice, for conduct that we believe violates these terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimers</h2>
                    <p className="mb-4">
                        Our services are provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-4">
                        We are not liable for any damages arising from your use of our website or services, to the maximum extent permitted by law.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
                    <p className="mb-4">
                        We may update these Terms of Service at any time. Continued use of the site constitutes your acceptance of the updated terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
                    <p>
                        If you have questions about these terms, contact us at{' '}
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
