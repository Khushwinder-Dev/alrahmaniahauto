"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Car, Layers, ArrowRight, CheckCircle2, Star, Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { allProductsData, ProductDetailItem } from "@/data/productsData";

const VEHICLE_MAKES = [
  "All Makes",
  "Toyota",
  "Nissan",
  "Lexus",
  "Mercedes-Benz",
  "BMW",
  "Land Rover",
  "Ford",
  "Chevrolet",
  "Jeep",
  "Audi",
];

const ACCESSORY_TYPES = [
  "All Categories",
  "Car Seat Covers",
  "Floor Carpets & Mats",
  "Custom Colored Seatbelts",
  "Roof Headliners",
  "Upholstery Leather & Fabrics",
];

export default function VehicleAccessoriesFinder() {
  const { isArabic } = useLanguage();
  const [selectedMake, setSelectedMake] = useState<string>("All Makes");
  const [selectedType, setSelectedType] = useState<string>("All Categories");

  const filteredProducts = useMemo(() => {
    return allProductsData
      .filter((p: ProductDetailItem) => {
        const matchType =
          selectedType === "All Categories" ||
          p.category.toLowerCase().includes(selectedType.toLowerCase());

        const matchMake =
          selectedMake === "All Makes" ||
          (p.description && p.description.toLowerCase().includes(selectedMake.toLowerCase())) ||
          (p.name && p.name.toLowerCase().includes(selectedMake.toLowerCase())) ||
          true; // all products are custom-made for all makes

        return matchType && matchMake;
      })
      .slice(0, 4);
  }, [selectedMake, selectedType]);

  return (
    <section className="py-16 sm:py-20 bg-zinc-900 text-white relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>{isArabic ? "أداة تحديد الموديل" : "VEHICLE FITMENT SELECTOR"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight">
            {isArabic ? "ابحث عن إكسسوارات " : "Find Custom-Fit Accessories For "}
            <span className="text-red-600">{isArabic ? "سيارتك بدقة" : "Your Vehicle"}</span>
          </h2>

          <p className="mt-3 text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            {isArabic
              ? "حدد نوع سيارتك وفئة الإكسسوار للاطلاع على المنتجات المخصصة والمطابقة لموديلك 100%."
              : "Select your vehicle brand and accessory type to instantly discover laser-tailored seat covers, 7D mats, and styling products."}
          </p>
        </div>

        {/* Filter Bar Box */}
        <div className="bg-zinc-800/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-zinc-700/80 shadow-2xl max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Make Selector */}
            <div className="sm:col-span-5">
              <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {isArabic ? "اختر نوع السيارة (الشركة المصنعة)" : "1. Select Vehicle Make"}
              </label>
              <div className="relative">
                <Car className="w-4 h-4 text-red-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                >
                  {VEHICLE_MAKES.map((make) => (
                    <option key={make} value={make} className="bg-zinc-900 text-white">
                      {make}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Accessory Type Selector */}
            <div className="sm:col-span-5">
              <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {isArabic ? "اختر فئة الإكسسوار" : "2. Select Product Category"}
              </label>
              <div className="relative">
                <Layers className="w-4 h-4 text-red-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                >
                  {ACCESSORY_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-zinc-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <div className="sm:col-span-2 pt-1 sm:pt-6">
              <Link
                href={`/products?category=${encodeURIComponent(
                  selectedType === "All Categories" ? "" : selectedType
                )}`}
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-1.5"
              >
                <span>{isArabic ? "تصفح" : "View"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Filtered Products Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product: ProductDetailItem) => (
            <div
              key={product.id}
              className="bg-zinc-800/80 rounded-2xl border border-zinc-700/60 overflow-hidden flex flex-col justify-between group hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {selectedMake === "All Makes" ? "Custom Fit" : `${selectedMake} Fit`}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-white text-xs">{product.rating || 4.9}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-700/60 flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-white">
                    {product.price || "Quote on Request"}
                  </span>
                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
                  >
                    {isArabic ? "طلب تسعيرة" : "Quote"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            <span>{isArabic ? "عرض جميع الموديلات والمنتجات في الكتالوج" : "Browse All Vehicle Models in Full Catalog"}</span>
            <ArrowRight className="w-4 h-4 text-red-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
