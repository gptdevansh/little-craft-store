import { Icon } from '@/shared';
import Image from 'next/image';

export function StoryTeaser() {
  return (
    <section className="py-20 px-[var(--spacing-container-margin)] md:py-28 relative">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Portrait Circle */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-blossom-bg shadow-sm shrink-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA62HCr7FKf9l0euJaMkA2KQzMNZ3y4TLE7SFlnmaorI6HXuqn8zcHoshAbOM47bgi8K-6XIUR0S1NxqQo80MeC-Z3WDHgsh9eOeprO44oqulDAWzeY74Q4cGwWnOK9gD2dV_qcAfNXM3HY0_gsrKXExWXtw0VIL6lm0ZBb0O9GDnWrXtC8n7s8h26Vd989dt23c0ibptZt6s7nvIuVe_sRtU1_Cgqv5Y8bVvOM3ZzeZHOc6t8jjNaCYw"
            alt="Artisan hand-stitching a beautiful patterned scrunchie in a sunlit studio"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="flex items-center gap-2 mb-5 opacity-80">
            <Icon name="temp_preferences_eco" size={18} className="text-sage-green font-light" />
            <span className="font-[family-name:var(--font-body)] text-[12px] tracking-[0.15em] uppercase text-sage-green font-semibold">
              Our Story
            </span>
          </div>
          <p className="font-[family-name:var(--font-body)] text-[17px] text-on-surface-variant mb-8 leading-loose font-light">
            Every piece in our collection is carefully cut, stitched, and finished by hand. We
            believe in creating beautiful, lasting accessories that bring a touch of joy to your
            daily routine, honoring the slow fashion movement.
          </p>
          <a
            href="/our-story"
            className="font-[family-name:var(--font-body)] text-[13px] text-primary hover:text-primary-container border-b border-primary/40 hover:border-primary pb-1 transition-all active:scale-95 inline-flex items-center uppercase tracking-[0.05em] font-semibold"
          >
            Read more about our process
          </a>
        </div>
      </div>
    </section>
  );
}
