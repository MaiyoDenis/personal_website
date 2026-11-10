"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export default function SecondaryButton({ href, children, target }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/4 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}
