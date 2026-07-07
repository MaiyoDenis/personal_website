"use client";

import Link from "next/link";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "GitHub", href: "https://github.com/MaiyoDenis" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
            DM
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Denis Maiyo
            </h1>

            <p className="text-xs text-gray-400">
              Software Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (placeholder) */}
        <button className="rounded-lg border border-white/10 p-2 text-white md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}