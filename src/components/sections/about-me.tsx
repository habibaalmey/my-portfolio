
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

const skills = [
  'Python', 'Java', 'SQL', 'HTML/CSS', 'Pandas',
  'Scikit-learn', 'TensorFlow', 'Power BI', 'LangChain', 'Git',
  'Figma', 'Feature Engineering', 'Business Analytics', 'Neural Networks', 'Project Management',
  // Duplicates for seamless loop
  'Python', 'Java', 'SQL', 'HTML/CSS', 'Pandas',
  'Scikit-learn', 'TensorFlow', 'Power BI', 'LangChain', 'Git',
  'Figma', 'Feature Engineering', 'Business Analytics', 'Neural Networks', 'Project Management',
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge
    className="mx-2 my-1 text-sm px-4 py-1.5 shadow-sm whitespace-nowrap
               bg-card text-card-foreground border border-primary-foreground/20
               hover:bg-card/90"
  >
    {skill}
  </Badge>
);

export function AboutMeSection() {
  return (
    <section id="about">
      {/* Part 1: Summary, Contact, CV - Darker Background */}
      <div className="bg-background relative"> {/* Added relative for starfield positioning */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-starfield opacity-50"></div>
        <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 relative z-10"> {/* Added z-10 */}
          <SectionTitle>About Me</SectionTitle>
          <AnimatedSectionWrapper>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
              <div className="md:w-1/3 flex-shrink-0 flex flex-col items-center">
                <div className="digital-glow-frame mb-6 md:mb-0">
                  <div className="image-screen-glow">
                    {/* USER_EDITABLE_IMAGE: About Me Picture */}
                    {/* Replace the 'src' value below with your 'About Me' image URL. */}
                    {/* Current placeholder: https://placehold.co/300x300.png */}
                    <Image
                      src="/About-me.png"
                      alt="Habiba Almetnawy"
                      width={300}
                      height={300}
                      className="rounded-sm transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
                      data-ai-hint="placeholder profile"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                  {aboutMeText}
                </p>
                <div className="mb-10 flex flex-col items-center md:items-start space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-6 text-foreground/80">
                    <Link href="mailto:habibaalmetnawy18@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                      <Mail className="h-6 w-6 text-accent" />
                    </Link>
                    <Link href="https://github.com/habibaalmey" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                      <Github className="h-6 w-6 text-accent" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/habibaalmetnawy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </Link>
                  </div>
                  <Button asChild size="lg" className="btn-treasure-box shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-95">
                    <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download My CV
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSectionWrapper>
        </div>
      </div>

      {/* Part 2: Full-width skills ribbon - Gradient Background */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-secondary via-primary/40 to-secondary py-4 md:py-6">
        <div className="relative flex group group-hover:pause-animation">
          <div className="flex animate-skills-marquee whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s1-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s2-${index}`} skill={skill} />)}
          </div>
          <div className="absolute top-0 flex animate-skills-marquee2 whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s3-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s4-${index}`} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
