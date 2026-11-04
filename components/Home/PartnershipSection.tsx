"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const brands = [
  { name: "Mercedes-Benz", logo: "/images/brands/Mercedes-Logo.png" },
  { name: "BMW", logo: "/images/brands/bimw.png" },
  { name: "Volkswagen", logo: "/images/brands/Volkswagen-Logo.png" },
  { name: "Land Rover", logo: "/images/brands/Land-Rover-Logo.jpg" },
  { name: "Chevrolet", logo: "/images/brands/Chevrolet-Logo.jpg" },
  { name: "Audi", logo: "/images/brands/Audi-Logo.jpg" },
  { name: "Kia", logo: "/images/brands/Kia-Logo.jpg" },
  { name: "Porsche", logo: "/images/brands/Porsche-Logo.jpg" },
  { name: "Ford", logo: "/images/brands/Ford-Logo.jpg" },
  { name: "Nissan", logo: "/images/brands/Nissan-Logo.jpg" },
  { name: "Toyota", logo: "/images/brands/Toyota-Logo.jpg" },
  { name: "Honda", logo: "/images/brands/Honda-logo.jpg" },
  { name: "Mitsubishi", logo: "/images/brands/Mitsubishi.jpg" },
  { name: "Lexus", logo: "/images/brands/Lexus.jpg" },
  { name: "Suzuki", logo: "/images/brands/Suzuki.jpg" },
  { name: "Infiniti", logo: "/images/brands/Infiniti.png" },
  { name: "UD", logo: "/images/brands/ud.png" },
  { name: "Jeep", logo: "/images/brands/jeep.png" },
];

// Tripled for seamless continuous infinite loop
const trackBrands = [...brands, ...brands, ...brands];

interface PartnershipSectionProps {
  showPauseButton?: boolean;
}

export default function PartnershipSection({
  showPauseButton = true,
}: PartnershipSectionProps = {}) {
  const { isArabic } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const posRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const speed = 0.55; // px per frame

    const tick = () => {
      if (!isPausedRef.current && !isHoveredRef.current && el) {
        posRef.current += speed;
        const singleWidth = el.scrollWidth / 3;
        if (singleWidth > 0) {
          if (posRef.current >= singleWidth) {
            posRef.current -= singleWidth;
          } else if (posRef.current < 0) {
            posRef.current += singleWidth;
          }
        }
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      isPausedRef.current = next;
      return next;
    });
  };

  const nudge = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = direction === "next" ? 260 : -260;
    const offset = isArabic ? -delta : delta;
    posRef.current += offset;
    const singleWidth = el.scrollWidth / 3;
    if (singleWidth > 0) {
      if (posRef.current >= singleWidth) {
        posRef.current -= singleWidth;
      } else if (posRef.current < 0) {
        posRef.current += singleWidth;
      }
    }
    el.style.transform = `translateX(-${posRef.current}px)`;
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 border-y border-zinc-200/80 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER (Bab Al Bustan / Taj Al Rahmah Layout)     */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-10 sm:mb-14">
          {/* Left Column: Eyebrow + Heading */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-block h-[2px] w-8 sm:w-10 rounded-full shrink-0 bg-red-600" />
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase text-red-600">
                {isArabic ? "توافق تام مع مختلف العلامات" : "OEM FITMENT & COMPATIBILITY"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight leading-[1.15] text-zinc-900">
              {isArabic ? "العلامات التي نخصص لها الإكسسوارات" : "Brands We Style & Upgrade"}
            </h2>
          </div>

          {/* Right Column: Description + Action Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:max-w-2xl">
            <p className="text-sm sm:text-base leading-relaxed flex-1 text-zinc-600">
              {isArabic
                ? "نقوم بتفصيل أطقم المقاعد الجلدية، ودعاسات 7D، والإكسسوارات لأشهر العلامات اليابانية والألمانية والأمريكية في الإمارات بدقة متناهية."
                : "We custom-tailor bespoke leather seat covers, 7D all-weather floor mats, and interior accessories for leading automotive brands across the UAE."}
            </p>

            <div className="flex items-center justify-end sm:justify-start gap-2.5 shrink-0 w-full sm:w-auto self-end sm:self-auto">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => nudge("prev")}
                aria-label={isArabic ? "السابق" : "Previous"}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-zinc-300 text-zinc-700 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-2xs"
              >
                {isArabic ? (
                  <ChevronRight className="w-5 h-5" />
                ) : (
                  <ChevronLeft className="w-5 h-5" />
                )}
              </button>

              {/* Pause / Play Button */}
              {showPauseButton && (
                <button
                  type="button"
                  onClick={togglePause}
                  aria-label={
                    isPaused
                      ? isArabic
                        ? "تشغيل الشريط"
                        : "Play carousel"
                      : isArabic
                        ? "إيقاف مؤقت"
                        : "Pause carousel"
                  }
                  title={
                    isPaused
                      ? isArabic
                        ? "تشغيل"
                        : "Play"
                      : isArabic
                        ? "إيقاف مؤقت"
                        : "Pause"
                  }
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs ${
                    isPaused
                      ? "bg-red-600 text-white border border-red-600 shadow-md shadow-red-600/20 hover:bg-red-700 hover:border-red-700"
                      : "border border-zinc-300 text-zinc-700 hover:border-red-600 hover:bg-red-600 hover:text-white"
                  }`}
                >
                  {isPaused ? (
                    <Play className="w-4 h-4 fill-current ml-0.5 rtl:ml-0 rtl:mr-0.5" />
                  ) : (
                    <Pause className="w-4 h-4 fill-current" />
                  )}
                </button>
              )}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => nudge("next")}
                aria-label={isArabic ? "التالي" : "Next"}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-zinc-300 text-zinc-700 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-2xs"
              >
                {isArabic ? (
                  <ChevronLeft className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* INFINITE AUTO-SCROLLING LOGOS STRIP (Bab Al Bustan Style) */}
      {/* ========================================================= */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onTouchStart={() => {
          isHoveredRef.current = true;
        }}
        onTouchEnd={() => {
          isHoveredRef.current = false;
        }}
        aria-label={isArabic ? "شريط العلامات التجارية" : "Automotive brand partners"}
      >
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 z-10 pointer-events-none bg-gradient-to-r from-zinc-50 via-zinc-50/90 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 z-10 pointer-events-none bg-gradient-to-l from-zinc-50 via-zinc-50/90 to-transparent" />

        {/* Floating Side Nudge Controls */}
        <div className="pointer-events-none absolute inset-y-0 left-2 sm:left-4 z-20 flex items-center">
          <button
            type="button"
            onClick={() => nudge("prev")}
            aria-label={isArabic ? "السابق" : "Previous"}
            className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900/80 hover:bg-red-600 text-white flex items-center justify-center shadow-lg backdrop-blur-xs transition-all active:scale-90 cursor-pointer border border-white/10"
          >
            {isArabic ? (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-4 z-20 flex items-center">
          <button
            type="button"
            onClick={() => nudge("next")}
            aria-label={isArabic ? "التالي" : "Next"}
            className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900/80 hover:bg-red-600 text-white flex items-center justify-center shadow-lg backdrop-blur-xs transition-all active:scale-90 cursor-pointer border border-white/10"
          >
            {isArabic ? (
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        {/* Scrolling track: dir="ltr" to maintain consistent physical motion */}
        <div
          dir="ltr"
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-5 lg:gap-6 will-change-transform py-4 px-2"
          style={{ width: "max-content" }}
        >
          {trackBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              title={brand.name}
              className="flex-shrink-0 relative w-[116px] h-[116px] sm:w-[136px] sm:h-[136px] lg:w-[152px] lg:h-[152px] xl:w-[160px] xl:h-[160px] bg-white rounded-full border-2 border-zinc-200/90 hover:border-red-600 shadow-[0_6px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(220,38,38,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex items-center justify-center p-4 sm:p-5 lg:p-6 cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} custom seat covers & accessories Sharjah`}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 116px, (max-width: 1024px) 136px, 160px"
                  className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
