
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/layout/section-title';
import { Sparkles } from 'lucide-react'; 

const highlightsData = [
  {
    title: 'Samsung Innovation Campus',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: Samsung Innovation Campus
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'samsung campus event',
  },
  {
    title: 'Cyber Mind Seminar',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: Cyber Mind Seminar
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'cybersecurity seminar',
  },
  {
    title: 'Python Workshop',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: Python Workshop
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'python coding workshop',
  },
  {
    title: 'Java Workshop',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: Java Workshop
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'java coding workshop',
  },
  {
    title: 'ICEQ - 1st Place Winner',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: ICEQ - 1st Place Winner
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'ICEQ award ceremony',
  },
  {
    title: 'Autonomous Car Training',
    // USER_EDITABLE_HIGHLIGHT_IMAGE: Autonomous Car Training
    // Replace 'https://placehold.co/320x192.png' below with the image URL for this highlight.
    image: 'https://placehold.co/320x192.png',
    imageHint: 'autonomous car robot',
  }
];

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionTitle icon={Sparkles}>Journey Highlights</SectionTitle>
      </div>

      <div className="w-full overflow-hidden flex whitespace-nowrap group group-hover:pause-animation py-4 mt-8 md:mt-12">
        <div className="flex animate-continuous-marquee whitespace-nowrap">
          {highlightsData.map((highlight, index) => (
            <div key={`set1-hl-${index}`} className="mx-3 flex-shrink-0">
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
        <div className="flex animate-continuous-marquee whitespace-nowrap">
          {highlightsData.map((highlight, index) => (
            <div key={`set2-hl-${index}`} className="mx-3 flex-shrink-0">
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
      </div>
    </section>
  );
}
