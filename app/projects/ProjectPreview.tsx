// components/projects/ProjectPreview.tsx

import Image from "next/image";

interface ProjectPreviewProps {
  src: string;
  alt: string;
}

export default function ProjectPreview({
  src,
  alt,
}: ProjectPreviewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}