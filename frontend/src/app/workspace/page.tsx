import { Bot, CheckCircle2, Clock3, Wrench } from "lucide-react";
import Sidebar from "@/components/sidebar";
import TicketCard from "@/components/ticket-card";
import SourceEvidence from "@/components/source-evidence";
import ChatComposer from "@/components/chat-composer";

const sources = [
  {
    title: "Payment Gateway Runbook",
    type: "Operational documentation · Section 4.2",
    relevance: 98,
    excerpt: "A timeout spike after checkout can be caused by an expired gateway API credential.",
  },
  {
    title: "Incident INC-0987",
    type: "Resolved incident · 14 days ago",
    relevance: 94,
    excerpt: "The same error pattern was resolved after renewing the payment provider access token.",
  },
  {
    title: "Release Notes v2.8.4",
    type: "Engineering release note",
    relevance: 87,
    excerpt: "Checkout retry behavior was updated and requires a valid gateway token configuration.",
  },
];

export default function WorkspacePage() {
  return (
    <div className="flex min-h-screen bg-[#07111f] text-white">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-10">
        <header>
          <p className="text-sm text-cyan-300">AI-assisted investigation</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            Ticket analysis workspace
          </h1>
          <p className="mt-2 text-slate-400">
            Grounded diagnosis based on your organization&apos;s knowledge base.
          </p>
        </header>

        <div className="mt-8 grid gap-6 2xl:grid-cols-[minmax(0,1fr)_370px]">
          <div className="space-y-6">
            <TicketCard
              id="INC-1042"
              title="Payment gateway timeout during checkout"
              description="Customers report that checkout requests fail after 30 seconds. The issue began shortly after the latest deployment and affects both web and mobile clients."
              status="Critical"
              priority="P1 — High impact"
              confidence="94%"
            />

            <section className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6">
              <div className="flex gap-3">
                <div className="h-fit rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
                  <Bot size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium text-cyan-300">AI diagnosis</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Likely expired payment-provider API credential
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    The timeout pattern closely matches incident INC-0987. Evidence
                    indicates the payment gateway token may have expired after the
                    latest configuration deployment.
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-700/60 pt-5">
                <p className="text-sm font-medium text-white">Recommended actions</p>

                <div className="mt-4 space-y-3">
                  <div className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                    Verify the gateway credential expiration date in the secrets vault.
                  </div>

                  <div className="flex gap-3 text-sm text-slate-300">
                    <Wrench size={18} className="shrink-0 text-cyan-300" />
                    Rotate the credential and redeploy the checkout configuration.
                  </div>

                  <div className="flex gap-3 text-sm text-slate-300">
                    <Clock3 size={18} className="shrink-0 text-amber-300" />
                    Monitor checkout latency and failure rate for the next 30 minutes.
                  </div>
                </div>
              </div>
            </section>

            <ChatComposer />
          </div>

          <SourceEvidence sources={sources} />
        </div>
      </main>
    </div>
  );
}