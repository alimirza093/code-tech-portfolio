import { ArrowRight, ArrowUpRight, Gauge, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { processSteps, serviceHighlights, valuePropositions } from '../data/site';

export default function Home() {
  return (
    <>
      <section className="section-shell pt-10 md:pt-14">
        <div className="container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="badge">Digital Innovation &amp; Development</div>
            <h1 className="mt-6 page-title text-[var(--graphite)]">
              Building <span className="text-[var(--royal)]">Digital Experiences</span> That Drive Growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
              We help businesses turn ambitious ideas into powerful digital products through innovative development,
              intelligent automation, and modern digital solutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="primary-button">
                Let&apos;s Build Something Great
              </Link>
              <Link to="/services" className="secondary-button">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="hero-aside">
            <div className="hero-orb">
              <div className="floating-panel left-[-0.5rem] top-10 w-56 p-4 md:left-0">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[var(--royal)]">
                  <span>Strategy</span>
                  <Sparkles size={14} />
                </div>
                <div className="text-2xl font-bold text-[var(--graphite)]">Digital</div>
                <div className="mt-1 text-sm text-[var(--muted)]">Growth systems</div>
              </div>

              <div className="floating-panel right-2 top-8 w-40 p-3 md:right-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--royal)]">
                  <Gauge size={13} /> Performance
                </div>
                <div className="mt-3 h-2 rounded-full bg-[var(--mist)]">
                  <div className="h-2 w-[78%] rounded-full bg-[var(--royal)]" />
                </div>
              </div>

              <div className="hero-monogram">
                <img src="/codetech-icon.png" alt="CODE TECH icon" />
              </div>

              <div className="floating-panel bottom-10 left-7 w-48 p-4 md:left-12">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--royal)]">Launch</div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="h-12 w-2 rounded-full bg-[var(--mist)]" />
                  <div className="h-16 w-2 rounded-full bg-[var(--mist)]" />
                  <div className="h-10 w-2 rounded-full bg-[var(--royal)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6">
        <div className="container">
          <div className="soft-card px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="section-title text-[var(--graphite)]">Your Partner in Digital Growth.</h2>
                <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
                  From your first idea to a complete digital solution, we combine creativity, technology, and strategy to
                  help your business move forward.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[var(--graphite)]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--royal)]" />
                  Strategy-led innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do Best"
            title="Build with clarity. Deliver with confidence."
            description="We create digital experiences that help ambitious businesses grow, operate smarter, and stand out across every customer touchpoint."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--section)]">
        <div className="container">
          <SectionHeading
            eyebrow="Why CODE TECH"
            title="Built Around Your Business. Powered by Technology."
            description="We design solutions that are intentional, scalable, and aligned with your goals from the very beginning."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valuePropositions.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.number} className="value-block p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.2em] text-[var(--royal)]">{value.number}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--royal)]">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--graphite)]">{value.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="From Idea to Execution."
            description="We keep the process transparent, collaborative, and focused on business outcomes at every stage."
          />

          <div className="timeline-wrap mt-12">
            {processSteps.map((step) => (
              <div key={step.step} className="timeline-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <span className="dot" />
                  <span className="text-sm font-bold tracking-[0.18em] text-[var(--royal)]">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--graphite)]">{step.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--section)]">
        <div className="container">
          <div className="soft-card p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="section-label">Products Preview</div>
                <h2 className="section-title text-[var(--graphite)]">Something New Is Taking Shape.</h2>
                <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
                  We&apos;re working on innovative digital products designed to make everyday business operations smarter.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:items-center md:text-center">
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--royal)]">
                  <img src="/codetech-icon.png" alt="CODE TECH icon" className="h-16 w-16" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--royal)]">Coming Soon</p>
                <Link to="/products" className="secondary-button inline-flex items-center gap-2">
                  Explore Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have an Idea? Let's Make It Happen."
        text="Tell us about your project. We'll help you turn your vision into a digital solution."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </>
  );
}
