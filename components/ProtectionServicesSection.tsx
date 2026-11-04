"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Flame, Droplets, Sun, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProtectionServicesSectionProps {
  servicesOrder?: number[];
}

export default function ProtectionServicesSection({
  servicesOrder,
}: ProtectionServicesSectionProps = {}) {
  const { isArabic } = useLanguage();

  const protectionHighlights = [
    {
      id: 1,
      image: "/media/categories/unsplash_C60nkEu-6EQ (1).png",
      title: isArabic ? "مقاومة فائقة لحرارة وشمس الإمارات" : "Extreme UAE UV & Heat Resistance",
      description: isArabic
        ? "جلود نابا معالجة خصيصاً لمقاومة الأشعة فوق البنفسجية والتشقق حتى درجات حرارة تتجاوز 50 درجة مئوية."
        : "Automotive-grade leather engineered to withstand 50°C+ summer heat without cracking or fading.",
      link: "/products",
      tag: isArabic ? "حماية حرارية" : "Thermal Guard",
    },
    {
      id: 2,
      image: "/media/categories/unsplash_C60nkEu-6EQ.png",
      title: isArabic ? "عزل مائي وحماية 100% من الرمال" : "100% Waterproof & Sandproof 7D Protection",
      description: isArabic
        ? "دعاسات أرضيات مقولبة بحواف عميقة تمنع تسرب السوائل وحبيبات الرمل إلى أرضية الوكالة الأصلية."
        : "Deep-dish molded floor liners that contain liquid spills, mud, and desert sand completely.",
      link: "/products",
      tag: isArabic ? "مقاوم للماء" : "100% Waterproof",
    },
    {
      id: 3,
      image: "/images/service-3.png",
      title: isArabic ? "توافق تام مع وسائد الأمان الهوائية" : "OEM Airbag-Safe Precision Stitching",
      description: isArabic
        ? "خياطة حاسوبية مخصصة تضمن انفتاح الوسائد الهوائية الجانبية في أجزاء من الثانية دون أي عائق."
        : "Computerized seam engineering certified for instant side-airbag deployment in emergencies.",
      link: "/products",
      tag: isArabic ? "أمان معتمد" : "Safety Certified",
    },
    {
      id: 4,
      image: "/images/service-4.png",
      title: isArabic ? "ألياف ضوئية وإلكترونيات آمنة" : "Automotive-Grade Fire-Safe Electronics",
      description: isArabic
        ? "أسلاك وفيوزات معزولة بالكامل متوافقة مع أنظمة كهرباء السيارة دون التأثير على ضمان الوكالة."
        : "Plug-and-play wiring harnesses with integrated fuses that preserve factory electrical warranty.",
      link: "/products",
      tag: isArabic ? "حماية كهربائية" : "Plug & Play Safe",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "معايير الجودة والحماية" : "QUALITY & PROTECTION"}
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
            {isArabic ? "حماية فائقة وعمر افتراضي " : "Engineered for Extreme "}
            <span className="text-red-600">{isArabic ? "أطول لسيارتك" : "Durability & Climate"}</span>
          </h2>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "صُنعت جميع منتجاتنا وإكسسواراتنا لتمنح سيارتك حماية تدوم لسنوات ومظهراً فخماً يليق بذوقك."
              : "Every accessory we design is tested under desert sun and daily driving conditions to ensure lasting luxury."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protectionHighlights.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider pt-2 border-t border-zinc-100"
                >
                  <span>{isArabic ? "استكشف المنتجات" : "Explore Products"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
