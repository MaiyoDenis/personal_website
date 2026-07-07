const products = [
  {
    name: "E-WiFi",
    status: "Building",
    description:
      "A smart WiFi platform that combines hotspot authentication, analytics, subscriptions, payments, and cloud management.",
  },
  {
    name: "AI Learning Assistant",
    status: "Building",
    description:
      "An intelligent tutor that teaches software engineering using AI, real-world projects, and personalized guidance.",
  },
  {
    name: "Fantasy League Automation",
    status: "Building",
    description:
      "A complete league management ecosystem handling registrations, fixtures, payments, live scoring, and prizes.",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Building Now
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Products I'm Creating
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          I'm passionate about building products that solve everyday problems
          through software, AI, automation, and cloud technologies.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-blue-500/40"
          >
            <div className="mb-5 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
              {product.status}
            </div>

            <h3 className="text-2xl font-bold text-white">
              {product.name}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}