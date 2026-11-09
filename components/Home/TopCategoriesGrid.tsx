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
    titleAr: "تفصيل مقاعد وتلبيس السيارات",
    tagline: "3D diamond quilted, Napa & perforated leather",
    taglineAr: "خياطة ليزر ماسية 3D وجلود نابا معالجة ضد الحرارة",
    image: "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
    badge: "Best Seller",
    badgeAr: "الأكثر طلباً",
    href: "/products?category=Car+Seat+Covers",
  },
  {
    id: 2,
    title: "7D / 5D Molded Floor Mats",
    titleAr: "دعاسات وأرضيات 7D و 5D المقولبة",
    tagline: "Waterproof all-weather laser-fitted cabin coverage",
    taglineAr: "تغطية شاملة ومقاومة تامة للماء والرمال في الإمارات",
    image: "/fb-posts/461951688_122103674852549942_8184493955403732311_n.png",
    badge: "All-Weather",
    badgeAr: "مقاومة للرمال",
    href: "/products?category=Floor+Carpets+%26+Mats",
  },
  {
    id: 3,
    title: "Custom Colored Seatbelts",
    titleAr: "أحزمة أمان ملونة رياضية",
    tagline: "High-tensile certified racing & styling belts in 20+ shades",
    taglineAr: "أحزمة أمان ملونة معتمدة بأكثر من 20 لوناً رياضياً",
    image: "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
    badge: "Custom Colors",
    badgeAr: "ألوان رياضية",
    href: "/products?category=Custom+Colored+Seatbelts",
  },
  {
    id: 4,
    title: "Starlight Roof Headliners",
    titleAr: "سقف نجوم رولز رويس وبطانات الأسقف",
    tagline: "Rolls-Royce optic fiber stars, Alcantara & anti-sag repair",
    taglineAr: "نجوم متلألئة بألياف ضوئية وبطانة شامواه وألكانتارا",
    image: "/fb-posts/609035383_122200209176549942_2808337490054960890_n.jpg",
    badge: "VIP Luxury",
    badgeAr: "فخامة VIP",
    href: "/products?category=Roof+Headliners",
  },
  {
    id: 5,
    title: "Upholstery Leather & Fabrics",
    titleAr: "جلود وأقمشة التنجيد الفاخرة",
    tagline: "60+ shades of German PVC, Napa & master leatherette rolls",
    taglineAr: "أكثر من 60 لوناً من جلود نابا والشامواه المقاوم للشمس",
    image: "/fb-posts/589737449_122194717400549942_1424638142598421653_n.jpg",
    badge: "60+ Shades",
    badgeAr: "تشكيلة 2025",
    href: "/products?category=Upholstery+Leather+%26+Fabrics",
  },
  {
    id: 6,
    title: "Microfiber Suede & Alcantara",
    titleAr: "أقمشة ألكانتارا وشامواه مايكروفايبر",
    tagline: "Non-glare motorsport suede for pillars, dash & headliners",
    taglineAr: "شامواه ناعم فاخر للأسقف ولوحة القيادة والأبواب",
    image: "/fb-posts/592746335_122194714862549942_8464117864862490904_n.jpg",
    badge: "Ultra Soft",
    badgeAr: "غير عاكس للضوء",
    href: "/products?category=Upholstery+Leather+%26+Fabrics",
  },
  {
    id: 7,
    title: "Diamond Perforated Leather",
    titleAr: "جلود سيارات مخرمة لمقاعد التبريد",
    tagline: "Precision diamond laser holes for ventilated AC seats",
    taglineAr: "تثقيب ليزري دقيق لمقاعد التبريد والتهوية الصيفية",
    image: "/fb-posts/592743969_122194708214549942_1469620853049452467_n.jpg",
    badge: "Ventilated",
    badgeAr: "تبريد المقاعد",
    href: "/products?category=Car+Seat+Covers",
  },
  {
    id: 8,
    title: "Car Styling & Cockpit Upgrades",
    titleAr: "تجديد وديكورات مقصورة السيارات",
    tagline: "Cockpit restyling, custom stitching & steering wheel wraps",
    taglineAr: "تجديد وتنجيد شامل للأبواب والكونسول والمقود بالورشة",
    image: "/fb-posts/581519632_122191279118549942_7579179045438295882_n.jpg",
    badge: "Master Craft",
    badgeAr: "حرفة بالورشة",
    href: "/products",
  },
];

export default function TopCategoriesGrid() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 relative z-10">
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
