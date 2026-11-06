"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  Handshake,
  Zap,
  Star,
  ShieldCheck,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

  const milestones = [
    {
      number: "20,000+",
      label: isArabic ? "سيارة تم تزيينها وفرشها" : "Vehicles Upgraded & Styled",
      desc: isArabic ? "في الشارقة ودبي والإمارات الشمالية" : "Across Sharjah, Dubai & Northern Emirates",
    },
    {
      number: "15+",
      label: isArabic ? "عاماً من الخبرة والإتقان" : "Years of Craftsmanship",
      desc: isArabic ? "معارض متخصصة بالصناعية 4 و 5" : "Showrooms in Sharjah Industrial Area 4 & 5",
    },
    {
      number: "99.4%",
      label: isArabic ? "نسبة رضا العملاء" : "Customer Satisfaction",
      desc: isArabic ? "بناءً على أكثر من 2,500 تقييم معتمد" : "Based on 2,500+ verified customer reviews",
    },
    {
      number: "500+",
      label: isArabic ? "إكسسوار ومنتج متاح فوراً" : "Products & Accessories",
      desc: isArabic ? "كتالوج شامل وجاهز للشحن الفوري" : "Premium in-stock catalog with fast delivery",
    },
  ];

  return (
    <main className="bg-white text-zinc-900 min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Facility"
            fill
            className="object-cover object-center"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center mt-12">
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

      {/* 2. Trust Stats Strip */}
      <section className="w-full py-12 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-zinc-50/80 text-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-zinc-200">
              {milestones.map((m, idx) => (
                <div key={idx} className={`space-y-1 ${idx > 0 ? "pt-4 sm:pt-0 sm:px-6" : ""}`}>
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-red-600">
                    {m.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images collage */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 h-[380px]">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                <Image
                  alt="Custom diamond leather seat cover tailoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/service-1.png"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                <Image
                  alt="7D all-weather floor mat precision fitment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/service-7.png"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">
                    {isArabic ? "قص دقيق بأنظمة الليزر و CNC" : "Laser-Cut CNC Pattern Suite"}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {isArabic ? "قص آلي وقوالب ليزرية مع خياطة مزدوجة متينة" : "Automated pattern cutters & double-needle stitching"}
                  </p>
                </div>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
              >
                <span>{isArabic ? "كتالوج المنتجات" : "Products Catalog"}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Text Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>{isArabic ? "معايير الجودة في الرحمانية" : "THE AL RAHMANIAH STANDARD"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900 leading-tight">
              {isArabic
                ? "فخامة وإتقان حرفي مصمم لتحمل صيف الإمارات"
                : "Crafted Luxury & Durability Engineered for UAE Weather"}
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {isArabic
                ? "انطلقت الرحمانية لزينة وتنجيد السيارات من قلب الشارقة (المنطقة الصناعية 4 و 5) لتصبح إحدى كبرى الوجهات المتخصصة في تعديل وتزيين مقصورات السيارات في الإمارات. نتخصص في تفصيل مقاعد جلود نابا الفاخرة، ودعاسات 7D المقولبة، وأحزمة الأمان الملونة، وأسقف النجوم، وشاشات الأندرويد."
                : "Founded in Sharjah Industrial Area 4 & 5, Al Rahmaniah Auto Accessories has grown into one of the region’s premier automotive styling and accessories studios. We specialize in custom-tailored Napa leather seat covers, 7D molded floor liners, colored safety belts, starlight roof constellations, and car electronics."}
            </p>

            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              {isArabic
                ? "سواء كنت تقود سيارة صالون يومية، أو بيك أب، أو سيارة دفع رباعي صحراوية (نيسان باترول، لاند كروزر)، أو سيارة ألمانية فاخرة، يقوم فنيونا بتفصيل كل قطعة بمقاسات مليمترية دقيقة لتحقيق الراحة المطلقة والأناقة الفارهة."
                : "Whether you drive a daily sedan, a rugged 4x4 desert cruiser, a family SUV, or a luxury vehicle, our master craftsmen tailor each accessory with millimetric precision to ensure peak interior comfort, extreme UV heat durability, and head-turning aesthetics."}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>{isArabic ? "شفافية تامة بالأسعار" : "Zero Hidden Charges"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>{isArabic ? "مقاسات تفصيل دقيقة" : "Precision Custom Fitment"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>{isArabic ? "ضمان خطي حتى 3 سنوات" : "Up to 3 Years Warranty"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>{isArabic ? "توصيل سريع لجميع الإمارات" : "Fast UAE Delivery"}</span>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link
                href="/products"
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
              >
                {isArabic ? "استكشف المنتجات" : "Explore Products"}
              </Link>
              <Link
                href="/get-a-quote"
                className="px-8 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-zinc-200"
              >
                {isArabic ? "طلب تسعيرة" : "Get a Quote"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Grid */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
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
      <section className="py-20 px-4 sm:px-6 max-w-[1400px] mx-auto">
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
