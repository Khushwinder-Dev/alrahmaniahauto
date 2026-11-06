"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FourStepProcessSection() {
  const steps = [
    {
      num: "01",
      emoji: "🛍️",
      title: "Browse Catalog",
      desc: "Explore 500+ genuine auto accessories, custom seat covers, and styling products.",
    },
    {
      num: "02",
      emoji: "📐",
      title: "Select & Custom Fit",
      desc: "Choose your exact vehicle make, model, color trim, or custom leather specifications.",
    },
    {
      num: "03",
      emoji: "✂️",
      title: "Precision Crafting",
      desc: "Our master artisans hand-tailor your order with anti-UV materials and laser accuracy.",
    },
    {
      num: "04",
      emoji: "🚀",
      title: "Fast Delivery / Fitting",
      desc: "Get door-to-door UAE delivery or visit our Sharjah showroom for expert fitment.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-24 px-6 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 flex flex-col items-center">
        <div className="inline-block px-5 py-1.5 rounded-full border border-red-200 bg-red-50 mb-6">
          <span className="text-red-600 text-[10px] font-black tracking-[0.25em] uppercase">
            How It Works
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 leading-tight uppercase tracking-tight mb-16 text-center">
          Simple 4-Step Process
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="flex-1 w-full max-w-[320px] bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:translate-y-[-4px]">
                <span className="font-display text-4xl font-black text-red-600/30 mb-2 tracking-tighter">
                  {step.num}
                </span>
                <span className="text-3xl mb-3">{step.emoji}</span>
                <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-4">
                  <ArrowRight className="w-5 h-5 text-zinc-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
