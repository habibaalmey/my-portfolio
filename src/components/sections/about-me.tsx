
"use client";

import { Button } from '@/components/ui/button';
import { UserCircle, Mail, Download } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

export function AboutMeSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle icon={UserCircle}>About Me</SectionTitle>
      <AnimatedSectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/90 text-base md:text-lg leading-relaxed">
          <p className="text-center md:text-left">{aboutMeText}</p>
          
          <div className="space-y-4 pt-6 border-t border-border/40">
            <h3 className="text-xl font-semibold text-primary font-headline text-center md:text-left">Contact Information</h3>
            <div className="flex flex-col items-center md:items-start space-y-2 text-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:700040241@uaeu.ac.ae" className="hover:text-primary transition-colors">700040241@uaeu.ac.ae</a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-center md:justify-start">
            <Button asChild className="w-full md:w-auto">
              <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                <Download className="mr-2 h-4 w-4" />
                Download My CV
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSectionWrapper>
    </SectionContainer>
  );
}
