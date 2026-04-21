export interface VolunteerRole {
  org: string;
  role: string;
  description?: string;
  url?: string;
  logo?: string;
}

export const volunteering: VolunteerRole[] = [
  {
    org: 'Big Brothers Big Sisters of America',
    role: 'Big Brother (Mentor)',
    description: 'Mentoring a young person in the Bay Area through the Big Brothers Big Sisters program.',
    url: 'https://www.bbbs.org',
    logo: '/logos/bbbs.jpg',
  },
  {
    org: 'UPchieve',
    role: 'Co-Chair, Associate Board',
    description: "Supporting UPchieve's mission to provide free, 24/7 academic support to underserved high school students.",
    url: 'https://upchieve.org',
    logo: '/logos/upchieve.jpg',
  },
];
