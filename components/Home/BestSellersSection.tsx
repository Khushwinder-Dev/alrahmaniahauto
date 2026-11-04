"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Flame, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, ProductDetailItem } from "@/data/productsData";

export default function BestSellersSection() {
  const { isArabic } = useLanguage();

  const products = allProductsData.slice(0, 8);

  return (
    <section className="py-20 bg-white border-b border-zinc-200" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header without filter pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-red-600 rounded-full" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-red-600">
                {isArabic ? "الأكثر مبيعاً هذا الموسم" : "MOST POPULAR IN UAE"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-900 leading-tight">
              {isArabic ? "أفضل المنتجات " : "Best Selling "}
              <span className="text-red-600">{isArabic ? "طلباً ورواجاً" : "Auto Accessories"}</span>
            </h2>

            <p className="mt-2 text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl">
              {isArabic
                ? "تشكيلة من الإكسسوارات الأكثر طلباً من قبل مالكي السيارات في الشارقة ودبي مع ضمان كامل."
                : "Top-rated vehicle upgrades trusted by thousands of car owners across Sharjah, Dubai, and the UAE."}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
          >
            <span>{isArabic ? "تصفح جميع المنتجات" : "View Complete Catalog"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: ProductDetailItem, index: number) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between group hover:border-red-500 hover:shadow-xl transition-all duration-300 shadow-xs"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Link href={`/products?search=${encodeURIComponent(product.name)}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    <Flame className="w-3 h-3 fill-white" />
                    <span>{index < 2 ? "Top Seller" : "Trending"}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {product.price || "Custom Quote"}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-zinc-800 text-[10px] font-semibold shadow-xs">
                    {product.category}
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
                            i < Math.floor(product.rating || 4.9)
                              ? "fill-amber-400 text-amber-400"
                              : "text-zinc-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-zinc-800 text-xs">{product.rating || 4.9}</span>
                    <span className="text-zinc-400 text-[11px]">({product.reviewsCount || 85})</span>
                  </div>

                  {/* Title */}
                  <Link href={`/products?search=${encodeURIComponent(product.name)}`} className="block">
                    <h3 className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2 leading-snug">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{isArabic ? "طلب تسعيرة" : "Get a Quote"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/971558674927?text=${encodeURIComponent(
                      `Hello Al Rahmaniah, I want to order/inquire about: ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 transition-colors"
                    title="Order via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
          >
            <span>{isArabic ? "استكشف جميع المنتجات في الكتالوج" : "Explore All Products in Catalog"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
