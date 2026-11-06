"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, CheckCircle2, AlertCircle, Wrench, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Header */}
      <section className="relative w-full h-[600px] min-h-[600px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="Terms of Use Al Rahmaniah Auto Accessories"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#120505]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-20 text-center w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            {isArabic ? "الشروط والأحكام" : "Legal Terms & Service Agreement"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase leading-tight text-white mb-3">
            {isArabic ? "شروط الاستخدام والطلب" : "Terms of Use & Service"}
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            {isArabic
              ? "الشروط والأحكام المنظمة لطلبات تفصيل المقاعد، تركيب الإكسسوارات، الشحن، والضمان في الرحمانية لتجارة زينة السيارات بالشارقة."
              : "Standard terms and conditions governing custom seat tailoring, accessories fitment, shipping, and product warranties at Al Rahmaniah Auto Accessories."}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 py-16 md:py-20 text-zinc-800">
        <div className="space-y-10 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Scale className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "1. نطاق الخدمات والمنتجات" : "1. Scope of Products & Customizations"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "تقدم شركة الرحمانية لتجارة زينة السيارات منتجات إكسسوارات السيارات الأصلية، تفصيل مقاعد جلد النابا والألماني، دعاسات الأرضية ثلاثية وسباعية الأبعاد (7D)، شاشات الأندرويد، والإضاءات التجميلية مع التوصيل داخل دولة الإمارات العربية المتحدة وخارجها."
                : "Al Rahmaniah Auto Accessories provides premium automotive accessories, bespoke German and Nappa leatherette seat covers, precision 7D all-weather floor mats, smart Android touchscreens, and automotive styling accessories across the UAE."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "2. دقة المقاسات والمواصفات المخصصة" : "2. Custom Fitment & Tailoring Accuracy"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "يتحمل العميل مسؤولية تزويدنا بالمعلومات الصحيحة الخاصة بنوع المركبة وسنة الصنع والفئة (سيدان، دفع رباعي، كوبيه). يتم قص وخياطة المقاعد الجلدية والدعاسات وفقاً للبيانات المقدمة باستخدام قوالب الليزر الدقيقة لضمان التطابق التام."
                : "Customers are responsible for providing accurate vehicle specifications (year, make, model, seat configuration). Custom products are precision-cut according to these details using 3D laser scanners to guarantee an exact OEM fit."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Wrench className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "3. التركيب والضمان" : "3. Professional Fitment & Warranty"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "جميع المقاعد الجلدية والدعاسات المخصصة تشمل ضماناً على جودة الخياطة وعدم التقشر لمدة تتراوح بين سنة إلى 3 سنوات حسب الخامة المختارة. يشمل التركيب في فرعنا بالشارقة أيدي فنيين محترفين."
                : "All tailored leather seat covers and 7D floor mats include a comprehensive craftsmanship warranty (1 to 3 years depending on material tier). In-store installation in Sharjah is executed by certified automotive trimmers."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "4. الدفع والتوصيل" : "4. Payment & UAE Delivery"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "تتوفر خيارات الدفع عند الاستلام، التحويل المصرفي، أو الدفع ببطاقات الائتمان. يتم تجهيز وتفصيل الطلبات المخصصة خلال 2-4 أيام عمل، مع خدمة التوصيل السريع لجميع إمارات الدولة."
                : "We accept credit/debit cards, bank transfer, and cash on delivery. Tailored custom orders are produced within 2-4 business days, with doorstep express delivery across all seven Emirates."}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
          >
            <span>{isArabic ? "العودة إلى الصفحة الرئيسية" : "Return to Homepage"}</span>
            <ArrowIcon className="w-4 h-4 text-red-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
