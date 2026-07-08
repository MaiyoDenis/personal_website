// components/ui/EmptyState.tsx

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center">
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {description}
      </p>
    </div>
  );
}