import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const links = [
  ["/demo/employee", "Employee Booking Portal"],
  ["/demo/dealer", "Dealer Inventory Portal"],
  ["/demo/admin", "Admin Dashboard"],
  ["/demo/data", "Data & Insights"],
  ["/demo/ai", "AI & Optimization"],
  ["/demo/architecture", "System Architecture"],
  ["/demo/operations", "App Management & Operations"],
  ["/demo/presentation", "Presentation Mode"],
];

export default function DemoIndexPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">System Demo Navigation</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {links.map(([href, title]) => (
          <Link key={href} href={href}>
            <Card>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-1">Open module</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

