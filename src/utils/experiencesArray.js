export const experiencesArray = [
  {
    job: 'Full-Stack Developer',
    company: 'Global Transportes',
    startAt: '2023-12-01',
    endAt: '2024-09-01',
    description: [
      "I implemented new features and fixed bugs in the company's website.",
      'Used technologies: NextJS, ReactJS, Tailwind CSS, NodeJS, JavaScript, Express, MongoDB, MySQL, GitHub.',
    ],
    current: false,
  },
  {
    job: 'Developer',
    company: 'SmartFlow Sistemas',
    startAt: '2024-09-02',
    endAt: '-',
    description: [
      'I am currently working on the development of monitoring systems for the company.',
      'Used technologies: Python, EMQX, TDengine, GitLab.',
    ],
    current: true,
  },
].sort((a, b) => new Date(b.startAt) - new Date(a.startAt));
