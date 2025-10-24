import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    return typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm'
          : 'bg-transparent'
      } py-3`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="font-semibold tracking-tight text-lg">
            Travel X
          </NavLink>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-brand-gold' : 'opacity-70 hover:opacity-100'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-brand-gold' : 'opacity-70 hover:opacity-100'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
          {/* Integrated switch with icon inside knob */}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            role="switch"
            aria-checked={dark}
            className="relative inline-flex items-center select-none rounded-full w-14 h-8 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            {/* Background gradient hint */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200/40 to-indigo-300/40 opacity-0 dark:opacity-10 pointer-events-none" />
            {/* Knob containing icon */}
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 ${
                dark ? 'translate-x-7 bg-neutral-700' : 'translate-x-0 bg-white'
              }`}
            >
              {dark ? (
                <Moon size={14} className="text-brand-gold transition-opacity" />
              ) : (
                <Sun size={14} className="text-brand-gold transition-opacity" />
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
