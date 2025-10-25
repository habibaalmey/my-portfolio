
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, LayoutGrid } from '@/components/icons';

const projectsData = [
  {
    title: 'Guardians of Sustainability | Infrastructure Monitoring Platform',
    description: 'Developed an AI-powered urban infrastructure monitoring platform using Python, which reduced issue detection time by 40% and improved reporting accuracy by 30% through image recognition and Google Maps integration. Designed to support government and community efforts by automatically identifying and reporting environmental issues such as fallen trees and damaged infrastructure.',
    // USER_EDITABLE_PROJECT_IMAGE: Guardians of Sustainability (Image removed from display)
    tags: ['AI', 'Python', 'Computer Vision', 'Google Maps API'],
    githubLink: 'https://github.com/habibaalmey/Guardians-of-Sustainability',
    demoLink: 'https://guardians-of-sustainability.web.app/',
  },
  {
    title: 'UAEU Internship Portal | University Internship Management System',
    description: "Created a comprehensive internship portal for UAEU's College of IT to handle the application, review, and tracking process. Manipulated SQL databases to manage user data and internship records, and built a dynamic interface using HTML, CSS, and JavaScript. The system features student workflows, admin dashboards, and company-specific access.",
    // USER_EDITABLE_PROJECT_IMAGE: UAEU Internship Portal (Image removed from display)
    tags: ['Web Development', 'SQL', 'JavaScript', 'HTML/CSS'],
    githubLink: 'https://github.com/habibaalmey/UAEU-Internship-Portal',
    demoLink: null,
  },
  {
    title: 'Neural Network Visualizer | 3D AI Model Animation',
    description: "Built a 3D visualization of a neural network using Blender and Python to demonstrate how handwritten digits (MNIST dataset) are processed and classified. Each pixel was represented as a cube, with animated keyframe transitions showing data flow, weight connections, and prediction intensity. Designed to help peers better understand neural networks through clear and engaging visual representation.",
    // USER_EDITABLE_PROJECT_IMAGE: Neural Network Visualizer (Image removed from display)
    tags: ['AI', 'Python', 'Blender', 'MNIST'],
    githubLink: 'https://github.com/habibaalmey/Neural-Network-Visualizer',
    demoLink: null,
    demoButtonText: 'View Code',
  },
  {
    title: 'Plant Disease Detection | AI-Powered Diagnosis Tool',
    description: "Designed and trained a convolutional neural network using MobileNetV2, achieving 99.61% accuracy in identifying plant diseases. Conducted extensive testing across various species to ensure robustness and reliability in real-world agricultural scenarios. Integrated a chatbot powered by LLaMA 3.1 and Groq API to deliver instant disease insights and treatment recommendations based on model predictions.",
    // USER_EDITABLE_PROJECT_IMAGE: Plant Disease Detection (Image removed from display)
    tags: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'LLaMA 3.1', 'Groq API'],
    githubLink: 'https://github.com/habibaalmey/Plant-Disease-Detection',
    demoLink: null,
  },
  {
    title: 'Upcoming Data Science Project',
    description: 'Exciting new data science project in the works. Stay tuned for updates as development progresses!',
    // USER_EDITABLE_PROJECT_IMAGE: Upcoming Data Science Project (Image removed from display)
    tags: ['Data Science', 'Machine Learning', 'Python'],
    githubLink: null,
    demoLink: null,
  }
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-yellow-starfield px-4 md:px-6">
      <SectionTitle icon={LayoutGrid}>Project Experience</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <AnimatedSectionWrapper
            key={project.title}
            delay={`duration-700 delay-${index * 100}`}
            className="h-full"
          >
            <Card className={cn("project-card-boxy group h-full p-0 overflow-hidden flex flex-col")}>
              {/* Image CardHeader removed */}
              <CardContent className="flex-grow p-5 space-y-3">
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
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
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/50 bg-background px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4" />
                    {project.demoButtonText && project.title.includes('Neural Network Visualizer')
                      ? project.demoButtonText
                      : 'View Code'}
                  </Link>
                )}
                {project.demoLink && !project.title.includes('Neural Network Visualizer') && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    {project.demoButtonText || 'Live Demo'}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </CardFooter>
            </Card>
          </AnimatedSectionWrapper>
        ))}
      </div>
    </SectionContainer>
  );
}
