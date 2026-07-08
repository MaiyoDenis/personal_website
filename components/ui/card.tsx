// components/ui/Card.tsx

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
}