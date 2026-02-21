import type { Metadata } from "next";
import { Crimson_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareerJump — Mentorship for Midlife Career Changers",
  description: "Connect with mentors who've successfully pivoted careers after 40. Real stories, real roadmaps, real support for your career transition.",
  keywords: ["career change", "midlife career", "career pivot", "mentor", "career coach", "40+", "career transition"],
  openGraph: {
    title: "CareerJump — Mentorship for Midlife Career Changers",
    description: "Connect with mentors who've successfully pivoted careers after 40.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${inter.variable} ${jetbrainsMono.variable} pattern-overlay`}>
        {children}
      </body>
    </html>
  );
}
