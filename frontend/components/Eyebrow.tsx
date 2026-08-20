import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-[10px] font-mono text-xs uppercase tracking-[0.18em] text-amber">
      <span className="inline-block h-px w-[22px] bg-amber" />
      {children}
    </span>
  );
}