"use client";

import { motion } from "framer-motion";

interface StoryCardProps {
  name: string;
  age: number;
  fromRole: string;
  toRole: string;
  story: string;
  timeline: string;
  salaryBefore: string;
  salaryAfter: string;
}

export default function StoryCard({
  name,
  age,
  fromRole,
  toRole,
  story,
  timeline,
  salaryBefore,
  salaryAfter,
}: StoryCardProps) {
  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta-100 to-sage-100 flex items-center justify-center">
          <span className="text-2xl font-display font-semibold text-terracotta-600">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-warm-gray-900">
            {name}, {age}
          </h3>
          <p className="text-terracotta-500 font-medium">
            {fromRole} → {toRole}
          </p>
        </div>
      </div>

      {/* Story */}
      <p className="text-warm-gray-800 leading-relaxed mb-6 italic">
        &ldquo;{story}&rdquo;
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-warm-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-warm-gray-500 text-sm">Timeline:</span>
          <span className="font-mono text-warm-gray-900 text-sm font-medium">
            {timeline}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-warm-gray-500 text-sm">Salary:</span>
          <span className="font-mono text-warm-gray-900 text-sm font-medium">
            {salaryBefore} → {salaryAfter}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
