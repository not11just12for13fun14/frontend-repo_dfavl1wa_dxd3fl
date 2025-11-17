import { Star, Sparkles, Trophy, Rocket } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Galaxies for habits",
    desc: "Each habit becomes a living galaxy with its own sky and rhythm.",
  },
  {
    icon: Sparkles,
    title: "Earn stars by showing up",
    desc: "Daily check-ins award stars that connect as constellations.",
  },
  {
    icon: Trophy,
    title: "Streak-based constellations",
    desc: "Longer streaks unlock brighter constellations and rare shapes.",
  },
  {
    icon: Rocket,
    title: "Built for momentum",
    desc: "Simple flow, delightful feedback, and a sky that grows with you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why you'll love it</h2>
          <p className="mt-3 text-white/70">Designed to make consistency feel rewarding, visual, and fun.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/8 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500/30 to-indigo-400/30 flex items-center justify-center ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
