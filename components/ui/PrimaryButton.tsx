"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export default function PrimaryButton({ href, children, target }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-600/40 hover:scale-[1.02] hover:-translate-y-0.5 shine"
    >
      {children}
    </Link>
  );
}
