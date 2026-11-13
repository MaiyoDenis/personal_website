"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export default function SecondaryButton({ href, children, target, className = "" }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${className}`}
    >
      {children}
    </Link>
  );
}

