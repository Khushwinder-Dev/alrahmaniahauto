"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Send } from "lucide-react";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";
import { FloatInput, FloatTextarea, useVoiceInput } from "@/components/ui/FloatField";

export default function AppointmentFormSection() {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const voice = useVoiceInput({
    isArabic,
    onResult: (fieldName: string, text: string) => {
      setFormData((prev) => {
        if (fieldName === "message" && prev.message.trim()) {
          return { ...prev, message: `${prev.message.trim()} ${text}` };
        }
        return { ...prev, [fieldName]: text };
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        isArabic
          ? "شكراً لك! تم إرسال طلب عرض السعر بنجاح وسيتواصل معك خبراؤنا قريباً."
          : "Thank you! Your quotation request has been sent successfully."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16" dir={isArabic ? "rtl" : "ltr"}>
      <div className="relative min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header.png"
            alt="Al Rahmaniah Auto Accessories Workshop Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xs md:bg-linear-to-r md:from-white/95 md:via-white/80 md:to-white/40" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
              {isArabic ? "طلب تسعيرة وتفصيل إكسسوارات" : "Custom Accessories Inquiry"}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.15] uppercase tracking-tight">
              {isArabic ? "جدد مقصورة سيارتك – " : "Transform Your Vehicle – "}
              <span className="text-red-600">{isArabic ? "الرحمانية لتجارة زينة السيارات" : "Al Rahmaniah Auto"}</span> <br className="hidden md:block" />
              {isArabic ? "أناقة وتنجيد مخصص" : "Accessories & Styling"}
            </h2>
            <p className="mt-4 text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl">
              {isArabic
                ? "احصل على تسعيرة فورية لتفصيل المقاعد الجلدية، دعاسات 7D، أحزمة الأمان الملونة، وأحدث شاشات الأندرويد لسيارتك."
                : "Request a custom price estimate for leather seat covers, 7D floor mats, LED lights, or electronics tailored to your exact car model."}
            </p>
          </div>

          <div className="relative flex justify-end">
            <div className="w-full max-w-lg bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-2xl">
              <div className="mb-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                  {isArabic ? "خدمة سريعة مع خاصية الصوت" : "Voice-Enabled Quick Form"}
                </span>
                <h3 className="text-2xl font-display font-bold text-zinc-900">
                  {isArabic ? "طلب تسعيرة مخصصة" : "Request a Custom Quote"}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatInput
                    type="text"
                    name="name"
                    value={formData.name}
                    label={isArabic ? "الاسم الكامل" : "Your Name"}
                    required
                    isArabic={isArabic}
                    isListening={voice.listeningField === "name"}
                    onVoiceToggle={() => voice.toggleListening("name", "text")}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <FloatInput
                    type="email"
                    name="email"
                    value={formData.email}
                    label={isArabic ? "البريد الإلكتروني" : "Your Email"}
                    required
                    isArabic={isArabic}
                    isListening={voice.listeningField === "email"}
                    onVoiceToggle={() => voice.toggleListening("email", "email")}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatInput
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    label={isArabic ? "رقم الهاتف" : "Your Phone"}
                    required
                    isArabic={isArabic}
                    isListening={voice.listeningField === "phone"}
                    onVoiceToggle={() => voice.toggleListening("phone", "phone")}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <FloatInput
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    label={isArabic ? "نوع وسنة السيارة" : "Vehicle Make & Year"}
                    required
                    isArabic={isArabic}
                    isListening={voice.listeningField === "vehicle"}
                    onVoiceToggle={() => voice.toggleListening("vehicle", "text")}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  />
                </div>

                <FloatInput
                  type="text"
                  name="subject"
                  value={formData.subject}
                  label={isArabic ? "المنتج أو الإكسسوار المطلوب" : "Product / Customization Inquired"}
                  required
                  isArabic={isArabic}
                  isListening={voice.listeningField === "subject"}
                  onVoiceToggle={() => voice.toggleListening("subject", "text")}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />

                <FloatTextarea
                  name="message"
                  value={formData.message}
                  label={isArabic ? "ملاحظات إضافية، تفضيل اللون أو نوع الجلد..." : "Additional notes, color preference, or custom specs..."}
                  rows={3}
                  isArabic={isArabic}
                  isListening={voice.listeningField === "message"}
                  onVoiceToggle={() => voice.toggleListening("message", "textarea")}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-red-600/30 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>
                    {isSubmitting
                      ? (isArabic ? "جارٍ الإرسال..." : "Submitting...")
                      : (isArabic ? "إرسال طلب التسعيرة" : "Submit Quotation Request")}
                  </span>
                  <Send className={`w-3.5 h-3.5 ${isArabic ? "rotate-180" : ""}`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
