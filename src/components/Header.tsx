"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/75 backdrop-blur-[12px] border-b border-black/[0.06] py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Availability */}
          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="font-heading text-lg font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
            >
              AURA STUDIO
            </Link>
            <div className="hidden sm:flex items-center space-x-1.5 border border-[#EAEAEA] bg-neutral-50 px-2 py-0.5 text-[9px] font-semibold text-[#666666] tracking-wider uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981]/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
              </span>
              <span>Available</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Work
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Process
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  className: "rounded-none border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase px-5 py-2.5 h-auto cursor-pointer"
                })}
              >
                Start a Project
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#111111] transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#111111] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#111111] transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 flex flex-col justify-center px-8 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-left">
          <Link
            href="#services"
            onClick={toggleMenu}
            className="font-heading text-3xl font-light text-[#111111] hover:text-[#666666] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            onClick={toggleMenu}
            className="font-heading text-3xl font-light text-[#111111] hover:text-[#666666] transition-colors"
          >
            Work
          </Link>
          <Link
            href="#process"
            onClick={toggleMenu}
            className="font-heading text-3xl font-light text-[#111111] hover:text-[#666666] transition-colors"
          >
            Process
          </Link>
          <Link
            href="#about"
            onClick={toggleMenu}
            className="font-heading text-3xl font-light text-[#111111] hover:text-[#666666] transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="font-heading text-3xl font-light text-[#111111] hover:text-[#666666] transition-colors"
          >
            Contact
          </Link>
          <div className="pt-6">
              <Link
                href="#contact"
                onClick={toggleMenu}
                className={buttonVariants({
                  className: "w-full rounded-none bg-[#111111] text-white hover:bg-neutral-800 transition-all text-sm font-semibold tracking-wider uppercase py-4 h-auto cursor-pointer text-center"
                })}
              >
                Start a Project
              </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
