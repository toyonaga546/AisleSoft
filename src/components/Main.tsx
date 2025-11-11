import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { StaffingSection } from "@/sections/StaffingSection";
import { CompanyInfoSection } from "@/sections/CompanyInfoSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  return (
    <main id="top" className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <StaffingSection />
      <CompanyInfoSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
};
