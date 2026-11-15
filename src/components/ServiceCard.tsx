import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card soft-card h-full p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mist)] text-[var(--royal)]">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-[var(--graphite)]">{title}</h3>
      <p className="mt-3 text-[0.97rem] text-[var(--muted)]">{description}</p>
      <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
