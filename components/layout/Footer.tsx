// components/layout/Footer.tsx

import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">
            Denis Maiyo
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Building intelligent, scalable software.
          </p>
        </div>

        <SocialLinks />

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Denis Maiyo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}