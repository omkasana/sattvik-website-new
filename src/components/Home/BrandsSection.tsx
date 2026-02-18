// components/BrandsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Your actual brand logos
const BRAND_LOGOS = [
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
  { name: "iPhone", logo: "/logos/iphone-logo.png" },
  { name: "Audi", logo: "/logos/audi-logo.png" },
];

export default function BrandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Duplicate brands array for seamless infinite scroll
  const duplicatedBrands = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trusted by Leading Brands
          </h2>
          <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />
          <p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We've partnered with industry leaders to create impactful
            out-of-home advertising campaigns
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* First Row - Scroll Left */}
          <div className="overflow-hidden mb-6 md:mb-8">
            <motion.div
              className="flex gap-8 md:gap-10 lg:gap-12 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-[120px] md:w-[160px] lg:w-[200px] h-[60px] md:h-[80px] lg:h-[100px] group cursor-pointer"
                >
                  <div className="relative w-full h-full md:grayscale md:hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Scroll Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-10 lg:gap-12 items-center"
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-[120px] md:w-[160px] lg:w-[200px] h-[60px] md:h-[80px] lg:h-[100px] group cursor-pointer"
                >
                  <div className="relative w-full h-full md:grayscale md:hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats/Text (Optional) */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="text-slate-500 text-sm md:text-base font-light tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join 100+ brands that trust Sattvik Living for their advertising
            needs
          </p>
        </motion.div>
      </div>

      {/* Premium Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
}
