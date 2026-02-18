// app/privacy-policy/page.tsx
"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Trendy Gradient Background */}
      <div className="fixed inset-0 -z-10">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />

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
            Privacy Policy
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
            {/* Introduction */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Introduction
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                At Sattvik Living ("we," "our," or "us"), we respect your
                privacy and are committed to protecting your personal data. This
                privacy policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Information We Collect
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We may collect the following types of information:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Personal Information:
                  </strong>{" "}
                  Name, email address, phone number, company name, and job title
                  when you contact us or request our services.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Usage Data:
                  </strong>{" "}
                  Information about how you interact with our website, including
                  IP address, browser type, pages visited, and time spent on
                  pages.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Cookies:
                  </strong>{" "}
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Business Information:
                  </strong>{" "}
                  Campaign preferences, advertising objectives, and budget
                  information when you engage our services.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How We Use Your Information
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We use the collected information for the following purposes:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  To provide and maintain our outdoor advertising services
                </li>
                <li>
                  To communicate with you about your campaigns and inquiries
                </li>
                <li>
                  To improve our website and services based on your feedback
                </li>
                <li>
                  To send you marketing communications (with your consent)
                </li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Data Sharing and Disclosure
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Service Providers:
                  </strong>{" "}
                  Third-party vendors who assist in operating our business
                  (e.g., hosting, analytics, email services)
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Business Partners:
                  </strong>{" "}
                  Media owners and billboard operators necessary to execute your
                  campaigns
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Legal Requirements:
                  </strong>{" "}
                  When required by law or to protect our legal rights
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Business Transfers:
                  </strong>{" "}
                  In connection with mergers, acquisitions, or asset sales
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Data Security
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no internet
                transmission is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Rights
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                You have the right to:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            {/* Cookies Policy */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cookies Policy
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We use cookies to improve your experience on our website. You
                can control cookies through your browser settings. Disabling
                cookies may affect website functionality.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                If you have questions about this privacy policy or wish to
                exercise your rights, please contact us:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Email:
                  </strong>{" "}
                  privacy@sattvikliving.com
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
                  Sattvik Living Pvt. Ltd., [Your Address]
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
