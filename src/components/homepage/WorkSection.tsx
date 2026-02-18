// components/WorkSection.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CATEGORIES = ["All", "Billboards", "Transit", "Digital", "Experiential"];

const PROJECTS = [
  {
    id: 1,
    category: "Billboards",
    image: "/images/work/project-1.jpg",
    title: "Urban Billboard Campaign",
    brand: "Nike",
    location: "Mumbai",
  },
  {
    id: 2,
    category: "Transit",
    image: "/images/work/project-2.jpg",
    title: "Metro Station Takeover",
    brand: "Apple",
    location: "Delhi",
  },
  {
    id: 3,
    category: "Digital",
    image: "/images/work/project-3.jpg",
    title: "LED Display Campaign",
    brand: "Samsung",
    location: "Bangalore",
  },
  {
    id: 4,
    category: "Experiential",
    image: "/images/work/project-4.jpg",
    title: "Interactive Installation",
    brand: "Coca-Cola",
    location: "Pune",
  },
  {
    id: 5,
    category: "Billboards",
    image: "/images/work/project-5.jpg",
    title: "Highway Billboard Series",
    brand: "Audi",
    location: "Gurgaon",
  },
  {
    id: 6,
    category: "Digital",
    image: "/images/work/project-6.jpg",
    title: "Digital Display",
    brand: "Adidas",
    location: "New York",
  },
];

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Work
          </h2>
          <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
          <p
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Transforming spaces into powerful brand experiences
          </p>
        </motion.div>

        {/* Category Filter*/}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-xl"
                  : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/*Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* aspect ratio for staggered*/}
                <div
                  className={`relative ${
                    index % 3 === 0
                      ? "aspect-[4/5]"
                      : index % 3 === 1
                        ? "aspect-[3/4]"
                        : "aspect-square"
                  } overflow-hidden`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className="text-xs tracking-[0.3em] uppercase text-white/70 font-light mb-2 block"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-light text-white mb-3 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm md:text-base font-light">
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.brand}
                      </span>
                      <span className="w-1 h-1 bg-white/60 rounded-full" />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-lg font-medium transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View All Projects
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

      {/* Premium Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
}
