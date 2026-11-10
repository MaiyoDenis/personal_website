"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Globe, TrendingUp } from "lucide-react";

export default function HeroDashboard() {
  const metrics = [
    { icon: Globe, value: "1,247", label: "Online Users", color: "text-blue-400" },
    { icon: TrendingUp, value: "84K", label: "Revenue KES", color: "text-emerald-400" },
    { icon: Cpu, value: "326", label: "Active Devices", color: "text-violet-400" },
    { icon: Activity, value: "99.8%", label: "Uptime", color: "text-cyan-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl" />
      
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-xl">
        {/* Window Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/5">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 rounded bg-black/30 px-3 py-1 text-xs text-gray-400 font-mono">
            app.ewifi.io/dashboard
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Activity size={16} className="text-blue-400" />
              Real-time Analytics
            </h3>
            <span className="flex items-center gap-2 text-xs font-mono text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl border border-white/5 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <m.icon size={16} className={m.color} />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">{m.value}</div>
                <div className="text-xs text-gray-400">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 h-24 flex items-end gap-2">
            {[40, 70, 45, 90, 65, 80, 55, 100, 75, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
