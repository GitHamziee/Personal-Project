import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials - NexGen Solutions",
  description:
    "Hear from our happy clients. See how NexGen Solutions has helped businesses transform with AI, web, and data solutions.",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
