"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RefreshCcw, ShieldCheck, Clock, CheckCircle2, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RefundPolicyPage() {
  const { isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Header */}
      <section className="relative w-full h-[600px] min-h-[600px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="Refund & Cancellation Policy Al Rahmaniah Auto Accessories"
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
            {isArabic ? "الضمان والرضا التام" : "Satisfaction & Guarantee Policy"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase leading-tight text-white mb-3">
            {isArabic ? "سياسة الاسترداد والإلغاء" : "Refund & Return Policy"}
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            {isArabic
              ? "سياسة شفافة وعادلة لإلغاء الطلبات، واستبدال الإكسسوارات الجاهزة، وضمان جودة تفصيل المقاعد والدعاسات."
              : "Clear and fair policy for order cancellations, standard product returns, and custom fitment warranties."}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 py-16 md:py-20 text-zinc-800">
        <div className="space-y-10 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <RefreshCcw className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "1. إرجاع واستبدال المنتجات الجاهزة" : "1. Returns for Standard In-Stock Products"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "يمكنك استرجاع أو استبدال المنتجات الجاهزة (غير المخصصة) خلال 7 أيام من تاريخ الاستلام، بشرط أن تكون في حالتها الأصلية وبغلفتها دون استخدام أو تلف."
                : "Standard non-customized accessories can be returned or exchanged within 7 days of purchase, provided items are unused, intact, and in their original manufacturer packaging."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "2. المنتجات المفصلة حسب الطلب" : "2. Custom-Tailored Products (Seats & 7D Mats)"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "نظراً لأن أغطية المقاعد ودعاسات 7D تُفصل خصيصاً وفقاً لموديل سيارة العميل وخيارات ألوانه، فإنها غير قابلة للاسترجاع إلا في حال وجود عيب مصنعي أو خطأ في المقاسات لا يطابق المركبة المحددة، حيث نلتزم بتعديلها أو إعادة تفصيلها مجاناً."
                : "Because custom seat covers and 7D floor mats are bespoke tailored to customer-specific vehicle configurations, they are not eligible for standard cash return unless there is a verifiable fabrication defect or sizing mismatch, in which case we promptly repair or remake the item free of charge."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Clock className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "3. مدة معالجة المبالغ المستردة" : "3. Refund Processing Timeline"}</span>
            </h2>
            <p className="text-zinc-600">
              {isArabic
                ? "تتم معالجة المبالغ المستردة عبر نفس طريقة الدفع الأصلية خلال 5-10 أيام عمل بعد فحص المنتجات المرتجعة في فرعنا."
                : "Approved refunds are processed through the original method of payment within 5 to 10 business days following product inspection at our Sharjah facility."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-xl font-bold text-zinc-950 mb-3 flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span>{isArabic ? "4. التواصل لطلب الإرجاع أو الاستبدال" : "4. Contact Customer Support"}</span>
            </h2>
            <p className="text-zinc-600 mb-4">
              {isArabic
                ? "لتقديم طلب استرجاع أو استبدال أو الاستفسار عن الضمان، تواصل مع فريق خدمة العملاء:"
                : "For return authorizations, warranty assistance, or fitment adjustments, contact our support desk:"}
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <a href="tel:+971558674927" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700">
                <Phone className="w-4 h-4" /> +971 55 867 4927
              </a>
            </div>
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
