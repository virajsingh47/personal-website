export interface Education {
  school: string;
  degree: string;
  description?: string;
  url?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    school: 'Stanford Graduate School of Business',
    degree: 'Master of Business Administration',
    url: 'https://gsb.stanford.edu',
    logo: '/logos/stanford-gsb.png',
  },
  {
    school: 'Pomona College',
    degree: "Bachelor's Degree, Environmental Analysis & Economics",
    url: 'https://pomona.edu',
    logo: '/logos/pomona.jpg',
  },
];
