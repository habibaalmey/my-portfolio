
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutMeSection } from '@/components/sections/about-me';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { HonorsAwardsSection } from '@/components/sections/honors-awards';
import { HighlightsSection } from '@/components/sections/highlights-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <AboutMeSection />
        
        <ExperienceSection />
        <div className="my-16 h-px w-full bg-[hsl(var(--background))]"></div>
        <ProjectsSection />
        
        {/* Separator between Projects and Highlights removed */}
        <HighlightsSection />
        
        {/* Separator between Highlights and Honors & Awards removed */}
        <HonorsAwardsSection />
        
      </main>
      <Footer />
    </div>
  );
}
