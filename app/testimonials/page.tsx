import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials - Data Mentor Labs",
  description:
    "Hear from our happy clients. See how Data Mentor Labs has helped businesses transform with AI, web, and data solutions.",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
