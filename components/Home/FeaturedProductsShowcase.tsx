"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Eye } from "lucide-react";
import { allProductsData, ProductDetailItem, PRODUCT_CATEGORIES_AR } from "@/data/productsData";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedProductsShowcase() {
  const { isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    { en: "All", ar: "الكل" },
    { en: "Car Seat Covers", ar: "تلبيس مقاعد السيارات" },
    { en: "Upholstery Leather & Fabrics", ar: "جلود وأقمشة التنجيد" },
    { en: "Custom Colored Seatbelts", ar: "أحزمة أمان ملونة" },
    { en: "Floor Carpets & Mats", ar: "سجاد ودعاسات 7D" },
  ];

  const filteredProducts =
    activeTab === "All"
      ? allProductsData.slice(0, 8)
      : allProductsData
          .filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()))
          .slice(0, 8);

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      isArabic
        ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أود الاستفسار وطلب: "${productName}". يرجى تزويدي بالسعر وتفاصيل التفصيل والمقاسات.`
        : `Hello Al Rahmaniah Auto! I am interested in ordering/inquiring about: "${productName}". Please share pricing and fitment details.`
    );
    return `https://wa.me/971507860161?text=${text}`;
  };

  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 relative" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>{isArabic ? "تشكيلة مختارة بعناية" : "Handpicked Selection"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              {isArabic ? "منتجات " : "Featured "}
              <span className="text-red-600">{isArabic ? "وإكسسوارات مميزة" : "Products & Accessories"}</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              {isArabic
                ? "مصممة لتحمل طقس وحرارة الإمارات، وتوفير أقصى درجات الراحة داخل المقصورة مع دقة مقاسات الوكالة."
                : "Engineered for extreme UAE weather durability, premium cabin comfort, and precision factory fitment."}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setActiveTab(cat.en)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === cat.en
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white text-zinc-700 hover:text-red-600 hover:bg-zinc-100 border border-zinc-200 shadow-xs"
                }`}
              >
                {isArabic ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Refined Compact Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((prod: ProductDetailItem) => {
            const title = isArabic && prod.nameAr ? prod.nameAr : prod.name;
            const categoryName = isArabic && prod.categoryAr ? prod.categoryAr : prod.category;
            const desc = isArabic && prod.descriptionAr ? prod.descriptionAr : prod.description;
            const priceTag = isArabic && prod.priceAr ? prod.priceAr : (prod.price || (isArabic ? "طلب تسعيرة" : "From AED 450"));

            return (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between hover:shadow-lg shadow-xs"
              >
                {/* Product Image - Compact 4:3 Proportion */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={prod.image}
                    alt={title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-zinc-800 text-[10px] font-bold shadow-xs">
                      {categoryName}
                    </span>
                  </div>

                  {/* Quick details link overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5">
                    <Link
                      href={`/products?search=${encodeURIComponent(prod.name)}`}
                      className="p-2.5 bg-white text-zinc-900 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-md"
                      title={isArabic ? "عرض التفاصيل" : "View Details"}
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <a
                      href={getWhatsAppLink(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-all transform hover:scale-110 shadow-md"
                      title={isArabic ? "طلب عبر واتساب" : "WhatsApp Quick Order"}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Product Content - Compact Layout */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars + Rating */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{prod.rating || 4.9}</span>
                        <span className="text-zinc-400 font-normal text-[10px]">({prod.reviewsCount || 95})</span>
                      </div>
                      <span className="text-xs font-black text-zinc-900">
                        {priceTag}
                      </span>
                    </div>

                    <h3 className="font-bold text-zinc-900 text-sm group-hover:text-red-600 transition-colors line-clamp-1 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/get-a-quote?item=${encodeURIComponent(prod.name)}`}
                        className="w-full text-center py-2 px-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors border border-zinc-900 shadow-xs"
                      >
                        {isArabic ? "طلب تسعيرة" : "Get Quote"}
                      </Link>
                      <a
                        href={getWhatsAppLink(title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{isArabic ? "اطلب الآن" : "Order"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Product Catalog */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 hover:gap-4"
          >
            <span>{isArabic ? "تصفح الكتالوج الكامل لجميع الإكسسوارات" : "Explore Complete Accessories Catalog"}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
