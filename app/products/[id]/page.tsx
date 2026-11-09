"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Share2,
  MessageCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { getProductById, allProductsData, ProductDetailItem } from "@/data/productsData";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductDetailsPage() {
  const { isArabic } = useLanguage();
  const params = useParams();
  const rawId = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : "1";

  const product = useMemo(() => {
    return getProductById(rawId);
  }, [rawId]);

  // Active Image Preview
  const [activeImage, setActiveImage] = useState<string>(product.image);

  useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  // Related Products
  const relatedProducts = useMemo(() => {
    return allProductsData.filter((p) => p.id !== product.id).slice(0, 3);
  }, [product.id]);

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://alrahmaniahauto.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast.success(isArabic ? "تم نسخ رابط المنتج إلى الحافظة!" : "Product link copied to clipboard!");
    }
  };

  const title = isArabic && product.nameAr ? product.nameAr : product.name;
  const categoryName = isArabic && product.categoryAr ? product.categoryAr : product.category;
  const desc = isArabic && product.descriptionAr ? product.descriptionAr : product.description;
  const priceDisplay = isArabic && product.priceAr ? product.priceAr : (product.price || (isArabic ? "طلب تسعيرة" : "Contact for Quote"));

  const whatsappMessage = encodeURIComponent(
    isArabic
      ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أستفسر عن: ${title} (رمز المنتج #${product.id}). يرجى مشاركة الأسعار وخيارات المقاسات وطريقة التركيب.`
      : `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${product.name} (Item #${product.id}). Please share pricing, availability, and fitting details.`
  );

  return (
    <main className="bg-zinc-50 min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[380px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Product Details Hero"
            fill
            className="object-cover object-center"
            src="/images/products-banner.jpg"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0a05]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 text-center mt-10">
          <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4">
            <span className="text-[8px]">▲</span>
            <span>{isArabic ? "الرحمانية لزينة وتنجيد السيارات" : "AL RAHMANIAH AUTO ACCESSORIES"}</span>
            <span className="text-[8px]">▲</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-[-0.03em] leading-tight mb-3">
            <span className="text-white">{isArabic ? "تفاصيل " : "Product "}</span>
            <span className="text-[#dc2626]">{isArabic ? "المنتج والمواصفات" : "Details"}</span>
          </h1>

          <p className="max-w-xl mx-auto text-gray-300 text-xs sm:text-sm font-medium tracking-wide opacity-90">
            {categoryName} • {isArabic ? "خامات أصلية 100% عالية المتانة" : "100% Original High-Durability Materials"}
          </p>
        </div>
      </section>

      {/* 2. Main Product Details Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-red-600 transition-colors">
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/products" className="hover:text-red-600 transition-colors">
              {isArabic ? "المنتجات" : "Products"}
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">{categoryName}</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-900 font-bold truncate max-w-[220px] sm:max-w-none">
              {title}
            </span>
          </nav>

          {/* Product Hero 2-Column Container */}
          <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-10 shadow-sm mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Image Gallery */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="w-full aspect-[4/3] sm:aspect-square bg-zinc-50 rounded-2xl p-6 sm:p-10 flex items-center justify-center relative overflow-hidden group border border-zinc-100">
                  <Image
                    src={activeImage}
                    alt={title}
                    width={700}
                    height={700}
                    priority
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* 100% Original Badge */}
                  <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md shadow-red-600/30">
                    {isArabic ? "💎 خامات أصلية 100%" : "💎 100% Original Materials"}
                  </span>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-9 h-9 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-red-600 hover:border-red-300 shadow-sm transition-transform hover:scale-110 cursor-pointer"
                    title={isArabic ? "نسخ رابط المشاركة" : "Copy share link"}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails */}
                {product.additionalImages && product.additionalImages.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {product.additionalImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer bg-zinc-50 p-1.5 ${
                          activeImage === img
                            ? "border-red-600 shadow-md ring-2 ring-red-600/30"
                            : "border-zinc-200 hover:border-zinc-400 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${title} thumbnail ${idx + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Product Info & Actions */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="mb-3">
                  <span className="text-[10px] font-extrabold text-red-600 tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    {categoryName}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 tracking-tight leading-tight mb-3">
                  {title}
                </h2>

                {/* Price Display */}
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-red-600">
                    {priceDisplay}
                  </span>
                  <span className="text-xs font-semibold text-zinc-500">
                    {isArabic ? "(متوفر جملة ومفرق بالتفصيل)" : "(Wholesale & Retail Available)"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-medium">
                  {desc}
                </p>

                {/* Bullet Benefits */}
                {product.overviewContent && product.overviewContent.length > 0 && (
                  <div className="bg-[#fcf8f8] border border-red-100 rounded-2xl p-4 mb-6 space-y-2.5">
                    {product.overviewContent.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Call-To-Action Buttons */}
                <div className="space-y-3 mb-6">
                  {/* WhatsApp Order Button */}
                  <a
                    href={`https://api.whatsapp.com/send?phone=971558674927&text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isArabic ? "طلب واستفسار عبر واتساب" : "Inquire / Order on WhatsApp"}</span>
                  </a>

                  {/* Direct Call Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+971558674927"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-zinc-900 hover:bg-black text-white font-bold text-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      <span>+971 55 867 4927</span>
                    </a>
                    <a
                      href="tel:0557502083"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-zinc-300 hover:border-zinc-500 text-zinc-800 font-bold text-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      <span>055-7502083</span>
                    </a>
                  </div>
                </div>

                {/* Workshop Notice */}
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-zinc-900 block">
                      {isArabic ? "معرض الرحمانية لزينة السيارات" : "Al Rahmaniah Auto Accessories"}
                    </span>
                    <span>{isArabic ? "المنطقة الصناعية 4 و 5، الشارقة، الإمارات" : "Industrial Area 4, Sharjah, UAE"}</span>
                  </div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200 uppercase tracking-wider">
                    {isArabic ? "مفتوح يومياً" : "Open Daily"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-10 shadow-sm mb-14">
            <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
              <span className="text-[8px]">▲</span>
              <span>{isArabic ? "المواصفات الفنية" : "TECHNICAL DETAILS"}</span>
              <span className="text-[8px]">▲</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-zinc-900 mb-6 uppercase tracking-tight">
              {isArabic ? "مواصفات وخامة المنتج" : "Product Specifications"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 space-y-3">
                {product.specifications.column1.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm py-2.5 border-b border-zinc-200/70 last:border-0"
                  >
                    <span className="text-zinc-500 font-medium">{item.label}</span>
                    <span className="text-zinc-900 font-bold text-right rtl:text-left max-w-[60%]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 space-y-3">
                {product.specifications.column2.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm py-2.5 border-b border-zinc-200/70 last:border-0"
                  >
                    <span className="text-zinc-500 font-medium">{item.label}</span>
                    <span className="text-zinc-900 font-bold text-right rtl:text-left max-w-[60%]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                    <span className="text-[8px]">▲</span>
                    <span>{isArabic ? "إكسسوارات أخرى" : "MORE ACCESSORIES"}</span>
                    <span className="text-[8px]">▲</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 uppercase tracking-tight">
                    {isArabic ? "منتجات ذات صلة" : "Related Products"}
                  </h3>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>{isArabic ? "عرض الكل" : "View All"}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel: ProductDetailItem) => {
                  const relTitle = isArabic && rel.nameAr ? rel.nameAr : rel.name;
                  const relCategory = isArabic && rel.categoryAr ? rel.categoryAr : rel.category;
                  const relDesc = isArabic && rel.descriptionAr ? rel.descriptionAr : rel.description;
                  const relPrice = isArabic && rel.priceAr ? rel.priceAr : rel.price;

                  return (
                    <div
                      key={rel.id}
                      className="bg-white rounded-2xl border border-zinc-200/90 hover:border-red-600/50 p-5 flex flex-col group hover:shadow-xl transition-all"
                    >
                      <div className="w-full aspect-square bg-zinc-50 rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
                        <Link href={`/products/${rel.id}`} className="w-full h-full flex items-center justify-center">
                          <Image
                            src={rel.image}
                            alt={relTitle}
                            width={250}
                            height={250}
                            className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full uppercase">
                          {relCategory}
                        </span>
                        {relPrice && (
                          <span className="text-xs font-extrabold text-red-600 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-200">
                            {relPrice}
                          </span>
                        )}
                      </div>

                      <Link href={`/products/${rel.id}`} className="block font-bold text-base text-zinc-900 hover:text-red-600 transition-colors line-clamp-1 mb-1">
                        {relTitle}
                      </Link>

                      <p className="text-xs text-zinc-500 line-clamp-2 mb-4">
                        {relDesc}
                      </p>

                      <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <Link
                          href={`/products/${rel.id}`}
                          className="text-xs font-bold text-zinc-800 hover:text-red-600"
                        >
                          {isArabic ? "التفاصيل ←" : "Details →"}
                        </Link>

                        <a
                          href={`https://api.whatsapp.com/send?phone=971558674927&text=${encodeURIComponent(
                            isArabic
                              ? `مرحباً الرحمانية، أستفسر عن: ${relTitle}`
                              : `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${rel.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-3.5 py-1.5 rounded-full shadow-xs transition-all"
                        >
                          {isArabic ? "واتساب" : "WhatsApp"}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
