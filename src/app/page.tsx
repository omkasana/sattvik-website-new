import AboutSection from "@/components/homepage/AboutSection";
import BrandsSection from "@/components/homepage/BrandsSection";
import CTASection from "@/components/homepage/CTASection";
import HomePageCarousel from "@/components/homepage/HomePageCarousel";
import ServicesSection from "@/components/homepage/ServicesSection";
import WhyChooseUsSection from "@/components/homepage/WhyChooseUsSection";
import WorkSection from "@/components/homepage/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <BrandsSection />
      <CTASection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </>
  );
}
