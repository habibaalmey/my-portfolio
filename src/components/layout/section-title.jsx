import { cn } from '@/lib/utils';

export function SectionTitle({ className, children, icon: IconComponent }) {
  const titleText = children;
  const isProjectExperienceTitle = titleText === 'Project Experience';
  const isJourneyHighlightsTitle = titleText === 'Journey Highlights';

  let containerClasses = 'inline-block rounded-sm shadow-md bg-muted/30 p-2 md:p-3';
  let titleTextClasses = 'text-primary';
  let titleBaseSizeClasses = 'text-xl md:text-2xl';
  let iconSizeClasses = 'h-6 w-6 md:h-7 md:h-7';

  if (isProjectExperienceTitle) {
    containerClasses = 'bg-card border-2 border-border/40 p-4 md:p-6 rounded-lg shadow-lg';
    titleBaseSizeClasses = 'text-xl md:text-2xl md:text-3xl';
  } else if (isJourneyHighlightsTitle) {
    containerClasses = 'bg-card border-2 border-primary/70 p-3 md:p-4 rounded-lg shadow-xl';
    titleTextClasses = 'text-neon-primary';
  }

  return (
    <div className={cn('mb-16 md:mb-20 flex flex-col items-center')}>
      <div className={cn('inline-block', containerClasses)}>
        <h2
          className={cn(
            'font-pixel uppercase tracking-wider flex items-center justify-center gap-x-3',
            titleBaseSizeClasses,
            titleTextClasses,
            className
          )}
        >
          {IconComponent && <IconComponent className={cn(iconSizeClasses)} />}
          <span>{titleText}</span>
        </h2>
      </div>
    </div>
  );
}
