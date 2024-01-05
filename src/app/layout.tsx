import "./globals.css";

import type { Metadata } from "next";
import { Syncopate } from "next/font/google";
import { Toaster } from "sonner";

import ScavengerHero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoboFamilyImage from "@/components/RoboFamily";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Digital Scavenger Hunt",
  description: "A fun event digital Scanvenger Hunt organized by Prime IT Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={syncopate.className}>
        <Toaster richColors />
        <Navbar />
        <div className="flex items-start gap-10 mt-5 flex-col lg:flex-row lg:max-w-[80%] mx-auto">
          <div className="lg:w-1/2">
            <ScavengerHero />
            {children}
          </div>
          <div className="lg:w-1/2">
            <RoboFamilyImage />
          </div>
        </div>
      </body>
    </html>
  );
}
