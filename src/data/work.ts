export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  url?: string;
  period?: string;
}

export const work: WorkExperience[] = [
  {
    company: 'Reach Capital',
    role: 'Summer Associate, Investing',
    description: 'EdTech and Future of Work investing as a Summer Associate.',
    url: 'https://reachcapital.com',
    period: 'Jun 2024 – Aug 2024',
  },
  {
    company: 'Avataar',
    role: 'GTM, Strategy & Ops',
    description: 'Avataar offers a 3D genAI and computer vision platform to help brands tell stories about their products.',
    url: 'https://avataar.me',
    period: '2022 – 2024',
  },
  {
    company: 'Bain & Company',
    role: 'Management Consulting',
    description: 'Went deep on utilities & semiconductors.',
    url: 'https://bain.com',
    period: '2019 – 2022',
  },
  {
    company: 'Breakthrough Collaborative',
    role: 'Teaching',
    description: 'Taught underserved 8th graders physics.',
    url: 'https://breakthroughcollaborative.org',
    period: '2019',
  },
  {
    company: 'Enphase Energy',
    role: 'GTM',
    description: 'Go-to-market work at a leading residential solar and energy storage company.',
    url: 'https://enphase.com',
    period: '2016',
  },
];
