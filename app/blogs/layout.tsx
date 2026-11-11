import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Accessories & Car Styling Guides | Al Rahmaniah Auto Sharjah",
  description:
    "Expert automotive styling guides, custom car seat covers advice, 7D floor mat comparisons, starlight roof installation tips, and car accessories in Sharjah, UAE.",
  keywords: [
    "car accessories Sharjah",
    "auto accessories blog UAE",
    "custom seat covers tips",
    "7D floor mats vs 5D mats",
    "starlight headliner installation Sharjah",
    "colored seatbelts UAE",
    "car upholstery Sharjah",
    "Al Rahmaniah Auto Accessories blog"
  ],
  alternates: {
    canonical: "https://alrahmaniahauto.ae/blogs",
  },
  openGraph: {
    title: "Auto Accessories & Car Styling Guides | Al Rahmaniah Auto Sharjah Blog",
    description:
      "Expert automotive styling guides, custom car seat covers advice, 7D floor mat comparisons, starlight roof installation tips, and car accessories in Sharjah, UAE.",
    url: "https://alrahmaniahauto.ae/blogs",
    siteName: "Al Rahmaniah Auto Accessories",
    type: "website",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

