import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Simple Soft Gradient Background */}
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-x-[20%] translate-y-[10%] rounded-full bg-[rgba(59,130,246,0.15)] blur-[80px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-full flex flex-col justify-center items-center px-6 text-center py-20 sm:py-24 lg:px-8">
                {/* Logo */}
                <div className="mb-10">
                    <Image
                        src="/logo.jpg"
                        width={180}
                        height={270}
                        alt="Logo, JobFindingAI"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-3xl mb-4">
                    Empower Your Job Search with AI
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                    <strong>JobFindingAI</strong> simplifies your job hunt by intelligently discovering and applying to relevant opportunities — all from one streamlined platform.
                </p>

                {/* CTA Button */}
                <Link
                    href="/signup"
                    passHref
                    className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}
