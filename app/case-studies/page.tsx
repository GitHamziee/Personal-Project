import type { Metadata } from "next";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies - NexaFlow",
  description:
    "See how NexaFlow has helped businesses grow with web development, SEO, lead generation, cold calling, and CRM automation.",
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
