
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SponsorLogoScroll from "@/components/SponsorLogoScroll";

export default async function Home() {
  return (
    <>
      <Hero />
      <SponsorLogoScroll />
      <Features />
      <FAQ />
    </>
  )
}