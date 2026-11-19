// Based on the LinkedIn profile. Dates are 'YYYY-MM'; end: null means current.
// `type` is only set when it changes how a role reads (internships).
export const experience = [
  {
    company: 'Eduvora',
    location: { pt: 'Remoto', en: 'Remote' },
    start: '2025-09',
    end: null,
    roles: [{ title: 'Tech Lead', start: '2025-09', end: null }],
    highlights: {
      pt: [
        'Lidero a arquitetura de nuvem e a escalabilidade da plataforma.',
        'Defino padrões de código e boas práticas de engenharia com o time.',
        'Integro segurança aos pipelines de CI/CD, com mais governança e previsibilidade nas entregas.',
      ],
      en: [
        "Lead the platform's cloud architecture and scalability.",
        'Set code standards and engineering practices with the team.',
        'Build security into the CI/CD pipelines for better governance and more predictable releases.',
      ],
    },
    stack: ['AWS', 'Amazon EC2', 'Kubernetes', 'Lens', 'CI/CD'],
  },
  {
    company: 'Smartflow Sistemas',
    location: { pt: 'Toledo, PR (presencial)', en: 'Toledo, Brazil (on-site)' },
    start: '2024-09',
    end: null,
    roles: [
      { title: 'DevOps Engineer', start: '2026-06', end: null },
      { title: 'Full-stack Developer', start: '2025-03', end: '2026-06' },
      {
        title: 'Full-stack Developer',
        type: { pt: 'Estágio', en: 'Internship' },
        start: '2024-09',
        end: '2025-03',
      },
    ],
    highlights: {
      pt: [
        'Cuido de deploys em produção, versionamento de releases e automação de builds, com Kubernetes na AWS (Amazon EKS).',
        'Apliquei práticas de DevOps e GitOps no fluxo de deploy.',
        'Desenvolvi um site integrado ao Grafana que busca e exibe gráficos.',
        'Criei um pipeline no Azure DevOps que automatiza o build de projetos Unity WebGL.',
      ],
      en: [
        'Handle production deployments, release versioning and build automation, running Kubernetes on AWS (Amazon EKS).',
        'Applied DevOps and GitOps practices to the deployment flow.',
        'Built a web app that pulls and displays charts from Grafana.',
        'Created an Azure DevOps pipeline that automates builds for Unity WebGL projects.',
      ],
    },
    stack: [
      'Amazon EKS',
      'Kubernetes',
      'Docker',
      'GitLab CI/CD',
      'Azure DevOps',
      'GitOps',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Python',
      'Django',
      'EMQX',
      'TDengine',
    ],
  },
  {
    company: 'Global Transportes',
    location: { pt: 'Toledo, PR (presencial)', en: 'Toledo, Brazil (on-site)' },
    start: '2023-12',
    end: '2024-09',
    roles: [
      {
        title: 'Full-stack Developer',
        type: { pt: 'Estágio', en: 'Internship' },
        start: '2023-12',
        end: '2024-09',
      },
    ],
    highlights: {
      pt: ['Implementei novas funcionalidades e corrigi bugs no site da empresa.'],
      en: ['Shipped new features and fixed bugs on the company website.'],
    },
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'JavaScript', 'MongoDB', 'MySQL'],
  },
];
