
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { LayoutGrid, CalendarDays, Github, ExternalLink } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    image: 'https://placehold.co/640x360.png',
    imageHint: 'urban AI monitoring',
    dates: 'November 2024 – February 2025',
    tags: ['AI', 'Python', 'Computer Vision', 'Google Maps API'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    image: 'https://placehold.co/640x360.png',
    imageHint: 'web portal interface',
    dates: 'February 2025 – May 2025',
    tags: ['Web Development', 'SQL', 'JavaScript', 'HTML/CSS'],
    githubLink: '#',
    demoLink: null,
  },
  {
    title: 'Upcoming Project Alpha',
    description: "Details about this exciting new project will be revealed soon. Stay tuned for innovative solutions and cutting-edge technology.",
    image: 'https://placehold.co/640x360.png',
    imageHint: 'technology concept future',
    dates: 'Coming Soon',
    tags: ['Innovation', 'R&D'],
    githubLink: null,
    demoLink: null,
  },
  {
    title: 'Future Project Beta',
    description: "Currently in the planning phase, this project aims to address key challenges in its domain. More information to follow as development progresses.",
    image: 'https://placehold.co/640x360.png',
    imageHint: 'planning blueprint strategy',
    dates: 'In Progress',
    tags: ['Strategy', 'Development'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'Innovative Tech Solution Gamma',
    description: "A groundbreaking solution leveraging advanced AI to solve complex problems in the industry. Full details to be unveiled upon launch.",
    image: 'https://placehold.co/640x360.png',
    imageHint: 'AI solution network',
    dates: 'Q4 2025',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description: "The very website you are currently viewing! Built with Next.js, Tailwind CSS, ShadCN UI, and Genkit for AI features. Showcases my skills and projects in a dynamic and interactive way.",
    image: 'https://placehold.co/640x360.png',
    imageHint: 'portfolio website design',
    dates: 'Ongoing',
    tags: ['Next.js', 'React', 'TailwindCSS', 'ShadCN UI', 'Genkit'],
    githubLink: '#', // Assuming there's a GitHub link for the portfolio itself
    demoLink: null, // Explicitly no live demo link for this one in terms of button
  }
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50 px-4 md:px-6">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <AnimatedSectionWrapper
            key={project.title}
            delay={`duration-700 delay-${index * 100}`}
            className="h-full"
          >
            <Card className={cn("project-card-boxy group h-full p-0 overflow-hidden")}>
              <CardHeader className="p-0 relative overflow-hidden project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </CardHeader>
              <CardContent className="flex-grow p-5 space-y-3">
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {project.dates}
                </div>
                <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                     <span key={tag} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-2 flex gap-3 mt-auto">
                <Button asChild variant="outline" size="sm" className="group/button flex-1 btn-treasure-box" disabled={!project.githubLink}>
                  <Link href={project.githubLink || '#'} target="_blank" rel="noopener noreferrer" aria-disabled={!project.githubLink}>
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
                {project.title !== 'Personal Portfolio Website' && (
                  <Button asChild variant="default" size="sm" className="group/button flex-1" disabled={!project.demoLink}>
                    <Link href={project.demoLink || '#'} target="_blank" rel="noopener noreferrer" aria-disabled={!project.demoLink}>
                      Live Demo <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </AnimatedSectionWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}
