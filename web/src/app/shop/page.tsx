import type { Metadata } from 'next';
import { CATEGORIES, getProducts } from '@/core/data';
import { SectionHeader } from '@/shared';
import { CategoryChips, ProductGrid } from '@/modules/catalog';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Browse our curated collection of handcrafted hair accessories — scrunchies, hair bands, clips, and more. Each piece designed with love.',
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const activeCategory = params.category || 'all';
  const products = getProducts(activeCategory);

  return (
    <div className="max-w-7xl mx-auto w-full px-[var(--spacing-container-margin)] py-8 md:py-16 space-y-10">
      {/* Header */}
      <SectionHeader
        title="Curated Collection"
        subtitle="Discover our handcrafted hair accessories, each piece uniquely designed to add a touch of warmth and elegance to your everyday style."
        align="center"
      />

      {/* Category Filter */}
      <div className="flex justify-center">
        <CategoryChips categories={CATEGORIES} activeSlug={activeCategory} />
      </div>

      {/* Product Grid */}
      <ProductGrid products={products} />
    </div>
  );
}
