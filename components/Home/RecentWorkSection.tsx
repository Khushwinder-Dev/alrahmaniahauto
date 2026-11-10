"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  { category: "CUSTOM SEAT COVERS", title: "3D Diamond Napa Leather", image: "/images/service-6.png" },
  { category: "7D FLOOR MATS", title: "Custom Molded All-Weather Protection", image: "/images/service-10.png" },
  { category: "COLORED SEATBELTS", title: "Racing Red & Yellow Belts", image: "/images/service-8.png" },
  { category: "STARLIGHT ROOF", title: "VIP Celestial Starlight Headliner", image: "/images/service-7.png" },
  { category: "CAR ELECTRONICS", title: "Android 4K Touchscreen & DSP Audio", image: "/images/service-2.png" },
  { category: "LASER LED LIGHTS", title: "High-Lumen Laser Headlamp Conversion", image: "/images/service-9.png" },
  { category: "LEATHER UPHOLSTERY", title: "Full Cabin Leather Restyling", image: "/images/service-1.png" },
  { category: "CAR STYLING", title: "Aero Styling Kits & Sunshades", image: "/images/service-3.png" },
];

export default function RecentWorkSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <div className="relative z-30 bg-white flex flex-col items-start lg:pr-10 lg:sticky lg:top-32">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
              PRODUCT SHOWCASE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-[900] text-zinc-900 leading-none uppercase tracking-tight mb-6">
              Our Recent Work
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
              We take pride in offering you the best automotive accessories and styling products with 100% Satisfaction Guarantee.
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
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1440: { slidesPerView: 6 },
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
