
"use client";

import { Button } from '@/components/ui/button';
import { UserCircle, Mail, Phone, Download } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Image from 'next/image';
import Link from 'next/link';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

export function AboutMeSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle icon={UserCircle}>About Me</SectionTitle>
      <AnimatedSectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/90 text-base md:text-lg leading-relaxed">
          <div className="flex justify-center mb-8">
            <Image 
              src="https://placehold.co/200x200.png"
              alt="Habiba Almetnawy"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
              data-ai-hint="professional portrait"
            />
          </div>
          <p className="text-center md:text-left">{aboutMeText}</p>
          
          <div className="space-y-4 pt-6 border-t border-border/40">
            <h3 className="text-xl font-semibold text-primary font-headline text-center md:text-left">Contact Information</h3>
            <div className="flex flex-col items-center md:items-start space-y-2 text-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:habibaalmetnawy18@gmail.com" className="hover:text-primary transition-colors">habibaalmetnawy18@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+97105-0706-0274</span>
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
