"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MaterialItem {
  id: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  desc: string;
  descAr: string;
  features: string[];
  featuresAr: string[];
  colors: string[];
  colorsAr: string[];
  colorHexes: string[];
  image: string;
  recommendedFor: string;
  recommendedForAr: string;
}

const MATERIALS: MaterialItem[] = [
  {
    id: "napa",
    name: "German Napa Leatherette",
    nameAr: "جلد نابا الألماني المعالج",
    tagline: "Supreme Comfort & Ultra-Soft Grain",
    taglineAr: "فخامة استثنائية وملمس ناعم جداً",
    desc: "Engineered specifically to resist UAE summer temperatures exceeding 50°C without cracking, peeling, or heat retention.",
    descAr: "معالج خصيصاً لمقاومة شمس الإمارات وحرارة تتجاوز 50 درجة مئوية دون تشقق أو انبعاث حراري.",
    features: [
      "100,000+ Martindale Rub Rating",
      "UV-Stabilized Anti-Fading Coating",
      "Airbag Deploy Safe Seam Ready",
      "3-Year Warranty Against Cracking",
    ],
    featuresAr: [
      "اختبار احتكاك معتمد لأكثر من 100,000 دورة",
      "طبقة حماية ضد الأشعة فوق البنفسجية والبهتان",
      "خياطة أمان مخصصة لفتح الوسائد الهوائية فوراً",
      "ضمان 3 سنوات ضد التشققات وتغير اللون",
    ],
    colors: ["Obsidian Black", "Cognac Tan", "Saddle Brown", "Royal Crimson", "Pure Ivory"],
    colorsAr: ["أسود ملكي", "كونياك تان", "بني غامق", "أحمر كرمزي", "عاجي ناصع"],
    colorHexes: ["#18181b", "#92400e", "#78350f", "#991b1b", "#fef3c7"],
    image: "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
    recommendedFor: "Sedans, Luxury Coupes & Executive SUVs",
    recommendedForAr: "سيارات الصالون، الكوبيه والدفع الرباعي الفاخر",
  },
  {
    id: "diamond-pvc",
    name: "3D Diamond-Quilted PVC Leather",
    nameAr: "جلد دايموند 3D مع حشوة إسفنجية",
    tagline: "Rugged Heavy-Duty Luxury & Ergonomic Foam",
    taglineAr: "متانة فائقة وتصميم ماسي فاخر",
    desc: "Reinforced hexagonal and diamond stitch work with 8mm high-density laminated foam backing for cushioned back support.",
    descAr: "خياطة معززة بأشكال هندسية وماسية مع حشوة إسفنجية بكثافة 8 مم لراحة الظهر في الرحلات الطويلة.",
    features: [
      "8mm High-Rebound Memory Foam",
      "Double-Stitched High-Tensile Bonded Thread",
      "100% Water & Spill Proof Surface",
      "Effortless Wet-Wipe Cleaning",
    ],
    featuresAr: [
      "إسفنج مرن ميموري فوم سمك 8 مم لراحة الظهر",
      "خياطة مزدوجة بخيوط عالية الشد والمقاومة",
      "سطح مقاوم للماء والسوائل بنسبة 100%",
      "تنظيف سهل وسريع بمسحة قماش مبللة",
    ],
    colors: ["Black / Red Stitch", "Tan / Gold Stitch", "Black / Blue Stitch", "Grey / Silver Stitch"],
    colorsAr: ["أسود / خياطة حمراء", "تان / خياطة ذهبية", "أسود / خياطة زرقاء", "رمادي / خياطة فضية"],
    colorHexes: ["#09090b", "#b45309", "#1e3a8a", "#4b5563"],
    image: "/fb-posts/605828125_122199913874549942_1353754870971959198_n.jpg",
    recommendedFor: "Desert Cruisers, Patrol, Land Cruiser & Trucks",
    recommendedForAr: "نيسان باترول، لاند كروزر، البيك أب والدفع الرباعي",
  },
  {
    id: "7d-polymer",
    name: "7D All-Weather Molded Floor Liners",
    nameAr: "دعاسات 7D متعددة الطبقات المقاومة للماء",
    tagline: "Edge-to-Edge Cabin Defense for Desert Sand",
    taglineAr: "حماية شاملة للأرضيات من الرمال والسوائل",
    desc: "Laser-scanned deep-dish floor liners with detachable top curly carpet. Completely protects original vehicle flooring.",
    descAr: "تصميم ثلاثي الأبعاد مقولب بالليزر مع طبقة سجاد إضافية قابلة للفك لسهولة الغسيل والتنظيف.",
    features: [
      "Deep-Dish Spill Containment Walls",
      "Sandproof & Waterproof Multi-Layer EVA",
      "Reinforced Anti-Wear Driver Heel Pad",
      "OEM Floor Retention Fastening Clips",
    ],
    featuresAr: [
      "حواف مرتفعة تمنع تسرب السوائل والأتربة للأرضية",
      "طبقات متعددة من EVA عازلة للصوت والماء والرمال",
      "دعاسة قدم معززة لجهة السائق لمنع الاهتراء",
      "كلبسات تثبيت أصلية مطابقة لأرضية الوكالة",
    ],
    colors: ["Black Diamond", "Coffee Brown", "Beige Quilted", "Carbon Grain Black"],
    colorsAr: ["أسود ماسي", "بني قهوة", "بيج مطرز", "كاربون فايبر أسود"],
    colorHexes: ["#18181b", "#451a03", "#d97706", "#27272a"],
    image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
    recommendedFor: "All Weather Protection Across Sharjah & UAE",
    recommendedForAr: "حماية تامة من حرارة ورمال الإمارات",
  },
  {
    id: "seatbelts",
    name: "Custom-Colored Sport Seatbelt Webbing",
    nameAr: "أحزمة أمان ملونة رياضية معتمدة",
    tagline: "Over 30+ Vibrant Colors with OEM Pretensioners",
    taglineAr: "أكثر من 30 لوناً رياضياً مع الحفاظ على الأمان",
    desc: "Direct replacement high-tensile safety webbing stitched using automated computerized box-X patterns to match original factory tension.",
    descAr: "نسيج أمان عالي الشد بألوان مميزة يتم تثبيته بخياطة إلكترونية حاسوبية لضمان سلامة الركاب بنسبة 100%.",
    features: [
      "Meets International ECE Safety Standards",
      "Retains Factory Pretensioners & Buckles",
      "High-Luster UV Fade-Resistant Yarn",
      "Same-Day Installation in Sharjah",
    ],
    featuresAr: [
      "مطابق لمعايير السلامة الأوروبية ECE",
      "يحافظ على مشدات وأقفال الأمان الأصلية للسيارة",
      "خيوط عالية اللمعان ومقاومة للبهتان بأشعة الشمس",
      "تركيب وإنجاز فوري خلال نفس اليوم بالشارقة",
    ],
    colors: ["Ferrari Red", "Porsche Yellow", "M-Power Blue", "Toxic Green", "Miami Blue"],
    colorsAr: ["أحمر فيراري", "أصفر بورشه", "أزرق إم باور", "أخضر رياضي", "أزرق ميامي"],
    colorHexes: ["#dc2626", "#eab308", "#2563eb", "#16a34a", "#0284c7"],
    image: "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
    recommendedFor: "Sports Cars, German Marques & Custom Restyling",
    recommendedForAr: "السيارات الرياضية والألمانية والتعديلات الحصرية",
  },
];

export default function MaterialSwatchesShowcase() {
  const { isArabic } = useLanguage();
  const [selectedMat, setSelectedMat] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "المواد والجلود الفاخرة" : "BESPOKE MATERIALS"}
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-900 leading-tight">
            {isArabic ? "خامات وجلود تنجيد مصممة خصيصاً " : "Master Craftsmanship: "}
            <span className="text-red-600">
              {isArabic ? "لتحمل حرارة الإمارات" : "Premium Auto Materials"}
            </span>
          </h2>

          <p className="mt-3 text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {isArabic
              ? "نستخدم في الرحمانية جلود نابا المعالجة ضد الأشعة فوق البنفسجية، وأقمشة ألكانتارا، وأحزمة أمان ملونة معتمدة لضمان أطول عمر افتراضي."
              : "Touch and feel the difference. From heat-reflective German Napa leatherette to rugged 7D sandproof floor liners, our materials are selected for Gulf endurance."}
          </p>

          {/* Material Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {MATERIALS.map((mat) => {
              const active = mat.id === selectedMat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMat(mat)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-105"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {isArabic ? mat.nameAr : mat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Material Showcase Card */}
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-zinc-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Preview */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-md group">
                <Image
                  src={selectedMat.image}
                  alt={isArabic ? selectedMat.nameAr : selectedMat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {isArabic ? selectedMat.recommendedForAr : selectedMat.recommendedFor}
                  </span>
                </div>
              </div>
            </div>

            {/* Details & Specs */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-red-600 text-xs font-bold uppercase tracking-wider block mb-1">
                  {isArabic ? selectedMat.taglineAr : selectedMat.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-zinc-900 leading-tight">
                  {isArabic ? selectedMat.nameAr : selectedMat.name}
                </h3>
              </div>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                {isArabic ? selectedMat.descAr : selectedMat.desc}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(isArabic ? selectedMat.featuresAr : selectedMat.features).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Color Swatches */}
              <div className="pt-2 border-t border-zinc-200">
                <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider block mb-2">
                  {isArabic ? "الألوان الشائعة المتاحة:" : "Popular Color Swatches:"}
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {(isArabic ? selectedMat.colorsAr : selectedMat.colors).map((colorName, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-[11px] text-zinc-700 font-semibold shadow-xs"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20"
                        style={{ backgroundColor: selectedMat.colorHexes[idx] || "#000" }}
                      />
                      <span>{colorName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href={`/get-a-quote?product=${encodeURIComponent(selectedMat.name)}`}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 flex items-center gap-2"
                >
                  <span>{isArabic ? "طلب تسعيرة لهذا الخام" : "Quote This Material"}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>

                <a
                  href={`https://wa.me/971558674927?text=${encodeURIComponent(
                    isArabic
                      ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أود معاينة عينات الأسعار والخامات لـ: ${selectedMat.nameAr}.`
                      : `Hello Al Rahmaniah, I would like to check physical swatches and pricing for: ${selectedMat.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-zinc-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 text-zinc-800 hover:text-emerald-700 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{isArabic ? "معاينة عبر واتساب" : "WhatsApp Sample"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
