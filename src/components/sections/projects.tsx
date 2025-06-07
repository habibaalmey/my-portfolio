
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid, CalendarDays } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';

const projects = [
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'urban infrastructure monitoring',
    dates: 'November 2024 – February 2025',
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web portal interface',
    dates: 'February 2025 – May 2025',
  },
  {
    title: 'Upcoming Project Alpha',
    description: "Details about this exciting new project will be revealed soon. Stay tuned for innovative solutions and cutting-edge technology.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'technology concept',
    dates: 'Coming Soon',
  },
  {
    title: 'Future Project Beta',
    description: "Currently in the planning phase, this project aims to address key challenges in its domain. More information to follow as development progresses.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'planning blueprint',
    dates: 'In Progress',
  },
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSectionWrapper 
            key={project.title} 
            delay={`duration-700 delay-${index * 150}`}
          >
            <Card className="flex flex-col h-full overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-3">
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {project.dates}
                </div>
                <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              {/* CardFooter can be added here if links (Live Demo, GitHub) become available */}
            </Card>
          </AnimatedSectionWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}
