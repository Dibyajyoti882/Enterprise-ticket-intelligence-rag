import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  Ticket,
} from "lucide-react";
import Sidebar from "@/components/sidebar";
import MetricCard from "@/components/metric-card";

const recentTickets = [
  {
    id: "INC-1042",
    title: "Payment gateway timeout during checkout",
    status: "Critical",
    confidence: "94%",
    color: "text-rose-400 bg-rose-400/10",
  },
  {
    id: "INC-1038",
    title: "Users unable to reset account passwords",
    status: "Investigating",
    confidence: "88%",
    color: "text-amber-400 bg-amber-400/10",
  },
  {
    id: "INC-1031",
    title: "Analytics dashboard showing delayed data",
    status: "Resolved",
    confidence: "97%",
    color: "text-emerald-400 bg-emerald-400/10",
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#07111f] text-white">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-10">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-cyan-300">Tuesday, October 22</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              Operations overview
            </h2>
            <p className="mt-2 text-slate-400">
              Monitor ticket intelligence, retrieval quality, and AI performance.
            </p>
          </div>

          <Link
            href="/workspace"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            <Sparkles size={18} />
            Analyze a ticket
          </Link>
        </header>

        <section className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Tickets analyzed" value="1,284" change="+18.2%" icon={Ticket} />
          <MetricCard title="AI confidence" value="92.4%" change="+3.6%" icon={ShieldCheck} />
          <MetricCard title="Resolution rate" value="78.8%" change="+6.1%" icon={CheckCircle2} />
          <MetricCard title="Knowledge sources" value="346" change="+24 added" icon={FileText} />
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Recent ticket analyses</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Latest AI-assisted incident investigations.
                </p>
              </div>
              <button className="text-sm text-cyan-300 hover:text-cyan-200">
                View all
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {recentTickets.map((ticket) => (
                <Link
                  href="/workspace"
                  key={ticket.id}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-cyan-400/40 hover:bg-slate-800/70"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-cyan-300">{ticket.id}</p>
                    <p className="mt-1 truncate text-sm text-slate-200">{ticket.title}</p>
                  </div>

                  <div className="ml-4 flex items-center gap-3">
                    <span className={`hidden rounded-full px-3 py-1 text-xs sm:block ${ticket.color}`}>
                      {ticket.status}
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {ticket.confidence}
                    </span>
                    <ArrowUpRight size={17} className="text-slate-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-indigo-500/10 to-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-400/15 p-3 text-indigo-300">
                <Clock3 size={21} />
              </div>
              <div>
                <h3 className="font-semibold">Today&apos;s impact</h3>
                <p className="text-sm text-slate-400">AI-assisted operations</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Time saved</span>
                  <span className="font-medium text-white">42.5 hrs</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Grounded answers</span>
                  <span className="font-medium text-white">96.8%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[96%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}