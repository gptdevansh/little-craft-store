import type { Product } from '@/core/models';
import { ProductCard } from '../product-card';

export interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[var(--spacing-gutter)] gap-y-12 items-start">
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          aspectRatio={idx % 3 === 1 ? 'square' : 'portrait'}
        />
      ))}
    </div>
  );
}
