export interface Project {
  name: string;
  description: string;
  url?: string;
  icon?: string; // emoji or path to image
}

export const projects: Project[] = [
  {
    name: 'Haven Wildfire',
    description: 'Built a wildfire risk mitigation product to help homeowners protect their homes from wildfires and stay insured.',
    url: 'https://www.havenwildfire.com/',
    icon: '/logos/Haven Logo_WhiteBackground.png',
  },
  {
    name: 'AI Focus Group',
    description: 'Created an AI focus group to simulate how different customer personas would react to a new product idea.',
    url: 'https://persona-debate.vercel.app/',
    icon: '🧑‍🤝‍🧑',
  },
  {
    name: 'Interview Practice',
    description: 'Built an AI interviewer to practice for job interviews.',
    url: 'https://interview-simulator-alpha.vercel.app/',
    icon: '🎙️',
  },
];
