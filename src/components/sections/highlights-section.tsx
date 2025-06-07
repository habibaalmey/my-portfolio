
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// SectionContainer removed as marquee will be full-width
import { SectionTitle } from '@/components/layout/section-title';
import { Sparkles } from 'lucide-react'; 

const highlightsData = [
  {
    title: 'Samsung Innovation Campus',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'samsung campus event',
  },
  {
    title: 'Cyber Mind Seminar',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'cybersecurity seminar',
  },
  {
    title: 'Python Workshop',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'python coding workshop',
  },
  {
    title: 'Java Workshop',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'java coding workshop',
  },
  {
    title: 'ICEQ - 1st Place Winner',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'ICEQ award ceremony',
  },
  {
    title: 'Autonomous Car Training',
    image: 'https://placehold.co/320x192.png',
    imageHint: 'autonomous car robot',
  }
];

// Duplicate for seamless marquee
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
                  width={320} 
                  height={192} 
                  className="object-cover" 
                  data-ai-hint={highlight.imageHint}
                />
                <CardContent className="p-4">
                  <CardTitle className="text-md font-semibold text-primary leading-tight mb-1 truncate">{highlight.title}</CardTitle>
                  {/* CardDescription removed as per user request */}
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
                  width={320}
                  height={192}
                  className="object-cover"
                  data-ai-hint={highlight.imageHint}
                />
                <CardContent className="p-4">
                  <CardTitle className="text-md font-semibold text-primary leading-tight mb-1 truncate">{highlight.title}</CardTitle>
                  {/* CardDescription removed as per user request */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
