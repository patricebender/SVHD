"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { events, socialWalks, news } from "@/lib/content";

const ROTATE_MS = 6000;
const ROLL_MS = 500;

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
  });
}

type Slide = { href: string; text: string };

/**
 * Build the rotating slides. "Today" is resolved in the browser (the site is
 * statically exported, so there is no server date); until mount we pass null
 * and only the date-independent slides render, keeping markup deterministic.
 *
 * Slides, in order:
 *  1. Next Termin       → earliest event today-or-later (omitted when none left)
 *  2. Next Social Walk  → earliest walk today-or-later  (omitted when none left)
 *  3. Latest news       → newest news entry by date
 */
function buildSlides(today: string | null): Slide[] {
  const slides: Slide[] = [];

  const nextEvent = today
    ? [...events]
        .sort((a, b) => a.date.localeCompare(b.date))
        .find((e) => e.date >= today)
    : null;
  if (nextEvent) {
    slides.push({
      href: "/terminkalender/",
      text: `Nächster Termin · ${fmtDate(nextEvent.date)}${
        nextEvent.time ? ` · ${nextEvent.time}` : ""
      } · ${nextEvent.title}`,
    });
  }

  const nextWalk = today
    ? [...socialWalks].sort().find((d) => d >= today)
    : null;
  if (nextWalk) {
    slides.push({
      href: "/terminkalender/",
      text: `Nächster Social Walk · ${fmtDate(nextWalk)}`,
    });
  }

  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (latest) {
    slides.push({ href: "/aktuelles/", text: `Aktuelles · ${latest.title}` });
  }

  return slides;
}

/**
 * Promo bar above the nav rotating through the next Termin, next Social Walk
 * and the latest news. Two behaviours borrowed from sharp6's trust bar:
 *
 *  1. Rotation — cycles one slide at a time with a vertical roll (current
 *     slide slides up and out, next slides up and in). Each slide is its own
 *     link, so the roll track holds two full links (current + next).
 *
 *  2. Merge-on-scroll — the bar is not sticky (the nav below it is). As the
 *     page scrolls it collapses its height to 0 and fades out, so the nav
 *     appears to absorb it and rise to the top edge.
 *
 * Both effects respect prefers-reduced-motion: rotation becomes an instant
 * swap and the collapse becomes an instant hide.
 */
export function EventBanner() {
  const [today, setToday] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now.toISOString().slice(0, 10));
  }, []);

  // Track reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = () => (reducedMotion.current = mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const slides = buildSlides(today);
  const count = slides.length;

  // Rotation loop. Reset the index whenever the slide count changes (e.g. the
  // date-dependent slides appear on mount) so it never points past the array.
  useEffect(() => {
    setIndex(0);
    if (count <= 1) return;
    const id = setInterval(() => {
      if (reducedMotion.current) {
        setIndex((i) => (i + 1) % count);
        return;
      }
      // Start the roll, then swap the slide at the roll's end.
      setRolling(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % count);
        setRolling(false);
      }, ROLL_MS);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [count]);

  // Collapse the bar once the user scrolls past a small threshold.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Hysteresis: collapse only after scrolling well past the bar, expand
      // only when back near the very top. The dead zone between the two
      // thresholds stops the collapse from feeding back into scrollY and
      // flickering the state near a single boundary.
      const y = window.scrollY;
      setCollapsed((wasCollapsed) => {
        if (!wasCollapsed && y > 48) return true;
        if (wasCollapsed && y < 4) return false;
        return wasCollapsed;
      });
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (count === 0) return null;

  const current = slides[index % count];
  const next = slides[(index + 1) % count];

  return (
    <div
      className="overflow-hidden bg-brand transition-[max-height,opacity] duration-500 ease-out"
      style={{ maxHeight: collapsed ? 0 : "1.75rem", opacity: collapsed ? 0 : 1 }}
      aria-hidden={collapsed}
    >
      <div className="container-page flex h-7 items-center justify-center">
        {/* Roll viewport: exactly one line tall, clips the two stacked slides. */}
        <div className="h-7 w-full overflow-hidden">
          {/* Track holds current + next stacked vertically; it slides up one
              line to reveal the next, then snaps back after the swap. */}
          <div
            style={{
              transition: rolling ? `transform ${ROLL_MS}ms ease-out` : "none",
              transform: rolling ? "translateY(-1.75rem)" : "translateY(0)",
            }}
          >
            <Slide slide={current} />
            <Slide slide={next} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ slide }: { slide: Slide }) {
  return (
    <Link
      href={slide.href}
      className="flex h-7 items-center justify-center gap-2 truncate text-center text-[11px] text-white/80 transition hover:text-white sm:text-xs"
    >
      <span className="relative flex h-1.5 w-1.5 flex-none" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-mid [animation-duration:2.5s]" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-mid" />
      </span>
      <span className="truncate">{slide.text}</span>
    </Link>
  );
}
