import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Our Services - NexaFlow",
  description:
    "Web development, SEO, cold calling, lead generation, and CRM solutions. NexaFlow delivers the full growth stack for your business.",
};

export default function ServicesPage() {
  return <Services />;
}
