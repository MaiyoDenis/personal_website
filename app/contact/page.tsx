import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ContactForm from "./ContactForm";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact Denis Maiyo | Full-Stack & AI Engineer",
  description:
    "Get in touch with Denis Maiyo for full-time engineering roles, contract development, or tech consulting.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "denismaiyo14@gmail.com",
    href: "mailto:denismaiyo14@gmail.com",
    subtext: "Best for direct inquiries",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/MaiyoDenis",
    href: "https://linkedin.com/in/MaiyoDenis",
    subtext: "Professional network & messages",
    color: "from-blue-600 to-indigo-500",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/MaiyoDenis",
    href: "https://github.com/MaiyoDenis",
    subtext: "Code repositories & contributions",
    color: "from-slate-600 to-slate-400",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Page Heading */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
              <span className="status-dot" />
              Available for Hire &amp; Contract Work
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Let&apos;s Build <span className="gradient-text">Together</span>
            </h1>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl">
              Whether you need a high-scale microfinance platform, an AI integration, or a dependable full-stack engineer for your team, let&apos;s start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Channels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Direct Channels
                </h2>
                {channels.map(({ icon: Icon, label, value, href, subtext, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/10 hover:border-white/15 group"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">{label}</p>
                      <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {value}
                      </p>
                      <p className="text-[11px] text-slate-500">{subtext}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location & Timezone card */}
              <div className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <MapPin size={16} className="text-emerald-400" />
                  <span>Nairobi, Kenya (Available Worldwide / Remote)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <Clock size={16} className="text-blue-400" />
                  <span>East Africa Time (EAT) · UTC +3</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <MessageSquare size={16} className="text-violet-400" />
                  <span>English &amp; Swahili (Fluent)</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0a0f1a] p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-sm text-slate-400 mb-6">
                Fill in the details below and I&apos;ll get back to you promptly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
