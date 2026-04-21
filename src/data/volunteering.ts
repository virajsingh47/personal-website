export interface VolunteerRole {
  org: string;
  role: string;
  description?: string;
  url?: string;
  logo?: string;
  period?: string;
}

export const volunteering: VolunteerRole[] = [
  {
    org: 'Big Brothers Big Sisters of America',
    role: 'Big Brother (Mentor)',
    description: 'Mentoring a young person in the Bay Area through the Big Brothers Big Sisters program.',
    url: 'https://www.bbbs.org',
    logo: 'https://logo.clearbit.com/bbbs.org',
    period: 'Sep 2020 – Present',
  },
  {
    org: 'UPchieve',
    role: 'Co-Chair, Associate Board',
    description: 'Supporting UPchieve\'s mission to provide free, 24/7 academic support to underserved high school students.',
    url: 'https://upchieve.org',
    logo: 'https://logo.clearbit.com/upchieve.org',
    period: '2020 – 2025',
  },
];
