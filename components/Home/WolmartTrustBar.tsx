"use client";

import React from "react";
import { Zap, ShieldCheck, Wrench, PhoneCall } from "lucide-react";

export default function WolmartTrustBar() {
  const trustItems = [
    {
      icon: <Zap className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: "Express Turnaround",
      subtitle: "Under 60-min express servicing",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: "100% Genuine OEM",
      subtitle: "Certified authentic parts & warranty",
    },
    {
      icon: <Wrench className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: "Master Technicians",
      subtitle: "Dealer-trained specialists in UAE",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-red-600 group-hover:text-white transition-colors flex-shrink-0" />,
      title: "24/7 Roadside Support",
      subtitle: "Fast recovery & towing service",
    },
  ];

  return (
    <section className="w-full py-8 lg:py-12 bg-white border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-zinc-200 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 items-center">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 group transition-all duration-300 ${
                  index > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                {/* Clean Centered Icon Box */}
                <div className="w-13 h-13 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-xs">
                  {item.icon}
                </div>

                {/* Typography */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm lg:text-base text-zinc-900 tracking-tight group-hover:text-red-600 transition-colors leading-snug truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-snug line-clamp-1">
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
