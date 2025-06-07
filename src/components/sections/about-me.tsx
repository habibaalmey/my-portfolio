
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { tailorAboutMe, type TailorAboutMeInput } from '@/ai/flows/tailor-about-me';
import { Loader2, Wand2, UserCircle, Mail, Phone, Download } from 'lucide-react';
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const defaultAboutMe = "I am a fourth-year Computer Science student with a passion for the intersection of business and information technology. I am highly organized and detail-oriented, consistently delivering quality results in both academic research and industry projects. With particular expertise in data analysis and machine learning, my experience enables me to solve problems with technical precision while understanding business needs.";

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
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimatedSectionWrapper>
          <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
            <div className="flex justify-center mb-8">
              <Image 
                src="https://placehold.co/200x200.png" // Placeholder for Habiba's photo
                alt="Habiba Almetnawy"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
                data-ai-hint="professional portrait"
              />
            </div>
            <p>{defaultAboutMe}</p>
            
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold text-primary font-headline">Contact Information</h3>
              <div className="flex items-center space-x-3 text-foreground/80">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:habibaalmetnawy18@gmail.com" className="hover:text-primary transition-colors">habibaalmetnawy18@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-foreground/80">
                <Phone className="h-5 w-5 text-accent" />
                <span>+97105-0706-0274</span>
              </div>
            </div>
            <div className="pt-6">
              <Button asChild className="w-full md:w-auto">
                <Link href="/Habiba_Almetnawy_CV.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download My CV
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper delay="duration-700 delay-200">
          <Card className="shadow-xl transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Wand2 className="h-6 w-6 text-accent" />
                Tailor Your Intro
              </CardTitle>
              <CardDescription>
                Let AI help you customize your 'About Me' for a specific role. (Uses the summary above as a base)
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
                <Label htmlFor="currentAboutMe" className="font-medium">Your Current 'About Me' (Edit if needed)</Label>
                <Textarea
                  id="currentAboutMe"
                  value={currentAboutMe}
                  onChange={(e) => setCurrentAboutMe(e.target.value)}
                  rows={7}
                  className="mt-1"
                />
              </div>
              {tailoredAboutMe && (
                <div>
                  <Label htmlFor="tailoredAboutMe" className="font-medium">AI Tailored 'About Me'</Label>
                  <Textarea
                    id="tailoredAboutMe"
                    value={tailoredAboutMe}
                    readOnly
                    rows={7}
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
