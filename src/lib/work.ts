import type { Bilingual } from './site'

// The CV behind /work. It's a copy of two Obsidian notes, and those are the
// source of truth:
//   PT: https://www.carlosbronze.com/obsidian/curriculo
//   EN: https://www.carlosbronze.com/obsidian/resume
// Last synced 2026-11-20. When either note changes, update this file and the
// date (see "Content synced from elsewhere" in CLAUDE.md).
//
// The notes' summary is three long paragraphs written for ATS; the page splits
// the same facts into a short intro, an about paragraph and highlights.
//
// **double asterisks** mark bold, as in the notes; the page renders them.

export const headline: Bilingual = {
  pt: 'Estratégia de produto, gamificação, growth & analytics',
  en: 'Product strategy, gamification, growth & analytics',
}

export const summary: Bilingual = {
  pt: 'Designer de formação e programador desde 1999, atuo em estratégia de produto, gamificação, growth e product analytics. Meu trabalho é chegar ao problema certo, com critérios de sucesso explícitos e decisões que o time consegue executar.',
  en: 'A designer by training who has been coding since 1999, I focus on product strategy, gamification, growth, and product analytics. My job is to get to the right problem, with explicit success criteria and decisions the team can act on.',
}

export const about: Bilingual[] = [
  {
    pt: 'Sou **Product Manager** com quase 20 anos de experiência em produtos digitais, de agência a startup, em edtech, mensageria, mídia e bens de consumo. Hoje trabalho remoto do Rio de Janeiro numa startup americana de edtech com IA, com autonomia e ownership da estratégia de produto, do discovery ao roadmap. A missão atual é transformar **gamificação em hábito de estudo** e provar, com métricas, que o produto gera **engajamento e retenção**.',
    en: "I'm a **Product Manager** with almost 20 years of experience in digital products, from agencies to startups, across edtech, messaging, media, and consumer goods. Today I work remotely from Rio de Janeiro (GMT-3, strong overlap with US and European business hours) at a US-based, AI-powered edtech startup, with autonomy and ownership of product strategy, from discovery to roadmap. My current mission is to turn **gamification into a study habit** and prove, with metrics, that the product drives **engagement and retention**.",
  },
]

export const highlights: Bilingual[] = [
  {
    pt: 'Na **MySparkle.ai**, como PM desde a fundação, defini a extensão de streak como north star e instrumentei 30+ eventos no PostHog antes do primeiro usuário, com a gamificação desenhada como mecanismo de hábito.',
    en: 'At **MySparkle.ai**, as PM since the founding, set streak extension as the north star and instrumented 30+ events in PostHog before the first user, with gamification designed as a habit mechanism.',
  },
  {
    pt: 'Na **Bernoulli Educação** (300 mil usuários), desenhei o novo modelo de squads por público e jornada do usuário, adotado pela diretoria e implementado com 70+ profissionais em menos de 6 meses.',
    en: 'At **Bernoulli Educação** (300k+ users), designed the new squad model around audiences and user journeys, adopted by the Director of Product and rolled out to 70+ people in under 6 months.',
  },
  {
    pt: 'Também na Bernoulli, liderei o redesenho da arquitetura de informação da plataforma, com base em dados de uso e pesquisas com usuários.',
    en: "Also at Bernoulli, led the redesign of the platform's information architecture, using usage data and user research.",
  },
  {
    pt: 'No lançamento do **Viber no Brasil**, liderei BI e growth: a base foi de 10MM para 17MM de usuários com investimento mínimo em mídia.',
    en: "At **Viber's Brazil launch**, led BI and growth: the user base grew from 10M to 17M with minimal media spend.",
  },
]

export const closing: Bilingual[] = [
  {
    pt: 'Sempre fui mão na massa, perto do time e do que de fato vai para produção. A IA não mudou isso, multiplicou: consigo validar uma ideia com uma versão funcional antes de pedir que o time invista nela, e assim decidimos com evidência, não com opinião.',
    en: "I've always been hands-on, close to the team and to what actually ships. AI didn't change that, it multiplied it: I can validate an idea with a working version before asking the team to invest in it, so we decide on evidence, not opinion.",
  },
  {
    pt: 'Dou o meu melhor ao lado de pessoas que gostam de questionar o problema antes de correr para a solução. Se você está pensando em estratégia de produto, gamificação ou métricas que realmente movem o negócio, quero saber no que você está trabalhando.',
    en: "I'm at my best with people who like to question the problem before rushing to the solution. If you're thinking about product strategy, gamification, or metrics that actually move the business, I'd love to hear what you're working on.",
  },
]

export interface Role {
  company: string
  title: Bilingual
  dates: Bilingual
  place: Bilingual
  context: Bilingual
  points: Bilingual[]
}

const remote = { pt: 'Remoto', en: 'Remote' }
const onSite = { pt: 'Presencial', en: 'On-site' }
const at = (city: string, mode: Bilingual): Bilingual => ({
  pt: `${city} · ${mode.pt}`,
  en: `${city} · ${mode.en}`,
})

export const experience: Role[] = [
  {
    company: 'MySparkle.ai',
    title: { pt: 'Product Manager', en: 'Product Manager' },
    dates: { pt: 'maio de 2025 – hoje', en: 'May 2025 – present' },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Startup americana de edtech com IA para o ensino fundamental e médio, em fase de product-market fit. Atuo como PM desde a fundação, com ownership de estratégia, roadmap e métricas.',
      en: "US-based, AI-powered edtech startup for K–12 students, currently searching for product-market fit. I've been the PM since its founding, with ownership of strategy, roadmap, and metrics.",
    },
    points: [
      {
        pt: 'Conduzo o discovery com entrevistas com usuários e priorizo roadmap e backlog com um modelo de experimentação em camadas (input, output, outcome, impacto), que conecta cada iniciativa a uma métrica.',
        en: 'Run discovery through user interviews and prioritize the roadmap and backlog with a layered experimentation model (input, output, outcome, impact) that ties every initiative to a metric.',
      },
      {
        pt: 'Defini a extensão de streak como north star e instrumentei 30+ eventos de onboarding, aprendizado e engajamento no PostHog, o que permite analisar coortes desde o piloto.',
        en: 'Set streak extension as the north star metric and instrumented 30+ onboarding, learning, and engagement events in PostHog, enabling cohort analysis from the pilot onward.',
      },
      {
        pt: 'Desenhei a gamificação como mecanismo de hábito (streaks, freeze, celebração de conquistas), com base em ciência comportamental e com critérios de sucesso definidos antes do lançamento.',
        en: 'Designed gamification as a habit mechanism (streaks, freeze, milestone celebrations), grounded in behavioral science, with success criteria defined before launch.',
      },
      {
        pt: 'Entrego cada PRD com um protótipo funcional em HTML construído com IA, que o time de engenharia usa como referência de implementação e que reduziu as dúvidas no desenvolvimento.',
        en: 'Ship every PRD with a working HTML prototype built with AI, giving engineering a concrete implementation reference and reducing questions during development.',
      },
      {
        pt: 'Co-escrevi os princípios de marca e as diretrizes de linguagem, que servem de critério para o design e a comunicação do produto.',
        en: 'Co-authored the brand principles and copy guidelines that guide product design and communication.',
      },
    ],
  },
  {
    company: 'Bernoulli Educação',
    title: { pt: 'Product Strategy Lead', en: 'Product Strategy Lead' },
    dates: {
      pt: 'março de 2024 – abril de 2025',
      en: 'March 2024 – April 2025',
    },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Sistema de ensino com 4 produtos digitais usados por mais de 300 mil alunos e professores. Ao lado da diretoria de Produto, redefini a estratégia da área de Produtos Digitais: como os times se organizam, o que medem e onde investem.',
      en: 'Brazilian K–12 education company with 4 digital products used by 300k+ students and teachers. Working alongside the Director of Product, I reshaped the Digital Products strategy: how teams are organized, what they measure, and where they invest.',
    },
    points: [
      {
        pt: 'Desenhei um novo modelo de squads, organizado por público e jornada do usuário, com roadmap de evolução dos times para 5 anos. A diretoria adotou o modelo, implementado com 70+ profissionais em menos de 6 meses.',
        en: 'Designed a new squad model, organized by audience and user journey, with a 5-year team evolution roadmap. The Director of Product adopted it, and it was rolled out to 70+ people in under 6 months.',
      },
      {
        pt: 'Padronizei e ampliei a instrumentação (GA4, GTM) de 4 produtos digitais, dando aos PMs a primeira visão granular do comportamento do usuário para tomada de decisão. Com essa base, propus à diretoria uma ferramenta de product analytics e uma métrica de negócio sob ownership de cada squad.',
        en: 'Standardized and expanded instrumentation (GA4, GTM) across 4 digital products, giving PMs their first granular view of user behavior for decision-making. Building on that, proposed a product analytics platform to leadership, along with a business metric owned by each squad.',
      },
      {
        pt: 'Liderei o redesenho da arquitetura de informação da plataforma usada por 300 mil alunos e professores, com base em dados de uso e pesquisas com usuários, alinhando navegação, hierarquia de conteúdo e fluxos de usuário aos objetivos estratégicos.',
        en: "Led the information architecture redesign for the platform's 300k+ students and teachers, using usage data and user research to align navigation, content hierarchy, and user flows with strategic objectives.",
      },
      {
        pt: 'Construí o business case de um Design System para a plataforma principal (ROI, escala, consistência), com pesquisa de mercado e avaliação de fornecedores.',
        en: 'Built the business case for a core-platform Design System (ROI, scale, consistency), backed by market research and vendor evaluation.',
      },
    ],
  },
  {
    company: 'Bird',
    title: {
      pt: 'Especialista em Marketing Digital',
      en: 'Digital Marketing Specialist',
    },
    dates: {
      pt: 'outubro de 2021 – outubro de 2023',
      en: 'October 2021 – October 2023',
    },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Agência digital. Atuei na interseção entre marketing, design e tecnologia.',
      en: 'Digital agency. Worked at the intersection of marketing, design and technology.',
    },
    points: [
      {
        pt: 'Estruturei templates de email marketing e sites corporativos e de eventos como sistemas reutilizáveis, com foco em performance e consistência de marca.',
        en: 'Built email marketing templates and corporate and event websites as reusable systems, with a focus on performance and brand consistency.',
      },
      {
        pt: 'Atuei como ponte técnica entre design e desenvolvimento, traduzindo diretrizes de design e conceitos criativos em experiências web funcionais.',
        en: 'Acted as the technical bridge between design and development, translating design guidelines and creative concepts into functional web experiences.',
      },
    ],
  },
  {
    company: 'Naru Design',
    title: {
      pt: 'Designer de Produto e Desenvolvedor',
      en: 'Product Designer and Developer',
    },
    dates: {
      pt: 'janeiro de 2015 – outubro de 2020',
      en: 'January 2015 – October 2020',
    },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Estúdio de design editorial. Atuei com clientes como Fundação Tide Setúbal, Transparência Internacional e Brasil de Tuhu (mapeamento nacional de educação musical).',
      en: 'Editorial design studio. Worked with clients such as Fundação Tide Setúbal, Transparency International and Brasil de Tuhu (national survey of music education).',
    },
    points: [
      {
        pt: 'Levei relatórios e pesquisas pensados para o impresso para a web, em web reports com visualização de dados, do desenho da experiência ao código.',
        en: 'Turned print-first reports and research into web reports with data visualization, from experience design to code.',
      },
      {
        pt: 'Fui o responsável técnico do estúdio, garantindo performance e consistência de marca em cada entrega.',
        en: "Served as the studio's technical lead, ensuring performance and brand consistency in every project.",
      },
    ],
  },
  {
    company: 'Viber Media, Inc.',
    title: {
      pt: 'Gerente de Marketing Digital e Business Intelligence',
      en: 'Digital Marketing & Business Intelligence Manager',
    },
    dates: {
      pt: 'fevereiro de 2014 – dezembro de 2014',
      en: 'February 2014 – December 2014',
    },
    place: at('São Paulo', onSite),
    context: {
      pt: 'Atuei no lançamento das operações do Viber no Brasil, em disputa direta com o WhatsApp pelo usuário brasileiro.',
      en: "Worked on Viber's launch in Brazil, competing head-to-head with WhatsApp for Brazilian users.",
    },
    points: [
      {
        pt: 'Liderei BI e estratégia de growth do lançamento, usando dados de uso por região para decidir onde e como investir. Base de usuários de 10MM para 17MM com investimento mínimo em mídia.',
        en: 'Led BI and growth strategy for the launch, using regional usage data to decide where and how to invest. The user base grew from 10M to 17M with minimal media spend.',
      },
      {
        pt: 'Criei as metodologias e relatórios de perfis de uso, penetração regional e tendências que orientaram campanhas, PR e posicionamento.',
        en: 'Created the methodologies and reports on usage profiles, regional penetration, and trends that guided campaigns, PR, and positioning.',
      },
    ],
  },
  {
    company: 'Acxiom Brasil',
    title: {
      pt: 'Consultor de Marketing Digital',
      en: 'Digital Marketing Consultant',
    },
    dates: {
      pt: 'novembro de 2013 – janeiro de 2014',
      en: 'November 2013 – January 2014',
    },
    place: at('São Paulo', onSite),
    context: {
      pt: 'Empresa de big data e marketing orientado por dados. Atuei no programa de fidelidade Santander Esfera, com foco em retenção de clientes e uso do cartão.',
      en: 'Big data and data-driven marketing company. Worked on the Santander Esfera loyalty program, focused on customer retention and card usage.',
    },
    points: [
      {
        pt: 'Integrei dados de CRM, transações e parceiros em uma visão única do cliente, base da estratégia multicanal de ciclo de vida (email, web, social, mobile, parceiros) e do playbook de aquisição e retenção.',
        en: 'Integrated CRM, transaction, and partner data into a single customer view, which became the basis for the multichannel lifecycle strategy (email, web, social, mobile, partners) and the acquisition and retention playbook.',
      },
    ],
  },
  {
    company: 'Cultural Brands',
    title: { pt: 'Equipe Fundadora', en: 'Founding Team' },
    dates: {
      pt: 'outubro de 2011 – outubro de 2013',
      en: 'October 2011 – October 2013',
    },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Startup de pesquisa de consumo baseada em comunidades online privadas. Atuei desde a fundação, atendendo marcas como Danone, Casas Bahia e Ponto Frio.',
      en: 'Consumer research startup built on private online communities. Worked there from its founding, serving brands such as Danone, Casas Bahia, and Ponto Frio.',
    },
    points: [
      {
        pt: 'Construí do zero a plataforma de comunidades que sustentava o modelo de pesquisa, cuidando de marca, site, código e operação.',
        en: 'Built the community platform behind the research model from scratch, covering brand, website, code, and operations.',
      },
    ],
  },
  {
    company: 'Casa Digital',
    title: {
      pt: 'Consultor de Estratégia Digital e Analytics',
      en: 'Digital Strategy & Analytics Consultant',
    },
    dates: {
      pt: 'junho de 2010 – dezembro de 2010',
      en: 'June 2010 – December 2010',
    },
    place: at('Rio de Janeiro', onSite),
    context: {
      pt: 'Agência digital. Atuei em uma campanha eleitoral ao governo do Rio de Janeiro.',
      en: "Digital agency. Worked on a Rio de Janeiro governor's race.",
    },
    points: [
      {
        pt: 'Transformei análises de site e redes sociais em sinais que orientaram as mensagens e a estratégia digital da campanha.',
        en: "Turned website and social media analysis into signals that shaped the campaign's messaging and digital strategy.",
      },
    ],
  },
  {
    company: 'Globosat',
    title: { pt: 'Analista de Produto', en: 'Product Analyst' },
    dates: {
      pt: 'dezembro de 2009 – maio de 2010',
      en: 'December 2009 – May 2010',
    },
    place: at('Rio de Janeiro', onSite),
    context: {
      pt: 'Programadora de canais de TV por assinatura do Grupo Globo. Atuei no site do canal GNT.',
      en: "Grupo Globo's pay-TV channel network. Worked on the GNT channel website.",
    },
    points: [
      {
        pt: 'Transformei o relatório mensal das buscas internas do site em insights para a equipe editorial, categorizando os termos buscados e criando visualizações que revelavam interesses do público e lacunas de conteúdo.',
        en: 'Turned the monthly site search report into insights for the editorial team, tagging search terms and building visualizations that revealed audience interests and content gaps.',
      },
    ],
  },
  {
    company: 'Giovanni+DraftFCB',
    title: {
      pt: 'Assistente de Planejamento Estratégico e Mídias Interativas',
      en: 'Strategic Planning and Interactive Media Assistant',
    },
    dates: {
      pt: 'setembro de 2008 – dezembro de 2009',
      en: 'September 2008 – December 2009',
    },
    place: at('Rio de Janeiro', onSite),
    context: {
      pt: 'Agência de publicidade. Atuei no departamento digital recém-criado, com clientes como Kraft Foods (Club Social, Trakinas), SCJohnson, Gafisa e Hopi Hari.',
      en: 'Advertising agency. Worked in its newly created digital department, with clients such as Kraft Foods (Club Social, Trakinas), SCJohnson, Gafisa, and Hopi Hari.',
    },
    points: [
      {
        pt: 'Conduzi a frente digital do Trakinas 3.0, um jogo online transmídia em que as crianças desbloqueavam níveis ao longo do ano com pistas na TV, em revistas e em banners. A primeira versão passou de 2 milhões de visitantes, dentro do reposicionamento que levou a marca de crescimento de um dígito para dois.',
        en: 'Led the digital front of Trakinas 3.0, a transmedia online game where kids unlocked levels throughout the year using clues from TV, magazines, and banners. The first version surpassed 2 million visitors, as part of the repositioning that took the brand from single-digit to double-digit growth.',
      },
      {
        pt: 'Concebi do zero o Mãe com Filhos: em vez de um blog de leitura passiva, uma régua de engajamento em que cada seção pedia um pouco mais da visitante, de enquetes até o envio das próprias histórias.',
        en: 'Conceived Mãe com Filhos from scratch: instead of a passive-reading blog, an engagement ladder where each section asked a little more of visitors, from polls to submitting their own stories.',
      },
      {
        pt: 'No Club Social #inconfundível, primeiro projeto do mundo a usar influenciadores como criadores de conteúdo no Twitter, criei um banner que se atualizava sozinho a cada 30 minutos com o tweet mais recente do influenciador em destaque, da solução técnica à operação.',
        en: "On Club Social #inconfundível, the first project in the world to use influencers as content creators on Twitter, built a self-updating banner that pulled the featured influencer's latest tweet every 30 minutes, handling everything from the technical build to day-to-day operation.",
      },
    ],
  },
  {
    company: 'NBS',
    title: { pt: 'Trainee de Planejamento', en: 'Strategic Planning Trainee' },
    dates: {
      pt: 'junho de 2007 – setembro de 2008',
      en: 'June 2007 – September 2008',
    },
    place: at('Rio de Janeiro', onSite),
    context: {
      pt: "Agência de publicidade. Atuei no planejamento estratégico de Oi, GNT e Bob's.",
      en: "Advertising agency. Worked on strategic planning for Oi, GNT, and Bob's.",
    },
    points: [
      {
        pt: 'Introduzi o uso de arquétipos de marca no departamento de planejamento, aplicado à estratégia de marca da Oi.',
        en: "Introduced brand archetypes to the planning department, applied to Oi's brand strategy.",
      },
    ],
  },
]

export const skills: { area: Bilingual; items: Bilingual }[] = [
  {
    area: { pt: 'Estratégia de produto', en: 'Product strategy' },
    items: {
      pt: 'tese de produto, priorização, discovery, go-to-market, desenho organizacional',
      en: 'product thesis, prioritization, discovery, go-to-market, organizational design',
    },
  },
  {
    area: {
      pt: 'Gamificação e design comportamental',
      en: 'Gamification and behavioral design',
    },
    items: {
      pt: 'mecânicas de hábito, engajamento, retenção',
      en: 'habit mechanics, engagement, retention',
    },
  },
  {
    area: {
      pt: 'Product analytics e growth',
      en: 'Product analytics and growth',
    },
    items: {
      pt: 'north star, instrumentação, experimentação, análise de coortes, BI',
      en: 'north star, instrumentation, experimentation, cohort analysis, BI',
    },
  },
  {
    area: {
      pt: 'Experiência e arquitetura de informação',
      en: 'Experience and information architecture',
    },
    items: {
      pt: 'jornada do usuário, pesquisa com usuários, design systems',
      en: 'user journeys, user research, design systems',
    },
  },
  {
    area: { pt: 'Ferramentas', en: 'Tools' },
    items: {
      pt: 'PostHog, Amplitude, Mixpanel, Statsig, GA4, GTM, SQL, Power BI, Metabase, Figma, Miro, Notion, Jira',
      en: 'PostHog, Amplitude, Mixpanel, Statsig, GA4, GTM, SQL, Power BI, Metabase, Figma, Miro, Notion, Jira',
    },
  },
]

// A school's courses, linked to the program's own page where there is one.
// The links are ours: the Obsidian notes don't have them.
export interface Course {
  name: Bilingual
  href?: string
}

export const education: {
  school: string
  courses: Course[]
  dates?: Bilingual
}[] = [
  {
    school: 'Tera',
    courses: [
      {
        name: {
          pt: 'MBA em Liderança e Estratégia de Produtos Digitais',
          en: 'MBA in Digital Product Leadership and Strategy',
        },
        href: 'https://somostera.com/mba-lideranca-estrategia-produtos-digitais',
      },
    ],
    dates: {
      pt: 'fevereiro de 2025 – novembro de 2025',
      en: 'February 2025 – November 2025',
    },
  },
  {
    school: 'TheStarter · Cursos Avançados de UX Design',
    courses: [
      {
        name: {
          pt: 'Psicologia e Gamificação aplicada a UX Design',
          en: 'Psychology and Gamification Applied to UX Design',
        },
        href: 'https://www.thestarter.io/psicologia-aplicada-a-ux-design',
      },
    ],
    dates: { pt: 'abril de 2026 – maio de 2026', en: 'April 2026 – May 2026' },
  },
  {
    school: 'Tera',
    courses: [
      {
        name: {
          pt: 'Digital Product Leadership',
          en: 'Digital Product Leadership',
        },
        href: 'https://somostera.com/formacoes/digital-product-leadership',
      },
      {
        name: { pt: 'Product Analytics', en: 'Product Analytics' },
        href: 'https://somostera.com/formacoes/product-analytics',
      },
      {
        name: {
          pt: 'Liderança e Estratégia de Negócios',
          en: 'Leadership and Business Strategy',
        },
        href: 'https://somostera.com/formacoes/lideranca-e-estrategia-de-produtos-digitais',
      },
    ],
  },
  {
    school: 'Product Arena',
    courses: [
      {
        name: {
          pt: 'Pensamento Crítico e Analítico',
          en: 'Critical and Analytical Thinking',
        },
        href: 'https://productarena.io/curso/pensamento-critico-para-lideres-e-pms',
      },
      {
        name: { pt: 'Product Ops', en: 'Product Ops' },
        href: 'https://productarena.io/curso/product-ops-primeiro-curso-do-brasil',
      },
      {
        name: { pt: 'Growth', en: 'Growth' },
        href: 'https://productarena.io/curso/growth-marketing',
      },
      {
        name: { pt: 'Métricas', en: 'Metrics' },
        href: 'https://productarena.io/curso/metricas-produto',
      },
      {
        name: { pt: 'Plataforma para PMs', en: 'Platform for PMs' },
        href: 'https://productarena.io/curso/plataforma-para-pms-primeiro-curso-do-brasil',
      },
      {
        name: { pt: 'AI + NoCode', en: 'AI + NoCode' },
        // The course has since been renamed IA e Automações na Prática.
        href: 'https://productarena.io/curso/ai-automacoes-na-pratica',
      },
      {
        name: { pt: 'AI Product Sense', en: 'AI Product Sense' },
        href: 'https://productarena.io/curso/ia-product-sense-curso-product-arena',
      },
    ],
  },
  {
    school: 'Pontifícia Universidade Católica do Rio de Janeiro',
    courses: [
      {
        name: {
          pt: 'Bacharelado, Desenho Industrial · Programação Visual',
          en: 'BA, Industrial Design (Visual Communication)',
        },
        href: 'https://www.puc-rio.br/ensinopesq/ccg/design.html',
      },
    ],
    dates: {
      pt: 'agosto de 2002 – julho de 2007',
      en: 'August 2002 – July 2007',
    },
  },
]

// Names of certifications aren't translated in either note.
export const certifications = [
  'Global Entrepreneurship and Innovation Bootcamp · Arizona State University',
  'Amplitude Foundations · Analytics',
  'Google Analytics Individual Qualification',
  'Lean Six Sigma White Belt Certification',
  'Scrum Foundation Professional Certification · SFPC™',
]

export const languages: Bilingual[] = [
  { pt: 'Português (nativo)', en: 'Portuguese (native or bilingual)' },
  { pt: 'Inglês (profissional)', en: 'English (professional working)' },
  { pt: 'Alemão (intermediário)', en: 'German (limited working)' },
]
