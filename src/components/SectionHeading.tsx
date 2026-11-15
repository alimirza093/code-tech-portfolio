type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="section-label">{eyebrow}</div>
      <h2 className="section-title text-[var(--graphite)]">{title}</h2>
      {description && <p className="mt-4 body-copy">{description}</p>}
    </div>
  );
}
