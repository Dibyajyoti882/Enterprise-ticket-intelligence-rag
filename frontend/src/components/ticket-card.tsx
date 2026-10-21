import { AlertTriangle, CheckCircle2, Clock3, Ticket } from "lucide-react";

type TicketStatus = "Critical" | "Investigating" | "Resolved";

type TicketCardProps = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: string;
  confidence: string;
};

const styles: Record<TicketStatus, string> = {
  Critical: "border-rose-400/30 bg-rose-400/10 text-rose-300",
  Investigating: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Resolved: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

export default function TicketCard({
  id,
  title,
  description,
  status,
  priority,
  confidence,
}: TicketCardProps) {
  const StatusIcon =
    status === "Critical"
      ? AlertTriangle
      : status === "Resolved"
        ? CheckCircle2
        : Clock3;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
            <Ticket size={21} />
          </div>

          <div>
            <p className="text-xs font-medium text-cyan-300">{id}</p>
            <h2 className="mt-1 text-xl font-semibold text-white">{title}</h2>
          </div>
        </div>

        <span className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${styles[status]}`}>
          <StatusIcon size={14} />
          {status}
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">{description}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-950/50 p-3">
          <p className="text-xs text-slate-500">Priority</p>
          <p className="mt-1 font-medium text-white">{priority}</p>
        </div>

        <div className="rounded-xl bg-slate-950/50 p-3">
          <p className="text-xs text-slate-500">AI confidence</p>
          <p className="mt-1 font-medium text-emerald-400">{confidence}</p>
        </div>

        <div className="rounded-xl bg-slate-950/50 p-3">
          <p className="text-xs text-slate-500">Evidence found</p>
          <p className="mt-1 font-medium text-white">4 sources</p>
        </div>
      </div>
    </section>
  );
}