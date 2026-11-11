"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getBlogPosts } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext";
import { FloatInput, useVoiceInput } from "@/components/ui/FloatField";

export default function BlogsPage() {
  const { t, isArabic } = useLanguage();
  const allPosts = getBlogPosts(isArabic);
  const router = useRouter();

  const allCatLabel = isArabic ? "جميع الأقسام" : "All Categories";
  const [selectedCategory, setSelectedCategory] = useState<string>(allCatLabel);
  const [searchQuery, setSearchQuery] = useState("");

  const voice = useVoiceInput({
    isArabic,
    onResult: (_fieldName: string, text: string) => {
      setSearchQuery(text);
    },
  });

  const categories = isArabic
    ? [
        "جميع الأقسام",
        "تنجيد المقاعد",
        "دواسات أرضية",
        "سقف النجوم",
        "أحزمة الأمان",
        "خامات وتنجيد",
        "إلكترونيات السيارات",
      ]
    : [
        "All Categories",
        "Seat Covers",
        "Floor Mats",
        "Starlight Roof",
        "Seatbelts",
        "Upholstery",
        "Car Electronics",
      ];

  const filteredPosts = allPosts.filter((post) => {
    const isAll =
      selectedCategory === "All Categories" ||
      selectedCategory === "جميع الأقسام" ||
      selectedCategory === allCatLabel;
    const matchesCat =
      isAll || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[600px] min-h-[520px] overflow-hidden flex flex-col bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Auto Accessories and Styling Guides"
              fill
              unoptimized
              className="object-cover"
              src="/images/about-us-banner.jpg"
              priority
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          </div>
          <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-center w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 pt-20 sm:pt-24 lg:pt-28 pb-12">
            <div data-aos="zoom-out" data-aos-delay="200" className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-display font-bold tracking-tight leading-tight flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[850px]">
                <span className="text-white">{t.blogs.heroTitle}</span>
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-2xl text-gray-300 text-xs sm:text-sm md:text-base font-normal tracking-wide opacity-90 leading-relaxed"
            >
              {t.blogs.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="min-h-screen bg-white">
          <div className="w-full py-12 lg:py-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 tracking-tight">
                  {t.blogs.sectionTitle}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {t.blogs.sectionDesc}
                </p>
              </div>

              {/* Sidebar + Articles Grid */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Search & Categories Sidebar */}
                <aside className="w-full lg:w-96 flex flex-col gap-6">
                  {/* Search box with FloatInput & Voice Input */}
                  <div
                    className="bg-gray-50 border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-xs"
                    data-aos="fade-right"
                  >
                    <FloatInput
                      type="text"
                      name="search"
                      value={searchQuery}
                      label={t.blogs.searchPlaceholder}
                      isArabic={isArabic}
                      icon={<Search className="w-4 h-4" />}
                      isListening={voice.listeningField === "search"}
                      onVoiceToggle={() => voice.toggleListening("search", "text")}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Categories Pills */}
                  <div
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-7"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <h3 className="text-gray-900 text-xl font-bold mb-4">
                      {t.blogs.categoriesTitle}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {categories.map((cat, idx) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          data-aos="fade-up"
                          data-aos-delay={idx * 40}
                          className={`w-full px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm sm:text-base ${
                            isArabic ? "text-right" : "text-left"
                          } ${
                            selectedCategory === cat ||
                            (cat === allCatLabel &&
                              (selectedCategory === "All Categories" ||
                                selectedCategory === "جميع الأقسام"))
                              ? "bg-red-600 text-white font-bold shadow-md"
                              : "text-gray-700 hover:bg-gray-200/60"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* Article Cards Grid */}
                <main className="flex-1">
                  {filteredPosts.length === 0 ? (
                    <div className="text-center py-20 text-zinc-500 text-base bg-gray-50 rounded-3xl border border-gray-200">
                      {t.blogs.noResults}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {filteredPosts.map((post, idx) => (
                        <article
                          key={post.slug}
                          onClick={() => router.push(`/blogs/${post.slug}`)}
                          className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                          data-aos="fade-up"
                          data-aos-delay={idx * 80}
                        >
                          <div>
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                              <Image
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                src={post.image}
                              />
                              <div
                                className={`absolute top-4 ${
                                  isArabic ? "right-4" : "left-4"
                                }`}
                              >
                                <span className="px-3.5 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                                  {post.category}
                                </span>
                              </div>
                            </div>
                            <div className="p-6 sm:p-7 flex flex-col gap-3.5">
                              <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm font-medium">
                                <time>{post.date}</time>
                                <span>{post.readTime}</span>
                              </div>
                              <h3 className="text-gray-900 text-xl font-bold leading-snug group-hover:text-red-600 transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>

                          <div className="p-6 sm:p-7 pt-0">
                            <div className="pt-4 border-t border-gray-100 flex items-center text-red-600 font-bold text-sm">
                              <span>{t.blogs.readMoreBtn}</span>
                              <svg
                                className={`w-4 h-4 mx-2 group-hover:translate-x-1 transition-transform ${
                                  isArabic ? "rotate-180 group-hover:-translate-x-1" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </main>
              </div>

              {/* Bottom Call to Action Card */}
              <section className="mt-20" data-aos="fade-up">
                <div className="bg-red-600 rounded-[40px] p-8 lg:p-16 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-red-500 rounded-full -mr-20 -mt-20 opacity-40 blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                    <div className="w-full lg:w-1/2 text-white">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                        {isArabic
                          ? "فخامة مقصورة سيارتك تبدأ مع خبراء الرحمانية"
                          : "Elevate Your Cockpit with Al Rahmaniah Master Craft"}
                      </h2>
                      <p className="text-red-100 text-base sm:text-lg mb-8 leading-relaxed">
                        {isArabic
                          ? "من تفصيل مقاعد جلد النابا بالليزر إلى سقف النجوم ودعاسات 7D المقاومة للحرارة والرمال، فريقنا في الشارقة جاهز لتلبية طلباتك الخاصة بأعلى معايير الجودة."
                          : "From bespoke German Napa leather seat upholstery to optical fiber starlight roofs and all-weather 7D mats, our Sharjah workshop delivers peerless fitment."}
                      </p>
                      <button
                        onClick={() => router.push("/get-a-quote")}
                        className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all flex items-center gap-2 group shadow-xl cursor-pointer"
                      >
                        <span>{t.blogs.requestQuoteBtn}</span>
                        <svg
                          className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${
                            isArabic ? "rotate-180 group-hover:-translate-x-1" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="h-44 bg-red-700 rounded-2xl overflow-hidden shadow-lg border border-red-500 relative">
                          <Image
                            alt="Custom Seat Covers"
                            fill
                            className="object-cover opacity-85"
                            src="/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg"
                          />
                        </div>
                        <div className="h-48 bg-white p-6 rounded-2xl flex flex-col justify-center text-center shadow-lg">
                          <span className="text-red-600 text-4xl font-black">
                            {isArabic ? "١٥+" : "15+"}
                          </span>
                          <span className="text-gray-800 font-bold uppercase text-xs tracking-widest mt-2">
                            {isArabic ? "عاماً من الخبرة" : "Years Craftsmanship"}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4 pt-6 sm:pt-8">
                        <div className="h-48 bg-red-800 p-6 rounded-2xl flex flex-col justify-center text-center shadow-lg border border-red-500">
                          <span className="text-white text-4xl font-black">
                            {isArabic ? "١٠٠٪" : "100%"}
                          </span>
                          <span className="text-red-100 font-bold uppercase text-xs tracking-widest mt-2">
                            {isArabic ? "ضمان الجودة والتفصيل" : "Quality Guarantee"}
                          </span>
                        </div>
                        <div className="h-44 bg-red-700 rounded-2xl overflow-hidden shadow-lg border border-red-500 relative">
                          <Image
                            alt="Starlight Roof"
                            fill
                            className="object-cover opacity-85"
                            src="/fb-posts/609035383_122200209176549942_2808337490054960890_n.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
