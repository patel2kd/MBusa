import * as React from "react";
import { cn } from "@/lib/utils";

export const Table = ({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <div className="w-full overflow-x-auto">
    <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
);

export const TableHeader = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="[&_tr]:border-b [&_tr]:border-white/10" {...props} />
);
export const TableBody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="[&_tr:last-child]:border-0" {...props} />
);
export const TableRow = (props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
);
export const TableHead = (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className="h-10 px-2 text-left align-middle text-xs font-medium text-white/60" {...props} />
);
export const TableCell = (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="p-2 align-middle text-sm text-white/90" {...props} />
);

