import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - NexaFlow",
  description:
    "Get in touch with NexaFlow. Book a free consultation and discover how we can help grow your business.",
};

export default function ContactPage() {
  return <Contact />;
}
