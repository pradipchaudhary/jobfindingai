import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative bg-white">
            {/* Background Gradient */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(244,63,94,0.08), transparent 70%)",
                    }}
                    className="w-full h-full"
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-full flex flex-col justify-center items-center px-6 text-center py-20 sm:py-24 lg:px-8">


                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-3xl mb-4">
                    Empower Your Job Search with AI
                </h1>

                {/* Subheading */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Intelligent job matching and automated applications.
                    Let AI do the heavy lifting while you focus on landing your next role.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/signup"
                        className="px-8 py-4 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/demo"
                        className="px-8 py-4 text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
