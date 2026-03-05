import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO Services - NexaFlow",
  description:
    "Data-driven SEO services that increase organic traffic, improve rankings, and drive qualified leads to your business.",
};

export default function SEOPage() {
  return (
    <ServicePageLayout
      title="Search Engine"
      highlight="Optimization"
      description="Data-driven SEO that puts you on page one and keeps you there."
      longDescription="Our SEO strategy goes beyond keywords. We combine technical optimization, quality content, and strategic link building to build sustainable organic growth. Every campaign is backed by data, tracked with transparent reporting, and designed to deliver measurable ROI — not vanity metrics."
      stats={[
        { value: "312%", label: "Avg. traffic increase" },
        { value: "Top 3", label: "Ranking positions" },
        { value: "6 mo", label: "Avg. time to results" },
        { value: "4.2x", label: "Avg. ROI" },
      ]}
      features={[
        { icon: "Settings", title: "Technical SEO", description: "Complete site audits covering speed, crawlability, indexation, and Core Web Vitals." },
        { icon: "FileText", title: "Content Strategy", description: "Keyword research and content planning that targets high-intent search queries." },
        { icon: "Search", title: "On-Page Optimization", description: "Meta tags, heading structure, internal linking, and schema markup done right." },
        { icon: "Link2", title: "Link Building", description: "White-hat outreach campaigns that earn authoritative backlinks in your niche." },
        { icon: "MapPin", title: "Local SEO", description: "Google Business optimization, local citations, and review management for local visibility." },
        { icon: "BarChart3", title: "Analytics & Reporting", description: "Monthly reports with clear metrics: traffic, rankings, conversions, and revenue impact." },
      ]}
      benefits={[
        "Sustainable organic growth — not quick fixes",
        "Transparent monthly reporting with real metrics",
        "Content strategy aligned with buyer intent",
        "Technical foundation that search engines love",
        "Competitive analysis and gap identification",
        "No long-term contracts — results keep you",
      ]}
      process={[
        { step: "01", title: "SEO Audit", description: "Comprehensive analysis of your current site, competitors, and opportunities." },
        { step: "02", title: "Strategy", description: "Custom roadmap with priority keywords, content plan, and technical fixes." },
        { step: "03", title: "Execution", description: "On-page optimization, content creation, and link building campaigns." },
        { step: "04", title: "Measure & Scale", description: "Monthly reporting, strategy refinement, and scaling what works." },
      ]}
    />
  );
}
