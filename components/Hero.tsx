import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-400 opacity-8 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 opacity-6 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 -z-5">
                <div className="absolute top-20 left-10 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}} />
                <div className="absolute top-40 right-32 w-4 h-4 bg-purple-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}} />
                <div className="absolute bottom-40 right-20 w-5 h-5 bg-indigo-500 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2.5s'}} />
                <div className="absolute bottom-60 left-32 w-3 h-3 bg-cyan-500 rounded-full opacity-35 animate-bounce" style={{animationDelay: '3s'}} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center py-32 min-h-screen">
                {/* Badge */}
                <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                    <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-black text-white shadow-lg">
                        🤖 Powered by Advanced AI
                    </span>
                </div>

                {/* Main Heading with Animation */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 max-w-5xl mb-8 leading-tight">
                    Transform Your
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                        Career Journey
                    </span>
                    with AI
                </h1>

                {/* Subheading */}
                <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                    Experience the future of job hunting. Our AI-powered platform discovers, matches, and applies to your perfect opportunities while you focus on what matters most.
                </p>

                {/* CTA Buttons with Enhanced Styling */}
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                    <Link
                        href="/signup"
                        className="group relative px-10 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-900 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Link>
                    <Link
                        href="/demo"
                        className="px-10 py-4 text-lg font-bold text-black bg-white/80 backdrop-blur border-2 border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        See It In Action
                    </Link>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl">
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-2">50K+</div>
                        <div className="text-sm text-gray-600 font-medium">Jobs Applied</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-2">95%</div>
                        <div className="text-sm text-gray-600 font-medium">Match Accuracy</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-2">24/7</div>
                        <div className="text-sm text-gray-600 font-medium">AI Working</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
