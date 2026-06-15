import React from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  year: string;
}

const projects: CaseStudy[] = [
  {
    id: "apex",
    name: "Apex Logistics",
    industry: "Supply Chain & Operations",
    image: "/images/apex_logistics.png",
    challenge: "A legacy operations portal suffered from slow response times and failed to support agents managing shipments on mobile viewports.",
    solution: "We designed and engineered a custom tracking and operations dashboard using Next.js, implementing real-time server-sent events and high-performance server actions.",
    outcome: "Reduced internal ticket load times by 72% and lowered user support calls by 40% in the first quarter post-launch.",
    year: "2025",
  },
  {
    id: "kora",
    name: "Kora Atelier",
    industry: "Luxury Fashion & Retail",
    image: "/images/kora_atelier.png",
    challenge: "The brand's existing e-commerce template felt generic, loaded slowly, and struggled to reflect their bespoke clothing line.",
    solution: "We developed a headless e-commerce experience using Shopify's Storefront API coupled with Next.js, featuring optimized assets and smooth page transitions.",
    outcome: "Organic mobile conversion rate increased by 2.1x and page load times decreased from 3.2s to 400ms.",
    year: "2026",
  },
  {
    id: "novus",
    name: "Novus Capital",
    industry: "Venture Capital & Finance",
    image: "/images/novus_capital.png",
    challenge: "Prospective founders were overwhelmed by dense paragraphs, causing high bounce rates on the investment application portal.",
    solution: "A typography-led brand refresh and landing page design that restructured deal pipeline workflows, featuring a high-contrast form and real-time validation.",
    outcome: "A 35% increase in highly qualified pitch submissions with a complete reduction in incomplete applications.",
    year: "2025",
  },
  {
    id: "carbon",
    name: "Studio Carbon",
    industry: "Architecture & Design",
    image: "/images/studio_carbon.png",
    challenge: "An image-dense project archive loaded poorly, severely impacting SEO and mobile accessibility scoreboards.",
    solution: "An asymmetrical portfolio layout utilizing highly optimized Next/Image assets, static path generation, and lazy-loading layouts.",
    outcome: "Achieved a 100/100 performance score on Google Lighthouse, generating a 50% increase in inbound inquiries.",
    year: "2026",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#EAEAEA] pb-12 mb-16 sm:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm text-[#666666] font-light max-w-sm mt-4 md:mt-0">
            A selection of platforms we have designed, engineered, and shipped for forward-thinking clients.
          </p>
        </div>

        {/* Case Studies Grid (Asymmetrical Layout) */}
        <div className="space-y-32 sm:space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-start`}
              >
                {/* Project Image Panel */}
                <div className="w-full lg:w-3/5 group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50 border border-[#EAEAEA] transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-w-768px) 100vw, 60vw"
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.01]"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Project Details Panel */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between self-stretch">
                  <div className="space-y-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#666666] mb-3">
                        <span>{project.industry}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-light text-[#111111]">
                        {project.name}
                      </h3>
                    </div>

                    {/* Editorial Description Column Block */}
                    <div className="space-y-6 pt-6 border-t border-[#EAEAEA]">
                      <div>
                        <h4 className="text-[10px] tracking-widest uppercase font-semibold text-[#111111] mb-2">
                          The Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-[#666666] font-light">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] tracking-widest uppercase font-semibold text-[#111111] mb-2">
                          The Solution
                        </h4>
                        <p className="text-sm leading-relaxed text-[#666666] font-light">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] tracking-widest uppercase font-semibold text-[#111111] mb-2">
                          The Outcome
                        </h4>
                        <p className="text-sm leading-relaxed text-[#111111] font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
