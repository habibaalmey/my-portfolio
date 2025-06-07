
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// SectionContainer removed as marquee will be full-width
import { SectionTitle } from '@/components/layout/section-title';
import { Sparkles } from 'lucide-react'; 

const highlightsData = [
  {
    title: 'AI Research Breakthrough',
    description: 'Led a team to an 81% reduction in system hallucinations for an AI tutor.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'AI abstract concept',
  },
  {
    title: 'Samsung AI Intern Top Project',
    description: 'Developed a CNN with 99.61% accuracy for plant disease classification.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'data plant recognition',
  },
  {
    title: 'Hackathon Winner: CitroHack',
    description: 'Awarded "Best Beginner Project" for an innovative fitness application.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'team collaboration coding',
  },
  {
    title: 'Data Visualization Champion',
    description: 'Secured 1st place by creating an impactful Power BI dashboard under pressure.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'charts dashboard analytics',
  },
  {
    title: 'Autonomous Car Robotics',
    description: 'Achieved 2nd place in a competition programming a custom autonomous vehicle.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'robot car technology',
  },
  {
    title: 'Published Research: ICEQ',
    description: 'Presented AI-driven personalized learning research, selected from 150+ participants.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'academic presentation conference',
  }
];

const marqueeHighlights = [...highlightsData, ...highlightsData, ...highlightsData];


export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-20 bg-background">
      {/* Container for the title, keeping it constrained */}
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionTitle icon={Sparkles}>Journey Highlights</SectionTitle>
      </div>

      {/* Marquee container is now full-width */}
      <div className="w-full overflow-hidden relative group group-hover:pause-animation py-4 mt-8 md:mt-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeHighlights.map((highlight, index) => (
            <div key={`hl1-${index}`} className="mx-3">
              <Card className="highlight-photocard">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={400} 
                  height={250} 
                  className="object-cover" 
                  data-ai-hint={highlight.imageHint}
                />
                <CardContent className="p-4">
                  <CardTitle className="text-md font-semibold text-primary leading-tight mb-1 truncate">{highlight.title}</CardTitle>
                  <CardDescription className="text-xs text-foreground/80 leading-snug h-10 overflow-hidden">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4">
           {marqueeHighlights.map((highlight, index) => (
            <div key={`hl2-${index}`} className="mx-3">
               <Card className="highlight-photocard">
                 <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={400}
                  height={250}
                  className="object-cover"
                  data-ai-hint={highlight.imageHint}
                />
                <CardContent className="p-4">
                  <CardTitle className="text-md font-semibold text-primary leading-tight mb-1 truncate">{highlight.title}</CardTitle>
                  <CardDescription className="text-xs text-foreground/80 leading-snug h-10 overflow-hidden">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
