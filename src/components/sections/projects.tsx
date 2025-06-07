
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid, CalendarDays, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link'; // Assuming you might want to link projects
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    image: 'https://placehold.co/800x600.png', // Larger image for featured
    imageHint: 'urban AI monitoring',
    dates: 'November 2024 – February 2025',
    tags: ['AI', 'Python', 'Computer Vision', 'Google Maps API'],
    link: '#' // Placeholder link
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web portal interface',
    dates: 'February 2025 – May 2025',
    tags: ['Web Development', 'SQL', 'JavaScript', 'HTML/CSS'],
    link: '#'
  },
  {
    title: 'Upcoming Project Alpha',
    description: "Details about this exciting new project will be revealed soon. Stay tuned for innovative solutions and cutting-edge technology.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'technology concept',
    dates: 'Coming Soon',
    tags: ['Innovation', 'R&D'],
    link: '#'
  },
  {
    title: 'Future Project Beta',
    description: "Currently in the planning phase, this project aims to address key challenges in its domain. More information to follow as development progresses.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'planning blueprint',
    dates: 'In Progress',
    tags: ['Strategy', 'Development'],
    link: '#'
  },
];

const featuredProject = projects[0];
const otherProjects = projects.slice(1);

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>
      
      {/* Featured Project Section */}
      <AnimatedSectionWrapper className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-xl shadow-2xl overflow-hidden">
          <div className="w-full md:w-1/2_lg:w-3/5_xl:w-1/2">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              width={800}
              height={600}
              className="object-cover rounded-lg w-full h-auto md:max-h-[400px]"
              data-ai-hint={featuredProject.imageHint}
              priority 
            />
          </div>
          <div className="w-full md:w-1/2_lg:w-2/5_xl:w-1/2 space-y-4 md:space-y-6">
            <h3 className="font-headline text-3xl md:text-4xl text-primary font-bold">{featuredProject.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              {featuredProject.dates}
            </div>
            <p className="text-foreground/80 text-base leading-relaxed">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            {featuredProject.link && featuredProject.link !== '#' && (
              <Button asChild variant="default" size="lg" className="mt-4 group">
                <Link href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  View Project <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <>
          <h3 className="font-headline text-2xl md:text-3xl text-primary font-semibold mb-8 md:mb-12 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
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
                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.tags.map(tag => (
                         <span key={tag} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                  {/* Footer for links if needed 
                  {project.link && project.link !== '#' && (
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="outline" size="sm" className="group">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  )}
                  */}
                </Card>
              </AnimatedSectionWrapper>
            ))}
          </div>
        </>
      )}
    </SectionContainer>
  );
}
