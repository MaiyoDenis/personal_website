import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
          Error 404
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
          Page Not <span className="gradient-text">Found</span>
        </h1>

        <p className="mt-6 max-w-md text-base md:text-lg text-slate-400 leading-relaxed">
          The page you’re looking for doesn’t exist or has moved. Explore Denis&apos;s projects and software engineering portfolio instead.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-600/30"
          >
            <ArrowLeft size={16} />
            Return Home
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Projects
          </Link>
        </div>
      </main>
    </>
  );
}
