
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
      'Engineered an adaptive AI tutoring system using LangChain and RAG for dynamic content retrieval.',
      'Led a team in developing test protocols with AI-simulated student profiles, reducing system hallucinations by 81%.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'United Arab Emirates University',
    location: 'Al Ain, UAE',
    duration: 'June 2024 – August 2024',
    description: [
      'Conducted a comparative study on educational tool effectiveness, improving learning engagement for 32 students.',
      'Transformed raw assessment data into actionable insights, boosting student performance metrics by 15%.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Samsung',
    location: 'Dubai, UAE',
    duration: 'February 2024 – April 2024',
    description: [
      'Completed intensive AI training focused on deep learning and computer vision.',
      'Built and deployed a CNN with 99.61% accuracy for plant disease classification, project selected in Top 5.',
    ],
  },
  {
    role: 'AI Risk Landscape Market Research Extern',
    company: 'National Research Group',
    location: 'Remote',
    duration: 'July 2024 – July 2024',
    description: [
      'Conducted in-depth research on AI risks, aligning findings with industry standards.',
      'Developed a case study highlighting potential business impacts of specific AI risks.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
      
      <div className="relative pl-8 md:pl-10"> {/* Increased left padding for larger nodes */}
        {/* Digital Path Line */}
        <div className="timeline-digital-path"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-10 md:mb-12 last:mb-0">
            {/* Digital Node */}
            <div className="timeline-node"></div>

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
