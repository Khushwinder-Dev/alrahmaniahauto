import { allProductsData, PRODUCT_CATEGORIES } from "./productsData";

export interface SearchResultItem {
  id: string;
  name: string;
  nameAr?: string;
  category: "Service" | "Product" | "Subcontract" | "Solution" | "Project" | "Industry" | "Resource" | "Page" | "Category";
  categoryAr?: string;
  href: string;
  desc: string;
  descAr?: string;
  keywords: string[];
}

/* ─── DYNAMICALLY GENERATED PRODUCTS SEARCH ITEMS ─────────────────────── */
const productSearchItems: SearchResultItem[] = allProductsData.map((p) => ({
  id: `product-${p.id}`,
  name: p.name,
  nameAr: p.longName || p.name,
  category: "Product",
  categoryAr: "منتج",
  href: `/products?search=${encodeURIComponent(p.name)}`,
  desc: p.description || p.longName,
  descAr: p.description || p.longName,
  keywords: [
    p.name,
    p.longName,
    p.category,
    p.subcategory || "",
    "product",
    "seat covers",
    "leather",
    "seatbelt",
    "carpet",
    "floor mats",
    "7d mats",
    "headliner",
    "accessories",
    "sharjah",
    "car interior",
    "al rahmaniah",
  ].filter(Boolean),
}));

/* ─── CATEGORY SEARCH ITEMS ──────────────────────────────────────────── */
const categorySearchItems: SearchResultItem[] = PRODUCT_CATEGORIES.map((cat, idx) => ({
  id: `cat-${idx}`,
  name: cat,
  nameAr: cat,
  category: "Category",
  categoryAr: "قسم",
  href: `/products?category=${encodeURIComponent(cat)}`,
  desc: `Explore our premium range of ${cat} for Japanese, European, and American vehicles in Sharjah.`,
  descAr: `استكشف تشكيلة ${cat} الفاخرة للسيارات في الشارقة.`,
  keywords: [cat, "category", "auto accessories", "products", "sharjah", "custom"],
}));

/* ─── CORE SITE PAGES ─────────────────────────────────────────────────── */
const corePageItems: SearchResultItem[] = [
  {
    id: "page-products",
    name: "Products & Accessories Catalog",
    nameAr: "كتالوج المنتجات والإكسسوارات",
    category: "Page",
    categoryAr: "صفحة",
    href: "/products",
    desc: "Browse our complete catalog of custom car seat covers, 7D floor mats, colored seatbelts, and electronics.",
    descAr: "تصفح كتالوج أغطية المقاعد الجلدية، ودعاسات 7D، وأحزمة الأمان، وإلكترونيات السيارات.",
    keywords: ["products", "catalog", "shop", "accessories", "seat covers", "floor mats", "electronics"],
  },
  {
    id: "page-quote",
    name: "Get a Custom Quote",
    nameAr: "طلب عرض سعر مخصص",
    category: "Page",
    categoryAr: "صفحة",
    href: "/get-a-quote",
    desc: "Request an instant transparent price quotation for bespoke car seat covers, mats, or installation.",
    descAr: "احصل على تسعيرة فورية لتفصيل المقاعد والدعاسات والإكسسوارات لسيارتك.",
    keywords: ["quote", "price", "estimate", "pricing", "inquiry", "تسعيرة", "سعر"],
  },
  {
    id: "page-about",
    name: "About Al Rahmaniah Auto Accessories",
    nameAr: "عن شركة الرحمانية لإكسسوارات السيارات",
    category: "Page",
    categoryAr: "صفحة",
    href: "/about-us",
    desc: "15+ years of craftsmanship in automotive styling, bespoke upholstery, and premium auto accessories in Sharjah.",
    descAr: "أكثر من 15 عاماً من الخبرة في تزيين وتفصيل إكسسوارات السيارات وفرش الجلود بالشارقة.",
    keywords: ["about", "company", "who we are", "history", "sharjah", "workshop", "showroom"],
  },
  {
    id: "page-contact",
    name: "Contact & Showroom Location",
    nameAr: "التواصل وموقع المعرض",
    category: "Page",
    categoryAr: "صفحة",
    href: "/contact",
    desc: "Visit our showrooms in Industrial Area 4 & 5, Sharjah. Reach our team via phone or WhatsApp.",
    descAr: "زوروا معرضنا في المنطقة الصناعية 4 و 5 بالشارقة أو تواصلوا معنا عبر الواتساب.",
    keywords: ["contact", "location", "phone", "whatsapp", "address", "sharjah", "industrial area"],
  },
  {
    id: "page-careers",
    name: "Careers & Job Opportunities",
    nameAr: "الوظائف والفرص المهنية",
    category: "Page",
    categoryAr: "صفحة",
    href: "/career",
    desc: "Join our team of master leather craftsmen, electronics fitters, and sales advisors in Sharjah.",
    descAr: "انضم إلى فريق الخياطين والفنيين ومستشاري المبيعات في الشارقة.",
    keywords: ["career", "jobs", "vacancies", "hiring", "apply", "وظائف"],
  },
  {
    id: "page-faqs",
    name: "Frequently Asked Questions (FAQs)",
    nameAr: "الأسئلة الشائعة",
    category: "Page",
    categoryAr: "صفحة",
    href: "/faqs",
    desc: "Find answers regarding custom fitment, materials, UAE delivery, warranties, and showroom visits.",
    descAr: "إجابات شائعة حول تفصيل المقاعد، التوصيل في الإمارات، الضمان، وزيارة المعرض.",
    keywords: ["faq", "questions", "answers", "help", "warranty", "delivery"],
  },
];

/* ─── UNIFIED COMPLETE SITE SEARCH INDEX ──────────────────────────────── */
export const SITE_SEARCH_INDEX: SearchResultItem[] = [
  ...productSearchItems,
  ...categorySearchItems,
  ...corePageItems,
];
