"use client";

import React from "react";
import { Zap, ShieldCheck, Wrench, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WolmartTrustBar() {
  const { isArabic } = useLanguage();

  const trustItems = [
    {
      icon: <Zap className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: isArabic ? "توصيل سريع لكافة الإمارات" : "Fast UAE Delivery",
      subtitle: isArabic ? "شحن فوري لجميع إمارات الدولة" : "Express dispatch across all Emirates",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: isArabic ? "جودة أصلية ومضمونة 100%" : "100% Genuine Quality",
      subtitle: isArabic ? "إكسسوارات وخامات أصلية معتمدة" : "Certified authentic car accessories",
    },
    {
      icon: <Wrench className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: isArabic ? "تفصيل ومقاسات دقيقة ومضمونة" : "Custom Fit Guaranteed",
      subtitle: isArabic ? "تفصيل ليزر لموديل سيارتك بدقة" : "Tailored to your vehicle specs",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: isArabic ? "استشارة ودعم فني متواصل" : "24/7 Expert Support",
      subtitle: isArabic ? "إرشاد كامل للمقاسات والمواصفات" : "Fitment guidance & assistance",
    },
  ];

  return (
    <section className="w-full py-8 lg:py-12 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-zinc-200 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-zinc-200 items-center">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 group transition-all duration-300 ${
                  index > 0 ? "pt-4 sm:pt-0 sm:px-4" : ""
                }`}
              >
                {/* Clean Centered Icon Box */}
                <div className="w-13 h-13 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-xs">
                  {item.icon}
                </div>

                {/* Typography */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm lg:text-base text-zinc-900 tracking-tight group-hover:text-red-600 transition-colors leading-snug truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-snug line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
