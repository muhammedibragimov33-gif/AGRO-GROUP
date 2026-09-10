interface StatCardProps {
  num: string;
  desc: string;
}

export function StatCard({ num, desc }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-serif text-4xl font-semibold text-clay">{num}</span>
      <span className="text-sm text-ink/70">{desc}</span>
    </div>
  );
}
