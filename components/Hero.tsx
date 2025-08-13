import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden min-h-[70vh] flex flex-col justify-center items-center px-6 text-center py-20 sm:py-24 lg:px-8 bg-white">
            {/* Background Gradient */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(244,63,94,0.15) 0%, white 70%)",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Empower Your Job Search with AI
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
                    Intelligent job matching and automated applications.
                    Let AI do the heavy lifting while you focus on landing your next role.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/signup"
                        className="px-8 py-4 text-white bg-black rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg shadow-md hover:shadow-lg"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/demo"
                        className="px-8 py-4 text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-all font-semibold text-lg shadow-sm hover:shadow-md"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
