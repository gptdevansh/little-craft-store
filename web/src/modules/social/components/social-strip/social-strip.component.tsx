import { SITE_CONFIG } from '@/core/data';
import { Icon } from '@/shared';

export function SocialStrip() {
  return (
    <section className="border-t border-b border-outline-variant/20 py-12 bg-white">
      <div className="px-[var(--spacing-container-margin)] max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
        {/* Instagram */}
        <div className="flex flex-col items-center text-center">
          <span className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant mb-3 font-light">
            Follow our journey
          </span>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-headline)] text-[26px] text-primary hover:text-primary-container transition-colors flex items-center gap-2 min-h-[var(--spacing-touch-target)] active:scale-95 font-medium"
          >
            {SITE_CONFIG.instagramHandle}
          </a>
        </div>

        <div className="hidden md:block w-px h-16 bg-outline-variant/30" />

        {/* Marketplaces */}
        <div className="flex flex-col items-center text-center">
          <span className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant mb-5 font-light">
            Find us also on
          </span>
          <div className="flex items-center gap-5">
            {SITE_CONFIG.marketplaces.map((mp) => (
              <a
                key={mp.name}
                href={mp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-surface hover:bg-surface-container-low px-5 py-2.5 rounded-full border border-outline-variant/40 transition-colors active:scale-95 shadow-sm"
              >
                <Icon name={mp.icon} size={18} className="text-secondary font-light" />
                <span className="font-[family-name:var(--font-body)] text-[13px] text-secondary font-semibold tracking-wide">
                  {mp.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
