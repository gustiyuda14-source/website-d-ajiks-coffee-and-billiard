import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { AmbianceGallery } from "@/components/sections/AmbianceGallery";
import { MenuHighlight } from "@/components/sections/MenuHighlight";
import { GrabFoodCta } from "@/components/sections/GrabFoodCta";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ValueProps } from "@/components/sections/ValueProps";
import { BilliardPricing } from "@/components/sections/BilliardPricing";
import { LocationCta } from "@/components/sections/LocationCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AmbianceGallery />
      <MenuHighlight />
      <GrabFoodCta />
      <CommunitySection />
      <ValueProps />
      <BilliardPricing />
      <LocationCta />
    </>
  );
}
