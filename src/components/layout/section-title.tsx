import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  icon?: LucideIcon;
}

export function SectionTitle({ className, children, icon: Icon }: SectionTitleProps) {
  const isProjectExperienceTitle = children === 'Project Experience';
  return (
    <div className={cn(
      "mb-16 md:mb-20 flex flex-col items-center", // Increased bottom margin
      isProjectExperienceTitle ? "md:items-start" : "items-center" // Align project experience title to start on md screens
    )}>
      <h2 className={cn(
        'font-headline font-bold text-primary flex items-center gap-3',
        isProjectExperienceTitle 
          ? 'text-5xl md:text-7xl text-left' // Larger size for Project Experience
          : 'text-3xl md:text-4xl', 
        className
      )}>
        {Icon && !isProjectExperienceTitle && <Icon className="h-8 w-8 text-accent" />}
        {children}
      </h2>
      {!isProjectExperienceTitle && (
         <div className="mt-4 h-1.5 w-40 rounded-full animate-gradient-ribbon"></div>
      )}
      {isProjectExperienceTitle && (
         <div className="mt-6 h-2 w-full max-w-md rounded-full animate-gradient-ribbon md:self-start"></div> // Wider ribbon for project title
      )}
    </div>
  );
}
