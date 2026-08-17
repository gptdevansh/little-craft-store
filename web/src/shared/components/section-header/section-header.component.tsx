export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-2 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="font-[family-name:var(--font-body)] text-[12px] tracking-[0.15em] uppercase text-sage-green font-semibold flex items-center gap-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] font-semibold text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[family-name:var(--font-body)] text-[15px] md:text-[16px] text-on-surface-variant font-light leading-relaxed max-w-2xl mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
