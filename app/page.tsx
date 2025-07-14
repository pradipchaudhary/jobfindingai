import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
