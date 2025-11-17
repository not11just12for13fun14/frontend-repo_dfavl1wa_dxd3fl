import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
            Build habits by forming constellations
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Turn your habits into galaxies. Earn stars as you show up.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Create a habit (your galaxy). Every check-in spawns stars that draw constellations across your progress sky. Watch consistency become a universe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium shadow/20 shadow-white/10 hover:shadow-white/20">
              Start Free
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
              See Features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
