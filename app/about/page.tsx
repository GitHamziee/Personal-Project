import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us - NexaFlow",
  description:
    "Learn about NexaFlow — a results-driven agency helping businesses grow with web development, SEO, lead generation, and CRM automation.",
};

export default function AboutPage() {
  return <About />;
}
