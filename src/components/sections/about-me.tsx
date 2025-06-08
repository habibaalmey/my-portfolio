
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const aboutMeText = "Hii! I'm a fourth-year Computer Science student at UAEU passionate about where business meets technology. I love the ocean and swimming, but I'm equally passionate about diving into data to uncover insights that drive real business decisions. I'm detail-oriented and consistently deliver quality results across academic research and industry projects. With expertise in data analysis and machine learning, I bring technical precision to solving complex problems while always keeping business impact in mind.";

const skills = [
  'Python', 'Java', 'SQL', 'HTML/CSS', 'Pandas',
  'Scikit-learn', 'TensorFlow', 'Power BI', 'LangChain', 'Git',
  'Figma', 'Feature Engineering', 'Business Analytics', 'Neural Networks', 'Project Management',
  'Python', 'Java', 'SQL', 'HTML/CSS', 'Pandas',
  'Scikit-learn', 'TensorFlow', 'Power BI', 'LangChain', 'Git',
  'Figma', 'Feature Engineering', 'Business Analytics', 'Neural Networks', 'Project Management',
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge
    className="mx-2 my-1 text-sm px-4 py-1.5 shadow-sm whitespace-nowrap
               bg-card text-card-foreground border border-primary-foreground/20
               hover:bg-card/90"
  >
    {skill}
  </Badge>
);

export function AboutMeSection() {
  return (
    <section id="about">
      {/* Part 1: Summary, Contact, CV - Darker Background */}
      <div className="bg-background relative">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-starfield opacity-50"></div>
        <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 relative z-10">
          <SectionTitle>About Me</SectionTitle>
          <AnimatedSectionWrapper>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
              <div className="md:w-1/3 flex-shrink-0 flex flex-col items-center md:items-start">
                {/* USER_EDITABLE_IMAGE: About Me Picture */}
                <div className="digital-glow-frame mb-6 md:mb-0 md:ml-0 md:mr-auto rounded-full w-[300px] h-[300px] overflow-hidden">
                  <div className="image-screen-glow rounded-full overflow-hidden w-full h-full">
                    <Image
                      src="https://placehold.co/300x300.png"
                      alt="Habiba Almetnawy"
                      width={300}
                      height={300}
                      className="rounded-full object-cover w-full h-full transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
                      priority
                      data-ai-hint="professional portrait"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                  {aboutMeText}
                </p>
                <div className="mb-10 flex flex-col items-center md:items-start space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-6 text-foreground/80">
                    <Link href="mailto:habibaalmetnawy18@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                      <Mail className="h-6 w-6 text-accent" />
                    </Link>
                    <Link href="https://github.com/habibaalmey" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                      <Github className="h-6 w-6 text-accent" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/habibaalmetnawy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </Link>
                  </div>
                  <Button asChild size="lg" className="btn-treasure-box shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-95">
                    <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download My CV
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSectionWrapper>
        </div>
      </div>

      {/* Part 2: Full-width skills ribbon - Gradient Background */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-secondary via-primary/40 to-secondary py-4 md:py-6">
        <div className="relative flex group group-hover:pause-animation">
          <div className="flex animate-skills-marquee whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s1-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s2-${index}`} skill={skill} />)}
          </div>
          <div className="absolute top-0 flex animate-skills-marquee2 whitespace-nowrap">
            {skills.map((skill, index) => <SkillBadge key={`s3-${index}`} skill={skill} />)}
            {skills.map((skill, index) => <SkillBadge key={`s4-${index}`} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
