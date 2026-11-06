"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const router = useRouter();
  const { isArabic } = useLanguage();

  const productCategories = [
    {
      id: 1,
      title: isArabic ? "أغطية المقاعد الجلدية المخصصة" : "Custom Leather Seat Covers",
      description: isArabic
        ? "تفصيل جلود نابا وألكانتارا وخياطة دايموند 3D مع تطابق تام لمقاسات المقاعد وحماية من حرارة الصيف."
        : "Precision tailored German Napa & diamond-stitched leather covers engineered to withstand intense UAE heat.",
      image: "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
      badge: isArabic ? "الأكثر طلباً" : "Best Seller",
    },
    {
      id: 2,
      title: isArabic ? "دعاسات 7D لكافة الأحوال الجوية" : "7D All-Weather Floor Mats",
      description: isArabic
        ? "تصميم 7D مقولب ثلاثي الأبعاد لحماية كاملة للأرضيات من الرمال والماء والأتربة مع سهولة التنظيف."
        : "Custom molded deep-dish floor liners providing 100% waterproof and sandproof protection for your cabin.",
      image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
      badge: isArabic ? "مقاوم للماء" : "100% Waterproof",
    },
    {
      id: 3,
      title: isArabic ? "أحزمة الأمان الملونة المخصصة" : "Custom-Colored Seatbelts",
      description: isArabic
        ? "ألوان رياضية وجذابة متوافقة مع معايير الأمان الدولية واختبارات الشد وقوة التحمل."
        : "Vibrant sport-spec seatbelt webbing certified for safety, strength, and flawless factory OEM retractor fit.",
      image: "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
      badge: isArabic ? "مطابق للمواصفات" : "OEM Certified",
    },
    {
      id: 4,
      title: isArabic ? "نجوم السقف روز رايز (ستارلايت)" : "Starlight Roof Headliner",
      description: isArabic
        ? "ألياف ضوئية متطورة مع تحكم عبر الهاتف ومؤثرات وميض وشهب تمنح مقصورتك فخامة استثنائية."
        : "Premium optic fiber constellations with smartphone app controls, shooting star effects, and ambient modes.",
      image: "/fb-posts/605828125_122199913874549942_1353754870971959198_n.jpg",
      badge: isArabic ? "فخامة حصرية" : "Luxury Upgrade",
    },
    {
      id: 5,
      title: isArabic ? "شاشات أندرويد وإلكترونيات السيارات" : "Car Electronics & Android Screens",
      description: isArabic
        ? "شاشات لمس عالية الدقة تدعم Apple CarPlay و Android Auto وكاميرات 360 درجة وأنظمة صوت DSP."
        : "High-definition touchscreens featuring Apple CarPlay, Android Auto, 360 cameras, and DSP audio tuning.",
      image: "/fb-posts/469317378_122127198956549942_2454514240647818107_n.jpg",
      badge: isArabic ? "تقنية حديثة" : "Smart Tech",
    },
    {
      id: 6,
      title: isArabic ? "إضاءات ليزر LED وعدسات فائقة" : "Laser LED Headlights & Fog Lamps",
      description: isArabic
        ? "إضاءة ليلية فائقة الوضوح مع عدسات ليزر معتمدة مقاومة للحرارة وموفرة للطاقة لضمان أعلى مستويات الأمان."
        : "Ultra-high-lumen LED projector lenses and laser fog beams delivering crystal-clear nighttime highway vision.",
      image: "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
      badge: isArabic ? "إضاءة فائقة" : "High Output",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "تشكيلة المنتجات" : "OUR PRODUCTS"}
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
            {isArabic ? "أفضل منتجات وإكسسوارات " : "Premium Auto "}
            <span className="text-red-600">{isArabic ? "السيارات في الشارقة" : "Accessories Catalog"}</span>
          </h2>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "استكشف مجموعتنا الواسعة من منتجات تزيين السيارات، أغطية المقاعد، دعاسات الأرضيات، وأنظمة الصوت والإلكترونيات."
              : "Discover our industry-leading range of bespoke car styling accessories, interior leathercraft, and vehicle electronic upgrades."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productCategories.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-red-600 transition-colors mb-2 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-5">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(product.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider"
                  >
                    <span>{isArabic ? "طلب تسعيرة" : "Get a Quote"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products"
                    className="text-xs font-semibold text-zinc-400 hover:text-zinc-700 transition-colors"
                  >
                    {isArabic ? "عرض المزيد" : "View All"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>{isArabic ? "تصفح جميع المنتجات والإكسسوارات" : "Explore All Products & Accessories"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
