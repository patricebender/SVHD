"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping drone footage of the training ground as a hero backdrop.
 * - Autoplays only when the user has not requested reduced motion; otherwise
 *   the poster image stays (video is never loaded in that case).
 * - `playsInline` keeps iOS from going fullscreen; `preload="none"` + poster
 *   means the poster paints first and the video streams in behind the text.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    video.play().catch(() => {
      /* autoplay blocked — poster remains, no action needed */
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster="/video/trainingsgelaende-poster.jpg"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
    >
      <source src="/video/trainingsgelaende.mp4" type="video/mp4" />
    </video>
  );
}
