import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team - Data Mentor Labs",
  description:
    "Meet the talented team of engineers, designers, and strategists behind Data Mentor Labs.",
};

export default function TeamPage() {
  return <Team />;
}
