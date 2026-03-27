"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { locations } from "@/lib/mock-data";
import { useAppStore } from "@/store/app-store";

export default function EmployeePortalPage() {
  const { vehicles, addBooking, currentEmployeeId, setCurrentEmployeeId } = useAppStore();
  const [location, setLocation] = useState(locations[0]);
  const [date, setDate] = useState("2026-03-28");
  const [loading, setLoading] = useState(false);
  const [withGuest, setWithGuest] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  const available = useMemo(
    () =>
      vehicles.filter(
        (v) => v.status === "Available" && v.location.toLowerCase() === location.toLowerCase()
      ),
    [vehicles, location]
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 550);
  };

  const submitBooking = () => {
    if (!selectedVehicle || !currentEmployeeId) return;
    const id = `BK-${Math.floor(Math.random() * 100000)}`;
    addBooking({
      id,
      employeeId: currentEmployeeId,
      vehicleId: selectedVehicle,
      location,
      startDate: date,
      endDate: date,
      withGuest,
      status: "Confirmed",
    });
    setConfirmation(`Booking ${id} confirmed for ${selectedVehicle}.`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Employee Booking Portal</h1>
      <Card className="space-y-4">
        <CardTitle>Login + Search</CardTitle>
        <div className="grid gap-3 md:grid-cols-3">
          <Input
            placeholder="Employee ID (e.g. EMP-500)"
            value={currentEmployeeId}
            onChange={(e) => setCurrentEmployeeId(e.target.value)}
          />
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <Button variant="outline" onClick={handleSearch}>
          Search Availability
        </Button>
      </Card>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="h-36" />
          <Skeleton className="h-36" />
          <Skeleton className="h-36" />
        </div>
      ) : available.length === 0 ? (
        <Card>
          <CardTitle>No vehicles available</CardTitle>
          <CardDescription>Try another location/date combination.</CardDescription>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {available.map((v) => (
            <Card key={v.id} className="space-y-2">
              <CardTitle>{v.model}</CardTitle>
              <CardDescription>{v.type}</CardDescription>
              <Badge>Available</Badge>
              <Button
                variant={selectedVehicle === v.id ? "default" : "secondary"}
                onClick={() => setSelectedVehicle(v.id)}
              >
                {selectedVehicle === v.id ? "Selected" : "Select"}
              </Button>
            </Card>
          ))}
        </div>
      )}

      <Card className="space-y-4">
        <CardTitle>Booking Flow</CardTitle>
        <label className="flex items-center gap-2 text-sm text-white/80">
          <input
            type="checkbox"
            checked={withGuest}
            onChange={(e) => setWithGuest(e.target.checked)}
          />
          Add guest to booking
        </label>
        <Button onClick={submitBooking}>Submit Booking</Button>
        {confirmation ? <p className="text-sm text-emerald-300">{confirmation}</p> : null}
      </Card>
    </div>
  );
}

