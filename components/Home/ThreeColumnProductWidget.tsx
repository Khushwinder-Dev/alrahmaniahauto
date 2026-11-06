"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, ProductDetailItem } from "@/data/productsData";

export default function ThreeColumnProductWidget() {
  const { isArabic } = useLanguage();

  // Divide products into three collections
  const topRated = allProductsData.slice(0, 4);
  const bestSellers = allProductsData.slice(4, 8);
  const newArrivals = allProductsData.slice(2, 6);

  const columns = [
    {
      title: isArabic ? "الأعلى تقييماً" : "Top Rated Accessories",
      icon: <Award className="w-5 h-5 text-red-600" />,
      items: topRated,
    },
    {
      title: isArabic ? "الأكثر طلباً ومبيعاً" : "Best Selling Upgrades",
      icon: <TrendingUp className="w-5 h-5 text-red-600" />,
      items: bestSellers.length > 0 ? bestSellers : topRated,
    },
    {
      title: isArabic ? "أحدث التشكيلات الحصرية" : "New Arrivals & Trending",
      icon: <Sparkles className="w-5 h-5 text-red-600" />,
      items: newArrivals.length > 0 ? newArrivals : topRated,
    },
  ];

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">
              {isArabic ? "مجموعات المنتجات المختارة" : "CURATED ACCESSORIES"}
            </span>
            <span className="w-6 h-[2px] bg-red-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-900 leading-tight">
            {isArabic ? "تشكيلات حصرية حسب " : "Popular Collections By "}
            <span className="text-red-600">{isArabic ? "فئة الاختيار" : "Category"}</span>
          </h2>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-xs hover:border-red-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    {col.icon}
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 font-display">
                    {col.title}
                  </h3>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-bold text-red-600 hover:underline"
                >
                  {isArabic ? "الكل" : "View All"}
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-4 flex-1">
                {col.items.map((prod: ProductDetailItem) => {
                  const title = isArabic && prod.nameAr ? prod.nameAr : prod.name;
                  const categoryName = isArabic && prod.categoryAr ? prod.categoryAr : prod.category;
                  const priceTag = isArabic && prod.priceAr ? prod.priceAr : (prod.price || (isArabic ? "طلب تسعيرة" : "Contact for Quote"));

                  return (
                    <Link
                      key={prod.id}
                      href={`/products?search=${encodeURIComponent(prod.name)}`}
                      className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all duration-200 group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0 border border-zinc-100">
                        <Image
                          src={prod.image}
                          alt={title}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-300"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase text-red-600 tracking-wider block truncate">
                          {categoryName}
                        </span>

                        <h4 className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 mt-0.5 leading-snug">
                          {title}
                        </h4>

                        {/* Stars */}
                        <div className="flex items-center gap-1 text-amber-500 text-[11px] mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(prod.rating || 4.9)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-zinc-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-zinc-400 font-medium text-[10px]">
                            ({prod.reviewsCount || 42})
                          </span>
                        </div>

                        {/* Price */}
                        <span className="text-xs font-black text-zinc-900 block mt-1">
                          {priceTag}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Card Link */}
              <div className="pt-4 border-t border-zinc-100 mt-4">
                <Link
                  href="/get-a-quote"
                  className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{isArabic ? "طلب تسعيرة سريعة" : "Request Custom Quote"}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
