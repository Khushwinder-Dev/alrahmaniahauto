import React, { Suspense } from "react";
import type { Metadata } from "next";
import CareerPageContent from "@/components/CareerPageContent";

export const metadata: Metadata = {
  title: "Careers at Al Rahmaniah Auto | Automotive Workshop Jobs in Sharjah",
  description:
    "Explore rewarding automotive career opportunities for certified auto mechanics, diagnostic specialists, auto electricians, AC technicians, and car upholstery craftsmen in Sharjah, UAE.",
  keywords: [
    "automotive jobs Sharjah",
    "car mechanic jobs UAE",
    "auto electrician jobs Sharjah",
    "car upholstery craftsman UAE",
    "Al Rahmaniah Auto careers",
    "workshop technician vacancy",
  ],
};

export default function CareerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-50" />}>
      <CareerPageContent />
    </Suspense>
  );
}
