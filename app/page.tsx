export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
        Welcome to <span className="text-blue-600">JobFindingAI</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-xl">
        Discover top jobs and apply effortlessly with the power of AI.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </main>
  );
}
