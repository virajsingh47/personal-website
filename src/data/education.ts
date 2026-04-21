export interface Education {
  school: string;
  degree: string;
  description?: string;
  url?: string;
}

export const education: Education[] = [
  {
    school: 'Stanford Graduate School of Business',
    degree: 'Master of Business Administration (MBA)',
    url: 'https://gsb.stanford.edu',
  },
  {
    school: 'Pomona College',
    degree: "Bachelor's Degree, Environmental Analysis & Economics",
    url: 'https://pomona.edu',
  },
];
