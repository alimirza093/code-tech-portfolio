import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/site';

export default function Services() {
  return (
    <>
      <section className="section-shell pb-8">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="badge mx-auto">Digital Solutions</div>
            <h1 className="mt-6 page-title text-[var(--graphite)]">Digital Solutions Designed for What&apos;s Next.</h1>
            <p className="mt-6 text-lg text-[var(--muted)]">
              Everything your business needs to build, grow, and succeed in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const isOdd = index % 2 === 1;

        return (
          <section key={service.id} className={`section-shell ${isOdd ? 'bg-[var(--section)]' : ''}`}>
            <div className="container">
              <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`${isOdd ? 'lg:order-2' : ''}`}>
                  <div className={`rounded-[2rem] border border-slate-200 bg-gradient-to-br ${service.accent} p-8 shadow-sm`}>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[var(--royal)] shadow-sm">
                      <Icon size={28} />
                    </div>
                    <div className="section-label">Service 0{index + 1}</div>
                    <h2 className="section-title text-[var(--graphite)]">{service.title}</h2>
                    <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">{service.description}</p>
                  </div>
                </div>

                <div className={`${isOdd ? 'lg:order-1' : ''}`}>
                  <div className="soft-card p-8">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-[var(--graphite)]">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--royal)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link to="/contact" className="primary-button inline-flex items-center gap-2">
                        Discuss Your Project <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
