export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you're ready to go interstellar.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-sm text-white/60">Free</div>
            <div className="mt-2 text-3xl font-semibold">$0</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Up to 2 galaxies</li>
              <li>Daily stars and constellations</li>
              <li>7-day streak visualizations</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-lg bg-white text-gray-900 font-medium">Get started</a>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-purple-600/20 to-indigo-500/20 ring-1 ring-white/10 p-6">
            <div className="text-sm text-white/60">Pro</div>
            <div className="mt-2 text-3xl font-semibold">$6/mo</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Unlimited galaxies</li>
              <li>Advanced constellations and patterns</li>
              <li>Long-form streak insights</li>
              <li>Export and share your sky</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-lg bg-white text-gray-900 font-medium">Go Pro</a>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-sm text-white/60">Team</div>
            <div className="mt-2 text-3xl font-semibold">$12/mo</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Shared constellations</li>
              <li>Team streaks and rituals</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-lg bg-white text-gray-900 font-medium">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
