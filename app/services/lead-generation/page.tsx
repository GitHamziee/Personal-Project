import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lead Generation - NexaFlow",
  description:
    "Multi-channel lead generation campaigns that fill your pipeline with qualified prospects ready to buy.",
};

export default function LeadGenerationPage() {
  return (
    <ServicePageLayout
      title="Lead"
      highlight="Generation"
      description="Multi-channel campaigns that fill your pipeline with qualified prospects ready to buy."
      longDescription="We build lead generation engines that run on autopilot. Through a combination of email outreach, LinkedIn campaigns, landing pages, and paid acquisition, we create predictable pipelines of qualified prospects. Every lead is scored, every campaign is A/B tested, and every dollar is tracked to revenue."
      stats={[
        { value: "2.4M", label: "Leads generated" },
        { value: "150+", label: "Campaigns launched" },
        { value: "23%", label: "Avg. reply rate" },
        { value: "5x", label: "Avg. ROI" },
      ]}
      features={[
        { icon: "Mail", title: "Email Campaigns", description: "Personalized cold email sequences with automated follow-ups and A/B testing." },
        { icon: "Linkedin", title: "LinkedIn Outreach", description: "Strategic connection requests and messaging campaigns targeting decision makers." },
        { icon: "FileText", title: "Landing Pages", description: "High-converting landing pages designed to capture leads from paid and organic traffic." },
        { icon: "Filter", title: "Lead Scoring", description: "Automated scoring based on engagement, fit, and intent signals to prioritize follow-up." },
        { icon: "TrendingUp", title: "Pipeline Management", description: "Full visibility into your pipeline with stage tracking and revenue forecasting." },
        { icon: "Target", title: "A/B Testing", description: "Continuous testing of subject lines, messaging, and offers to maximize conversion." },
      ]}
      benefits={[
        "Predictable pipeline of qualified prospects",
        "Multi-channel approach for maximum reach",
        "Personalized messaging at scale",
        "Full pipeline visibility and reporting",
        "Continuous optimization through A/B testing",
        "Seamless handoff to your sales team",
      ]}
      process={[
        { step: "01", title: "ICP Definition", description: "We define your ideal customer profile and build targeted prospect lists." },
        { step: "02", title: "Campaign Design", description: "Messaging, sequences, and landing pages crafted for your audience." },
        { step: "03", title: "Launch & Test", description: "Multi-channel campaigns go live with A/B testing from day one." },
        { step: "04", title: "Scale", description: "Double down on winning channels and scale what drives revenue." },
      ]}
    />
  );
}
