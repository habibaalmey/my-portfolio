
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  icon?: LucideIcon; // Icon prop remains for potential future use but won't be displayed with new style
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  const isProjectExperienceTitle = children === 'Project Experience'; // Still used for potential different alignments

  return (
    <div className={cn(
      "mb-16 md:mb-20 flex flex-col", 
      isProjectExperienceTitle ? "items-center md:items-start" : "items-center" 
    )}>
      <div className="bg-muted/30 p-2 md:p-3 inline-block rounded-sm shadow-md">
        <h2 className={cn(
          'font-pixel text-xl md:text-2xl text-primary uppercase tracking-wider',
          isProjectExperienceTitle ? 'md:text-3xl' : '', // Slightly larger for Project Experience
          className
        )}>
          {children}
        </h2>
      </div>
      {/* Removed the animated gradient ribbon */}
    </div>
  );
}

    