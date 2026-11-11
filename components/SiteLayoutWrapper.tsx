"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Common/Footer";
import FloatingChatWidget from "@/components/Common/FloatingChatWidget";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import VisitorTracker from "@/components/VisitorTracker";
import SiteSecurityShield from "@/components/Common/SiteSecurityShield";

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen bg-zinc-950 text-zinc-100">{children}</div>;
  }

  return (
    <>
      <SiteSecurityShield />
      <VisitorTracker />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingChatWidget />
      <WelcomeOfferModal autoShow={true} />
    </>
  );
}

