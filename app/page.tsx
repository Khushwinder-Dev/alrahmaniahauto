import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import WolmartTrustBar from "@/components/Home/WolmartTrustBar";
import TopCategoriesGrid from "@/components/Home/TopCategoriesGrid";
import PromoSplitBanners from "@/components/Home/PromoSplitBanners";
import FeaturedProductsShowcase from "@/components/Home/FeaturedProductsShowcase";
import BestSellersSection from "@/components/Home/BestSellersSection";
import DealCountdownBanner from "@/components/Home/DealCountdownBanner";
import ThreeColumnProductWidget from "@/components/Home/ThreeColumnProductWidget";
import NewArrivalsSection from "@/components/Home/NewArrivalsSection";
import FaqSection from "@/components/Home/FaqSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Hero Section with 4K Video Background & Accessories Copy (UNTOUCHED) */}
        <div>
          <HeroSection />
        </div>

        {/* 2. Top Product Categories of the Month */}
        <TopCategoriesGrid />

        {/* 3. Promotional Split Banners (Seat Covers / 7D Mats / Starlight Roof) */}
        <PromoSplitBanners />

        {/* 4. Featured Products Showcase */}
        <FeaturedProductsShowcase />

        {/* 5. Best Selling & Trending Auto Accessories Grid */}
        <BestSellersSection />

        {/* 6. Limited-Time Bundle Deal Countdown Banner */}
        <DealCountdownBanner />

        {/* 7. Signature Wolmart 3-Column Product Widget (Top Rated / Best Selling / New Arrivals) */}
        <ThreeColumnProductWidget />

        {/* 8. Fresh New Arrivals & Auto Accessories Showcase */}
        <NewArrivalsSection />

        {/* 9. 6 Automotive Product & Fitment FAQs */}
        <FaqSection />

        {/* 10. Wolmart Trust & Value Proposition Bar (Above Footer Section) */}
        <WolmartTrustBar />
      </main>
    </div>
  );
}
