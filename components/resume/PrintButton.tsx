"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => typeof window !== "undefined" && window.print()}
      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
    >
      <Printer size={16} />
      Print / Save PDF
    </button>
  );
}
