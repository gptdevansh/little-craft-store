'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HEADER_NAV, SITE_CONFIG } from '@/core/data';
import { Button, Icon } from '@/shared';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky bg-surface/90 backdrop-blur-sm z-50 border-b border-outline-variant/10 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-[var(--spacing-gutter)] py-[var(--spacing-unit)] min-h-[var(--spacing-touch-target)]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Little Craft Store Home">
          <Image
            src="/img/logo/little-craft-store-logo.jpeg"
            alt="Little Craft Store Logo"
            width={40}
            height={40}
            className="rounded-full shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="font-[family-name:var(--font-headline)] text-[22px] md:text-[28px] text-primary tracking-tight font-medium hidden sm:block">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {HEADER_NAV.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold pb-1 transition-colors duration-300 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="#" variant="outline" size="sm">
            Marketplace
          </Button>
          <Button href={SITE_CONFIG.whatsappUrl} variant="cta" size="sm" external>
            WhatsApp Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center min-h-[var(--spacing-touch-target)] min-w-[var(--spacing-touch-target)] text-primary"
          aria-label="Menu"
        >
          <Icon name="menu" size={24} />
        </button>
      </div>
    </header>
  );
}
