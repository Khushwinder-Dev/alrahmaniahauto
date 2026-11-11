"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getBlogPosts, BLOG_POSTS } from "@/data/blogs";

interface Props {
  slug: string;
}

export default function BlogPostView({ slug }: Props) {
  const { isArabic, t } = useLanguage();
  const allPosts = getBlogPosts(isArabic);
  const post =
    allPosts.find((p) => p.slug === slug) ||
    BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Banner Header */}
      <div className="relative h-[480px] sm:h-[550px] lg:h-[600px] min-h-[480px] w-full">
        <Image
          alt={post.title}
          fill
          unoptimized
          className="object-cover"
          src={post.image}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 flex items-end">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 pb-12 w-full">
            <span className="bg-red-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 sm:mb-6 inline-block shadow-md">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight max-w-4xl break-words">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Article Main Body */}
          <div className="lg:col-span-8">
            {/* Author / Timestamp Bar */}
            <div className="flex items-center gap-4 mb-8 sm:mb-10 pb-6 border-b border-zinc-100">
              <div className="w-12 h-12 bg-red-600/10 text-red-600 border border-red-200 rounded-full flex items-center justify-center font-black text-xs tracking-wider flex-shrink-0">
                ARA
              </div>
              <div>
                <p className="text-zinc-900 font-bold text-sm uppercase tracking-tight">
                  {t.blogs.teamAuthor}
                </p>
                <div className="flex items-center gap-3 text-zinc-500 text-xs uppercase mt-0.5">
                  <time>{post.date}</time>
                  {post.readTime && <span>• {post.readTime}</span>}
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="prose prose-lg max-w-none text-zinc-800 leading-relaxed prose-headings:text-zinc-900 prose-headings:font-black prose-headings:uppercase prose-strong:text-zinc-900 prose-h3:text-2xl prose-img:rounded-2xl">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-[16px] sm:text-[17px] leading-relaxed text-zinc-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back to Blog directory link */}
            <div className="mt-12 pt-8 border-t border-zinc-200 flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors text-sm sm:text-base group"
              >
                <svg
                  className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${
                    isArabic ? "rotate-180 group-hover:translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>{isArabic ? "العودة إلى جميع المقالات" : "Back to All Guides"}</span>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-28">
              {/* More Insights header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-red-600 rounded-sm" />
                <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">
                  {t.blogs.moreInsights}
                </h2>
              </div>

              {/* Related Posts list */}
              <div className="space-y-6 sm:space-y-8">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    className="group flex gap-4 items-start"
                    href={`/blogs/${p.slug}`}
                  >
                    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200">
                      <Image
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        src={p.image}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">
                        {p.category}
                      </span>
                      <h3 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 uppercase">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 mt-2 uppercase font-medium">
                        {p.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Get a Quote Box */}
              <div className="mt-12 bg-zinc-900 rounded-3xl p-7 sm:p-8 text-white relative overflow-hidden shadow-2xl border border-zinc-800">
                <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase mb-3 leading-snug">
                    {t.blogs.requestQuote}
                  </h3>
                  <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
                    {t.blogs.quoteCtaDesc}
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black px-6 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-lg hover:shadow-red-600/30 group"
                    href="/get-a-quote"
                  >
                    <span>{t.blogs.requestQuoteBtn}</span>
                    <svg
                      className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
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
                  </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

