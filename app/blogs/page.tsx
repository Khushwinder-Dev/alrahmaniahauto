"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  BookOpen,
  Wrench,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Categories",
    "Seat Covers",
    "Floor Mats",
    "Lighting",
    "Interior Styling",
    "Electronics",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === "All Categories" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <main className="bg-zinc-50 text-zinc-900 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Auto Accessories Specialists"
            fill
            className="object-cover object-center"
            src="/images/services-hero.png"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>AL RAHMANIAH AUTOMOTIVE JOURNAL &amp; GUIDES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 text-white">
            <span>Expert </span>
            <span className="text-red-600">Car Care Insights</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            Essential guides on custom seat covers, 7D floor mats, LED headlight retrofits, and car styling from our master craftsmen in Sharjah.
          </p>
        </div>
      </section>

      {/* 2. Featured Article Spotlight (Wolmart style) */}
      {featuredPost && (
        <section className="w-full py-12 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-md hover:border-red-500 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full w-full overflow-hidden bg-zinc-100">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                    Featured Guide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-4">
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="text-red-600 font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-900 leading-tight">
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="hover:text-red-600 transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>
      )}

      {/* 3. Main Articles List & Filter Bar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        {/* Controls: Category Pills & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-zinc-200">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white text-zinc-700 hover:text-red-600 border border-zinc-200 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-80 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search car advice & guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-full bg-white border border-zinc-200 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-600 outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl shadow-xs"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-red-600 border border-red-100 shadow-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-zinc-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blogs/${post.slug}`} className="block group/title mb-3">
                    <h3 className="font-bold text-lg text-zinc-900 group-hover/title:text-red-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-zinc-500 line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-zinc-400">
                    By Al Rahmaniah Tech
                  </span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 group-hover:gap-2 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt Strip */}
        <div className="mt-20 rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto mb-4">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 mb-2">
            Looking for Custom Accessories or Interior Styling?
          </h3>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Get an instant custom accessories recommendation and transparent quote from our auto styling specialists in Sharjah.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30"
            >
              Get a Fast Quote
            </Link>
            <a
              href="https://wa.me/971507860161"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all inline-flex items-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
