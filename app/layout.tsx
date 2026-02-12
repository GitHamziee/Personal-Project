import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGen Solutions - AI, Web Development & Data Analytics Agency",
  description:
    "NexGen Solutions is a cutting-edge technology agency specializing in AI bot creation, web development, and data analytics. We build the future with technology.",
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
