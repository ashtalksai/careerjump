"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  popular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl p-8 relative ${
        popular ? "ring-2 ring-terracotta-500" : "border border-warm-gray-200"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta-500 hover:bg-terracotta-600">
          Popular
        </Badge>
      )}

      <h3 className="font-display text-xl font-semibold text-warm-gray-900 mb-4">
        {title}
      </h3>

      <div className="mb-6">
        <span className="font-display text-4xl font-semibold text-warm-gray-900">
          {price}
        </span>
        {period && (
          <span className="text-warm-gray-600 text-lg">/{period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
            <span className="text-warm-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={`block text-center py-3.5 rounded-lg font-semibold transition-all duration-200 ${
          popular
            ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
            : "bg-warm-gray-100 text-warm-gray-900 hover:bg-warm-gray-200"
        }`}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
}
