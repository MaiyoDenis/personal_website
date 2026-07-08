// components/ui/SocialLinks.tsx

import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Email", href: "mailto:you@example.com" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-gray-400 transition-colors hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}