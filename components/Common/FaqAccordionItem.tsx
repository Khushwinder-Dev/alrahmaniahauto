"use client";

import React from "react";
import { Minus, Plus } from "lucide-react";

export interface FaqAccordionItemProps {
  id?: number | string;
  number?: string | number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isArabic?: boolean;
  className?: string;
}

export default function FaqAccordionItem({
  number,
  question,
  answer,
  isOpen,
  onToggle,
  isArabic = false,
  className = "",
}: FaqAccordionItemProps) {
  const formattedNum =
    number !== undefined
      ? typeof number === "number"
        ? String(number).padStart(2, "0")
        : number
      : undefined;

  return (
    <div
      className={`rounded-xl sm:rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-red-300 hover:shadow-md overflow-hidden transition-all duration-300 ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left rtl:text-right cursor-pointer group"
      >
        {formattedNum && (
          <span className="text-sm sm:text-base font-bold text-zinc-400 tabular-nums shrink-0 transition-colors group-hover:text-red-600">
            {formattedNum}
          </span>
        )}
        <span className="flex-1 text-sm sm:text-base font-bold text-zinc-900 leading-snug group-hover:text-red-600 transition-colors">
          {question}
        </span>
        <span
          className={`w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
            isOpen
              ? "bg-red-600 text-white shadow-xs"
              : "border border-red-600/50 text-red-600 group-hover:border-red-600 group-hover:bg-red-50"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          ) : (
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`px-4 sm:px-6 pb-4 sm:pb-5 ${
              formattedNum ? "ps-9 sm:ps-[3.8rem]" : "ps-4 sm:ps-6"
            } pe-4 sm:pe-12 text-xs sm:text-sm text-zinc-600 leading-relaxed`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
