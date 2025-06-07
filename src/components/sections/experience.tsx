
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Image from 'next/image';

const experiences = [
  {
    role: 'Sure+ Research Assistant',
    company: 'United Arab Emirates University',
    location: 'Al Ain, UAE',
    duration: 'September 2024 – May 2025',
    description: [
      'Engineered an adaptive AI tutoring system using LangChain and Retrieval-Augmented Generation (RAG) to dynamically retrieve and integrate relevant educational content, enhancing contextual accuracy and improving concept mastery speed by 20%.',
      'Led a 3-person team in developing test protocols with AI-simulated student profiles and engineered solutions that reduced system hallucinations by 81%.',
    ],
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'university logo'
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'United Arab Emirates University',
    location: 'Al Ain, UAE',
    duration: 'June 2024 – August 2024',
    description: [
      'Conducted a comparative study on the effectiveness of traditional educational tools, digital documents, AI text, and AI speech technologies, significantly improving learning engagement and outcomes for 32 students.',
      'Transformed raw assessment data into actionable insights through advanced statistical modeling, revealing key intervention points that boosted student performance metrics by 15%.',
    ],
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'university logo'
  },
  {
    role: 'AI Intern',
    company: 'Samsung',
    location: 'Dubai, UAE',
    duration: 'February 2024 – April 2024',
    description: [
      'Completed an intensive 2-month AI training and development program focused on deep learning and computer vision.',
      'Built and deployed a CNN using MobileNetV2 with 99.61% accuracy across 38 plant disease classes, integrated a chatbot that boosted user interaction efficiency by 60%, and was selected among the Top 5 Best Projects by Samsung engineers.',
    ],
    logoUrl: 'https://placehold.co/48x48.png', 
    logoHint: 'samsung logo'
  },
  {
    role: 'AI Risk Landscape Market Research Extern',
    company: 'National Research Group',
    location: 'Remote',
    duration: 'July 2024 – July 2024',
    description: [
      'Conducted in-depth secondary research to identify, analyze, and categorize key AI risks based on established risk frameworks.',
      'Mapped and classified AI-related threats with precision, aligning findings with relevant industry standards.',
      'Developed a detailed case study highlighting the potential business impact of specific AI risks.',
    ],
    logoUrl: 'https://placehold.co/48x48.png',
    logoHint: 'research group logo'
  },
];

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle icon={Briefcase}>Internship Experience</SectionTitle>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSectionWrapper key={index} delay={`duration-700 delay-${index * 150}`}>
            <Card className="shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-start gap-4">
                <Image 
                  src={exp.logoUrl} 
                  alt={`${exp.company} logo`} 
                  width={48} 
                  height={48} 
                  className="rounded-md mt-1" 
                  data-ai-hint={exp.logoHint} 
                />
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl text-primary">{exp.role}</CardTitle>
                  <CardDescription className="text-base text-secondary font-medium">{exp.company} - {exp.location}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {exp.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/80 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSectionWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}
