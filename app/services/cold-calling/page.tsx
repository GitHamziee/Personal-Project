import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cold Calling Services - NexaFlow",
  description:
    "Professional outbound calling services that book qualified meetings and fill your sales pipeline consistently.",
};

export default function ColdCallingPage() {
  return (
    <ServicePageLayout
      title="Cold"
      highlight="Calling"
      description="Professional outbound calling teams that book qualified meetings for your sales team."
      longDescription="Our trained calling teams become an extension of your business. We develop custom scripts, qualify prospects against your ideal customer profile, and book meetings directly on your sales team's calendar. Every call is recorded, every metric tracked, and every campaign optimized for maximum appointment conversion."
      stats={[
        { value: "30+", label: "Meetings per month" },
        { value: "15%", label: "Avg. connect rate" },
        { value: "85%", label: "Show-up rate" },
        { value: "3x", label: "Pipeline growth" },
      ]}
      features={[
        { icon: "MessageSquare", title: "Script Development", description: "Custom call scripts tailored to your value proposition, objections, and ideal customer profile." },
        { icon: "PhoneCall", title: "Appointment Setting", description: "Qualified meetings booked directly on your sales team's calendar with confirmed prospects." },
        { icon: "Users", title: "Lead Qualification", description: "BANT-qualified prospects so your closers only spend time on real opportunities." },
        { icon: "ClipboardCheck", title: "CRM Integration", description: "All call data, notes, and outcomes logged directly into your CRM in real-time." },
        { icon: "Headphones", title: "Call Recording & QA", description: "Every call recorded and reviewed for quality assurance and continuous improvement." },
        { icon: "BarChart3", title: "Daily Reporting", description: "Daily activity reports with calls made, connects, appointments set, and conversion rates." },
      ]}
      benefits={[
        "Trained callers who represent your brand professionally",
        "Custom scripts developed with your team",
        "Meetings booked directly on your calendar",
        "Full CRM integration and data logging",
        "Transparent daily and weekly reporting",
        "Scale up or down based on your needs",
      ]}
      process={[
        { step: "01", title: "Onboarding", description: "We learn your ICP, value proposition, and objection handling." },
        { step: "02", title: "Script & List", description: "Custom scripts developed and prospect lists built and verified." },
        { step: "03", title: "Calling Begins", description: "Our team starts dialing with daily reporting and feedback loops." },
        { step: "04", title: "Optimize", description: "Continuous script refinement and list optimization based on results." },
      ]}
    />
  );
}
