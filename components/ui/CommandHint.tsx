// components/ui/CommandHint.tsx

export default function CommandHint() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400">
      <span>Press</span>
      <kbd className="rounded bg-white/10 px-2 py-1">Ctrl</kbd>
      <span>+</span>
      <kbd className="rounded bg-white/10 px-2 py-1">K</kbd>
      <span>to search</span>
    </div>
  );
}