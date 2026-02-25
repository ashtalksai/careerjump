'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  { id: 'research', label: 'Research', icon: '📊' },
  { id: 'gtm', label: 'GTM Plan', icon: '🎯' },
  { id: 'marketing', label: 'Marketing', icon: '📣' },
  { id: 'brand', label: 'Brand Spec', icon: '🎨' },
  { id: 'assets', label: 'Assets', icon: '📦' },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('research');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-warm-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-warm-gray-900 text-white z-50 px-4 py-3 flex justify-between items-center">
        <span className="font-display text-lg">CareerJump Docs</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-warm-gray-900/95 z-40 pt-16">
          <nav className="p-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeSection === section.id
                    ? 'bg-terracotta-500 text-white'
                    : 'text-warm-gray-300 hover:bg-warm-gray-800'
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
            <div className="border-t border-warm-gray-700 pt-4 mt-4">
              <Link href="/" className="block px-4 py-3 text-terracotta-500 hover:text-terracotta-400">
                ← Back to Site
              </Link>
              <Link href="/pitch" className="block px-4 py-3 text-sage-500 hover:text-sage-400">
                View Pitch Deck →
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-warm-gray-900 text-white">
        <div className="p-6 border-b border-warm-gray-800">
          <h1 className="font-display text-xl text-white">CareerJump</h1>
          <p className="text-warm-gray-400 text-sm mt-1">Documentation</p>
        </div>
        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                activeSection === section.id
                  ? 'bg-terracotta-500 text-white'
                  : 'text-warm-gray-300 hover:bg-warm-gray-800'
              }`}
            >
              <span>{section.icon}</span>
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-warm-gray-800">
          <Link href="/" className="block px-4 py-2 text-terracotta-500 hover:text-terracotta-400 text-sm">
            ← Back to Site
          </Link>
          <Link href="/pitch" className="block px-4 py-2 text-sage-500 hover:text-sage-400 text-sm">
            View Pitch Deck →
          </Link>
          <a href="https://github.com/ashtalksai/careerjump" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-warm-gray-400 hover:text-warm-gray-300 text-sm">
            GitHub →
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-6 py-12">
          
          {/* RESEARCH SECTION */}
          <section id="research" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-2xl p-8 mb-8 text-white">
                <span className="text-terracotta-100 font-mono text-sm uppercase tracking-wider">Research Document</span>
                <h2 className="font-display text-4xl mt-2 mb-4">Market Validation</h2>
                <p className="text-terracotta-100 text-lg max-w-2xl">
                  Mid-career professionals (40+) pivoting careers get generic advice that ignores mortgages, kids, and aging parents. 
                  A 44-year-old teacher → UX designer needs different guidance than a 24-year-old bootcamp grad.
                </p>
              </div>

              {/* Metrics Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <span className="text-warm-gray-500 font-mono text-sm">VALIDATION SCORE</span>
                  <div className="text-4xl font-display font-bold text-terracotta-500 mt-2">78/100</div>
                  <div className="text-warm-gray-600 text-sm mt-1">Strong opportunity</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <span className="text-warm-gray-500 font-mono text-sm">PAIN SEVERITY</span>
                  <div className="text-4xl font-display font-bold text-terracotta-500 mt-2">9/10</div>
                  <div className="text-warm-gray-600 text-sm mt-1">IdeaBrowser rating</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <span className="text-warm-gray-500 font-mono text-sm">SEARCH GROWTH</span>
                  <div className="text-4xl font-display font-bold text-terracotta-500 mt-2">+2941%</div>
                  <div className="text-warm-gray-600 text-sm mt-1">"Career change at 40" YoY</div>
                </div>
              </div>

              {/* Market Evidence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">📈 Market Evidence</h3>
                  <ul className="space-y-3 text-warm-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-500 mt-1">•</span>
                      <span>"Career change at 40" = <strong>368K</strong> monthly search volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-500 mt-1">•</span>
                      <span>r/careerchange + r/careerguidance = <strong>2.5M+</strong> members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-500 mt-1">•</span>
                      <span>Career coaching market = <strong>$15B</strong>, growing 6.7% annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-500 mt-1">•</span>
                      <span>MentorCruise pricing: $39-$149/call validates willingness to pay</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">🎯 Target User</h3>
                  <p className="text-warm-gray-700 mb-4">
                    Mid-career professionals (38-55) with 15+ years experience, pivoting industries. They have:
                  </p>
                  <ul className="space-y-2 text-warm-gray-700">
                    <li>✓ Mortgage, kids in school, aging parents</li>
                    <li>✓ Stable income they're terrified to lose</li>
                    <li>✓ Imposter syndrome about starting over</li>
                    <li>✓ No time for 4-hour networking events</li>
                    <li>✓ Willing to pay for fast, specific guidance</li>
                  </ul>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-4 text-warm-gray-900">⚔️ Competitive Landscape</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-warm-gray-200">
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Company</th>
                        <th className="text-center py-3 px-2 font-medium text-warm-gray-900">Midlife Focus</th>
                        <th className="text-center py-3 px-2 font-medium text-warm-gray-900">Story-First</th>
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Pricing</th>
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Weakness</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-terracotta-50 border-b border-warm-gray-100">
                        <td className="py-3 px-2 font-semibold text-terracotta-600">CareerJump ✨</td>
                        <td className="text-center py-3 px-2">✅</td>
                        <td className="text-center py-3 px-2">✅</td>
                        <td className="py-3 px-2 font-mono">$49 / $39mo</td>
                        <td className="py-3 px-2 text-warm-gray-500">—</td>
                      </tr>
                      <tr className="border-b border-warm-gray-100">
                        <td className="py-3 px-2">MentorCruise</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="py-3 px-2 font-mono">$39-$149/call</td>
                        <td className="py-3 px-2 text-warm-gray-600">Tech-focused, generic matching</td>
                      </tr>
                      <tr className="border-b border-warm-gray-100">
                        <td className="py-3 px-2">PushFar</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="py-3 px-2 font-mono">Enterprise</td>
                        <td className="py-3 px-2 text-warm-gray-600">Built for HR, not individuals</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Qooper</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="text-center py-3 px-2">❌</td>
                        <td className="py-3 px-2 font-mono">Enterprise</td>
                        <td className="py-3 px-2 text-warm-gray-600">Zero individual focus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-sage-500 rounded-xl p-6 text-white">
                <h3 className="font-display text-xl mb-2">💡 Key Insight</h3>
                <p className="text-sage-100">
                  Every competitor positions as "professional networking software" or "enterprise solution." 
                  <strong className="text-white"> NONE specifically target 40+ career changers with mortgage/family context.</strong> This is the gap.
                </p>
              </div>
            </motion.div>
          </section>

          {/* GTM SECTION */}
          <section id="gtm" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl p-8 mb-8 text-white">
                <span className="text-sage-100 font-mono text-sm uppercase tracking-wider">Go-to-Market Plan</span>
                <h2 className="font-display text-4xl mt-2 mb-4">Launch Strategy</h2>
                <p className="text-sage-100 text-lg max-w-2xl">
                  Manual matching MVP → validate demand → automate what works.
                  Target: 100 paying subscribers by Month 6 = $4K MRR.
                </p>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-6 text-warm-gray-900">📅 90-Day Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="border-l-4 border-terracotta-500 pl-4">
                    <span className="font-mono text-sm text-warm-gray-500">WEEKS 1-2</span>
                    <div className="font-semibold text-warm-gray-900 mt-1">Soft Launch</div>
                    <ul className="text-sm text-warm-gray-600 mt-2 space-y-1">
                      <li>• Waitlist landing page</li>
                      <li>• Recruit 20 mentors</li>
                      <li>• Hand-match first 20</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-sage-500 pl-4">
                    <span className="font-mono text-sm text-warm-gray-500">MONTH 1</span>
                    <div className="font-semibold text-warm-gray-900 mt-1">Validate</div>
                    <ul className="text-sm text-warm-gray-600 mt-2 space-y-1">
                      <li>• 100 signups target</li>
                      <li>• $49 trial sessions</li>
                      <li>• Feedback collection</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-sage-500 pl-4">
                    <span className="font-mono text-sm text-warm-gray-500">MONTH 2-3</span>
                    <div className="font-semibold text-warm-gray-900 mt-1">Automate</div>
                    <ul className="text-sm text-warm-gray-600 mt-2 space-y-1">
                      <li>• Matching algorithm</li>
                      <li>• $39/mo subscription</li>
                      <li>• Community features</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-terracotta-600 pl-4">
                    <span className="font-mono text-sm text-warm-gray-500">MONTH 6</span>
                    <div className="font-semibold text-warm-gray-900 mt-1">Scale</div>
                    <ul className="text-sm text-warm-gray-600 mt-2 space-y-1">
                      <li>• 100 subscribers</li>
                      <li>• $4K MRR</li>
                      <li>• Path to $50K+ ARR</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Channel Strategy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">📢 Distribution Channels</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-warm-gray-100">
                      <span className="font-medium">Reddit</span>
                      <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full text-sm font-mono">40%</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-warm-gray-100">
                      <span className="font-medium">Facebook Groups</span>
                      <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-mono">25%</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-warm-gray-100">
                      <span className="font-medium">LinkedIn</span>
                      <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-mono">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Product Hunt</span>
                      <span className="bg-warm-gray-100 text-warm-gray-700 px-3 py-1 rounded-full text-sm font-mono">15%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">💰 Pricing Strategy</h3>
                  <div className="space-y-4">
                    <div className="bg-terracotta-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-warm-gray-900">Trial Session</span>
                        <span className="text-2xl font-display font-bold text-terracotta-500">$49</span>
                      </div>
                      <p className="text-sm text-warm-gray-600 mt-1">One-time intro call with matched mentor</p>
                    </div>
                    <div className="bg-sage-50 rounded-lg p-4 border-2 border-sage-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-warm-gray-900">Monthly</span>
                          <span className="ml-2 bg-sage-500 text-white text-xs px-2 py-0.5 rounded">POPULAR</span>
                        </div>
                        <span className="text-2xl font-display font-bold text-sage-600">$39/mo</span>
                      </div>
                      <p className="text-sm text-warm-gray-600 mt-1">Ongoing mentor access + community</p>
                    </div>
                    <div className="bg-warm-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-warm-gray-900">Annual</span>
                        <span className="text-2xl font-display font-bold text-warm-gray-700">$390/yr</span>
                      </div>
                      <p className="text-sm text-warm-gray-600 mt-1">Save $80 (2 months free)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="bg-warm-gray-900 rounded-xl p-6 text-white">
                <h3 className="font-display text-xl mb-4">🎯 Success Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-terracotta-400 font-mono text-sm">NORTH STAR</div>
                    <div className="text-lg font-medium mt-1">Successful Pivots</div>
                    <div className="text-warm-gray-400 text-sm">6-month follow-up</div>
                  </div>
                  <div>
                    <div className="text-sage-400 font-mono text-sm">ACQUISITION</div>
                    <div className="text-lg font-medium mt-1">Trial Bookings</div>
                    <div className="text-warm-gray-400 text-sm">$49 sessions</div>
                  </div>
                  <div>
                    <div className="text-sage-400 font-mono text-sm">CONVERSION</div>
                    <div className="text-lg font-medium mt-1">&gt;25%</div>
                    <div className="text-warm-gray-400 text-sm">Trial → subscription</div>
                  </div>
                  <div>
                    <div className="text-sage-400 font-mono text-sm">RETENTION</div>
                    <div className="text-lg font-medium mt-1">&gt;50%</div>
                    <div className="text-warm-gray-400 text-sm">6-month retention</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* MARKETING SECTION */}
          <section id="marketing" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-warm-gray-800 to-warm-gray-900 rounded-2xl p-8 mb-8 text-white">
                <span className="text-warm-gray-400 font-mono text-sm uppercase tracking-wider">Marketing Plan</span>
                <h2 className="font-display text-4xl mt-2 mb-4">Positioning & Messaging</h2>
                <p className="text-warm-gray-300 text-lg max-w-2xl">
                  "Warm realism — like talking to a friend who's been there."
                  Story-first, human-first, anti-corporate SaaS vibes.
                </p>
              </div>

              {/* Positioning Statement */}
              <div className="bg-white rounded-xl p-8 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-6 text-warm-gray-900">📍 Positioning Statement</h3>
                <div className="space-y-4 text-lg">
                  <p><span className="text-warm-gray-500">For</span> <strong className="text-warm-gray-900">mid-career professionals (38-55)</strong></p>
                  <p><span className="text-warm-gray-500">Who</span> <strong className="text-warm-gray-900">want to pivot careers but fear starting over</strong></p>
                  <p><span className="text-warm-gray-500">CareerJump is</span> <strong className="text-terracotta-500">a mentor-matching platform</strong></p>
                  <p><span className="text-warm-gray-500">That</span> <strong className="text-warm-gray-900">connects you with people who've actually changed careers after 40</strong></p>
                  <p><span className="text-warm-gray-500">Unlike</span> <strong className="text-warm-gray-900">generic career coaches and enterprise mentorship software</strong></p>
                  <p><span className="text-warm-gray-500">We</span> <strong className="text-sage-600">match based on story, not keywords — real transitions, real constraints, real advice</strong></p>
                </div>
              </div>

              {/* Messaging Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-terracotta-500 rounded-xl p-6 text-white">
                  <div className="text-terracotta-100 font-mono text-sm mb-2">PILLAR 1</div>
                  <div className="font-display text-xl mb-2">Relatability</div>
                  <p className="text-terracotta-100">
                    "I pivoted at 44 with two kids and a mortgage. Here's what actually worked."
                  </p>
                </div>
                <div className="bg-sage-500 rounded-xl p-6 text-white">
                  <div className="text-sage-100 font-mono text-sm mb-2">PILLAR 2</div>
                  <div className="font-display text-xl mb-2">Specificity</div>
                  <p className="text-sage-100">
                    Not generic advice. Mentors matched by your exact transition type and life stage.
                  </p>
                </div>
                <div className="bg-warm-gray-800 rounded-xl p-6 text-white">
                  <div className="text-warm-gray-400 font-mono text-sm mb-2">PILLAR 3</div>
                  <div className="font-display text-xl mb-2">Authenticity</div>
                  <p className="text-warm-gray-300">
                    No hustle culture. No LinkedIn inspirational posts. Just honest conversations.
                  </p>
                </div>
              </div>

              {/* Target Persona */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">👤 Primary Persona</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center text-2xl">
                      👩‍💼
                    </div>
                    <div>
                      <div className="font-semibold text-warm-gray-900">Sarah, 44</div>
                      <div className="text-terracotta-500 text-sm">Teacher → UX Designer</div>
                      <p className="text-warm-gray-600 text-sm mt-2">
                        "I have 18 years in education, zero tech experience, and a mortgage that doesn't care about my dreams."
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-warm-gray-100">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-warm-gray-500">Pain:</span>
                        <span className="ml-1 text-warm-gray-900">Age-blind advice</span>
                      </div>
                      <div>
                        <span className="text-warm-gray-500">Fear:</span>
                        <span className="ml-1 text-warm-gray-900">Pay cut, rejection</span>
                      </div>
                      <div>
                        <span className="text-warm-gray-500">Need:</span>
                        <span className="ml-1 text-warm-gray-900">Realistic roadmap</span>
                      </div>
                      <div>
                        <span className="text-warm-gray-500">Budget:</span>
                        <span className="ml-1 text-warm-gray-900">$50-100/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                  <h3 className="font-display text-xl mb-4 text-warm-gray-900">🎙️ Brand Voice</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1 bg-sage-50 rounded-lg p-3">
                        <div className="text-sage-700 font-medium text-sm mb-1">✅ DO</div>
                        <p className="text-warm-gray-700 text-sm">
                          "The hardest part wasn't learning UX — it was believing I wasn't too late."
                        </p>
                      </div>
                      <div className="flex-1 bg-red-50 rounded-lg p-3">
                        <div className="text-red-700 font-medium text-sm mb-1">❌ DON'T</div>
                        <p className="text-warm-gray-700 text-sm">
                          "Unlock your potential with our AI-powered matching algorithm!"
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 bg-sage-50 rounded-lg p-3">
                        <div className="text-sage-700 font-medium text-sm mb-1">✅ DO</div>
                        <p className="text-warm-gray-700 text-sm">
                          "Here's how I handled the pay cut conversation with my spouse."
                        </p>
                      </div>
                      <div className="flex-1 bg-red-50 rounded-lg p-3">
                        <div className="text-red-700 font-medium text-sm mb-1">❌ DON'T</div>
                        <p className="text-warm-gray-700 text-sm">
                          "Transform your career with our network of industry leaders!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Strategy */}
              <div className="bg-warm-gray-50 rounded-xl p-6 border border-warm-gray-200">
                <h3 className="font-display text-xl mb-4 text-warm-gray-900">📝 Content Calendar (Month 1)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-warm-gray-200">
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Week</th>
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Reddit</th>
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">Twitter/X</th>
                        <th className="text-left py-3 px-2 font-medium text-warm-gray-900">LinkedIn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-warm-gray-100">
                        <td className="py-3 px-2 font-mono text-warm-gray-500">W1</td>
                        <td className="py-3 px-2">Launch story in r/careerchange</td>
                        <td className="py-3 px-2">9-tweet launch thread</td>
                        <td className="py-3 px-2">"I pivoted at 45" story post</td>
                      </tr>
                      <tr className="border-b border-warm-gray-100">
                        <td className="py-3 px-2 font-mono text-warm-gray-500">W2</td>
                        <td className="py-3 px-2">r/careerguidance value post</td>
                        <td className="py-3 px-2">Mentor spotlight thread</td>
                        <td className="py-3 px-2">Pivot success stats post</td>
                      </tr>
                      <tr className="border-b border-warm-gray-100">
                        <td className="py-3 px-2 font-mono text-warm-gray-500">W3</td>
                        <td className="py-3 px-2">r/40something relatable post</td>
                        <td className="py-3 px-2">Common fears thread</td>
                        <td className="py-3 px-2">Industry pivot guide</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-mono text-warm-gray-500">W4</td>
                        <td className="py-3 px-2">AMA offer in career subs</td>
                        <td className="py-3 px-2">User testimonial thread</td>
                        <td className="py-3 px-2">Newsletter launch</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </section>

          {/* BRAND SECTION */}
          <section id="brand" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-sage-600 rounded-2xl p-8 mb-8 text-white">
                <span className="text-white/70 font-mono text-sm uppercase tracking-wider">Brand Design Spec</span>
                <h2 className="font-display text-4xl mt-2 mb-4">Visual Identity</h2>
                <p className="text-white/80 text-lg max-w-2xl">
                  NPR podcast aesthetic. Warm, human, story-first. 
                  Anti-SaaS, anti-hustle, anti-corporate.
                </p>
              </div>

              {/* Color Palette */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-6 text-warm-gray-900">🎨 Color Palette</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-warm-gray-700 mb-3">Primary — Terracotta</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#FBF4F2]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#FBF4F2</div>
                          <div className="text-warm-gray-500">50</div>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#D4735E]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#D4735E</div>
                          <div className="text-warm-gray-500">500</div>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#A04937]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#A04937</div>
                          <div className="text-warm-gray-500">700</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-warm-gray-700 mb-3">Secondary — Sage</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#F6F7F5]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#F6F7F5</div>
                          <div className="text-warm-gray-500">50</div>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#8B9D83]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#8B9D83</div>
                          <div className="text-warm-gray-500">500</div>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <div className="h-16 bg-[#566650]"></div>
                        <div className="p-2 bg-warm-gray-50 text-xs">
                          <div className="font-mono">#566650</div>
                          <div className="text-warm-gray-500">700</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-warm-gray-700 mb-3">Neutrals — Warm Grays</h4>
                  <div className="flex gap-2">
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <div className="h-12 bg-[#F9F8F6]"></div>
                      <div className="p-2 bg-warm-gray-50 text-xs text-center font-mono">#F9F8F6</div>
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <div className="h-12 bg-[#F5F3F0]"></div>
                      <div className="p-2 bg-warm-gray-50 text-xs text-center font-mono">#F5F3F0</div>
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <div className="h-12 bg-[#D1CBC3]"></div>
                      <div className="p-2 bg-warm-gray-50 text-xs text-center font-mono">#D1CBC3</div>
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <div className="h-12 bg-[#4A4540]"></div>
                      <div className="p-2 bg-warm-gray-50 text-xs text-center font-mono">#4A4540</div>
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <div className="h-12 bg-[#2E2E2E]"></div>
                      <div className="p-2 bg-warm-gray-50 text-xs text-center font-mono">#2E2E2E</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-6 text-warm-gray-900">✍️ Typography</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-warm-gray-50 rounded-lg p-4">
                    <div className="text-warm-gray-500 font-mono text-xs mb-2">DISPLAY</div>
                    <div className="font-display text-3xl text-warm-gray-900">Crimson Text</div>
                    <p className="text-warm-gray-600 text-sm mt-2">Headlines, hero copy, section titles. Warm gravitas without being stuffy.</p>
                  </div>
                  <div className="bg-warm-gray-50 rounded-lg p-4">
                    <div className="text-warm-gray-500 font-mono text-xs mb-2">BODY</div>
                    <div className="font-body text-3xl text-warm-gray-900">Inter</div>
                    <p className="text-warm-gray-600 text-sm mt-2">Body text, buttons, labels, navigation. Exceptional readability.</p>
                  </div>
                  <div className="bg-warm-gray-50 rounded-lg p-4">
                    <div className="text-warm-gray-500 font-mono text-xs mb-2">MONO</div>
                    <div className="font-mono text-3xl text-warm-gray-900">JetBrains</div>
                    <p className="text-warm-gray-600 text-sm mt-2">Numbers, timelines, salary data. Modern monospace.</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-warm-gray-100">
                  <h4 className="font-medium text-warm-gray-700 mb-4">Type Scale</h4>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-warm-gray-500 w-16">64px</span>
                      <span className="font-display text-[40px] md:text-[64px] text-warm-gray-900 leading-none">Hero Display</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-warm-gray-500 w-16">48px</span>
                      <span className="font-display text-[32px] md:text-[48px] text-warm-gray-900 leading-none">Section Title</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-warm-gray-500 w-16">24px</span>
                      <span className="font-display text-2xl text-warm-gray-900">Card Heading</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-warm-gray-500 w-16">16px</span>
                      <span className="font-body text-base text-warm-gray-900">Body text for paragraphs and descriptions.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* UI Components */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-6 text-warm-gray-900">🧩 UI Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-warm-gray-700 mb-3">Buttons</h4>
                    <div className="space-y-3">
                      <button className="btn-primary">Primary Button</button>
                      <button className="btn-secondary ml-4">Secondary</button>
                      <div className="mt-2">
                        <a href="#" className="btn-ghost">Ghost Link →</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-warm-gray-700 mb-3">Cards</h4>
                    <div className="story-card">
                      <div className="text-sm text-warm-gray-500">Story Card</div>
                      <div className="font-display text-lg text-warm-gray-900 mt-1">White background, subtle shadow</div>
                    </div>
                    <div className="mentor-quote-card mt-3">
                      <div className="italic text-warm-gray-700">"Quote cards have a terracotta left border."</div>
                      <div className="text-sm text-warm-gray-500 mt-2">— Mentor Name</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Anti-Patterns */}
              <div className="bg-warm-gray-900 rounded-xl p-6 text-white">
                <h3 className="font-display text-xl mb-4">⚠️ Visual Anti-Patterns</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-red-400 font-medium mb-2">❌ NEVER</div>
                    <ul className="space-y-2 text-warm-gray-300">
                      <li>• Purple/blue gradients on white</li>
                      <li>• "AI-powered matching" buzzwords</li>
                      <li>• Dashboard screenshots</li>
                      <li>• Stock photos of handshakes</li>
                      <li>• Circular avatar grids with ratings</li>
                      <li>• Hustle culture / motivational speaker energy</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sage-400 font-medium mb-2">✅ ALWAYS</div>
                    <ul className="space-y-2 text-warm-gray-300">
                      <li>• First-person story openings</li>
                      <li>• Serif headlines (Crimson Text)</li>
                      <li>• Earthy terracotta + sage palette</li>
                      <li>• Quote-first mentor intros</li>
                      <li>• Salary transparency</li>
                      <li>• NPR podcast aesthetic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ASSETS SECTION */}
          <section id="assets" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-warm-gray-700 to-warm-gray-800 rounded-2xl p-8 mb-8 text-white">
                <span className="text-warm-gray-400 font-mono text-sm uppercase tracking-wider">Brand Assets</span>
                <h2 className="font-display text-4xl mt-2 mb-4">Generated Visuals</h2>
                <p className="text-warm-gray-300 text-lg max-w-2xl">
                  All marketing assets with download links. Use these across all channels.
                </p>
              </div>

              {/* Asset Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl overflow-hidden border border-warm-gray-200">
                  <div className="h-48 bg-gradient-to-br from-terracotta-100 to-sage-100 flex items-center justify-center">
                    <span className="text-6xl">🖼️</span>
                  </div>
                  <div className="p-4">
                    <div className="font-medium text-warm-gray-900">Hero Journey Illustration</div>
                    <div className="text-sm text-warm-gray-500 font-mono">hero-journey.png • 2K</div>
                    <p className="text-sm text-warm-gray-600 mt-2">Abstract winding path from corporate to open landscape.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-warm-gray-200">
                  <div className="h-48 bg-gradient-to-br from-sage-100 to-terracotta-100 flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                  <div className="p-4">
                    <div className="font-medium text-warm-gray-900">Product Hunt Thumbnail</div>
                    <div className="text-sm text-warm-gray-500 font-mono">product-hunt-thumbnail.png • 240×240</div>
                    <p className="text-sm text-warm-gray-600 mt-2">Mentor/mentee connection visualization.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-warm-gray-200">
                  <div className="h-48 bg-gradient-to-br from-terracotta-100 to-warm-gray-100 flex items-center justify-center">
                    <span className="text-6xl">🐦</span>
                  </div>
                  <div className="p-4">
                    <div className="font-medium text-warm-gray-900">Twitter Social Card</div>
                    <div className="text-sm text-warm-gray-500 font-mono">social-twitter.png • 1200×628</div>
                    <p className="text-sm text-warm-gray-600 mt-2">Social sharing card optimized for Twitter/X.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-warm-gray-200">
                  <div className="h-48 bg-gradient-to-br from-warm-gray-100 to-sage-100 flex items-center justify-center">
                    <span className="text-6xl">👥</span>
                  </div>
                  <div className="p-4">
                    <div className="font-medium text-warm-gray-900">Reddit Social Card</div>
                    <div className="text-sm text-warm-gray-500 font-mono">social-reddit.png • 1200×630</div>
                    <p className="text-sm text-warm-gray-600 mt-2">Social sharing card optimized for Reddit.</p>
                  </div>
                </div>
              </div>

              {/* Additional Assets */}
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200 mb-8">
                <h3 className="font-display text-xl mb-4 text-warm-gray-900">📁 All Assets</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-warm-gray-100">
                    <div>
                      <div className="font-medium text-warm-gray-900">bg-pattern.png</div>
                      <div className="text-sm text-warm-gray-500">Seamless organic pattern for backgrounds</div>
                    </div>
                    <span className="font-mono text-sm text-warm-gray-500">1K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-warm-gray-100">
                    <div>
                      <div className="font-medium text-warm-gray-900">feature-icons.png</div>
                      <div className="text-sm text-warm-gray-500">4 minimalist line icons for How It Works</div>
                    </div>
                    <span className="font-mono text-sm text-warm-gray-500">1K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-warm-gray-100">
                    <div>
                      <div className="font-medium text-warm-gray-900">mentor-portraits.png</div>
                      <div className="text-sm text-warm-gray-500">3 abstract portrait illustrations</div>
                    </div>
                    <span className="font-mono text-sm text-warm-gray-500">2K</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="font-medium text-warm-gray-900">quote-graphics (3)</div>
                      <div className="text-sm text-warm-gray-500">Testimonial quote cards for social</div>
                    </div>
                    <span className="font-mono text-sm text-warm-gray-500">2K each</span>
                  </div>
                </div>
              </div>

              {/* Usage Guidelines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                  <h3 className="font-display text-lg mb-3 text-warm-gray-900">✅ Do</h3>
                  <ul className="space-y-2 text-warm-gray-700">
                    <li>• Use terracotta as primary accent color</li>
                    <li>• Maintain warm, approachable tone in all visuals</li>
                    <li>• Show age diversity (40s-50s professionals)</li>
                    <li>• Use organic patterns at 3% opacity max</li>
                    <li>• Keep illustrations abstract and editorial</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="font-display text-lg mb-3 text-warm-gray-900">❌ Don't</h3>
                  <ul className="space-y-2 text-warm-gray-700">
                    <li>• Use stock photos of generic handshakes</li>
                    <li>• Apply purple/blue corporate gradients</li>
                    <li>• Create busy, cluttered compositions</li>
                    <li>• Use hustle culture imagery</li>
                    <li>• Add text to generated images</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer CTA */}
          <div className="bg-gradient-to-br from-terracotta-500 to-sage-600 rounded-2xl p-8 text-center text-white">
            <h2 className="font-display text-3xl mb-4">Ready to explore?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Check out the live site or view the pitch deck for more.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/" className="bg-white text-terracotta-600 px-6 py-3 rounded-lg font-semibold hover:bg-warm-gray-100 transition-colors">
                Visit Site →
              </Link>
              <Link href="/pitch" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                View Pitch Deck
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
