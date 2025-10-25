"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Download, Menu } from '@/components/icons';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey Highlights', href: '#highlights' },
  { name: 'Honors & Awards', href: '#honors' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullName = 'Habiba Almetnawy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        isScrolled
          ? 'border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'border-transparent bg-background'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
          <span className="text-3xl md:text-4xl text-primary overflow-hidden whitespace-nowrap font-neon typewriter-text text-neon-primary">
            {fullName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md"
              onClick={isMobileMenuOpen ? closeMobileMenu : undefined}
            >
              <span className="relative group block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors">
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-primary-foreground">
                  {item.name}
                </span>
                <span className="absolute inset-0 origin-left scale-x-0 rounded-md bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
          <Link
            href="/Habiba_Almetnawy_CV.pdf"
            target="_blank"
            download
            className="ml-4 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background text-foreground shadow-sm"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur">
          <div className="flex items-start justify-end p-4">
            <button
              type="button"
              onClick={closeMobileMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background text-foreground shadow-sm"
            >
              <Menu className="h-6 w-6 rotate-90" aria-hidden="true" />
              <span className="sr-only">Close navigation</span>
            </button>
          </div>
          <nav className="mt-2 px-6 pb-10">
            <Link href="/" className="mb-6 block text-2xl font-semibold text-primary" onClick={closeMobileMenu}>
              {fullName}
            </Link>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-md border border-border/40 bg-card px-4 py-3 text-base font-medium text-foreground/90 shadow-sm transition hover:border-primary/60"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/Habiba_Almetnawy_CV.pdf"
              target="_blank"
              download
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:shadow-lg"
              onClick={closeMobileMenu}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
