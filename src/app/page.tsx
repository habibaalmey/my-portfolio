
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutMeSection } from '@/components/sections/about-me';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { HonorsAwardsSection } from '@/components/sections/honors-awards';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <HonorsAwardsSection />
      </main>
      <Footer />
    </div>
  );
}
