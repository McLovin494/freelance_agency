import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does a typical project take?",
    answer: "A standard marketing or portfolio website typically takes 4 to 6 weeks from discovery to launch. Custom headless e-commerce integrations or complex web applications with bespoke features usually range from 8 to 12 weeks. We define exact milestones and delivery dates before writing the first line of code.",
  },
  {
    id: "faq-2",
    question: "How do you structure your fees and pricing?",
    answer: "We work on a fixed-project basis. Once we agree on the scope, we provide a detailed quote detailing all deliverables. This ensures you know the exact cost upfront and prevents billing surprises. For ongoing updates or features, we offer flexible monthly retainers.",
  },
  {
    id: "faq-3",
    question: "Do you provide post-launch maintenance and support?",
    answer: "Yes. We offer maintenance packages that cover continuous security patches, dependency updates, performance auditing, secure backups, and dedicated hours for content edits or minor feature additions.",
  },
  {
    id: "faq-4",
    question: "Can you redesign or migrate an existing website?",
    answer: "Yes, we frequently migrate legacy systems (such as slow WordPress templates or outdated custom platforms) to modern architectures. We perform thorough audits to preserve your existing SEO rankings, restructure content databases, and deliver a cleaner, faster experience.",
  },
  {
    id: "faq-5",
    question: "How do we communicate during the project?",
    answer: "We establish a direct line of communication. We set up a dedicated Slack, Teams, or Discord workspace where you talk directly to the engineers and designers building your site. We share progress asynchronously and hold brief weekly video calls to keep alignment.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column (Section Heading) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="text-sm text-[#666666] font-light leading-relaxed max-w-sm">
              Clear answers to common questions about timelines, costs, migrations, and our workflow.
            </p>
          </div>

          {/* Right Column (Accordions) */}
          <div className="lg:col-span-8">
            <Accordion className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-[#EAEAEA] py-3 first:pt-0 last:border-b-0"
                >
                  <AccordionTrigger className="font-heading text-base sm:text-lg font-light text-[#111111] py-4 hover:no-underline text-left hover:text-[#666666] transition-colors focus-visible:outline-none">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-[#666666] leading-relaxed font-light pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
