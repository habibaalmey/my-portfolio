
"use client";

import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

const skills = [
  'Python', 'JavaScript', 'SQL', 'Java', 'C++', 'HTML', 'CSS', 
  'React', 'Next.js', 'Tailwind CSS', 'LangChain', 'RAG', 
  'Machine Learning', 'Data Analysis', 'AI Development', 'Power BI', 'Git'
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge variant="secondary" className="mx-2 my-1 text-sm px-4 py-1.5 shadow-sm whitespace-nowrap bg-background hover:bg-primary/10 border-primary/30 text-primary">
    {skill}
  </Badge>
);

export function AboutMeSection() {
  return (
    <SectionContainer id="about" className="bg-muted/50">
      <SectionTitle>About Me</SectionTitle>
      <AnimatedSectionWrapper>
        <div className="max-w-4xl mx-auto text-center px-4">
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

          {/* Moving Skills Ribbon */}
          <div className="mt-16 w-full overflow-hidden py-4 bg-background/30 rounded-lg shadow-inner">
            <div className="relative flex group"> {/* Group for hover pause */}
              <div className="flex animate-marquee whitespace-nowrap group-hover:pause-animation">
                {skills.map((skill, index) => <SkillBadge key={`s1-${index}`} skill={skill} />)}
                {skills.map((skill, index) => <SkillBadge key={`s2-${index}`} skill={skill} />)} {/* Duplicate for seamless loop */}
              </div>
              {/* This second div is for seamless looping */}
              <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:pause-animation">
                {skills.map((skill, index) => <SkillBadge key={`s3-${index}`} skill={skill} />)}
                {skills.map((skill, index) => <SkillBadge key={`s4-${index}`} skill={skill} />)} {/* Duplicate for seamless loop */}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSectionWrapper>
    </SectionContainer>
  );
}
