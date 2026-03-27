import { Booking, Employee, Vehicle, VehicleStatus, VehicleType } from "@/types";

export const locations = [
  "Austin",
  "Dallas",
  "Atlanta",
  "New York",
  "Los Angeles",
  "Chicago",
];

const models: Array<{ model: string; type: VehicleType }> = [
  { model: "C-Class", type: "Sedan" },
  { model: "E-Class", type: "Sedan" },
  { model: "S-Class", type: "Sedan" },
  { model: "GLE", type: "SUV" },
  { model: "GLC", type: "SUV" },
  { model: "G-Class", type: "SUV" },
  { model: "EQE", type: "EV" },
  { model: "EQS", type: "EV" },
  { model: "EQB", type: "EV" },
  { model: "CLA Coupe", type: "Coupe" },
];

const statuses: VehicleStatus[] = ["Available", "Reserved", "Maintenance"];

export const vehicles: Vehicle[] = Array.from({ length: 24 }).map((_, i) => {
  const model = models[i % models.length];
  return {
    id: `MB-${1000 + i}`,
    model: model.model,
    type: model.type,
    location: locations[i % locations.length],
    status: statuses[i % statuses.length],
    lastUpdated: `2026-03-${(i % 9) + 18}T0${i % 8}:30:00Z`,
    idleDays: (i * 3) % 16,
  };
});

export const employees: Employee[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `EMP-${500 + i}`,
  name: `Employee ${i + 1}`,
  department: ["Engineering", "Sales", "IT Ops", "Finance"][i % 4],
  location: locations[i % locations.length],
}));

export const bookings: Booking[] = Array.from({ length: 56 }).map((_, i) => ({
  id: `BK-${7000 + i}`,
  employeeId: employees[i % employees.length].id,
  vehicleId: vehicles[i % vehicles.length].id,
  location: locations[i % locations.length],
  startDate: `2026-03-${(i % 20) + 1}`,
  endDate: `2026-03-${(i % 20) + 2}`,
  withGuest: i % 4 === 0,
  status: i % 9 === 0 ? "Cancelled" : i % 3 === 0 ? "Completed" : "Confirmed",
}));

export const metrics = {
  totalBookings: bookings.length,
  activeVehicles: vehicles.filter((v) => v.status !== "Maintenance").length,
  utilization: 74,
  idleVehicles: vehicles.filter((v) => v.idleDays > 7).length,
  uptime: 99.95,
  apiLatencyMs: 184,
};

export const bookingsOverTime = [
  { day: "Mon", bookings: 19 },
  { day: "Tue", bookings: 24 },
  { day: "Wed", bookings: 21 },
  { day: "Thu", bookings: 27 },
  { day: "Fri", bookings: 32 },
  { day: "Sat", bookings: 16 },
  { day: "Sun", bookings: 14 },
];

export const usageByCategory = [
  { category: "SUV", value: 36 },
  { category: "Sedan", value: 30 },
  { category: "EV", value: 24 },
  { category: "Coupe", value: 10 },
];

export const topLocations = [
  { location: "Dallas", bookings: 42 },
  { location: "Austin", bookings: 39 },
  { location: "Atlanta", bookings: 34 },
  { location: "Los Angeles", bookings: 28 },
];

