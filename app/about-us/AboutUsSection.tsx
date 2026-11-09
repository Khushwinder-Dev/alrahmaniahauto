"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutUsSection = () => {
  const { isArabic } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white py-[40px] md:py-[56px] lg:py-[72px]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          {/* Left Content Section */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-7"
            data-aos={isArabic ? "fade-left" : "fade-right"}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-red-600 tracking-tight">
              {isArabic ? "رسالة الرئيس التنفيذي" : "CEO Message"}
            </h2>

            {/* CEO Quotation */}
            <p className="text-justify text-stone-600 text-base sm:text-lg lg:text-2xl xl:text-3xl font-normal leading-7 sm:leading-8 lg:leading-9 italic relative">
              <span
                className={`text-5xl lg:text-6xl text-red-600 font-serif absolute -top-6 select-none ${
                  isArabic ? "right-0" : "left-0"
                }`}
              >
                “
              </span>
              <span className={`block ${isArabic ? "pr-7" : "pl-7"}`}>
                {isArabic
                  ? "في شركة الرحمانية لإكسسوارات وزينة السيارات، يمتد التزامنا بالتميز إلى أبعد من مجرد الخبرة الفنية ليشمل الحرفية الاستثنائية وخامات التنجيد الفاخرة والنزاهة الراسخة. عندما تختار الرحمانية، فأنت تختار شريكاً موثوقاً يكرس كل جهوده لتحقيق الفخامة والأمان والراحة القصوى لمركبتك."
                  : "At Al Rahmaniah Auto Accessories, our commitment to excellence extends beyond technical expertise to encompass exceptional craftsmanship, premium automotive materials, and unwavering integrity. When you choose Al Rahmaniah, you’re choosing a trusted partner dedicated to the luxury, safety, and ultimate comfort of your vehicle."}
              </span>
              <span
                className={`text-5xl lg:text-6xl text-red-600 font-serif absolute -bottom-4 select-none ${
                  isArabic ? "left-0" : "right-0"
                }`}
              >
                ”
              </span>
            </p>

            {/* CEO Name & Title */}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 tracking-tight">
                {isArabic ? "محمد نظام الدين عبد الكلام" : "MD Nijam Uddin Abdul Kalam"}
              </h3>
              <p className="text-stone-500 font-medium text-sm sm:text-base lg:text-lg mt-0.5">
                {isArabic ? "الرئيس التنفيذي" : "Chief Executive Officer"}
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos={isArabic ? "fade-right" : "fade-left"}
          >
            <div className="w-full max-w-[500px] aspect-square rounded-[20px] overflow-hidden relative shadow-2xl border border-zinc-200/80 bg-zinc-100 group">
              <Image
                src="/ceo3.jpeg"
                alt={isArabic ? "رسالة الرئيس التنفيذي - محمد نظام الدين عبد الكلام" : "CEO Message - MD Nijam Uddin Abdul Kalam"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
