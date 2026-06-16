import React from "react";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    name: "Websites & Landing Pages",
    description: "Marketing sites, business websites, and high-conversion landing pages. Built with Next.js and optimized for speed, SEO, and mobile responsiveness.",
  },
  {
    number: "02",
    name: "Web Applications",
    description: "SaaS platforms, dashboards, admin panels, and internal tools. Built with React, Next.js, and TypeScript for reliability and performance at scale.",
  },
  {
    number: "03",
    name: "Mobile Applications",
    description: "Cross-platform mobile apps for iOS and Android. We build native-feeling experiences using modern frameworks, integrated with your existing backend.",
  },
  {
    number: "04",
    name: "E-commerce",
    description: "Online stores with Shopify, custom carts, and payment integrations. Headless setups, optimized checkout flows, and fast product pages that convert.",
  },
  {
    number: "05",
    name: "UI/UX Design",
    description: "Interface design, prototyping, and design systems. We focus on clean layouts, clear navigation, and interactions that make products easy and enjoyable to use.",
  },
  {
    number: "06",
    name: "Maintenance & Support",
    description: "Ongoing updates, hosting, monitoring, and technical optimization. We keep your product secure, fast, and running smoothly after launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#EAEAEA] pb-12 mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            What We Build
          </h2>
          <p className="text-sm text-[#666666] font-light max-w-sm mt-4 md:mt-0">
            From landing pages to full-stack SaaS platforms — we handle design, development, and deployment.
          </p>
        </div>

        {/* Services Rows */}
        <div className="divide-y divide-[#EAEAEA] border-b border-[#EAEAEA]">
          {services.map((service) => (
            <div
              key={service.number}
              className="group py-8 sm:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-colors duration-300 hover:bg-neutral-50/50 -mx-6 px-6"
            >
              {/* Left Column: Number & Name */}
              <div className="flex items-baseline space-x-6 md:w-1/3">
                <span className="text-xs font-mono text-[#666666] tracking-widest">
                  {service.number}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-light text-[#111111] group-hover:translate-x-1 transition-transform duration-300">
                  {service.name}
                </h3>
              </div>

              {/* Right Column: Description */}
              <div className="md:w-2/3">
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
