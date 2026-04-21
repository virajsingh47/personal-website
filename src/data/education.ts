export interface Education {
  school: string;
  degree: string;
  description?: string;
  logo?: string;
  period?: string;
}

export const education: Education[] = [
  {
    school: 'Stanford Graduate School of Business',
    degree: 'Master of Business Administration (MBA)',
    logo: 'https://logo.clearbit.com/gsb.stanford.edu',
    period: '2024 – 2026',
  },
  {
    school: 'Pomona College',
    degree: "Bachelor's Degree, Environmental Analysis & Economics",
    description: undefined,
    logo: 'https://logo.clearbit.com/pomona.edu',
    period: '2015 – 2019',
  },
];
