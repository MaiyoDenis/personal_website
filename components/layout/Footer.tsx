import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Journey", href: "/#journey" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const social = [
  { icon: GithubIcon, href: "https://github.com/MaiyoDenis", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/MaiyoDenis", label: "LinkedIn" },
  { icon: Mail, href: "mailto:denismaiyo14@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600" />
                <span className="relative z-10 text-sm font-black text-white">DM</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Denis Maiyo</p>
                <p className="text-[11px] text-slate-600">Full-Stack & AI Engineer</p>
              </div>
            </Link>
            <p className="mt-3 text-xs text-slate-600 max-w-[200px] leading-relaxed">
              Turning ambitious ideas into scalable software.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-slate-600 transition-colors hover:text-slate-300 font-medium"
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
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/3 text-slate-600 transition-all hover:border-white/15 hover:text-white hover:bg-white/6"
              >
                <Icon size={13} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row md:gap-2">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built with
            <Heart size={10} className="text-pink-500 fill-pink-500" />
            by Denis Maiyo · {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-500">
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>TypeScript</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Tailwind</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
