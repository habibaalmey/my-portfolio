
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Honors & Awards', href: '#honors' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const fullName = "Habiba Almetnawy";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Typing animation for the name
    setDisplayName(''); // Reset on mount/change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName(prev => prev + fullName.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        // Optional: Blinking caret after typing (handled by CSS)
      }
    }, 100); // Adjust typing speed here
    return () => clearInterval(typingInterval);
  }, [fullName]);


  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300",
      isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-background" // Ensure background is always solid for new theme
    )}>
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
          <div className="font-code text-2xl md:text-3xl text-primary overflow-hidden whitespace-nowrap">
            <span className="typewriter-text">{fullName}</span> {/* Static full name for layout, actual typing handled by CSS on this element */}
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md" 
              onClick={isMobileMenuOpen ? closeMobileMenu : undefined}
            >
              <span className="relative group px-3 py-2 text-sm font-medium text-foreground/80 transition-colors block rounded-md"> 
                <span className="relative z-10 transition-colors group-hover:text-primary-foreground duration-300 ease-in-out">{item.name}</span>
                <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left z-0 rounded-md"></span>
              </span>
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4">
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
              <div className="flex flex-col space-y-2">
                <Link href="/" className="flex items-center space-x-2 mb-6" onClick={closeMobileMenu}>
                   <div className="font-code text-2xl text-primary overflow-hidden whitespace-nowrap">
                     <span className="typewriter-text">{fullName}</span>
                  </div>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md" 
                    onClick={closeMobileMenu}
                  >
                     <span className="relative group block px-3 py-3 text-base font-medium text-foreground/80 transition-colors rounded-md"> 
                      <span className="relative z-10 transition-colors group-hover:text-primary-foreground duration-300 ease-in-out">{item.name}</span>
                      <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left z-0 rounded-md"></span>
                    </span>
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

    