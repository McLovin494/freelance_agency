import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Blueprint Studio was a refreshing experience. They wrote clean, understandable code, communicated daily in a private channel, and hit every milestone on time. Our conversion rate has more than doubled since the launch.",
    author: "Elena Rostov",
    role: "VP of Product",
    company: "Kora Atelier",
  },
  {
    quote: "They designed and built our VC portal in less than six weeks. The design is clean and minimal, and our founders find the pitch pipeline incredibly easy to use. These guys know modern web standards inside out.",
    author: "Marcus Vance",
    role: "General Partner",
    company: "Novus Capital",
  },
  {
    quote: "Blueprint Studio rebuilt our legacy dashboard from scratch. The performance improvement was night and day. Page loads went from seconds to milliseconds, and our customer support requests dropped dramatically.",
    author: "David Vance",
    role: "Director of Operations",
    company: "Apex Logistics",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-[#EAEAEA] pb-12 mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            Client Voices
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, index) => (
            <div key={index} className="space-y-6 flex flex-col justify-between h-full">
              {/* Quote text */}
              <p className="text-base sm:text-lg text-[#111111] leading-relaxed font-light italic">
                “{t.quote}”
              </p>

              {/* Author metadata */}
              <div className="pt-6 border-t border-[#EAEAEA] mt-auto">
                <p className="text-sm font-semibold text-[#111111]">
                  {t.author}
                </p>
                <p className="text-xs text-[#666666] tracking-wide mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
