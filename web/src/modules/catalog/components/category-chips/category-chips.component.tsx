import Link from 'next/link';
import type { Category } from '@/core/models';

export interface CategoryChipsProps {
  categories: Category[];
  activeSlug: string;
}

export function CategoryChips({ categories, activeSlug }: CategoryChipsProps) {
  return (
    <div className="overflow-x-auto hide-scrollbar py-[var(--spacing-unit)]">
      <div className="flex gap-[var(--spacing-unit)] min-w-max pb-2 px-1">
        {categories.map((cat) => {
          const isActive = activeSlug === cat.slug;
          return (
            <Link
              key={cat.id}
              href={cat.slug === 'all' ? '/shop' : `/shop?category=${cat.slug}`}
              className={`min-h-[var(--spacing-touch-target)] px-6 rounded-full font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold flex items-center justify-center transition-all active:scale-95 ${
                isActive
                  ? 'bg-primary-container text-white'
                  : 'border border-outline-variant/50 text-primary-container bg-white hover:bg-surface-container-low'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
