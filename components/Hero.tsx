import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="min-h-full flex flex-col justify-center items-center bg-white px-6 text-center py-20 sm:py-16 lg:px-8">
            <div className="mb-10">
                <Image
                    src="/logo.jpg"
                    width={180}
                    height={270}
                    alt="Logo, JobFindingAI"
                />
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-3xl mb-4">
                Empower Your Job Search with AI
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                <strong>JobFindingAI</strong> simplifies your job hunt by intelligently discovering and applying to relevant opportunities — all from one streamlined platform.
            </p>

            <Link href="/signup" passHref className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                Get Started
            </Link>
        </div>
    );
}
