// components/CTASection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-black/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow Text */}
          <span
            className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 font-light mb-6 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ready to Get Started?
          </span>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Create Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Extraordinary Together
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Transform your brand's visibility with our premium outdoor
            advertising solutions. Let's make your message impossible to miss.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary Button */}
            <a
              href="/contact"
              className="group relative px-10 py-4 md:px-12 md:py-5 bg-white text-slate-900 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 overflow-hidden"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Campaign
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
              </span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </a>

            {/* Secondary Button */}
            <a
              href="/portfolio"
              className="px-10 py-4 md:px-12 md:py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-base md:text-lg font-medium border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Our Work
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-white/70">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-base md:text-lg">+91 7777871717</span>
            </a>

            <a
              href="mailto:hello@sattvikliving.com"
              className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-base md:text-lg">
                info@sattvikliving.com
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>
    </section>
  );
}
