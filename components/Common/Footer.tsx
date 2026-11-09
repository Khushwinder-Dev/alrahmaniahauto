"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import NewsletterSection from "./NewsletterSection";

export { default as NewsletterSection } from "./NewsletterSection";

export default function Footer({ hideNewsletter }: { hideNewsletter?: boolean } = {}) {
  const { isArabic } = useLanguage();
  const pathname = usePathname();

  const isExcludedPage =
    pathname === "/about-us" ||
    pathname?.startsWith("/about-us") ||
    pathname === "/career" ||
    pathname?.startsWith("/career") ||
    pathname === "/careers" ||
    pathname?.startsWith("/careers") ||
    pathname === "/contact" ||
    pathname?.startsWith("/contact") ||
    pathname === "/contact-us" ||
    pathname?.startsWith("/contact-us");
  const showNewsletter = !hideNewsletter && !isExcludedPage;

  const ArrowIcon = isArabic ? ChevronLeft : ChevronRight;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  const productLinks = [
    {
      label: isArabic ? "خامات هيت أون شيت (Heat-on-Sheet)" : "Heat-on-Sheet",
      href: "/products?search=Heat-on-Sheet",
    },
    {
      label: isArabic ? "تصاميم أقمشة (Fabric Design)" : "Fabric Design",
      href: "/products?search=Fabric+Design",
    },
    {
      label: isArabic ? "أقمشة سادة (Plain Fabric)" : "Plain Fabric",
      href: "/products?search=Plain+Fabric",
    },
    {
      label: isArabic ? "أقمشة مطرزة (Embroidery Fabric)" : "Embroidery Fabric",
      href: "/products?search=Embroidery+Fabric",
    },
    {
      label: isArabic ? "مكائن خياطة (Stitching Machine)" : "Stitching Machine",
      href: "/products?search=Stitching+Machine",
    },
    {
      label: isArabic ? "مخمل ستريتش (Velvet Stretch)" : "Velvet Stretch",
      href: "/products?search=Velvet+Stretch",
    },
  ];

  const companyLinks = [
    { label: isArabic ? "من نحن" : "About Us", href: "/about-us" },
    { label: isArabic ? "طلب تسعيرة مخصصة" : "Get a Custom Quote", href: "/get-a-quote" },
    { label: isArabic ? "كتالوج خامات وجلود نابا" : "Bespoke Materials & Swatches", href: "/products?search=napa" },
    { label: isArabic ? "الأسئلة الشائعة" : "Customer FAQs", href: "/faqs" },
    { label: isArabic ? "فرص العمل والتوظيف" : "Career Opportunities", href: "/career" },
    { label: isArabic ? "المعرض والتواصل معنا" : "Contact & Showroom", href: "/contact" },
  ];

  const legalLinks = [
    { label: isArabic ? "خريطة الموقع" : "Site Map", href: "/sitemap" },
    { label: isArabic ? "سياسة الاسترداد والإلغاء" : "Refund & Cancellation Policy", href: "/refund-policy" },
    { label: isArabic ? "سياسة الخصوصية" : "Privacy Policy", href: "/privacy" },
    { label: isArabic ? "شروط الاستخدام" : "Terms of Use", href: "/terms" },
    { label: isArabic ? "سياسة ملفات الكوكيز" : "Cookie Policy", href: "/cookies" },
  ];

  return (
    <>
      {/* ── 1. Top Newsletter Section (Bab Al Bustan Style with Voice Input) ── */}
      {showNewsletter && <NewsletterSection />}

      {/* ── 2. Main Dark Footer ── */}
      <footer
        className="bg-[#0a0a0a] text-gray-300 pt-16 pb-8 font-sans border-t border-zinc-800/80"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          {/* ============================================================
              MAIN 5-COLUMN FOOTER LINKS (INCLUDING LEGAL COLUMN)
              ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-10">
            {/* Col 1: About & Social */}
            <div className="space-y-6">
              <Link className="inline-block" href="/">
                <div className="relative h-14 w-36 sm:w-40 rounded-xl bg-white p-1.5 shadow-md overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.02]">
                  <Image
                    alt="Al Rahmaniah Auto Accessories"
                    fill
                    className="object-contain"
                    src="/images/alrahmaniah-logo.jpg"
                    unoptimized
                  />
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                {isArabic
                  ? "شركة الرحمانية لإكسسوارات وزينة السيارات هي وجهتك الأولى في الشارقة لتفصيل مقاعد الجلد الفاخرة، دعاسات 7D المقولبة، الإضاءات، وشاشات الأندرويد مع ضمان الجودة."
                  : "Al Rahmaniah Auto Accessories is Sharjah’s trusted destination for custom leather seat covers, 7D floor mats, automotive lighting, car electronics, and premium interior & exterior styling accessories."}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-white">
                  {isArabic ? "تابعنا على:" : "Follow us :"}
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/alrahmaniahauto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-zinc-700"
                    aria-label="Facebook"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="14"
                      width="14"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/alrahmaniahauto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-zinc-700"
                    aria-label="Instagram"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="14"
                      width="14"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@alrahmaniahauto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-zinc-700"
                    aria-label="TikTok"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="14"
                      width="14"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/alrahmaniahauto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-zinc-700"
                    aria-label="Twitter"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="13"
                      width="13"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@alrahmaniahauto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-zinc-700"
                    aria-label="YouTube"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      height="13"
                      width="13"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Categories */}
            <div>
              <div className="mb-6">
                <h4 className="text-white text-xl uppercase tracking-tight font-display font-bold">
                  {isArabic ? "الأقسام" : "Categories"}
                </h4>
                <div className="h-0.5 w-10 bg-red-600 mt-1"></div>
              </div>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors group"
                      href={link.href}
                    >
                      <ArrowIcon className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <div className="mb-6">
                <h4 className="text-white text-xl uppercase tracking-tight font-display font-bold">
                  {isArabic ? "الشركة" : "Company"}
                </h4>
                <div className="h-0.5 w-10 bg-red-600 mt-1"></div>
              </div>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors group"
                      href={link.href}
                    >
                      <ArrowIcon className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <div className="mb-6">
                <h4 className="text-white text-xl uppercase tracking-tight font-display font-bold">
                  {isArabic ? "قانوني" : "Legal"}
                </h4>
                <div className="h-0.5 w-10 bg-red-600 mt-1"></div>
              </div>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors group"
                      href={link.href}
                    >
                      <ArrowIcon className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact & Hours */}
            <div>
              <div className="mb-6">
                <h4 className="text-white text-xl uppercase tracking-tight font-display font-bold">
                  {isArabic ? "التواصل" : "Contact"}
                </h4>
                <div className="h-0.5 w-10 bg-red-600 mt-1"></div>
              </div>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin className="text-red-600 shrink-0 w-5 h-5 mt-0.5" />
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {isArabic
                      ? "المنطقة الصناعية 4، الشارقة، الإمارات العربية المتحدة"
                      : "Industrial Area 4,\nSharjah, United Arab Emirates"}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-red-600 shrink-0 w-5 h-5 mt-0.5" />
                  <div className="text-sm space-y-0.5">
                    <p>
                      <a href="tel:+971558875678" className="hover:text-white transition-colors" dir="ltr">
                        +971 55 887 5678
                      </a>
                    </p>
                    <p>
                      <a href="tel:+971558674927" className="hover:text-white transition-colors" dir="ltr">
                        +971 55 867 4927
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-red-600 shrink-0 w-5 h-5 mt-0.5" />
                  <div className="text-sm space-y-0.5">
                    <p>
                      <a href="mailto:info@alrahmaniahauto.com" className="hover:text-white transition-colors">
                        info@alrahmaniahauto.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:alrahmaniahauto@gmail.com" className="hover:text-white transition-colors">
                        alrahmaniahauto@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pt-1 border-t border-zinc-900">
                  <Clock className="text-red-600 shrink-0 w-5 h-5 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="text-gray-300 font-semibold">
                      {isArabic ? "السبت - الخميس: 8:00 ص – 9:00 م" : "Sat - Thu: 8:00 AM – 9:00 PM"}
                    </p>
                    <p className="text-gray-400">
                      {isArabic ? "استراحة: 1:30 م – 3:30 م" : "Break: 1:30 PM – 3:30 PM"}
                    </p>
                    <p className="text-red-500 font-bold">
                      {isArabic ? "الجمعة: مغلق" : "Friday: Closed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. Bottom Bar with Centered Floating Scroll-to-Top Button ── */}
          <div className="relative border-t border-zinc-800/80 mt-16 pt-7 pb-4">
            {/* Scroll-to-top — sits centered ON the divider line with hover tooltip */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
              <div className="group relative flex flex-col items-center">
                {/* Tooltip */}
                <div
                  role="tooltip"
                  className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-30"
                >
                  <div className="relative bg-zinc-900 border border-zinc-700/80 text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap">
                    <span>{isArabic ? "العودة إلى الأعلى" : "Back to top"}</span>
                    {/* Tooltip arrow pointing down */}
                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-900" />
                  </div>
                </div>

                {/* Button Outer Ring */}
                <div className="w-11 h-11 rounded-full bg-[#0a0a0a] ring-4 ring-[#0a0a0a] border border-zinc-800 flex items-center justify-center shadow-lg">
                  <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label={isArabic ? "العودة إلى الأعلى" : "Back to top"}
                    className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer shadow-md shadow-red-950/40"
                  >
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center text-center px-2">
              {/* Copyright Text */}
              <p className="text-xs lg:text-[13px] text-zinc-400 font-normal leading-normal">
                {isArabic
                  ? "© 2026 شركة الرحمانية لإكسسوارات وزينة السيارات. جميع الحقوق محفوظة."
                  : "© 2026 Al Rahmaniah Auto Accessories. All rights reserved."}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
