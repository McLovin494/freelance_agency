import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#EAEAEA] py-16 sm:py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="#"
              className="font-heading text-lg font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
            >
              BLUEPRINT STUDIO
            </Link>
            <p className="text-sm text-[#666666] font-light leading-relaxed max-w-sm">
              A small product studio building websites, apps, and digital tools for startups and growing businesses.
            </p>
            <div className="text-xs text-[#666666] space-y-1">
              <p>© {currentYear} Blueprint Studio. All rights reserved.</p>
              <p>Built with Next.js, React & TypeScript.</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:blueprintstudio.agency@gmail.com"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  blueprintstudio.agency@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-light"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
