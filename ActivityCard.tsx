import type { ReactNode } from "react";

interface ActivityCardProps {
  icon: ReactNode;
  code: string;
  title: string;
  description: string;
}

export function ActivityCard({ icon, code, title, description }: ActivityCardProps) {
  return (
    <div className="rounded-lg border border-ink/10 bg-parchment p-7 text-clay">
      <div className="h-6 w-6">{icon}</div>
      <span className="mt-4 block font-mono text-[0.72rem] uppercase tracking-wide text-sage">
        {code}
      </span>
      <h3 className="mt-2 text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink/75">{description}</p>
    </div>
  );
}
