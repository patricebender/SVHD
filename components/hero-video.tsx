"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Muted, looping drone footage of the training ground as a hero backdrop.
 * - The poster is rendered as an eager, high-priority <Image> so it is the LCP
 *   element and paints immediately (the raw <video poster> is lazy and was the
 *   cause of a slow LCP).
 * - Autoplays only when the user has not requested reduced motion; otherwise
 *   the poster stays and the video is never loaded (`preload="none"`).
 * - `playsInline` keeps iOS from going fullscreen.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        /* autoplay blocked — poster remains, no action needed */
      });
  }, []);

  return (
    <div className={className}>
      {/* LCP element: eager, high-priority poster. Fades out once video plays. */}
      <Image
        src="/video/trainingsgelaende-poster.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"}`}
        aria-hidden
      />
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        tabIndex={-1}
      >
        <source src="/video/trainingsgelaende.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
