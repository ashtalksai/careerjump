"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 container-custom">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-semibold text-warm-gray-900">
          CareerJump
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/find-mentor" 
            className="text-warm-gray-800 hover:text-terracotta-500 transition-colors font-medium"
          >
            Find a Mentor
          </Link>
          <Link 
            href="/become-mentor" 
            className="text-warm-gray-800 hover:text-terracotta-500 transition-colors font-medium"
          >
            Become a Mentor
          </Link>
          <Link href="/find-mentor" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-warm-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[76px] bg-terracotta-500 z-50 p-6">
          <div className="flex flex-col gap-6">
            <Link
              href="/find-mentor"
              className="text-white text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Find a Mentor
            </Link>
            <Link
              href="/become-mentor"
              className="text-white text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Become a Mentor
            </Link>
            <Link
              href="/find-mentor"
              className="bg-white text-terracotta-500 px-6 py-3 rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
