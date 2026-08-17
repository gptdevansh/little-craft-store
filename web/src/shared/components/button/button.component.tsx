import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'cta' | 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-[family-name:var(--font-body)] font-semibold transition-all duration-200 active:scale-95 cursor-pointer';

  const variants: Record<string, string> = {
    cta: 'btn-cta shadow-sm',
    primary:
      'bg-primary-container text-on-primary hover:bg-primary',
    outline:
      'border border-primary-container text-primary-container hover:bg-surface-container',
    ghost:
      'text-on-surface-variant hover:text-primary hover:bg-surface-container-low',
  };

  const sizes: Record<string, string> = {
    sm: 'text-[13px] tracking-[0.05em] px-5 py-2 min-h-[var(--spacing-touch-target)]',
    md: 'text-[14px] tracking-[0.05em] px-6 py-3 min-h-[var(--spacing-touch-target)]',
    lg: 'text-[13px] tracking-[0.08em] uppercase px-8 py-3.5 min-h-[48px]',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {};
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
