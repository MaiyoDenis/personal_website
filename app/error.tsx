"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-white">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-gray-400">
        An unexpected error occurred while loading this page.
      </p>

      <button
        onClick={reset}
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        Try Again
      </button>
    </main>
  );
}