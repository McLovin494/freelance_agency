import React from "react";

interface ProcessStep {
  num: string;
  title: string;
  details: string;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    details: "We start by analyzing your business goals, target audience, and current technical systems. We define specific milestones and outline concrete project requirements to establish a solid roadmap.",
  },
  {
    num: "02",
    title: "Strategy",
    details: "We map out the content structure, information architecture, and user flows. We agree on the tech stack (typically Next.js, Tailwind v4, and React 19) and outline performance budgets and SEO priorities.",
  },
  {
    num: "03",
    title: "Design",
    details: "We design high-fidelity static prototypes focused on grid layouts, content readability, and typographic hierarchy. We iterate on the layouts with you until the visual style is locked in.",
  },
  {
    num: "04",
    title: "Development",
    details: "Our engineering process begins. We write modular TypeScript, configure Tailwind utility classes, optimize Next.js server/client splits, and ensure all semantic tags are accessible.",
  },
  {
    num: "05",
    title: "Launch",
    details: "We perform cross-browser quality checks, analyze Lighthouse scores, set up redirects, and point DNS domains. After launch, we hand over clean documentation and set up hosting/support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column (Sticky Title) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
              Our Process
            </h2>
            <p className="text-sm text-[#666666] font-light leading-relaxed max-w-sm">
              We work in structured phases with clear communication, eliminating guesswork to deliver products on schedule.
            </p>
          </div>

          {/* Right Column (Vertical Stack) */}
          <div className="lg:col-span-8 border-t border-[#EAEAEA]">
            {steps.map((step) => (
              <div
                key={step.num}
                className="py-10 border-b border-[#EAEAEA] flex flex-col sm:flex-row gap-6 sm:gap-12"
              >
                {/* Step Number */}
                <div className="text-xs font-mono font-bold text-[#111111] tracking-widest sm:w-16">
                  {step.num}
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="font-heading text-xl font-normal text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                    {step.details}
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
