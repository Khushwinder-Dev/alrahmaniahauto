"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Percent, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PromoSplitBanners() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-16 bg-white text-zinc-900 relative" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Banner 1: Seat Covers Promo */}
          <div className="relative rounded-2xl overflow-hidden border border-red-200 bg-gradient-to-br from-red-50/60 via-white to-red-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 rtl:right-auto rtl:left-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Image
                src="/images/service-3.png"
                alt="Seat Covers"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Percent className="w-3.5 h-3.5" />
                <span>{isArabic ? "عرض خاص - خصم يصل إلى 30%" : "Special Offer - Up to 30% OFF"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                {isArabic ? "تفصيل مقاعد جلود 3D الفاخرة" : "Custom 3D Leather Seat Covers"}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                {isArabic
                  ? "تفصيل دقيق لموديل سيارتك بجلود نابا و PVC معالجة ضد درجات حرارة الصيف والتشقق."
                  : "Precision-tailored to your vehicle model with heat-resistant anti-cracking PVC and Napa leather."}
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/get-a-quote?category=seat-covers"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md shadow-red-600/30"
              >
                <span>{isArabic ? "احصل على العرض" : "Claim Offer"}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Banner 2: 7D Floor Mats */}
          <div className="relative rounded-2xl overflow-hidden border border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 rtl:right-auto rtl:left-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Image
                src="/images/service-7.png"
                alt="7D All-Weather Floor Mats"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isArabic ? "مقاسات ليزر دقيقة ومثالية" : "Precision OEM Molded Fit"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                {isArabic ? "دعاسات 7D الفاخرة المقاومة للماء" : "7D All-Weather Luxury Floor Mats"}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                {isArabic
                  ? "تغطية شاملة لأرضية السيارة ومقاومة تامة للمياه والأتربة مع تثبيت قوي مانع للانزلاق."
                  : "Full-coverage waterproof, anti-skid protection molded specifically for your vehicle floor pan."}
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/get-a-quote?category=floor-mats"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md"
              >
                <span>{isArabic ? "استكشف المنتج" : "Explore Product"}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Banner 3: Diamond Leather Covers */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/30 p-8 flex flex-col justify-between min-h-[340px] group hover:border-amber-500 transition-all duration-300 md:col-span-2 lg:col-span-1 shadow-sm hover:shadow-xl">
            <div className="absolute right-0 bottom-0 rtl:right-auto rtl:left-0 w-2/3 h-full opacity-25 group-hover:opacity-35 transition-opacity pointer-events-none">
              <Image
                src="/fb-posts/469317378_122127198956549942_2454514240647818107_n.jpg"
                alt="Interior Upholstery"
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Tag className="w-3.5 h-3.5" />
                <span>{isArabic ? "فخامة وإتقان حرفي إماراتي" : "Custom Automotive Luxury"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 leading-tight">
                {isArabic ? "أطقم مقاعد جلد ماسية 3D" : "3D Diamond Leather Covers"}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 max-w-xs leading-relaxed">
                {isArabic
                  ? "تفصيل يدوي متقن للسيارات الصالون والدفع الرباعي والرياضية، مع ضمان لمدة 3 سنوات."
                  : "Handcrafted OEM fitment tailored for sedans, SUVs & sports cars. High heat tolerance with 3-year warranty."}
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all group-hover:gap-3 shadow-md shadow-red-600/30"
              >
                <span>{isArabic ? "تصفح الإكسسوارات" : "Shop Accessories"}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
