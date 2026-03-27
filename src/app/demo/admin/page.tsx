"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  bookingsOverTime,
  metrics,
  topLocations,
  usageByCategory,
} from "@/lib/mock-data";
import { useAppStore } from "@/store/app-store";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMemo, useState } from "react";

export default function AdminDashboardPage() {
  const { bookings, vehicles } = useAppStore();
  const [filter, setFilter] = useState<"All" | "Confirmed" | "Completed" | "Cancelled">("All");
  const filtered = useMemo(
    () => (filter === "All" ? bookings : bookings.filter((b) => b.status === filter)),
    [bookings, filter]
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <Card title="Total bookings">
          <CardTitle title="Count of all bookings">{filtered.length}</CardTitle>
          <CardDescription>Total bookings</CardDescription>
        </Card>
        <Card>
          <CardTitle title="Vehicles in service">{metrics.activeVehicles}</CardTitle>
          <CardDescription>Active vehicles</CardDescription>
        </Card>
        <Card>
          <CardTitle title="Overall utilization">{metrics.utilization}%</CardTitle>
          <CardDescription>Utilization</CardDescription>
        </Card>
        <Card>
          <CardTitle title="Idle more than 7 days">{metrics.idleVehicles}</CardTitle>
          <CardDescription>Idle vehicles</CardDescription>
        </Card>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-white/70">Filter Bookings:</span>
        {["All", "Confirmed", "Completed", "Cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as typeof filter)}
            className={`rounded px-2 py-1 ${filter === f ? "bg-white text-black" : "bg-white/10"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardTitle className="mb-3">Bookings Over Time</CardTitle>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3b3b3b" />
                <XAxis dataKey="day" stroke="#b5b5b5" />
                <YAxis stroke="#b5b5b5" />
                <Tooltip />
                <Bar dataKey="bookings" fill="#ffffff" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <CardTitle className="mb-3">Usage by Category</CardTitle>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={usageByCategory} dataKey="value" nameKey="category" fill="#9ca3af" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">Top Locations</CardTitle>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topLocations}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3b3b3b" />
                <XAxis dataKey="location" stroke="#b5b5b5" />
                <YAxis stroke="#b5b5b5" />
                <Tooltip />
                <Bar dataKey="bookings" fill="#6b7280" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <CardTitle className="mb-3">Recent Bookings</CardTitle>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.slice(0, 8).map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.id}</TableCell>
                  <TableCell>{b.vehicleId}</TableCell>
                  <TableCell>{b.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CardDescription className="mt-3">
            Live rows: {filtered.length} bookings, {vehicles.length} vehicles in network.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

