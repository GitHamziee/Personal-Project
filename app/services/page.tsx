import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Our Services - Data Mentor Labs",
  description:
    "Explore our services: AI Bots Creation, Web Development, and Data Analytics. We deliver solutions that drive real business growth.",
};

export default function ServicesPage() {
  return <Services />;
}
