"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, LayoutGrid } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product management, user authentication, and payment gateway integration.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web application',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Firebase'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application designed to streamline team workflows with features like boards, lists, and cards.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    tags: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, providing insights through charts, graphs, and customizable reports.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data visualization',
    tags: ['Python (Flask)', 'D3.js', 'PostgreSQL', 'Docker'],
    liveLink: '#',
    githubLink: '#',
  },
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-muted/50">
      <SectionTitle icon={LayoutGrid}>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedSectionWrapper key={project.title} delay={`duration-700 delay-${index * 150}`}>
            <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/20">{tag}</Badge>
                  ))}
                </div>
                <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex space-x-3">
                {project.liveLink && (
                  <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground hover:bg-muted">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
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
