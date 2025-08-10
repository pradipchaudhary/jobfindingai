import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Enhanced Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-60 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[30%] -translate-y-[20%] rounded-full bg-gradient-to-tr from-purple-100 to-pink-100 opacity-40 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center py-24 sm:py-32">
                {/* Brand Badge */}
                <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        🚀 AI-Powered Job Search
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mb-6 leading-tight">
                    Find Your Dream Job with
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                    JobFindingAI revolutionizes your job search by intelligently matching you with perfect opportunities and streamlining applications — all from one powerful platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Get Started Free
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link
                        href="/demo"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Watch Demo
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12l-2 5H7l-2-5z" />
                        </svg>
                    </Link>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-100">
                        ✨ Smart Matching
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-100">
                        ⚡ Auto Apply
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-100">
                        📊 Real-time Analytics
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-100">
                        🎯 Personalized
                    </span>
                </div>
            </div>
        </div>
    );
}
