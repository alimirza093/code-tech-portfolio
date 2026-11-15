import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="soft-card overflow-hidden bg-[linear-gradient(135deg,rgba(224,231,255,0.55),rgba(255,255,255,0.9))] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="hero-orb max-w-[430px]">
                <div className="hero-monogram">
                  <img src="/codetech-icon.png" alt="CODE TECH icon" className="drop-shadow-none" />
                </div>
              </div>
            </div>

            <div>
              <div className="badge">Coming Soon</div>
              <h1 className="mt-6 page-title text-[var(--graphite)]">Something Exciting Is Coming.</h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
                We&apos;re working behind the scenes on innovative digital products designed to solve real-world business
                challenges. Stay tuned.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="primary-button inline-flex items-center gap-2">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
