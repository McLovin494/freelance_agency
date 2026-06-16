"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function ParallaxBlueprint() {
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const lerp = 0.06;
    const current = currentRef.current;
    const target = targetRef.current;

    current.x += (target.x - current.x) * lerp;
    current.y += (target.y - current.y) * lerp;

    // Layer 1: faint grid — moves the least
    if (layer1Ref.current) {
      layer1Ref.current.style.transform = `translate3d(${current.x * 4}px, ${current.y * 4}px, 0) scale(1.12)`;
    }
    // Layer 2: annotations — moves moderately
    if (layer2Ref.current) {
      layer2Ref.current.style.transform = `translate3d(${current.x * 13}px, ${current.y * 13}px, 0) scale(1.07)`;
    }
    // Layer 3: arm — moves the most
    if (layer3Ref.current) {
      layer3Ref.current.style.transform = `translate3d(${current.x * 22}px, ${current.y * 22}px, 0) scale(1.03)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientWidth, clientHeight } = document.documentElement;
      targetRef.current = {
        x: (e.clientX / clientWidth - 0.5),
        y: (e.clientY / clientHeight - 0.5),
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div className="w-full h-full relative overflow-hidden select-none">
      {/*
       * Layer 1 — Deepest: faint blurred copy for grid/background depth.
       * White bg image means we just use multiply blend directly.
       */}
      <div
        ref={layer1Ref}
        className="absolute pointer-events-none"
        style={{
          inset: "-12%",
          opacity: 0.12,
          filter: "blur(1.5px)",
          mixBlendMode: "multiply",
          willChange: "transform",
        }}
      >
        <Image
          src="/Blueprint_2.png"
          alt=""
          fill
          sizes="60vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/*
       * Layer 2 — Mid-depth: annotations, measurements.
       * Slightly shifted position for parallax separation.
       */}
      <div
        ref={layer2Ref}
        className="absolute pointer-events-none"
        style={{
          inset: "-7%",
          opacity: 0.14,
          filter: "blur(0.3px)",
          mixBlendMode: "multiply",
          willChange: "transform",
        }}
      >
        <Image
          src="/Blueprint_2.png"
          alt=""
          fill
          sizes="60vw"
          className="object-cover"
          style={{ objectPosition: "55% 38%" }}
          priority
        />
      </div>

      {/*
       * Layer 3 — Foreground: the sharpest, most visible arm layer.
       * Highest opacity, crispest rendering.
       */}
      <div
        ref={layer3Ref}
        className="absolute pointer-events-none"
        style={{
          inset: "-3%",
          opacity: 0.22,
          mixBlendMode: "multiply",
          willChange: "transform",
        }}
      >
        <Image
          src="/Blueprint_2.png"
          alt=""
          fill
          sizes="60vw"
          className="object-cover"
          style={{ objectPosition: "50% 42%" }}
          priority
        />
      </div>

      {/* Feathered edges — blends seamlessly into white page on all sides */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, white 0%, transparent 25%, transparent 92%, white 100%), " +
            "linear-gradient(to bottom, white 0%, transparent 20%, transparent 88%, white 100%)",
        }}
      />
    </div>
  );
}
