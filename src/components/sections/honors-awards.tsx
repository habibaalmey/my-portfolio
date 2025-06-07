
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
    <section id="honors" className="py-20 md:py-28 relative">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        <SectionTitle icon={Award}>Honors &amp; Awards</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-8">
          {honorsAndAwards.map((item, index) => (
            <AnimatedSectionWrapper
              key={item.title}
              delay={`duration-700 delay-${index * 150}`}
              className="h-full"
            >
              <Card className="card-achievement"> {/* Apply the new base class */}
                <div className="achievement-icon-container">
                  <item.icon />
                </div>
                <CardHeader className="pb-2 pt-0 px-3">
                  <CardTitle className="font-pixel text-base text-primary uppercase leading-tight">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-accent">{item.subtitle}</p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground mt-1">
                    <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                    {item.year}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-4 pb-4 pt-2">
                  <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

    