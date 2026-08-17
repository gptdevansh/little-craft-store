import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/core/data';
import { Icon } from '@/shared';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Little Craft Store. Chat with us on WhatsApp, follow us on Instagram, or find us on Amazon and Flipkart.',
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex items-center justify-center relative py-12 md:py-20 px-[var(--spacing-container-margin)] w-full max-w-7xl mx-auto">
      {/* Contact Card */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center relative z-10 bg-surface/80 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-outline-variant/30">
        {/* Headline */}
        <h1 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] tracking-tight text-primary mb-4 font-semibold">
          Let&apos;s Make Something Beautiful Together
        </h1>

        {/* Description */}
        <p className="font-[family-name:var(--font-body)] text-[18px] leading-[28px] text-on-surface-variant mb-12 max-w-xl">
          Have a question about our handmade accessories or a custom order? Drop us a message. We
          usually reply within a day.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-tertiary-container text-on-tertiary-container rounded-full min-h-[var(--spacing-touch-target)] mb-16 transition-all duration-300 hover:-translate-y-1 hover:bg-cta-pink-hover active:translate-y-0 active:scale-95"
        >
          <Icon name="chat" size={28} fill />
          <span className="font-[family-name:var(--font-body)] text-[16px] tracking-wide font-semibold">
            Chat with us on WhatsApp
          </span>
        </a>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-outline-variant mb-12 opacity-50" />

        {/* Social & Marketplaces */}
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="font-[family-name:var(--font-headline)] text-[24px] text-secondary mb-2 font-medium">
            Find us elsewhere
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Instagram */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-secondary text-secondary rounded-full font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold hover:bg-secondary-fixed hover:text-primary transition-colors min-h-[var(--spacing-touch-target)]"
            >
              <Icon name="photo_camera" size={20} />
              {SITE_CONFIG.instagramHandle}
            </a>

            {/* Marketplaces */}
            {SITE_CONFIG.marketplaces.map((mp) => (
              <a
                key={mp.name}
                href={mp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-outline-variant text-on-surface-variant rounded-full font-[family-name:var(--font-body)] text-[14px] tracking-[0.05em] font-semibold hover:border-secondary hover:text-secondary transition-colors min-h-[var(--spacing-touch-target)] bg-surface-bright"
              >
                <Icon name={mp.icon} size={20} />
                {mp.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
