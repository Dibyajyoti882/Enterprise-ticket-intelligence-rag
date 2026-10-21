import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  positive?: boolean;
};

export default function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{value}</h3>
        </div>

        <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
          <Icon size={21} />
        </div>
      </div>

      <p className={`mt-4 text-sm ${positive ? "text-emerald-400" : "text-rose-400"}`}>
        {change}
        <span className="ml-1 text-slate-500">vs. last week</span>
      </p>
    </div>
  );
}