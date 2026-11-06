"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  ChevronsLeft,
  ChevronsRight,
  MessageCircle,
  Star,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Wrench,
  SlidersHorizontal,
} from "lucide-react";
import { allProductsData, PRODUCT_CATEGORIES, PRODUCT_CATEGORIES_AR, ProductDetailItem } from "@/data/productsData";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { isArabic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Sync search param from URL if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("search");
      if (s) {
        setSearchQuery(s);
      }
    }
  }, []);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    let result = allProductsData.filter((product) => {
      const matchCategory =
        selectedCategory === "All Categories" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        (product.nameAr && product.nameAr.toLowerCase().includes(q)) ||
        product.description.toLowerCase().includes(q) ||
        (product.descriptionAr && product.descriptionAr.toLowerCase().includes(q)) ||
        product.category.toLowerCase().includes(q) ||
        (product.categoryAr && product.categoryAr.toLowerCase().includes(q));

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
    <main className="bg-zinc-50 text-zinc-900 min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
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

        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 text-center mt-12">
          {/* Eyebrow badge */}
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>{isArabic ? "كتالوج منتجات وإكسسوارات الرحمانية" : "AL RAHMANIAH AUTO ACCESSORIES CATALOG"}</span>
          </div>

          {/* Heading with Red Highlight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>{isArabic ? "منتجاتنا " : "Our "}</span>
            <span className="text-red-600">{isArabic ? "وإكسسوارات السيارات" : "Products & Accessories"}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            {isArabic
              ? "جدد مقصورة سيارتك بأرقى أغطية المقاعد الجلدية، والأحزمة الملونة، ودعاسات 7D المصممة لمقاومة حرارة صيف الإمارات."
              : "Revive your car’s interior with premium custom seat covers, colored belts, and 7D floor carpets engineered for UAE summer heat resistance."}
          </p>
        </div>
      </section>

      {/* 2. Value Proposition Bar */}
      <section className="w-full py-10 bg-white border-b border-zinc-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="bg-zinc-50/80 text-zinc-900 rounded-2xl p-6 border border-zinc-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-zinc-200">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {isArabic ? "أصلية 100%" : "100% Original"}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {isArabic ? "خامات متينة معتمدة للسيارات" : "Certified heavy-duty automotive materials"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {isArabic ? "مقاومة للشمس والحرارة" : "Heat & UV Proof"}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {isArabic ? "تتحمل حرارة تتجاوز 50 درجة مئوية" : "Resists cracking up to 50°C UAE heat"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {isArabic ? "تفصيل ومقاسات ليزر" : "Tailored Precision"}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {isArabic ? "قوالب مخصصة للصالون والدفع الرباعي" : "Exact pattern fits for sedans, SUVs & trucks"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {isArabic ? "معرض وورشة بالشارقة" : "Sharjah Workshop"}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {isArabic ? "تركيب وتلبيس احترافي بالصناعية 5" : "Expert on-site installation in Ind. Area 5"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Catalog Section */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          
          {/* Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => {
              const label = isArabic ? (PRODUCT_CATEGORIES_AR[cat] || cat) : cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-white text-zinc-700 hover:text-red-600 hover:bg-zinc-100 border border-zinc-200 shadow-xs"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Controls Bar: Product Count + Search + Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200">
            <div className="flex items-center gap-2.5 self-start md:self-auto">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <p className="text-xs sm:text-sm font-bold text-zinc-800 uppercase tracking-wider">
                {isArabic ? "عرض " : "Showing "}
                <span className="text-red-600 font-extrabold">{filteredProducts.length}</span>{" "}
                {isArabic ? "منتج وإكسسوار" : "Products"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-xs font-bold text-zinc-700 focus:outline-none focus:border-red-600 w-full sm:w-auto shadow-xs"
                >
                  <option value="featured">{isArabic ? "الترتيب: المميزة" : "Sort: Featured"}</option>
                  <option value="rating">{isArabic ? "الترتيب: الأعلى تقييماً" : "Sort: Highest Rating"}</option>
                  <option value="reviews">{isArabic ? "الترتيب: الأكثر مراجعة" : "Sort: Most Reviews"}</option>
                </select>
              </div>

              {/* Search Box */}
              <div className="w-full sm:w-80 relative">
                <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={isArabic ? "ابحث عن إكسسوار أو خامة..." : "Search products & accessories…"}
                  className="w-full h-11 pl-10 pr-10 rtl:pr-10 rtl:pl-10 rounded-full bg-white border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    className="absolute right-3.5 rtl:right-auto rtl:left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {searchQuery && (
            <div className="flex items-center justify-between mb-6 -mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
              <p className="text-xs text-zinc-700">
                {isArabic ? "نتائج البحث عن: " : "Search results for: "}
                <span className="font-bold text-red-600">&quot;{searchQuery}&quot;</span>
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
              >
                {isArabic ? "مسح البحث" : "Clear search"}
              </button>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-14 text-center border border-zinc-200 max-w-xl mx-auto my-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                {isArabic ? "لم يتم العثور على منتجات" : "No products found"}
              </h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                {isArabic
                  ? "لم نتمكن من إيجاد عناصر مطابقة لبحثك. يرجى تجربة كلمات بحث أخرى أو تصفح جميع الفئات."
                  : "We couldn't find any items matching your search. Try resetting filters or browsing all categories."}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setCurrentPage(1);
                }}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-red-600/30 cursor-pointer"
              >
                {isArabic ? "عرض جميع المنتجات" : "View All Products"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedProducts.map((product: ProductDetailItem) => {
                const title = isArabic && product.nameAr ? product.nameAr : product.name;
                const categoryName = isArabic && product.categoryAr ? product.categoryAr : product.category;
                const desc = isArabic && product.descriptionAr ? product.descriptionAr : product.description;
                const priceTag = isArabic && product.priceAr ? product.priceAr : (product.price || (isArabic ? "طلب تسعيرة" : "Contact for Quote"));

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-3xl border border-zinc-200 hover:border-red-600/70 p-5 flex flex-col group hover:shadow-xl shadow-xs transition-all duration-300"
                  >
                    {/* Product Image Frame */}
                    <div className="relative w-full aspect-square bg-zinc-50 rounded-2xl overflow-hidden mb-5 flex items-center justify-center border border-zinc-100 group-hover:border-red-100 transition-colors">
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full h-full relative cursor-pointer"
                      >
                        <Image
                          src={product.image}
                          alt={title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                        />
                      </Link>

                      {/* Original Red Badge */}
                      <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                        {isArabic ? "💎 أصلي 100%" : "💎 100% Original"}
                      </span>
                    </div>

                    {/* Category & Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 truncate max-w-[170px]">
                        {categoryName}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{product.rating || 4.9}</span>
                        <span className="text-zinc-400 text-[10px]">({product.reviewsCount || 120})</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <Link href={`/products/${product.id}`} className="block group/title mb-2">
                      <h3 className="text-base sm:text-lg font-bold font-display text-zinc-900 tracking-tight leading-snug group-hover/title:text-red-600 transition-colors line-clamp-1">
                        {title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-5">
                      {desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-zinc-400">
                          {isArabic ? "السعر" : "Price"}
                        </span>
                        <span className="text-sm font-extrabold text-zinc-900">
                          {priceTag}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/get-a-quote?item=${encodeURIComponent(product.name)}`}
                          className="px-3.5 py-2 bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-zinc-200 hover:border-red-600"
                        >
                          {isArabic ? "تسعيرة" : "Quote"}
                        </Link>
                        <a
                          href={`https://wa.me/971507860161?text=${encodeURIComponent(
                            isArabic
                              ? `مرحباً الرحمانية لزينة وتنجيد السيارات! أستفسر عن: ${title}`
                              : `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${product.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{isArabic ? "طلب" : "Order"}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                title={isArabic ? "الصفحة السابقة" : "Previous Page"}
              >
                <ChevronsLeft className="w-4 h-4 rtl:rotate-180" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-500"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-red-600 shadow-xs"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                title={isArabic ? "الصفحة التالية" : "Next Page"}
              >
                <ChevronsRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
