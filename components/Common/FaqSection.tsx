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
    question: "What types of vehicles and car brands do you service?",
    questionAr: "ما هي أنواع وماركات السيارات التي تقدمون لها خدمات الصيانة؟",
    answer:
      "We specialize in comprehensive maintenance, mechanical repairs, and interior customization for all vehicle types, including luxury European (Mercedes-Benz, BMW, Audi, Porsche, VW), Japanese (Toyota, Lexus, Nissan, Honda), and American cars, using factory-grade computerized diagnostic tools and certified master technicians.",
    answerAr:
      "نحن متخصصون في الصيانة الشاملة والإصلاحات الميكانيكية وتفصيل الفرش الداخلي لجميع فئات السيارات، بما في ذلك السيارات الأوروبية الفاخرة (مرسيدس، بي إم دبليو، أودي، بورش، فولكس فاجن)، واليابانية (تويوتا، لكزس، نيسان، هوندا)، والأمريكية، باستخدام أحدث أجهزة الفحص المبرمجة وفنيين معتمدين.",
  },
  {
    id: 2,
    question: "Where is your workshop located, and what are your operating hours?",
    questionAr: "أين يقع مركز الصيانة الخاص بكم وما هي ساعات العمل؟",
    answer:
      "Our main workshop and accessories facility is located in Industrial Area 4 & 5, Sharjah, UAE. We are open Saturday through Thursday from 8:00 AM to 9:00 PM, and on Friday from 2:00 PM to 9:00 PM, with dedicated customer reception, express inspection bays, and free parking.",
    answerAr:
      "يقع مركز الصيانة ومتجر الإكسسوارات في المنطقة الصناعية 4 و 5 بالشارقة، الإمارات. نستقبلكم من السبت إلى الخميس من 8:00 صباحاً حتى 9:00 مساءً، ويوم الجمعة من 2:00 ظهراً حتى 9:00 مساءً، مع استراحة مريحة للعملاء ومواقف مخصصة.",
  },
  {
    id: 3,
    question: "Do you offer transparent upfront quotes before starting repairs?",
    questionAr: "هل تقدمون عروض أسعار وتقديرات واضحة قبل البدء بالإصلاح؟",
    answer:
      "Yes! 100% price transparency is our core promise. Every service begins with a comprehensive multi-point diagnostic inspection. We provide an itemized digital quotation detailing parts and labor for your approval before turning a single wrench, with zero hidden charges.",
    answerAr:
      "نعم بكل تأكيد! الشفافية التامة هي التزامنا الأساسي. تبدأ كل خدمة بفحص فني شامل، ونقدم تقريراً مفصلاً وعرض أسعار واضح لقطع الغيار وأجور اليد لاعتماده من قِبلكم قبل بدء أي عمل وبدون أي رسوم خفية.",
  },
  {
    id: 4,
    question: "How long does a standard oil change or routine minor service take?",
    answer:
      "Our express maintenance services—such as synthetic oil and OEM filter changes, brake inspections, fluid top-ups, and battery tests—are typically completed in under 30 to 45 minutes in our dedicated fast-track service bays.",
    questionAr: "كم يستغرق تغيير الزيت أو الصيانة الدورية السريعة؟",
    answerAr:
      "خدمات الصيانة السريعة لدينا — مثل تغيير زيت المحرك التخليقي وفلتر الوكالة وفحص الفرامل والبطارية — تستغرق عادة ما بين 30 إلى 45 دقيقة فقط في مسارات الخدمة السريعة.",
  },
  {
    id: 5,
    question: "Do you provide warranty on your repair work and custom seat covers?",
    questionAr: "هل تقدمون ضماناً على أعمال الصيانة وأغطية المقاعد المخصصة؟",
    answer:
      "Absolutely. All mechanical repairs and OEM replacement parts are covered by our 6 to 12-month workshop warranty. Our custom-tailored leather seat covers and interior upholstery come with up to 3 years warranty against cracking, stitching failure, and UV fading.",
    answerAr:
      "بالتأكيد. جميع الإصلاحات الميكانيكية وقطع الغيار الأصلية مشمولة بضمان الورشة من 6 إلى 12 شهراً. كما نوفر ضماناً يصل إلى 3 سنوات على تفصيل المقاعد الجلدية والفرش الداخلي ضد التشقق وتفكك الخياطة أو تغير اللون.",
  },
  {
    id: 6,
    question: "Do you offer vehicle recovery, pickup, and delivery across UAE?",
    questionAr: "هل توفرون خدمة سحب ونقل السيارات واستلامها من المنزل؟",
    answer:
      "Yes, we provide dedicated flatbed recovery and vehicle pickup & drop-off services across Sharjah, Dubai, and Ajman. You can book an appointment online or contact our service advisors directly on WhatsApp at +971 50 786 0161 for immediate assistance.",
    answerAr:
      "نعم، نوفر سطحات نقل واستلام وتسليم السيارات من وإلى موقعكم في الشارقة ودبي وعجمان. يمكنك حجز موعد عبر الموقع أو التواصل مباشرة عبر الواتساب على 0507860161 لتنسيق النقل.",
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
  subtitle = "Find clear answers to common questions about our automotive maintenance, repair services, and warranties.",
  subtitleAr = "إجابات واضحة وشاملة حول خدمات صيانة السيارات، قطع الغيار الأصلية، والضمانات المعتمدة.",
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}
