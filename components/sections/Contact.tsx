import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-16">
        <p className="font-semibold uppercase tracking-widest text-blue-400">
          Let's Build Something Amazing
        </p>

        <h2 className="mt-6 text-5xl font-black text-white">
          Ready to Work Together?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I'm always interested in exciting software projects,
          AI products, startup ideas, and engineering opportunities.
        </p>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href="mailto:denismaiyo14@gmail.com">
            Let's Talk
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}