
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutMeSection } from '@/components/sections/about-me';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { HonorsAwardsSection } from '@/components/sections/honors-awards';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <Separator className="my-16 md:my-20 bg-border/60" />
        </div>
        <HonorsAwardsSection />
      </main>
      <Footer />
    </div>
  );
}
