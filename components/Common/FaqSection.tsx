"use client";

import React, { useState, useEffect } from "react";
import FaqAccordionItem from "@/components/Common/FaqAccordionItem";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  questionAr?: string;
  answerAr?: string;
  questionEn?: string;
  answerEn?: string;
}

export const AUTOMOTIVE_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "What types of auto accessories and styling products do you offer?",
    questionAr: "ما هي أنواع إكسسوارات السيارات ومنتجات التزيين التي تقدمونها؟",
    answer:
      "We provide a comprehensive range of premium automotive accessories, including custom-tailored leather seat covers, 7D all-weather molded floor mats, custom-colored seatbelts, starlight headliners, Android touchscreen displays, DSP sound systems, and laser LED headlights for Japanese, European, and American cars.",
    answerAr:
      "نوفر تشكيلة متكاملة من أرقى إكسسوارات السيارات، تشمل تفصيل أغطية المقاعد الجلدية، ودعاسات الأرضيات 7D المقاومة للماء والأتربة، وأحزمة الأمان الملونة، ونجوم سقف روز رايز، وشاشات الأندرويد، وأنظمة الصوت، وإضاءات الليزر LED للسيارات اليابانية والأوروبية والأمريكية.",
  },
  {
    id: 2,
    question: "Can you custom-tailor seat covers and floor mats for my specific vehicle model?",
    questionAr: "هل تقومون بتفصيل أغطية المقاعد والدعاسات حسب مقاسات سيارتي بدقة؟",
    answer:
      "Yes! Every seat cover set and floor liner is precision laser-cut and handcrafted to the exact make, model, and year of your car. Our patterns accommodate side airbags, seat controls, and folding mechanisms for a flawless factory OEM fit.",
    answerAr:
      "نعم بكل تأكيد! يتم تفصيل كل طقم مقاعد ودعاسات أرضية بالليزر وفقاً لموديل وسنة صنع سيارتك بدقة متناهية، مع مراعاة فتحات الوسائد الهوائية (الإيرباج) وأزرار التحكم وحركة المقاعد لتبدو كفرش الوكالة الأصلي.",
  },
  {
    id: 3,
    question: "Where is your showroom located, and can I visit to see physical material samples?",
    questionAr: "أين يقع معرضكم في الشارقة وهل يمكنني معاينة عينات الجلود والمواد شخصياً؟",
    answer:
      "Our showroom and customization center is located in Industrial Area 4 & 5, Sharjah, UAE. We welcome you Saturday through Thursday from 8:00 AM to 9:00 PM (Friday: 2:00 PM - 9:00 PM) to inspect physical Napa leather, Alcantara, stitching colors, and accessories in person.",
    answerAr:
      "يقع معرضنا ومركز التفصيل في المنطقة الصناعية 4 و 5 بالشارقة، الإمارات. نرحب بزيارتكم من السبت إلى الخميس من 8:00 صباحاً حتى 9:00 مساءً (الجمعة: 2:00 ظهراً - 9:00 مساءً) لمعاينة عينات جلود النابا والألكانتارا وألوان الخياطة والإكسسوارات على أرض الواقع.",
  },
  {
    id: 4,
    question: "Do you provide professional installation and fitment for accessories purchased?",
    questionAr: "هل توفرون خدمة التركيب والتلبيس الاحترافي للإكسسوارات المشتراة؟",
    answer:
      "Yes, we offer master installation services right at our Sharjah showroom bays. Our experienced fitters expertly install seat covers, floor mats, sound systems, electronics, and LED lighting, with most standard fittings completed within 1 to 2 hours.",
    answerAr:
      "نعم، نوفر خدمة تركيب وتلبيس احترافية ومباشرة في ورشة المعرض بالشارقة. يقوم فنيونا المتمرسون بتركيب أغطية المقاعد والدعاسات والشاشات وأنظمة الإضاءة بسرعة وإتقان خلال ساعة إلى ساعتين لمعظم السيارات.",
  },
  {
    id: 5,
    question: "Do your auto accessories and custom seat covers come with warranty?",
    questionAr: "هل منتجات إكسسوارات السيارات وتفصيل المقاعد مشمولة بالضمان؟",
    answer:
      "Absolutely. Our custom leather seat covers and interior upholstery come with up to 3 years warranty against cracking, stitching failure, and UV fading under intense UAE summer heat. All electronic accessories and LED lighting carry a 1-year replacement warranty.",
    answerAr:
      "بالتأكيد. أطقم تفصيل المقاعد الجلدية والفرش الداخلي مشمولة بضمان يصل إلى 3 سنوات ضد التشقق وتفكك الخياطة أو تغير اللون بفعل حرارة شمس الإمارات. كما تحمل كافة الإكسسوارات الإلكترونية والإضاءات ضمان استبدال لمدة سنة.",
  },
  {
    id: 6,
    question: "Do you offer door-to-door delivery and shipping across Sharjah, Dubai, and UAE?",
    questionAr: "هل توفرون خدمة التوصيل والشحن إلى المنازل في الشارقة ودبي وباقي الإمارات؟",
    answer:
      "Yes! We provide express door-to-door courier delivery across all 7 Emirates (Sharjah, Dubai, Abu Dhabi, Ajman, RAK, UAQ, Fujairah). We also offer wholesale bulk supply and GCC export shipping with real-time tracking.",
    answerAr:
      "نعم! نوفر خدمة شحن وتوصيل سريعة حتى باب منزلك في جميع إمارات الدولة (الشارقة، دبي، أبوظبي، عجمان، رأس الخيمة، أم القيوين، الفجيرة). كما نوفر خدمة البيع بالجملة والتصدير إلى دول الخليج مع التتبع المباشر.",
  },
];

export interface FaqSectionProps {
  faqs?: FaqItem[];
  titlePrefix?: string;
  titlePrefixAr?: string;
  titleHighlight?: string;
  titleHighlightAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  isArabic?: boolean;
  className?: string;
  bgClassName?: string;
  pyClassName?: string;
}

export default function FaqSection({
  faqs = AUTOMOTIVE_FAQS,
  titlePrefix = "Frequently Asked",
  titlePrefixAr = "الأسئلة",
  titleHighlight = "Questions",
  titleHighlightAr = "الشائعة",
  subtitle = "Find clear answers to common questions about our auto accessories, custom seat covers, warranties, and UAE shipping.",
  subtitleAr = "إجابات واضحة وشاملة حول إكسسوارات السيارات، تفصيل المقاعد، الشحن لكافة الإمارات، والضمانات المعتمدة.",
  isArabic = false,
  className = "",
  bgClassName = "bg-white",
  pyClassName = "py-16 md:py-24",
}: FaqSectionProps) {
  // Take only 6 FAQs
  const displayFaqs = faqs.slice(0, 6);
  const [openId, setOpenId] = useState<number | null>(displayFaqs[0]?.id ?? 1);

  useEffect(() => {
    if (displayFaqs && displayFaqs.length > 0) {
      setOpenId(displayFaqs[0].id);
    }
  }, [faqs]);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`relative w-full ${pyClassName} ${bgClassName} ${className} overflow-hidden`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        <div className="max-w-4xl mx-auto">
        {/* Taj Al Rahmah Style Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          {/* Tagline: — FAQ — */}
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
            <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "الأسئلة الشائعة" : "FAQ"}
            </span>
            <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-black text-zinc-900 tracking-tight leading-[1.15]">
            {isArabic ? (
              <>
                {titlePrefixAr}{" "}
                <span className="text-red-600">{titleHighlightAr}</span>
              </>
            ) : (
              <>
                {titlePrefix}{" "}
                <span className="text-red-600">{titleHighlight}</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 sm:mt-3.5 text-zinc-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {isArabic ? subtitleAr : subtitle}
          </p>
        </div>

        {/* Taj Al Rahmah Style Single-Column Accordion List (Exactly 6 FAQs) */}
        <div className="space-y-3 sm:space-y-4">
          {displayFaqs.map((faq, idx) => (
            <FaqAccordionItem
              key={faq.id || idx + 1}
              number={idx + 1}
              question={
                (isArabic && faq.questionAr
                  ? faq.questionAr
                  : faq.questionEn || faq.question) || ""
              }
              answer={
                (isArabic && faq.answerAr
                  ? faq.answerAr
                  : faq.answerEn || faq.answer) || ""
              }
              isOpen={openId === (faq.id || idx + 1)}
              onToggle={() => toggleFaq(faq.id || idx + 1)}
              isArabic={isArabic}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
