import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Common/Footer";
import FloatingChatWidget from "@/components/Common/FloatingChatWidget";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import { Toaster } from "react-hot-toast";
import AosInit from "@/components/AosInit";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alrahmaniahauto.ae"),
  title: "Al Rahmaniah Auto Accessories | Premium Car Accessories & Styling in Sharjah, UAE",
  description:
    "Shop premium auto accessories, custom leather seat covers, 7D floor mats, car electronics, laser LED lighting, and interior styling at Al Rahmaniah Auto Accessories in Sharjah Industrial Area 4 & 5.",
  keywords: [
    "car accessories Sharjah",
    "auto accessories UAE",
    "custom car seat covers",
    "7D floor mats Sharjah",
    "car styling UAE",
    "car electronics Sharjah",
    "automotive LED lights",
    "Al Rahmaniah Auto Accessories"
  ],
  icons: {
    icon: "/images/alrahmaniah-logo.jpg",
    apple: "/images/alrahmaniah-logo.jpg",
  },
  openGraph: {
    title: "Al Rahmaniah Auto Accessories | Premium Car Accessories & Styling in Sharjah, UAE",
    description:
      "Shop premium auto accessories, custom leather seat covers, 7D floor mats, car electronics, laser LED lighting, and interior styling at Al Rahmaniah Auto Accessories in Sharjah Industrial Area 4 & 5.",
    images: ["/images/alrahmaniah-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/alrahmaniah-logo.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/images/alrahmaniah-logo.jpg" />
      </head>
      <body className="antialiased bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white">
        <LanguageProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#18181b",
                color: "#fff",
                border: "1px solid #27272a",
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: {
                iconTheme: {
                  primary: "#dc2626",
                  secondary: "#fff",
                },
              },
            }}
          />

          <AosInit />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />

          {/* Floating Chat & Contact Action Widget */}
          <FloatingChatWidget />

          {/* Welcome Discount Offer Modal (10% Off) */}
          <WelcomeOfferModal autoShow={true} />
        </LanguageProvider>
      </body>
    </html>
  );
}
