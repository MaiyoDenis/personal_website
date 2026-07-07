"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

export default function SecondaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}