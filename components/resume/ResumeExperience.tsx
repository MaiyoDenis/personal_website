import { timeline } from "@/data/experience";

export function ResumeExperience() {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
        <span className="text-teal-500">/</span> Experience & Journey
      </h3>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {timeline.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon marker */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="text-sm">{item.icon}</span>
            </div>
            {/* Content box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">{item.year}</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
