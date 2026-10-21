"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Database,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Analyze Ticket", href: "/workspace", icon: Sparkles },
  { label: "Knowledge Base", href: "/knowledge-base", icon: Database },
  { label: "Evaluations", href: "/evaluations", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-800 bg-[#081321] px-4 py-6">
      <div className="mb-10 flex items-center gap-3 px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-bold text-slate-950">
          TI
        </div>
        <div>
          <h1 className="font-semibold text-white">TicketIntel</h1>
          <p className="text-xs text-slate-500">AI Operations Console</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-cyan-400/10 text-cyan-300"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center gap-2 text-slate-300">
          <Settings size={17} />
          <span className="text-sm">System status</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          All services operational
        </div>
      </div>
    </aside>
  );
}