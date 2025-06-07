"use client";

import type { PropsWithChildren } from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionWrapperProps extends PropsWithChildren {
  className?: string;
  initialClassName?: string; // e.g., 'opacity-0 translate-y-5'
  finalClassName?: string; // e.g., 'opacity-100 translate-y-0'
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // e.g. 'duration-500 delay-300'
}

export function AnimatedSectionWrapper({
  children,
  className,
  initialClassName = 'opacity-0 translate-y-5',
  finalClassName = 'opacity-100 translate-y-0',
  threshold = 0.1,
  triggerOnce = true,
  delay = 'duration-700'
}: AnimatedSectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
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
      className={cn(
        'transition-all ease-out',
        delay,
        isVisible ? finalClassName : initialClassName,
        className
      )}
    >
      {children}
    </div>
  );
}
