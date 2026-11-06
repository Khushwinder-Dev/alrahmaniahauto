"use client";

import React, { useState } from "react";
import FaqAccordionItem from "@/components/Common/FaqAccordionItem";
import { AUTOMOTIVE_FAQS } from "@/components/Common/FaqSection";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeFaqSection() {
  const { isArabic } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
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
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-zinc-900 tracking-tight leading-[1.15]">
            {isArabic ? "الأسئلة الأكثر " : "Frequently Asked "}
            <span className="text-red-600">{isArabic ? "تداولاً وإجاباتها" : "Questions"}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-zinc-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {isArabic
              ? "كل ما تود معرفته عن إكسسواراتنا، وتفصيل أغطية المقاعد الجلدية، ودعاسات 7D، والضمان وطرق التركيب في الشارقة."
              : "Everything you need to know about our auto accessories, custom leather seat covers, 7D floor mats, and expert fitment in Sharjah."}
          </p>
        </div>

        {/* Accordion List (Exactly 6 Automotive FAQs) */}
        <div className="space-y-3 sm:space-y-4">
          {AUTOMOTIVE_FAQS.slice(0, 6).map((faq, idx) => {
            const questionText = isArabic && faq.questionAr ? faq.questionAr : faq.question;
            const answerText = isArabic && faq.answerAr ? faq.answerAr : faq.answer;

            return (
              <FaqAccordionItem
                key={faq.id}
                number={idx + 1}
                question={questionText}
                answer={answerText}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
