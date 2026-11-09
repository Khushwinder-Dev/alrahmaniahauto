"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, ProductDetailItem } from "@/data/productsData";

export default function ThreeColumnProductWidget() {
  const { isArabic } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Present best-selling accessories in a single-row carousel
  const bestSellerProducts = allProductsData;

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
      const card = container.querySelector<HTMLElement>(".best-seller-carousel-card");
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

  const getWhatsAppLink = (productTitle: string) => {
    const text = isArabic
      ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أود الاستفسار وطلب الأكثر مبيعاً: ${productTitle}.`
      : `Hello Al Rahmaniah, I would like to order or check availability for the best seller: ${productTitle}.`;
    return `https://wa.me/971558674927?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 lg:py-24 bg-zinc-50 border-b border-zinc-200 overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-red-600 rounded-full" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">
                {isArabic ? "الأكثر مبيعاً ورواجاً" : "BEST SELLING ACCESSORIES"}
              </span>
              <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-900 leading-tight">
              {isArabic ? "أفضل المنتجات " : "Best Selling "}
              <span className="text-red-600">{isArabic ? "وزينة السيارات مبيعاً" : "Auto Accessories"}</span>
            </h2>

            <p className="mt-2 text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl">
              {isArabic
                ? "تصفح التشكيلات الأكثر طلباً من أطقم المقاعد الفاخرة، ودعاسات 7D، وخامات التنجيد الأكثر تفضيلاً في الإمارات."
                : "Explore our customer-favorite bespoke leather seat covers, 7D molded floor liners, and premium automotive upholstery upgrades."}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm flex-shrink-0"
          >
            <span>{isArabic ? "عرض الكل" : "VIEW ALL"}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* Best Sellers Single-Row Carousel */}
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

          {/* Horizontal Scroll Track (Single row) */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 sm:gap-6 pb-6 pt-2 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {bestSellerProducts.map((prod: ProductDetailItem) => {
              const title = isArabic && prod.nameAr ? prod.nameAr : prod.name;
              const categoryName = isArabic && prod.categoryAr ? prod.categoryAr : prod.category;
              const desc = isArabic && prod.descriptionAr ? prod.descriptionAr : prod.description;

              return (
                <div
                  key={prod.id}
                  className="best-seller-carousel-card flex-shrink-0 w-[285px] sm:w-[310px] md:w-[325px] lg:w-[320px] xl:w-[335px] snap-start flex flex-col"
                >
                  <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between group hover:border-red-500 hover:shadow-xl transition-all duration-300 shadow-xs h-full">
                    {/* Image Frame */}
                    <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                      <Link href={`/products?search=${encodeURIComponent(prod.name)}`}>
                        <Image
                          src={prod.image}
                          alt={title}
                          fill
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                        />
                      </Link>

                      <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-zinc-800 text-[10px] font-semibold shadow-xs">
                          {categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-2 text-amber-500 text-xs">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < Math.floor(prod.rating || 4.9)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-zinc-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-bold text-zinc-800 text-xs">{prod.rating || 4.9}</span>
                          <span className="text-zinc-400 text-[11px]">({prod.reviewsCount || 75})</span>
                        </div>

                        {/* Title */}
                        <Link href={`/products?search=${encodeURIComponent(prod.name)}`} className="block">
                          <h3 className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2 leading-snug">
                            {title}
                          </h3>
                        </Link>

                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">
                          {desc}
                        </p>
                      </div>

                      {/* Action Buttons: Black Get Quote + Red Order Now */}
                      <div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-2">
                        <Link
                          href={`/get-a-quote?item=${encodeURIComponent(prod.name)}`}
                          className="w-full text-center py-2.5 px-2 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-colors border border-zinc-900 shadow-xs flex items-center justify-center"
                        >
                          {isArabic ? "طلب تسعيرة" : "Get Quote"}
                        </Link>

                        <a
                          href={getWhatsAppLink(title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                          title={isArabic ? "طلب عبر واتساب" : "Order via WhatsApp"}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{isArabic ? "اطلب الآن" : "Order Now"}</span>
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
