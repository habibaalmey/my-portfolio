
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, CalendarDays } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';

const honorsAndAwards = [
  {
    title: '2nd Place - Autonomous Car Competition',
    year: '2025',
    description: 'Achieved 2nd place in the Autonomous Car Competition by programming a custom-engineered vehicle to navigate tracks with precision. Developed smart algorithms for real-time obstacle avoidance and optimal path-following at efficient speeds. The solution balanced speed, accuracy, and adaptability, ensuring top performance throughout the challenge.',
    icon: Trophy,
  },
  {
    title: '1st Place - Data Visualization Competition',
    year: '2025',
    description: 'Won 1st place in the Data Visualization Competition by creating a complete, interactive dashboard in Power BI within a 2-day time limit. Delivered high-impact insights from the given dataset, focusing on clarity, depth, and storytelling through visual elements.',
    icon: Award,
  },
  {
    title: '1st Place - ICEQ Research Project Competition',
    year: '2025',
    description: 'Won 1st place at the 8th International Conference on Education Quality (ICEQ) for presenting a research paper on AI-driven personalized learning systems. Selected from over 150 international participants, the project was recognized for its clarity, innovation, and real-world impact. The award highlighted both the research quality and its potential to transform educational experiences through AI.',
    icon: Award,
  },
  {
    title: 'Best Beginner Project - CitroHack',
    year: '2023',
    description: 'Developed a fun and interactive fitness app that encourages friends to stay active together by earning points for completing workouts and challenges. The app tracks progress, fosters friendly competition, and announces weekly winners to keep users motivated. Awarded Best Beginner Project at CitroHack for creativity, engagement, and clean implementation.',
    icon: Trophy,
  },
];

export function HonorsAwardsSection() {
  return (
    <SectionContainer id="honors">
      <SectionTitle icon={Award}>Honors &amp; Awards</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {honorsAndAwards.map((item, index) => (
          <AnimatedSectionWrapper 
            key={item.title} 
            delay={`duration-700 delay-${index * 150}`}
          >
            <Card className="flex flex-col shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-headline text-lg md:text-xl text-primary flex items-center">
                    <item.icon className="mr-3 h-5 w-5 md:h-6 md:w-6 text-accent" />
                    {item.title}
                  </CardTitle>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {item.year}
                  </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedSectionWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}
