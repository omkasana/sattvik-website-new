// app/blogs/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link"; // ← Add this import

export default function BlogsPage() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const allBlogsRef = useRef<HTMLDivElement>(null);

  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const allBlogsInView = useInView(allBlogsRef, { once: true, amount: 0.3 });

  const featuredBlog = {
    id: 1,
    title: "The Future of Digital Out-of-Home Advertising in 2026",
    excerpt:
      "Explore how technology and data are revolutionizing outdoor advertising, creating more personalized and impactful campaigns than ever before.",
    image: "/about-main.jpg",
    category: "Industry Trends",
    author: "Om Kasana",
    date: "February 15, 2026",
    readTime: "8 min read",
  };

  const blogs = [
    {
      id: 2,
      title: "How to Maximize ROI on Billboard Campaigns",
      excerpt:
        "Strategic tips for choosing locations, designing compelling creatives, and measuring campaign success.",
      image: "/blog1.jpg",
      category: "Strategy",
      author: "Om Kasana",
      date: "February 12, 2026",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Metro Advertising: Reaching Urban Audiences Effectively",
      excerpt:
        "Why metro stations are prime real estate for brand visibility and how to leverage this medium.",
      image: "/blog2.jpg",
      category: "Case Study",
      author: "Om Kasana",
      date: "February 10, 2026",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "The Psychology Behind Effective Outdoor Advertising",
      excerpt:
        "Understanding consumer behavior and attention patterns to create ads that truly resonate.",
      image: "/about-main.jpg",
      category: "Research",
      author: "Om Kasana",
      date: "February 8, 2026",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "5 Trends Shaping OOH Advertising in India",
      excerpt:
        "From programmatic DOOH to interactive displays, discover what's transforming the landscape.",
      image: "/blog1.jpg",
      category: "Industry Trends",
      author: "Om Kasana",
      date: "February 5, 2026",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Airport Advertising: Capturing the Premium Traveler",
      excerpt:
        "Why airports offer unmatched opportunities for luxury and business-focused campaigns.",
      image: "/blog2.jpg",
      category: "Strategy",
      author: "Om Kasana",
      date: "February 3, 2026",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Section - Clean with subtle gradient */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-6 leading-tight">
              Insights & Ideas
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Thoughts on outdoor advertising, strategy, and the evolving
              landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog */}
      <section ref={featuredRef} className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href={`/blogs/${featuredBlog.id}`}>
            {" "}
            {/* ← Wrap with Link */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Large Image */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6 text-sm text-neutral-500">
                  <span className="uppercase tracking-wider">
                    {featuredBlog.category}
                  </span>
                  <span>—</span>
                  <span>{featuredBlog.date}</span>
                  <span>—</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {featuredBlog.title}
                </h2>

                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-3 text-neutral-700">
                  <span className="text-sm">By {featuredBlog.author}</span>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-neutral-200" />
      </div>

      {/* All Blogs - Magazine Style */}
      <section ref={allBlogsRef} className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={allBlogsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Recent Articles
            </h2>
          </motion.div>

          {/* Blog List */}
          <div className="space-y-16">
            {blogs.map((blog, index) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`}>
                {" "}
                {/* ← Wrap with Link */}
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  animate={allBlogsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid md:grid-cols-5 gap-8 group cursor-pointer pb-16 border-b border-neutral-200 last:border-0"
                >
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative h-[300px] overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-sm text-neutral-500">
                      <span className="uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <span>—</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-700">
                        By {blog.author}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ x: 5 }}
              className="text-neutral-900 font-medium text-lg group inline-flex items-center gap-3"
            >
              <span>View All Articles</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - Minimal */}
      <section className="py-32 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay in the Loop
            </h2>

            <p className="text-xl text-neutral-400 mb-12">
              Get insights delivered to your inbox weekly
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-sm text-neutral-500 mt-6">
              No spam. Just quality content.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </main>
  );
}
