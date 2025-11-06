
import HeroSection from "@/app/components/sections/HeroSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import PricingSection from "@/app/components/sections/PricingSection";
import SliderSection from "@/app/components/sections/SliderSection";
import CtaSection from "@/app/components/sections/CtaSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <SliderSection />
      <CtaSection />
    </div>
  )
}
