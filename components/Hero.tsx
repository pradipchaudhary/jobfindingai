import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Simple Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 h-[300px] w-[300px] -translate-x-[50%] translate-y-[50%] rounded-full bg-gray-100 opacity-50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center py-24">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 max-w-4xl mb-6">
                    Find Your Dream Job with AI
                </h1>

                {/* Subheading */}
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    JobFindingAI simplifies your job search by intelligently matching you with relevant opportunities and streamlining applications.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/signup"
                        className="px-8 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/demo"
                        className="px-8 py-3 text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
