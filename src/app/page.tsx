import AboutSection from "@/components/home/AboutSection";
import BrandsSection from "@/components/home/BrandsSection";
import CTASection from "@/components/home/CTASection";
import HomePageCarousel from "@/components/home/HomePageCarousel";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import WorkSection from "@/components/home/WorkSection";
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
