"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableSearchBar from "@/components/Common/ExpandableSearchBar";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isArabic, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: isArabic ? "المنتجات" : "Products", href: "/products" },
    { label: isArabic ? "المدونة" : "Blogs", href: "/blogs" },
    { label: isArabic ? "عن الشركة" : "About", href: "/about-us" },
    { label: isArabic ? "الوظائف" : "Careers", href: "/career" },
    { label: isArabic ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="relative h-11 sm:h-12 lg:h-14 w-28 sm:w-36 lg:w-40 rounded-xl bg-white p-1 shadow-md overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.02]">
                  <Image
                    src="/images/alrahmaniah-logo.jpg"
                    unoptimized
                    alt="Al Rahmaniah Auto Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative py-2 font-bold text-sm tracking-widest uppercase transition-colors duration-300 group text-white"
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transition-transform duration-300 ease-out origin-center ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Actions: Search + Language Switcher + GET A QUOTE Button */}
            <div className="hidden lg:flex items-center gap-4">
              <ExpandableSearchBar isScrolled={isScrolled} />

              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="text-white hover:text-red-500 font-bold text-sm tracking-wider uppercase transition-colors duration-200 cursor-pointer py-1.5 px-2 select-none"
                title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
                aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
              >
                {isArabic ? "English" : "العربية"}
              </button>

              <button
                onClick={() => router.push("/get-a-quote")}
                className="btn-primary hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all tracking-widest cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                {isArabic ? "طلب تسعيرة" : "GET A QUOTE"}
              </button>
            </div>

            {/* Mobile Actions: Search + Language Switcher + Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ExpandableSearchBar isScrolled={isScrolled} />

              {/* Mobile Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="text-white hover:text-red-500 font-bold text-xs tracking-wider uppercase transition-colors duration-200 cursor-pointer py-1.5 px-1.5 select-none"
                title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
                aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
              >
                {isArabic ? "EN" : "عربي"}
              </button>

              <button
                className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-black z-[10002] p-8 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="h-10 w-28 sm:w-32 relative rounded-lg bg-white p-1 shadow-sm overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/alrahmaniah-logo.jpg"
                  unoptimized
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close Navigation Menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Search Bar inside Drawer */}
            <div className="mb-6">
              <ExpandableSearchBar
                isDrawer={true}
                onCloseMenu={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors ${
                    pathname === link.href ? "text-red-600" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">
                  {isArabic ? "اللغة" : "Language"}
                </span>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="text-red-500 hover:text-red-400 font-bold text-sm tracking-wider uppercase border border-red-500/40 px-4 py-2 rounded-full"
                >
                  {isArabic ? "English" : "العربية"}
                </button>
              </div>

              <button
                onClick={() => {
                  router.push("/get-a-quote");
                  setMobileMenuOpen(false);
                }}
                className="mt-6 btn-primary py-4 text-white font-bold uppercase tracking-widest rounded-full"
              >
                {isArabic ? "طلب تسعيرة" : "GET A QUOTE"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
