import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />

        <section id="faq" className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">FAQ</h2>
              <p className="mt-3 text-white/70">Answers to a few common questions.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-medium">What do you mean by galaxies and constellations?</div>
                <p className="mt-2 text-white/70 text-sm">A galaxy is your habit. Each time you complete it, you earn a star. Those stars connect over time into constellations that visualize your streaks and patterns.</p>
              </div>
              <div>
                <div className="font-medium">Is there a free plan?</div>
                <p className="mt-2 text-white/70 text-sm">Yes. You can start free with a couple of galaxies and essential constellation tracking. Upgrade anytime for unlimited space.</p>
              </div>
              <div>
                <div className="font-medium">Can I use it on mobile?</div>
                <p className="mt-2 text-white/70 text-sm">Absolutely. The experience is responsive and works beautifully on phones and tablets.</p>
              </div>
              <div>
                <div className="font-medium">Do I keep my data if I cancel?</div>
                <p className="mt-2 text-white/70 text-sm">Yes. You can export your sky and habits at any time. Your progress belongs to you.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Stellar Habits. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
