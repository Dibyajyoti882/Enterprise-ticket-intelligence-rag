"use client";

import { ChangeEvent, useRef, useState } from "react";
import {
  Database,
  FileText,
  Search,
  Trash2,
  UploadCloud,
} from "lucide-react";
import Sidebar from "@/components/sidebar";

type Document = {
  id: number;
  name: string;
  type: string;
  chunks: number;
  status: "Ready" | "Indexing";
};

const initialDocuments: Document[] = [
  { id: 1, name: "Payment Gateway Runbook.pdf", type: "PDF", chunks: 42, status: "Ready" },
  { id: 2, name: "Incident Response Playbook.pdf", type: "PDF", chunks: 58, status: "Ready" },
  { id: 3, name: "Checkout Release Notes.md", type: "Markdown", chunks: 17, status: "Ready" },
];

export default function KnowledgeBasePage() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || []);

    const uploadedDocuments = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.name.split(".").pop()?.toUpperCase() || "FILE",
      chunks: Math.floor(Math.random() * 30) + 10,
      status: "Indexing" as const,
    }));

    setDocuments((current) => [...uploadedDocuments, ...current]);

    setTimeout(() => {
      setDocuments((current) =>
        current.map((document) =>
          uploadedDocuments.some((uploaded) => uploaded.id === document.id)
            ? { ...document, status: "Ready" }
            : document,
        ),
      );
    }, 1600);
  }

  function removeDocument(id: number) {
    setDocuments((current) => current.filter((document) => document.id !== id));
  }

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-[#07111f] text-white">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-10">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-cyan-300">RAG data foundation</p>
            <h1 className="mt-1 text-3xl font-semibold">Knowledge base</h1>
            <p className="mt-2 text-slate-400">
              Upload, index, and manage documents used by TicketIntel.
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            <UploadCloud size={18} />
            Upload documents
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.txt,.md,.docx"
            className="hidden"
            onChange={handleUpload}
          />
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Database className="text-cyan-300" />
            <p className="mt-4 text-sm text-slate-400">Indexed documents</p>
            <p className="mt-1 text-3xl font-semibold">{documents.length}</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <FileText className="text-indigo-300" />
            <p className="mt-4 text-sm text-slate-400">Knowledge chunks</p>
            <p className="mt-1 text-3xl font-semibold">
              {documents.reduce((total, document) => total + document.chunks, 0)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
            <p className="mt-4 text-sm text-slate-400">Index health</p>
            <p className="mt-1 text-3xl font-semibold text-emerald-400">Healthy</p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold">Your documents</h2>
              <p className="mt-1 text-sm text-slate-400">
                These files will become searchable RAG knowledge.
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 text-slate-500" size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search documents..."
                className="rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {filteredDocuments.map((document) => (
              <div
                key={document.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <FileText className="shrink-0 text-cyan-300" size={19} />
                  <div>
                    <p className="truncate text-sm font-medium text-slate-200">
                      {document.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {document.type} · {document.chunks} chunks
                    </p>
                  </div>
                </div>

                <div className="ml-4 flex items-center gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      document.status === "Ready"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {document.status}
                  </span>

                  <button
                    onClick={() => removeDocument(document.id)}
                    className="text-slate-500 transition hover:text-rose-400"
                    aria-label={`Delete ${document.name}`}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}