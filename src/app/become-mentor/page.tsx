"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navigation from "@/components/custom/Navigation";
import Footer from "@/components/custom/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const expertiseAreas = [
  { id: "career-transitions", label: "Career Transitions (industry changes)" },
  { id: "resume-portfolio", label: "Resume & Portfolio Building" },
  { id: "salary-negotiation", label: "Salary Negotiation" },
  { id: "ageism", label: "Dealing with Ageism" },
  { id: "work-life-balance", label: "Work-Life Balance During Transition" },
  { id: "upskilling", label: "Upskilling & Certifications" },
  { id: "entrepreneurship", label: "Starting a Business / Entrepreneurship" },
  { id: "tech-transition", label: "Transitioning into Tech" },
];

export default function BecomeMentorPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentRole: "",
    previousCareer: "",
    transitionStory: "",
    expertise: [] as string[],
    availability: "",
    whyMentor: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleExpertiseToggle = (id: string) => {
    setFormData({
      ...formData,
      expertise: formData.expertise.includes(id)
        ? formData.expertise.filter((e) => e !== id)
        : [...formData.expertise, id],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real app, this would submit to Supabase
    console.log("Submitted form:", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    router.push("/thank-you?type=mentor");
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.currentRole.trim() &&
    formData.previousCareer.trim() &&
    formData.transitionStory.trim() &&
    formData.expertise.length > 0 &&
    formData.availability.trim();

  return (
    <main className="min-h-screen">
      <div className="section-hero">
        <Navigation />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4 text-center">
              Become a Mentor
            </h1>
            <p className="text-warm-gray-600 text-lg mb-12 text-center max-w-xl mx-auto">
              You made the leap. Now help someone else take theirs. Share your
              experience with mid-career professionals navigating their own pivots.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-warm-gray-800 font-medium mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-warm-gray-800 font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="currentRole" className="text-warm-gray-800 font-medium mb-2 block">
                  Current Role & Company *
                </Label>
                <Input
                  id="currentRole"
                  className="form-input"
                  placeholder="e.g., Senior Product Designer at Acme Corp"
                  value={formData.currentRole}
                  onChange={(e) => handleInputChange("currentRole", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="previousCareer" className="text-warm-gray-800 font-medium mb-2 block">
                  Previous Career (Before Your Pivot) *
                </Label>
                <Input
                  id="previousCareer"
                  className="form-input"
                  placeholder="e.g., High School English Teacher for 15 years"
                  value={formData.previousCareer}
                  onChange={(e) => handleInputChange("previousCareer", e.target.value)}
                  required
                />
              </div>
            </motion.div>

            {/* Transition Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Label htmlFor="transitionStory" className="text-warm-gray-800 font-medium mb-2 block">
                Your Transition Story (200-300 words) *
              </Label>
              <p className="text-warm-gray-500 text-sm mb-3">
                Tell us about your pivot. What was hardest? What surprised you? What do
                you wish someone had told you?
              </p>
              <Textarea
                id="transitionStory"
                className="form-input min-h-[200px]"
                placeholder="Example: I was 44, had two kids in middle school, and a mortgage that made risk feel impossible. I'd spent 20 years in finance and felt stuck. The hardest part wasn't learning new skills—it was believing I could start over at my age. What surprised me was how much my corporate experience translated..."
                value={formData.transitionStory}
                onChange={(e) => handleInputChange("transitionStory", e.target.value)}
                required
              />
              <p className="text-warm-gray-400 text-sm mt-2">
                {formData.transitionStory.split(/\s+/).filter(Boolean).length} words
              </p>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Label className="text-warm-gray-800 font-medium mb-4 block">
                Areas of Expertise (select all that apply) *
              </Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertiseAreas.map((area) => (
                  <div
                    key={area.id}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.expertise.includes(area.id)
                        ? "border-terracotta-500 bg-terracotta-50"
                        : "border-warm-gray-200 bg-white hover:border-warm-gray-300"
                    }`}
                    onClick={() => handleExpertiseToggle(area.id)}
                  >
                    <Checkbox
                      id={area.id}
                      checked={formData.expertise.includes(area.id)}
                      onCheckedChange={() => handleExpertiseToggle(area.id)}
                      className="border-warm-gray-300 data-[state=checked]:bg-terracotta-500 data-[state=checked]:border-terracotta-500"
                    />
                    <Label
                      htmlFor={area.id}
                      className="flex-1 cursor-pointer text-warm-gray-700"
                    >
                      {area.label}
                    </Label>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Label htmlFor="availability" className="text-warm-gray-800 font-medium mb-2 block">
                Availability (hours per week) *
              </Label>
              <Input
                id="availability"
                className="form-input"
                placeholder="e.g., 2-4 hours per week, evenings preferred"
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
                required
              />
            </motion.div>

            {/* Why Mentor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label htmlFor="whyMentor" className="text-warm-gray-800 font-medium mb-2 block">
                Why do you want to mentor? (optional)
              </Label>
              <Textarea
                id="whyMentor"
                className="form-input min-h-[120px]"
                placeholder="What draws you to helping others navigate career transitions?"
                value={formData.whyMentor}
                onChange={(e) => handleInputChange("whyMentor", e.target.value)}
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                  isFormValid && !isSubmitting
                    ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                    : "bg-warm-gray-200 text-warm-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
              <p className="text-center text-warm-gray-500 text-sm mt-4">
                We review applications within 7 business days.
              </p>
            </motion.div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
