import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Pricing from "@/components/sections/Pricing";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
