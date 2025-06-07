
import Link from 'next/link';
// We are commenting out other imports to keep it simple for now
// import { Button, buttonVariants } from '@/components/ui/button';
// import { Download, Aperture as ApertureIcon } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const navItems = [
//   { name: 'About', href: '#about' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Experience', href: '#experience' },
// ];

export function Header() {
  return (
    <header> {/* Using a basic header tag */}
      <div style={{ padding: '20px', backgroundColor: '#eee' }}>
        <p>Simplified Header Content</p>
        <Link href="/">Home Link</Link>
      </div>
    </header>
  );
}
