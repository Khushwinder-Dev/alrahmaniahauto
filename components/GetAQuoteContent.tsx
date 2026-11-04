"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import FaqAccordionItem from "@/components/Common/FaqAccordionItem";
import { AUTOMOTIVE_FAQS } from "@/components/Common/FaqSection";
import {
  FloatInput,
  FloatTextarea,
  SearchableSelect,
  useVoiceInput,
  SearchableSelectOption,
} from "@/components/ui/FloatField";

const VEHICLE_MAKES = [
  "Toyota",
  "Nissan",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Lexus",
  "Ford",
  "Chevrolet",
  "Hyundai",
  "Kia",
  "Porsche",
  "Land Rover / Range Rover",
  "Volkswagen",
  "Honda",
  "Mitsubishi",
  "Other",
];

const SERVICE_OPTIONS = [
  {
    id: "seat-covers",
    title: "Custom Car Seat Covers",
    desc: "3D diamond quilted, perforated Napa leather, suede & sport custom tailoring",
    tag: "Best Seller",
  },
  {
    id: "floor-mats",
    title: "7D / 5D Luxury Floor Mats",
    desc: "Full cabin & trunk all-weather waterproof custom molded protection",
    tag: "All-Weather",
  },
  {
    id: "colored-seatbelts",
    title: "Custom Colored Seatbelts",
    desc: "FIA-certified high-tensile safety webbing in Racing Red, Yellow, Blue & Neon",
    tag: "Custom Styling",
  },
  {
    id: "roof-headliner",
    title: "Starlight Headliner & Roof Suede",
    desc: "Rolls-Royce style optic fiber twinkling stars & Alcantara headliner revamp",
    tag: "VIP Luxury",
  },
  {
    id: "car-electronics",
    title: "Car Electronics & Android Screens",
    desc: "Touchscreens, Apple CarPlay / Android Auto, DSP amplifiers & dashcams",
    tag: "Smart Tech",
  },
  {
    id: "led-lighting",
    title: "Laser LED Headlamps & Ambient Lights",
    desc: "High-lumen laser LED conversion kits & app-controlled cabin ambient strips",
    tag: "Ultra Bright",
  },
  {
    id: "car-care-styling",
    title: "Styling Kits & Protection Film",
    desc: "Window tints, ceramic surface coatings, sunshades & aero body accessories",
    tag: "Protection",
  },
  {
    id: "wholesale-accessories",
    title: "Wholesale & Bulk Accessories",
    desc: "B2B shop supplies, commercial fleet accessories & GCC export orders",
    tag: "Wholesale",
  },
];


const VEHICLE_MAKE_OPTIONS: SearchableSelectOption[] = VEHICLE_MAKES.map((m) => ({
  value: m,
  label: m,
}));

const EMIRATE_OPTIONS: SearchableSelectOption[] = [
  { value: "Sharjah", label: "Sharjah", labelAr: "الشارقة" },
  { value: "Dubai", label: "Dubai", labelAr: "دبي" },
  { value: "Abu Dhabi", label: "Abu Dhabi", labelAr: "أبوظبي" },
  { value: "Ajman", label: "Ajman", labelAr: "عجمان" },
  { value: "RAK", label: "Ras Al Khaimah", labelAr: "رأس الخيمة" },
  { value: "Fujairah", label: "Fujairah", labelAr: "الفجيرة" },
  { value: "UAQ", label: "Umm Al Quwain", labelAr: "أم القيوين" },
];

export default function GetAQuoteContent() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "oil-service",
  ]);
  const [make, setMake] = useState("Toyota");
  const [modelYear, setModelYear] = useState("");
  const [emirate, setEmirate] = useState("Sharjah");
  const [urgency, setUrgency] = useState("flexible");
  const [serviceLocation, setServiceLocation] = useState("workshop");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    additionalNotes: "",
  });

  const voice = useVoiceInput({
    onResult: (fieldName: string, text: string) => {
      if (fieldName === "modelYear") {
        setModelYear(text);
      } else if (fieldName === "additionalNotes") {
        setFormData((prev) => ({
          ...prev,
          additionalNotes: prev.additionalNotes.trim() ? `${prev.additionalNotes.trim()} ${text}` : text,
        }));
      } else {
        setFormData((prev) => ({ ...prev, [fieldName]: text }));
      }
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length === 1) {
        toast.error("Please select at least one service.");
        return;
      }
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(", ");

    const text = `*New Quote Request - Al Rahmaniah Auto*
• Vehicle: ${make} (${modelYear || "Not specified"})
• Emirate: ${emirate}
• Services Required: ${serviceNames}
• Preferred Mode: ${serviceLocation === "workshop" ? "Workshop Drop-off" : "Pickup & Delivery"}
• Customer Name: ${formData.name || "Customer"}
• Phone: ${formData.phone || "Not specified"}
• Notes: ${formData.additionalNotes || "None"}`;

    return `https://wa.me/971507860161?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Quote request submitted! Our service team is preparing your estimate.");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* 1. Header Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex flex-col justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Al Rahmaniah Workshop"
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
            <span>FAST TRANSPARENT ESTIMATES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            Request an <span className="text-red-600">Instant Quote</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
            Get an upfront, honest price estimate for custom leather seat covers, 7D floor mats, lighting upgrades, or bulk automotive accessories. 100% genuine quality with precision vehicle fitment.
          </p>
        </div>
      </section>

      {/* 2. Main Interactive Form Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-zinc-900">
                    Quote Request Received!
                  </h2>
                  <p className="text-zinc-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="text-zinc-900 font-bold">{formData.name}</span>! Our auto styling and fitment specialist at Al Rahmaniah Auto is reviewing your vehicle details. We will send your transparent price estimate shortly.
                  </p>
                  
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={getWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold rounded-full text-xs uppercase tracking-widest transition-all border border-zinc-200"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Step 1: Vehicle Information */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-100">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-xl font-display font-bold text-zinc-900">
                        Vehicle Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <SearchableSelect
                          value={make}
                          options={VEHICLE_MAKE_OPTIONS}
                          label="Vehicle Make"
                          required
                          onChange={(val) => setMake(val)}
                        />
                      </div>

                      <div>
                        <FloatInput
                          type="text"
                          name="modelYear"
                          value={modelYear}
                          label="Model & Year (e.g. Land Cruiser 2023)"
                          isListening={voice.listeningField === "modelYear"}
                          onVoiceToggle={() => voice.toggleListening("modelYear", "text")}
                          onChange={(e) => setModelYear(e.target.value)}
                        />
                      </div>

                      <div>
                        <SearchableSelect
                          value={emirate}
                          options={EMIRATE_OPTIONS}
                          label="Plate Emirate"
                          onChange={(val) => setEmirate(val)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Select Services */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-100">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-zinc-900">
                          Select Required Services
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          Choose one or multiple services to bundle into your quote
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SERVICE_OPTIONS.map((srv) => {
                        const isSelected = selectedServices.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? "bg-red-50/70 border-red-600 shadow-sm"
                                : "bg-zinc-50/80 border-zinc-200 hover:border-zinc-300 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="text-xs uppercase font-bold text-red-600">
                                {srv.tag}
                              </span>
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                                  isSelected
                                    ? "bg-red-600 border-red-600 text-white"
                                    : "border-zinc-300 bg-white"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                            </div>
                            <h4 className="font-bold text-sm text-zinc-900">{srv.title}</h4>
                            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                              {srv.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Service Mode & Urgency */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-100">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-xl font-display font-bold text-zinc-900">
                        Service Preferences
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div
                        onClick={() => setServiceLocation("workshop")}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          serviceLocation === "workshop"
                            ? "bg-red-50/70 border-red-600 shadow-xs"
                            : "bg-zinc-50 border-zinc-200 hover:bg-white"
                        }`}
                      >
                        <h4 className="font-bold text-sm text-zinc-900">Workshop Drop-Off</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          Bring your car to Industrial Area 5, Sharjah. Fast reception.
                        </p>
                      </div>

                      <div
                        onClick={() => setServiceLocation("pickup")}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          serviceLocation === "pickup"
                            ? "bg-red-50/70 border-red-600 shadow-xs"
                            : "bg-zinc-50 border-zinc-200 hover:bg-white"
                        }`}
                      >
                        <h4 className="font-bold text-sm text-zinc-900">Recovery / Pickup &amp; Delivery</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          Flatbed recovery available across Sharjah and Dubai.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-100">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-xl font-display font-bold text-zinc-900">
                        Your Contact Details
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <FloatInput
                        type="text"
                        name="name"
                        value={formData.name}
                        label="Your Full Name"
                        required
                        isListening={voice.listeningField === "name"}
                        onVoiceToggle={() => voice.toggleListening("name", "text")}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />

                      <FloatInput
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        label="Mobile / WhatsApp Number"
                        required
                        isListening={voice.listeningField === "phone"}
                        onVoiceToggle={() => voice.toggleListening("phone", "phone")}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <FloatInput
                        type="email"
                        name="email"
                        value={formData.email}
                        label="Email Address (Optional)"
                        isListening={voice.listeningField === "email"}
                        onVoiceToggle={() => voice.toggleListening("email", "email")}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <FloatTextarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        label="Custom Specifications, Color & Material Preferences"
                        rows={3}
                        isListening={voice.listeningField === "additionalNotes"}
                        onVoiceToggle={() => voice.toggleListening("additionalNotes", "textarea")}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalNotes: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 px-8 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Calculating Estimate..." : "Submit Quote Request"}
                    </button>

                    <a
                      href={getWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant WhatsApp Quote</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Side: Wolmart Demo 15 Style Quote Assurance Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Guarantee Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl">
              <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Our Service Guarantee</span>
              </div>
              <h3 className="text-xl font-display font-extrabold text-zinc-900 mb-6">
                Why Drivers Trust Al Rahmaniah Auto
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">
                      100% Precision Laser Vehicle Fitment
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      Guaranteed perfect contour fitment tailored to your vehicle make, year, and seat profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">
                      OEM Grade Leather & Materials
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      German Napa leatherette, high-tensile seatbelt webbing, and certified 7D all-weather polymer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">
                      Transparent Upfront Pricing
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      Detailed written quotation prior to any repair. Zero surprise charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call / Contact Pill */}
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-bold">
                  Need Immediate Help?
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+971507860161"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-red-600 transition-colors text-zinc-900 font-bold text-xs"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>+971 50 786 0161</span>
                  </a>
                  <a
                    href="https://wa.me/971507860161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 transition-colors text-emerald-800 font-bold text-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Service Desk</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Workshop Location Snippet */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider mb-2">
                Workshop Location
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Industrial Area No 5, Sharjah, United Arab Emirates.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                <span>Sat - Thu: 8 AM - 10 PM</span>
                <span className="text-red-600 font-bold">Open Today</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Automotive Quotation FAQ Section (Taj Al Rahmah Style - Exactly 6 FAQs) */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
              <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-red-600">
                FAQ
              </span>
              <span className="inline-block h-[2px] w-6 sm:w-8 bg-red-600 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-black text-zinc-900 tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>

            <p className="mt-2.5 sm:mt-3.5 text-zinc-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our vehicle repairs, transparent pricing, warranties, and workshop turnaround in Sharjah.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {AUTOMOTIVE_FAQS.slice(0, 6).map((faq, idx) => (
              <FaqAccordionItem
                key={faq.id}
                number={idx + 1}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeFaq === faq.id}
                onToggle={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
