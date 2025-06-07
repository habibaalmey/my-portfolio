
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Camera, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Honors', href: '#honors' },
  { name: 'Languages', href: '#languages' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300",
      isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg text-primary">Habiba Almetnawy</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-5">
                <Link href="/" className="flex items-center space-x-2 mb-6" onClick={closeMobileMenu}>
                  <Camera className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg text-primary">Habiba Almetnawy</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-foreground/80 transition-colors hover:text-primary py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="sm" className="w-full mt-4">
                  <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download onClick={closeMobileMenu}>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
