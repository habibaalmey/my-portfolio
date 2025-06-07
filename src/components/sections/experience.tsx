
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';

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
  },
];

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle icon={Briefcase}>Internship Experience</SectionTitle>
      
      <div className="relative pl-6 md:pl-8"> {/* Adjusted padding for the timeline line and dots */}
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 rounded-full" style={{ transform: 'translateX(calc(0.75rem - 2px))' }}></div> {/* Centering the 1px line relative to a 0.75rem dot */}

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-10 md:mb-12 last:mb-0">
            {/* Dot on the timeline */}
            <div className="absolute -left-[calc(0.75rem-1px)] top-[0.3rem] h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-background"></div>

            <AnimatedSectionWrapper delay={`duration-700 delay-${index * 150}`}>
              <Card className="ml-6 md:ml-8 shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
                <CardHeader>
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
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
