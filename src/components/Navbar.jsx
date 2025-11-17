import { Menu, Star, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-400 flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold tracking-tight">Stellar Habits</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow/20 shadow-white/10 hover:shadow-white/20 transition"
              >
                <Rocket className="h-4 w-4" />
                Start free
              </a>
            </nav>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-2 bg-black/60">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium"
                onClick={() => setOpen(false)}
              >
                <Rocket className="h-4 w-4" />
                Start free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
