import Link from "next/link";
import { ArrowRight, CarFront, DollarSign, Gauge } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Fleet optimization",
    description: "Centralized visibility across dealer inventory and employee demand.",
    icon: CarFront,
  },
  {
    title: "Cost reduction",
    description: "Reduce idle inventory and improve utilization to lower operational waste.",
    icon: DollarSign,
  },
  {
    title: "Employee experience",
    description: "Self-service booking with availability insights and faster access.",
    icon: Gauge,
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Executive Overview</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
          Internal Mobility Optimization Platform
        </h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Dealership loaner fleets frequently sit idle while internal employees lack a centralized,
          efficient mobility access channel. This platform unifies visibility, booking, and
          optimization workflows for enterprise operations.
        </p>
        <Link href="/demo/presentation" className="mt-6 inline-block">
          <Button size="lg">
            View System Demo <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefits.map((b) => (
          <Card key={b.title}>
            <b.icon className="mb-3 text-white/70" size={20} />
            <CardTitle>{b.title}</CardTitle>
            <CardDescription className="mt-2">{b.description}</CardDescription>
          </Card>
        ))}
      </section>
    </div>
  );
}

