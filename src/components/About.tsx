import React from "react";

interface PhilosophyItem {
  title: string;
  description: string;
}

const philosophy: PhilosophyItem[] = [
  {
    title: "Small Independent Team",
    description: "We work as a small, specialized unit. This allows us to keep overhead low, maintain absolute quality control, and focus entirely on your project.",
  },
  {
    title: "Direct Communication",
    description: "You talk directly to the engineers and designers building your website. No account managers, no delays, no details lost in translation.",
  },
  {
    title: "Fast Execution",
    description: "We work in focused sprints to ship code quickly. By eliminating unnecessary administrative layers, we move from strategy to launch in weeks, not months.",
  },
  {
    title: "Long-term Partnerships",
    description: "We do not believe in hit-and-run projects. We support our clients post-launch, continually optimizing performance and scaling the code as their business grows.",
  },
];

interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const founders: Founder[] = [
  {
    name: "Alex Rivera",
    role: "Engineering & Architecture",
    bio: "Ex-software engineer at core web startups. Focuses on system architecture, database performance, and building robust Next.js systems.",
    initials: "AR",
  },
  {
    name: "Maya Chen",
    role: "Design & Creative Direction",
    bio: "Digital product designer with an editorial design background. Focuses on typography, interaction flows, and pixel-perfect implementation.",
    initials: "MC",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Layout: Title on Left, Main Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 sm:mb-28">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
              Behind the Studio
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl sm:text-2xl text-[#111111] leading-relaxed font-light">
              We started Aura Studio because we wanted to build a different kind of agency — one where craft, performance, and clean code are prioritized above empty corporate marketing.
            </p>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
              We are young developers and designers who grew up on the modern web. We understand how to create interfaces that feel responsive and alive, using robust engineering to back up every design choice. We don't use templates or shortcuts. Every line of code and pixel we deliver is handcrafted for your business.
            </p>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-20 border-b border-[#EAEAEA]">
          {philosophy.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-[#111111] uppercase">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="pt-20">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#666666] mb-12">
            Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Visual Placeholder Box for Photo */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-50 border border-[#EAEAEA] flex items-center justify-center shrink-0">
                  <span className="font-heading text-xl font-light text-[#666666]">
                    {founder.initials}
                  </span>
                </div>

                {/* Bio */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-heading text-lg font-medium text-[#111111]">
                      {founder.name}
                    </h4>
                    <p className="text-xs text-[#666666] tracking-wider uppercase">
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed font-light">
                    {founder.bio}
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
