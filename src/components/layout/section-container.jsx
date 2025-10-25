import { cn } from '@/lib/utils';

export function SectionContainer({ id, className, children }) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="container mx-auto max-w-5xl px-4 md:px-6">{children}</div>
    </section>
  );
}
