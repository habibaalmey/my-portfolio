"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, Award, Zap } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    description: [
      'Led development of key features for a flagship SaaS product, improving performance by 20%.',
      'Mentored junior engineers and conducted code reviews to maintain high code quality.',
      'Collaborated with cross-functional teams to define project requirements and deliverables.',
    ],
    logoUrl: 'https://placehold.co/40x40.png', // Placeholder, replace with actual logo if available
    logoHint: 'company logo'
  },
  {
    role: 'Software Developer',
    company: 'Innovatech Ltd.',
    duration: 'Jun 2018 - Dec 2020',
    description: [
      'Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL.',
      'Contributed to the design and implementation of RESTful APIs.',
      'Participated in agile development processes, including daily stand-ups and sprint planning.',
    ],
    logoUrl: 'https://placehold.co/40x40.png',
    logoHint: 'tech company'
  },
];

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'Docker', 'AWS', 'Agile Methodologies', 'Problem Solving', 'Team Leadership'];

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle icon={Briefcase}>Experience & Skills</SectionTitle>
      
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSectionWrapper key={exp.company} delay={`duration-700 delay-${index * 150}`}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  {/* <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={40} height={40} className="rounded-sm mb-2" data-ai-hint={exp.logoHint} /> */}
                  <CardTitle className="font-headline text-xl text-primary">{exp.role}</CardTitle>
                  <CardDescription className="text-base text-secondary font-medium">{exp.company}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {exp.duration}
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

        <AnimatedSectionWrapper delay="duration-700 delay-300">
          <Card className="shadow-lg sticky top-24"> {/* Sticky for skills section on larger screens */}
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Core Skills
              </CardTitle>
              <CardDescription>My technical expertise and strengths.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="outline" className="px-3 py-1 text-sm bg-primary/5 text-primary border-primary/20 hover:bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSectionWrapper>
      </div>
    </SectionContainer>
  );
}
