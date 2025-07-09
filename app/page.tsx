import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-neutral-800 mx-6 lg:mx-12" />
      <Features />
      <div className="border-t border-neutral-800 mx-6 lg:mx-12" />
      <CTA />
      <Footer />
    </>
  );
}
