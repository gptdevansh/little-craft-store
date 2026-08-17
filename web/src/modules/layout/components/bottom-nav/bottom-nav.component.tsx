'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared';

const BOTTOM_ITEMS = [
  { id: 'bnav-home', href: '/', icon: 'home', label: 'Home' },
  { id: 'bnav-shop', href: '/shop', icon: 'grid_view', label: 'Shop' },
  { id: 'bnav-contact', href: '/contact', icon: 'chat_bubble', label: 'Contact' },
  { id: 'bnav-story', href: '/our-story', icon: 'local_florist', label: 'Story' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 w-full flex justify-around items-center h-[72px] px-2 bg-surface/95 backdrop-blur-md z-50 rounded-t-2xl shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.04)] md:hidden border-t border-outline-variant/10"
      aria-label="Mobile navigation"
    >
      {BOTTOM_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 min-h-[var(--spacing-touch-target)] min-w-[64px] transition-all active:scale-95 ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container rounded-2xl'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <Icon name={item.icon} size={24} fill={isActive} />
          </Link>
        );
      })}
    </nav>
  );
}
