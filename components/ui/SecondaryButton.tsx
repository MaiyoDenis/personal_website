interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <p className="font-semibold uppercase tracking-widest text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}