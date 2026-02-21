"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navigation from "@/components/custom/Navigation";
import Footer from "@/components/custom/Footer";
import { CheckCircle, Mail, Calendar, Users } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "mentee";

  const isMentor = type === "mentor";

  return (
    <main className="min-h-screen">
      <div className="section-hero">
        <Navigation />
      </div>

      <section className="section-padding bg-white min-h-[70vh] flex items-center">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-sage-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-sage-600" />
            </div>

            <h1 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              {isMentor
                ? "Application Received!"
                : "We Got Your Story!"}
            </h1>

            <p className="text-warm-gray-600 text-lg mb-12">
              {isMentor
                ? "Thank you for wanting to share your experience. We're excited to review your application."
                : "Thank you for sharing your journey with us. We're already working on finding your perfect match."}
            </p>
          </motion.div>

          {/* What happens next */}
          <motion.div
            className="bg-warm-gray-50 rounded-xl p-8 mb-12 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-xl font-semibold text-warm-gray-900 mb-6">
              What happens next:
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-terracotta-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-gray-900 mb-1">
                    {isMentor ? "We'll review your story" : "A real person reads your answers"}
                  </h3>
                  <p className="text-warm-gray-600 text-sm">
                    {isMentor
                      ? "Our team will review your transition story within 7 business days."
                      : "No algorithms here. We manually match based on life stage and experience."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-gray-900 mb-1">
                    {isMentor ? "We'll reach out" : "You'll get your match"}
                  </h3>
                  <p className="text-warm-gray-600 text-sm">
                    {isMentor
                      ? "If approved, we'll schedule a brief onboarding call to set you up for success."
                      : "Within 5 business days, you'll receive an email with your matched mentor's profile."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-terracotta-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-gray-900 mb-1">
                    {isMentor ? "Start mentoring" : "Book your first session"}
                  </h3>
                  <p className="text-warm-gray-600 text-sm">
                    {isMentor
                      ? "Set your availability and start receiving mentee requests."
                      : "Simple Calendly booking. No friction, no sales calls."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* While you wait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-display text-lg font-semibold text-warm-gray-900 mb-4">
              While you wait:
            </h2>

            <div className="space-y-3">
              <Link
                href="#"
                className="block p-4 bg-warm-gray-50 rounded-lg hover:bg-sage-50 transition-colors text-left"
              >
                <span className="text-terracotta-500 font-medium">→</span>{" "}
                <span className="text-warm-gray-700">
                  Read: &ldquo;5 Myths About Switching Careers After 40&rdquo;
                </span>
              </Link>

              <Link
                href="#"
                className="block p-4 bg-warm-gray-50 rounded-lg hover:bg-sage-50 transition-colors text-left"
              >
                <span className="text-terracotta-500 font-medium">→</span>{" "}
                <span className="text-warm-gray-700">
                  Join our newsletter (1 pivot story per week)
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Return home */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-warm-gray-100 text-warm-gray-700 rounded-lg font-medium hover:bg-warm-gray-200 transition-colors"
            >
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-warm-gray-500">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
