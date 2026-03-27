"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Brain,
  Building2,
  ChartNoAxesCombined,
  Database,
  LayoutDashboard,
  Layers,
  PlayCircle,
  Workflow,
} from "lucide-react";

const nav = [
  { href: "/", label: "Executive Overview", icon: LayoutDashboard },
  { href: "/demo/employee", label: "Employee Portal", icon: Building2 },
  { href: "/demo/dealer", label: "Dealer Portal", icon: Layers },
  { href: "/demo/admin", label: "Admin Dashboard", icon: ChartNoAxesCombined },
  { href: "/demo/data", label: "Data & Insights", icon: Database },
  { href: "/demo/ai", label: "AI & Optimization", icon: Brain },
  { href: "/demo/architecture", label: "System Architecture", icon: Workflow },
  { href: "/demo/operations", label: "App Operations", icon: LayoutDashboard },
  { href: "/demo/presentation", label: "Presentation Mode", icon: PlayCircle },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen md:grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-white/10 bg-black/40 p-5">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-white/40">MBUSA</p>
          <h2 className="text-lg font-semibold">Mobility Platform</h2>
        </div>
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white",
                  active && "bg-white text-black"
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="p-6 md:p-8">{children}</main>
    </div>
  );
}

