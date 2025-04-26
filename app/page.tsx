import CtaSection from "@/components/home/ctasection";
import Demosection from "@/components/home/demosection";
import HeroSection from "@/components/home/herosection";

import HowItWorkSection from "@/components/home/howItWorkSection";
import PricingSectionDemo from "@/components/home/pricing";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Demosection />
      <HowItWorkSection />
      <PricingSectionDemo />
      <CtaSection />
    </div>
  );
}
