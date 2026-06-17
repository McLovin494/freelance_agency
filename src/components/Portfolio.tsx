import React from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  image: string;
  images?: string[];
  challenge: string;
  solution: string;
  outcome: string;
  year: string;
}

const projects: CaseStudy[] = [
  {
    id: "jobshield",
    name: "AI Job Analysis System",
    industry: "AI • Recruitment Technology",
    image: "/images/job-analysis-system.png",
    challenge:
      "Job seekers frequently encounter fraudulent job postings, misleading recruitment offers, and difficulty identifying opportunities that genuinely match their skills and experience.",

    solution:
      "Developed an AI-powered platform that analyzes job listings for potential scam indicators, evaluates resume compatibility against job requirements, and provides intelligent matching insights. The platform combines job analysis, resume evaluation, community reporting, and analytics into a single workflow.",

    outcome:
      "Created a centralized system that helps job seekers make safer application decisions while streamlining resume-job matching through AI-assisted analysis.",

    year: "2026",
  },

  {
    id: "gymtracker",
    name: "Gym Tracker",
    industry: "Fitness • Mobile Application",
    image: "/images/Dashboard.jpeg",
    images: ["/images/Dashboard.jpeg", "/images/History.jpeg", "/images/Analytics.jpeg"],
    challenge:
      "Many fitness applications focus solely on workout logging while lacking personalized guidance, progress insights, and an integrated experience for users trying to maintain long-term consistency.",

    solution:
      "Built a cross-platform mobile fitness application using React Native and Expo. Features include workout tracking, progress analytics, AI-powered fitness assistance, user authentication, cloud synchronization, and personalized recommendations.",

    outcome:
      "Delivered a complete fitness companion that combines workout management, progress monitoring, and AI-assisted guidance within a single mobile experience.",

    year: "2026",
  },

  {
    id: "resumeanalyzer",
    name: "Resume Analysis Platform",
    industry: "Career Tools • AI",
    image: "/images/resume-analysis.png",
    challenge:
      "Job applicants often struggle to understand how well their resumes align with job descriptions and which areas require improvement before submitting applications.",

    solution:
      "Engineered a web-based resume analysis platform capable of evaluating resumes against job requirements, identifying missing skills, generating compatibility insights, and providing actionable recommendations to improve application quality.",

    outcome:
      "Enabled users to assess resume strength more effectively and gain structured feedback before applying for positions.",

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
            Projects
          </h2>
          <p className="text-sm text-[#666666] font-light max-w-sm mt-4 md:mt-0">
            A selection of products we've designed, built, and shipped for startups and growing businesses.
          </p>
        </div>

        {/* Case Studies Grid (Asymmetrical Layout) */}
        <div className="space-y-32 sm:space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-20 items-start`}
              >
                {/* Project Image Panel */}
                <div className="w-full lg:w-3/5 group">
                  {project.images && project.images.length > 1 ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50 border border-[#EAEAEA] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="absolute inset-0 flex gap-2 p-3">
                        {project.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative flex-1 overflow-hidden rounded-md"
                          >
                            <Image
                              src={img}
                              alt={`${project.name} screen ${imgIndex + 1}`}
                              fill
                              sizes="(max-width: 768px) 33vw, 20vw"
                              className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
                              priority={index === 0}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50 border border-[#EAEAEA] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        priority={index === 0}
                      />
                    </div>
                  )}
                </div>

                {/* Project Details Panel */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between self-stretch">
                  <div className="space-y-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#666666] mb-3">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full shrink-0"></span>
                          {project.industry}
                        </span>
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
