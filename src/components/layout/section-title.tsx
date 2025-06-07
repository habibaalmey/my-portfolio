
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  icon?: LucideIcon; 
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  const isProjectExperienceTitle = children === 'Project Experience';

  return (
    <div className={cn(
      "mb-16 md:mb-20 flex flex-col items-center" 
    )}>
      <div className={cn(
        "inline-block rounded-sm shadow-md",
        isProjectExperienceTitle 
          ? "bg-card border-2 border-border/40 p-4 md:p-6 rounded-lg shadow-lg" 
          : "bg-muted/30 p-2 md:p-3"
      )}>
        <h2 className={cn(
          'font-pixel text-xl md:text-2xl text-primary uppercase tracking-wider',
          isProjectExperienceTitle ? 'md:text-3xl' : '',
          className
        )}>
          {children}
        </h2>
      </div>
    </div>
  );
}
