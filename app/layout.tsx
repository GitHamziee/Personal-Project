import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import GrainOverlay from "@/components/GrainOverlay";
import HeroScene from "@/components/HeroScene";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "Data Mentor Labs - AI, Web Development & Data Analytics Agency",
  description:
    "Data Mentor Labs is a cutting-edge technology agency specializing in AI bot creation, web development, and data analytics. We build the future with technology.",
  keywords: [
    "AI bots",
    "web development",
    "data analytics",
    "technology agency",
    "AI solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <HeroScene />
          <Navbar />
          <main className="pt-20 relative z-10">{children}</main>
          <Footer />
          <ChatBot />
          <GrainOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
