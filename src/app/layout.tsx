import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "MBUSA Internal Mobility & Loaner Optimization Platform",
  description:
    "Executive-ready demo platform for internal mobility, loaner optimization, and operational excellence.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark bg-mbBlack">
      <body className="min-h-screen bg-mbBlack text-white antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

