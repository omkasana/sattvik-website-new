// components/WhyChooseUsSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    id: 1,
    number: "500+",
    label: "Campaigns Delivered",
    title: "Proven Excellence",
    description:
      "Over 500 successful campaigns across India's top cities, delivering measurable results for leading brands.",
  },
  {
    id: 2,
    number: "50+",
    label: "Cities Covered",
    title: "Nationwide Reach",
    description:
      "Strategic presence in 50+ cities with access to premium locations in metro stations, highways, and urban centers.",
  },
  {
    id: 3,
    number: "15+",
    label: "Years of Experience",
    title: "Industry Leaders",
    description:
      "Over 15 years of expertise in outdoor advertising, setting industry standards for creativity and execution.",
  },
  {
    id: 4,
    number: "100%",
    label: "Client Satisfaction",
    title: "Trusted Partner",
    description:
      "Dedicated account management and 24/7 support ensuring your campaigns run flawlessly from start to finish.",
  },
];

const REASONS = [
  {
    id: 1,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data-Driven Strategy",
    description:
      "Advanced analytics and market research to identify the most effective placements for your target audience.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Prime Locations",
    description:
      "Exclusive access to premium billboard and transit spaces in high-traffic urban centers and strategic positions.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Creative Excellence",
    description:
      "Award-winning design team creating visually stunning campaigns optimized for outdoor visibility and impact.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "End-to-End Service",
    description:
      "From concept to installation and maintenance, we handle every detail with meticulous attention and care.",
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Innovation First",
    description:
      "Pioneering digital displays, interactive installations, and cutting-edge technology for memorable experiences.",
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "Rigorous quality checks and regular monitoring to ensure your campaigns maintain the highest standards.",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Sattvik Living
          </h2>
          <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
          <p
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your trusted partner for impactful advertising campaigns
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-500 border-2 ${
                  hoveredFeature === feature.id
                    ? "border-slate-900 shadow-2xl -translate-y-2"
                    : "border-slate-200 shadow-md"
                }`}
              >
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.number}
                </div>
                <div
                  className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.label}
                </div>
                <h3
                  className="text-lg md:text-xl font-light text-slate-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm md:text-base text-slate-600 font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  {reason.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-light text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-slate-900 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
}
