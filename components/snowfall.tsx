/**
 * Subtle, decorative snowfall for the Christmas theme. Pure CSS animation (no
 * libraries, no per-frame JS): each flake is an absolutely positioned "❄" that
 * drifts down and sideways on a loop. The overlay is fixed, non-interactive and
 * hidden from assistive tech.
 *
 * The flake values are a fixed table (not Math.random) so server and client
 * render identical markup — no hydration mismatch — while still looking varied.
 * Animation is disabled under prefers-reduced-motion via the .snow CSS (see
 * globals.css). Rendered only when `christmasTheme` is on (from layout.tsx).
 */

// left% · size(rem) · fall duration(s) · start delay(s) · end opacity
const FLAKES: [number, number, number, number, number][] = [
  [4, 0.75, 13, 0, 0.7],
  [11, 1.1, 17, 5, 0.5],
  [19, 0.6, 11, 2, 0.8],
  [27, 0.9, 15, 8, 0.6],
  [34, 1.25, 19, 1, 0.45],
  [42, 0.7, 12, 6, 0.75],
  [50, 1.0, 16, 3, 0.55],
  [58, 0.65, 14, 9, 0.7],
  [65, 1.15, 18, 0, 0.5],
  [72, 0.8, 13, 4, 0.65],
  [80, 1.3, 20, 7, 0.4],
  [87, 0.7, 12, 2, 0.75],
  [93, 0.95, 15, 10, 0.6],
  [97, 0.6, 11, 5, 0.8],
];

export function Snowfall() {
  return (
    <div className="snow" aria-hidden>
      {FLAKES.map(([left, size, duration, delay, opacity], i) => (
        <span
          key={i}
          className="snow__flake"
          style={
            {
              left: `${left}%`,
              fontSize: `${size}rem`,
              // custom props the keyframes read (see globals.css)
              "--snow-duration": `${duration}s`,
              "--snow-delay": `${delay}s`,
              "--snow-opacity": opacity,
            } as React.CSSProperties
          }
        >
          ❄
        </span>
      ))}
    </div>
  );
}
