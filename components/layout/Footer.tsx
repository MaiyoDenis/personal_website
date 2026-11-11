import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const navLinks = [
  { name: "PROJECTS", href: "/#projects" },
  { name: "SKILLS", href: "/#skills" },
  { name: "JOURNEY", href: "/#journey" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACT", href: "/contact" },
];

const social = [
  { icon: GithubIcon, href: "https://github.com/MaiyoDenis", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/MaiyoDenis", label: "LinkedIn" },
  { icon: Mail, href: "mailto:denismaiyo14@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-black py-16">
      {/* Top Flame accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FE5101]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/8">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex flex-col">
              <span className="font-display font-black tracking-[0.2em] text-lg text-white group-hover:text-[#FE5101] transition-colors uppercase">
                DENIS MAIYO
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#FE5101] font-mono uppercase mt-0.5">
                ENGINEERING &amp; ARCHITECTURE STUDIO
              </span>
            </Link>
            <p className="mt-3 text-xs text-white/50 max-w-sm leading-relaxed font-sans">
              Clarity first. Then the system. Turning complex requirements into resilient production platforms.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.2em] text-white/60 transition-colors hover:text-white uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:border-[#FE5101]/50 hover:bg-[#FE5101]/10 hover:text-white"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <span>&copy; {new Date().getFullYear()} DENIS MAIYO. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-2">
            <span>JET BLACK</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[#FE5101]">FLAME ORANGE</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-white">SOFT WHITE</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
