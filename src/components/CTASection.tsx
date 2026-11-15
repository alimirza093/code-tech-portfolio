import { Link } from 'react-router-dom';

type CTASectionProps = {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="soft-card bg-[linear-gradient(135deg,rgba(29,78,216,0.07),rgba(224,231,255,0.4))] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title text-[var(--graphite)]">{title}</h2>
              <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">{text}</p>
            </div>
            <Link to={buttonLink} className="primary-button w-fit">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
