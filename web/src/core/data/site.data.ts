import type { SiteConfig, NavLink } from '@/core/models';

export const SITE_CONFIG: SiteConfig = {
  name: 'Little Craft Store',
  tagline: 'Handmade with Love',
  description:
    'Discover our collection of artisanal scrunchies, hair bands, clips, and accessories — crafted with premium fabrics and thoughtful details to elevate your everyday style.',
  currency: { code: 'INR', symbol: '₹' },
  phone: '+1 (555) 123-4567',
  whatsappUrl: 'https://wa.me/15551234567',
  instagramHandle: '@littlecraftstore',
  instagramUrl: 'https://instagram.com/littlecraftstore',
  marketplaces: [
    { name: 'Amazon', url: '#', icon: 'shopping_bag' },
    { name: 'Flipkart', url: '#', icon: 'storefront' },
  ],
};

export const HEADER_NAV: NavLink[] = [
  { id: 'nav-home', label: 'Home', href: '/' },
  { id: 'nav-shop', label: 'Shop', href: '/shop' },
  { id: 'nav-story', label: 'Our Story', href: '/our-story' },
  { id: 'nav-contact', label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS: NavLink[] = [
  { id: 'f-privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'f-shipping', label: 'Shipping Info', href: '/shipping' },
  { id: 'f-wholesale', label: 'Wholesale', href: '/wholesale' },
  { id: 'f-faq', label: 'FAQ', href: '/faq' },
];
