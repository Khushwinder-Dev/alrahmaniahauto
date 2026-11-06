"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Play, Pause } from "lucide-react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BookMeetingModal from "@/components/BookMeetingModal";

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

const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -28 : 28,
  }),
};

export default function HeroSection({ s }: { s?: Record<string, string> }) {
  const router = useRouter();
  const { t, isArabic } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto Accessories Slides matching Al Rahmaniah Auto
  const slides = [
    {
      titlePart1: isArabic ? "فخامة وأناقة و" : "Crafted Luxury &",
      titlePart2: isArabic ? "إكسسوارات سيارات حصرية" : "Custom Car Accessories",
      description: isArabic
        ? "أرقى تشكيلات أغطية المقاعد الجلدية، دعاسات 7D الفاخرة، والإلكترونيات المصممة لأقسى درجات حرارة الإمارات."
        : "Discover bespoke 3D leather seat covers, precision 7D floor mats, advanced car electronics, and styling accessories engineered for extreme UAE durability in Sharjah.",
    },
    {
      titlePart1: isArabic ? "تفصيل مقاعد فاخرة و" : "Tailored Seat Covers &",
      titlePart2: isArabic ? "تجديد شامل للفرش" : "Interior Restoration",
      description: isArabic
        ? "تفصيل جلود نابا وألكانتارا، أحزمة أمان ملونة، ونجوم سقف روز رايز مخصصة لموديل سيارتك بدقة متناهية."
        : "Hand-crafted German Napa leather, diamond-quilted PVC, custom colored seatbelts, and starlight headliners precision-fitted to your exact vehicle model.",
    },
    {
      titlePart1: isArabic ? "إلكترونيات متطورة و" : "Automotive Electronics &",
      titlePart2: isArabic ? "إضاءات ليزر LED فائقة" : "Laser LED Lighting",
      description: isArabic
        ? "شاشات أندرويد فائقة الوضوح، أنظمة صوت DSP، عدسات وإضاءات ليزر LED قوية، وإضاءات محيطية داخلية."
        : "Upgrade your driving experience with crystal-clear Android touchscreens, DSP sound systems, high-lumen laser LED headlights, and ambient interior lighting.",
    },
  ];

  const activeSlide = slides[slideIndex];

  const goToSlide = (index: number) => {
    if (index === slideIndex) return;
    setDirection(index > slideIndex ? 1 : -1);
    setSlideIndex(index);
  };

  useEffect(() => {
    if (isPlayingVideo && !isVideoPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlayingVideo, isVideoPaused, slides.length, slideIndex]);

  // Accessories Stats
  const statsData = [
    { value: 15, suffix: "+", label: isArabic ? "سنوات خبرة" : (t?.hero?.stat1 || "Years Experience") },
    { value: 20000, suffix: "+", label: isArabic ? "سيارة تم تزيينها" : "Vehicles Upgraded" },
    { value: 500, suffix: "+", label: isArabic ? "منتج وإكسسوار متوفر" : "Top Accessories" },
    { value: 99, suffix: "%", label: isArabic ? "نسبة رضا العملاء" : (t?.hero?.stat4 || "Satisfaction Rate") },
  ];

  // Video playback toggling
  const handleToggleVideo = () => {
    if (!isPlayingVideo) {
      setIsPlayingVideo(true);
      setIsVideoPaused(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((err) => console.log("Video playback error:", err));
      }
    } else {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current
            .play()
            .then(() => setIsVideoPaused(false))
            .catch((err) => console.log("Video resume error:", err));
        } else {
          videoRef.current.pause();
          setIsVideoPaused(true);
        }
      }
    }
  };



  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0c]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* 1. Background Image Banner (This Project's Automotive Workshop Images) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${isPlayingVideo && !isVideoPaused
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
          }`}
      >
        {/* Desktop / Tablet Supercar Workshop Banner */}
        <Image
          src="/images/home-hero.png"
          alt="Al Rahmaniah Auto Maintenance Workshop"
          fill
          priority
          quality={100}
          className="hidden md:block object-cover object-center"
          sizes="(min-width: 768px) 100vw, 1px"
          unoptimized
        />
        {/* Mobile Portrait Workshop Banner */}
        <Image
          src="/images/home-hero-mobile.png"
          alt="Al Rahmaniah Auto Workshop Mobile"
          fill
          priority
          quality={100}
          className="block md:hidden object-cover object-center"
          sizes="(max-width: 767px) 100vw, 1px"
          unoptimized
        />
      </div>

      {/* 2. Background Video Banner (4K Car Workshop Repair Video) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${isPlayingVideo && !isVideoPaused
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <video
          ref={videoRef}
          src="/Hero.mp4"
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 3. Deep Carbon & Racing Red Gradient Overlays */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 10, 12, 0.88) 0%, rgba(14, 14, 18, 0.75) 40%, rgba(20, 10, 10, 0.50) 70%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 8, 10, 0.55) 0%, transparent 25%, transparent 65%, rgba(10, 10, 12, 0.90) 100%)",
        }}
      />

      {/* 4. Left Vertical Slider / Pill Indicators */}
      <div
        className={`flex flex-col items-center gap-2.5 absolute top-1/2 -translate-y-1/2 z-30 ${isArabic ? "right-3 sm:right-5 xl:right-7" : "left-3 sm:left-5 xl:left-7"
          }`}
      >
        {slides.map((_, index) => {
          const active = index === slideIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`${isArabic ? "الشريحة" : "Go to slide"} ${index + 1}`}
              aria-current={active}
              className={`rounded-full transition-all duration-300 cursor-pointer ${active
                  ? "w-1.5 h-8 bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.9)]"
                  : "w-1.5 h-7 border border-white/40 bg-white/10 hover:border-red-500 hover:bg-red-600/30"
                }`}
            />
          );
        })}
      </div>

      {/* 6. Main Hero Content Container */}
      <div
        className={`relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 pt-32 sm:pt-40 lg:pt-44 flex-1 flex flex-col justify-center ${isArabic ? "pr-10 sm:pr-14" : "pl-10 sm:pl-14"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Text & CTAs (Columns 1-8) */}
          <div className="lg:col-span-8 flex flex-col items-start text-start min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]">
            {/* Eyebrow with Brand Red Accent */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[2px] bg-red-600" />
              <span className="text-red-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                {isArabic ? "أفضل متجر إكسسوارات سيارات في الشارقة" : "PREMIUM AUTO ACCESSORIES IN SHARJAH"}
              </span>
            </div>

            {/* Slider Content */}
            <div className="relative w-full overflow-hidden min-h-[190px] sm:min-h-[230px] lg:min-h-[260px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slideIndex}
                  custom={direction}
                  variants={SLIDE_VARIANTS}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] font-extrabold leading-[1.08] tracking-tight">
                    {activeSlide.titlePart1} <br />
                    <span className="text-red-600 drop-shadow-[0_2px_24px_rgba(220,38,38,0.6)]">
                      {activeSlide.titlePart2}
                    </span>
                  </h1>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mt-4 sm:mt-5 mb-7 sm:mb-9">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Button 1: EXPLORE PRODUCTS */}
              <button
                type="button"
                onClick={() => router.push("/products")}
                className="group pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 shadow-[0_4px_22px_rgba(220,38,38,0.5)] hover:shadow-[0_6px_28px_rgba(220,38,38,0.7)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{isArabic ? "استكشف المنتجات" : "EXPLORE PRODUCTS"}</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-red-600 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] ${isArabic ? "rotate-180" : ""
                      }`}
                  />
                </span>
              </button>

              {/* Button 2: GET A QUOTE */}
              <Link
                href="/get-a-quote"
                className="group pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-zinc-900 border border-white/20 font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{isArabic ? "طلب تسعيرة" : "GET A QUOTE"}</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Circular Automotive Video Play Button */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start lg:pl-6 pt-4 lg:pt-0">
            <div className="relative group">
              {/* Ambient Pulsing Red Halo */}
              {(!isPlayingVideo || isVideoPaused) && (
                <span className="absolute inset-0 rounded-full bg-red-600/30 animate-ping duration-1000 pointer-events-none" />
              )}

              {/* Play / Pause Toggle Button */}
              <button
                onClick={handleToggleVideo}
                aria-label={
                  isPlayingVideo
                    ? isVideoPaused
                      ? (isArabic ? "تشغيل الفيديو" : "Resume workshop video")
                      : (isArabic ? "إيقاف مؤقت" : "Pause workshop video")
                    : (isArabic ? "مشاهدة فيديو الورشة" : "Watch workshop video")
                }
                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-red-600 hover:bg-red-700 border-2 border-white/40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-[0_0_35px_rgba(220,38,38,0.55)] hover:shadow-[0_0_55px_rgba(220,38,38,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {isPlayingVideo && !isVideoPaused ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white fill-white" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white fill-white ml-0.5 sm:ml-1" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Glassmorphic Stats Section */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 mt-12 sm:mt-14 pb-8 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 lg:gap-4 max-w-4xl">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-red-600/40 hover:bg-white/[0.08] hover:-translate-y-1 group"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-baseline">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-300 font-semibold uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Booking Modal */}
      <BookMeetingModal
        isOpen={isBookMeetingOpen}
        onClose={() => setIsBookMeetingOpen(false)}
      />
    </section>
  );
}
