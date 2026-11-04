import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import WolmartTrustBar from "@/components/Home/WolmartTrustBar";
import VehicleAccessoriesFinder from "@/components/Home/VehicleAccessoriesFinder";
import TopCategoriesGrid from "@/components/Home/TopCategoriesGrid";
import PromoSplitBanners from "@/components/Home/PromoSplitBanners";
import FeaturedProductsShowcase from "@/components/Home/FeaturedProductsShowcase";
import BestSellersSection from "@/components/Home/BestSellersSection";
import DealCountdownBanner from "@/components/Home/DealCountdownBanner";
import ThreeColumnProductWidget from "@/components/Home/ThreeColumnProductWidget";
import MaterialSwatchesShowcase from "@/components/Home/MaterialSwatchesShowcase";
import RecentWorkSection from "@/components/Home/RecentWorkSection";
import AppointmentFormSection from "@/components/Home/AppointmentFormSection";
import PartnershipSection from "@/components/Home/PartnershipSection";
import FaqSection from "@/components/Home/FaqSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Hero Section with 4K Video Background & Accessories Copy (UNTOUCHED) */}
        <div>
          <HeroSection />
        </div>

        {/* 2. Wolmart Trust & Value Proposition Bar */}
        <WolmartTrustBar />

        {/* 3. Interactive Vehicle Make & Model Accessories Finder */}
        <VehicleAccessoriesFinder />

        {/* 4. Top Product Categories of the Month */}
        <TopCategoriesGrid />

        {/* 5. Promotional Split Banners (Seat Covers / 7D Mats / Starlight Roof) */}
        <PromoSplitBanners />

        {/* 6. Featured Products Showcase with Category Tabs */}
        <FeaturedProductsShowcase />

        {/* 7. Best Selling & Trending Auto Accessories Grid */}
        <BestSellersSection />

        {/* 8. Limited-Time Bundle Deal Countdown Banner */}
        <DealCountdownBanner />

        {/* 9. Signature Wolmart 3-Column Product Widget (Top Rated / Best Selling / New Arrivals) */}
        <ThreeColumnProductWidget />

        {/* 10. Bespoke Upholstery & Material Swatches Showcase */}
        <MaterialSwatchesShowcase />

        {/* 11. Recent Custom Installations Portfolio Showcase */}
        <RecentWorkSection />

        {/* 12. Instant Custom Accessories Quotation Request Form */}
        <AppointmentFormSection />

        {/* 13. Brand Compatibility Infinite Carousel (Bab Al Bustan Style) */}
        <PartnershipSection />

        {/* 14. 6 Automotive Product & Fitment FAQs */}
        <FaqSection />
      </main>
    </div>
  );
}
