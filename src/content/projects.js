import dallafit from '@/assets/projects/dallafit.webp';
import bigode from '@/assets/projects/du-bigode.webp';
import jupudim from '@/assets/projects/jupudim.webp';
import korvosys from '@/assets/projects/korvosys.webp';

// Live websites. Shown in the hero and in the Work section, in this order.
export const featuredProjects = [
  {
    id: 'du-bigode',
    name: "Drinks Du'Bigode",
    url: 'https://bigode-eight.vercel.app/',
    domain: 'bigode-eight.vercel.app',
    image: bigode,
    description: {
      pt: 'Site de uma marca carioca de drinks prontos em garrafa, com os sabores, pacotes para eventos e pedidos pelo Instagram.',
      en: 'Website for a Rio de Janeiro brand of ready-to-serve bottled cocktails, with its flavors, event packages and orders through Instagram.',
    },
    stack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'jupudim',
    name: 'Jupudim Gourmet',
    url: 'https://jupudim.vercel.app/',
    domain: 'jupudim.vercel.app',
    image: jupudim,
    description: {
      pt: 'Landing page de uma doceria de pudins gourmet, com cardápio, galeria e pedidos direto pelo WhatsApp.',
      en: 'Landing page for a gourmet pudding shop, with a menu, a gallery and orders straight through WhatsApp.',
    },
    stack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'dallafit',
    name: 'DallaFit',
    url: 'https://www.dallafit.com/',
    domain: 'dallafit.com',
    image: dallafit,
    description: {
      pt: 'Plataforma para personal trainers organizarem alunos, protocolos, check-ins e evolução em um só lugar. Em beta fechado, com lista de espera.',
      en: 'A platform for personal trainers to manage students, workout protocols, check-ins and progress in one place. In closed beta, with a waitlist.',
    },
    stack: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'korvosys',
    name: 'Korvosys',
    url: 'https://www.korvosys.com/',
    domain: 'korvosys.com',
    image: korvosys,
    description: {
      pt: 'Site institucional de uma empresa de engenharia de software, com serviços, stack e contato para novos projetos.',
      en: 'Company website for a software engineering studio, with its services, stack and a contact form for new projects.',
    },
    stack: ['Next.js', 'React', 'Tailwind CSS'],
  },
];

export const otherProjects = [
  {
    name: { pt: 'Alimentador de alevinos', en: 'Fry feeder' },
    description: {
      pt: 'Alimentador automático de alevinos feito para o projeto de pesquisa FISH-INOS.',
      en: 'Automatic fry feeder built for the FISH-INOS research project.',
    },
    stack: ['Arduino', 'C++', 'IoT'],
    host: 'GitHub',
    url: 'https://github.com/FISH-INOS/Alimentador-de-Alevinos',
  },
  {
    name: { pt: 'Site da CPA', en: 'CPA website' },
    description: {
      pt: 'Site da Comissão Própria de Avaliação da Biopark Educação, com conteúdo gerenciado no Sanity.',
      en: 'Website for the Biopark Educação assessment committee, with content managed in Sanity.',
    },
    stack: ['JavaScript', 'Bootstrap', 'Sanity'],
    host: 'GitHub',
    url: 'https://github.com/Crautor/CPA-2.0',
  },
  {
    name: { pt: 'Controle de estoque', en: 'Inventory management' },
    description: {
      pt: 'Sistema para controlar os equipamentos e utensílios usados na Biopark Educação.',
      en: 'System that tracks the equipment and supplies used at Biopark Educação.',
    },
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    host: 'GitLab',
    url: 'https://gitlab.com/grupo01ads3/controledeestoque',
  },
  {
    name: { pt: 'API Django', en: 'Django API' },
    description: {
      pt: 'API REST para gerenciar dados de usuários.',
      en: 'REST API for managing user data.',
    },
    stack: ['Python', 'Django', 'Django REST Framework'],
    host: 'GitHub',
    url: 'https://github.com/Crautor/apiDjango',
  },
  {
    name: { pt: 'Este portfólio', en: 'This portfolio' },
    description: {
      pt: 'O código-fonte deste site.',
      en: 'The source code of this site.',
    },
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    host: 'GitHub',
    url: 'https://github.com/Crautor/Portfolio',
  },
];
