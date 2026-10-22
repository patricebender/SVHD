"use client";

import { useEffect, useRef, useState } from "react";

export type CalendarEvent = {
  date: string;
  time?: string;
  title: string;
  location?: string;
  note?: string;
};

function fmtDay(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit" });
}
function fmtMonth(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { month: "short", year: "numeric" });
}

/**
 * Scrollable event list that, on mount, auto-scrolls to the next upcoming
 * event so past dates are tucked above but remain reachable by scrolling up.
 * The scrollbar is hidden for a cleaner look (see .no-scrollbar); the list
 * stays scrollable via wheel, touch and keyboard. "Past" is decided in the
 * browser (the page is statically exported, so there is no server "today");
 * until mount everything renders as upcoming to keep markup deterministic and
 * avoid a hydration mismatch.
 */
export function EventTimeline({ events }: { events: CalendarEvent[] }) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  const scrollRef = useRef<HTMLOListElement>(null);
  const nextRef = useRef<HTMLLIElement>(null);
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now.toISOString().slice(0, 10));
  }, []);

  // Index of the first event that is today or later.
  const nextIndex = today
    ? sorted.findIndex((e) => e.date >= today)
    : -1;

  useEffect(() => {
    if (!today) return;
    const container = scrollRef.current;
    const target = nextRef.current;
    if (!container || !target) return;
    // Scroll the next event to the top of the container (not the page).
    container.scrollTop = target.offsetTop - container.offsetTop;
  }, [today]);

  return (
    <div className="relative">
      <ol
        ref={scrollRef}
        className="no-scrollbar relative max-h-[32rem] space-y-3 overflow-y-auto scroll-smooth py-1 pl-8 pr-1"
      >
        {/* vertical rail (inside the padding so it never clips) */}
        <span className="pointer-events-none absolute inset-y-1 left-[3px] w-px bg-border" aria-hidden />
        {sorted.map((e, i) => {
          const isPast = today !== null && e.date < today;
          const isNext = i === nextIndex;
          return (
            <li
              key={`${e.date}-${e.title}`}
              ref={isNext ? nextRef : undefined}
              className="relative scroll-mt-2"
            >
              <span
                className={`absolute -left-[26px] top-5 h-3 w-3 rounded-full border-2 border-white ${
                  isPast ? "bg-brand-mid" : "bg-brand"
                }`}
              />
              <div
                className={`card flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${
                  isPast ? "opacity-55" : ""
                } ${isNext ? "ring-2 ring-brand/40" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg text-brand-dark">{e.title}</h2>
                    {isPast && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/50">
                        vergangen
                      </span>
                    )}
                    {isNext && (
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                        als Nächstes
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60">
                    {e.time && <span>{e.time}</span>}
                    {e.location && <span>{e.location}</span>}
                  </div>
                  {e.note && <p className="mt-2 text-sm text-foreground/70">{e.note}</p>}
                </div>
                <time
                  dateTime={e.date}
                  className="flex-none rounded-xl bg-muted px-4 py-2 text-center"
                >
                  <span className="block text-2xl font-bold text-brand">{fmtDay(e.date)}</span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                    {fmtMonth(e.date)}
                  </span>
                </time>
              </div>
            </li>
          );
        })}
      </ol>
      {/* Fade hints that there is more above/below. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
