"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const demand = [
  { day: "Mon", suv: 58 },
  { day: "Tue", suv: 61 },
  { day: "Wed", suv: 63 },
  { day: "Thu", suv: 65 },
  { day: "Fri", suv: 69 },
  { day: "Sat", suv: 77 },
  { day: "Sun", suv: 73 },
];

export default function AIOptimizationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI & Optimization</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardTitle>Recommended Vehicle</CardTitle>
          <CardDescription className="mt-2">
            For EMP-503 in Dallas, recommended: <strong className="text-white">GLE (SUV)</strong>
          </CardDescription>
          <CardDescription className="mt-2">
            Decision score combines historical usage, current inventory, and predicted weekend demand.
          </CardDescription>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle className="mb-3">Demand Prediction (Mock)</CardTitle>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demand}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3b3b3b" />
                <XAxis dataKey="day" stroke="#b5b5b5" />
                <YAxis stroke="#b5b5b5" />
                <Tooltip />
                <Area type="monotone" dataKey="suv" stroke="#fff" fill="#6b7280" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <Card className="space-y-3">
        <CardTitle>Smart Insights</CardTitle>
        <Badge>SUV demand increases on weekends</Badge>
        <Badge>Dealer Atlanta has 30% idle inventory in EV segment</Badge>
        <Badge>Dallas reservation lead time is 21% lower than network average</Badge>
      </Card>
    </div>
  );
}

