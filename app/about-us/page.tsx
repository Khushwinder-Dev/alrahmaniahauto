"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import {
  UserCheck,
  Handshake,
  Zap,
  Star,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AboutUsSection from "./AboutUsSection";

// Animated counter with spring physics
const AnimatedCounter = ({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 90,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function AboutUsPage() {
  const { isArabic } = useLanguage();

  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "تفصيل ليزري وحرفية عالية" : "Custom Fitment & Precision Craftsmanship",
      desc: isArabic
        ? "تفصيل أغطية المقاعد ودعاسات 7D بأجهزة الليزر لضمان مطابقة تامة لمقاسات وانحناءات الوكالة."
        : "Laser-tailored seat covers, 7D molded mats, and accessories crafted for exact factory contours and flawless finish.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "أسعار واضحة وشفافة 100%" : "100% Upfront Pricing",
      desc: isArabic
        ? "تفصيل دقيق للتكلفة بدون رسوم مخفية، مع تقديم عرض سعر مسبق ومعتمد قبل بدء العمل."
        : "Transparent price breakdown with zero hidden fees. Detailed digital quotation provided and approved before crafting.",
    },
    {
      icon: <Zap className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "توصيل سريع وتركيب بالمعرض" : "Fast UAE Delivery & Showroom Fitting",
      desc: isArabic
        ? "شحن سريع لكافة إمارات الدولة، وورشة تركيب متخصصة بمعارضنا في المنطقة الصناعية 4 و 5 بالشارقة."
        : "Express courier delivery across all 7 Emirates, plus dedicated showroom fitting bays in Sharjah Industrial Area 4 & 5.",
    },
    {
      icon: <Star className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "مقاومة فائقة لحرارة الخليج والشمس" : "Extreme Heat & UV Durability",
      desc: isArabic
        ? "مصممة خصيصاً لأقسى درجات حرارة الصيف باستخدام جلود نابا ومواد عازلة لا تتشقق ولا تتغير ألوانها."
        : "Engineered specifically for the harsh Gulf climate using anti-cracking, UV-resistant Napa leather and high-grade materials.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "ضمان رسمي يصل إلى 3 سنوات" : "Satisfaction & Product Warranty",
      desc: isArabic
        ? "كل منتج يحمل ضمان الجودة الشامل، وتفصيل المقاعد الجلدية يأتي مع ضمان خطي يصل لـ 3 سنوات."
        : "Every product carries our quality guarantee, and bespoke leather upholstery comes with up to 3 years written warranty.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-600" strokeWidth={2.5} />,
      title: isArabic ? "خياطة وتفصيل يدوي مباشر" : "In-House Master Tailoring",
      desc: isArabic
        ? "أطقم مقاعد مطرزة ثلاثية الأبعاد، أحزمة أمان ملونة، وتجديد شامل للفرش الداخلي بأيدي أمهر المعلمين بالشارقة."
        : "Bespoke 3D diamond quilted car seat covers, colored safety belts, and interior restoration hand-tailored in our Sharjah studio.",
    },
  ];

  // Key Stats from Hero Section
  const statsData = [
    {
      value: 15,
      suffix: "+",
      label: isArabic ? "سنوات خبرة" : "YEARS EXPERIENCE",
      desc: isArabic ? "خبرة في تفصيل وتزيين السيارات بالشارقة" : "15+ Years of Mastery in Sharjah",
    },
    {
      value: 20000,
      suffix: "+",
      label: isArabic ? "سيارة تم تزيينها" : "VEHICLES UPGRADED",
      desc: isArabic ? "في الشارقة ودبي وكافة الإمارات" : "Across Sharjah, Dubai & UAE",
    },
    {
      value: 500,
      suffix: "+",
      label: isArabic ? "منتج وإكسسوار متوفر" : "TOP ACCESSORIES",
      desc: isArabic ? "إكسسوارات جاهزة ومتاحة فوراً" : "Premium In-Stock Automotive Catalog",
    },
    {
      value: 99,
      suffix: "%",
      label: isArabic ? "نسبة رضا العملاء" : "SATISFACTION RATE",
      desc: isArabic ? "تقييمات معتمدة لضمان الجودة" : "Based on 2,500+ Verified Customer Reviews",
    },
  ];

  return (
    <main className="bg-white text-zinc-900 min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Swatches & Craftsmanship"
            fill
            className="object-cover object-center"
            src="/images/about-us-banner.jpg"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/30" />
        </div>

        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>{isArabic ? "الرحمانية لزينة وتنجيد السيارات" : "AL RAHMANIAH AUTO ACCESSORIES & STYLING"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>{isArabic ? "نبذة عن " : "About "}</span>
            <span className="text-red-600">{isArabic ? "الرحمانية للسيارات" : "Al Rahmaniah Auto"}</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            {isArabic
              ? "نقدم أرقى حلول الفخامة للسيارات، وتفصيل مقاعد الجلد، ودعاسات 7D، والإلكترونيات المتطورة في الشارقة منذ عام 2012."
              : "Delivering bespoke automotive luxury, custom leather seat covers, 7D floor mats, and advanced car electronics in Sharjah since 2012."}
          </p>
        </div>
      </section>

      {/* 2. Key Achievements & Stats Strip (From Hero Section) */}
      <section className="relative w-full py-10 sm:py-14 bg-[#0a0a0c] border-b border-white/10" dir={isArabic ? "rtl" : "ltr"}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6 bg-zinc-950/90 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-red-600/50 hover:bg-white/[0.05] hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline group-hover:text-red-500 transition-colors">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-200">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CEO Message Section (Matching Taj Al Rahmah First Section Style) */}
      <AboutUsSection />

      {/* 4. Why Choose Us Grid */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="text-center mb-16 space-y-3">
            <div className="text-red-600 font-bold uppercase tracking-widest text-xs">
              {isArabic ? "لماذا تختار الرحمانية للسيارات" : "Why Choose Al Rahmaniah Auto"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-zinc-900">
              {isArabic ? "6 ركائز لتميزنا في زينة السيارات" : "6 Pillars of Automotive Excellence"}
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto">
              {isArabic
                ? "التزامنا بالخامات الفاخرة، والمقاسات الدقيقة، والتحمل لأقسى درجات الحرارة يجعلنا الخيار الأول في الشارقة ودبي والإمارات."
                : "Our commitment to premium materials, custom fitment, and extreme heat durability sets us apart across Sharjah, Dubai, and all Emirates."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-red-600/70 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-6">
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide">
                  {r.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Transformations Banner */}
      <section className="py-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-red-50/50 via-white to-red-50/30 p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
                {isArabic ? "نتائج حقيقية وحرفية معتمدة" : "Real Results & Craftsmanship"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 leading-tight">
                {isArabic ? "تجديد وتعديل كامل لمقصورة السيارة" : "Complete Automotive Styling Transformations"}
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                {isArabic
                  ? "من تنجيد المقاعد الجلدية وتفصيل دعاسات 7D إلى أسقف النجوم وشاشات الأندرويد، استمتع بتجربة قيادة مريحة وفخمة تجدد سيارتك بالكامل."
                  : "From custom 3D diamond leather upholstery and 7D all-weather floor liners to starlight roof headliners and Android screens, experience the transformative difference of master craftsmanship."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
                >
                  {isArabic ? "استكشف المنتجات" : "Explore Products"}
                </Link>
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-zinc-200"
                >
                  {isArabic ? "طلب تسعيرة للمنتجات" : "Request Product Quotation"}
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
              <Image
                alt="Automotive styling project"
                fill
                className="object-cover"
                src="/images/back-sec.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
