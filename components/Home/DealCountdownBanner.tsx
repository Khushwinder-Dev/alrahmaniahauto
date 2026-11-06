"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ArrowRight, ShieldCheck, Flame, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DealCountdownBanner() {
  const { isArabic } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 relative z-10">
        <div className="rounded-3xl border border-red-200 bg-gradient-to-r from-red-50/70 via-white to-red-50/40 p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Flame className="w-3.5 h-3.5" />
                <span>{isArabic ? "باقة إكسسوارات مميزة لفترة محدودة" : "Limited-Time Accessories Bundle"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-zinc-900 leading-tight">
                {isArabic ? "باقة التجديد الداخلي الشاملة: " : "Exclusive Interior Bundle: "}
                <span className="text-red-600">
                  {isArabic ? "أغطية مقاعد جلد نابا" : "Custom Napa Seat Covers"}
                </span>{" "}
                {isArabic ? "+ دعاسات أرضيات 7D" : "+ 7D Floor Mats"}
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base max-w-xl leading-relaxed">
                {isArabic
                  ? "ارتقِ بمقصورة سيارتك بأفخم أغطية مقاعد مفصلة بدقة مع دعاسات 7D مقولبة ومقاومة للماء والرمال. وفر حتى 35% مع باقاتنا الموسمية."
                  : "Elevate your car interior with tailor-made 3D diamond quilted seat covers and matching all-weather 7D molded floor liners. Save up to 35% this season."}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-zinc-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>{isArabic ? "مطابقة لمقاسات الوكالة 100%" : "100% Genuine OEM Fit"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-red-600" />
                  <span>{isArabic ? "حرفية وخياطة متقنة بالشارقة" : "Master Craftsmanship"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>{isArabic ? "تركيب وتسليم في نفس اليوم" : "Same-Day Turnaround"}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Countdown Box & CTA */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 text-center flex flex-col items-center shadow-lg">
              <span className="text-xs uppercase font-bold text-zinc-500 tracking-widest mb-4">
                {isArabic ? "ينتهي هذا العرض بعد" : "Deal Expires In"}
              </span>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full mb-6">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-zinc-900">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {isArabic ? "أيام" : "Days"}
                  </span>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-zinc-900">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {isArabic ? "ساعات" : "Hours"}
                  </span>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-zinc-900">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {isArabic ? "دقائق" : "Mins"}
                  </span>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-red-600">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {isArabic ? "ثواني" : "Secs"}
                  </span>
                </div>
              </div>

              {/* Pricing & CTA Button */}
              <div className="mb-4">
                <span className="text-zinc-400 line-through text-sm mx-2">
                  {isArabic ? "450 درهم" : "AED 450"}
                </span>
                <span className="text-2xl font-extrabold text-zinc-900">
                  {isArabic ? "299 درهم" : "AED 299"}
                </span>
                <span className="text-xs font-bold text-red-600 mx-2">
                  {isArabic ? "(وفر 35%)" : "(Save 35%)"}
                </span>
              </div>

              <Link
                href="/get-a-quote?deal=summer-prep"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all shadow-md shadow-red-600/30"
              >
                <span>{isArabic ? "احجز قسيمة الخصم الآن" : "Claim Deal Voucher"}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
