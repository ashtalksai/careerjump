"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navigation from "@/components/custom/Navigation";
import ProgressDots from "@/components/custom/ProgressDots";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    type: "text",
    question: "What's your current role or industry?",
    description: "Where are you right now in your career?",
    placeholder: "e.g., Marketing Manager at a tech company, High School Teacher, Financial Analyst...",
    key: "currentRole",
  },
  {
    id: 2,
    type: "text",
    question: "What role or industry are you targeting?",
    description: "Where do you want to go?",
    placeholder: "e.g., UX Designer, Product Manager, Career Coach, Startup Founder...",
    key: "targetRole",
  },
  {
    id: 3,
    type: "textarea",
    question: "What's your biggest fear or concern about this pivot?",
    description: "Be honest. We've heard it all.",
    placeholder: "e.g., I'm worried I'm too old, I don't know where to start, I can't afford a pay cut, My family depends on my income...",
    key: "biggestFear",
  },
  {
    id: 4,
    type: "radio",
    question: "What's your timeline?",
    description: "No wrong answers here.",
    key: "timeline",
    options: [
      { value: "exploring", label: "Just exploring — no rush" },
      { value: "6-12months", label: "Looking to pivot in 6-12 months" },
      { value: "asap", label: "Ready to move ASAP" },
    ],
  },
  {
    id: 5,
    type: "radio",
    question: "What's your budget comfort level?",
    description: "This helps us match you with the right tier.",
    key: "budget",
    options: [
      { value: "trial", label: "$49 trial session only" },
      { value: "monthly", label: "$39/month ongoing mentorship" },
      { value: "intensive", label: "$100+/month (more intensive support)" },
    ],
  },
];

export default function FindMentorPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // In a real app, this would submit to Supabase
    console.log("Submitted answers:", answers);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    router.push("/thank-you?type=mentee");
  };

  const handleChange = (value: string) => {
    setAnswers({ ...answers, [question.key]: value });
  };

  const isCurrentAnswered = Boolean(answers[question.key]?.trim());

  return (
    <main className="min-h-screen section-hero">
      <Navigation />

      <div className="container-custom py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-12">
            <ProgressDots total={questions.length} current={currentQuestion} />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-display text-3xl md:text-display-md font-semibold text-warm-gray-900 mb-4">
                {question.question}
              </h1>
              <p className="text-warm-gray-600 text-lg mb-8">
                {question.description}
              </p>

              {/* Input based on type */}
              {question.type === "text" && (
                <Input
                  className="form-input w-full text-lg"
                  placeholder={question.placeholder}
                  value={answers[question.key] || ""}
                  onChange={(e) => handleChange(e.target.value)}
                  autoFocus
                />
              )}

              {question.type === "textarea" && (
                <Textarea
                  className="form-input w-full min-h-[150px] text-lg"
                  placeholder={question.placeholder}
                  value={answers[question.key] || ""}
                  onChange={(e) => handleChange(e.target.value)}
                  autoFocus
                />
              )}

              {question.type === "radio" && question.options && (
                <RadioGroup
                  value={answers[question.key] || ""}
                  onValueChange={handleChange}
                  className="space-y-4"
                >
                  {question.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers[question.key] === option.value
                          ? "border-terracotta-500 bg-terracotta-50"
                          : "border-warm-gray-200 bg-white hover:border-warm-gray-300"
                      }`}
                      onClick={() => handleChange(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="border-warm-gray-300 text-terracotta-500"
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer text-warm-gray-900 text-lg"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentQuestion === 0
                  ? "text-warm-gray-300 cursor-not-allowed"
                  : "text-warm-gray-600 hover:text-warm-gray-900 hover:bg-warm-gray-100"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!isCurrentAnswered || isSubmitting}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                isCurrentAnswered && !isSubmitting
                  ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                  : "bg-warm-gray-200 text-warm-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : currentQuestion === questions.length - 1 ? (
                "Find My Match"
              ) : (
                <>
                  Next Question
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Help text */}
          <p className="text-center text-warm-gray-500 text-sm mt-12">
            Your answers are confidential. We use them only to find your perfect mentor match.
          </p>
        </div>
      </div>
    </main>
  );
}
