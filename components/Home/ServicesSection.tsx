"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  Layers,
  Sparkles,
  Shield,
  Tv,
  SunMedium,
  CheckCircle2,
  ArrowRight,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
  const { isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("All Products");

  const categories = [
    "All Products",
    "Seat Covers",
    "Floor Mats",
    "Lighting & Electronics",
  ];

  const products = [
    {
      id: "seat-covers",
      title: isArabic ? "أغطية المقاعد الجلدية المخصصة (نابا)" : "Custom Napa Leather Seat Covers",
      category: "Seat Covers",
      desc: isArabic
        ? "تفصيل دقيق بالليزر مع خياطة دايموند 3D وجلود نابا مقاومة للتشقق والحرارة العالية."
        : "Precision laser-cut 3D diamond quilted leather tailored to your exact car model.",
      features: [
        "100% Side-Airbag Compatible",
        "Heat & UV Crack Resistant",
        "3-Year Written Warranty",
      ],
      image: "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
    },
    {
      id: "7d-mats",
      title: isArabic ? "دعاسات أرضية 7D الفاخرة لكافة الأحوال الجوية" : "7D Luxury All-Weather Floor Mats",
      category: "Floor Mats",
      desc: isArabic
        ? "حماية ثلاثية الأبعاد كاملة لأرضيات السيارة من الرمال والماء والسوائل وسهلة التنظيف."
        : "Deep-dish laser-scanned floor liners providing edge-to-edge cabin protection.",
      features: [
        "100% Waterproof & Sandproof",
        "Anti-Slip Fastening Clips",
        "Double-Layer Removable Carpet",
      ],
      image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
    },
    {
      id: "colored-seatbelts",
      title: isArabic ? "أحزمة الأمان الملونة الرياضية" : "Custom-Colored Sport Seatbelts",
      category: "Seat Covers",
      desc: isArabic
        ? "ألوان حصرية مطابقة لمعايير السلامة العالمية مع نقل آليات الشد الأصلية بدقة."
        : "High-tensile replacement webbing in striking sport colors with OEM pretensioners.",
      features: [
        "Meets Global Safety Regulations",
        "Over 30 Vibrant Colors",
        "Automated Box-X Stitching",
      ],
      image: "/images/service-3.png",
    },
    {
      id: "starlight-roof",
      title: isArabic ? "نجوم سقف روز رايز (ألياف ضوئية)" : "Starlight Roof Headliner Constellation",
      category: "Lighting & Electronics",
      desc: isArabic
        ? "ألياف ضوئية ذكية مع مؤثرات وميض وشهب قابلة للتحكم عبر تطبيق الهاتف الذكي."
        : "Twinkle & shooting star optic fibers with smartphone Bluetooth app control.",
      features: [
        "Over 800+ Micro Optic Points",
        "Customizable Shooting Stars",
        "App & Wireless Remote Control",
      ],
      image: "/images/service-4.png",
    },
    {
      id: "android-screens",
      title: isArabic ? "شاشات أندرويد فائقة الوضوح وكاميرات 360" : "Android Touchscreens & 360 Cameras",
      category: "Lighting & Electronics",
      desc: isArabic
        ? "شاشات ذكية متوافقة مع أنظمة السيارة وتدعم Apple CarPlay و Android Auto وكاميرات المساعدة."
        : "Crystal-clear Android displays with Apple CarPlay, 360 birds-eye cameras, and DSP.",
      features: [
        "Wireless Apple CarPlay & Auto",
        "QLED High-Definition Display",
        "Plug & Play Harness Integration",
      ],
      image: "/images/service-2.png",
    },
    {
      id: "laser-led",
      title: isArabic ? "عدسات وإضاءات ليزر LED فائقة السطوع" : "Laser LED Headlights & Projector Retrofits",
      category: "Lighting & Electronics",
      desc: isArabic
        ? "إضاءة ليلية قوية وعريضة تكشف الطريق بوضوح تام مع استهلاك طاقة منخفض."
        : "Ultra-bright projector lenses providing crisp night vision without blinding oncoming drivers.",
      features: [
        "Up to 300% Brighter Than Halogen",
        "Built-in Cooling Turbofans",
        "1-Year Replacement Guarantee",
      ],
      image: "/images/service-1.png",
    },
  ];

  const filteredProducts =
    activeTab === "All Products"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "أقسام المنتجات" : "PRODUCT CATALOG"}
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
            {isArabic ? "أفضل منتجات وإكسسوارات " : "Premium Auto Accessories & "}
            <span className="text-red-600">{isArabic ? "السيارات في الشارقة" : "Custom Styling"}</span>
          </h2>

          <p className="mt-3 text-zinc-500 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "استكشف تشكيلاتنا الحصرية المصممة خصيصاً لمقاومة شمس الإمارات بأعلى معايير الجودة والفخامة."
              : "Precision-crafted automotive products engineered for extreme UAE weather durability."}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? "bg-red-600 text-white shadow-md shadow-red-600/25"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-red-600 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-zinc-100">
                    {p.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(p.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider"
                  >
                    <span>{isArabic ? "طلب تسعيرة" : "Get a Quote"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products"
                    className="text-xs font-semibold text-zinc-400 hover:text-zinc-700"
                  >
                    {isArabic ? "عرض بالمخزون" : "In Stock"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
