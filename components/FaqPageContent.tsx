"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";
import FaqAccordionItem from "@/components/Common/FaqAccordionItem";
import { useLanguage } from "@/context/LanguageContext";
import { VoiceMicButton, useVoiceInput } from "@/components/ui/VoiceMicButton";

export interface AutomotiveFaqItem {
  id: number;
  category: "seat-covers" | "floor-mats" | "styling" | "electronics" | "general";
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export const AUTOMOTIVE_FAQ_ITEMS: AutomotiveFaqItem[] = [
  // ── SEAT COVERS (1 - 4) ───────────────────────────────────────────────────
  {
    id: 1,
    category: "seat-covers",
    questionEn: "Can you custom-tailor seat covers for my specific vehicle make, model, and year?",
    questionAr: "هل تقومون بتفصيل أغطية المقاعد حسب مقاسات سيارتي وموديلها وسنة صنعها بدقة؟",
    answerEn:
      "Yes! Every seat cover set is precision laser-measured and handcrafted to the exact make, model, and year of your car (Nissan Patrol, Land Cruiser, Lexus, Mercedes, BMW, Ford, etc.). We ensure full alignment with headrests, armrests, electric seat controls, and side airbag deployment seams.",
    answerAr:
      "نعم بكل تأكيد! يتم تفصيل كل طقم مقاعد بالليزر وفقاً لنوع وموديل وسنة صنع سيارتك (نيسان باترول، لاندكروزر، لكزس، مرسيدس، بي إم دبليو، إلخ)، مع مراعاة مساند الرأس والأذرع وأزرار التحكم الكهربائي وفتحات الوسائد الهوائية (Airbags) لضمان أعلى مستويات الأمان.",
  },
  {
    id: 2,
    category: "seat-covers",
    questionEn: "What materials are available for custom car seat covers?",
    questionAr: "ما هي الخامات المتوفرة لتفصيل مقاعد السيارات لديكم؟",
    answerEn:
      "We offer premium German PVC leatherette, breathable Napa leather, Italian Alcantara suede, perforated leather for ventilated AC cooling seats, and heavy-duty Oxford fabrics with custom double-diamond quilting and dual-tone embroidery.",
    answerAr:
      "نوفر جلد النابا الألماني الفاخر المقاوم للحرارة، وشامواه الكانتارا الإيطالي، والجلد الصناعي المعالج، والجلد المخرم لتهوية وتبريد المقاعد (AC Seats)، بالإضافة للأقمشة المتينة بتطريزات الدايموند الملكية وخيارات الألوان الثنائية.",
  },
  {
    id: 3,
    category: "seat-covers",
    questionEn: "How do custom seat covers hold up against extreme UAE summer heat?",
    questionAr: "كيف تتحمل أغطية المقاعد الجلدية حرارة صيف الإمارات المرتفعة؟",
    answerEn:
      "Our automotive materials are UV-stabilized and thermal-tested to withstand cabin temperatures up to 70°C without cracking, peeling, or fading. Napa leatherette and perforated centers prevent heat entrapment for maximum driving comfort.",
    answerAr:
      "تتميز خاماتنا بمعالجة متطورة ضد الأشعة فوق البنفسجية واختبارات تحمل درجات حرارة المقصورة حتى 70 مئوية دون تشقق أو تقشر أو تغير في اللون، كما تساعد الطبقات المثقوبة على تبديد الحرارة وتوفير راحة مثالية أثناء القيادة.",
  },
  {
    id: 4,
    category: "seat-covers",
    questionEn: "Do your custom seat covers affect the operation of factory side airbags?",
    questionAr: "هل يؤثر تفصيل المقاعد على عمل الوسائد الهوائية الجانبية (Airbags)؟",
    answerEn:
      "Absolutely not. We use certified break-away airbag safety stitching along the lateral seams, engineered to deploy instantly without resistance in the event of an impact, matching OEM factory safety standards.",
    answerAr:
      "لا على الإطلاق. نعتمد تقنية خياطة الأمان المعتمدة للوسائد الهوائية (Break-away Stitching) على الحواف الجانبية، حيث تنفتح الوسادة الهوائية فوراً دون أي إعاقة عند حدوث أي طارئ مطابقة لمعايير المصنع الأصلية.",
  },

  // ── FLOOR MATS (5 - 7) ────────────────────────────────────────────────────
  {
    id: 5,
    category: "floor-mats",
    questionEn: "What is the difference between 7D, 5D, and standard rubber floor mats?",
    questionAr: "ما هو الفرق بين دعاسات 7D ودعاسات 5D والدواسات المطاطية العادية؟",
    answerEn:
      "7D mats feature high-walled thermoformed bucket protection that covers the entire floor and sides, topped with a detachable, quick-clean coil carpet layer. Standard rubber mats offer flat protection and slide around, whereas 7D mats trap sand below shoe level and stay locked in place.",
    answerAr:
      "تتميز دعاسات 7D بحواف عالية تلتف حول جوانب الأرضية بالكامل وتوفر حماية مضاعفة، وتتضمن طبقة شعيرات لولبية (Coil Layer) قابلة للفك تحبس الرمال والأتربة بالأسفل، بعكس الدواسات العادية المسطحة التي تتزحلق ولا تحمي أطراف الموكيت.",
  },
  {
    id: 6,
    category: "floor-mats",
    questionEn: "How do I clean and maintain 7D molded floor mats after desert or beach trips?",
    questionAr: "كيف يمكنني تنظيف دعاسات 7D بعد رحلات البر والشاطئ؟",
    answerEn:
      "Cleaning is effortless: unclip the upper coil loop layer, shake off coarse sand and dust, rinse with a garden hose or pressure washer, and wipe the lower waterproof leather layer with a damp microfiber cloth. They dry completely within 10 to 15 minutes.",
    answerAr:
      "التنظيف سهل للغاية: قم بفك الطبقة العلوية وهزها للتخلص من الرمال ثم غسلها بالماء، بينما يمكن مسح الطبقة الجلدية السفلية المضادة للماء بقطعة قماش رطبة، وتجف تماماً خلال 10 إلى 15 دقيقة دون أن تحتفظ بأي رطوبة.",
  },
  {
    id: 7,
    category: "floor-mats",
    questionEn: "Do 7D floor mats include coverage for the second and third seating rows and the trunk?",
    questionAr: "هل تغطي دعاسات 7D الصف الثاني والثالث ومنطقة الصندوق الخلفي (الدبة)؟",
    answerEn:
      "Yes, we provide complete interior floor protection packages covering the driver, passenger, 2nd row floor hump, 3rd row (for 7-seater SUVs), and custom matching trunk/cargo liners with reinforced metal driver heel pads.",
    answerAr:
      "نعم، نوفر أطقم تغطية كاملة تشمل أرضية السائق والراكب، والصف الثاني متصلاً بجسر الأرضية، والصف الثالث لسيارات الـ SUV ذات السبعة مقاعد، وفرش الصندوق الخلفي المتطابق، مزودة بمسند كعب معدني لحماية أرضية السائق.",
  },

  // ── STYLING (8 - 11) ─────────────────────────────────────────────────────
  {
    id: 8,
    category: "styling",
    questionEn: "How is the Rolls-Royce Starlight Roof Headliner installed, and will it void my vehicle warranty?",
    questionAr: "كيف يتم تركيب سقف النجوم رولز رويس وهل يؤثر ذلك على ضمان وكالة السيارة؟",
    answerEn:
      "We de-install the factory headliner, re-wrap it in luxury Alcantara suede, hand-drill 600 to 1,200 optical fiber strands with twinkling and shooting star modules, and connect them via an isolated inline fuse to an auxiliary circuit. Factory wiring is not spliced, preserving your vehicle warranty.",
    answerAr:
      "نقوم بفك بطانة السقف وإعادة تنجيدها بشامواه الكانتارا الفاخر، ثم تثبيت ما بين 600 إلى 1200 ليف ضوئي يدوياً مع محركات النجوم المتلألئة والشهب المتحركة، وتوصيلها بدائرة كهربائية مستقلة مع فيوز حماية دون تجريح أسلاك الوكالة للحفاظ على الضمان.",
  },
  {
    id: 9,
    category: "styling",
    questionEn: "Can I control the colors and modes of the starlight headliner using my smartphone?",
    questionAr: "هل يمكنني التحكم في ألوان وأنماط سقف النجوم من خلال الهاتف الذكي؟",
    answerEn:
      "Yes! Our starlight systems feature Bluetooth smartphone app integration (iOS & Android) and a wireless RF remote, enabling RGBW color customization, brightness dimming, meteor shooting speed control, and music sound-reactive modes.",
    answerAr:
      "نعم! يدعم نظام سقف النجوم تطبيق الهاتف الذكي عبر البلوتوث (iOS و Android) وريموت لاسلكي للتحكم في ملايين الألوان، وشدة الإضاءة الليلية، وسرعة انطلاق الشهب، وأنماط التفاعل مع الموسيقى.",
  },
  {
    id: 10,
    category: "styling",
    questionEn: "Are custom colored seatbelts safe and compliant with UAE vehicle inspection regulations?",
    questionAr: "هل أحزمة الأمان الملونة آمنة ومطابقة لفحص المرور الفني (تسجيل وشامل) في الإمارات؟",
    answerEn:
      "Yes. Our replacement seatbelt webbing is crafted from 100% high-tenacity polyester exceeding 25 kN (over 2,500 kg) tensile break strength, meeting European ECE R16 and FMVSS 209 safety standards. We retain all OEM retractor and pretensioner mechanisms with CNC Box-X safety stitching for full passing at Tasjeel and Shamil inspections.",
    answerAr:
      "نعم تماماً. أحزمتنا مصنوعة من بوليستر فائق المتانة بقوة شد تتجاوز 25 كيلو نيوتن (أكثر من 2.5 طن) ومطابقة للمواصفات الدولية ECE R16، ويتم نقل بكرات وحساسات الأمان الأصلية وخياطتها بماكينات صناعية متطورة وتجتاز الفحص الفني بكل سلاسة.",
  },
  {
    id: 11,
    category: "styling",
    questionEn: "What color options are available for custom seatbelts?",
    questionAr: "ما هي خيارات الألوان المتوفرة لأحزمة الأمان الملونة؟",
    answerEn:
      "We stock over 20 vibrant shades including Porsche Guards Red, Speed Yellow, Tiffany Turquoise, Acid Green, Burnt Orange, Cobalt Blue, M-Power Tri-color stripes, and designer luxury monogram patterns.",
    answerAr:
      "نوفر أكثر من 20 لوناً حيوياً تشمل الأحمر الرياضي (بورشه)، الأصفر، الأزرق الفاتح (تيفاني)، الأخضر الفسفوري، البرتقالي، كحلي، أحزمة خطوط M-Power الرياضية، ونقشات الماركات الفاخرة.",
  },

  // ── ELECTRONICS & SOUND (12 - 15) ────────────────────────────────────────
  {
    id: 12,
    category: "electronics",
    questionEn: "Can I install an Android touchscreen without losing factory steering wheel buttons or cameras?",
    questionAr: "هل يمكن تركيب شاشة أندرويد دون فقدان التحكم بأزرار المقود أو الكاميرا الأصلية؟",
    answerEn:
      "Yes! Our Android displays come with dedicated CAN-Bus decoding modules that preserve 100% of your factory steering wheel media controls, reverse camera feeds, parking sensors, and climate control status overlays.",
    answerAr:
      "نعم! تأتي شاشات الأندرويد مع محول CAN-Bus مخصص يضمن استمرار عمل كافة أزرار التحكم بالمقود (الستيرنج)، وكاميرا الرجوع الخلفية الأصلية، وحساسات الاصطفاف، وعرض معلومات التكييف.",
  },
  {
    id: 13,
    category: "electronics",
    questionEn: "Do your multimedia screens support wireless Apple CarPlay and Android Auto?",
    questionAr: "هل تدعم الشاشات نظام Apple CarPlay و Android Auto لاسلكياً؟",
    answerEn:
      "Yes, all our screens feature built-in wireless and wired Apple CarPlay and Android Auto, enabling hands-free calling, Google Maps, Waze, and audio streaming directly from your smartphone.",
    answerAr:
      "نعم، تدعم جميع شاشاتنا الحديثة آبل كاربلاي وأندرويد أوتو لاسلكياً وسلكياً لتشغيل خرائط جوجل، وتطبيقات الملاحة، والمكالمات والموسيقى بكل سهولة وبدون كابلات.",
  },
  {
    id: 14,
    category: "electronics",
    questionEn: "What is a DSP amplifier and how does it improve my vehicle's audio quality?",
    questionAr: "ما هو مضخم ومعالج الصوت DSP وكيف يرفع من جودة الصوت في السيارة؟",
    answerEn:
      "A Digital Signal Processor (DSP) cleans, equalizes, and calibrates audio frequencies inside your cabin. With 32 or 48 band equalization and time-alignment, it delivers crisp vocals, punchy bass, and an immersive soundstage without distorting at high volumes.",
    answerAr:
      "يقوم معالج الصوت الرقمي (DSP) بتنقية الترددات وضبط توقيت وصول الصوت للأذنين وتوزيع طبقات الصوت والبيس بدقة عالية عبر 32 أو 48 نطاقاً صوتياً، ليمنحك صوتاً نقيّاً ومحيطياً دون أي تشويش عند رفع الصوت.",
  },
  {
    id: 15,
    category: "electronics",
    questionEn: "Do you offer laser LED headlight bulb upgrades and interior ambient lighting?",
    questionAr: "هل توفرون عدسات وإضاءات ليزر LED وإضاءة محيطية داخلية (Ambient Light)؟",
    answerEn:
      "Yes, we carry ultra-bright laser LED headlight conversions with focused cut-off lines to prevent blinding oncoming traffic, as well as multi-color app-controlled ambient fiber optic strip lighting for door panels, footwells, and dashboard trims.",
    answerAr:
      "نعم، نوفر لمبات وعدسات ليزر LED عالية السطوع بخط قطع دقيق يمنع تشتت الضوء، إلى جانب شرائط الإضاءة المحيطية المخفية للأبواب والأرضيات والتابلوه مع التحكم الكامل بالألوان عبر تطبيق الهاتف.",
  },

  // ── GENERAL, ORDERS & WARRANTY (16 - 20) ──────────────────────────────────
  {
    id: 16,
    category: "general",
    questionEn: "Where is your workshop located and what are your operating hours?",
    questionAr: "أين يقع مركزكم في الشارقة وما هي مواعيد العمل الرسمية؟",
    answerEn:
      "We are conveniently located in Industrial Area 4 & 5, Sharjah, UAE. We are open Saturday through Thursday from 8:00 AM to 9:00 PM, and on Friday from 2:00 PM to 9:00 PM.",
    answerAr:
      "يقع مركزنا في المنطقة الصناعية 4 و 5 بالشارقة، الإمارات. نرحب بكم من السبت إلى الخميس من الساعة 8:00 صباحاً حتى 9:00 مساءً، ويوم الجمعة من 2:00 ظهراً حتى 9:00 مساءً.",
  },
  {
    id: 17,
    category: "general",
    questionEn: "How long does it take to customize and install seat covers or floor mats?",
    questionAr: "كم يستغرق تفصيل وتركيب أغطية المقاعد أو الدعاسات؟",
    answerEn:
      "Pre-tailored patterns in stock can be installed within 1 to 2 hours. Bespoke custom upholstery orders with personalized embroidery or unique leather combinations typically take 1 to 3 business days from measurement to final installation.",
    answerAr:
      "الأطقم المتوفرة بالمقاسات الجاهزة يتم تركيبها خلال ساعة إلى ساعتين في ورشتنا. أما الطلبات الخاصة والتفصيل المخصص بتطريزات معينة فيستغرق من يوم إلى 3 أيام عمل من أخذ المقاسات حتى التركيب النهائي.",
  },
  {
    id: 18,
    category: "general",
    questionEn: "What warranty coverage do you provide on products and craftsmanship?",
    questionAr: "ما هي مدة الضمان التي تقدمونها على المنتجات والتركيب؟",
    answerEn:
      "We offer up to 3 years warranty on custom leather seat covers and stitching, 2 years on 7D molded floor liners, and 1 year on electronic devices, LED lighting, and starlight headliner power modules.",
    answerAr:
      "نقدم ضماناً يصل إلى 3 سنوات على تفصيل المقاعد الجلدية والخياطة، وسنتين على دعاسات 7D المقولبة، وسنة كاملة على الأجهزة الإلكترونية وإضاءات الليزر ومحركات سقف النجوم.",
  },
  {
    id: 19,
    category: "general",
    questionEn: "Do you ship accessories and products across Dubai, Abu Dhabi, and the GCC?",
    questionAr: "هل تشحنون الإكسسوارات والمنتجات إلى دبي وأبوظبي ودول مجلس التعاون الخليجي؟",
    answerEn:
      "Yes, we provide fast courier delivery to all 7 UAE Emirates with cash-on-delivery or secure online payment options. We also ship wholesale rolls, swatches, and accessories to Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.",
    answerAr:
      "نعم، نوفر خدمة التوصيل السريع إلى جميع إمارات الدولة السبع مع خيارات الدفع عند الاستلام أو الدفع الإلكتروني، كما نشحن بضائع الجملة والأقمشة والإكسسوارات إلى السعودية وعُمان وقطر والكويت والبحرين.",
  },
  {
    id: 20,
    category: "general",
    questionEn: "How can I get a quote or book an installation appointment?",
    questionAr: "كيف يمكنني الحصول على عرض سعر أو حجز موعد للتركيب؟",
    answerEn:
      "You can request a fast quote online through our Get a Quote page, message us directly on WhatsApp at +971 55 867 4927, or call our showroom team at +971 55 887 5678.",
    answerAr:
      "يمكنك طلب تسعيرة سريعة عبر موقعنا من صفحة طلب تسعيرة، أو مراسلتنا مباشرة عبر واتساب على الرقم +971 55 867 4927، أو الاتصال بفريق المعرض على +971 55 887 5678.",
  },
];

export default function FaqPageContent() {
  const { isArabic } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    "all" | "seat-covers" | "floor-mats" | "styling" | "electronics" | "general"
  >("all");

  const voice = useVoiceInput({
    isArabic,
    onResult: (_fieldName, text) => {
      setSearchQuery(text);
    },
  });

  // First FAQ uncollapsed by default
  const [openIds, setOpenIds] = useState<number[]>([1]);

  useEffect(() => {
    const firstItem = AUTOMOTIVE_FAQ_ITEMS.find(
      (item) => activeCategory === "all" || item.category === activeCategory
    );
    if (firstItem) {
      setOpenIds([firstItem.id]);
    }
  }, [activeCategory]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { key: "all" as const, labelEn: "All", labelAr: "الكل" },
    { key: "seat-covers" as const, labelEn: "Seat Covers", labelAr: "تنجيد المقاعد" },
    { key: "floor-mats" as const, labelEn: "7D Floor Mats", labelAr: "دواسات 7D" },
    { key: "styling" as const, labelEn: "Starlight & Seatbelts", labelAr: "سقف النجوم والأحزمة" },
    { key: "electronics" as const, labelEn: "Electronics & Sound", labelAr: "الإلكترونيات والصوت" },
    { key: "general" as const, labelEn: "Orders & Warranty", labelAr: "الطلبات والضمان" },
  ];

  const filteredItems = useMemo(() => {
    return AUTOMOTIVE_FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const question = (isArabic ? item.questionAr : item.questionEn).toLowerCase();
      const answer = (isArabic ? item.answerAr : item.answerEn).toLowerCase();

      return question.includes(q) || answer.includes(q);
    });
  }, [activeCategory, searchQuery, isArabic]);

  return (
    <div className="w-full bg-white overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO BANNER SECTION (FAQ)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] overflow-hidden flex flex-col justify-center items-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-us-banner.jpg"
            alt="FAQs Al Rahmaniah Auto Accessories"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative z-20 text-center w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 pt-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
            {isArabic ? "مركز المساعدة والاستفسارات" : "HELP & ANSWERS"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight uppercase leading-tight text-white mb-4">
            {isArabic ? (
              <>
                الأسئلة <span className="text-red-600">الشائعة</span>
              </>
            ) : (
              <>
                Frequently Asked <span className="text-red-600">Questions</span>
              </>
            )}
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed opacity-90">
            {isArabic
              ? "ابحث في أسئلتنا الأكثر شيوعاً أو اختر الفئة للوصول إلى كافة الإجابات حول تفصيل المقاعد ودعاسات 7D وسقف النجوم وضماناتنا بالشارقة."
              : "Search our frequently asked questions by keyword or category to get instant answers regarding our accessories, custom fitment, and warranties in Sharjah."}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. MAIN CONTENT AREA (Taj Al Rahmah Style: Header + Search + Filter + List)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-[44px] md:py-[60px] lg:py-[76px] bg-gradient-to-b from-[#fff6f6] via-[#fafafa] to-[#ffffff] overflow-hidden">
        {/* Left Decorative Vector Curve */}
        <div className="absolute left-0 top-12 sm:top-20 pointer-events-none select-none opacity-60 z-0">
          <Image
            src="/faqPage/Vector (1).svg"
            alt=""
            width={52}
            height={468}
            className="w-auto h-[320px] sm:h-[468px]"
          />
        </div>

        {/* Right Decorative Vector Curve */}
        <div className="absolute right-0 top-12 sm:top-20 pointer-events-none select-none opacity-60 z-0">
          <Image
            src="/faqPage/Vector.svg"
            alt=""
            width={112}
            height={468}
            className="w-auto h-[320px] sm:h-[468px]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            {/* Tagline dashes */}
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-red-600 rounded-full" />
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.2em] text-red-600 uppercase">
                {isArabic ? "الأسئلة الشائعة" : "FAQS"}
              </span>
              <span className="w-5 h-[2px] bg-red-600 rounded-full" />
            </div>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight mb-3">
              {isArabic ? (
                <>
                  الأسئلة الأكثر <span className="text-red-600">تداولاً وإجاباتها</span>
                </>
              ) : (
                <>
                  Frequently Asked <span className="text-red-600">Questions</span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-600 text-xs sm:text-sm md:text-[15px] lg:text-[16px] max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "ابحث في أسئلتنا الأكثر شيوعاً حسب الكلمة المفتاحية أو الفئة للحصول على المعلومات التي تحتاجها فوراً حول منتجاتنا وخدماتنا."
                : "Search our frequently asked questions by keyword or category to get the information you need, right away regarding our products and fitment."}
            </p>
          </div>

          {/* Search Input Bar (Pill shape with Voice Search & red circular action button) */}
          <div className="max-w-2xl mx-auto mb-7 sm:mb-9">
            <div className="relative flex items-center bg-white rounded-full shadow-[0_6px_24px_rgba(220,38,38,0.08)] border border-zinc-200 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/15 transition-all p-1.5 sm:p-2">
              <div className="pl-4 pr-2 rtl:pr-4 rtl:pl-2 text-zinc-400 flex items-center">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onFocus={() => voice.setFocusedField("faqSearch")}
                onBlur={() => voice.setFocusedField(null)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isArabic ? "ابحث هنا (مثال: مقاعد، 7D، سقف النجوم...)" : "Search here (e.g. seat covers, 7D mats, starlight...)"}
                className="w-full bg-transparent text-zinc-800 text-xs sm:text-sm font-medium focus:outline-none placeholder-zinc-400 px-2 py-2"
              />
              {voice.isFieldActive("faqSearch") && (
                <VoiceMicButton
                  isListening={voice.listeningField === "faqSearch"}
                  onClick={() => voice.toggleListening("faqSearch", "text")}
                  isArabic={isArabic}
                  size="sm"
                />
              )}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-full cursor-pointer transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {/* Circular Red Action Button */}
              <button
                type="button"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/30 transition-all cursor-pointer"
                aria-label="Submit Search"
              >
                {isArabic ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Category Filter Tabs (Pill Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-[1.02]"
                      : "bg-red-50 text-red-700 hover:bg-red-100/90 border border-transparent shadow-2xs"
                  }`}
                >
                  {isArabic ? cat.labelAr : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Accordion FAQ List */}
          <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3.5">
            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-zinc-200 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-1">
                  {isArabic ? "لم يتم العثور على نتائج" : "No FAQs Found"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mb-4">
                  {isArabic
                    ? "يرجى تجربة كلمة بحث مختلفة أو تغيير الفئة."
                    : "Try searching with different keywords or switch the category."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:underline cursor-pointer"
                >
                  {isArabic ? "إعادة تعيين البحث" : "Reset Filters"}
                </button>
              </div>
            ) : (
              filteredItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  number={item.id}
                  question={isArabic ? item.questionAr : item.questionEn}
                  answer={isArabic ? item.answerAr : item.answerEn}
                  isOpen={openIds.includes(item.id)}
                  onToggle={() => toggleAccordion(item.id)}
                  isArabic={isArabic}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. BOTTOM CTA SECTION ("Still have questions?" - Taj Al Rahmah Style)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0a0a0c] py-[44px] md:py-[60px] lg:py-[76px] overflow-hidden">
        {/* Background Image (Group 1000010019.png) */}
        <Image
          src="/faqPage/Group 1000010019.png"
          alt="Still have questions background"
          fill
          unoptimized
          className="object-cover object-center pointer-events-none opacity-40"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3 sm:mb-4">
            {isArabic ? (
              <>
                هل ما زالت لديك <span className="text-red-500">أسئلة؟</span>
              </>
            ) : (
              <>
                Still have <span className="text-red-500">questions?</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-zinc-300 max-w-lg mx-auto leading-relaxed mb-7 sm:mb-8">
            {isArabic
              ? "لم تجد الإجابة التي تبحث عنها؟ فريقنا المتخصص في زينة وتنجيد السيارات بالشارقة جاهز للإجابة على كافة استفساراتك ومساعدتك في اختيار أفضل المنتجات لسيارتك."
              : "Can't find the answer you're looking for? Our team of auto accessories and upholstery specialists in Sharjah is ready to help you."}
          </p>

          {/* Contact Support Pill Button with Headset Icon */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971558674927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs sm:text-sm md:text-[15px] px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-lg shadow-red-600/40 transition-all duration-200 group cursor-pointer"
            >
              {/* WhatsApp Support Icon */}
              <Image
                src="/faqPage/SVG - Support Headset Icon.svg"
                alt="WhatsApp Support"
                width={26}
                height={26}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <span>{isArabic ? "تواصل مع الدعم عبر واتساب" : "Chat on WhatsApp"}</span>
              {isArabic ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              )}
            </a>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-zinc-900 border border-white/20 font-bold text-xs sm:text-sm md:text-[15px] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full backdrop-blur-md transition-all duration-200 group cursor-pointer"
            >
              <span>{isArabic ? "طلب تسعيرة مخصصة" : "Get a Custom Quote"}</span>
              {isArabic ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              )}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
