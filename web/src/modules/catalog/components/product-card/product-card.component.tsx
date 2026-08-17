import type { Product } from '@/core/models';
import { SITE_CONFIG } from '@/core/data';
import { Icon } from '@/shared';

export interface ProductCardProps {
  product: Product;
  aspectRatio?: 'square' | 'portrait';
}

export function ProductCard({ product, aspectRatio = 'square' }: ProductCardProps) {
  const aspect = aspectRatio === 'portrait' ? 'aspect-[4/5]' : 'aspect-square';
  const whatsappMsg = encodeURIComponent(
    product.whatsappMessage ?? `Hi! I'd like to order the "${product.name}" ($${product.price}).`
  );
  const whatsappLink = `${SITE_CONFIG.whatsappUrl}?text=${whatsappMsg}`;

  return (
    <article className="flex flex-col group">
      {/* Image */}
      <div
        className={`relative w-full ${aspect} bg-surface-container-low mb-4 overflow-hidden rounded-lg border border-outline-variant/30`}
      >
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <div
            className="absolute top-3 left-3 bg-sage-green text-white p-1.5 rounded-full flex items-center justify-center"
            title={product.badge}
          >
            <Icon
              name={product.badge === 'eco-friendly' ? 'spa' : 'eco'}
              size={16}
            />
          </div>
        )}
        {/* Wishlist icon — hover only */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full p-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm scale-90 group-hover:scale-100">
          <Icon name="favorite_border" size={18} className="text-primary" />
        </div>
      </div>

      {/* Details */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-[family-name:var(--font-headline)] text-[17px] md:text-[20px] text-on-surface font-medium leading-snug">
          {product.name}
        </h3>
        <span className="font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold text-secondary ml-4 mt-0.5 shrink-0">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <p className="font-[family-name:var(--font-body)] text-[14px] md:text-[16px] text-on-surface-variant mb-4 flex-grow leading-relaxed">
        {product.description}
      </p>

      {/* WhatsApp Order CTA */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full py-3 rounded-full font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold flex items-center justify-center gap-2 min-h-[var(--spacing-touch-target)]"
      >
        <Icon name="chat" size={20} />
        <span>Order on WhatsApp</span>
      </a>
    </article>
  );
}
