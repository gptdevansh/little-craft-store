import { getBestSellers } from '@/core/data';
import { ProductCard } from '../product-card';
import Link from 'next/link';
import { Icon } from '@/shared';

export function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-16 bg-blossom-bg">
      <div className="px-[var(--spacing-container-margin)] mb-10 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <h2 className="font-[family-name:var(--font-headline)] text-[28px] text-primary tracking-tight font-medium">
            Best Sellers
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant mt-2 font-light italic">
            Our most loved creations.
          </p>
        </div>
        <Link
          href="/shop"
          className="font-[family-name:var(--font-body)] text-[12px] text-primary hover:text-primary-container transition-all active:scale-95 uppercase tracking-[0.1em] flex items-center min-h-[var(--spacing-touch-target)] font-semibold pb-1"
        >
          View All <Icon name="arrow_forward" size={16} className="ml-1.5" />
        </Link>
      </div>

      {/* Horizontal scroll carousel */}
      <div className="flex overflow-x-auto gap-6 px-[var(--spacing-container-margin)] pb-8 snap-x snap-mandatory hide-scrollbar items-start max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`flex-none snap-start ${idx % 2 === 0 ? 'w-[280px]' : 'w-[240px]'}`}
          >
            <ProductCard
              product={product}
              aspectRatio={idx % 2 === 0 ? 'square' : 'portrait'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
