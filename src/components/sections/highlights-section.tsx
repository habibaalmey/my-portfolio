
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

// Duplicate for seamless marquee (2x is enough for a translateX(-50%) loop)
const marqueeItems = [...highlightsData, ...highlightsData];


export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionTitle icon={Sparkles}>Journey Highlights</SectionTitle>
      </div>

      <div className="w-full overflow-hidden relative group group-hover:pause-animation py-4 mt-8 md:mt-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((highlight, index) => (
            <div key={`hl-loop-${index}`} className="mx-3 flex-shrink-0"> {/* Added flex-shrink-0 */}
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
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* The second div with animate-marquee2 has been removed */}
      </div>
    </section>
  );
}
