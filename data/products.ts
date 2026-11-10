import { Wifi, BookOpen, Trophy } from "lucide-react";

export const products = [
  {
    icon: Wifi,
    emoji: "📡",
    name: "E-WiFi",
    tagline: "Smart WiFi Management",
    status: "Building",
    progress: 65,
    description:
      "A comprehensive WiFi platform combining hotspot authentication, real-time analytics, subscription management, M-Pesa payments, and cloud admin tools for Kenyan businesses.",
    highlights: ["Hotspot Auth", "Analytics", "M-Pesa", "Multi-tenant"],
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(59,130,246,0.2)",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/8",
    github: "https://github.com/MaiyoDenis/e-wifi",
    demo: "https://e-wifi.example.com",
    metrics: ["1,247 active users", "99.8% uptime", "84K KES revenue"],
  },
  {
    icon: BookOpen,
    emoji: "🤖",
    name: "AI Learning Assistant",
    tagline: "Personalized Tech Education",
    status: "Building",
    progress: 45,
    description:
      "An intelligent software engineering tutor that adapts to your learning pace. Built with GPT-4, LangChain, and real project-based curricula to teach through doing.",
    highlights: ["GPT-4 Powered", "Adaptive AI", "Project-based", "Personalized"],
    color: "from-violet-600 to-purple-500",
    glow: "rgba(139,92,246,0.2)",
    textColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/8",
    github: "https://github.com/MaiyoDenis/ai-learning-assistant",
    demo: "https://ai-assistant.example.com",
    metrics: ["500+ learners", "40+ modules", "GPT-4 powered"],
  },
  {
    icon: Trophy,
    emoji: "⚽",
    name: "Fantasy League Automation",
    tagline: "Complete League Ecosystem",
    status: "Building",
    progress: 55,
    description:
      "End-to-end sports league management: automated fixtures, live scoring, leaderboards, prize distribution, WhatsApp notifications, and M-Pesa payment integration.",
    highlights: ["Live Scoring", "M-Pesa", "WhatsApp", "Auto-fixtures"],
    color: "from-green-600 to-emerald-500",
    glow: "rgba(16,185,129,0.2)",
    textColor: "text-green-400",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/8",
    github: "https://github.com/MaiyoDenis/fantasy-league",
    demo: "https://fantasy.example.com",
    metrics: ["200+ players", "12 leagues", "Real-time scoring"],
  },
] as const;

export type Product = (typeof products)[number];
