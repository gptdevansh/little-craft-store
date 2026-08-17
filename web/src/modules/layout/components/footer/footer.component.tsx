import Link from 'next/link';
import { SITE_CONFIG, FOOTER_LINKS } from '@/core/data';

export function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container-low border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-[var(--spacing-container-margin)] py-12 max-w-7xl mx-auto gap-8">
        {/* Brand */}
        <div className="font-[family-name:var(--font-headline)] text-[24px] text-primary tracking-tight font-medium">
          {SITE_CONFIG.name}
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-primary underline underline-offset-4 hover:opacity-80 transition-opacity min-h-[var(--spacing-touch-target)] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="font-[family-name:var(--font-body)] text-[16px] text-secondary text-center md:text-right">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Handcrafted with love.
        </div>
      </div>
    </footer>
  );
}
