// app/refund-policy/page.tsx
"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />
          <p
            className="text-lg md:text-xl text-slate-600 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last updated: February 17, 2026
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
                At Sattvik Living ("we," "our," or "us"), we strive to provide
                exceptional outdoor advertising services. This refund policy
                outlines the terms and conditions for refunds and cancellations
                of our advertising campaigns and services.
              </p>
            </div>

            {/* Campaign Cancellation */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Campaign Cancellation
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancellation terms vary based on campaign status:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Before Campaign Launch:
                  </strong>{" "}
                  Full refund available if cancelled 15 days before the
                  scheduled start date. A 25% administrative fee applies for
                  cancellations made 7-14 days before launch.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    After Campaign Launch:
                  </strong>{" "}
                  No refunds are available once the advertising campaign has
                  gone live, as media space has been secured and production
                  costs incurred.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Design and Creative Services:
                  </strong>{" "}
                  Non-refundable once design work has commenced or been
                  delivered.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">
                    Consulting Services:
                  </strong>{" "}
                  50% refund available if cancelled within 48 hours of booking,
                  no refund thereafter.
                </li>
              </ul>
            </div>

            {/* Refund Eligibility */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Refund Eligibility
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                You may be eligible for a refund in the following circumstances:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  We are unable to deliver the advertising space as promised due
                  to circumstances within our control
                </li>
                <li>
                  Technical failures prevent your advertisement from being
                  displayed for the agreed duration
                </li>
                <li>Duplicate payment or billing errors on our part</li>
                <li>Services not rendered as per the signed agreement</li>
                <li>
                  Force majeure events (natural disasters, government
                  restrictions) that prevent campaign execution
                </li>
              </ul>
            </div>

            {/* Non-Refundable Items */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Non-Refundable Items
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The following are not eligible for refunds:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  Third-party vendor costs (printing, installation, permits)
                </li>
                <li>
                  Media space bookings made on your behalf with external
                  partners
                </li>
                <li>Completed design, creative, or production work</li>
                <li>
                  Campaign performance not meeting expectations (results may
                  vary)
                </li>
                <li>Change of mind after campaign approval</li>
                <li>Deposit payments (unless campaign is cancelled by us)</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Refund Process
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                To request a refund:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  Submit a written refund request to{" "}
                  <strong className="font-semibold text-slate-900">
                    refunds@sattvikliving.com
                  </strong>
                </li>
                <li>
                  Include your booking reference number and reason for refund
                </li>
                <li>
                  Our team will review your request within 5-7 business days
                </li>
                <li>
                  Approved refunds will be processed within 10-15 business days
                </li>
                <li>Refunds will be issued to the original payment method</li>
                <li>
                  You will receive email confirmation once the refund is
                  processed
                </li>
              </ul>
            </div>

            {/* Partial Refunds */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Partial Refunds
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Partial refunds may be issued when a campaign is partially
                delivered or interrupted. The refund amount will be calculated
                based on the proportion of services not rendered, minus any
                non-recoverable costs already incurred.
              </p>
            </div>

            {/* Modifications and Rescheduling */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Modifications and Rescheduling
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                As an alternative to refunds:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  Campaigns can be rescheduled up to 10 days before launch
                  (subject to availability)
                </li>
                <li>
                  Credit towards future campaigns may be offered in lieu of
                  refunds
                </li>
                <li>
                  Campaign modifications may incur additional fees depending on
                  the changes requested
                </li>
              </ul>
            </div>

            {/* Disputes */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Disputes
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                If you disagree with our refund decision, you may request a
                review by our management team within 30 days of the decision. We
                are committed to resolving disputes fairly and promptly.
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
                For refund requests or questions about this policy, please
                contact:
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-600 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <li>
                  <strong className="font-semibold text-slate-900">
                    Email:
                  </strong>{" "}
                  refunds@sattvikliving.com
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
                <li>
                  <strong className="font-semibold text-slate-900">
                    Business Hours:
                  </strong>{" "}
                  Monday - Friday, 9:00 AM - 6:00 PM IST
                </li>
              </ul>
            </div>

            {/* Policy Changes */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Policy Changes
              </h2>
              <p
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We reserve the right to modify this refund policy at any time.
                Changes will be effective immediately upon posting on our
                website. Your continued use of our services after any changes
                constitutes acceptance of the updated policy.
              </p>
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
