import { ArrowUpRight, AtSign, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerServices, navItems } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer-shell mt-12 border-t border-white/10">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_0.9fr_1.15fr]">
          <div>
            <img src="/code-tech-logo-bg-removed.png" alt="CODE TECH logo" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm text-[var(--footer-muted)]">Building Digital Possibilities.</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigate</h3>
            <ul className="space-y-3 text-sm text-[var(--footer-text)]/90">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-sm text-[var(--footer-text)]/90">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <ul className="space-y-3 text-sm text-[var(--footer-text)]/90">
              <li>
                <a href="mailto:codetechfsd@gmail.com" className="inline-flex items-center gap-2">
                  <Mail size={14} /> codetechfsd@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/codetechfsd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <AtSign size={14} /> @codetechfsd
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <ArrowUpRight size={14} /> LinkedIn
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={14} /> Faisalabad, Pakistan.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[var(--footer-muted)]">
          © 2026 CODE TECH. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
