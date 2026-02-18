import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us - NexGen Solutions",
  description:
    "Learn about NexGen Solutions — a team of passionate innovators building the future with AI, web development, and data analytics.",
};

export default function AboutPage() {
  return <About />;
}
