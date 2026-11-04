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
    title: "Senior Automotive Diagnostic Specialist",
    department: "Diagnostics & Electronics",
    experience: "5+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Lead computerized engine diagnostics, electrical fault isolation, and ECU calibrations for luxury German (Mercedes, BMW, Audi, Porsche) and Japanese vehicles.",
    requirements: [
      "Mastery of Autel MaxiSys, Bosch OBD-II, and manufacturer-specific diagnostic tools",
      "Deep understanding of CAN bus networks, sensor telemetry, and wiring schematics",
      "Ability to interpret live engine data streams and diagnose complex intermittent faults",
    ],
    skills: ["ECU Diagnostics", "Wiring Systems", "Engine Management", "Scan Tools"],
  },
  {
    id: 2,
    title: "Master Auto AC & Climate Control Technician",
    department: "Climate & Cooling Systems",
    experience: "4+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Perform high-precision automotive air conditioning diagnostics, refrigerant gas recovery & recharge, compressor overhauls, and climate system flushes.",
    requirements: [
      "Expert knowledge of R134a and R1234yf refrigerant recovery machines",
      "Proven experience in dashboard removal, evaporator core replacements & condenser checks",
      "Deep expertise in diagnosing compressor clutches, expansion valves, and blower motors",
    ],
    skills: ["AC Recovery", "Compressor Overhaul", "Leak Detection", "Cooling Systems"],
  },
  {
    id: 3,
    title: "Custom Upholstery & Leather Seat Artisan",
    department: "Accessories & Interior Styling",
    experience: "3+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Craft bespoke leather seat covers, 3D diamond quilted patterns, steering wheel wraps, and roof headliners using premium German and Italian materials.",
    requirements: [
      "Expertise in sewing machine operation, pattern drafting, and custom foam sculpting",
      "Precision stitch alignment for diamond quilts, double stitching, and custom piping",
      "Experience in seat disassembly, airbag seam safety integration, and reinstallation",
    ],
    skills: ["Leather Crafting", "Diamond Quilting", "Pattern Cutting", "Interior Fitment"],
  },
  {
    id: 4,
    title: "Brake & Suspension Specialist Mechanic",
    department: "Underbody & Safety",
    experience: "4+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Overhaul high-performance brake calipers, skim brake disc rotors on computerized lathes, replace suspension bushings, and perform 3D laser wheel alignments.",
    requirements: [
      "Proficient in computerized on-car and bench rotor skimming lathes",
      "Comprehensive knowledge of hydraulic ABS brake bleeding and electronic parking brakes",
      "Expert in diagnosing suspension clunks, ball joints, control arms, and shock absorbers",
    ],
    skills: ["Brake Overhaul", "Disc Skimming", "Laser Alignment", "Suspension Bushings"],
  },
  {
    id: 5,
    title: "Automatic Transmission & Gearbox Technician",
    department: "Powertrain & Drivetrain",
    experience: "5+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Specialized diagnosis, fluid exchanges, valve body overhauls, and mechatronic calibrations on automatic, dual-clutch (DCT), and CVT transmissions.",
    requirements: [
      "Experience diagnosing transmission slippage, harsh shifts, and solenoid errors",
      "Hands-on expertise with fluid flush machines and mechatronics reprogramming",
      "Strong background in torque converters, transfer cases, and differential gears",
    ],
    skills: ["Transmission Flushes", "Mechatronics", "Clutch Rebuilds", "Drivetrain"],
  },
  {
    id: 6,
    title: "Automotive Service Advisor & Receptionist",
    department: "Customer Service & Operations",
    experience: "2+ Years",
    type: "Full-Time",
    location: "Industrial Area 5, Sharjah",
    description:
      "Warmly receive car owners, conduct vehicle intake checkups, explain transparent repair estimates, and coordinate job progression with the workshop floor.",
    requirements: [
      "Excellent communication skills in English (Arabic is a significant advantage)",
      "Technical understanding of vehicle repair procedures to explain clearly to clients",
      "Proactive, honest customer-first attitude with strong organizational skills",
    ],
    skills: ["Customer Care", "Job Estimation", "Workshop Software", "English / Arabic"],
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
