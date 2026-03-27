import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const slides = [
  {
    title: "Problem",
    text: "Idle loaner inventory and fragmented systems reduce utilization and employee mobility efficiency.",
  },
  {
    title: "Solution",
    text: "Unified booking, inventory management, analytics, and AI-assisted recommendations across stakeholders.",
  },
  {
    title: "Architecture",
    text: "Portal-based frontend, service-oriented backend, centralized data layer, and enterprise integrations.",
  },
  {
    title: "Business Impact",
    text: "Higher fleet utilization, lower idle costs, improved employee experience, and stronger operational control.",
  },
];

export default function PresentationModePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Presentation Mode</h1>
      <p className="text-white/70">Guided walkthrough for interview/demo storytelling.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {slides.map((s, idx) => (
          <Card key={s.title}>
            <CardTitle>
              {idx + 1}. {s.title}
            </CardTitle>
            <CardDescription className="mt-2">{s.text}</CardDescription>
          </Card>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/demo/admin">
          <Button>
            Open Live Dashboard <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
        <Link href="/demo/architecture">
          <Button variant="outline">Open Architecture View</Button>
        </Link>
      </div>
    </div>
  );
}

