import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "CRM Solutions - NexaFlow",
  description:
    "Custom CRM setup, migration, and workflow automation that streamlines your sales process and saves your team hours every week.",
};

export default function CRMSolutionsPage() {
  return (
    <ServicePageLayout
      title="CRM"
      highlight="Solutions"
      description="Custom CRM setup and automation that streamlines your sales process end to end."
      longDescription="Your CRM should work for you — not the other way around. We set up, migrate, and customize CRM platforms to match your exact sales process. From automated workflows and deal routing to custom dashboards and integrations, we turn your CRM into a revenue-driving machine that saves your team hours every week."
      stats={[
        { value: "20+", label: "Hours saved per week" },
        { value: "40+", label: "CRMs configured" },
        { value: "95%", label: "Adoption rate" },
        { value: "3x", label: "Pipeline visibility" },
      ]}
      features={[
        { icon: "Database", title: "CRM Setup & Migration", description: "Clean setup or migration from your existing system with zero data loss." },
        { icon: "Workflow", title: "Workflow Automation", description: "Automated deal routing, task creation, email sequences, and status updates." },
        { icon: "BarChart3", title: "Reporting Dashboards", description: "Custom dashboards that give your team real-time visibility into pipeline and performance." },
        { icon: "Plug", title: "Third-Party Integrations", description: "Connect your CRM with email, calendar, billing, marketing tools, and more." },
        { icon: "Settings", title: "Pipeline Management", description: "Custom deal stages, scoring, and forecasting aligned with your sales process." },
        { icon: "GraduationCap", title: "Team Training", description: "Hands-on training and documentation so your team gets up to speed fast." },
      ]}
      benefits={[
        "CRM configured to match your exact sales process",
        "Automated workflows that eliminate manual tasks",
        "Clean data migration with zero loss",
        "Custom dashboards for leadership visibility",
        "Seamless integration with your existing tools",
        "Ongoing support and optimization",
      ]}
      process={[
        { step: "01", title: "Assessment", description: "We audit your current setup, processes, and pain points." },
        { step: "02", title: "Configuration", description: "CRM customized with pipelines, automations, and integrations." },
        { step: "03", title: "Migration", description: "Clean data migration and integration testing before go-live." },
        { step: "04", title: "Training & Support", description: "Team training, documentation, and ongoing optimization." },
      ]}
    />
  );
}
