import { Metadata } from "next";
import GetAQuoteContent from "@/components/GetAQuoteContent";

export const metadata: Metadata = {
  title: "Get an Instant Quote | Al Rahmaniah Auto Maintenance & Accessories Sharjah",
  description:
    "Request a fast, upfront quote for auto repair, periodic servicing, AC recharge, engine diagnostics, brake replacement, or bespoke car seat covers in Sharjah, UAE.",
  keywords: [
    "car service quote Sharjah",
    "auto repair estimate UAE",
    "car AC repair cost Sharjah",
    "brake replacement quote",
    "car seat covers price Sharjah",
    "Al Rahmaniah Auto workshop",
  ],
};

export default function GetAQuotePage() {
  return <GetAQuoteContent />;
}
