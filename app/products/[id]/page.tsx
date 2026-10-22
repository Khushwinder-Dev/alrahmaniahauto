"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  Share2,
  ChevronRight,
  Check,
  X,
  Link2,
  Heart,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import { getProductById, allProductsData, ProductReview } from "@/data/productsData";
import CommonHeader from "@/components/Common/CommonHeader";
import FaqSection, { FaqItem } from "@/components/Common/FaqSection";
import { useLanguage } from "@/context/LanguageContext";
import {
  FormFieldError,
  getFieldError,
  InputValidationTick,
  isValidText,
} from "@/components/ui/InputValidationTick";
import { VoiceMicButton, VoiceListeningBadge, useVoiceInput } from "@/components/ui/VoiceMicButton";

const PRODUCT_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "How do I choose the correct seat covers and materials for my car?",
    questionAr: "كيف أختار نوع أغطية المقاعد والمواد المناسبة لسيارتي؟",
    answer:
      "Our upholstery specialists review your vehicle make, model, year, and interior color scheme. You can choose from 60+ shades of 3D diamond-stitched PVC leather, premium Napa leatherette, or microfiber suede in person at our Sharjah workshop or via WhatsApp.",
    answerAr:
      "يقوم خبراؤنا بمراجعة نوع سيارتك وموديلها ولون الفرش الداخلي، ويمكنك الاختيار من بين أكثر من 60 لوناً وخامة من الجلد الماسي ثلاثي الأبعاد أو جلد نابا أو الشمواه مباشرة في ورشتنا بالشارقة أو عبر الواتساب.",
  },
  {
    id: 2,
    question: "Are your seat covers and colored seatbelts compliant with vehicle safety inspections?",
    questionAr: "هل أغطية المقاعد وأحزمة الأمان الملونة مطابقة لمعايير الفحص الفني والمرور؟",
    answer:
      "Yes. All seat covers feature specialized burst-seams compatible with side torso airbags, and our colored seatbelts are certified to ECE R16 / FMVSS 209 safety standards with over 25 kN tensile breaking strength.",
    answerAr:
      "نعم. تتم خياطة جميع أغطية المقاعد بدرزات خاصة تفتح بسلاسة مع الوسائد الهوائية (Airbags)، كما أن أحزمة الأمان الملونة معتمدة دولياً ومطابقة لمعايير السلامة بقوة تحمل تفوق 25 كيلو نيوتن.",
  },
  {
    id: 3,
    question: "Do you provide on-site professional installation and fitting in Sharjah?",
    questionAr: "هل تقدمون خدمات التركيب والتفصيل الاحترافي في ورشتكم بالشارقة؟",
    answer:
      "Yes. Our master trimmers provide same-day fitting for seat covers, roof headliners, floor carpeting, and colored seatbelt conversions at our workshop in Industrial Area 4, Sharjah.",
    answerAr:
      "نعم. يقدم فريقنا المتخصص خدمات التركيب في نفس اليوم لأغطية المقاعد وتجديد قماش السقف المتدلي وسجاد الأرضيات وأحزمة الأمان في ورشتنا بالمنطقة الصناعية 4 بالشارقة.",
  },
  {
    id: 4,
    question: "What warranty is included with your seat covers and materials?",
    questionAr: "ما هو الضمان المقدم على المقاعد والأقمشة والتنجيد؟",
    answer:
      "We provide up to a 2-year warranty covering material peeling, UV discoloration, and seam stitching, ensuring lasting durability under extreme UAE climatic conditions.",
    answerAr:
      "نقدم ضماناً يصل إلى سنتين ضد التقشر والبهتان وتلف الدرزات، مما يضمن أعلى درجات التحمل في صيف الإمارات الحار.",
  },
];

export default function ProductDetailsPage() {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const params = useParams();
  const rawId = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : "1";

  const product = useMemo(() => {
    return getProductById(rawId);
  }, [rawId]);

  // Active Image Preview
  const [activeImage, setActiveImage] = useState<string>(product.image);

  useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  // Tab State: Overview, Specifications, Reviews
  const [activeTab, setActiveTab] = useState<"overview" | "specifications" | "reviews">("overview");

  // Interaction States
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Reviews State
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(product.reviews);

  useEffect(() => {
    setReviewsList(product.reviews);
  }, [product]);

  // Related Products
  const relatedProducts = useMemo(() => {
    return allProductsData.filter((p) => p.id !== product.id).slice(0, 3);
  }, [product.id]);

  // New Review Form State
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const voice = useVoiceInput({
    isArabic,
    onResult: (fieldName, text) => {
      setNewReview((prev) => ({ ...prev, [fieldName]: text }));
      if (errors[fieldName]) {
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      }
    },
  });

  // Social Share Handlers
  const handleSocialShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "https://alrahmaniahauto.com";
    const text = product.name || "Check out this product from Al Rahmaniah Auto Accessories";

    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=500");
    }
  };

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://alrahmaniahauto.com";
    navigator.clipboard?.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success("Added to your wishlist!");
    } else {
      toast("Removed from your wishlist");
    }
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const nameErr = getFieldError("name", newReview.name, isArabic);
    if (nameErr) newErrors.name = nameErr;

    const commentErr = getFieldError("comment", newReview.comment, isArabic);
    if (commentErr) newErrors.comment = commentErr;

    if (!newReview.rating || newReview.rating < 1) {
      newErrors.rating = isArabic ? "يرجى اختيار التقييم." : "Please select a rating.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const createdReview: ProductReview = {
      id: `rev-${Date.now()}`,
      author: newReview.name,
      initials: newReview.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2),
      date: "Today",
      rating: newReview.rating,
      verified: true,
      comment: newReview.comment,
    };

    setReviewsList([createdReview, ...reviewsList]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setIsWriteReviewOpen(false);
    toast.success("Thank you! Your verified review has been submitted.");
  };

  const scrollToSection = (sectionId: "overview" | "specifications" | "reviews") => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const displayedReviews = showAllReviews ? reviewsList : reviewsList.slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${product.name} (Item #${product.id}). Please share pricing, availability, and fitting details.`
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-[40px] md:pb-[56px] lg:pb-[72px]">
      {/* ── Top Hero Banner ────────────────────────────────── */}
      <CommonHeader
        title={product.name || "Product Details"}
        breadcrumb="Products"
        imagePath="/banners/Product_.png"
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* ===================== BREADCRUMBS ===================== */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/products" className="hover:text-red-600 transition-colors">
            Products & Accessories
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">{product.category}</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* ===================== MAIN PRODUCT HERO (2-COL) ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Images Container & Thumbnails */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="w-full aspect-[4/3] sm:aspect-square bg-[#f8f9fa] rounded-3xl p-6 sm:p-10 flex items-center justify-center relative overflow-hidden group border border-gray-100 shadow-sm">
              <Image
                src={activeImage}
                alt={product.name}
                width={700}
                height={700}
                priority
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Wishlist Button */}
              <button
                onClick={handleToggleWishlist}
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 transition-all shadow-md hover:scale-110 cursor-pointer"
                title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? "fill-red-600 text-red-600" : ""}`}
                />
              </button>

              {/* Original Materials Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold rounded-full border border-white/20">
                💎 100% Original
              </div>
            </div>

            {/* Thumbnail Carousel / Selector */}
            {product.additionalImages && product.additionalImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {product.additionalImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer bg-[#f8f9fa] p-1.5 ${
                      activeImage === img
                        ? "border-red-600 shadow-md ring-2 ring-red-600/20"
                        : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - thumbnail ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Details & Purchase / Inquiry CTAs */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Category Tag & Share */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-extrabold text-red-600 tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
                {product.category}
              </span>

              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-600 transition-colors cursor-pointer"
                title="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating Stars & Count */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-900">{product.rating}</span>
              <span className="text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price Badge */}
            {product.price && (
              <div className="mb-5 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  (VAT Inclusive / Wholesale & Retail Available)
                </span>
              </div>
            )}

            {/* Short Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Key Quality Highlights */}
            <div className="bg-[#fcf8f8] border border-red-100 rounded-2xl p-4 mb-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>100% Original High-Durability Materials</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>UV-Stabilized & Heat-Resistant for UAE Summer</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Airbag Seam Safety Certified & Precision Contoured</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Same-Day Professional Fitting at Sharjah Workshop</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              {/* WhatsApp Inquiry Button */}
              <a
                href={`https://api.whatsapp.com/send?phone=971558674927&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
              >
                <span>Order / Inquire on WhatsApp</span>
              </a>

              {/* Call Direct */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+971558674927"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-zinc-900 hover:bg-black text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+971 55 867 4927</span>
                </a>
                <a
                  href="tel:0557502083"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gray-300 hover:border-gray-500 text-gray-800 font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>055-7502083</span>
                </a>
              </div>

              {/* Book Fitting Button */}
              <Link
                href="/booking"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Workshop Fitting Appointment</span>
              </Link>
            </div>

            {/* Workshop Address Card */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 block">Al Rahmaniah Auto Accessories</span>
                <span>Industrial Area 4, Sharjah, UAE</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Open Daily
              </span>
            </div>
          </div>
        </div>

        {/* ===================== TAB NAVIGATION BAR ===================== */}
        <div className="mt-14 border-b border-gray-200">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("overview")}
              className={`pb-3 text-sm font-bold transition-colors cursor-pointer relative ${
                activeTab === "overview"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Overview & Features
            </button>
            <button
              onClick={() => scrollToSection("specifications")}
              className={`pb-3 text-sm font-bold transition-colors cursor-pointer relative ${
                activeTab === "specifications"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className={`pb-3 text-sm font-bold transition-colors cursor-pointer relative ${
                activeTab === "reviews"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Customer Reviews ({reviewsList.length})
            </button>
          </div>
        </div>

        {/* ===================== OVERVIEW SECTION ===================== */}
        <section id="overview" className="py-10 border-b border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
            {product.overviewTitle || "Overview & Material Excellence"}
          </h2>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed max-w-4xl mb-8">
            {product.longDescription ? (
              product.longDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{product.description}</p>
            )}
          </div>

          {/* Overview Highlights Bullet List */}
          {product.overviewContent && product.overviewContent.length > 0 && (
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 max-w-4xl">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.overviewContent.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                    <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ===================== SPECIFICATIONS SECTION ===================== */}
        <section id="specifications" className="py-10 border-b border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="bg-[#f9fafb] rounded-2xl p-6 border border-gray-100 space-y-4">
              {product.specifications.column1.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-gray-200/60 last:border-0"
                >
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-right max-w-[60%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="bg-[#f9fafb] rounded-2xl p-6 border border-gray-100 space-y-4">
              {product.specifications.column2.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-gray-200/60 last:border-0"
                >
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-right max-w-[60%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== RATINGS & REVIEWS SECTION ===================== */}
        <section id="reviews" className="py-10 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Customer Reviews
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Verified feedback from vehicle owners & workshops in the UAE
              </p>
            </div>
            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer border border-red-200 bg-red-50 px-3.5 py-2 rounded-full"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (4 cols): Rating Score & Star Bars */}
            <div className="lg:col-span-4 flex flex-col bg-[#f9fafb] p-6 rounded-2xl border border-gray-100">
              <div className="text-6xl font-extrabold text-gray-900 leading-none mb-2">
                {product.rating}
              </div>

              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-xs text-gray-500 font-medium mb-6">
                Based on {product.reviewsCount} verified reviews
              </p>

              {/* Star Distribution Progress Bars */}
              <div className="space-y-2 max-w-xs">
                {product.ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-6 text-gray-600 font-medium">{item.stars} ★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-gray-400 font-medium">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (8 cols): Customer Reviews */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              {displayedReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#f9fafb] rounded-2xl p-5 sm:p-6 border border-gray-100 transition-all hover:border-gray-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    {review.verified && (
                      <span className="border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
                        VERIFIED CLIENT
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                    {review.comment}
                  </p>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-none">
                        {review.author}
                      </h4>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {reviewsList.length > 3 && (
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
                  >
                    {showAllReviews ? "Show Less" : "See More Reviews"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===================== RELATED PRODUCTS ===================== */}
        <section className="py-12 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Related Products & Accessories
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Explore more automotive interior accessories from our collection
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-4 flex flex-col group hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-square bg-[#f8f9fa] rounded-xl overflow-hidden mb-3 p-3 flex items-center justify-center">
                  <Link href={`/products/${rel.id}`} className="w-full h-full flex items-center justify-center">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      width={200}
                      height={200}
                      className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-full uppercase">
                    {rel.category}
                  </span>
                  {rel.price && (
                    <span className="text-xs font-bold text-gray-900">{rel.price}</span>
                  )}
                </div>
                <Link href={`/products/${rel.id}`} className="block font-bold text-sm text-gray-900 hover:text-red-600 transition-colors line-clamp-1 mb-1">
                  {rel.name}
                </Link>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                  {rel.description}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/products/${rel.id}`}
                    className="text-xs font-bold text-gray-700 hover:text-red-600"
                  >
                    View Details →
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send?phone=971558674927&text=${encodeURIComponent(
                      `Hello Al Rahmaniah Auto Accessories, I am inquiring about: ${rel.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ══ FAQ SECTION ══ */}
      <FaqSection
        faqs={PRODUCT_FAQS}
        isArabic={isArabic}
        subtitle="Common questions regarding automotive interior materials, fitment warranties, and workshop care in Sharjah."
        subtitleAr="أسئلة شائعة حول تنجيد السيارات وتفصيل المقاعد وضمان المواد وخدمات ورشة الشارقة."
      />

      {/* ===================== WRITE REVIEW MODAL ===================== */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setIsWriteReviewOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-bold font-display text-gray-900 mb-1">
              Write a Review
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Share your experience with {product.name}
            </p>

            <form onSubmit={handleAddReviewSubmit} noValidate className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold mb-1 transition-colors ${
                  errors.rating ? "text-red-500" : "text-gray-700"
                }`}>
                  Rating *
                </label>
                <div className="flex items-center gap-1.5 text-amber-500 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => {
                        setNewReview({ ...newReview, rating: star });
                        if (errors.rating) setErrors((prev) => ({ ...prev, rating: "" }));
                      }}
                      className="p-0.5 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newReview.rating
                            ? "fill-amber-500 text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    {newReview.rating} out of 5
                  </span>
                </div>
                <FormFieldError error={errors.rating} className="px-1" />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 transition-colors ${
                  errors.name ? "text-red-500" : "text-gray-700"
                }`}>
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Tariq Al Hammadi"
                    value={newReview.name}
                    onFocus={() => voice.setFocusedField("name")}
                    onBlur={() => voice.setFocusedField(null)}
                    onChange={(e) => {
                      setNewReview({ ...newReview, name: e.target.value });
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    className={`w-full ${isArabic ? "pl-20 pr-4 text-right" : "pr-20 pl-4 text-left"} py-2.5 rounded-full text-xs text-gray-800 placeholder:text-gray-400 outline-none transition-all ${
                      errors.name
                        ? "bg-white border-2 border-red-500 ring-2 ring-red-500/15 focus:border-red-500"
                        : "bg-gray-50 border border-gray-200 focus:border-red-600 focus:bg-white"
                    }`}
                  />
                  <div className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-1 z-10 ${isArabic ? "left-3" : "right-3"}`}>
                    {voice.isFieldActive("name") && (
                      <VoiceMicButton
                        isListening={voice.listeningField === "name"}
                        onClick={() => voice.toggleListening("name", "text")}
                        isArabic={isArabic}
                        size="sm"
                      />
                    )}
                    <InputValidationTick
                      isValid={isValidText(newReview.name, 2) && !errors.name}
                      isArabic={isArabic}
                      className="!static !translate-y-0 !left-auto !right-auto"
                    />
                  </div>
                </div>
                {voice.listeningField === "name" && <VoiceListeningBadge isArabic={isArabic} />}
                <FormFieldError error={errors.name} className="px-1" />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 transition-colors ${
                  errors.comment ? "text-red-500" : "text-gray-700"
                }`}>
                  Your Review *
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Write details about the build quality, materials, fitment, and comfort..."
                    value={newReview.comment}
                    onFocus={() => voice.setFocusedField("comment")}
                    onBlur={() => voice.setFocusedField(null)}
                    onChange={(e) => {
                      setNewReview({ ...newReview, comment: e.target.value });
                      if (errors.comment) setErrors((prev) => ({ ...prev, comment: "" }));
                    }}
                    className={`w-full px-4 ${isArabic ? "pl-12 text-right" : "pr-12 text-left"} py-3 rounded-2xl text-xs text-gray-800 placeholder:text-gray-400 outline-none transition-all resize-none ${
                      errors.comment
                        ? "bg-white border-2 border-red-500 ring-2 ring-red-500/15 focus:border-red-500"
                        : "bg-gray-50 border border-gray-200 focus:border-red-600 focus:bg-white"
                    }`}
                  />
                  <div className={`absolute top-3 z-10 ${isArabic ? "left-3" : "right-3"}`}>
                    {voice.isFieldActive("comment") && (
                      <VoiceMicButton
                        isListening={voice.listeningField === "comment"}
                        onClick={() => voice.toggleListening("comment", "textarea")}
                        isArabic={isArabic}
                        size="sm"
                      />
                    )}
                  </div>
                </div>
                {voice.listeningField === "comment" && <VoiceListeningBadge isArabic={isArabic} />}
                <FormFieldError error={errors.comment} className="px-1" />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-full shadow-md transition-all cursor-pointer"
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
