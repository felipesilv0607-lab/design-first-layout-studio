/** Small outbound-link glyph, inherits currentColor. */
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`inline-block size-[0.7em] shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}
