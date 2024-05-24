export const experiencesArray = [
  {
    job: 'Full-Stack Developer',
    company: 'Global Transportes',
    startAt: '2023-12-01',
    endAt: '-',
    description: [
      "I implemented new features and fixed bugs in the company's website.",
      'Used technologies: NextJS, ReactJS, Tailwind CSS, NodeJS, JavaScript, Express, MongoDB, GitHub',
    ],
    current: true,
  },

].sort((a, b) => new Date(b.startAt) - new Date(a.startAt));
