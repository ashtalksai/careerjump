"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/custom/Navigation";
import Footer from "@/components/custom/Footer";
import StoryCard from "@/components/custom/StoryCard";
import MentorQuoteCard from "@/components/custom/MentorQuoteCard";
import PricingCard from "@/components/custom/PricingCard";
import FadeInSection from "@/components/custom/FadeInSection";
import { Compass, HandshakeIcon, Route } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero">
        <Navigation />
        
        <div className="container-custom py-16 md:py-24">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Hero Text - 60% */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge className="mb-6 bg-terracotta-100 text-terracotta-600 hover:bg-terracotta-100">
                  Mentorship for midlife career changers
                </Badge>
              </motion.div>

              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-display-xl font-semibold text-warm-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At 44, I had 18 years in education.<br />
                Zero tech experience.<br />
                <span className="text-terracotta-500">And a mortgage that didn't care about my dreams.</span>
              </motion.h1>

              <motion.p
                className="text-lg text-warm-gray-800 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Here's how I made the jump — and the mentors who showed me the path.
                Whether you're pivoting from teaching to tech, corporate to creative, or 
                industry to startup, you don't have to figure it out alone.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/find-mentor" className="btn-primary text-center">
                  Find Your Mentor
                </Link>
                <Link href="#stories" className="btn-secondary text-center">
                  See Pivot Stories
                </Link>
              </motion.div>
            </div>

            {/* Hero Image - 40% */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src="/images/hero-journey.png"
                alt="A winding path from corporate buildings to an open creative landscape"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="section-stories section-padding">
        <div className="container-custom">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              Real Pivots. Real People. Real Timelines.
            </h2>
            <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
              These aren't success stories. They're roadmaps.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <StoryCard
              name="Sarah"
              age={44}
              fromRole="High School Teacher"
              toRole="UX Designer"
              story="I'd been teaching high school English for 18 years when I realized I was more excited troubleshooting the school's website than grading essays. But how do you pivot to tech at 44 with zero portfolio? My mentor, Lisa (former teacher turned product designer), didn't just tell me to 'learn Figma.' She showed me how to reframe classroom experience as user research. She introduced me to hiring managers who valued my communication skills over my bootcamp certificate. The scariest part? Taking a $12k pay cut for my first UX role. But Lisa had done the same thing at 46. She knew the timeline."
              timeline="14 months"
              salaryBefore="$58k"
              salaryAfter="$92k"
            />

            <StoryCard
              name="Marcus"
              age={48}
              fromRole="Bank Manager"
              toRole="Product Manager"
              story="Twenty-two years in banking. I knew financial products inside out but felt invisible in every tech conversation. When I told people I wanted to move into product, they smiled politely. My mentor David had made the same jump at 50. He helped me translate 'managed a branch of 15' into 'led cross-functional teams through regulatory changes.' He showed me which PM certifications actually mattered and which were credential theater. Most importantly, he told me it would take longer than I wanted. He was right—but it happened."
              timeline="22 months"
              salaryBefore="$72k"
              salaryAfter="$95k"
            />

            <StoryCard
              name="Elena"
              age={41}
              fromRole="Corporate Lawyer"
              toRole="Startup Founder"
              story="I was partner-track at 39 when I realized I hated every minute. The money was good, the prestige was real, and I was miserable. My mentor had left BigLaw at 43 to start an edtech company. She didn't sugarcoat it: the first year was terrifying. She helped me save 18 months of runway before I quit, introduced me to angels who understood career changers, and talked me off the ledge at 2am when our first launch flopped. Now I run a legal-tech startup helping others escape."
              timeline="18 months"
              salaryBefore="$185k"
              salaryAfter="$80k (equity)"
            />

            <StoryCard
              name="James"
              age={52}
              fromRole="Sales Director"
              toRole="Career Coach"
              story="Thirty years of selling software. I was good at it—too good to leave, everyone said. But I spent my nights helping friends' kids with career advice, writing LinkedIn tips that went viral, and feeling more alive than I had in years. My mentor was a former executive who'd become a coach at 55. She taught me that my sales experience WAS coaching experience—I'd been coaching teams for decades. She helped me structure my first program, price it without imposter syndrome, and build a client base. Now I help sales leaders who feel stuck, just like I was."
              timeline="8 months"
              salaryBefore="$145k"
              salaryAfter="$110k"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-how section-padding">
        <div className="container-custom">
          <FadeInSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              Three Steps. No Guesswork.
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-terracotta-100 rounded-full flex items-center justify-center">
                  <Compass className="w-8 h-8 text-terracotta-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-gray-900 mb-3">
                  Tell Your Story
                </h3>
                <p className="text-warm-gray-600">
                  5-minute quiz about where you are and where you want to go. No resume needed—just honesty.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-sage-100 rounded-full flex items-center justify-center">
                  <HandshakeIcon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-gray-900 mb-3">
                  We Match You
                </h3>
                <p className="text-warm-gray-600">
                  Manually curated—no algorithms. A real person reads your story and finds mentors who've walked your path.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-terracotta-100 rounded-full flex items-center justify-center">
                  <Route className="w-8 h-8 text-terracotta-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-gray-900 mb-3">
                  Meet Your Mentor
                </h3>
                <p className="text-warm-gray-600">
                  Start with a $49 trial session or jump into monthly mentorship. Calendly booking, no friction.
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection className="text-center mt-12">
            <p className="text-warm-gray-600 text-sm">
              Average time from quiz to first session: <span className="font-mono font-medium">5 business days</span>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="section-stories section-padding">
        <div className="container-custom">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              Mentors Who've Been There
            </h2>
            <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
              Not career coaches. Not consultants. People who made the leap themselves.
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-6">
            <MentorQuoteCard
              quote="I pivoted from law to product at 51. The hardest part wasn't the skillset—it was believing I wasn't too late."
              name="David Chen"
              background="Former Corporate Lawyer"
              currentRole="Senior PM at Series B Startup"
              expertise={["Legal→Tech", "Negotiation", "Late-stage Pivots"]}
            />

            <MentorQuoteCard
              quote="After 20 years in education, I thought my only option was administration. Turns out, teachers make incredible designers."
              name="Lisa Ramirez"
              background="Former K-12 Teacher"
              currentRole="Lead Product Designer"
              expertise={["Education→Tech", "Portfolio Building", "Career Reframing"]}
            />

            <MentorQuoteCard
              quote="I left my executive role at 55 to become a coach. Everyone thought I was crazy. Five years later, I've never been happier."
              name="Patricia Owens"
              background="Former VP of Sales"
              currentRole="Executive Career Coach"
              expertise={["Corporate→Coaching", "Leadership", "50+ Transitions"]}
            />
          </div>

          <FadeInSection className="text-center mt-12">
            <Link href="/become-mentor" className="btn-ghost">
              Become a Mentor →
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-how section-padding">
        <div className="container-custom">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              Start with One Session. Stay for the Journey.
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              title="Trial Session"
              price="$49"
              features={[
                "1-hour video call",
                "Career roadmap discussion",
                "Resource list customized for you",
                "Session recording",
              ]}
              ctaText="Book a Trial"
              ctaLink="/find-mentor"
            />

            <PricingCard
              title="Monthly Mentorship"
              price="$39"
              period="month"
              popular
              features={[
                "2 sessions per month",
                "Email support between calls",
                "Accountability check-ins",
                "Community Slack access",
                "All trial session benefits",
              ]}
              ctaText="Get Started"
              ctaLink="/find-mentor"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-faq section-padding">
        <div className="container-custom max-w-3xl">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
              Questions You're Probably Thinking
            </h2>
          </FadeInSection>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-warm-gray-200 rounded-lg px-6 data-[state=open]:border-terracotta-500 data-[state=open]:bg-terracotta-50">
              <AccordionTrigger className="font-display text-lg text-warm-gray-900 hover:no-underline py-5">
                I'm 48. Am I too old to switch careers?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray-700 pb-5 border-t border-warm-gray-200 pt-4">
                No. Our oldest mentor made their pivot at 56. The advantage of pivoting mid-career? You bring skills younger competitors don't have: leadership, communication, resilience. Employers value that—if you know how to frame it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-warm-gray-200 rounded-lg px-6 data-[state=open]:border-terracotta-500 data-[state=open]:bg-terracotta-50">
              <AccordionTrigger className="font-display text-lg text-warm-gray-900 hover:no-underline py-5">
                Will I have to take a pay cut?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray-700 pb-5 border-t border-warm-gray-200 pt-4">
                Probably, at first. Most of our mentees took 10-25% cuts for their first role in a new field, then matched their old salary within 18-24 months. Your mentor will help you negotiate smartly and plan financially.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-warm-gray-200 rounded-lg px-6 data-[state=open]:border-terracotta-500 data-[state=open]:bg-terracotta-50">
              <AccordionTrigger className="font-display text-lg text-warm-gray-900 hover:no-underline py-5">
                How is this different from LinkedIn mentorship?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray-700 pb-5 border-t border-warm-gray-200 pt-4">
                LinkedIn mentors are often aspirational (connect with someone successful). CareerJump mentors are operational (worked with someone who solved your exact problem). We match based on life stage, not just industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-warm-gray-200 rounded-lg px-6 data-[state=open]:border-terracotta-500 data-[state=open]:bg-terracotta-50">
              <AccordionTrigger className="font-display text-lg text-warm-gray-900 hover:no-underline py-5">
                What if I don't click with my mentor?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray-700 pb-5 border-t border-warm-gray-200 pt-4">
                Tell us. We'll find a better match. Chemistry matters—this isn't transactional consulting. Your growth depends on genuine connection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-warm-gray-200 rounded-lg px-6 data-[state=open]:border-terracotta-500 data-[state=open]:bg-terracotta-50">
              <AccordionTrigger className="font-display text-lg text-warm-gray-900 hover:no-underline py-5">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray-700 pb-5 border-t border-warm-gray-200 pt-4">
                Trial sessions are non-refundable (you're paying for a mentor's time). Monthly memberships can be canceled anytime—no long-term contracts, no questions asked.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 py-20">
        <div className="container-custom text-center">
          <FadeInSection>
            <h2 className="font-display text-3xl md:text-display-md font-semibold text-white mb-4">
              Your next chapter is waiting.
            </h2>
            <p className="text-terracotta-100 text-lg mb-8 max-w-xl mx-auto">
              Stop researching. Start talking to someone who's been where you are.
            </p>
            <Link href="/find-mentor" className="inline-block bg-white text-terracotta-500 px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-50 transition-colors">
              Find Your Mentor
            </Link>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
