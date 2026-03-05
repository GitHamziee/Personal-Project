import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Development - NexaFlow",
  description:
    "Custom web development services. High-performance websites, web applications, and e-commerce solutions built for conversion.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Web"
      highlight="Development"
      description="High-performance websites and web applications built for conversion, speed, and scale."
      longDescription="We build websites that don't just look good — they perform. Every project is engineered for speed, optimized for search engines, and designed to convert visitors into customers. From single-page landing sites to complex web applications, we use modern frameworks and best practices to deliver results that matter."
      stats={[
        { value: "99.9%", label: "Uptime guarantee" },
        { value: "< 2s", label: "Avg. load time" },
        { value: "50+", label: "Sites launched" },
        { value: "89%", label: "Avg. conversion lift" },
      ]}
      features={[
        { icon: "Code2", title: "Full-Stack Development", description: "Custom web applications built with React, Next.js, and Node.js for maximum performance." },
        { icon: "Globe", title: "Responsive Design", description: "Pixel-perfect layouts that look stunning on every device, from mobile to desktop." },
        { icon: "Smartphone", title: "Progressive Web Apps", description: "App-like experiences that work offline and load instantly on any device." },
        { icon: "Zap", title: "Performance Optimization", description: "Blazing-fast load times through code splitting, image optimization, and CDN delivery." },
        { icon: "ShoppingCart", title: "E-Commerce Solutions", description: "Custom storefronts with payment integration, inventory management, and analytics." },
        { icon: "Wrench", title: "Maintenance & Support", description: "Ongoing updates, security patches, and performance monitoring to keep your site running." },
      ]}
      benefits={[
        "Built for conversion — not just aesthetics",
        "SEO-optimized from day one",
        "Mobile-first responsive design",
        "Fast delivery with clear milestones",
        "Post-launch support and maintenance included",
        "Full ownership of code and assets",
      ]}
      process={[
        { step: "01", title: "Discovery", description: "We learn your business goals, target audience, and technical requirements." },
        { step: "02", title: "Design", description: "Wireframes and high-fidelity mockups reviewed with your team." },
        { step: "03", title: "Development", description: "Agile sprints with weekly demos so you see progress in real-time." },
        { step: "04", title: "Launch & Support", description: "Thorough testing, deployment, and ongoing maintenance." },
      ]}
    />
  );
}
