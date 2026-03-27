import { Card, CardDescription, CardTitle } from "@/components/ui/card";

function Box({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>- {i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">System Architecture</h1>
      <Card className="space-y-5">
        <CardTitle>Logical Component Diagram</CardTitle>
        <div className="grid gap-4 lg:grid-cols-4">
          <Box
            title="Frontend"
            items={["Employee Portal", "Dealer Portal", "Admin Dashboard"]}
          />
          <Box
            title="Backend Services"
            items={["Auth Service", "Booking Service", "Inventory Service"]}
          />
          <Box
            title="Data Layer"
            items={["Postgres (Bookings, Vehicles, Users)", "Caching Layer"]}
          />
          <Box
            title="Integrations"
            items={["HR System (Employee validation)", "Dealer Management System"]}
          />
        </div>
        <CardDescription>
          Data flow: user action in portal to service API call, then validation/auth, then data
          update, then analytics aggregation and dashboard refresh.
        </CardDescription>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-2">
          <CardTitle>Mock API Endpoints</CardTitle>
          <CardDescription>`GET /api/vehicles?location=Dallas&status=Available`</CardDescription>
          <CardDescription>`POST /api/bookings` (employee booking payload)</CardDescription>
          <CardDescription>`PATCH /api/vehicles/:id/status` (dealer status update)</CardDescription>
          <CardDescription>`GET /api/metrics` (dashboard aggregates)</CardDescription>
        </Card>
        <Card>
          <CardTitle>Scalability Notes</CardTitle>
          <CardDescription className="mt-2">
            Architecture supports service isolation, workload-based scaling, observability, and
            phased integration into enterprise systems.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

