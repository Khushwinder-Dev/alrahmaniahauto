"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Eye } from "lucide-react";
import { allProductsData } from "@/data/productsData";

export default function FeaturedProductsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    "All",
    "Car Seat Covers",
    "Upholstery Leather & Fabrics",
    "Custom Colored Seatbelts",
    "Floor Carpets & Mats",
  ];

  const filteredProducts =
    activeTab === "All"
      ? allProductsData.slice(0, 8)
      : allProductsData
          .filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()))
          .slice(0, 8);

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Hello Al Rahmaniah Auto! I am interested in ordering/inquiring about: "${productName}". Please share pricing and fitment details.`
    );
    return `https://wa.me/971507860161?text=${text}`;
  };

  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Handpicked Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Featured <span className="text-red-600">Products &amp; Accessories</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              Engineered for extreme UAE weather durability, premium cabin comfort, and precision factory fitment.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white text-zinc-700 hover:text-red-600 hover:bg-zinc-100 border border-zinc-200 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-red-600/70 transition-all duration-500 flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white shadow-md">
                    OEM Grade
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs font-semibold">
                    In Stock
                  </span>
                </div>

                {/* Quick details link overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Link
                    href={`/products?search=${encodeURIComponent(prod.name)}`}
                    className="p-3 bg-white text-zinc-900 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <a
                    href={getWhatsAppLink(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-all transform hover:scale-110 shadow-lg"
                    title="WhatsApp Quick Order"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
                      {prod.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{prod.rating || 4.9}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-zinc-900 text-base group-hover:text-red-600 transition-colors line-clamp-1">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-zinc-500 font-medium">Starting from</span>
                    <span className="text-base font-extrabold text-red-600">
                      {prod.price || "Contact for Quote"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/get-a-quote?item=${encodeURIComponent(prod.name)}`}
                      className="w-full text-center py-2 px-3 bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-zinc-200 hover:border-red-600"
                    >
                      Get Quote
                    </Link>
                    <a
                      href={getWhatsAppLink(prod.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Product Catalog */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 hover:gap-4"
          >
            <span>Explore Complete Accessories Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
