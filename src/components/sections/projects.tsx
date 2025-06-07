
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid, CalendarDays, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    image: 'https://placehold.co/800x576.png', // Adjusted for h-72
    imageHint: 'urban AI monitoring',
    dates: 'November 2024 – February 2025',
    tags: ['AI', 'Python', 'Computer Vision', 'Google Maps API'],
    link: '#', 
    size: 'large' as const,
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    image: 'https://placehold.co/600x416.png', // Adjusted for h-52
    imageHint: 'web portal interface',
    dates: 'February 2025 – May 2025',
    tags: ['Web Development', 'SQL', 'JavaScript', 'HTML/CSS'],
    link: '#',
    size: 'normal' as const,
  },
  {
    title: 'Upcoming Project Alpha',
    description: "Details about this exciting new project will be revealed soon. Stay tuned for innovative solutions and cutting-edge technology.",
    image: 'https://placehold.co/600x416.png', // Adjusted for h-52
    imageHint: 'technology concept',
    dates: 'Coming Soon',
    tags: ['Innovation', 'R&D'],
    link: '#',
    size: 'normal' as const,
  },
  {
    title: 'Future Project Beta',
    description: "Currently in the planning phase, this project aims to address key challenges in its domain. More information to follow as development progresses.",
    image: 'https://placehold.co/600x416.png', // Adjusted for h-52
    imageHint: 'planning blueprint',
    dates: 'In Progress',
    tags: ['Strategy', 'Development'],
    link: '#',
    size: 'normal' as const, 
  },
  {
    title: 'Innovative Tech Solution Gamma',
    description: "A groundbreaking solution leveraging advanced AI to solve complex problems in the industry. Full details to be unveiled upon launch.",
    image: 'https://placehold.co/800x576.png', // Adjusted for h-72
    imageHint: 'AI solution abstract',
    dates: 'Q4 2025',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    link: '#',
    size: 'large' as const,
  }
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50 px-8 md:px-10">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          let cardClasses = '';
          if (project.size === 'large') {
            cardClasses = 'md:col-span-2';
          } else {
             // Normal items take one column on md screens
          }

          const imageHeightClass = project.size === 'large' ? 'h-72' : 'h-52'; 
          const imageNextHeight = project.size === 'large' ? 288 : 208;
          const imageNextWidth = project.size === 'large' ? 800 : 600;


          return (
            <AnimatedSectionWrapper 
              key={project.title} 
              delay={`duration-700 delay-${index * 100}`}
              className={cn(cardClasses, "group")}
            >
              <Card className={cn(
                "flex flex-col h-full overflow-hidden transform transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:rotate-[-1deg]",
                "project-card-minecraft"
              )}>
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={imageNextWidth}
                    height={imageNextHeight}
                    className={cn("object-cover w-full", imageHeightClass)}
                    data-ai-hint={project.imageHint}
                    priority={index < 2} 
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
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.map(tag => (
                       <span key={tag} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                {project.link && project.link !== '#' && (
                  <div className="p-6 pt-0">
                    <Button asChild variant="default" size="sm" className="group/button mt-2">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                )}
              </Card>
            </AnimatedSectionWrapper>
          );
        })}
      </div>
    </SectionContainer>
  );
}
