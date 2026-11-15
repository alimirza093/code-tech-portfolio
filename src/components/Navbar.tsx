import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/site';

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? 'active' : ''}`;

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="CODE TECH home">
          <div className="flex items-center justify-center overflow-hidden rounded-none bg-transparent">
            <img
              src="logos/code-tech-logo-bg-removed.png"
              alt="CODE TECH logo"
              className="h-11 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--graphite)] transition hover:border-[var(--royal)]"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <Link to="/contact" className="brand-button">
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--graphite)]"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--graphite)]"
            onClick={() => setMobileOpen((state) => !state)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--panel)] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-[var(--mist)] text-[var(--royal)]' : 'text-[var(--graphite)] hover:bg-[var(--surface)]'
                  }`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="brand-button mt-2 w-full justify-center">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
