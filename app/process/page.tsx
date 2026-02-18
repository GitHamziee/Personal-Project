import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Our Process - Data Mentor Labs",
  description:
    "Discover our proven 4-step process: Discovery, Design, Development, and Delivery. Transparent, agile, and results-driven.",
};

export default function ProcessPage() {
  return <Process />;
}
