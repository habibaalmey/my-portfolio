
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/habibaalmetnawy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="mailto:700040241@uaeu.ac.ae" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
