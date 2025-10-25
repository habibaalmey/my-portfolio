'use server';
/**
 * @fileOverview This file defines a Genkit flow for tailoring the 'About Me' section of a portfolio website.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TailorAboutMeInputSchema = z.object({
  aboutMe: z.string().describe('The current About Me section.'),
  targetJob: z.string().describe('The target job or position.'),
});

const TailorAboutMeOutputSchema = z.object({
  tailoredAboutMe: z.string().describe('The tailored About Me section.'),
});

export async function tailorAboutMe(input) {
  return tailorAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorAboutMePrompt',
  input: { schema: TailorAboutMeInputSchema },
  output: { schema: TailorAboutMeOutputSchema },
  prompt: `You are an expert at tailoring About Me sections for job applications.

  Please tailor the following About Me section to the specified target job or position. Keep the tailored about me section concise and professional.

  About Me: {{{aboutMe}}}
  Target Job or Position: {{{targetJob}}}

  Tailored About Me Section:`,
});

const tailorAboutMeFlow = ai.defineFlow(
  {
    name: 'tailorAboutMeFlow',
    inputSchema: TailorAboutMeInputSchema,
    outputSchema: TailorAboutMeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output;
  }
);
