
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, CalendarDays } from 'lucide-react';
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
    <section id="honors" className="py-20 md:py-28 relative overflow-hidden">
      <div className="binary-code-ribbon-horizontal top-0"></div>
      
      <div className="container mx-auto max-w-5xl px-4 md:px-6 relative z-10 pt-12 pb-12">
        <SectionTitle icon={Award}>Honors &amp; Awards</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 pt-8">
          {honorsAndAwards.map((item, index) => (
            <AnimatedSectionWrapper 
              key={item.title} 
              delay={`duration-700 delay-${index * 150}`}
              className="h-full" 
            >
              <Card className={cn(
                "flex flex-col text-center h-full card-achievement p-4", // Added p-4 for internal spacing
                "transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
              )}>
                <div className="achievement-icon-container">
                  <item.icon />
                </div>
                
                <CardHeader className="pb-2 pt-0">
                  <CardTitle className="font-pixel text-md md:text-lg text-primary uppercase">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-accent">{item.subtitle}</p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground mt-1">
                    <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                    {item.year}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-2 pb-2"> {/* Reduced padding for content */}
                  <CardDescription className="text-foreground/80 text-xs leading-relaxed"> {/* Adjusted text size */}
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSectionWrapper>
          ))}
        </div>
      </div>
      <div className="binary-code-ribbon-horizontal bottom-0"></div>
    </section>
  );
}

