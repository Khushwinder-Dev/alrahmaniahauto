"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Wrench,
  Award,
  Zap,
  MessageCircle,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

interface JobOpening {
  id: number;
  title: string;
  department: string;
  experience: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  skills: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 1,
    title: "Master Upholstery & Leather Seat Cover Artisan",
    department: "Upholstery & Interior Tailoring",
    experience: "4+ Years",
    type: "Full-Time",
    location: "Industrial Area 4 & 5, Sharjah",
    description:
      "Lead bespoke pattern cutting, 3D diamond quilting, custom leather stitching, and flawless seat cover fitment for Japanese, European, and American vehicles.",
    requirements: [
      "Extensive experience operating industrial automotive sewing machines and twin-needle stitchers",
      "Proficiency in pattern drafting from original seat foam contours and working with Napa leather & PVC",
      "Deep understanding of safety airbag seams and custom piping craftsmanship",
    ],
    skills: ["Leather Tailoring", "Pattern Drafting", "Diamond Quilting", "Airbag Seam Safety"],
  },
  {
    id: 2,
    title: "Auto Electronics & Lighting Fitment Specialist",
    department: "Smart Tech & Lighting",
    experience: "3+ Years",
    type: "Full-Time",
    location: "Industrial Area 4 & 5, Sharjah",
    description:
      "Expert installation of Android touchscreens, DSP sound amplifiers, dashcams, starlight headliners, and laser LED headlight conversions.",
    requirements: [
      "Comprehensive knowledge of 12V automotive electrical systems, CANBUS decoders, and relays",
      "Clean dashboard disassembly, wire harness looming, and zero-rattle panel reassembly",
      "Experience with fiber optic starlight roof wiring and ambient interior lighting",
    ],
    skills: ["12V Audio Fitment", "Android Screens", "LED Lighting", "Starlight Roofs"],
  },
  {
    id: 3,
    title: "Auto Accessories Showroom Sales Advisor",
    department: "Retail & Wholesale Sales",
    experience: "2+ Years",
    type: "Full-Time",
    location: "Industrial Area 4, Sharjah",
    description:
      "Guide retail walk-in customers and manage wholesale accessory inquiries across WhatsApp, phone, and physical showroom visits.",
    requirements: [
      "Proven sales track record in automotive accessories, car seat covers, or aftermarket styling in UAE",
      "Fluent in English and Arabic or Hindi/Urdu with friendly customer communication skills",
      "Ability to advise customers on vehicle-specific fitment, materials, and custom packages",
    ],
    skills: ["Showroom Sales", "Customer Consultation", "Fitment Guidance", "Order Processing"],
  },
  {
    id: 4,
    title: "E-Commerce & Digital Catalog Specialist",
    department: "Digital Marketing & Operations",
    experience: "2+ Years",
    type: "Full-Time",
    location: "Sharjah / Hybrid",
    description:
      "Manage product listings, inventory catalogs, digital inquiry pipelines, and social media showcase for Al Rahmaniah Auto Accessories.",
    requirements: [
      "Experience managing automotive accessory e-commerce listings, specs, and compatibility tables",
      "Strong coordination with showroom fitters to photograph new installations and customer showcases",
      "Familiarity with digital order workflows, WhatsApp Business catalogs, and customer support",
    ],
    skills: ["Product Catalog", "E-Commerce", "Digital Marketing", "Content Creation"],
  },
];

export default function CareerPageContent() {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("3-5 Years");
  const [applicantNotes, setApplicantNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    "All",
    "Diagnostics & Electronics",
    "Climate & Cooling Systems",
    "Accessories & Interior Styling",
    "Underbody & Safety",
    "Powertrain & Drivetrain",
    "Customer Service & Operations",
  ];

  const filteredJobs =
    activeDepartment === "All"
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((job) => job.department === activeDepartment);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantPhone.trim()) {
      toast.error("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Application received for ${selectedJob?.title}! Our workshop manager will reach out.`
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
      `Hello Al Rahmaniah Auto Workshop HR! I would like to apply for the position: "${jobTitle}". Please let me know how I can submit my CV.`
    );
    return `https://wa.me/971507860161?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Workshop Technicians"
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
            <span>JOIN OUR MASTER CRAFTSMEN TEAM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            Careers at <span className="text-red-600">Al Rahmaniah Auto</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            Elevate your automotive career in Sharjah’s top-equipped workshop. Work alongside certified master mechanics on prestigious vehicle marques with exceptional growth packages.
          </p>
        </div>
      </section>

      {/* 2. Wolmart-Style Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">
            Why Work With Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-900">
            Technician &amp; Staff Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">Competitive Compensation</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Attractive tax-free salary packages with monthly productivity and performance incentives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">State-of-the-Art Tools</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              High-end Bosch diagnostic scanners, hydraulic lifts, computerized AC machines, and laser alignment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">Skill Advancement</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Continuous specialized training on latest European, Japanese, hybrid, and electric vehicle architectures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-zinc-900 mb-2">Full UAE Benefits</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Residence visa sponsorship, comprehensive health insurance, annual paid leave, and flight tickets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Job Openings Directory */}
      <section className="py-16 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-zinc-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">
              Available Vacancies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-900">
              Open Positions in Sharjah
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                  activeDepartment === dept
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white text-zinc-700 hover:text-red-600 border border-zinc-200 shadow-xs"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 hover:border-red-600/70 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">
                    {job.department}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {job.type}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {job.experience}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-600" />
                    <span>Full Time Shift</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-col lg:flex-row gap-3 self-start lg:self-center">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30 cursor-pointer"
                >
                  Apply Now
                </button>
                <a
                  href={getWhatsAppApplyUrl(job.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-100 hover:bg-emerald-600 hover:text-white text-zinc-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-zinc-200 hover:border-emerald-600 inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-zinc-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 text-zinc-900">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                Applying For
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                {selectedJob.department} • {selectedJob.location}
              </p>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Farhan Akhtar"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 987 6543"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. farhan@example.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Automotive Experience
                </label>
                <select
                  value={applicantExperience}
                  onChange={(e) => setApplicantExperience(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                >
                  <option value="1-2 Years">1 - 2 Years</option>
                  <option value="3-5 Years">3 - 5 Years</option>
                  <option value="5-10 Years">5 - 10 Years</option>
                  <option value="10+ Years">10+ Years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Summary of Past Roles &amp; Tools Used
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention previous workshops, vehicle brands (German, Japanese, etc.), and certifications..."
                  value={applicantNotes}
                  onChange={(e) => setApplicantNotes(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-red-600/30"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer border border-zinc-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
