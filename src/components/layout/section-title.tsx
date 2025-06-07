import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  icon?: LucideIcon;
}

export function SectionTitle({ className, children, icon: Icon }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col items-center">
      <h2 className={cn(
        'text-3xl md:text-4xl font-headline font-bold text-primary flex items-center gap-3',
        className
      )}>
        {Icon && <Icon className="h-8 w-8 text-accent" />}
        {children}
      </h2>
      <div className="mt-4 h-1.5 w-40 rounded-full animate-gradient-ribbon"></div>
    </div>
  );
}
