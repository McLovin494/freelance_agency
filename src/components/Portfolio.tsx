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
  liveUrl?: string;
  buttonText?: string;
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
    liveUrl: "https://jobshield69.vercel.app/",
    buttonText: "Visit Live Site",
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
    liveUrl: "https://github.com/Ayanjyoti2003/Gym-Tracker/releases/tag/v1.0.0",
    buttonText: "View Releases",
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
    liveUrl: "https://resume-analysis-rosy.vercel.app",
    buttonText: "Visit Live Site",
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
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-slate-100/80 border border-[#EAEAEA] transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex items-center justify-center p-4">
                      <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6">
                        {project.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative h-full aspect-[1/2] rounded-[18px] sm:rounded-[24px] border-[4px] sm:border-[5px] border-neutral-900 bg-neutral-950 shadow-lg overflow-hidden flex-1 max-w-[110px] sm:max-w-[145px] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1"
                            style={{ transitionDelay: `${imgIndex * 75}ms` }}
                          >
                            <Image
                              src={img}
                              alt={`${project.name} screen ${imgIndex + 1}`}
                              fill
                              sizes="(max-width: 768px) 30vw, 15vw"
                              className="object-cover object-top"
                              priority={index === 0}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-slate-100/80 border border-[#EAEAEA] transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex items-center justify-center p-4 sm:p-8">
                      <div className="relative w-full h-full rounded-lg shadow-2xl border border-neutral-200/60 bg-white overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                        {/* Browser Header Mockup */}
                        <div className="h-6 sm:h-8 bg-neutral-50 border-b border-neutral-200/80 flex items-center px-3 sm:px-4 gap-1.5 shrink-0 select-none">
                          <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#FF5F56]"></div>
                          <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#FFBD2E]"></div>
                          <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#27C93F]"></div>
                          <div className="mx-auto w-1/3 sm:w-1/2 h-3.5 sm:h-5 bg-white border border-neutral-200/60 rounded text-[8px] sm:text-[10px] text-[#888888] flex items-center justify-center font-mono truncate">
                            {project.id}.agency
                          </div>
                        </div>
                        {/* Browser Content */}
                        <div className="relative flex-1 w-full bg-neutral-50 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.name} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover object-top"
                            priority={index === 0}
                          />
                        </div>
                      </div>
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

                    {project.liveUrl && (
                      <div className="pt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 rounded-none bg-[#111111] hover:bg-neutral-800 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-5 py-3 transition-all cursor-pointer shadow-sm hover:shadow-md"
                        >
                          <span>{project.buttonText || "Visit Project"}</span>
                          <svg
                            className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
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
