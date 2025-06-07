
"use client";

import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const aboutMeText = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

export function AboutMeSection() {
  return (
    <SectionContainer id="about" className="bg-muted/50">
      <SectionTitle>About Me</SectionTitle>
      <AnimatedSectionWrapper>
        <Card className="max-w-3xl mx-auto shadow-xl p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] border-transparent hover:border-primary/30">
          <CardContent className="p-0"> {/* Remove default CardContent padding */}
            <div className="text-center space-y-8 text-foreground/90 text-base md:text-lg leading-relaxed">
              <p>{aboutMeText}</p>
              
              <div className="pt-6 space-y-6"> {/* Reduced pt from 8 to 6 */}
                <div className="flex justify-center items-center space-x-3 text-foreground/80">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:700040241@uaeu.ac.ae" className="hover:text-primary transition-colors">700040241@uaeu.ac.ae</a>
                </div>
                
                <div className="flex justify-center">
                  <Button asChild size="lg" className="shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.03]">
                    <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download My CV
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSectionWrapper>
    </SectionContainer>
  );
}
