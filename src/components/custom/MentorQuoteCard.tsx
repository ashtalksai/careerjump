"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface MentorQuoteCardProps {
  quote: string;
  name: string;
  background: string;
  currentRole: string;
  expertise: string[];
}

export default function MentorQuoteCard({
  quote,
  name,
  background,
  currentRole,
  expertise,
}: MentorQuoteCardProps) {
  return (
    <motion.div
      className="mentor-quote-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Quote */}
      <p className="font-display text-xl text-warm-gray-900 mb-4 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="mb-4">
        <p className="font-semibold text-warm-gray-900">— {name}</p>
        <p className="text-warm-gray-600 text-sm">{background}</p>
        <p className="text-warm-gray-500 text-sm">Now: {currentRole}</p>
      </div>

      {/* Expertise Tags */}
      <div className="flex flex-wrap gap-2">
        {expertise.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-sage-100 text-sage-700 hover:bg-sage-200"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
