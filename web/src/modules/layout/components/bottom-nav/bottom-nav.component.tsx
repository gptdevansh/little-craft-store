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
      className="fixed bottom-0 left-0 right-0 w-full flex justify-around items-center h-[64px] px-3 bg-surface/95 backdrop-blur-md z-50 rounded-t-2xl shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.06)] md:hidden border-t border-outline-variant/20"
      aria-label="Mobile navigation"
    >
      {BOTTOM_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-3 min-w-[60px] transition-all active:scale-95 ${
              isActive
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant/70 hover:text-primary'
            }`}
          >
            <div
              className={`p-1.5 rounded-full transition-all flex items-center justify-center ${
                isActive ? 'bg-secondary-container text-on-secondary-container shadow-xs' : ''
              }`}
            >
              <Icon name={item.icon} size={20} fill={isActive} />
            </div>
            <span className="text-[10px] tracking-tight font-medium mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
