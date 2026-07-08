// components/ui/LoadingSpinner.tsx

export default function LoadingSpinner() {
  return (
    <div
      className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
      aria-label="Loading"
      role="status"
    />
  );
}