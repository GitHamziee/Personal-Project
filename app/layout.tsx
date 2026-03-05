import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NexaFlow - Web Development, SEO & Lead Generation Agency",
  description:
    "NexaFlow helps businesses grow with high-performance websites, SEO, lead generation, cold calling, and CRM automation. Results-driven digital solutions.",
  keywords: [
    "web development agency",
    "SEO services",
    "lead generation",
    "cold calling",
    "CRM solutions",
    "digital agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
