// app/terms-and-conditions/page.tsx
"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Trendy Gradient Background */}
      <div className="fixed inset-0 -z-10">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl py-20 md:py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Terms & Conditions
          </h1>
          <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />
          <p
            className="text-lg md:text-xl text-slate-600 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last updated: February 10, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            {/* Agreement to Terms */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Agreement to Terms
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                By accessing or using the services provided by Sattvik Living
                Private Limited ("Company," "we," "our," or "us"), you agree to
                be bound by these Terms and Conditions. If you disagree with any
                part of these terms, you may not access our services.
              </p>
            </div>

            {/* Services Provided */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Services Provided
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sattvik Living provides outdoor advertising solutions including
                but not limited to:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>Billboard advertising placement and management</li>
                <li>Transit advertising (metro, bus, airport)</li>
                <li>Digital display advertising</li>
                <li>Campaign design and creative services</li>
                <li>Analytics and performance reporting</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Payment Terms
              </h2>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Pricing:
                  </strong>{" "}
                  All prices are quoted in Indian Rupees (INR) unless otherwise
                  specified
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Payment Schedule:
                  </strong>{" "}
                  50% advance payment upon order confirmation, 50% before
                  campaign launch
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Late Payments:
                  </strong>{" "}
                  Interest at 2% per month may be charged on overdue amounts
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Taxes:
                  </strong>{" "}
                  All prices are exclusive of applicable taxes (GST, etc.)
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Refunds:
                  </strong>{" "}
                  No refunds after campaign materials are printed or installed
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                For questions about these Terms and Conditions, please contact
                us:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Email:
                  </strong>{" "}
                  legal@sattvikliving.com
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Phone:
                  </strong>{" "}
                  +91 123 456 7890
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Address:
                  </strong>{" "}
                  Sattvik Living Private Limited, [Your Address]
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
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
