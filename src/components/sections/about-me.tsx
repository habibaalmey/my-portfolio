"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { tailorAboutMe, type TailorAboutMeInput } from '@/ai/flows/tailor-about-me';
import { Loader2, Wand2, UserCircle } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';


const defaultAboutMe = "I'm a passionate and results-oriented professional with a strong background in [Your Field/Industry]. I thrive on tackling complex challenges and delivering innovative solutions. My experience includes [mention 1-2 key skills or experiences]. I'm always eager to learn and grow, and I'm excited about opportunities where I can contribute my skills to make a meaningful impact.";

export function AboutMeSection() {
  const [targetJob, setTargetJob] = useState('');
  const [currentAboutMe, setCurrentAboutMe] = useState(defaultAboutMe);
  const [tailoredAboutMe, setTailoredAboutMe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTailorIntro = async () => {
    if (!targetJob.trim()) {
      toast({
        title: "Target Job Required",
        description: "Please enter a target job or position.",
        variant: "destructive",
      });
      return;
    }
    if (!currentAboutMe.trim()) {
      toast({
        title: "About Me Required",
        description: "Please enter your current 'About Me' text.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTailoredAboutMe('');
    try {
      const input: TailorAboutMeInput = { aboutMe: currentAboutMe, targetJob };
      const result = await tailorAboutMe(input);
      setTailoredAboutMe(result.tailoredAboutMe);
      toast({
        title: "Intro Tailored!",
        description: "Your 'About Me' section has been successfully tailored.",
      });
    } catch (error) {
      console.error("Error tailoring intro:", error);
      toast({
        title: "Error",
        description: "Failed to tailor your intro. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer id="about">
      <SectionTitle icon={UserCircle}>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSectionWrapper>
          <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
            <p>
              Hello! I'm a dedicated and creative individual with a knack for problem-solving and a drive for continuous improvement. 
              My journey in the world of technology has been fueled by a desire to build meaningful and impactful digital experiences.
            </p>
            <p>
              Whether it's developing sleek web applications, crafting intuitive user interfaces, or diving into complex data structures, 
              I approach each project with enthusiasm and a commitment to excellence. I believe in the power of collaboration and lifelong learning.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or lost in a good book.
            </p>
          </div>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper delay="duration-700 delay-200">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Wand2 className="h-6 w-6 text-accent" />
                Tailor Your Intro
              </CardTitle>
              <CardDescription>
                Let AI help you customize your 'About Me' for a specific role.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="targetJob" className="font-medium">Target Job or Position</Label>
                <Input
                  id="targetJob"
                  value={targetJob}
                  onChange={(e) => setTargetJob(e.target.value)}
                  placeholder="e.g., Senior Software Engineer"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="currentAboutMe" className="font-medium">Your Current 'About Me'</Label>
                <Textarea
                  id="currentAboutMe"
                  value={currentAboutMe}
                  onChange={(e) => setCurrentAboutMe(e.target.value)}
                  rows={5}
                  className="mt-1"
                />
              </div>
              {tailoredAboutMe && (
                <div>
                  <Label htmlFor="tailoredAboutMe" className="font-medium">Tailored 'About Me'</Label>
                  <Textarea
                    id="tailoredAboutMe"
                    value={tailoredAboutMe}
                    readOnly
                    rows={5}
                    className="mt-1 bg-muted/50"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleTailorIntro} disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Tailoring...' : 'Tailor My Intro'}
              </Button>
            </CardFooter>
          </Card>
        </AnimatedSectionWrapper>
      </div>
    </SectionContainer>
  );
}
