// components/HomePageCarousel.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const OOH_PHRASES = [
  "Transforming Urban Spaces",
  "Your Brand, Everywhere",
  "OOH Advertising Excellence",
  "Connecting Brands to Streets",
  "Premium Out-of-Home Solutions",
];

export default function HomePageCarousel() {
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Typewriter effect logic
  useEffect(() => {
    const currentPhrase = OOH_PHRASES[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing
      typewriterTimeoutRef.current = setTimeout(() => {
        setTypewriterText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      typewriterTimeoutRef.current = setTimeout(() => {
        setTypewriterText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      // Switch phase
      if (!isDeleting) {
        typewriterTimeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % OOH_PHRASES.length);
        setCharIndex(0);
      }
    }

    return () => {
      if (typewriterTimeoutRef.current) {
        clearTimeout(typewriterTimeoutRef.current);
      }
    };
  }, [phraseIndex, charIndex, isDeleting]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="videos/homepage-video.mp4" //public/videos/homepage-video.mp4
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />

        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 md:px-12 text-center">
        {/* Main Heading */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-3 md:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sattvik Living
          </h1>
          <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto" />
        </motion.div>

        {/* Typewriter Section */}
        <motion.div
          className="relative mb-8 md:mb-12 min-h-[120px] md:min-h-[160px] flex flex-col items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div
            className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] uppercase text-white/70 mb-4 md:mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We Create
          </div>
          <div className="relative">
            <div
              className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white min-h-[60px] md:min-h-[80px] flex items-center justify-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {typewriterText}
              <span className="inline-block w-[3px] h-10 md:h-16 bg-white/90 animate-pulse ml-2" />
            </div>
          </div>
        </motion.div>

        {/* Company Tagline */}
        <motion.p
          className="text-base md:text-xl lg:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed tracking-wide"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Premium Out-of-Home Advertising Solutions for Modern Brands
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Premium Fonts - Add to layout or _document */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
}
