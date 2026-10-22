"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ChevronsLeft, ChevronsRight, ArrowRight, MessageCircle } from "lucide-react";
import { allProductsData, PRODUCT_CATEGORIES, ProductDetailItem } from "@/data/productsData";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
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

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    return allProductsData.filter((product) => {
      const matchSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* 1. Hero Section - Matching the Site's Signature Red/Black Automotive Theme */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Hero"
            fill
            className="object-cover object-center"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0a05]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center mt-12">
          {/* Eyebrow badge */}
          <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4">
            <span className="text-[8px]">▲</span>
            <span>AL RAHMANIAH AUTO ACCESSORIES</span>
            <span className="text-[8px]">▲</span>
          </div>

          {/* Heading with Red Highlight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[-0.03em] leading-tight mb-4">
            <span className="text-white">Our </span>
            <span className="text-[#dc2626]">Products & Accessories</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed opacity-90">
            Revive your car’s interior with premium seat covers, crafted for comfort, style, and durability. 💎 100% Original Materials.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Category Pills + Search Box */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-10 pb-6 border-b border-zinc-200">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500"
                        : "bg-white text-zinc-700 hover:text-red-600 hover:border-red-300 border border-zinc-200 shadow-2xs"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="w-full lg:w-80 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search accessories…"
                className="w-full h-11 pl-10 pr-10 rounded-full bg-white border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count & Reset Filter */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <p className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                Showing <span className="text-zinc-900 font-extrabold">{filteredProducts.length}</span> Products
              </p>
            </div>

            {(selectedCategory !== "All Categories" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-14 text-center border border-zinc-200 shadow-sm max-w-xl mx-auto my-8">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">No products found</h3>
              <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                We couldn&apos;t find any items matching your filter. Try searching for other terms or view all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-red-600/30"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-zinc-200/90 hover:border-red-600/50 p-5 flex flex-col group hover:shadow-2xl hover:shadow-red-950/10 transition-all duration-300"
                >
                  {/* Product Image Frame */}
                  <div className="relative w-full aspect-square bg-zinc-50 rounded-xl overflow-hidden mb-5 p-5 flex items-center justify-center border border-zinc-100 group-hover:border-red-100 transition-colors">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={350}
                        height={350}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Original Red Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md shadow-red-600/30">
                      💎 100% Original
                    </span>
                  </div>

                  {/* Category & Price */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 truncate max-w-[170px]">
                      {product.category}
                    </span>
                    {product.price && (
                      <span className="text-sm font-black text-red-600 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-200 shrink-0">
                        {product.price}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <Link href={`/products/${product.id}`} className="block group/title mb-2">
                    <h3 className="text-base sm:text-lg font-bold font-display text-zinc-900 tracking-tight leading-snug group-hover/title:text-red-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-5">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-xs font-bold text-zinc-800 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://api.whatsapp.com/send?phone=971558674927&text=${encodeURIComponent(
                        `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${product.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold transition-all shadow-md shadow-red-600/25 hover:shadow-red-600/40 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
                title="Previous Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-red-600"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
                title="Next Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
