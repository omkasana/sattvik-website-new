import AboutSection from "@/components/Home/AboutSection";
import BrandsSection from "@/components/Home/BrandsSection";
import CTASection from "@/components/Home/CTASection";
import HomePageCarousel from "@/components/Home/HomePageCarousel";
import ServicesSection from "@/components/Home/ServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import WorkSection from "@/components/Home/WorkSection";
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
