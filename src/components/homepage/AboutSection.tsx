// components/AboutSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About
              <br />
              Sattvik Living
            </h2>

            <p
              className="text-base md:text-lg text-slate-700 leading-relaxed font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At our agency, we firmly believe that the 'brand' must always come
              first. We hold the utmost respect for the truth and never allow
              opinions to cloud our judgment. Furthermore, we never compromise
              on emotions and beliefs for the sake of facts. Our approach for
              building greater engagement and connecting brands with people is
              grounded in being authentic, real, and using a touch of instinct.
              With this approach, we always get to the heart of any brand and
              connect it with its target audience.
            </p>
          </motion.div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <video
                src="/videos/about-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        {/* <motion.div
          className="max-w-4xl mx-auto lg:ml-auto lg:mr-0"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
            <p
              className="text-base md:text-lg text-slate-700 leading-relaxed font-light text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At Sattvik Living,{" "}
              <strong className="font-semibold text-slate-900">
                "We use Brand Strategy to give brands a voice and identity. By
                visually narrating their story and engaging with their audience
                uniformly across various channels, we create a compelling and
                engaging tale."
              </strong>
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* Premium Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>
    </section>
  );
}
