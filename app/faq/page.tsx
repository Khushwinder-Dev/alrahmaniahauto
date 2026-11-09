"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import FaqAccordionItem from "@/components/Common/FaqAccordionItem";
import { AUTOMOTIVE_FAQS } from "@/components/Common/FaqSection";
import { WORKSHOP_INFO } from "@/data/workshopData";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQPage() {
  const { isArabic } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Page Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[380px] overflow-hidden flex flex-col justify-center items-center bg-black pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="FAQs Al Rahmaniah Auto Accessories"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-20 text-center w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            {isArabic ? "مركز المساعدة والاستفسارات" : "Help & Answers"}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase leading-tight text-white mb-3">
            {isArabic ? "الأسئلة الأكثر " : "Frequently Asked "}
            <span className="text-red-600">{isArabic ? "تداولاً" : "Questions"}</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            {isArabic
              ? "كل ما تود معرفته عن إكسسواراتنا، وتفصيل أغطية المقاعد الجلدية، ودعاسات 7D، والضمان وطرق التركيب في الشارقة."
              : "Everything you need to know about our auto accessories, custom leather seat covers, 7D floor mats, and expert fitment in Sharjah."}
          </p>
        </div>
      </section>

      {/* Main Taj Al Rahmah Style FAQ Container (Centered max-w-4xl, Exactly 6 FAQs) */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
              <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
                {isArabic ? "الأسئلة الشائعة" : "FAQ"}
              </span>
              <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-zinc-900 tracking-tight leading-[1.15]">
              {isArabic ? "الأسئلة الأكثر " : "Frequently Asked "}
              <span className="text-red-600">{isArabic ? "تداولاً وإجاباتها" : "Questions"}</span>
            </h2>
            <p className="mt-3 text-zinc-500 text-xs sm:text-sm md:text-base leading-relaxed">
              {isArabic
                ? "كل ما تود معرفته عن إكسسواراتنا، وتفصيل أغطية المقاعد الجلدية، ودعاسات 7D، والضمان وطرق التركيب في الشارقة."
                : "Everything you need to know about our auto accessories, custom leather seat covers, 7D floor mats, and expert fitment in Sharjah."}
            </p>
          </div>

          {/* Exactly 6 FAQs */}
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
                  isArabic={isArabic}
                />
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 p-8 bg-zinc-900 text-white rounded-3xl border border-zinc-800 text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-2">
                {isArabic ? "هل لديك استفسار آخر؟" : "Still Have Questions?"}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
                {isArabic
                  ? "فريق مستشاري إكسسوارات السيارات متواجد من السبت إلى الخميس لمساعدتك في الحصول على أفضل عرض سعر وتحديد متطلبات سيارتك."
                  : "Our product specialists are available Saturday to Thursday to assist you with customized quotes and fitment questions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${WORKSHOP_INFO.phones[0]}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isArabic ? `اتصل بنا ${WORKSHOP_INFO.phones[0]}` : `Call ${WORKSHOP_INFO.phones[0]}`}</span>
                </a>
                <Link
                  href="/get-a-quote"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isArabic ? "طلب تسعيرة فورية" : "Get Instant Quote"}</span>
                </Link>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
