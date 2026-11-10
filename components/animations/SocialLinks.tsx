import Link from "next/link";
import { Mail } from "lucide-react";
import { socialLinks } from "@/data/social";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] ?? Mail;
        return (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white font-medium"
          >
            <Icon size={14} />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
