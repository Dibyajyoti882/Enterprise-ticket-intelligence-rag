"use client";

import { useState } from "react";
import { BarChart3, CheckCircle2, Clock3, Play, Target } from "lucide-react";
import Sidebar from "@/components/sidebar";
import MetricCard from "@/components/metric-card";

export default function EvaluationsPage() {
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState("Today, 10:42 AM");

  function runEvaluation() {
    setRunning(true);

    setTimeout(() => {
      setRunning(false);
      setLastRun("Just now");
    }, 1400);
  }

  return (
    <div className="flex min-h-screen bg-[#07111f] text-white">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-10">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-cyan-300">Quality and reliability</p>
            <h1 className="mt-1 text-3xl font-semibold">RAG evaluations</h1>
            <p className="mt-2 text-slate-400">
              Measure retrieval quality, groundedness, and response quality.
            </p>
          </div>

          <button
            onClick={runEvaluation}
            disabled={running}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Play size={17} fill="currentColor" />
            {running ? "Running evaluation..." : "Run evaluation"}
          </button>
        </header>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Retrieval recall" value="91.8%" change="+2.4%" icon={Target} />
          <MetricCard title="Grounded answers" value="96.8%" change="+1.2%" icon={CheckCircle2} />
          <MetricCard title="Avg. response time" value="1.8s" change="-0.3s" icon={Clock3} />
          <MetricCard title="Test questions" value="250" change="+25 added" icon={BarChart3} />
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <div>
              <h2 className="text-lg font-semibold">Latest evaluation run</h2>
              <p className="mt-1 text-sm text-slate-400">Last run: {lastRun}</p>
            </div>

            <span className="h-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
              Passed quality threshold
            </span>
          </div>

          <div className="mt-8 space-y-6">
            {[
              ["Retrieval relevance", "92%", "w-[92%]", "bg-cyan-400"],
              ["Citation correctness", "97%", "w-[97%]", "bg-emerald-400"],
              ["Answer faithfulness", "95%", "w-[95%]", "bg-indigo-400"],
              ["Abstention accuracy", "89%", "w-[89%]", "bg-amber-400"],
            ].map(([label, value, width, color]) => (
              <div key={label}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-slate-800">
                  <div className={`h-2.5 rounded-full ${width} ${color}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}