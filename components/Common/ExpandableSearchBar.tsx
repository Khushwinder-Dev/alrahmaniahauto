"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Mic,
  MicOff,
  ArrowRight,
  ChevronRight,
  X,
  Sparkles,
  Layers,
  Car,
  ShieldCheck,
  Disc,
  Armchair,
  HelpCircle,
  FileText,
  Send,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { SITE_SEARCH_INDEX, SearchResultItem } from "@/data/searchIndex";
import { WORKSHOP_INFO } from "@/data/workshopData";
import { useLanguage } from "@/context/LanguageContext";
import toast from "react-hot-toast";
import { createPortal } from "react-dom";

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionConstructor {
  new(): SpeechRecognitionInstance;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

interface ExpandableSearchBarProps {
  onSearch?: (query: string, href?: string) => void;
  placeholder?: string;
  suggestions?: string[];
  className?: string;
  iconColor?: string;
  hoverIconColor?: string;
  dashedButton?: boolean;
  isDrawer?: boolean;
  onCloseMenu?: () => void;
  isScrolled?: boolean;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Product: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
  Category: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  Page: { bg: "bg-zinc-100", text: "text-zinc-700", border: "border-zinc-200" },
  Service: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
};

type FilterCategory = "all" | "products" | "categories" | "pages";

const FILTER_TABS: { key: FilterCategory; labelEn: string; labelAr: string }[] = [
  { key: "all", labelEn: "All", labelAr: "الكل" },
  { key: "products", labelEn: "Products", labelAr: "المنتجات" },
  { key: "categories", labelEn: "Categories", labelAr: "الأقسام" },
  { key: "pages", labelEn: "Showroom & Info", labelAr: "المعرض والمعلومات" },
];

interface MostUsedItem {
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MOST_USED_BY_TAB: Record<FilterCategory, MostUsedItem[]> = {
  all: [
    {
      titleEn: "Custom Laser Leather Seat Covers",
      titleAr: "أغطية وتلبيس مقاعد جلد نابا بالليزر",
      categoryEn: "Seat Covers",
      categoryAr: "فرش مقاعد",
      href: "/products?search=seat",
      icon: Armchair,
    },
    {
      titleEn: "7D Precision Molded Floor Mats",
      titleAr: "دعاسات وأرضيات 7D الفاخرة للسيارات",
      categoryEn: "Floor Mats",
      categoryAr: "دعاسات 7D",
      href: "/products?search=floor",
      icon: Layers,
    },
    {
      titleEn: "Custom Colored Sports Seatbelts",
      titleAr: "أحزمة أمان ملونة رياضية معتمدة",
      categoryEn: "Seatbelts",
      categoryAr: "أحزمة أمان",
      href: "/products?search=seatbelt",
      icon: ShieldCheck,
    },
    {
      titleEn: "Rolls-Royce Style Starlight Roof Ceiling",
      titleAr: "سقف نجوم ليزري رولز رويس (ألياف ضوئية)",
      categoryEn: "Custom Styling",
      categoryAr: "سقف نجوم",
      href: "/products?search=starlight",
      icon: Sparkles,
    },
    {
      titleEn: "Android Touchscreens & 360 Cameras",
      titleAr: "شاشات أندرويد وكاميرات محيطية 360",
      categoryEn: "Electronics",
      categoryAr: "إلكترونيات وشاشات",
      href: "/products?search=screen",
      icon: Disc,
    },
    {
      titleEn: "Laser LED Lights & Ambient Lighting",
      titleAr: "إضاءة ليد ليزرية وأجواء محيطية للسيارات",
      categoryEn: "Lighting",
      categoryAr: "إضاءة وزينة",
      href: "/products?search=led",
      icon: Car,
    },
    {
      titleEn: "Instant Bespoke Price Quotation",
      titleAr: "طلب عرض سعر فوري ومخصص",
      categoryEn: "Transparent Pricing",
      categoryAr: "تسعيرة فورية",
      href: "/get-a-quote",
      icon: FileText,
    },
    {
      titleEn: "Showrooms in Sharjah Industrial Area 4 & 5",
      titleAr: "معارضنا في المنطقة الصناعية 4 و 5 بالشارقة",
      categoryEn: "Location & Hours",
      categoryAr: "موقع المعرض",
      href: "/contact",
      icon: HelpCircle,
    },
  ],
  products: [
    {
      titleEn: "Custom Laser Leather Seat Covers",
      titleAr: "أغطية وتلبيس مقاعد جلد نابا بالليزر",
      categoryEn: "Seat Covers",
      categoryAr: "فرش مقاعد",
      href: "/products?search=seat",
      icon: Armchair,
    },
    {
      titleEn: "7D Precision Molded Floor Mats",
      titleAr: "دعاسات وأرضيات 7D الفاخرة للسيارات",
      categoryEn: "Floor Mats",
      categoryAr: "دعاسات 7D",
      href: "/products?search=floor",
      icon: Layers,
    },
    {
      titleEn: "Custom Colored Sports Seatbelts",
      titleAr: "أحزمة أمان ملونة رياضية معتمدة",
      categoryEn: "Seatbelts",
      categoryAr: "أحزمة أمان",
      href: "/products?search=seatbelt",
      icon: ShieldCheck,
    },
    {
      titleEn: "Rolls-Royce Style Starlight Roof Ceiling",
      titleAr: "سقف نجوم ليزري رولز رويس (ألياف ضوئية)",
      categoryEn: "Custom Styling",
      categoryAr: "سقف نجوم",
      href: "/products?search=starlight",
      icon: Sparkles,
    },
    {
      titleEn: "Android Touchscreens & 360 Cameras",
      titleAr: "شاشات أندرويد وكاميرات محيطية 360",
      categoryEn: "Electronics",
      categoryAr: "إلكترونيات وشاشات",
      href: "/products?search=screen",
      icon: Disc,
    },
  ],
  categories: [
    {
      titleEn: "Custom Leather Seat Covers",
      titleAr: "أغطية ومقاعد جلدية مخصصة",
      categoryEn: "Category",
      categoryAr: "قسم",
      href: "/products?category=Seat%20Covers",
      icon: Armchair,
    },
    {
      titleEn: "7D & 5D Luxury Floor Mats",
      titleAr: "دعاسات وأرضيات 7D و 5D فاخرة",
      categoryEn: "Category",
      categoryAr: "قسم",
      href: "/products?category=Floor%20Mats",
      icon: Layers,
    },
    {
      titleEn: "Colored Seatbelts & Cockpit Styling",
      titleAr: "أحزمة أمان ملونة وزينة المقصورة",
      categoryEn: "Category",
      categoryAr: "قسم",
      href: "/products?category=Seat%20Belts",
      icon: ShieldCheck,
    },
    {
      titleEn: "Car Audio, Android Screens & Electronics",
      titleAr: "صوتيات السيارات وشاشات الأندرويد",
      categoryEn: "Category",
      categoryAr: "قسم",
      href: "/products?category=Electronics",
      icon: Disc,
    },
  ],
  pages: [
    {
      titleEn: "Complete Accessories & Products Catalog",
      titleAr: "كتالوج المنتجات والإكسسوارات الكامل",
      categoryEn: "Products",
      categoryAr: "كتالوج",
      href: "/products",
      icon: Armchair,
    },
    {
      titleEn: "Get an Instant Transparent Quote",
      titleAr: "طلب عرض سعر فوري ومباشر",
      categoryEn: "Pricing",
      categoryAr: "تسعيرة",
      href: "/get-a-quote",
      icon: FileText,
    },
    {
      titleEn: "About Al Rahmaniah 15+ Years Craftsmanship",
      titleAr: "عن شركة الرحمانية - خبرة أكثر من 15 عاماً",
      categoryEn: "Company",
      categoryAr: "عن الشركة",
      href: "/about-us",
      icon: ShieldCheck,
    },
    {
      titleEn: "Showrooms in Sharjah Industrial Area 4 & 5",
      titleAr: "موقع المعارض في صناعية الشارقة 4 و 5",
      categoryEn: "Showrooms",
      categoryAr: "معارضنا",
      href: "/contact",
      icon: HelpCircle,
    },
  ],
};

const AI_PRESET_QUESTIONS = [
  {
    en: "What materials do you use for custom car seat covers?",
    ar: "ما هي خامات تفصيل وتلبيس مقاعد السيارات المتوفرة لديكم؟",
    ansEn:
      "At Al Rahmaniah Auto Accessories, we handcraft custom seat covers using 100% genuine German Napa leatherette, Italian micro-perforated leather, breathable sports suede, and luxury Alcantara. Every set is laser-scanned to fit your vehicle with zero wrinkles, side-airbag compatibility, and written warranty.",
    ansAr:
      "نوفر في شركة الرحمانية خامات أصلية 100% تشمل جلد النابا الألماني الفاخر، والجلد الإيطالي المخرم للتهوية، والكانتارا الرياضي. يتم قص وتفصيل المقاعد بالليزر لمطابقة كراسي سيارتك تماماً بدون تجاعيد مع الحفاظ التام على أكياس الهواء (Airbags) وضمان خطي معتمد.",
  },
  {
    en: "How are your 7D floor mats customized for my specific vehicle?",
    ar: "كيف يتم تفصيل دعاسات وأرضيات 7D المخصصة لنوع سيارتي؟",
    ansEn:
      "Our 7D mats are custom-measured using 3D laser floor scanning for your specific car make, model, and year. They feature high raised edges protecting side carpets, heavy-duty waterproof leatherette, anti-slip backing, and a detachable curly wire coil carpet layer for effortless cleaning.",
    ansAr:
      "دعاسات 7D لدينا مصممة بالليزر بمقاسات حصرية لكل موديل وسنة صنع، بحواف مرتفعة تغطي كامل الأرضية وتحمي موكيت الوكالة من الأتربة والماء، مع طبقة موكيت سلكية قابلة للفك لسهولة الغسيل والتنظيف.",
  },
  {
    en: "Are custom colored seatbelts safe and OEM-certified in the UAE?",
    ar: "هل أحزمة الأمان الملونة آمنة ومطابقة لمواصفات الفحص والسلامة في الإمارات؟",
    ansEn:
      "Yes, 100%. Our colored seatbelt webbing is high-tensile polyester certified to OEM, FIA, and UAE vehicle inspection standards (rated for 2,500+ KG tensile strength). We retain your factory pre-tensioners, buckles, and safety sensor wiring.",
    ansAr:
      "نعم 100%. نستخدم خيوط بوليستر عالية الشد مطابقة للمواصفات القياسية الإماراتية وهيئات الفحص المعتمدة، مع الاحتفاظ بآلية الشد وحساسات الأمان الأصلية دون المساس بنظام الحماية.",
  },
  {
    en: "How does a Rolls-Royce starlight ceiling work and how many stars can I get?",
    ar: "كيف يتم تركيب سقف النجوم (ستار لايت) وكم عدد النجوم المتاحة؟",
    ansEn:
      "Our master interior craftsmen embed between 450 to 1,200+ optical fiber light points directly into your vehicle headliner. Features include multi-color RGBW selection, realistic twinkling stars, shooting meteor effects, and full control via Bluetooth smartphone app and wireless remote.",
    ansAr:
      "نقوم بتركيب ألياف ضوئية ليزرية بعدد يتراوح بين 450 إلى 1,200+ نجمة في سقف السيارة، مع خاصية الوميض (Twinkle) وشهب متحركة (Shooting Stars)، مع تحكم كامل بالألوان والإضاءة عبر تطبيق الهاتف الذكي وريموت لاسلكي.",
  },
];

export default function ExpandableSearchBar({
  onSearch,
  placeholder,
  className = "",
  iconColor = "text-white",
  hoverIconColor = "hover:text-red-500",
  dashedButton = true,
  isDrawer = false,
  onCloseMenu,
  isScrolled = false,
}: ExpandableSearchBarProps) {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const isAr = isArabic;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterCategory>("all");
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ask AI Modal State
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      setSpeechSupported(!!SpeechRecognition);
    }
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsExpanded((prev) => {
          if (!prev) {
            setTimeout(() => inputRef.current?.focus(), 150);
            return true;
          }
          return false;
        });
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Outside click listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleCollapse();
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    if (!isDrawer) {
      setSearchQuery("");
    }
    setActiveTab("all");
  };

  const handleClearQuery = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchQuery("");
    inputRef.current?.focus();
  };

  // Filter search results dynamically
  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const scored: { item: SearchResultItem; score: number }[] = [];

    SITE_SEARCH_INDEX.forEach((item) => {
      const name = item.name.toLowerCase();
      const nameAr = item.nameAr ? item.nameAr.toLowerCase() : "";
      const desc = item.desc ? item.desc.toLowerCase() : "";
      const descAr = item.descAr ? item.descAr.toLowerCase() : "";
      const cat = item.category.toLowerCase();
      const kwMatch = item.keywords.some((k) => k.toLowerCase().includes(query));

      let score = 0;
      if (name === query || nameAr === query) {
        score += 150;
      } else if (name.startsWith(query) || nameAr.startsWith(query)) {
        score += 90;
      } else if (name.includes(query) || nameAr.includes(query)) {
        score += 60;
      } else if (kwMatch) {
        score += 35;
      } else if (desc.includes(query) || descAr.includes(query)) {
        score += 20;
      } else if (cat.includes(query)) {
        score += 15;
      }

      if (item.category === "Product" && score > 0) {
        score += 25;
      }

      if (score > 0) {
        scored.push({ item, score });
      }
    });

    scored.sort((a, b) => b.score - a.score);
    const allMatched = scored.map((s) => s.item);

    const filtered = allMatched.filter((it) => {
      if (activeTab === "all") return true;
      if (activeTab === "products") return it.category === "Product" || it.category === "Service";
      if (activeTab === "categories") return it.category === "Category";
      if (activeTab === "pages") return it.category === "Page";
      return true;
    });

    return filtered.slice(0, 8);
  }, [searchQuery, activeTab]);

  // Voice Search Handler
  const handleVoiceSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!speechSupported) {
      toast.error(
        isAr
          ? "البحث الصوتي غير مدعوم في متصفحك. يرجى تجربة Google Chrome."
          : "Voice search is not supported in this browser. Please use Chrome."
      );
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return;

      const recognition = new SpeechRecognition();
      recognition.lang = isAr ? "ar-AE" : "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        toast.success(
          isAr ? "تحدث الآن للبحث في الموقع..." : "Listening... Speak your accessory query",
          { id: "voice-toast", duration: 4000 }
        );
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        toast.dismiss("voice-toast");
        handleExecuteSearch(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
        toast.dismiss("voice-toast");
        toast.error(
          isAr
            ? "تعذر التعرف على الصوت. يرجى المحاولة ثانية."
            : "Could not hear audio. Please try again."
        );
      };

      recognition.onend = () => {
        setIsListening(false);
        toast.dismiss("voice-toast");
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleExecuteSearch = (query: string, href?: string) => {
    if (href) {
      router.push(href);
      handleCollapse();
      if (onCloseMenu) onCloseMenu();
      return;
    }

    const trimmed = query.trim();
    if (!trimmed) return;

    if (onSearch) {
      onSearch(trimmed);
    } else {
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
    }

    handleCollapse();
    if (onCloseMenu) onCloseMenu();
  };

  const handleAskAi = (question: string) => {
    setAiQuestion(question);
    setShowAiModal(true);

    const matched = AI_PRESET_QUESTIONS.find(
      (p) =>
        p.en.toLowerCase().includes(question.toLowerCase()) ||
        p.ar.includes(question)
    );

    if (matched) {
      setAiResponse(isAr ? matched.ansAr : matched.ansEn);
    } else {
      setAiResponse(
        isAr
          ? "شكراً لسؤالك! ينصح مستشارو شركة الرحمانية لإكسسوارات السيارات بزيارة معرضنا بالشارقة (المنطقة الصناعية 4) أو مراسلتنا عبر الواتساب للحصول على تفصيل مخصص وعينات أقمشة وجلود مباشرة."
          : "Thank you for your question! Our styling advisors at Al Rahmaniah Auto Accessories recommend visiting our Sharjah showroom in Industrial Area 4, or chatting with our specialists on WhatsApp for custom swatches and fitment options."
      );
    }
  };

  const mostUsedItems = MOST_USED_BY_TAB[activeTab] || MOST_USED_BY_TAB.all;
  const defaultPlaceholder = isAr ? "ابحث عن أغطية مقاعد، دعاسات 7D، سقف نجوم، إلكترونيات..." : "Search seat covers, 7D mats, starlight ceilings, electronics...";

  return (
    <div
      ref={containerRef}
      className={`relative z-40 ${className}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ─── DESKTOP & MOBILE NAVBAR TRIGGER BUTTON ─── */}
      {!isDrawer ? (
        <div className="flex items-center">
          {dashedButton ? (
            <button
              type="button"
              onClick={() => {
                if (isExpanded) {
                  handleCollapse();
                } else {
                  handleExpand();
                }
              }}
              className={`relative p-0.5 rounded-full border border-dashed transition-all cursor-pointer hover:scale-105 ${
                isExpanded
                  ? isScrolled
                    ? "border-red-600 bg-red-600/15"
                    : "border-white bg-white/15"
                  : isScrolled
                    ? "border-red-600/50 hover:border-red-600"
                    : "border-white/60 hover:border-white"
              }`}
              aria-label={isExpanded ? "Close search" : "Open search"}
              title="Search (Ctrl + K)"
            >
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  isScrolled
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                {isExpanded ? (
                  <X className="h-4 w-4 stroke-[2.5]" />
                ) : (
                  <Search className="h-4 w-4 stroke-[2.5]" />
                )}
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (isExpanded) {
                  handleCollapse();
                } else {
                  handleExpand();
                }
              }}
              className={`${iconColor} ${hoverIconColor} p-2 transition-all cursor-pointer hover:bg-white/10 rounded-full`}
              aria-label={isExpanded ? "Close search" : "Open search"}
              title="Search (Ctrl + K)"
            >
              {isExpanded ? (
                <X className="h-5 w-5 stroke-2 text-red-500" />
              ) : (
                <Search className="h-5 w-5 stroke-2" />
              )}
            </button>
          )}
        </div>
      ) : (
        /* Mobile Drawer Trigger Pill */
        <div className="relative w-full">
          <button
            type="button"
            onClick={() => {
              if (isExpanded) {
                handleCollapse();
              } else {
                handleExpand();
              }
            }}
            className="w-full flex items-center justify-between bg-white hover:bg-zinc-50 border border-zinc-200 rounded-full px-4 py-2.5 text-zinc-600 transition-all cursor-pointer text-xs shadow-xs group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
              <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">
                {placeholder || defaultPlaceholder}
              </span>
            </div>
            <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
              Search
            </span>
          </button>
        </div>
      )}

      {/* Mobile Backdrop Overlay when opened from Navbar on mobile screen */}
      {!isDrawer && isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs lg:hidden z-40 transition-opacity"
          onClick={handleCollapse}
        />
      )}

      {/* ─── UNIFIED SEARCH CARD (WHITE THEME) ───────────── */}
      {isExpanded && (
        <div
          className={`${
            isDrawer
              ? "relative w-full mt-3"
              : "fixed inset-x-3 top-20 sm:absolute sm:inset-auto sm:top-full sm:mt-3 sm:right-0 rtl:sm:right-auto rtl:sm:left-0 w-[calc(100vw-1.5rem)] sm:w-[540px] md:w-[620px] lg:w-[680px] max-w-[calc(100vw-1.5rem)] sm:max-w-[680px]"
          } bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.18),0_15px_35px_rgba(220,38,38,0.06)] border border-zinc-200/90 p-4 sm:p-6 z-50 text-left rtl:text-right animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh] sm:max-h-[620px]`}
          onClick={(e) => e.stopPropagation()}
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* 1. Integrated Search Input Box */}
          <div className="relative flex items-center bg-white border-2 border-red-600/30 focus-within:border-red-600 focus-within:ring-4 focus-within:ring-red-600/15 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 transition-all shadow-xs gap-2.5 sm:gap-3 shrink-0">
            <Search className="w-5 h-5 text-red-600 shrink-0 stroke-[2.2]" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleExecuteSearch(searchQuery);
                } else if (e.key === "Escape") {
                  handleCollapse();
                }
              }}
              placeholder={placeholder || defaultPlaceholder}
              className="flex-1 bg-transparent text-sm sm:text-base text-zinc-900 placeholder-zinc-400 outline-none min-w-0 font-medium"
            />

            {/* Clear Query X */}
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={handleClearQuery}
                className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-zinc-100 rounded-full transition-colors shrink-0 cursor-pointer"
                title={isAr ? "مسح النص" : "Clear text"}
                aria-label="Clear text"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Voice Search with Pulse Animation */}
            {mounted && (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleVoiceSearch}
                className={`p-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                  isListening
                    ? "bg-red-600 text-white animate-pulse shadow-md shadow-red-600/30"
                    : "text-zinc-400 hover:text-red-600 hover:bg-zinc-100"
                }`}
                title={
                  isListening
                    ? isAr
                      ? "جارٍ الاستماع..."
                      : "Listening..."
                    : isAr
                      ? "البحث الصوتي"
                      : "Voice search"
                }
                aria-label="Voice search"
              >
                {isListening ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={handleCollapse}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors shrink-0 cursor-pointer"
              title={isAr ? "إغلاق (Esc)" : "Close (Esc)"}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Filter Tabs Row */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 pb-2 border-b border-zinc-100 overflow-x-auto scrollbar-none shrink-0">
            {FILTER_TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                  }`}
                >
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>

          {/* 3. Dynamic Results or Most Used Accessories Grid */}
          <div className="flex-1 overflow-y-auto mt-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-200">
            {searchQuery.trim().length > 0 ? (
              filteredResults.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-1">
                    {isAr
                      ? `نتائج البحث (${filteredResults.length})`
                      : `Search Results (${filteredResults.length})`}
                  </div>
                  {filteredResults.map((result) => {
                    const badge =
                      CATEGORY_COLORS[result.category] || CATEGORY_COLORS.Product;
                    return (
                      <div
                        key={result.id}
                        onClick={() => handleExecuteSearch(result.name, result.href)}
                        className="group flex items-start justify-between gap-3 p-3 rounded-2xl hover:bg-red-50/70 border border-transparent hover:border-red-100 transition-all cursor-pointer"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}
                            >
                              {isAr ? result.categoryAr || result.category : result.category}
                            </span>
                            <h4 className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors truncate">
                              {isAr ? result.nameAr || result.name : result.name}
                            </h4>
                          </div>
                          <p className="text-xs text-zinc-500 line-clamp-1 leading-normal">
                            {isAr ? result.descAr || result.desc : result.desc}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0 mt-1 rtl:rotate-180" />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-8 text-center text-zinc-400 text-xs">
                  {isAr
                    ? `لا توجد نتائج مطابقة لـ "${searchQuery}". جرب البحث بكلمات مثل "مقاعد"، "دعاسات"، أو "سقف نجوم".`
                    : `No results for "${searchQuery}". Try terms like "seat covers", "7D mats", or "starlight".`}
                </div>
              )
            ) : (
              <div>
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {isAr ? "الأكثر طلباً وتصفحاً" : "Most Popular Accessories"}
                  </span>
                  <span className="text-[10px] text-red-600 font-semibold">
                    {isAr ? "الرحمانية للسيارات" : "Al Rahmaniah"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mostUsedItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleExecuteSearch(item.titleEn, item.href)}
                        className="group flex items-center gap-3 p-2.5 rounded-2xl hover:bg-zinc-50 border border-zinc-100 hover:border-red-200/80 transition-all cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-zinc-800 group-hover:text-red-600 transition-colors truncate">
                            {isAr ? item.titleAr : item.titleEn}
                          </p>
                          <p className="text-[10px] text-zinc-400 truncate">
                            {isAr ? item.categoryAr : item.categoryEn}
                          </p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-red-600 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform shrink-0 rtl:rotate-180" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 4. Bottom AI Assistant Banner */}
          <div className="mt-3 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="font-semibold text-zinc-800">
                {isAr ? "اسأل مستشار الإكسسوارات الذكي:" : "Ask AI Styling Advisor:"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() =>
                  handleAskAi(
                    isAr
                      ? "ما هي خامات تفصيل مقاعد السيارات؟"
                      : "What materials do you use for custom seat covers?"
                  )
                }
                className="text-[11px] font-medium text-red-600 hover:text-red-700 bg-red-50/80 hover:bg-red-100 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
              >
                {isAr ? "خامات المقاعد الجلدية" : "Custom Seat Materials"}
              </button>
              <button
                type="button"
                onClick={() =>
                  handleAskAi(
                    isAr
                      ? "كيف يتم تفصيل دعاسات 7D لنوع سيارتي؟"
                      : "How are 7D floor mats customized?"
                  )
                }
                className="text-[11px] font-medium text-red-600 hover:text-red-700 bg-red-50/80 hover:bg-red-100 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
              >
                {isAr ? "تفصيل دعاسات 7D" : "7D Floor Mats"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── ASK AI MODAL (PORTAL) ────────────────────────────────────────── */}
      {showAiModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[100000] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setShowAiModal(false)}
            dir={isAr ? "rtl" : "ltr"}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl border border-zinc-200 max-w-lg w-full p-6 text-left rtl:text-right animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      {isAr ? "مستشار الرحمانية الذكي للإكسسوارات" : "Al Rahmaniah AI Styling Advisor"}
                    </h3>
                    <p className="text-[11px] text-zinc-400">
                      {isAr ? "إجابة فورية ومعتمدة من خبراء تفصيل السيارات" : "Instant expert automotive styling guidance"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAiModal(false)}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-zinc-800 mb-2">{aiQuestion}</p>
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {aiResponse}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={WORKSHOP_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setShowAiModal(false);
                    router.push("/get-a-quote");
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {isAr ? "طلب تسعيرة مخصصة" : "Get a Quote"}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
