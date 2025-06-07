import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Download, Aperture as ApertureIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <ApertureIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Aperture</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="/cv.pdf" 
            download="CV-Aperture.pdf"
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              "bg-accent hover:bg-accent/90 text-accent-foreground"
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
          {/* Mobile menu can be added here */}
        </nav>
      </div>
    </header>
  );
}
