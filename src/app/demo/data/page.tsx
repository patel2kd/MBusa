import { BriefcaseBusiness, Car, Database, MapPin, Timer } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Employee Data",
    icon: BriefcaseBusiness,
    collected: "Employee IDs, department, location, booking history",
    why: "Supports entitlement checks, mobility demand clustering, and usage behavior analysis.",
    impact: "Faster approvals and improved employee satisfaction through tailored allocation.",
  },
  {
    title: "Vehicle Inventory Data",
    icon: Car,
    collected: "Vehicle status, type, model, idle time, location",
    why: "Enables real-time allocation and highlights under-utilized assets.",
    impact: "Higher utilization and reduced idle inventory cost.",
  },
  {
    title: "Booking Data",
    icon: Database,
    collected: "Start/end date, booking status, guest inclusion, location trends",
    why: "Reveals demand spikes and booking lifecycle inefficiencies.",
    impact: "Improves planning and reduces booking friction.",
  },
  {
    title: "Location Data",
    icon: MapPin,
    collected: "Dealer location capacity, demand volume, transfer requirements",
    why: "Balances supply-demand by geography.",
    impact: "Lower relocation overhead and better service consistency.",
  },
  {
    title: "System Performance Data",
    icon: Timer,
    collected: "API latency, uptime, incident counts, error rates",
    why: "Measures platform reliability and operating health.",
    impact: "Supports SLA compliance and resilient enterprise operations.",
  },
];

export default function DataInsightsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Data & Insights</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((s) => (
          <Card key={s.title} className="space-y-3">
            <s.icon size={18} className="text-white/70" />
            <CardTitle>{s.title}</CardTitle>
            <CardDescription>
              <strong className="text-white/90">Collected:</strong> {s.collected}
            </CardDescription>
            <CardDescription>
              <strong className="text-white/90">Why it matters:</strong> {s.why}
            </CardDescription>
            <CardDescription>
              <strong className="text-white/90">Business impact:</strong> {s.impact}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}

