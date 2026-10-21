import { ExternalLink, FileText, ShieldCheck } from "lucide-react";

type Source = {
  title: string;
  type: string;
  relevance: number;
  excerpt: string;
};

type SourceEvidenceProps = {
  sources: Source[];
};

export default function SourceEvidence({ sources }: SourceEvidenceProps) {
  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-semibold text-white">Retrieved evidence</h2>
          <p className="mt-1 text-sm text-slate-400">
            Sources used for this diagnosis
          </p>
        </div>

        <div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400">
          <ShieldCheck size={18} />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {sources.map((source) => (
          <article
            key={source.title}
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-cyan-400/40"
          >
            <div className="flex gap-3">
              <FileText size={18} className="mt-0.5 shrink-0 text-cyan-300" />

              <div className="min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-slate-200">
                    {source.title}
                  </p>
                  <ExternalLink size={15} className="shrink-0 text-slate-500" />
                </div>

                <p className="mt-1 text-xs text-slate-500">{source.type}</p>
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  “{source.excerpt}”
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Relevance</span>
                  <span className="text-xs font-medium text-emerald-400">
                    {source.relevance}%
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}