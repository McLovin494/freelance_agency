import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-4 sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl space-y-4">
          {/* Tagline */}
          <div className="inline-block border border-[#EAEAEA] px-3 py-1 bg-neutral-50">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#111111] uppercase">
              Web & App Development Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-[52px] lg:text-[62px] font-normal tracking-tight leading-[1.05] text-[#111111]">
            Websites, Apps &
            <br />
            Digital Products
            <br />
            Built for Growth.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl font-light">
            We&apos;re a two-person dev studio that designs and builds websites, web apps,
            SaaS products, and mobile applications. No bloat, no middlemen — just
            clean code and thoughtful design, shipped fast.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact"
              className={buttonVariants({
                className: "rounded-none bg-[#111111] text-white hover:bg-neutral-800 transition-all text-xs font-semibold tracking-wider uppercase px-6 py-3.5 h-auto cursor-pointer"
              })}
            >
              Start a Project
            </Link>
            <Link
              href="#work"
              className={buttonVariants({
                variant: "outline",
                className: "rounded-none border-[#EAEAEA] text-[#666666] hover:text-[#111111] hover:border-[#111111] transition-all text-xs font-semibold tracking-wider uppercase px-6 py-3.5 h-auto cursor-pointer"
              })}
            >
              View Work
            </Link>
          </div>

          {/* Trust Statement */}
          <div className="pt-3 sm:pt-4 border-t border-[#EAEAEA]">
            <p className="text-[11px] sm:text-xs tracking-wider uppercase text-[#666666]">
              Building for startups, creators, local businesses, and growing companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
