"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, Printer } from "lucide-react";

interface ResumeToolbarProps {
  markdownContent: string;
}

export function ResumeToolbar({ markdownContent }: ResumeToolbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="print:hidden fixed top-0 w-full bg-white/85 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-teal-600 transition-all active:scale-95"
            title="Copy ATS Markdown text to clipboard"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-slate-500" />
                <span className="hidden sm:inline">Copy ATS Text</span>
                <span className="sm:hidden">Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition-all active:scale-95"
          >
            <Printer size={14} />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
