// app/our-work/page.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterRef = useRef<HTMLDivElement>(null);
  const popularRef = useRef<HTMLDivElement>(null);

  const filterInView = useInView(filterRef, { once: true, amount: 0.3 });
  const popularInView = useInView(popularRef, { once: true, amount: 0.3 });

  const categories = [
    "All",
    "Billboards",
    "Metro Stations",
    "Bus Shelters",
    "Airport",
    "Digital LED",
    "Mall",
  ];

  const projects = [
    {
      id: 1,
      title: "Highway Billboard Campaign",
      category: "Billboards",
      image: "/about-main.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Metro Station Branding",
      category: "Metro Stations",
      image: "/blog1.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Bus Shelter Network",
      category: "Bus Shelters",
      image: "/blog2.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Airport Terminal Display",
      category: "Airport",
      image: "/about-main.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Digital LED Tower",
      category: "Digital LED",
      image: "/blog1.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Shopping Mall Advertising",
      category: "Mall",
      image: "/blog2.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Premium Highway Placement",
      category: "Billboards",
      image: "/about-main.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Transit Hub Campaign",
      category: "Metro Stations",
      image: "/blog1.jpg",
      featured: false,
    },
    {
      id: 9,
      title: "City Bus Shelters",
      category: "Bus Shelters",
      image: "/blog2.jpg",
      featured: true,
    },
    {
      id: 10,
      title: "Airport Departure Hall",
      category: "Airport",
      image: "/about-main.jpg",
      featured: false,
    },
    {
      id: 11,
      title: "Times Square LED",
      category: "Digital LED",
      image: "/blog1.jpg",
      featured: true,
    },
    {
      id: 12,
      title: "Retail Complex Branding",
      category: "Mall",
      image: "/blog2.jpg",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const popularProjects = projects.filter((project) => project.featured);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Our Work
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Discover our latest campaigns across outdoor advertising platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular/Featured Section */}
      <section ref={popularRef} className="py-20 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={popularInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <p className="uppercase text-xs tracking-[0.3em] text-gray-400 font-medium">
                Popular Campaigns
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Featured <span className="text-red-500">Work</span>
            </h2>
          </motion.div>

          {/* Featured Grid - Different Sizes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProjects.slice(0, 5).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={popularInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-zinc-100 ${index === 0 ? "h-[600px]" : "h-[350px]"}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-red-500 text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Work with Filters */}
      <section ref={filterRef} className="py-20 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={filterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <p className="uppercase text-xs tracking-[0.3em] text-gray-400 font-medium">
                Explore By Category
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              All <span className="text-red-500">Campaigns</span>
            </h2>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-black text-white shadow-lg"
                      : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Filtered Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden bg-zinc-100 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Hover Content */}
                </div>

                {/* Project Info */}
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-zinc-100 text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Light with subtle dark */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">2000+</div>
              <div className="text-gray-600">Campaigns Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Ready to Create Your
              <br />
              <span className="text-red-500">Success Story?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can elevate your brand with strategic outdoor
              advertising.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-red-500 text-white rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-2xl"
            >
              Start Your Campaign
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </main>
  );
}
