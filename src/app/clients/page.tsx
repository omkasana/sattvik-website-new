// app/clients/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ClientsPage() {
  const logoRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const logoInView = useInView(logoRef, { once: true, amount: 0.3 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Sample client logos - replace with actual logos
  const clients = [
    { name: "Client 1", logo: "/blog1.jpg" },
    { name: "Client 2", logo: "/blog2.jpg" },
    { name: "Client 3", logo: "/about-main.jpg" },
    { name: "Client 4", logo: "/blog1.jpg" },
    { name: "Client 5", logo: "/blog2.jpg" },
    { name: "Client 6", logo: "/about-main.jpg" },
    { name: "Client 7", logo: "/blog1.jpg" },
    { name: "Client 8", logo: "/blog2.jpg" },
    { name: "Client 9", logo: "/about-main.jpg" },
    { name: "Client 10", logo: "/blog1.jpg" },
    { name: "Client 11", logo: "/blog2.jpg" },
    { name: "Client 12", logo: "/about-main.jpg" },
  ];

  const testimonials = [
    {
      quote:
        "Their strategic placement and creative execution exceeded our expectations. The campaign delivered 3x the projected impressions and significantly boosted brand visibility.",
      author: "Rajesh Kumar",
      position: "Marketing Director",
      company: "TechVision India",
      initial: "RK",
    },
    {
      quote:
        "Working with this team transformed how we approach outdoor advertising. Their expertise in high-traffic locations and data-driven insights made all the difference.",
      author: "Priya Sharma",
      position: "Brand Manager",
      company: "Lifestyle Retail Co",
      initial: "PS",
    },
    {
      quote:
        "Exceptional service from concept to execution. They handled everything seamlessly and our ROI was beyond what we anticipated. Highly recommend for any major campaign.",
      author: "Amit Patel",
      position: "CEO",
      company: "Urban Developers",
      initial: "AP",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
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

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Our Clients
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Trusted by leading brands across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section ref={logoRef} className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={logoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              Trusted Partners
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Brands We've <span className="text-red-500">Empowered</span>
            </h2>
          </motion.div>

          {/* Logo Grid - Clean & Minimal */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={logoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative aspect-square border border-gray-100 hover:border-gray-200 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar Below Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={logoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32 grid md:grid-cols-4 gap-16 text-center"
          >
            <div className="border-l-2 border-red-500 pl-6 text-left">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Brands Served</div>
            </div>
            <div className="border-l-2 border-red-500 pl-6 text-left">
              <div className="text-5xl md:text-6xl font-bold mb-2">2000+</div>
              <div className="text-gray-600">Campaigns Delivered</div>
            </div>
            <div className="border-l-2 border-red-500 pl-6 text-left">
              <div className="text-5xl md:text-6xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="border-l-2 border-red-500 pl-6 text-left">
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Minimal & Clean */}
      <section ref={testimonialRef} className="py-32 px-6 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase text-xs tracking-[0.3em] text-gray-400 mb-6 font-medium">
              Client Stories
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Clients <span className="text-red-500">Say</span>
            </h2>
          </motion.div>

          {/* Testimonials - Staggered Layout */}
          <div className="space-y-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-16 items-center`}
              >
                {/* Quote Side */}
                <div className="flex-1">
                  <div className="mb-8">
                    <svg
                      className="w-16 h-16 text-red-500 opacity-30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800 mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="h-px w-16 bg-red-500 mb-6" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Avatar Side */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-2xl">
                    {testimonial.initial}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Quote Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl font-light leading-relaxed mb-12">
              "Success is built on partnerships that{" "}
              <span className="text-red-500 font-normal">
                trust, deliver, and inspire.
              </span>
              "
            </p>
            <div className="h-px w-32 bg-red-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
              Ready to Join Our
              <br />
              <span className="text-red-500">Success Stories?</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Let's create impactful campaigns that drive results and elevate
              your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-red-500 transition-colors shadow-xl"
              >
                Start Your Campaign
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border-2 border-black text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </main>
  );
}
