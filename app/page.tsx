import Features from "@/components/Features";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center flex-col py-10">
        <Image src="/logo.jpg" width={200} height={300} alt="Logo, JobFindingAI" />
      </div>

      <div className="flex justify-center items-center flex-col  max-w-3xl mx-auto px-4 py-10">
        <p className="text-lg text-gray-600 mt-2"><strong>JobFindingAI</strong> is an AI-powered job search and application automation platform that helps candidates discover, optimize, and apply for the most relevant job opportunities — all in one place.</p>
      </div>

      <Features />
    </>
  )
}