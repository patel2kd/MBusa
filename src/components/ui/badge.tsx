import React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/90",
        className
      )}
    >
      {children}
    </span>
  );
}

