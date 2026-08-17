import { HeroSection } from '@/modules/hero';
import { BestSellers } from '@/modules/catalog';
import { StoryTeaser } from '@/modules/story';
import { SocialStrip } from '@/modules/social';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BestSellers />
      <StoryTeaser />
      <SocialStrip />
    </>
  );
}
