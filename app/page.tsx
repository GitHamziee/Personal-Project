import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ServicesOverview from "@/components/ServicesOverview";
import ProcessSteps from "@/components/ProcessSteps";
import Results from "@/components/Results";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <ProcessSteps />
      <Results />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
