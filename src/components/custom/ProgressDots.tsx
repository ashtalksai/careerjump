"use client";

interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index < current
              ? "bg-terracotta-500"
              : index === current
              ? "bg-terracotta-500 scale-125"
              : "bg-warm-gray-300"
          }`}
        />
      ))}
      <span className="ml-3 text-warm-gray-500 text-sm font-mono">
        {current + 1} of {total}
      </span>
    </div>
  );
}
