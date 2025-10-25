'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedSectionWrapper({
  children,
  className,
  initialClassName = 'opacity-0 translate-y-5',
  finalClassName = 'opacity-100 translate-y-0',
  threshold = 0.1,
  triggerOnce = true,
  delay = 'duration-700',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn('transition-all ease-out', delay, isVisible ? finalClassName : initialClassName, className)}
    >
      {children}
    </div>
  );
}
