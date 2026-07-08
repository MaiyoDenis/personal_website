import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        404
      </p>

      <h1 className="mt-4 text-6xl font-black text-white">
        Page Not Found
      </h1>

      <p className="mt-6 max-w-md text-lg text-gray-400">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        Return Home
      </Link>
    </main>
  );
}