import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <Image src="/logo.jpg" width={300} height={300} alt="Logo, JobFindingAI" />
      </div>
    </>
  )
}