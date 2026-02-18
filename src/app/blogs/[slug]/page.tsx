// app/blogs/[slug]/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function BlogDetailPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.3 });

  // Sample blog data - in real app, fetch based on slug
  const blog = {
    title: "The Future of Digital Out-of-Home Advertising in 2026",
    excerpt:
      "Explore how technology and data are revolutionizing outdoor advertising, creating more personalized and impactful campaigns than ever before.",
    image: "/about-main.jpg",
    category: "Industry Trends",
    author: "Om Kasana",
    date: "February 15, 2026",
    readTime: "8 min read",
  };

  const relatedBlogs = [
    {
      id: 2,
      title: "How to Maximize ROI on Billboard Campaigns",
      image: "/blog1.jpg",
      category: "Strategy",
      date: "February 12, 2026",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Metro Advertising: Reaching Urban Audiences",
      image: "/blog2.jpg",
      category: "Case Study",
      date: "February 10, 2026",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "The Psychology Behind Outdoor Advertising",
      image: "/about-main.jpg",
      category: "Research",
      date: "February 8, 2026",
      readTime: "7 min read",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header with Back Button */}
      <div className="border-b border-gray-200 bg-white pt-18">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/blogs">
            <motion.div
              whileHover={{ x: -3 }}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">All Articles</span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category & Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">
              {blog.category}
            </span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {blog.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-lg font-bold">
              {blog.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{blog.author}</div>
              <div className="text-sm text-gray-500">Author</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h2>The Digital Revolution in OOH</h2>
          <p>
            The outdoor advertising landscape is undergoing a dramatic
            transformation. Digital Out-of-Home (DOOH) technology has
            revolutionized how brands connect with audiences in public spaces,
            offering unprecedented flexibility, targeting capabilities, and
            measurable results.
          </p>

          <p>
            In 2026, we're witnessing the convergence of artificial
            intelligence, real-time data analytics, and programmatic buying
            platforms that enable advertisers to deliver the right message to
            the right audience at precisely the right moment.
          </p>

          <h3>Key Technological Advances</h3>
          <p>
            Modern DOOH networks are equipped with sophisticated sensors and
            cameras that can analyze audience demographics, traffic patterns,
            and environmental conditions in real-time. This data feeds into
            AI-powered systems that optimize ad delivery for maximum impact and
            engagement.
          </p>

          <p>
            Programmatic DOOH has emerged as a game-changer, allowing
            advertisers to buy and optimize campaigns in real-time across
            multiple screens and locations. This automation brings the precision
            and efficiency of digital advertising to the physical world.
          </p>

          <h3>Personalization at Scale</h3>
          <p>
            One of the most exciting developments is the ability to deliver
            personalized content at scale. Dynamic creative optimization enables
            brands to tailor messages based on factors like weather, time of
            day, local events, and even nearby traffic conditions.
          </p>

          <blockquote>
            "The future of outdoor advertising isn't just digital—it's
            intelligent, responsive, and deeply integrated with the broader
            marketing ecosystem."
          </blockquote>

          <h3>Measurable Impact</h3>
          <p>
            Gone are the days when outdoor advertising impact was difficult to
            measure. Today's DOOH platforms provide detailed analytics on
            impressions, engagement, foot traffic attribution, and even
            conversion tracking through mobile device IDs.
          </p>

          <p>
            Brands can now prove ROI with the same rigor as digital channels,
            making outdoor advertising a more attractive investment for
            marketers focused on data-driven decision making.
          </p>

          <h2>Looking Ahead</h2>
          <p>
            As we move forward, the line between digital and physical
            advertising will continue to blur. Augmented reality integrations,
            interactive displays, and seamless connections with mobile devices
            will create immersive brand experiences that were previously
            impossible.
          </p>

          <p>
            The outdoor advertising industry is not just adapting to the digital
            age—it's leading innovation in how brands communicate with consumers
            in public spaces. Those who embrace these technologies and
            strategies will find themselves at the forefront of a transformed
            landscape.
          </p>
        </motion.div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #DOOH
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #DigitalAdvertising
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #OutdoorMedia
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #Marketing
            </span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold">
              Share this article:
            </span>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section ref={relatedRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-10"
          >
            Related Articles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blogs/${article.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-gray-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Styles for Prose */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .prose h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .prose p {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: #374151;
        }

        .prose blockquote {
          border-left: 4px solid #111827;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-size: 1.25rem;
          font-style: italic;
          color: #4b5563;
        }

        .prose ul,
        .prose ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
          color: #374151;
        }
      `}</style>
    </main>
  );
}
