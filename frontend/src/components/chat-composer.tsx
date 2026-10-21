"use client";

import { FormEvent, useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";

export default function ChatComposer() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) return;

    setSubmittedMessage(message);
    setMessage("");
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-cyan-300" />
        <h2 className="font-semibold text-white">Ask TicketIntel</h2>
      </div>

      <p className="mt-1 text-sm text-slate-400">
        Ask a follow-up question about this incident or its evidence.
      </p>

      {submittedMessage && (
        <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3 text-sm text-slate-300">
          Question submitted: <span className="text-cyan-300">{submittedMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 flex gap-3">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="For example: What changed before this incident?"
          className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
        />

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          <span className="hidden sm:inline">Send</span>
          <SendHorizonal size={17} />
        </button>
      </form>
    </section>
  );
}