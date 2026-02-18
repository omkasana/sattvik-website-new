// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Trendy Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-4 md:mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get In Touch
          </h1>
          <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-4 md:mb-6" />
          <p
            className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto px-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Let's discuss how we can elevate your brand's visibility
          </p>
        </motion.div>

        {/* Quick Contact Buttons - Mobile Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Call Button */}
          <a
            href="tel:+917777871717"
            className="group flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
              <svg
                className="w-6 h-6"
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
            </div>
            <div className="text-left min-w-0">
              <p
                className="text-xs text-slate-500 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Call Us
              </p>
              <p
                className="text-sm md:text-base text-slate-900 font-medium truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                +91 7777871717
              </p>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917777871717"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p
                className="text-xs text-slate-500 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                WhatsApp
              </p>
              <p
                className="text-sm md:text-base text-slate-900 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Chat Now
              </p>
            </div>
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@sattvikliving.com"
            className="group flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
              <svg
                className="w-6 h-6"
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
            </div>
            <div className="text-left min-w-0">
              <p
                className="text-xs text-slate-500 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Email Us
              </p>
              <p
                className="text-sm md:text-base text-slate-900 font-medium truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                info@sattvikliving.com
              </p>
            </div>
          </a>
        </motion.div>

        {/* Map & Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            {/* Map */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-3 md:p-4 shadow-xl border border-white/20 mb-6">
              <div className="w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2023359098544!2d77.37751631508067!3d28.628355382421623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1644000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>

            {/* Address Info */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
              <h3
                className="text-2xl md:text-3xl font-light text-slate-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Visit Our Office
              </h3>
              <div
                className="space-y-4 text-slate-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Address</p>
                    <p className="text-sm md:text-base font-light">
                      Sattvik Living Pvt. Ltd.
                      <br />
                      Ghaziabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">
                      Business Hours
                    </p>
                    <p className="text-sm md:text-base font-light">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border border-white/20">
              <h3
                className="text-2xl md:text-4xl font-light text-slate-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-900 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 font-light text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-900 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 font-light text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-900 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 font-light text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-900 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 font-light text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 font-light resize-none text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Tell us about your advertising needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg font-medium flex items-center justify-center gap-3 group"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send Message
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframes for blob animation */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </main>
  );
}
