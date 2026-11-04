"use client";

import React from "react";
import { Zap, ShieldCheck, Wrench, PhoneCall } from "lucide-react";

export default function WolmartTrustBar() {
  const trustItems = [
    {
      icon: <Zap className="w-7 h-7 text-red-600 flex-shrink-0" />,
      title: "Express Turnaround",
      subtitle: "Routine servicing & scanning in under 60 mins",
      badge: "Fast Lane",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-red-600 flex-shrink-0" />,
      title: "100% Genuine OEM",
      subtitle: "Certified original parts & warranty protection",
      badge: "Guaranteed",
    },
    {
      icon: <Wrench className="w-7 h-7 text-red-600 flex-shrink-0" />,
      title: "Master Technicians",
      subtitle: "Dealer-trained specialists for German & Japanese cars",
      badge: "Certified",
    },
    {
      icon: <PhoneCall className="w-7 h-7 text-red-600 flex-shrink-0" />,
      title: "24/7 Roadside Support",
      subtitle: "Quick recovery & towing in Sharjah & Dubai",
      badge: "24/7 Hotline",
    },
  ];

  return (
    <section className="w-full py-10 lg:py-14 bg-white border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-zinc-50/80 text-zinc-900 rounded-2xl p-6 lg:p-8 border border-zinc-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 group transition-all duration-300 hover:translate-y-[-2px] ${
                  index > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 group-hover:border-red-300 group-hover:bg-red-100/70 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm lg:text-base text-zinc-900 tracking-wide group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
