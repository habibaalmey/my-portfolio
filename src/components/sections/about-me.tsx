
"use client";

import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

// Reduced list of skills for a shorter ribbon
const skills = [
  'Python', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
  'Machine Learning', 'AI Development', 'Git', 'SQL', 'Java',
  // Duplicates for seamless loop
  'Python', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
  'Machine Learning', 'AI Development', 'Git', 'SQL', 'Java',
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge variant="secondary" className="mx-2 my-1 text-sm px-4 py-1.5 shadow-sm whitespace-nowrap bg-card hover:bg-primary/10 border-primary/30 text-primary">
    {skill}
  </Badge>
);

export function AboutMeSection() {
  return (
    <section id="about">
      {/* Part 1: Summary, Contact, CV - Darker Background */}
      <div className="bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
          <SectionTitle>About Me</SectionTitle>
          <AnimatedSectionWrapper>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                {aboutMeText}
              </p>
              <div className="mb-10 flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-3 text-foreground/80">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:700040241@uaeu.ac.ae" className="hover:text-primary transition-colors text-base">
                    700040241@uaeu.ac.ae
                  </a>
                </div>
                <Button asChild size="lg" className="shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.03]">
                  <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download My CV
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSectionWrapper>
        </div>
      </div>

      {/* Part 2: Full-width skills ribbon - Lighter Muted Background */}
      <div className="w-full overflow-hidden bg-muted/50 py-16 md:py-24">
        <div className="relative flex group group-hover:pause-animation">
          <div className="flex animate-marquee whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s1-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s2-${index}`} skill={skill} />)}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s3-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s4-${index}`} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
