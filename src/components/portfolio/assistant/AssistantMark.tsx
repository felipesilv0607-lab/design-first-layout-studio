/** Assistant identity: Felipe Luz monogram on graphite, with the burnt-orange full stop. */
export function AssistantMark({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-7 text-[0.65rem]" : "size-9 text-xs";
  return (
    <span
      aria-hidden="true"
      className={`font-display-wide inline-flex shrink-0 items-center justify-center rounded-sm border border-line-strong bg-surface font-extrabold tracking-tight text-foreground ${box}`}
    >
      FL<span className="text-ember">.</span>
    </span>
  );
}
