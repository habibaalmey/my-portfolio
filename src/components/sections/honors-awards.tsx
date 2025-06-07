
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, CalendarDays } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import { cn } from '@/lib/utils';

const honorsAndAwards = [
  {
    title: 'Autonomous Car Competition',
    subtitle: '2nd Place',
    year: '2025',
    description: 'Programmed a custom vehicle for precision track navigation and obstacle avoidance, balancing speed and accuracy.',
    icon: Trophy,
  },
  {
    title: 'Data Visualization Competition',
    subtitle: '1st Place',
    year: '2025',
    description: 'Created an interactive Power BI dashboard delivering high-impact insights under a 2-day time limit.',
    icon: Award,
  },
  {
    title: 'ICEQ Research Project',
    subtitle: '1st Place',
    year: '2025',
    description: 'Presented AI-driven personalized learning research, selected from 150+ international participants for innovation.',
    icon: Award,
  },
  {
    title: 'CitroHack - Fitness App',
    subtitle: 'Best Beginner Project',
    year: '2023',
    description: 'Developed an engaging fitness app encouraging friendly competition and workout tracking.',
    icon: Trophy,
  },
];

export function HonorsAwardsSection() {
  return (
    <SectionContainer id="honors">
      <div className="relative overflow-hidden"> {/* Container for binary ribbons and content */}
        <div className="binary-code-ribbon left-0 hidden md:block"></div>
        <div className="binary-code-ribbon right-0 hidden md:block"></div>
        
        <div className="relative z-10"> {/* Content wrapper to sit above ribbons */}
          <SectionTitle icon={Award}>Honors &amp; Awards</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 pt-8"> {/* Adjusted lg:grid-cols-2 for 2x2 layout */}
            {honorsAndAwards.map((item, index) => (
              <AnimatedSectionWrapper 
                key={item.title} 
                delay={`duration-700 delay-${index * 150}`}
                className="h-full" 
              >
                <Card className={cn(
                  "flex flex-col text-center h-full card-lightbulb relative pt-8",
                  "transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
                )}>
                  <div className="lightbulb-icon-container">
                    <item.icon />
                  </div>
                  <div className="lightbulb-glow absolute inset-0 rounded-lg pointer-events-none -z-10"></div>
                  
                  <CardHeader className="pb-2 pt-0">
                    <CardTitle className="font-headline text-lg md:text-xl text-primary">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-accent">{item.subtitle}</p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground mt-1">
                      <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                      {item.year}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow px-4 pb-4">
                    <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
