// components/ServicesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    id: 1,
    title: "Billboards",
    image: "/images/services/billboards.jpg",
  },
  {
    id: 2,
    title: "Transit Ads",
    image: "/images/services/transit.jpg",
  },
  {
    id: 3,
    title: "Street Furniture",
    image: "/images/services/street-furniture.jpg",
  },
  {
    id: 4,
    title: "Digital Displays",
    image: "/images/services/digital.jpg",
  },
  {
    id: 5,
    title: "Airport Advertising",
    image: "/images/services/airport.jpg",
  },
  {
    id: 6,
    title: "Metro Advertising",
    image: "/images/services/metro.jpg",
  },
  {
    id: 7,
    title: "Bus Shelter Ads",
    image: "/images/services/bus-shelter.jpg",
  },
  {
    id: 8,
    title: "Highway Billboards",
    image: "/images/services/highway.jpg",
  },
  {
    id: 9,
    title: "Mall Advertising",
    image: "/images/services/mall.jpg",
    hideOnMobile: true,
  },
  {
    id: 10,
    title: "Cinema Advertising",
    image: "/images/services/cinema.jpg",
    hideOnMobile: true,
  },
  {
    id: 11,
    title: "Stadium Advertising",
    image: "/images/services/stadium.jpg",
    hideOnMobile: true,
  },
  {
    id: 12,
    title: "Mobile Billboards",
    image: "/images/services/mobile.jpg",
    hideOnMobile: true,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h2>
          <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto" />
        </motion.div>

        {/* Services Grid - 4x3 on desktop, 2x4 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 ">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                service.hideOnMobile ? "hidden md:block" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 " />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  className="text-lg md:text-xl font-light text-black"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>

                {/* Arrow Icon - appears on hover */}
                <div className="mt-2 flex items-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Services Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore All Services
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
}
