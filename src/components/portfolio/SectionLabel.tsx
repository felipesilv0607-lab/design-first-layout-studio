type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
};

/** Mono section marker: "02 — Sobre". */
export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`type-label flex items-center gap-3 text-muted-foreground ${className}`}>
      <span className="text-ember-bright">{number}</span>
      <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
      <span>{label}</span>
    </p>
  );
}
