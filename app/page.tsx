import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
