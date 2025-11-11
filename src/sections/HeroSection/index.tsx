import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { ScrollIndicator } from "@/sections/HeroSection/components/ScrollIndicator";

export const HeroSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent flex justify-center min-h-[1000px] outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
};
