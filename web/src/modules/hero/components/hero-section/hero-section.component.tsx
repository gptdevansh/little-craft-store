import { Button, Icon } from '@/shared';

export function HeroSection() {
  return (
    <section className="px-[var(--spacing-container-margin)] py-14 md:py-24 relative flex flex-col md:flex-row items-center gap-10 md:gap-[var(--spacing-gutter)] max-w-7xl mx-auto">
      {/* Botanical accent — desktop only */}
      <div className="absolute top-10 left-6 botanical-accent z-0 pointer-events-none hidden md:block opacity-40">
        <Icon name="psychiatry" size={40} className="font-thin" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10 pt-4">
        <h1 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[40px] leading-[1.1] tracking-tight text-primary font-semibold">
          Handmade hair accessories, made with love.
        </h1>
        <p className="font-[family-name:var(--font-body)] text-[18px] leading-[28px] text-on-surface-variant max-w-md font-light">
          Discover our collection of artisanal scrunchies, crafted with premium
          fabrics and thoughtful details to elevate your everyday style.
        </p>
        <Button href="/shop" variant="cta" size="lg">
          Browse Collection
        </Button>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 relative mt-2 md:mt-0 z-10">
        <div className="aspect-[4/3] md:aspect-[4/4] rounded-[2rem] overflow-hidden border border-outline-variant/20 shadow-sm">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-hKSsFsGxKAmLwTQce0tBJtqKHH5vcbfnCzIjK51c6DVc0c8f4UvQH3dR8ptGFkSEbPo_WAuQgsOvaOAyqQEsAPAXjHc_YnduXz8tmAiaosGqRYI0KStw7Y-4-KXPsSJ5anMZD3zA7iYBSKifvj6KRMJzsS01ue7vLPBeQ-1J-jdsttMTB_MYTurn-Gt9RanYBc6u7z2eWEtyuGGh19JBkWivn-D9N_tW-2LVI3X6SJgUn5UAT42XwA"
            alt="Handmade silk and velvet scrunchies in warm plum and blush tones on linen"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
