"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  X,
  ChevronsLeft,
  ChevronsRight,
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  Package,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, PRODUCT_CATEGORIES, ProductDetailItem } from "@/data/productsData";
import FaqSection from "@/components/Common/FaqSection";

export const ENABLE_SERVICES_BANNER_SLIDER = false;

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isArabic } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Sync category or search from query params
  useEffect(() => {
    const cat = searchParams.get("category");
    const search = searchParams.get("search");
    if (cat && (PRODUCT_CATEGORIES as readonly string[]).includes(cat)) {
      setSelectedCategory(cat);
    }
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Reset to first page when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    let result = allProductsData.filter((product: ProductDetailItem) => {
      const matchCategory =
        selectedCategory === "All Categories" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
    } else if (sortBy === "reviews") {
      result = [...result].sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="w-full bg-zinc-50 text-zinc-900" dir={isArabic ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[360px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Hero"
            fill
            className="object-cover object-center"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>
              {isArabic ? "كتالوج منتجات وإكسسوارات الرحمانية" : "AL RAHMANIAH AUTO ACCESSORIES CATALOG"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>{isArabic ? "أرقى تشكيلة " : "Our "}</span>
            <span className="text-red-600">
              {isArabic ? "إكسسوارات ومنتجات السيارات" : "Products & Accessories"}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            {isArabic
              ? "تفصيل أغطية المقاعد الجلدية، دعاسات 7D الفاخرة، أحزمة أمان ملونة، نجوم سقف روز رايز، وإلكترونيات السيارات المصممة لأقسى درجات الحرارة."
              : "Bespoke custom leather seat covers, precision 7D floor mats, colored seatbelts, starlight headliners, and high-performance electronics engineered for extreme UAE durability."}
          </p>
        </div>
      </section>

      {/* 2. Main Catalog & Filter Container */}
      <section className="w-full py-12 lg:py-16 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Controls Bar */}
          <div className="bg-zinc-50 rounded-2xl p-4 sm:p-6 border border-zinc-200 mb-8 shadow-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Live Search Input */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isArabic
                      ? "ابحث عن منتج، كفرات مقاعد، دعاسات، شاشات..."
                      : "Search seat covers, 7D mats, Android screens..."
                  }
                  className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-10 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-xs font-semibold text-zinc-500 whitespace-nowrap">
                  {isArabic ? "ترتيب حسب:" : "Sort by:"}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="featured">{isArabic ? "المميز والأكثر طلباً" : "Featured & Popular"}</option>
                  <option value="rating">{isArabic ? "الأعلى تقييماً" : "Highest Rated"}</option>
                  <option value="reviews">{isArabic ? "الأكثر مراجعة" : "Most Reviews"}</option>
                </select>
              </div>
            </div>

            {/* Category Pills Slider */}
            <div className="mt-4 pt-4 border-t border-zinc-200/80 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "bg-white text-zinc-600 border border-zinc-200 hover:border-red-500 hover:text-red-600"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              {isArabic
                ? `عرض ${filteredProducts.length} منتج متاح`
                : `Showing ${filteredProducts.length} premium auto accessories`}
            </p>
            {(selectedCategory !== "All Categories" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
              >
                {isArabic ? "إعادة ضبط التصفية" : "Reset Filters"}
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-dashed border-zinc-300">
              <Package className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-zinc-800">
                {isArabic ? "لا توجد منتجات مطابقة للبحث" : "No matching products found"}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                {isArabic
                  ? "جرب البحث بكلمات أخرى أو تصفح كافة أقسام إكسسوارات السيارات."
                  : "Try clearing your filters or searching for another car accessory."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product: ProductDetailItem) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col group"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Stock badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                        {isArabic ? "متوفر بالمخزون" : "In Stock"}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        {product.price || (isArabic ? "طلب تسعيرة" : "Quote on Request")}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-zinc-800 text-[10px] font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1.5 mb-2 text-amber-500 text-xs">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating || 4.8)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-zinc-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-zinc-800">{product.rating || 4.8}</span>
                        <span className="text-zinc-400 text-[11px]">
                          ({product.reviewsCount || 42} {isArabic ? "تقييم" : "reviews"})
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="text-base font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>

                      {/* Specifications Preview */}
                      {product.specifications?.column1 && (
                        <div className="space-y-1.5 mb-5 pb-4 border-b border-zinc-100">
                          {product.specifications.column1.slice(0, 3).map((spec, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                              <span className="font-semibold text-zinc-700">{spec.label}:</span>
                              <span className="truncate">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2">
                      <Link
                        href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>{isArabic ? "طلب تسعيرة" : "Get a Quote"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/971558674927?text=${encodeURIComponent(
                          `Hello Al Rahmaniah Auto Accessories, I am interested in ${product.name}. Please send pricing and availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 transition-colors cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-zinc-200">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-red-600 text-white shadow-sm"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:border-red-500 hover:text-red-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Taj Al Rahmah Style 6 FAQs */}
      <FaqSection isArabic={isArabic} />
    </div>
  );
}

export default function ServicesListing({ enableSlider }: { enableSlider?: boolean } = {}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-zinc-50">
          <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
