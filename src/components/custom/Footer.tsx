import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-gray-800 text-warm-gray-200 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-white mb-3">
              CareerJump
            </h3>
            <p className="text-warm-gray-300 text-sm">
              Mentorship for midlife career changers
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/find-mentor" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link href="/become-mentor" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-warm-gray-300 hover:text-sage-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-gray-700 pt-8">
          <p className="text-warm-gray-400 text-sm">
            © {new Date().getFullYear()} CareerJump. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
