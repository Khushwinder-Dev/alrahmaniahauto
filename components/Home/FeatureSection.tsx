"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Zap, ShieldCheck, Tag, UserCog } from "lucide-react";

export default function FeatureSection() {
  const router = useRouter();

  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[500px] w-full rounded-[40px] overflow-hidden border border-zinc-200 shadow-xl">
          <Image
            src="/images/service-5.png"
            alt="Mechanic at work"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start lg:pl-10">
          <div className="inline-block px-3 py-1.5 rounded-full border border-red-200 bg-red-50 mb-6">
            <span className="text-red-600 text-[10px] font-black tracking-[0.2em] uppercase">
              Al Rahmaniah Auto Accessories
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6 tracking-tight">
            Elevating Your Car With <br /> Bespoke Accessories
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
            At Al Rahmaniah Auto Accessories, we blend speed with precision. Our master craftsmen and fitment specialists use cutting-edge equipment to deliver results that exceed expectations — every single time.
          </p>
          <div className="space-y-4 w-full mb-10">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs group transition-all hover:border-red-500 hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center transition-colors group-hover:bg-red-100">
                <Zap className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-base mb-1 tracking-wide">
                  Precision Custom Fitment
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-snug max-w-lg">
                  Laser-tailored seat covers, mats, and accessories crafted for exact factory contours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs group transition-all hover:border-red-500 hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center transition-colors group-hover:bg-red-100">
                <ShieldCheck className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-base mb-1 tracking-wide">
                  Premium Certified Materials
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-snug max-w-lg">
                  Ultra-durable anti-UV Napa leather, high-tensile safety belts, and tested electronics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs group transition-all hover:border-red-500 hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center transition-colors group-hover:bg-red-100">
                <Tag className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-base mb-1 tracking-wide">
                  Direct Wholesale & Retail Pricing
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-snug max-w-lg">
                  No surprise bills or hidden fees. We provide digital estimates before starting work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs group transition-all hover:border-red-500 hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center transition-colors group-hover:bg-red-100">
                <UserCog className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-base mb-1 tracking-wide">
                  Certified Master Mechanics
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-snug max-w-lg">
                  Experienced automotive engineers trained in German, Japanese, and American models.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/about-us")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-md shadow-red-600/30 cursor-pointer"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
