
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages as LanguagesIcon } from 'lucide-react'; // Renamed to avoid conflict
import { SectionContainer } from '@/components/layout/section-container';
import { SectionTitle } from '@/components/layout/section-title';
import { AnimatedSectionWrapper } from '@/components/ui/animated-section-wrapper';

const languageSkillsData = [
  {
    language: 'English',
    proficiency: 'Native or bilingual proficiency',
  },
  {
    language: 'Arabic',
    proficiency: 'Native or bilingual proficiency',
  },
];

export function LanguageSkillsSection() {
  return (
    <SectionContainer id="languages" className="bg-muted/50">
      <SectionTitle icon={LanguagesIcon}>Language Skills</SectionTitle>
      <AnimatedSectionWrapper>
        <Card className="shadow-lg">
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {languageSkillsData.map((skill, index) => (
              <div key={index} className="flex flex-col p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary">{skill.language}</h3>
                <p className="text-sm text-muted-foreground">{skill.proficiency}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </AnimatedSectionWrapper>
    </SectionContainer>
  );
}
