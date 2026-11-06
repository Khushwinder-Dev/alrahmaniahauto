"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryCard {
  id: number;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  image: string;
  badge: string;
  badgeAr: string;
  href: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 1,
    title: "Custom Car Seat Covers",
    titleAr: "تفصيل مقاعد السيارات الفاخرة",
    tagline: "3D diamond quilted, Napa & perforated leather",
    taglineAr: "خياطة ليزر ماسية 3D وجلود نابا معالجة ضد الحرارة",
    image: "/images/service-6.png",
    badge: "Best Seller",
    badgeAr: "الأكثر طلباً",
    href: "/products?category=seat-covers",
  },
  {
    id: 2,
    title: "7D / 5D Molded Floor Mats",
    titleAr: "دعاسات وأرضيات 7D و 5D المقولبة",
    tagline: "Waterproof all-weather complete coverage",
    taglineAr: "تغطية شاملة ومقاومة تامة للماء والرمال في الإمارات",
    image: "/images/service-10.png",
    badge: "All-Weather",
    badgeAr: "مقاومة للرمال",
    href: "/products?category=mats",
  },
  {
    id: 3,
    title: "Custom Colored Seatbelts",
    titleAr: "أحزمة أمان ملونة رياضية",
    tagline: "High-tensile certified racing & styling belts",
    taglineAr: "أحزمة أمان ملونة معتمدة بأكثر من 30 لوناً رياضياً",
    image: "/images/service-8.png",
    badge: "Custom Colors",
    badgeAr: "ألوان رياضية",
    href: "/products?category=seatbelts",
  },
  {
    id: 4,
    title: "Starlight Roof Headliners",
    titleAr: "سقف نجوم رولز رويس (ألياف ضوئية)",
    tagline: "Rolls-Royce optic fiber stars & Alcantara",
    taglineAr: "نجوم متلألئة بألياف ضوئية وبطانة شامواه فاخرة",
    image: "/images/service-7.png",
    badge: "VIP Luxury",
    badgeAr: "فخامة VIP",
    href: "/products?category=headliners",
  },
  {
    id: 5,
    title: "Car Electronics & Audio",
    titleAr: "شاشات أندرويد وإلكترونيات السيارات",
    tagline: "Android touchscreens, DSP amps & dashcams",
    taglineAr: "شاشات لمس ذكية، أنظمة صوت DSP، وكاميرات تسجيل",
    image: "/images/service-2.png",
    badge: "Smart Tech",
    badgeAr: "تقنية ذكية",
    href: "/products?category=electronics",
  },
  {
    id: 6,
    title: "Laser LED Headlamps",
    titleAr: "إضاءات ليزر LED وعدسات فائقة",
    tagline: "High-lumen laser bulbs & ambient interior lights",
    taglineAr: "عدسات ليزر عالية السطوع وإنارة داخلية محيطية",
    image: "/images/service-9.png",
    badge: "Ultra Bright",
    badgeAr: "إضاءة فائقة",
    href: "/products?category=lighting",
  },
  {
    id: 7,
    title: "Upholstery Leather & Fabrics",
    titleAr: "جلود وأقمشة التنجيد المتينة",
    tagline: "Ultra-durable anti-UV German PVC & Napa",
    taglineAr: "جلود ألمانية مقاومة لأشعة الشمس والتشقق صيفاً",
    image: "/images/service-1.png",
    badge: "UV Resistant",
    badgeAr: "مقاومة للحرارة",
    href: "/products?category=upholstery",
  },
  {
    id: 8,
    title: "Car Styling & Care Kits",
    titleAr: "إكسسوارات الزينة وحماية السيارات",
    tagline: "Sunshades, ceramic coatings & styling accents",
    taglineAr: "ستائر متحركة، حماية وعوازل حرارية، ومشتتات هواء",
    image: "/images/service-3.png",
    badge: "Protection",
    badgeAr: "حماية متكاملة",
    href: "/products?category=styling",
  },
];

export default function TopCategoriesGrid() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>{isArabic ? "أقسام الإكسسوارات الأكثر طلباً" : "Top Featured Collections"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              {isArabic ? "أقسام " : "Top Automotive "}
              <span className="text-red-600">{isArabic ? "إكسسوارات وزينة السيارات" : "Categories"}</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              {isArabic
                ? "اختر الفئة المفضلة لاستكشاف خيارات التفصيل الليزري والخامات الألمانية والتركيب المباشر في الشارقة."
                : "Select your preferred category to explore custom fitment, premium materials, and direct installation in Sharjah."}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-red-600 transition-colors group self-start md:self-auto border-b border-zinc-300 pb-1 hover:border-red-600"
          >
            <span>{isArabic ? "تصفح جميع المنتجات والإكسسوارات" : "View All 500+ Accessories"}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-red-600/70 transition-all duration-500 flex flex-col hover:shadow-xl shadow-xs"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={cat.image}
                  alt={isArabic ? cat.titleAr : cat.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-red-600 shadow-sm border border-red-100">
                    {isArabic ? cat.badgeAr : cat.badge}
                  </span>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1">
                    {isArabic ? cat.titleAr : cat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                    {isArabic ? cat.taglineAr : cat.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-red-600">
                  <span>{isArabic ? "استكشف التشكيلة" : "Explore Selection"}</span>
                  <span className="text-zinc-400 group-hover:text-red-600">{isArabic ? "←" : "→"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
