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
      'I am currently developing a website that integrates with Grafana to retrieve and display graphics.',
      'I have developed a Azure pipeline that automates the build process for Unity WebGL projects.',
      'Used technologies: Docker, GitLab, VueJS, TailwindCSS, NuxtJS.',
    ],
    current: true,
  },
].sort((a, b) => new Date(b.startAt) - new Date(a.startAt));
