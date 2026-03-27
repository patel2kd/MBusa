"use client";

import { bookings as seedBookings, vehicles as seedVehicles } from "@/lib/mock-data";
import { Booking, Vehicle, VehicleStatus } from "@/types";
import { create } from "zustand";

type AppState = {
  vehicles: Vehicle[];
  bookings: Booking[];
  currentEmployeeId: string;
  setCurrentEmployeeId: (id: string) => void;
  updateVehicleStatus: (vehicleId: string, status: VehicleStatus) => void;
  addBooking: (booking: Booking) => void;
};

export const useAppStore = create<AppState>((set) => ({
  vehicles: seedVehicles,
  bookings: seedBookings,
  currentEmployeeId: "",
  setCurrentEmployeeId: (id) => set({ currentEmployeeId: id }),
  updateVehicleStatus: (vehicleId, status) =>
    set((state) => ({
      vehicles: state.vehicles.map((v) =>
        v.id === vehicleId
          ? { ...v, status, lastUpdated: new Date().toISOString() }
          : v
      ),
    })),
  addBooking: (booking) =>
    set((state) => ({
      bookings: [booking, ...state.bookings],
      vehicles: state.vehicles.map((v) =>
        v.id === booking.vehicleId ? { ...v, status: "Reserved" } : v
      ),
    })),
}));

