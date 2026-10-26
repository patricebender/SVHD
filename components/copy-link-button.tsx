"use client";

import { useEffect, useRef, useState } from "react";

// Standard "link" glyph (two interlocking chain links at 45°), Heroicons outline.
const LinkIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M13.19 8.69a4.5 4.5 0 0 1 0 6.36l-3 3a4.5 4.5 0 0 1-6.36-6.36l1.5-1.5" />
    <path d="M10.81 15.31a4.5 4.5 0 0 1 0-6.36l3-3a4.5 4.5 0 0 1 6.36 6.36l-1.5 1.5" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

/**
 * Small inline button that copies a deep link to the current page plus `hash`
 * (e.g. an event or news anchor) to the clipboard, updates the address bar to
 * match, and flashes a short "Link kopiert" confirmation. Falls back to only
 * updating the hash when the Clipboard API is unavailable (insecure context).
 */
export function CopyLinkButton({
  hash,
  label = "diesem Eintrag",
  className = "",
}: {
  hash: string;
  /** Fills the aria-label: "Link zu {label} kopieren". */
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = () => {
    const url = `${window.location.origin}${window.location.pathname}#${hash}`;
    // Reflect the hash in the address bar so the visible URL matches what we
    // copied, without triggering a scroll/navigation.
    history.replaceState(null, "", `#${hash}`);
    void navigator.clipboard?.writeText(url);
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Link zu ${label} kopieren`}
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold transition ${
        copied
          ? "text-brand"
          : "text-foreground/50 hover:bg-muted hover:text-brand"
      } ${className}`}
    >
      {copied ? <CheckIcon /> : <LinkIcon />}
      <span>{copied ? "Link kopiert" : "Link"}</span>
    </button>
  );
}
