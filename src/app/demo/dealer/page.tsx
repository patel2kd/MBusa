"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppStore } from "@/store/app-store";
import { VehicleStatus } from "@/types";

const statuses: VehicleStatus[] = ["Available", "Reserved", "Maintenance"];

export default function DealerPortalPage() {
  const { vehicles, updateVehicleStatus } = useAppStore();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dealer Inventory Portal</h1>
      <Card>
        <CardTitle className="mb-4">Dealer Vehicle Inventory</CardTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle ID</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Idle Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((v) => (
              <TableRow key={v.id}>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.model}</TableCell>
                <TableCell>
                  <select
                    className="rounded border border-white/20 bg-transparent px-2 py-1 text-xs"
                    value={v.status}
                    onChange={(e) => updateVehicleStatus(v.id, e.target.value as VehicleStatus)}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s} className="bg-black">
                        {s}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>{new Date(v.lastUpdated).toLocaleString()}</TableCell>
                <TableCell>
                  <Badge className={v.idleDays > 7 ? "border-amber-400 text-amber-200" : ""}>
                    {v.idleDays} days
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

