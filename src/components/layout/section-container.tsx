import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}> {/* Increased vertical padding */}
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
