export type VehicleStatus = "Available" | "Reserved" | "Maintenance";
export type VehicleType = "SUV" | "Sedan" | "EV" | "Coupe";

export type Vehicle = {
  id: string;
  model: string;
  type: VehicleType;
  location: string;
  status: VehicleStatus;
  lastUpdated: string;
  idleDays: number;
};

export type Booking = {
  id: string;
  employeeId: string;
  vehicleId: string;
  location: string;
  startDate: string;
  endDate: string;
  withGuest: boolean;
  status: "Confirmed" | "Completed" | "Cancelled";
};

export type Employee = {
  id: string;
  name: string;
  department: string;
  location: string;
};

