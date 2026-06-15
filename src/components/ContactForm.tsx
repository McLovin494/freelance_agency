"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate form submission to backend (API route or server action)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", company: "", details: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Strong Closing Statement & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#111111] tracking-tight leading-[1.1]">
                Let's build
                <br />
                something together.
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-sm">
                Have a project in mind, need technical reinforcement, or want to audit your existing web performance? Get in touch and we will reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#EAEAEA] max-w-sm">
              <div>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#111111] mb-1">
                  Direct Email
                </p>
                <a
                  href="mailto:hello@aurastudio.design"
                  className="text-sm font-medium text-[#111111] hover:underline"
                >
                  hello@aurastudio.design
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#111111] mb-1">
                  Availability
                </p>
                <p className="text-sm text-[#666666] font-light">
                  Currently booking for Q3/Q4 2026
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="border border-[#111111] p-8 sm:p-12 space-y-4 bg-neutral-50">
                <h3 className="font-heading text-xl font-normal text-[#111111]">
                  Message received.
                </h3>
                <p className="text-sm text-[#666666] font-light leading-relaxed">
                  Thank you for reaching out. Alex or Maya will review your project requirements and follow up via email shortly to set up an introductory call.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="rounded-none border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase px-5 py-2.5 h-auto cursor-pointer"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]"
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jean Dupont"
                      disabled={status === "submitting"}
                      className="rounded-none border-[#EAEAEA] bg-white text-[#111111] focus-visible:ring-1 focus-visible:ring-[#111111] focus-visible:border-[#111111] h-11 px-4 text-sm font-light placeholder:text-neutral-300 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jean@company.com"
                      disabled={status === "submitting"}
                      className="rounded-none border-[#EAEAEA] bg-white text-[#111111] focus-visible:ring-1 focus-visible:ring-[#111111] focus-visible:border-[#111111] h-11 px-4 text-sm font-light placeholder:text-neutral-300 transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Atelier Corp (Optional)"
                    disabled={status === "submitting"}
                    className="rounded-none border-[#EAEAEA] bg-white text-[#111111] focus-visible:ring-1 focus-visible:ring-[#111111] focus-visible:border-[#111111] h-11 px-4 text-sm font-light placeholder:text-neutral-300 transition-colors"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <Label
                    htmlFor="details"
                    className="text-[10px] tracking-widest uppercase font-semibold text-[#111111]"
                  >
                    Project Details *
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe the scope, timeline, goals, and any relevant links..."
                    disabled={status === "submitting"}
                    rows={5}
                    className="rounded-none border-[#EAEAEA] bg-white text-[#111111] focus-visible:ring-1 focus-visible:ring-[#111111] focus-visible:border-[#111111] p-4 text-sm font-light placeholder:text-neutral-300 transition-colors resize-none"
                  />
                </div>

                {/* Error status notice */}
                {status === "error" && (
                  <p className="text-xs text-red-500 font-medium">
                    Please fill out all required fields (*) correctly.
                  </p>
                )}

                {/* Submit button */}
                <div>
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-none bg-[#111111] text-white hover:bg-neutral-800 transition-all text-xs font-semibold tracking-wider uppercase px-6 py-4 h-auto w-full sm:w-auto cursor-pointer"
                  >
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
