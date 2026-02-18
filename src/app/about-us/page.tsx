// app/about-us/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutUsPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const stats = [
    { number: "10k+", label: "Completed Projects" },
    { number: "15k", label: "Satisfied Customers" },
    { number: "10k+", label: "Years of Mastery" },
    { number: "45+", label: "Worldwide Honors" },
  ];

  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero Section - Dark with Pattern */}
      <section className="relative h-[50vh] md:h-[60vh] bg-black overflow-hidden">
        {/* Curved Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
            {/* Curved lines pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              preserveAspectRatio="none"
              viewBox="0 0 1200 400"
            >
              <path
                d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z"
                fill="currentColor"
                className="text-zinc-800"
              />
              <path
                d="M0,150 Q300,100 600,150 T1200,150 L1200,0 L0,0 Z"
                fill="currentColor"
                className="text-zinc-800/50"
              />
              <path
                d="M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z"
                fill="currentColor"
                className="text-zinc-800/30"
              />
              <path
                d="M0,250 Q300,200 600,250 T1200,250 L1200,0 L0,0 Z"
                fill="currentColor"
                className="text-zinc-800/20"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-6">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Your Vision Our Expertise Your Success Get Noticed Generate{" "}
              <span className="text-red-500">Leads Dominate.</span>
            </h2>

            {/* Large Image */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <img
                src="/about-main.jpg"
                alt="Team Working"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Small Top Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <img
                  src="/blog1.jpg"
                  alt="Blog 1"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full mr-2">
                    Tech Blog
                  </span>
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
                    Trends
                  </span>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <img
                  src="/blog2.jpg"
                  alt="Blog 2"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full mr-2">
                    Tech Blog
                  </span>
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
                    Trends
                  </span>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-400 leading-relaxed mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              nam!lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Inventore sint vitae iste repellendus ratione quae dolore
              commodi cum quo dolor.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
              <div>
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-gray-400 text-sm">Completed Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">15k</h3>
                <p className="text-gray-400 text-sm">Satisfied Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-gray-400 text-sm">Years Of Mastery</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">45+</h3>
                <p className="text-gray-400 text-sm">Worldwide Honors</p>
              </div>
            </div>

            {/* Watch Intro */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-sm tracking-wide uppercase">
                Watch Intro
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Screen */}
      <section ref={missionRef} className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Mission - Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative bg-black text-white p-12 md:p-20 flex flex-col justify-center"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />

              <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-8 font-medium">
                Our Mission
              </p>

              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Empowering
                <br />
                <span className="text-red-500">Digital Success</span>
              </h3>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                We transform ambitious visions into digital realities that drive
                measurable growth. Through innovation, expertise, and unwavering
                commitment, we help businesses dominate their markets and
                achieve extraordinary results.
              </p>

              <div className="mt-12 h-px w-24 bg-red-500" />
            </motion.div>

            {/* Vision - Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative bg-zinc-50 text-black p-12 md:p-20 flex flex-col justify-center"
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

              <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-8 font-medium">
                Our Vision
              </p>

              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Redefining
                <br />
                <span className="text-red-500">Excellence</span>
              </h3>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                To set the global standard for digital innovation—where every
                project we undertake becomes a benchmark of quality, creativity,
                and strategic impact that inspires industries worldwide.
              </p>

              <div className="mt-12 h-px w-24 bg-black" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Horizontal Scroll Feel */}
      <section ref={valuesRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              What Defines Us
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Core <span className="text-red-500">Values</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group border-t border-gray-200 py-12 hover:bg-zinc-50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                <div className="flex items-center gap-8">
                  <span className="text-6xl md:text-8xl font-bold text-gray-100 group-hover:text-red-50 transition-colors">
                    01
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      Innovation First
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                      Pushing boundaries with cutting-edge solutions that drive
                      real business results and create competitive advantages in
                      the digital landscape.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-16 h-px bg-red-500 group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group border-t border-gray-200 py-12 hover:bg-zinc-50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                <div className="flex items-center gap-8">
                  <span className="text-6xl md:text-8xl font-bold text-gray-100 group-hover:text-red-50 transition-colors">
                    02
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      Client Success
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                      Your growth is our mission. We measure success by the
                      tangible impact we create for your business and the
                      lasting partnerships we build.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-16 h-px bg-red-500 group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group border-t border-gray-200 py-12 hover:bg-zinc-50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                <div className="flex items-center gap-8">
                  <span className="text-6xl md:text-8xl font-bold text-gray-100 group-hover:text-red-50 transition-colors">
                    03
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      Quality Obsessed
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                      Excellence isn't optional—it's embedded in every line of
                      code, every pixel, and every strategic decision we make
                      for your success.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-16 h-px bg-red-500 group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group border-t border-b border-gray-200 py-12 hover:bg-zinc-50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                <div className="flex items-center gap-8">
                  <span className="text-6xl md:text-8xl font-bold text-gray-100 group-hover:text-red-50 transition-colors">
                    04
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      Transparent Partnership
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                      Open communication, honest timelines, and collaborative
                      relationships built on trust, integrity, and mutual
                      respect at every stage.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-16 h-px bg-red-500 group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Vertical */}
      <section
        ref={journeyRef}
        className="py-32 px-6 bg-black text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              How We Work
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Our <span className="text-red-500">Approach</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />

            <div className="space-y-32">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative pl-24 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
              >
                <div className="md:text-right">
                  <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    01
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                    Discovery
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Deep dive into your vision, goals, and challenges to
                    understand the foundation of your success.
                  </p>
                </div>
                <div className="hidden md:block" />

                {/* Dot */}
                <div className="absolute left-[1.875rem] md:left-1/2 top-8 md:top-12 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative pl-24 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
              >
                <div className="hidden md:block" />
                <div>
                  <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    02
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                    Strategy
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Crafting a comprehensive roadmap tailored to your unique
                    needs and market opportunities.
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-[1.875rem] md:left-1/2 top-8 md:top-12 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative pl-24 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
              >
                <div className="md:text-right">
                  <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    03
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                    Execution
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Bringing ideas to life with precision, creativity, and
                    technical excellence that exceeds expectations.
                  </p>
                </div>
                <div className="hidden md:block" />

                {/* Dot */}
                <div className="absolute left-[1.875rem] md:left-1/2 top-8 md:top-12 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
              </motion.div>

              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative pl-24 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
              >
                <div className="hidden md:block" />
                <div>
                  <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    04
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                    Growth
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Continuous optimization and strategic scaling to ensure
                    lasting success and market dominance.
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-[1.875rem] md:left-1/2 top-8 md:top-12 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Full Width Image with Overlay Text */}
      {/* <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about-main.jpg"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative h-full flex items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-white"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-300 mb-6 font-medium">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Built on Excellence,
              <br />
              <span className="text-red-500">Driven by Results</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Over 10,000 successful projects delivered with measurable
                    ROI and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Elite professionals with cutting-edge skills and
                    industry-recognized expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    End-to-End Support
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    From consultation to post-launch optimization, we're with
                    you every step.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-red-500 text-white rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-2xl"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      {/* Latest Work Showcase - Add this before testimonials */}
      {/* Latest Work Showcase - Clean & Elegant */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              Our Portfolio
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="text-red-500">Campaigns</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Strategic outdoor advertising solutions that capture attention and
              drive results.
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="space-y-16">
            {/* Row 1 - Large Left, Small Right */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:col-span-3 group cursor-pointer"
              >
                <div className="relative h-[450px] md:h-[550px] rounded-lg overflow-hidden">
                  <img
                    src="/about-main.jpg"
                    alt="Billboard Campaign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      National Highway Campaign
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      Premium billboard placements across major expressways
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-2 space-y-8"
              >
                <div className="group cursor-pointer">
                  <div className="relative h-[260px] rounded-lg overflow-hidden">
                    <img
                      src="/blog1.jpg"
                      alt="Metro Advertising"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">
                          Transit Domination
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="relative h-[260px] rounded-lg overflow-hidden">
                    <img
                      src="/blog2.jpg"
                      alt="Airport Media"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Premium Terminal</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2 - Three Equal Columns */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <img
                    src="/blog1.jpg"
                    alt="Bus Shelter Ads"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Bus Shelter Network
                    </h3>
                    <p className="text-gray-500 text-sm">City Wide Coverage</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <svg
                      className="w-4 h-4 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <img
                    src="/blog2.jpg"
                    alt="Mall Advertising"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Shopping Districts
                    </h3>
                    <p className="text-gray-500 text-sm">Retail Spaces</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <svg
                      className="w-4 h-4 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <img
                    src="/about-main.jpg"
                    alt="Digital LED Screens"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Digital LED Towers
                    </h3>
                    <p className="text-gray-500 text-sm">High Impact Media</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <svg
                      className="w-4 h-4 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3 - Small Left, Large Right */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 space-y-8"
              >
                <div className="group cursor-pointer">
                  <div className="relative h-[260px] rounded-lg overflow-hidden">
                    <img
                      src="/blog1.jpg"
                      alt="Street Furniture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Urban Presence</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="relative h-[260px] rounded-lg overflow-hidden">
                    <img
                      src="/blog2.jpg"
                      alt="Building Wraps"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Large Format</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-3 group cursor-pointer"
              >
                <div className="relative h-[450px] md:h-[550px] rounded-lg overflow-hidden">
                  <img
                    src="/about-main.jpg"
                    alt="Landmark Billboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      City Center Spectaculars
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      Premium positioning on landmark buildings and high-traffic
                      zones
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-3 text-gray-600 hover:text-black transition-colors group cursor-pointer">
              <span className="text-lg font-medium">View All Campaigns</span>
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300">
                <svg
                  className="w-5 h-5 group-hover:text-white transition-colors"
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              Client Stories
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Clients <span className="text-red-500">Say</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Real stories from real clients who transformed their business with
              our solutions.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-500 border border-zinc-800 hover:border-red-500/30">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-red-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Review */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "Working with this team was transformative. They didn't just
                  build a website—they built a digital experience that resonated
                  with our audience and drove real results."
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">John Doe</h4>
                    <p className="text-gray-400 text-sm">
                      CEO, Tech Innovations
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-500 border border-zinc-800 hover:border-red-500/30">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-red-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "The attention to detail and commitment to excellence was
                  evident from day one. Our ROI increased by 250% within the
                  first quarter after launch. Absolutely phenomenal!"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl font-bold">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Sarah Martinez
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Founder, Digital Ventures
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-500 border border-zinc-800 hover:border-red-500/30">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-red-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "Professional, creative, and results-driven. They took our
                  vision and elevated it beyond what we imagined. The
                  partnership has been invaluable to our growth."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl font-bold">
                    RC
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Robert Chen
                    </h4>
                    <p className="text-gray-400 text-sm">
                      CMO, Global Brands Inc
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                4.9/5
              </div>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                500+
              </div>
              <p className="text-gray-400 text-sm">Client Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                98%
              </div>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15k+
              </div>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Minimal & Bold */}
      <section ref={ctaRef} className="py-32 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12">
              Ready to Transform
              <br />
              Your <span className="text-red-500">Vision?</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Your success story
              starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-black text-white rounded-full font-bold text-lg transition-colors shadow-xl"
              >
                Get Started Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border-2 border-black text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors"
              >
                View Our Work
              </motion.button>
            </div>

            {/* Decorative Line */}
            <div className="mt-20 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gray-300" />
              <span className="text-gray-400 text-sm tracking-widest">
                LET'S CONNECT
              </span>
              <div className="h-px w-24 bg-gray-300" />
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");
      `}</style>
    </main>
  );
}
