// Interface copy for each language. Content that belongs to a project,
// job or skill lives in src/content instead.
export const dictionaries = {
  pt: {
    // The page title is built from profile.headline in src/i18n/metadata.js.
    meta: {
      description:
        'Tech lead e engenheiro DevOps em Toledo, PR. Arquitetura de nuvem, pipelines de CI/CD e desenvolvimento full stack.',
      ogImageAlt: 'com capturas de tela de sites do portfólio',
    },
    nav: {
      work: 'Trabalhos',
      experience: 'Experiência',
      about: 'Sobre',
      contact: 'Contato',
      skip: 'Pular para o conteúdo',
      home: 'Vitor Dallanol, início',
      sections: 'Seções',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      language: 'Idioma',
    },
    hero: {
      lead: 'Tech lead e engenheiro DevOps. Desenho a infraestrutura na nuvem, automatizo pipelines de CI/CD e escrevo o código full stack que roda em cima dela.',
      current:
        'Moro em Toledo, PR. Hoje sou Tech Lead na Eduvora e DevOps Engineer na Smartflow Sistemas.',
      ctaWork: 'Ver trabalhos',
      ctaContact: 'Falar comigo',
      collageLabel: 'Sites em produção',
    },
    work: {
      title: 'Trabalhos',
      intro: 'Sites e produtos que desenvolvi e estão no ar.',
      visit: 'Abrir site',
      otherTitle: 'Outros projetos',
      otherIntro: 'Projetos de faculdade, pesquisa e estudo.',
      codeOn: 'Ver código no',
    },
    experience: {
      title: 'Experiência',
      present: 'atual',
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Sou tech lead e engenheiro DevOps de Toledo, no Paraná. Na Eduvora, lidero a arquitetura de nuvem e a escalabilidade da plataforma, com foco em padronização de código e segurança nos pipelines de CI/CD. Na Smartflow Sistemas, onde entrei como estagiário em 2024, cuido de deploys em produção, releases e automação de builds.',
        'Comecei no desenvolvimento full stack, com Next.js, Node, Vue e Nuxt, e fui descendo para a infraestrutura: Docker, Kubernetes, AWS e CI/CD. Hoje gosto de cuidar das duas pontas, do código até a produção.',
        'Na Faculdade Donaduzzi, me formei em Análise e Desenvolvimento de Sistemas e segui para a Engenharia de Software. Fui campeão do Hackathon Biopark Educação e participei do FISH-INOS, um projeto de pesquisa em piscicultura com Arduino e ESP32.',
      ],
      photoAlt: 'Foto de Vitor Dallanol',
      educationTitle: 'Formação',
      achievementsTitle: 'Conquistas',
      stackTitle: 'Ferramentas que uso',
    },
    contact: {
      title: 'Contato',
      lead: 'Tem um projeto, uma vaga ou uma ideia? Me manda uma mensagem.',
      copy: 'Copiar e-mail',
      copied: 'E-mail copiado',
      whatsapp: 'WhatsApp',
      backToTop: 'Voltar ao topo',
    },
    notFound: {
      title: 'Essa página não existe.',
      pathLead: 'Nada foi encontrado em',
      noPath: 'Nada foi encontrado neste endereço.',
      hint: 'Pode ser um link antigo ou um erro de digitação.',
      home: 'Ir para o início',
    },
  },

  en: {
    meta: {
      description:
        'Tech lead and DevOps engineer based in Toledo, Brazil. Cloud architecture, CI/CD pipelines and full stack development.',
      ogImageAlt: 'with screenshots of websites from the portfolio',
    },
    nav: {
      work: 'Work',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      skip: 'Skip to content',
      home: 'Vitor Dallanol, home',
      sections: 'Sections',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    hero: {
      lead: 'Tech lead and DevOps engineer. I design cloud infrastructure, automate CI/CD pipelines and write the full stack code that runs on top of it.',
      current:
        'Based in Toledo, Brazil. Currently Tech Lead at Eduvora and DevOps Engineer at Smartflow Sistemas.',
      ctaWork: 'See my work',
      ctaContact: 'Get in touch',
      collageLabel: 'Live websites',
    },
    work: {
      title: 'Work',
      intro: 'Websites and products I built that are live.',
      visit: 'Visit site',
      otherTitle: 'Other projects',
      otherIntro: 'College, research and study projects.',
      codeOn: 'View code on',
    },
    experience: {
      title: 'Experience',
      present: 'present',
    },
    about: {
      title: 'About',
      paragraphs: [
        "I'm a tech lead and DevOps engineer from Toledo, in southern Brazil. At Eduvora I lead the platform's cloud architecture and scalability, with a focus on code standards and security in the CI/CD pipelines. At Smartflow Sistemas, where I started as an intern in 2024, I handle production deployments, releases and build automation.",
        'I started out as a full stack developer, with Next.js, Node, Vue and Nuxt, and kept moving down into infrastructure: Docker, Kubernetes, AWS and CI/CD. Today I like owning both ends, from the code to production.',
        'At Faculdade Donaduzzi I graduated in Systems Analysis and Development and went on to Software Engineering. I won the Biopark Educação Hackathon and took part in FISH-INOS, a fish farming research project built with Arduino and ESP32.',
      ],
      photoAlt: 'Photo of Vitor Dallanol',
      educationTitle: 'Education',
      achievementsTitle: 'Achievements',
      stackTitle: 'Tools I use',
    },
    contact: {
      title: 'Contact',
      lead: 'Have a project, a role or an idea? Send me a message.',
      copy: 'Copy email',
      copied: 'Email copied',
      whatsapp: 'WhatsApp',
      backToTop: 'Back to top',
    },
    notFound: {
      title: "This page doesn't exist.",
      pathLead: 'Nothing was found at',
      noPath: 'Nothing was found at this address.',
      hint: 'It may be an old link or a typo.',
      home: 'Go to the home page',
    },
  },
};
