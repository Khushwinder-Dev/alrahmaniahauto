"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cookie, Settings, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookiesPage() {
  const { isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Header */}
      <section className="relative w-full h-[600px] min-h-[600px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="Cookie Policy Al Rahmaniah Auto Accessories"
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
            {isArabic ? "ملفات تعريف الارتباط" : "Cookie Preferences & Transparency"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase leading-tight text-white mb-3">
            {isArabic ? "سياسة ملفات تعريف الارتباط (الكوكيز)" : "Cookie Policy"}
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            {isArabic
              ? "كيف نستخدم ملفات تعريف الارتباط لتحسين تجربة تصفحك وتذكر تفضيلاتك اللغوية وسلة المنتجات على موقعنا."
              : "How we use cookies and browser storage to optimize your browsing experience, cart persistence, and language preferences."}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 py-16 md:py-20 text-zinc-800">
        <div className="space-y-10 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Cookie className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "1. ما هي ملفات الكوكيز؟" : "1. What Are Cookies?"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزن على جهازك عند زيارة موقعنا لمساعدتنا في تذكر لغتك المفضلة (العربية أو الإنجليزية)، وحفظ جلسة التصفح، وتحسين سرعة تحميل صور المنتجات."
                : "Cookies are small text files placed on your device to improve your site experience, remember your language selection (Arabic or English), and ensure rapid loading times across our accessory catalog."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Settings className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "2. أنواع الكوكيز التي نستخدمها" : "2. Cookies We Utilize"}</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600">
              <li>{isArabic ? "ملفات أساسية: لازمة لتشغيل وظائف الموقع مثل اختيار اللغة وحفظ تفضيلات السلة." : "Essential cookies: Required for fundamental features such as bilingual switching and cart functionality."}</li>
              <li>{isArabic ? "ملفات الأداء: تساعدنا في فهم الصفحات الأكثر زيارة لتحسين سرعة التصفح." : "Performance cookies: Provide aggregated insights into popular accessories to streamline site navigation."}</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "3. إدارة تفضيلاتك" : "3. Managing Your Preferences"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "يمكنك تعديل إعدادات المتصفح في أي وقت لرفض أو مسح الكوكيز. يرجى ملاحظة أن تعطيل بعض الملفات قد يؤثر على تذكر لغتك المفضلة عند العودة."
                : "You can adjust your browser settings at any time to reject or remove cookies. Please note that disabling cookies may affect language memory when returning to the site."}
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
