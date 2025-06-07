
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

const projectsData = [ // Renamed to avoid conflict in map key if used directly
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    image: 'https://placehold.co/600x240.png', 
    imageHint: 'urban AI monitoring',
    dates: 'November 2024 – February 2025',
    tags: ['AI', 'Python', 'Computer Vision', 'Google Maps API'],
    link: '#',
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    image: 'https://placehold.co/600x240.png',
    imageHint: 'web portal interface',
    dates: 'February 2025 – May 2025',
    tags: ['Web Development', 'SQL', 'JavaScript', 'HTML/CSS'],
    link: '#',
  },
  {
    title: 'Upcoming Project Alpha',
    description: "Details about this exciting new project will be revealed soon. Stay tuned for innovative solutions and cutting-edge technology.",
    image: 'https://placehold.co/600x240.png',
    imageHint: 'technology concept',
    dates: 'Coming Soon',
    tags: ['Innovation', 'R&D'],
    link: '#',
  },
  {
    title: 'Future Project Beta',
    description: "Currently in the planning phase, this project aims to address key challenges in its domain. More information to follow as development progresses.",
    image: 'https://placehold.co/600x240.png',
    imageHint: 'planning blueprint',
    dates: 'In Progress',
    tags: ['Strategy', 'Development'],
    link: '#',
  },
  {
    title: 'Innovative Tech Solution Gamma',
    description: "A groundbreaking solution leveraging advanced AI to solve complex problems in the industry. Full details to be unveiled upon launch.",
    image: 'https://placehold.co/600x240.png',
    imageHint: 'AI solution abstract',
    dates: 'Q4 2025',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    link: '#',
  }
];

// Duplicate projects for seamless marquee
const marqueeProjects = [...projectsData, ...projectsData];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50 px-8 md:px-10">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>

      <AnimatedSectionWrapper>
        <div className="relative flex overflow-hidden group group-hover:pause-animation py-4 -mx-4"> {/* Added py-4 and negative margin for spacing */}
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeProjects.map((project, index) => (
              <div key={`p1-${index}`} className="mx-4"> {/* Added margin between cards */}
                <Card className="project-card-minecraft w-96 flex-shrink-0"> {/* Fixed width and prevent shrinking */}
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600} // Placeholder width
                      height={240} // Consistent height
                      className="object-cover w-full h-60" // Consistent height class
                      data-ai-hint={project.imageHint}
                      priority={index < 4} // Prioritize first few images
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4 space-y-3">
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
                    <div className="p-4 pt-0">
                      <Button asChild variant="default" size="sm" className="group/button mt-2">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4"> {/* Ensure consistent py for spacing */}
             {marqueeProjects.map((project, index) => (
              <div key={`p2-${index}`} className="mx-4">
                <Card className="project-card-minecraft w-96 flex-shrink-0">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={240}
                      className="object-cover w-full h-60"
                      data-ai-hint={project.imageHint}
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4 space-y-3">
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
                    <div className="p-4 pt-0">
                       <Button asChild variant="default" size="sm" className="group/button mt-2">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSectionWrapper>
    </SectionContainer>
  );
}
