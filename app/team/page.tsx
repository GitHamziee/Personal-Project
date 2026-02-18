import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team - NexGen Solutions",
  description:
    "Meet the talented team of engineers, designers, and strategists behind NexGen Solutions.",
};

export default function TeamPage() {
  return <Team />;
}
