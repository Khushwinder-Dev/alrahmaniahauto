"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Sparkles, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, ProductDetailItem } from "@/data/productsData";

export default function NewArrivalsSection() {
  const { isArabic } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Present all fresh arrival products in the single-row slider
  const newProducts = allProductsData;

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(Math.abs(scrollLeft) > 10);
      setCanScrollRight(Math.abs(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      updateScrollButtons();
      return () => {
        el.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLElement>(".new-arrival-card");
      const cardWidth = card ? card.offsetWidth : 320;
      const scrollStep = cardWidth + 24; // width + gap
      const factor = direction === "left" ? -1 : 1;
      const delta = isArabic ? -factor * scrollStep : factor * scrollStep;

      container.scrollBy({
        left: delta,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-zinc-200 overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-red-600 rounded-full" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">
                {isArabic ? "أحدث التشكيلات الحصرية" : "NEW PRODUCT ARRIVALS"}
              </span>
              <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-900 leading-tight">
              {isArabic ? "أحدث إكسسوارات " : "Freshly Arrived "}
              <span className="text-red-600">{isArabic ? "ومنتجات السيارات بالمخزون" : "Auto Accessories"}</span>
            </h2>

            <p className="mt-2 text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl">
              {isArabic
                ? "تصفح أحدث أطقم المقاعد الجلدية، ودعاسات 7D، ولفائف الجلود والإلكترونيات المتوفرة للطلب المباشر في الشارقة."
                : "Explore our latest bespoke leather covers, all-weather 7D liners, upholstery rolls, and smart electronics ready for immediate dispatch and fitting."}
            </p>
          </div>

          {/* VIEW ALL button navigating to /products */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm flex-shrink-0"
          >
            <span>{isArabic ? "عرض الكل" : "VIEW ALL"}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* Single Row Slider with Taj Al Rahmah Style Navigation Arrows */}
        <div className="relative group/carousel">
          {/* Navigation Arrow: Previous (Left) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={isArabic ? "السابق" : "Previous"}
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-[48%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-zinc-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none hover:scale-110 active:scale-95"
          >
            {isArabic ? (
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>

          {/* Navigation Arrow: Next (Right) */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={isArabic ? "التالي" : "Next"}
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-[48%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-zinc-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none hover:scale-110 active:scale-95"
          >
            {isArabic ? (
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>

          {/* Carousel Scroll Container (Single row horizontal slider) */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 sm:gap-6 pb-6 pt-2 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newProducts.map((product: ProductDetailItem) => {
              const title = isArabic && product.nameAr ? product.nameAr : product.name;
              const categoryName = isArabic && product.categoryAr ? product.categoryAr : product.category;
              const desc = isArabic && product.descriptionAr ? product.descriptionAr : product.description;
              const priceTag = isArabic && product.priceAr ? product.priceAr : (product.price || (isArabic ? "طلب تسعيرة" : "Quote on Request"));

              return (
                <div
                  key={product.id}
                  className="new-arrival-card flex-shrink-0 w-[240px] sm:w-[260px] md:w-[275px] lg:w-[285px] snap-start flex flex-col"
                >
                  <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between group hover:border-red-500 hover:shadow-lg transition-all duration-300 shadow-xs h-full">
                    {/* Image Frame - Compact 4:3 Proportion */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                      <Link href={`/products?search=${encodeURIComponent(product.name)}`}>
                        <Image
                          src={product.image}
                          alt={title}
                          fill
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                        />
                      </Link>

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600 text-white text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-2.5 h-2.5 fill-white" />
                          <span>{isArabic ? "جديد" : "New Arrival"}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900/85 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
                          {priceTag}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-zinc-800 text-[10px] font-semibold shadow-xs">
                          {categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Card Body - Compact */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-1.5 text-amber-500 text-xs">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating || 4.9)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-zinc-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-bold text-zinc-800 text-xs">{product.rating || 4.9}</span>
                          <span className="text-zinc-400 text-[10px]">({product.reviewsCount || 65})</span>
                        </div>

                        {/* Title */}
                        <Link href={`/products?search=${encodeURIComponent(product.name)}`} className="block">
                          <h3 className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-1.5 leading-snug">
                            {title}
                          </h3>
                        </Link>

                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-3">
                          {desc}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                        <Link
                          href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                          className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <span>{isArabic ? "طلب تسعيرة" : "Get a Quote"}</span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                        </Link>

                        <a
                          href={`https://wa.me/971558674927?text=${encodeURIComponent(
                            isArabic
                              ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أود الاستفسار وطلب: ${title}.`
                              : `Hello Al Rahmaniah, I would like to order or check availability for: ${product.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 transition-colors shadow-xs"
                          title={isArabic ? "طلب عبر واتساب" : "Order via WhatsApp"}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
