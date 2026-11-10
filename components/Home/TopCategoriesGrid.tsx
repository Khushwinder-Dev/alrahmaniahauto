"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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
  {
    id: 9,
    title: "Android Touchscreens & DSP",
    titleAr: "شاشات أندرويد وأنظمة صوتية متطورة",
    tagline: "4K IPS touchscreens, Apple CarPlay, Android Auto & DSP",
    taglineAr: "شاشات 4K مع أبل كاربلاي ومكبرات صوت رقمية دقيقة",
    image: "/images/service-2.png",
    badge: "Smart Tech",
    badgeAr: "تقنيات ذكية",
    href: "/products?category=Car+Electronics",
  },
  {
    id: 10,
    title: "Steering Wheel Leather Wraps",
    titleAr: "تجليد وتفصيل مقود السيارة",
    tagline: "Handcrafted Italian leather, carbon fiber & perforated grip",
    taglineAr: "خياطة يدوية بجلد إيطالي وألياف كربونية رياضية",
    image: "/images/service-1.png",
    badge: "Handcrafted",
    badgeAr: "خياطة يدوية",
    href: "/products?category=Car+Seat+Covers",
  },
  {
    id: 11,
    title: "Laser LED Lights Conversion",
    titleAr: "عدسات ليزر وإضاءة أمامية متقدمة",
    tagline: "High-beam laser conversions, projector lenses & styling DRL",
    taglineAr: "عدسات ليزر فائقة السطوع وإضاءات نهارية عصرية",
    image: "/images/service-9.png",
    badge: "High Beam",
    badgeAr: "سطوع عالي",
    href: "/products",
  },
  {
    id: 12,
    title: "Ambient Interior Lighting",
    titleAr: "إضاءة محيطية تفاعلية 64 لوناً",
    tagline: "App-controlled 64-color ambient light strips for doors & dash",
    taglineAr: "شرائط إضاءة مخفية للأبواب والطبلون بتحكم كامل عبر الهاتف",
    image: "/images/service-7.png",
    badge: "64 Colors",
    badgeAr: "64 لوناً",
    href: "/products",
  },
];

export default function TopCategoriesGrid() {
  const { isArabic } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(Math.abs(scrollLeft) > 10);
      setCanScrollRight(Math.abs(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      updateScrollButtons();
      return () => {
        el.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLElement>(".top-cat-slide");
      const cardWidth = card ? card.offsetWidth : 200;
      const scrollStep = cardWidth + 14; // card width + 14px gap
      const factor = direction === "left" ? -1 : 1;
      const delta = isArabic ? -factor * scrollStep : factor * scrollStep;

      container.scrollBy({
        left: delta,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-zinc-50 text-zinc-900 relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>{isArabic ? "أقسام الإكسسوارات الأكثر طلباً" : "Top Featured Collections"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              {isArabic ? "أقسام " : "Top Automotive "}
              <span className="text-red-600">{isArabic ? "إكسسوارات وزينة السيارات" : "Categories"}</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl">
              {isArabic
                ? "اختر الفئة المفضلة لاستكشاف خيارات التفصيل الليزري والخامات الألمانية والتركيب المباشر في الشارقة."
                : "Select your preferred category to explore custom fitment, premium materials, and direct installation in Sharjah."}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto flex-shrink-0">
            {/* Header Mini Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label={isArabic ? "السابق" : "Previous"}
                className="w-9 h-9 rounded-full border border-zinc-200 hover:border-red-600 bg-white hover:bg-red-600 text-zinc-700 hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label={isArabic ? "التالي" : "Next"}
                className="w-9 h-9 rounded-full border border-zinc-200 hover:border-red-600 bg-white hover:bg-red-600 text-zinc-700 hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-red-600 transition-colors group border-b border-zinc-300 pb-1 hover:border-red-600"
            >
              <span>{isArabic ? "تصفح جميع المنتجات والإكسسوارات" : "View All 500+ Accessories"}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Categories Slider (6 Slides visible on Desktop) */}
        <div className="relative group/carousel">
          {/* Floating Navigation Arrow: Left */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={isArabic ? "السابق" : "Previous"}
            className="absolute -left-3 sm:-left-4 lg:-left-5 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-zinc-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none hover:scale-110 active:scale-95"
          >
            {isArabic ? (
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>

          {/* Floating Navigation Arrow: Right */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={isArabic ? "التالي" : "Next"}
            className="absolute -right-3 sm:-right-4 lg:-right-5 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-zinc-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none hover:scale-110 active:scale-95"
          >
            {isArabic ? (
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>

          {/* Scroll Track: 6 slides visible on Desktop */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 sm:gap-3.5 pb-6 pt-2 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="top-cat-slide flex-shrink-0 w-[200px] xs:w-[220px] sm:w-[calc((100%-14px)/2)] md:w-[calc((100%-2*14px)/3)] lg:w-[calc((100%-3*14px)/4)] xl:w-[calc((100%-5*14px)/6)] snap-start flex flex-col"
              >
                <Link
                  href={cat.href}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-red-600 transition-all duration-300 flex flex-col hover:shadow-lg shadow-xs h-full"
                >
                  {/* Image Thumbnail */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={cat.image}
                      alt={isArabic ? cat.titleAr : cat.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5">
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/95 text-red-600 shadow-xs border border-red-100 backdrop-blur-sm">
                        {isArabic ? cat.badgeAr : cat.badge}
                      </span>
                    </div>

                    {/* Arrow Icon on Hover */}
                    <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 leading-snug">
                        {isArabic ? cat.titleAr : cat.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                        {isArabic ? cat.taglineAr : cat.tagline}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-zinc-500 group-hover:text-red-600 transition-colors">
                      <span>{isArabic ? "استكشف التشكيلة" : "Explore Selection"}</span>
                      <span className="text-zinc-400 group-hover:text-red-600 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                        {isArabic ? "←" : "→"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
