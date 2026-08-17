/** Product sold by Little Craft Store — hair accessories */
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  imageAlt: string;
  badge?: 'hand-stitched' | 'eco-friendly' | 'bestseller' | 'new';
  whatsappMessage?: string;
}
