"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  { category: "PAINT PROTECTION", title: "Paint Protection Film", image: "/images/service-2.png" },
  { category: "AC SERVICE", title: "Full AC Service", image: "/images/service-3.png" },
  { category: "FULL SERVICE", title: "Complete Car Service", image: "/images/service-4.png" },
  { category: "ENGINE REPAIR", title: "Major Overhaul", image: "/images/service-2.png" },
  { category: "DETAILING", title: "Interior Deep Clean", image: "/images/service-3.png" },
  { category: "BRAKE SERVICE", title: "Performance Brakes", image: "/images/service-4.png" },
  { category: "ELECTRICAL", title: "Computer Diagnostics", image: "/images/service-2.png" },
  { category: "SUSPENSION", title: "Shock Absorbers", image: "/images/service-3.png" },
];

export default function RecentWorkSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <div className="relative z-30 bg-white flex flex-col items-start lg:pr-10 lg:sticky lg:top-32">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
              WORKSHOP PORTFOLIO
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-[900] text-zinc-900 leading-none uppercase tracking-tight mb-6">
              Our Recent Work
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
              We take pride in offering you the best services available and 100% Satisfaction Guarantee.
            </p>
            <button
              className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold text-xs px-8 py-4 uppercase tracking-widest rounded-full mb-12 shadow-md shadow-red-600/30 cursor-pointer"
              onClick={() => router.push("/gallery")}
            >
              All Our Work
            </button>
            <div className="flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideTo(idx);
                      setActiveIndex(idx);
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "w-8 bg-red-600" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full !overflow-visible"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-100 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white shadow-xs inline-block mb-2">
                        {slide.category}
                      </span>
                      <h4 className="font-display font-bold text-xl text-white">
                        {slide.title}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
