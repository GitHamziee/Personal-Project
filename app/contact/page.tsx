import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - NexGen Solutions",
  description:
    "Get in touch with NexGen Solutions. Let's discuss how our AI, web, and data solutions can help your business grow.",
};

export default function ContactPage() {
  return <Contact />;
}
