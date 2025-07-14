import { Header } from '@/components/shared/common/Header';
import { Hero, WhatWeDo, StoriesAboutImpact } from '@/components/sections';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
      <StoriesAboutImpact />
    </main>
  );
}
