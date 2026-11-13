"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export default function PrimaryButton({ href, children, target, className = "" }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FF5A00] to-[#FF7A2B] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,90,0,0.35)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(255,90,0,0.6)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${className}`}
    >
      {children}
    </Link>
  );
}

