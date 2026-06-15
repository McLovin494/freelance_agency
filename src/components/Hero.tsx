import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl space-y-8">
          {/* Tagline */}
          <div className="inline-block border border-[#EAEAEA] px-3 py-1 bg-neutral-50">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#111111] uppercase">
              Independent Design & Engineering Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-[#111111]">
            We design and build
            <br />
            high-performance websites
            <br />
            for growing businesses.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-2xl font-light">
            We are a small, focused team of developers and designers. We build fast, reliable,
            and custom-tailored digital products directly, avoiding bloated agency processes to
            deliver exceptional design and robust engineering.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
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
          <div className="pt-8 sm:pt-12 border-t border-[#EAEAEA]">
            <p className="text-[11px] sm:text-xs tracking-wider uppercase text-[#666666]">
              Trusted by tech startups, boutique ecommerce brands, and architectural firms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
