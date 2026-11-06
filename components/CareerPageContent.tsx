"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Award,
  Zap,
  MessageCircle,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";

interface JobOpening {
  id: number;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  experience: string;
  experienceAr: string;
  type: string;
  typeAr: string;
  location: string;
  locationAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
  skills: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 1,
    title: "Master Upholstery & Leather Seat Cover Artisan",
    titleAr: "فني ومعلم تنجيد وتفصيل مقاعد جلدية أول",
    department: "Upholstery & Interior Tailoring",
    departmentAr: "قسم التنجيد والتفصيل الداخلي",
    experience: "4+ Years",
    experienceAr: "4+ سنوات خبرة",
    type: "Full-Time",
    typeAr: "دوام كامل",
    location: "Industrial Area 4 & 5, Sharjah",
    locationAr: "المنطقة الصناعية 4 و 5، الشارقة",
    description:
      "Lead bespoke pattern cutting, 3D diamond quilting, custom leather stitching, and flawless seat cover fitment for Japanese, European, and American vehicles.",
    descriptionAr:
      "قيادة عمليات قص الباترون بالليزر، والخياطة الماسية 3D، وتفصيل وتلبيس مقاعد السيارات اليابانية والأوروبية والأمريكية بأعلى درجات الدقة.",
    requirements: [
      "Extensive experience operating industrial automotive sewing machines and twin-needle stitchers",
      "Proficiency in pattern drafting from original seat foam contours and working with Napa leather & PVC",
      "Deep understanding of safety airbag seams and custom piping craftsmanship",
    ],
    requirementsAr: [
      "خبرة واسعة في استخدام ماكينات الخياطة الصناعية للسيارات وخياطة الإبرة المزدوجة",
      "إتقان أخذ مقاسات وتفصيل قوالب المقاعد والتعامل مع جلود النابا والـ PVC",
      "فهم عميق لفتحات وخياطة أمان الوسائد الهوائية (الإيرباج)",
    ],
    skills: ["Leather Tailoring", "Pattern Drafting", "Diamond Quilting", "Airbag Seam Safety"],
  },
  {
    id: 2,
    title: "Auto Electronics & Lighting Fitment Specialist",
    titleAr: "فني إلكترونيات وإضاءات ليزر وشاشات سيارات",
    department: "Smart Tech & Lighting",
    departmentAr: "قسم التقنيات الذكية والإضاءة",
    experience: "3+ Years",
    experienceAr: "3+ سنوات خبرة",
    type: "Full-Time",
    typeAr: "دوام كامل",
    location: "Industrial Area 4 & 5, Sharjah",
    locationAr: "المنطقة الصناعية 4 و 5، الشارقة",
    description:
      "Expert installation of Android touchscreens, DSP sound amplifiers, dashcams, starlight headliners, and laser LED headlight conversions.",
    descriptionAr:
      "تركيب وتوصيل شاشات الأندرويد، ومضخمات الصوت DSP، وسقف النجوم (الألياف الضوئية)، وعدسات وإضاءات الليزر LED للسيارات.",
    requirements: [
      "Comprehensive knowledge of 12V automotive electrical systems, CANBUS decoders, and relays",
      "Clean dashboard disassembly, wire harness looming, and zero-rattle panel reassembly",
      "Experience with fiber optic starlight roof wiring and ambient interior lighting",
    ],
    requirementsAr: [
      "معرفة شاملة بكهرباء السيارات 12 فولت ومحولات CANBUS",
      "فك وتركيب الديكورات الداخلية بدقة ونظافة دون إحداث أي أصوات اهتزاز",
      "خبرة في تمديد وتوصيل ألياف أسقف النجوم والإضاءات المحيطية",
    ],
    skills: ["12V Audio Fitment", "Android Screens", "LED Lighting", "Starlight Roofs"],
  },
  {
    id: 3,
    title: "Auto Accessories Showroom Sales Advisor",
    titleAr: "مستشار مبيعات معرض زينة وإكسسوارات سيارات",
    department: "Retail & Wholesale Sales",
    departmentAr: "قسم مبيعات المعرض والجملة",
    experience: "2+ Years",
    experienceAr: "2+ سنوات خبرة",
    type: "Full-Time",
    typeAr: "دوام كامل",
    location: "Industrial Area 4, Sharjah",
    locationAr: "المنطقة الصناعية 4، الشارقة",
    description:
      "Guide retail walk-in customers and manage wholesale accessory inquiries across WhatsApp, phone, and physical showroom visits.",
    descriptionAr:
      "استقبال عملاء المعرض وتقديم الاستشارات حول خامات التنجيد والدعاسات وإدارة طلبات العملاء عبر الواتساب والمكالمات.",
    requirements: [
      "Proven sales track record in automotive accessories, car seat covers, or aftermarket styling in UAE",
      "Fluent in English and Arabic with friendly customer communication skills",
      "Ability to advise customers on vehicle-specific fitment, materials, and custom packages",
    ],
    requirementsAr: [
      "خبرة سابقة في مبيعات زينة وإكسسوارات وتنجيد السيارات في الإمارات",
      "إجادة اللغتين العربية والإنجليزية مع مهارات تواصل ممتازة",
      "القدرة على مساعدة العميل في اختيار الألوان والخامات المتناسقة لسيارته",
    ],
    skills: ["Showroom Sales", "Customer Consultation", "Fitment Guidance", "Order Processing"],
  },
  {
    id: 4,
    title: "E-Commerce & Digital Catalog Specialist",
    titleAr: "مسؤول الكتالوج الرقمي ومبيعات المتجر",
    department: "Digital Marketing & Operations",
    departmentAr: "قسم التسويق والعمليات الرقمية",
    experience: "2+ Years",
    experienceAr: "2+ سنوات خبرة",
    type: "Full-Time",
    typeAr: "دوام كامل",
    location: "Sharjah / Hybrid",
    locationAr: "الشارقة / دوام مرن",
    description:
      "Manage product listings, inventory catalogs, digital inquiry pipelines, and social media showcase for Al Rahmaniah Auto Accessories.",
    descriptionAr:
      "إدارة كتالوج المنتجات والإكسسوارات وتحديث المخزون وقنوات الطلبات الرقمية على منصات التواصل والمتجر.",
    requirements: [
      "Experience managing automotive accessory e-commerce listings, specs, and compatibility tables",
      "Strong coordination with showroom fitters to photograph new installations and customer showcases",
      "Familiarity with digital order workflows, WhatsApp Business catalogs, and customer support",
    ],
    requirementsAr: [
      "خبرة في إدارة كتالوجات إكسسوارات السيارات وتوافق الموديلات",
      "التنسيق مع الفنيين بالمعرض لتصوير المشاريع المنجزة ونشرها",
      "إتقان كتالوج واتساب للأعمال وخدمة العملاء الرقمية",
    ],
    skills: ["Product Catalog", "E-Commerce", "Digital Marketing", "Content Creation"],
  },
];

export default function CareerPageContent() {
  const { isArabic } = useLanguage();
  const [activeDepartment, setActiveDepartment] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantNotes, setApplicantNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    { en: "All", ar: "جميع الأقسام" },
    { en: "Upholstery & Interior Tailoring", ar: "التنجيد والتفصيل الداخلي" },
    { en: "Smart Tech & Lighting", ar: "التقنيات الذكية والإضاءة" },
    { en: "Retail & Wholesale Sales", ar: "مبيعات المعرض والجملة" },
    { en: "Digital Marketing & Operations", ar: "التسويق الرقمي" },
  ];

  const filteredJobs =
    activeDepartment === "All"
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((job) => job.department === activeDepartment);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantPhone.trim()) {
      toast.error(isArabic ? "يرجى كتابة اسمك ورقم هاتفك." : "Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        isArabic
          ? `تم استلام طلب التقديم على وظيفة ${selectedJob?.titleAr || selectedJob?.title}! سيتواصل معك فريق الموارد البشرية.`
          : `Application received for ${selectedJob?.title}! Our operations team will reach out.`
      );
      setSelectedJob(null);
      setApplicantName("");
      setApplicantPhone("");
      setApplicantEmail("");
      setApplicantNotes("");
    }, 1200);
  };

  const getWhatsAppApplyUrl = (jobTitle: string) => {
    const text = encodeURIComponent(
      isArabic
        ? `مرحباً الرحمانية لزينة السيارات - قسم الموارد البشرية! أود التقديم لوظيفة: "${jobTitle}". يرجى إفادتي بطريقة إرسال السيرة الذاتية.`
        : `Hello Al Rahmaniah Auto Accessories HR! I would like to apply for the position: "${jobTitle}". Please let me know how I can submit my CV.`
    );
    return `https://wa.me/971507860161?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900" dir={isArabic ? "rtl" : "ltr"}>
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

        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>{isArabic ? "انضم إلى فريق الحرفيين المتميزين" : "JOIN OUR MASTER CRAFTSMEN TEAM"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            <span>{isArabic ? "الوظائف في " : "Careers at "}</span>
            <span className="text-red-600">{isArabic ? "الرحمانية للسيارات" : "Al Rahmaniah Auto"}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            {isArabic
              ? "طور مسيرتك المهنية في كبرى معارض ومراكز تفصيل وتنجيد السيارات بالشارقة، واعمل إلى جانب أمهر الفنيين في بيئة داعمة ومحفزة."
              : "Elevate your automotive career in Sharjah’s premier auto accessories and upholstery studio. Work alongside certified master craftsmen on bespoke styling projects with exceptional growth packages."}
          </p>
        </div>
      </section>

      {/* 2. Benefits Grid */}
      <section className="py-16 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14">
        <div className="text-center mb-12">
          <div className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">
            {isArabic ? "مزايا العمل معنا" : "Why Work With Us"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-900">
            {isArabic ? "مزايا الحرفيين والموظفين" : "Craftsmen & Staff Benefits"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">
              {isArabic ? "رواتب وحوافز مجزية" : "Competitive Compensation"}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {isArabic
                ? "رواتب مجزية مع حوافز ومكافآت شهرية مرتبطة بالإنتاجية والإتقان الحرفي."
                : "Attractive salary packages with monthly productivity and performance incentives."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">
              {isArabic ? "أحدث المعدات والماكينات" : "State-of-the-Art Tools"}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {isArabic
                ? "طاولات قص ليزر وماكينات خياطة صناعية حديثة وأحدث أجهزة فحص الإلكترونيات."
                : "Computerized laser cutting tables, industrial automated sewing machines, and specialized fitting bays."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">
              {isArabic ? "تطوير وصقل المهارات" : "Skill Advancement"}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {isArabic
                ? "تدريب مستمر على تقنيات تنجيد جلود النابا، أسقف النجوم، وأحدث شاشات السيارات."
                : "Continuous specialized training on precision upholstery, leathercraft, automotive electronics, and bespoke restyling."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">
              {isArabic ? "مزايا واستقرار قانوني كامل" : "Full UAE Benefits"}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {isArabic
                ? "تأشيرة إقامة عمل، تأمين صحي شامل، إجازات سنوية مدفوعة وتذاكر سفر."
                : "Residence visa sponsorship, comprehensive health insurance, annual paid leave, and flight tickets."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Job Openings Directory */}
      <section className="py-16 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 border-t border-zinc-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">
              {isArabic ? "الوظائف الشاغرة المتاحة" : "Available Vacancies"}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-900">
              {isArabic ? "شواغر حالية في الشارقة" : "Open Positions in Sharjah"}
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.en}
                onClick={() => setActiveDepartment(dept.en)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDepartment === dept.en
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white text-zinc-700 hover:text-red-600 hover:bg-zinc-100 border border-zinc-200 shadow-xs"
                }`}
              >
                {isArabic ? dept.ar : dept.en}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job) => {
            const title = isArabic ? job.titleAr : job.title;
            const dept = isArabic ? job.departmentAr : job.department;
            const exp = isArabic ? job.experienceAr : job.experience;
            const typ = isArabic ? job.typeAr : job.type;
            const loc = isArabic ? job.locationAr : job.location;
            const desc = isArabic ? job.descriptionAr : job.description;
            const reqs = isArabic ? job.requirementsAr : job.requirements;

            return (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 hover:border-red-600/70 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">
                        {dept}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700">
                        {typ}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900">
                      {title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>{loc}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>{exp}</span>
                    </div>
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {desc}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2">
                      {isArabic ? "أهم المتطلبات والخبرات:" : "Key Requirements:"}
                    </h4>
                    <ul className="space-y-1.5">
                      {reqs.map((req, i) => (
                        <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-3 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-4 items-center justify-between">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 cursor-pointer"
                  >
                    {isArabic ? "تقديم طلب التوظيف الآن" : "Apply For Position"}
                  </button>

                  <a
                    href={getWhatsAppApplyUrl(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isArabic ? "إرسال السيرة الذاتية عبر واتساب" : "Send CV via WhatsApp"}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-zinc-200 shadow-2xl relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-zinc-400 hover:text-zinc-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                {isArabic ? "طلب توظيف" : "Job Application"}
              </span>
              <h3 className="text-xl font-bold font-display text-zinc-900 mt-1">
                {isArabic ? selectedJob.titleAr : selectedJob.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                {isArabic ? "الشارقة، الإمارات" : "Sharjah, UAE"} • {isArabic ? selectedJob.experienceAr : selectedJob.experience}
              </p>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  {isArabic ? "الاسم الكامل" : "Full Name"} *
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm focus:border-red-600 outline-none"
                  placeholder={isArabic ? "اسمك الثلاثي" : "Your full name"}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  {isArabic ? "رقم الهاتف / واتساب" : "Phone / WhatsApp Number"} *
                </label>
                <input
                  type="tel"
                  required
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm focus:border-red-600 outline-none"
                  placeholder="+971 50 ..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  {isArabic ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <input
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm focus:border-red-600 outline-none"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  {isArabic ? "نبذة عن خبراتك وسنوات العمل" : "Summary of Experience & Previous Workshops"}
                </label>
                <textarea
                  rows={3}
                  value={applicantNotes}
                  onChange={(e) => setApplicantNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-200 text-sm focus:border-red-600 outline-none resize-none"
                  placeholder={isArabic ? "اذكر أنواع السيارات والخامات التي تجيد العمل بها..." : "Mention brands, materials, or equipment you are proficient in..."}
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-red-600/30 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting
                    ? (isArabic ? "جاري الإرسال..." : "Submitting...")
                    : (isArabic ? "إرسال طلب التوظيف" : "Submit Application")}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-zinc-200 cursor-pointer"
                >
                  {isArabic ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
