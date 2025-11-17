export default function HowItWorks() {
  const steps = [
    {
      title: "Create your galaxy",
      desc: "Name your habit and pick a vibe. This becomes the home of your stars.",
    },
    {
      title: "Show up daily",
      desc: "Each check-in drops a star into your sky. Streaks draw constellations.",
    },
    {
      title: "Watch the universe grow",
      desc: "See your progress come alive as patterns form and galaxies glow brighter.",
    },
  ];

  return (
    <section id="how" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-3 text-white/70">A simple loop that keeps momentum high and friction low.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="text-sm text-white/60">Step</div>
              <div className="mt-2 font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
