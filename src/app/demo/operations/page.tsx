import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { metrics } from "@/lib/mock-data";

export default function OperationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">App Management & Operations</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardTitle>Monitoring</CardTitle>
          <CardDescription className="mt-2">API latency: {metrics.apiLatencyMs} ms</CardDescription>
          <CardDescription>System uptime: {metrics.uptime}%</CardDescription>
        </Card>
        <Card>
          <CardTitle>Logs</CardTitle>
          <CardDescription className="mt-2">[WARN] Booking retries exceeded: BK-7072</CardDescription>
          <CardDescription>[ERROR] Validation failure from HR lookup EMP-998</CardDescription>
        </Card>
        <Card>
          <CardTitle>Incident Handling</CardTitle>
          <CardDescription className="mt-2">
            Scenario: booking confirmation fails. Trigger alert, route to on-call, execute retry, and
            provide fallback vehicle assignment.
          </CardDescription>
        </Card>
      </div>
      <Card>
        <CardTitle>Deployment Pipeline</CardTitle>
        <CardDescription className="mt-3">
          Dev to QA to Prod with automated checks: unit tests, API contract validation, and release
          health verification.
        </CardDescription>
      </Card>
    </div>
  );
}

