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
    price: 22,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANitOpWdSglUJ5OtCvCwAddFJBkBxCTlIl61yqQLJG7lo4Pzyo6qLn0jRfgPKpvtMcvYZ9_wI_1Zttd3UOIqoGQTw1jEj9wumLkWhsOG_b6EZa3XZuLb-iWt3SXLbVK3oyVzZYPtSgimg8hKsbqSzU8CZqUMBYDdvov8UVkFrtR-_ieatTJrvFyjtzoXALzo2nCE9IzgXW86UP-_GeVlcR_4P5Jyoh9alm4UIoYVw1kH0xFDw0M3rnZg',
    imageAlt: 'Luxurious silk scrunchie in deep plum color on warm off-white background',
    badge: 'bestseller',
  },
  {
    id: 'p-2',
    name: 'Blush Linen Classic',
    slug: 'blush-linen-classic',
    description: 'Soft blush pink linen scrunchie for an effortlessly feminine look.',
    price: 18,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwJxJlpgPt0oC_pcY5tkVwX18h_zPikXXU0T1Ei86irqpUXPjRTW8wmR-Ko2xFIhxhi9vZ6XtXzFC89yAU6CqKlR5ri-4jy_xd7PvQ93ATdAyDVf2IrHkgPUgJMf_tXPVxvP1ZxfpbdTbICh0OqhksvFG3X9XFXKI3GJxvYCxA6Z-4oKzw9xXUkL6sqPtnEQxWpDeE79EBi0v2v9lJRrH-GwHkv76UcvMqG7JgT545fIhwyhtTPeFsFQ',
    imageAlt: 'Blush pink linen scrunchie in a relaxed low ponytail style',
  },
  {
    id: 'p-3',
    name: 'Spring Meadow Floral',
    slug: 'spring-meadow-floral',
    description: 'Floral patterned cotton scrunchie with sage green leaves and pink flowers.',
    price: 16,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-eJUClrOLebtZIVLYiDeqgUJtC38GIVq5kPatYmgi9DvKAoLCZPXSBdovI62fqauVNzY_7MJ0PhI62NDriD4EQ9RZHlod9LBze5ovI6qDH6iMuPFk_SxrjR3FY_NrW23GxB2Sqve3IAUYrZlHaYIOLCfdrp-EMJbmWkQMy8x8ff8esDaBIYk6YS8zIPfZgOAqJfSEwKg-6Yj56CUHBPpJ7pjcccehsxVdu95JxMdyAYk1trW_D6GHg',
    imageAlt: 'Floral cotton scrunchie with sage green and pink pattern on parchment paper',
  },
  {
    id: 'p-4',
    name: 'Terracotta Velvet',
    slug: 'terracotta-velvet',
    description: 'Warm terracotta velvet scrunchie — thick, plush, and cozy.',
    price: 20,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD1FF9-JmeEnVAT2sgq0023rx8AXpBtUSTpW75ndsgwh8joKF2WRT-E-nT1wfI7md7SBL-kFEta6Y5FqEiVcP1WlCGuS-HlkAFczXdwt_rr-MPiLzR5Z6KfUYuwK6YJgnpUxuwoNXA87T2Q_tEoQOD7DIXzOA4_DFy_6vaLg2yehm8RLi8R39ClOffzVShApIEcwfs1It8m7bo2kxcdtrWbyQBAxBK3Q4ZzwNzN0VO3khu0QjiUW7ZEw',
    imageAlt: 'Rich warm terracotta velvet scrunchie on white marble surface',
  },
  {
    id: 'p-5',
    name: 'Burgundy Velvet Dream',
    slug: 'burgundy-velvet-dream',
    description: 'Oversized plush scrunchie in rich burgundy velvet.',
    price: 18,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDI42qXi1nCbY6GvjF8snIib11YPddP6SfyBPDLs0fc8TwXNUIt9k778vy196NB9ZmdhfxRngL-xlZrFWH95i6SkEP_qkqG0xMJJluMJ7LIZyDoo5MmwyMHAot046--Tcds_5WLEdywQJiojRwN55D0sKJ4KZZYy_sbg9u9E2cqSYM10GeYiWCb5rAwHXQd8jq51ONtG2eksT6E1WKXS3mQj5Y-jX9OAjqykLp6bbKQIY2pWaAX59qrGw',
    imageAlt: 'Burgundy velvet scrunchie on soft linen surface',
    badge: 'hand-stitched',
  },
  {
    id: 'p-6',
    name: 'Meadow Floral Scrunchie',
    slug: 'meadow-floral-scrunchie',
    description: 'Beautifully crafted hand-sewn floral patterned scrunchie.',
    price: 14,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCj2eM8I1ut2XFFja86Z3bPgE-OS9Q7UVizPEHbGxY43xdlZTyLO-30ZATkf4Ss8dmpGLyFn2Z1U-lBz73Sbyc5DjL2fLh-QiPsdF8XOZezWb_4YxmyD1T94d3KVosulzIphADcXVOcoSKgcTIanEGpeHW3n-DRfwEmlIqqo9aM-ESg79amjKcFCjFAra_ZRqYbFkmA54wjBZfK0lmHpRrIN12BBd-yijsa_GMurszUrZ4hJONxl4YpKg',
    imageAlt: 'Floral patterned scrunchie on textured wooden table',
  },
  {
    id: 'p-7',
    name: 'Velvet Plum Bow',
    slug: 'velvet-plum-bow',
    description: 'Delicate velvet hair bow in rich plum color, hand-stitched.',
    price: 22,
    categoryId: 'accessories',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBThLuG9jtyNiNrtRrW4CNTrtwQb-iR2Z9Gcap1iwaFZruJMSZUd5G1PeYRmBtHQ56shrPjr33fUJ7bGBf675jpi-slEE1DppbI7iJ9dKIDaOmGEe7pwd0eYW55W98WmDKG-QTc-zveU7M0Gg6S0jii2siLAP6kXVFP8Z6dsr5VuufquUj5e_PKHtZi_eejbUfAwoNsl48LdZv0HurqNUnqHGj5dSUhvBxvKGupUgde2PGOByoqYy0Hyg',
    imageAlt: 'Plum velvet hair bow on vintage parchment paper with dried flowers',
    badge: 'hand-stitched',
  },
  {
    id: 'p-8',
    name: 'Pearl Clip Set',
    slug: 'pearl-clip-set',
    description: 'Three minimalist metal hair clips with pearl embellishments.',
    price: 18,
    categoryId: 'clips',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZLJfXpei3z2YtFwuG9RyEvkLmaoL-iCJhkV2Rmm_lKpp4ycWhNa2aYETMhir0ltLaoRsPG1_6dOkQ1SlYOT22mLIudvri07KCD7OcmBDGpq2r8EkkVZH43_-0Bdjns3SV_G9VkxMPW98Wf955doxR7mkMUsk4F-6RonBmhJCO6YBccILab14Bt2mUYI2CG2yPWaj4_tlrkcZMUSkE31QQSoBokWSeWh1m3ecM1vEkeLrXyeIOKw-Pg',
    imageAlt: 'Set of three minimalist metal hair clips with pearl details on pink linen',
  },
  {
    id: 'p-9',
    name: 'Pearl Drop Clip',
    slug: 'pearl-drop-clip',
    description: 'Minimalist gold and pearl hair clip.',
    price: 22,
    categoryId: 'clips',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGAHIhErMbpOxCVbYXtsWRsgkJw8K2Wc5iLNlVpYtLy7VUqVPvqUmnUz5tRz9o3VcfocetRW-uXtIN6H5I7fg2Fc7eNNjCCjqBB_IcZpzJNYph2WCKtOEyXUnLa0aHU1oE_0MkFWlg5KSnpguuBuTeEQlML0A8n3xvVVkbP-bODgHEe_yC2-myk6PYCjBJwqs8PbwO82Te2ptWC9uZ8-Nn9WOwhyA88s-Af_IP51fSZFQpBStZMQ0l2g',
    imageAlt: 'Gold-plated hair clip with freshwater pearls on parchment paper',
  },
  {
    id: 'p-10',
    name: 'Oat Linen Headband',
    slug: 'oat-linen-headband',
    description: 'Wide textured linen headband in natural oat color.',
    price: 25,
    categoryId: 'hair-bands',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYd6Wboc-2kAOJ0xlIdJxYYtL05HwMZy8fqsSqG3ylO8PXYV-238tbKnYgNHCoQ9ld6CjCnklTM0KPc99zX7o4gUp41-Nj-O-MGKU0BZfcD4Ip6k84_oQrvZHH-Ni22dqERlEuIN4cKN_KpczFJsXj1OD0bhDVKM3VsYzhQb2yxG8TPkvWgCnIRbl8pkX3YDYexwpv-E7SnhlYQKHE9VyL0qzm-DTWbMNJj0o-MIsxWjLMVLPfVmeI4Q',
    imageAlt: 'Natural oat linen headband on smooth stone surface',
  },
  {
    id: 'p-11',
    name: 'Sage Linen Band',
    slug: 'sage-linen-band',
    description: 'Comfort-fit padded headband in muted sage green linen.',
    price: 28,
    categoryId: 'hair-bands',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDxOcLSPXn4iMqVLYI6bZWg0lrynaX_PYioxDFSAcDHTiu7krPe1FsmC4k8qHumTR6wiZAxHV2MkxOaiivM59SuUpC_63nCUtFTmuyj8yaRCykwBtGs2T84YLcTAxnIOrewYxhRN7Pr2ns6ns0ih93oY0TTw77rjn_2prffoCnsWF-9OleL52Ndsa7S6hHEQinfPFphliq7eRD2Rkqp7sJycWaWe4Hf369XxzxGdytaRpzjBBAW59ymA',
    imageAlt: 'Sage green linen padded headband next to dried eucalyptus sprig',
    badge: 'eco-friendly',
  },
  {
    id: 'p-12',
    name: 'Silk Trio Set',
    slug: 'silk-trio-set',
    description: 'Set of three slim silk scrunchies in complementary pastel shades.',
    price: 35,
    categoryId: 'scrunchies',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDq9PrlgykouK1m9mF1ynIygdWJ-G876Pg8kfE5o90LjGYNyphVLlvW8mlGy1PqP1Y-srbBS72P2UVrKRePlqvWqZLkglESuBOC25AUk563ivgnutipyO_nQTvy-lUO64UlDrxK8Loj7gpmNcxveC34Dj-98IBVUQuQ5JyrgE004zeDTraEnO5FgBE4fa_5RmA7rOOB7wft7RckJaGMA74lusugDoeYZTOnLZQTNhR5RZfyzM9ludRiGA',
    imageAlt: 'Three silk scrunchies in blush pink, champagne, and ivory on white background',
    badge: 'new',
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
