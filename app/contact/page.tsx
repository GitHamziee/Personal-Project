import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Data Mentor Labs",
  description:
    "Get in touch with Data Mentor Labs. Let's discuss how our AI, web, and data solutions can help your business grow.",
};

export default function ContactPage() {
  return <Contact />;
}
