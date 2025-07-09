import Image from 'next/image'


export default function Hero() {



  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12">
      <div className="w-full lg:w-1/2 z-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Find Your <span className="text-indigo-500">Dream Job</span> with AI
        </h1>
        <p className="text-neutral-400 max-w-lg">
          JobFindingAI matches your skills to market-leading positions, optimizes your resume, and even applies for you—so you can focus on what matters.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium text-sm shadow-lg">
            Get Started for Free
          </button>
          <button className="px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors text-sm font-medium">
            See Demo
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
        <Image
          src="/thmubnail.png"
          alt="Dashboard preview"
          width={640}
          height={420}
          className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
        />
      
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-fuchsia-500/5 to-transparent blur-2xl" />
      </div>
    </section>
  )
}
