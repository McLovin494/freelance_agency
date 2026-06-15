import React from "react";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    name: "Web Design",
    description: "Bespoke digital design. We construct scalable design systems, prioritize visual flow, and create responsive interfaces centered on clean typography and whitespace.",
  },
  {
    number: "02",
    name: "Custom Development",
    description: "Production-ready frontends and robust systems. Built primarily with React 19, Next.js, and TypeScript, optimized for fast loading, security, and strict clean code.",
  },
  {
    number: "03",
    name: "Landing Pages",
    description: "Focused single-page user experiences designed to guide visitors toward key actions. Optimized for high speed, search visibility, and maximum conversion.",
  },
  {
    number: "04",
    name: "Business Websites",
    description: "Marketing websites that project professionalism and scale. We build clean digital hubs that help firms, agencies, and businesses establish absolute trust.",
  },
  {
    number: "05",
    name: "E-commerce Solutions",
    description: "High-performance online storefronts. Headless Shopify setups, custom search paths, integrated checkout flows, and database structures designed to convert.",
  },
  {
    number: "06",
    name: "Maintenance & Support",
    description: "Ongoing updates, monitoring, hosting, and technical optimization to ensure your digital platform remains secure, error-free, and operational 24/7.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#EAEAEA] pb-12 mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            Capabilities
          </h2>
          <p className="text-sm text-[#666666] font-light max-w-sm mt-4 md:mt-0">
            We operate at the intersection of aesthetic design and production-grade software engineering.
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
