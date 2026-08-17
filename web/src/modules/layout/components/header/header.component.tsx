'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HEADER_NAV, SITE_CONFIG } from '@/core/data';
import { Button, Icon } from '@/shared';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 sticky bg-surface/90 backdrop-blur-md z-50 border-b border-outline-variant/10 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-[var(--spacing-gutter)] py-[var(--spacing-unit)] min-h-[var(--spacing-touch-target)]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Little Craft Store Home">
          <Image
            src="/img/logo/little-craft-store-logo.jpeg"
            alt="Little Craft Store Logo"
            width={36}
            height={36}
            className="rounded-full shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="font-[family-name:var(--font-headline)] text-[18px] sm:text-[22px] md:text-[26px] text-primary tracking-tight font-medium">
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

        {/* Desktop Actions */}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center min-h-[var(--spacing-touch-target)] min-w-[var(--spacing-touch-target)] text-primary rounded-full hover:bg-surface-container-low transition-colors"
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-surface/98 backdrop-blur-lg border-b border-outline-variant/20 shadow-lg p-6 flex flex-col gap-5 z-50 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {HEADER_NAV.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-[family-name:var(--font-body)] text-[16px] font-semibold p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary bg-secondary-container/50'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-3">
            <Button
              href={SITE_CONFIG.whatsappUrl}
              variant="cta"
              size="md"
              fullWidth
              external
              className="py-3"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
