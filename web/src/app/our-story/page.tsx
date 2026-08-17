import type { Metadata } from 'next';
import { Button, Icon } from '@/shared';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn about Little Craft Store — how it started at a kitchen table with a love for handcrafted accessories and the slow fashion movement.',
};

export default function OurStoryPage() {
  return (
    <div className="flex-grow flex flex-col items-center pb-16">
      {/* Hero Image */}
      <section className="w-full max-w-4xl px-[var(--spacing-container-margin)] pt-6 pb-8 relative flex flex-col items-center">
        <div className="relative w-full max-w-2xl aspect-[4/5] md:aspect-video rounded-xl overflow-hidden shadow-sm bg-surface-container-low z-10 p-2 bg-white">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-CtqR6gPBmqfF3E8c40QDk69zxGubbFaqcz_Y1agQPzNr6YH7N2Dr_PX8GAruhAl0kzo615uTBGMHqdkQCpBM4cpUt0NN-lC5pUTkwcEJXbBH8mQfczLeizujG_j8fgBdRSr0ECQ7A4DCtl5QW83ulQ7wPOSAxL9KeDb0A-NqaVt3Z0N4XA8vRZsqQSkAJNKLopS8GYLlMQovJ6sIfyOY20TxnHIPBf68eV9JUv0wwR0DfwJ7AWAJg"
            alt="Hands carefully sewing a beautiful patterned silk scrunchie on a rustic wooden table in warm natural light"
            className="w-full h-full object-cover rounded-lg"
            loading="eager"
          />
        </div>
        {/* Decorative blurs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary-container rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-fixed rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center py-4">
        <Icon name="local_florist" size={30} className="text-secondary opacity-60 font-light" />
      </div>

      {/* Story Content */}
      <section className="w-full max-w-2xl px-[var(--spacing-container-margin)] space-y-8 text-on-surface-variant text-center font-[family-name:var(--font-body)] text-[18px] leading-[32px]">
        <p>
          It started at a kitchen table, surrounded by loose threads and a love for the little
          details. I was searching for hair accessories that didn&apos;t just look beautiful, but
          felt intentionally made—pieces that carried a sense of warmth and individual character.
        </p>
        <p>
          When I couldn&apos;t find exactly what I was looking for, I decided to make it myself.
          Every scrunchie, clip, and ribbon began as an experiment in blending premium fabrics with
          everyday comfort. What started as gifts for friends slowly blossomed into the Little Craft
          Store.
        </p>
        <p>
          Today, our studio is a bit bigger than that kitchen table, but the philosophy hasn&apos;t
          changed. We believe in organic minimalism, in the beauty of slight imperfections, and in
          creating pieces that make your daily routine feel just a little more special.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-16 px-[var(--spacing-container-margin)] w-full flex justify-center max-w-sm mx-auto">
        <Button href="/shop" variant="primary" size="lg" fullWidth>
          Browse the Collection
        </Button>
      </div>
    </div>
  );
}
