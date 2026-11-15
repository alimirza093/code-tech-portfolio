import { aboutValues } from '../data/site';

export default function About() {
  return (
    <>
      <section className="section-shell pb-8">
        <div className="container max-w-5xl">
          <div className="mx-auto text-center">
            <div className="badge mx-auto">About CODE TECH</div>
            <h1 className="mt-6 page-title text-[var(--graphite)]">Technology With Purpose. Innovation With Direction.</h1>
            <p className="mt-6 text-lg text-[var(--muted)]">
              CODE TECH is a digital technology agency focused on helping businesses build stronger digital experiences
              through modern technology, thoughtful design, and intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="soft-card p-8 md:p-10">
            <div className="section-label">Our Mission</div>
            <p className="text-xl text-[var(--graphite)]">
              To make powerful digital solutions accessible to businesses and help them grow through technology.
            </p>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="section-label">Our Vision</div>
            <p className="text-xl text-[var(--graphite)]">
              To become a trusted digital technology partner for businesses across the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--section)]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-label">Our Values</div>
            <h2 className="section-title text-[var(--graphite)]">Principles that guide every project.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutValues.map((value) => (
              <div key={value} className="soft-card p-6 text-center">
                <span className="inline-block rounded-full bg-[var(--mist)] px-3 py-2 text-sm font-semibold text-[var(--royal)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container max-w-4xl">
          <div className="soft-card p-8 md:p-12">
            <div className="section-label">Our Approach</div>
            <h2 className="section-title text-[var(--graphite)]">Strategy, design, development, and technology working together.</h2>
            <p className="mt-5 text-lg text-[var(--muted)]">
              CODE TECH combines strategic thinking, design expertise, and modern engineering to create digital solutions
              that address real business needs. We work closely with our clients to understand their vision, define the
              right solution, and build experiences that are useful, reliable, and ready for the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
