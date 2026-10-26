"use client";

import { useEffect, useRef, useState } from "react";
import type { CalendarEvent } from "@/lib/content";
import { CopyLinkButton } from "@/components/copy-link-button";

export type { CalendarEvent };

type Filter = "all" | "events" | "walks";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Alle" },
  { id: "events", label: "Veranstaltungen" },
  { id: "walks", label: "Social Walks" },
];

function fmtDay(iso: string) {
  // Parse as local midnight so the day isn't shifted by the UTC offset.
  return new Date(`${iso}T00:00:00`).toLocaleDateString("de-DE", { day: "2-digit" });
}
function fmtMonth(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("de-DE", { month: "short", year: "numeric" });
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
  const scrollRef = useRef<HTMLOListElement>(null);
  const nextRef = useRef<HTMLLIElement>(null);
  const [today, setToday] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  // Id of an event deep-linked via #hash: it is scrolled into view (instead of
  // the default "next event") and briefly highlighted. null = no deep link.
  const [targetId, setTargetId] = useState<string | null>(null);

  useEffect(() => {
    // Local date parts, not toISOString() — the latter converts to UTC and
    // rolls back a day east of Greenwich, marking a past event as "als Nächstes".
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    setToday(`${y}-${m}-${d}`);

    // Honor ?filter=events|walks from the banner so the calendar opens on the
    // list the user clicked (and auto-scrolls to its next entry). Read from
    // window rather than useSearchParams to avoid a Suspense boundary in this
    // statically exported page.
    const q = new URLSearchParams(window.location.search).get("filter");
    if (q === "events" || q === "walks") setFilter(q);

    // Deep link to a single event via #<id>. Decode because a shared URL may
    // percent-encode the hash. Validated against actual ids below in the
    // scroll effect; an unknown hash simply falls back to the next event.
    const readHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (hash) setTargetId(hash);
    };
    readHash();

    // Also react when only the hash changes while we stay mounted — e.g. the
    // banner (present on every page) is clicked from the Terminkalender itself,
    // where Next keeps this component mounted and just updates the URL.
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const sorted = [...events]
    .filter((e) =>
      filter === "all"
        ? true
        : filter === "walks"
          ? e.kind === "walk"
          : e.kind !== "walk",
    )
    .sort((a, b) => a.date.localeCompare(b.date));

  // Index of the first (filtered) event that is today or later.
  const nextIndex = today
    ? sorted.findIndex((e) => e.date >= today)
    : -1;

  // A deep link (#id) pointing at a real event wins over the default scroll.
  const hasTarget = targetId !== null && sorted.some((e) => e.id === targetId);

  // When a valid deep link exists, make sure its event is shown: switch to the
  // "all" list if an inferred ?filter= would otherwise hide it (e.g. a Social
  // Walk link opened without ?filter=walks).
  useEffect(() => {
    if (!targetId) return;
    const target = events.find((e) => e.id === targetId);
    if (!target) return;
    const visible =
      filter === "all" ||
      (filter === "walks" ? target.kind === "walk" : target.kind !== "walk");
    if (!visible) setFilter("all");
  }, [targetId, filter, events]);

  useEffect(() => {
    if (!today) return;
    const container = scrollRef.current;
    if (!container) return;

    // Deep link: scroll to and highlight the linked event instead of "next".
    if (hasTarget && targetId) {
      const el = container.querySelector<HTMLLIElement>(
        `[data-event-id="${CSS.escape(targetId)}"]`,
      );
      if (el) {
        // Two scrolls are needed: the inner list must bring the card to its
        // top (with a small gap so the ring clears the top fade, h-8), and the
        // page must bring the container itself below the sticky header so the
        // card isn't hidden behind the nav.
        container.scrollTop = el.offsetTop - container.offsetTop - 24;
        const headerOffset = 96; // sticky header (h-20) + breathing room
        const top = container.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
    }

    // Default: scroll the next upcoming event to the top of the container.
    const target = nextRef.current;
    if (!target) return;
    container.scrollTop = target.offsetTop - container.offsetTop;
  }, [today, filter, hasTarget, targetId]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-brand text-white"
                  : "bg-muted text-foreground/70 hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div className="relative">
        <ol
          ref={scrollRef}
        className="no-scrollbar relative max-h-[40rem] space-y-3 overflow-y-auto scroll-smooth pt-1 pb-10 pl-8 pr-1"
      >
        {/* vertical rail (inside the padding so it never clips) */}
        <span className="pointer-events-none absolute inset-y-1 left-[3px] w-px bg-border" aria-hidden />
        {sorted.map((e, i) => {
          const isPast = today !== null && e.date < today;
          const isNext = i === nextIndex;
          const isTarget = hasTarget && e.id === targetId;
          return (
            <li
              key={e.id}
              id={e.id}
              data-event-id={e.id}
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
                } ${isTarget ? "ring-2 ring-brand" : isNext ? "ring-2 ring-brand/40" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg text-brand-dark">{e.title}</h2>
                    {isPast && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
                        vergangen
                      </span>
                    )}
                    {isNext && (
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                        als Nächstes
                      </span>
                    )}
                    <CopyLinkButton hash={e.id} label="diesem Termin" className="ml-auto" />
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/70">
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
                  <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/70">
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
    </div>
  );
}
