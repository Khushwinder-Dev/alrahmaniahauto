import React from "react";
import type { Metadata } from "next";
import FaqPageContent from "@/components/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQs | Al Rahmaniah Auto Accessories & Upholstery Sharjah",
  description:
    "Find answers to frequently asked questions about custom leather seat covers, 7D floor mats, starlight headliners, colored seatbelts, auto electronics, warranties, and installation in Sharjah.",
  alternates: {
    canonical: "https://alrahmaniahauto.ae/faqs",
  },
};

export default function FAQsPage() {
  return <FaqPageContent />;
}
