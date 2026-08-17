import type { Product } from '@/core/models';

/**
 * Product catalog — hair accessories
 * Image URLs from the Stitch design exports (Google CDN hosted)
 */
export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Midnight Plum Silk',
    slug: 'midnight-plum-silk',
    description: 'Luxurious silk scrunchie in a deep plum color with lustrous folds.',
    price: 499,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p1.jpg',
    imageAlt: 'Luxurious silk scrunchie in deep plum color on warm off-white background',
    badge: 'bestseller',
    whatsappMessage: 'Hi! I would like to order the Midnight Plum Silk Scrunchie (₹499).',
  },
  {
    id: 'p-2',
    name: 'Blush Linen Classic',
    slug: 'blush-linen-classic',
    description: 'Soft blush pink linen scrunchie for an effortlessly feminine look.',
    price: 399,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p2.jpg',
    imageAlt: 'Blush pink linen scrunchie in a relaxed low ponytail style',
    whatsappMessage: 'Hi! I would like to order the Blush Linen Classic Scrunchie (₹399).',
  },
  {
    id: 'p-3',
    name: 'Spring Meadow Floral',
    slug: 'spring-meadow-floral',
    description: 'Floral patterned cotton scrunchie with sage green leaves and pink flowers.',
    price: 349,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p3.jpg',
    imageAlt: 'Floral cotton scrunchie with sage green and pink pattern on parchment paper',
    whatsappMessage: 'Hi! I would like to order the Spring Meadow Floral Scrunchie (₹349).',
  },
  {
    id: 'p-4',
    name: 'Terracotta Velvet',
    slug: 'terracotta-velvet',
    description: 'Warm terracotta velvet scrunchie — thick, plush, and cozy.',
    price: 449,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p4.jpg',
    imageAlt: 'Rich warm terracotta velvet scrunchie on white marble surface',
    whatsappMessage: 'Hi! I would like to order the Terracotta Velvet Scrunchie (₹449).',
  },
  {
    id: 'p-5',
    name: 'Burgundy Velvet Dream',
    slug: 'burgundy-velvet-dream',
    description: 'Oversized plush scrunchie in rich burgundy velvet.',
    price: 399,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p5.jpg',
    imageAlt: 'Burgundy velvet scrunchie on soft linen surface',
    badge: 'hand-stitched',
    whatsappMessage: 'Hi! I would like to order the Burgundy Velvet Dream Scrunchie (₹399).',
  },
  {
    id: 'p-6',
    name: 'Meadow Floral Scrunchie',
    slug: 'meadow-floral-scrunchie',
    description: 'Beautifully crafted hand-sewn floral patterned scrunchie.',
    price: 299,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p6.jpg',
    imageAlt: 'Floral patterned scrunchie on textured wooden table',
    whatsappMessage: 'Hi! I would like to order the Meadow Floral Scrunchie (₹299).',
  },
  {
    id: 'p-7',
    name: 'Velvet Plum Bow',
    slug: 'velvet-plum-bow',
    description: 'Delicate velvet hair bow in rich plum color, hand-stitched.',
    price: 499,
    categoryId: 'accessories',
    imageUrl: '/img/products/p7.jpg',
    imageAlt: 'Plum velvet hair bow on vintage parchment paper with dried flowers',
    badge: 'hand-stitched',
    whatsappMessage: 'Hi! I would like to order the Velvet Plum Bow (₹499).',
  },
  {
    id: 'p-8',
    name: 'Pearl Clip Set',
    slug: 'pearl-clip-set',
    description: 'Three minimalist metal hair clips with pearl embellishments.',
    price: 399,
    categoryId: 'clips',
    imageUrl: '/img/products/p8.jpg',
    imageAlt: 'Set of three minimalist metal hair clips with pearl details on pink linen',
    whatsappMessage: 'Hi! I would like to order the Pearl Clip Set (₹399).',
  },
  {
    id: 'p-9',
    name: 'Pearl Drop Clip',
    slug: 'pearl-drop-clip',
    description: 'Minimalist gold and pearl hair clip.',
    price: 499,
    categoryId: 'clips',
    imageUrl: '/img/products/p9.jpg',
    imageAlt: 'Gold-plated hair clip with freshwater pearls on parchment paper',
    whatsappMessage: 'Hi! I would like to order the Pearl Drop Clip (₹499).',
  },
  {
    id: 'p-10',
    name: 'Oat Linen Headband',
    slug: 'oat-linen-headband',
    description: 'Wide textured linen headband in natural oat color.',
    price: 549,
    categoryId: 'hair-bands',
    imageUrl: '/img/products/p10.jpg',
    imageAlt: 'Natural oat linen headband on smooth stone surface',
    whatsappMessage: 'Hi! I would like to order the Oat Linen Headband (₹549).',
  },
  {
    id: 'p-11',
    name: 'Sage Linen Band',
    slug: 'sage-linen-band',
    description: 'Comfort-fit padded headband in muted sage green linen.',
    price: 599,
    categoryId: 'hair-bands',
    imageUrl: '/img/products/p11.jpg',
    imageAlt: 'Sage green linen padded headband next to dried eucalyptus sprig',
    badge: 'eco-friendly',
    whatsappMessage: 'Hi! I would like to order the Sage Linen Band (₹599).',
  },
  {
    id: 'p-12',
    name: 'Silk Trio Set',
    slug: 'silk-trio-set',
    description: 'Set of three slim silk scrunchies in complementary pastel shades.',
    price: 799,
    categoryId: 'scrunchies',
    imageUrl: '/img/products/p12.jpg',
    imageAlt: 'Three silk scrunchies in blush pink, champagne, and ivory on white background',
    badge: 'new',
    whatsappMessage: 'Hi! I would like to order the Silk Trio Set (₹799).',
  },
];

/** Get products, optionally filtered by category */
export function getProducts(categoryId?: string): Product[] {
  if (!categoryId || categoryId === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

/** Get featured/best seller products for home page */
export function getBestSellers(): Product[] {
  return PRODUCTS.slice(0, 4);
}
