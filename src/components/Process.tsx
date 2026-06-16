import React from "react";

interface ProcessStep {
  num: string;
  title: string;
  details: string;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Research & Planning",
    details: "We analyze your business goals, target audience, and existing systems. We define the scope, agree on the tech stack, map out user flows, and outline milestones so the entire project has a clear roadmap before we start.",
  },
  {
    num: "02",
    title: "Wireframes & UI Design",
    details: "We design high-fidelity prototypes focused on layout, content hierarchy, and usability. We iterate on the designs with you until the visual direction is locked in and ready for development.",
  },
  {
    num: "03",
    title: "Development & Testing",
    details: "We build the product in modular TypeScript with React and Next.js. We optimize performance, ensure accessibility, and run cross-browser quality checks throughout the build.",
  },
  {
    num: "04",
    title: "Launch & Support",
    details: "We handle deployment, DNS configuration, and final Lighthouse audits. After launch, we provide clean documentation and ongoing support to keep everything running smoothly.",
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
              How We Work
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
