import Link from "next/link";

export default function Hero() {
    return (
        <div className="bg-white">
            {/* Content */}
            <div className="flex flex-col justify-center items-center px-6 text-center py-32  max-w-4xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Find Your Dream Job
                    <br />
                    <span className="text-gray-600">with AI</span>
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
