"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, ExternalLink, BarChart3 } from "lucide-react";
import Link from "next/link";

// Real Fagasa-style data mirroring the actual dashboard screenshots
const loanMetrics = [
  { label: "Active Portfolio", value: "KES 2.4M", change: "+12%", trend: "up", color: "text-emerald-400", bg: "bg-emerald-500/8 border-emerald-500/20" },
  { label: "PAR (91+ Days)", value: "KES 162K", change: "-5%", trend: "down", color: "text-rose-400", bg: "bg-rose-500/8 border-rose-500/20" },
  { label: "Monthly Yield", value: "KES 44K", change: "+8%", trend: "up", color: "text-blue-400", bg: "bg-blue-500/8 border-blue-500/20" },
  { label: "Repayment Rate", value: "91.4%", change: "+2%", trend: "up", color: "text-amber-400", bg: "bg-amber-500/8 border-amber-500/20" },
];

// PAR Aging buckets matching the actual bar chart in the screenshot
const parBuckets = [
  { label: "1-30 Days",  amount: 12000,  max: 162000, color: "bg-yellow-400" },
  { label: "31-60 Days", amount: 28000,  max: 162000, color: "bg-orange-400" },
  { label: "61-90 Days", amount: 48000,  max: 162000, color: "bg-red-400" },
  { label: "91+ Days",   amount: 162000, max: 162000, color: "bg-red-500" },
];

// Monthly yield sparkline (Jun → Nov as in the screenshots)
const yieldData = [8, 18, 32, 40, 43, 44];
const yieldMax = 44;

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative hidden lg:block w-full max-w-[520px]"
    >
      {/* Outer glow matching Fagasa's navy aesthetic */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-600/15 via-emerald-500/10 to-purple-600/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07091a]/95 shadow-2xl backdrop-blur-xl">

        {/* ── Browser chrome ─────────────────────────────── */}
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5 bg-[#0d1030]/80">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="ml-3 flex-1 rounded bg-black/30 px-3 py-0.5 text-[11px] text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            fagasa.co.ke/dashboard
          </div>
          <Link
            href="https://fagasa.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <ExternalLink size={12} />
          </Link>
        </div>

        {/* ── App header ─────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#0d1030]/60 px-4 py-2">
          <div className="flex items-center gap-2">
            <BarChart3 size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-white tracking-wide">FAGASA</span>
            <span className="text-[10px] text-slate-500">INVESTMENT</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </div>
        </div>

        {/* ── Metric cards grid ──────────────────────────── */}
        <div className="grid grid-cols-2 gap-2.5 p-4">
          {loanMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className={`rounded-xl border p-3 ${m.bg}`}
            >
              <div className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mb-1">
                {m.label}
              </div>
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {m.trend === "up"
                  ? <TrendingUp size={10} className="text-emerald-400" />
                  : <TrendingDown size={10} className="text-rose-400" />
                }
                <span className={`text-[10px] font-mono ${m.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                  {m.change} this month
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Two-column analytics ───────────────────────── */}
        <div className="grid grid-cols-2 gap-0 border-t border-white/5">

          {/* PAR Aging chart */}
          <div className="p-4 border-r border-white/5">
            <div className="flex items-center gap-1.5 mb-3">
              <AlertTriangle size={11} className="text-rose-400" />
              <span className="text-[10px] font-semibold text-white">Arrears Aging</span>
            </div>
            <div className="space-y-1.5">
              {parBuckets.map((bucket, i) => (
                <motion.div
                  key={bucket.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[9px] text-slate-500 w-14 flex-shrink-0 font-mono">{bucket.label}</span>
                  <div className="flex-1 h-3 rounded-sm bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(bucket.amount / bucket.max) * 100}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                      className={`h-full rounded-sm ${bucket.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Monthly Yield sparkline */}
          <div className="p-4">
            <div className="flex items-center gap-1.5 mb-3">
              <TrendingUp size={11} className="text-emerald-400" />
              <span className="text-[10px] font-semibold text-white">Monthly Yield</span>
            </div>
            <div className="relative h-[72px]">
              <svg viewBox="0 0 120 60" className="w-full h-full overflow-visible">
                {/* Fill area */}
                <defs>
                  <linearGradient id="yieldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.4)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.02)" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  d={`M 0,${60 - (yieldData[0] / yieldMax) * 50}
                      ${yieldData.map((v, i) => `L ${i * 24},${60 - (v / yieldMax) * 50}`).join(" ")}
                      L 120,60 L 0,60 Z`}
                  fill="url(#yieldGrad)"
                />
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                  points={yieldData.map((v, i) => `${i * 24},${60 - (v / yieldMax) * 50}`).join(" ")}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* End dot */}
                <motion.circle
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1, duration: 0.3 }}
                  cx={120}
                  cy={60 - (yieldData[yieldData.length - 1] / yieldMax) * 50}
                  r="3"
                  fill="#10b981"
                />
              </svg>
              <div className="absolute bottom-0 w-full flex justify-between text-[8px] text-slate-600 font-mono">
                {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────── */}
        <div className="flex items-center justify-between border-t border-white/5 bg-[#0d1030]/40 px-4 py-2">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <CheckCircle size={10} className="text-emerald-400" />
            System secure · Multi-branch
          </div>
          <span className="text-[10px] text-slate-600 font-mono">© 2026 FAGASA</span>
        </div>
      </div>
    </motion.div>
  );
}
