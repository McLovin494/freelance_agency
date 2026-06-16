import React from "react";
import Image from "next/image";

interface PhilosophyItem {
  title: string;
  description: string;
}

const philosophy: PhilosophyItem[] = [
  {
    title: "Small Independent Team",
    description: "We work as a small, focused unit. Low overhead means better prices, faster turnarounds, and full attention on your project.",
  },
  {
    title: "Direct Communication",
    description: "You talk directly to the people building your product. No account managers, no delays, no details lost in translation.",
  },
  {
    title: "Fast Execution",
    description: "We work in focused sprints to ship quickly. From strategy to launch in weeks, not months — without cutting corners on quality.",
  },
  {
    title: "Long-term Partnerships",
    description: "We don't do hit-and-run projects. We support our clients post-launch, optimizing performance and scaling the codebase as the business grows.",
  },
];

interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}

const founders: Founder[] = [
  {
    name: "Ayan Jyoti Bora",
    role: "Technology & Product",
    bio: "Builder, developer, and co-founder. Focused on engineering reliable web products, experimenting with new technologies, and bringing ambitious ideas to life.",
    initials: "AJB",
    image: "/AJB.png",
  },
  {
    name: "Arion Dutta",
    role: "Design & Brand",
    bio: "Designer and co-founder with a passion for crafting memorable digital experiences. Focuses on visual identity, product design, and thoughtful user interactions.",
    initials: "ARD",
    image: "/ARD.png",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Layout: Title on Left, Main Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 sm:mb-28">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
              About Us
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl sm:text-2xl text-[#111111] leading-relaxed font-light">
              We&apos;re two B.Tech graduates who started Aura Studio to build the kind of digital products we&apos;d want to use ourselves — fast, well-designed, and built with clean code.
            </p>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
              We grew up on the modern web and understand how to create interfaces that feel responsive and alive. We use robust engineering to back up every design choice. No templates, no shortcuts — every line of code is written specifically for your project using tools like React, Next.js, and TypeScript.
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
                {/* Initials / Image Box */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-50 border border-[#EAEAEA] flex items-center justify-center shrink-0 overflow-hidden relative">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="font-heading text-xl font-light text-[#666666]">
                      {founder.initials}
                    </span>
                  )}
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
