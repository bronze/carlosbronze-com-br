import type { Bilingual } from './site'

// The CV behind /work. It's a copy of two Obsidian notes, and those are the
// source of truth:
//   PT: https://www.carlosbronze.com/obsidian/curriculo
//   EN: https://www.carlosbronze.com/obsidian/resume
// Last synced 2026-10-19. When either note changes, update this file and the
// date (see "Content synced from elsewhere" in CLAUDE.md).
//
// **double asterisks** mark bold, as in the notes; the page renders them.

export const headline: Bilingual = {
  pt: 'Estratégia de produto, gamificação, growth & analytics',
  en: 'Product strategy, gamification, growth & analytics',
}

export const summary: Bilingual = {
  pt: 'Designer de formação, programo desde 1999, estrategista por ofício. Transformo ambiguidade em direção clara de produto: o problema certo, critérios de sucesso explícitos e decisões que os times conseguem executar.',
  en: 'Designer by training, coding since 1999, strategist by trade. I turn ambiguity into clear product direction: the right problem, explicit success criteria, and decisions teams can act on.',
}

export const about: Bilingual[] = [
  {
    pt: 'Sou Senior Product Manager e há quase 20 anos construo **produtos digitais e marcas**, de agência a startup. Trabalho remoto do Rio de Janeiro para uma startup americana. Conecto **estratégia, dados e prioridades de negócio** para escolher onde investir: a interseção entre **o que encanta o usuário** e **o que realmente move o resultado**.',
    en: "I'm a Senior Product Manager and for almost 20 years I've been building **digital products and brands**, from agencies to startups. I work fully remote from Rio de Janeiro for a US-based startup (GMT-3, strong overlap with US and European business hours). I connect **strategy, data and business priorities** to choose where to invest: the overlap between **what delights users** and **what actually moves the business**.",
  },
]

export const highlights: Bilingual[] = [
  {
    pt: 'Na **MySparkle.ai**, como PM desde a fundação, defino a tese de produto de uma edtech com IA: gamificação como mecanismo de hábito e métricas prontas antes do primeiro usuário.',
    en: 'At **MySparkle.ai**, as PM since the founding, I own the product thesis of an AI-powered edtech: gamification as a habit mechanism and metrics in place before the first user.',
  },
  {
    pt: 'Na **Bernoulli Educação** (300 mil usuários), desenhei o novo modelo de squads por jornada do usuário, adotado pela diretoria e implementado com 70+ profissionais em menos de 6 meses.',
    en: 'At **Bernoulli Educação** (300k users), designed the new squad model around user journeys, adopted by the Director of Product and rolled out to 70+ people in under 6 months.',
  },
  {
    pt: 'Também na Bernoulli, liderei o redesenho da arquitetura de informação, ancorando navegação e fluxos nos objetivos estratégicos, e não na estrutura legada.',
    en: 'Also at Bernoulli, led the information architecture redesign, anchoring navigation and user flows on strategic objectives instead of legacy structure.',
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
    title: { pt: 'Senior Product Manager', en: 'Senior Product Manager' },
    dates: { pt: 'maio de 2025 – hoje', en: 'May 2025 – present' },
    place: at('Rio de Janeiro', remote),
    context: {
      pt: 'Startup americana de edtech com IA para o ensino fundamental e médio, construída do zero e em busca de product-market fit. Como PM desde a fundação, defino a tese de produto: que problema resolver, para quem, e como saber se estamos certos.',
      en: 'US-based AI-powered edtech startup for K–12 students, built from zero and searching for product-market fit. As PM since the founding, I own the product thesis: which problem to solve, for whom, and how we know we are right.',
    },
    points: [
      {
        pt: 'Em produto de aprendizado, o valor só aparece com uso recorrente: desenhei a gamificação como mecanismo de hábito (streaks, freeze, celebração de conquistas), com base em ciência de formação de hábitos, e defini antes do lançamento os critérios de sucesso e o desenho de coortes para validá-la.',
        en: 'In a learning product, value only shows up with recurring use: designed gamification as a habit mechanism (streaks, freeze, milestone celebrations), grounded in habit formation science, and defined the success criteria and cohort design to validate it before launch.',
      },
      {
        pt: 'Antes dos primeiros usuários, a pergunta é como saber se estamos certos: defini extensão de streak como north star e instrumentei 30+ eventos em onboarding, aprendizado e engajamento, para que cada usuário do piloto já gere evidência.',
        en: 'Before the first users, the question is how we will know we are right: set streak extension as the north star and instrumented 30+ events across onboarding, learning and engagement, so every pilot user generates evidence from day one.',
      },
      {
        pt: 'Muitas hipóteses, time pequeno e pouco dado: introduzi no time um modelo de experimentação em camadas (input, output, outcome, impacto) que conecta cada iniciativa a uma métrica e prioriza o que entra no roadmap.',
        en: 'Many hypotheses, a small team and little data: introduced a layered experimentation model (input, output, outcome, impact) that ties every initiative to a metric and prioritizes what makes the roadmap.',
      },
      {
        pt: 'Especificação sozinha gerava dúvidas e idas e vindas com o desenvolvimento: passei a entregar todo PRD com um protótipo funcional em HTML construído com IA, que o time usa como referência direta de implementação.',
        en: 'Specs alone created questions and back-and-forth with engineering: started shipping every PRD with a working HTML prototype built with AI, which the team uses as a direct implementation reference.',
      },
      {
        pt: 'Valores claros, sem linguagem própria: co-escrevi os princípios de marca e as diretrizes de linguagem, transformando a narrativa do produto em critérios de design e comunicação.',
        en: 'Clear values, no voice of its own: co-authored the brand principles and copy guidelines, turning the product narrative into design and communication criteria.',
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
      pt: 'Sistema de ensino com plataforma digital usada por mais de 300 mil alunos e professores. Lado a lado com a diretoria de Produto, redefini a estratégia da área de Produtos Digitais: como os times se organizam, o que medem e onde investem.',
      en: 'Education system with a digital platform used by 300k+ students and teachers. Working side by side with the Director of Product, I reshaped the strategy of the Digital Products area: how teams are organized, what they measure and where they invest.',
    },
    points: [
      {
        pt: 'Times organizados por tecnologia (legado, 3D, plataforma principal), longe do que gerava valor: desenhei o novo modelo de squads por público e jornada do usuário, com o roadmap de evolução dos times para 5 anos. Modelo adotado pela diretoria e implementado com 70+ profissionais em menos de 6 meses.',
        en: 'Teams were organized by technology (legacy, 3D, core platform), far from where value was created: designed the new squad model around audiences and user journeys, with a 5-year team evolution roadmap. Adopted by the Director of Product and rolled out to 70+ people in under 6 months.',
      },
      {
        pt: 'Decisões de produto sem dados confiáveis, com mensuração diferente em cada um dos 4 produtos: padronizei e ampliei a instrumentação (GA4, GTM), dei aos PMs a primeira visão granular do comportamento do usuário e propus à diretoria o próximo passo: uma ferramenta de product analytics e uma métrica de negócio sob responsabilidade de cada squad.',
        en: 'Product decisions lacked reliable data, with different measurement in each of the 4 products: standardized and expanded instrumentation (GA4, GTM), gave PMs their first granular view of user behavior, and proposed the next step to leadership: a product analytics platform and a business metric owned by each squad.',
      },
      {
        pt: 'Navegação herdada da estrutura legada: liderei o redesenho da arquitetura de informação, ancorando navegação, hierarquia de conteúdo e fluxos de usuário nos objetivos estratégicos.',
        en: 'Navigation was inherited from legacy structure: led the redesign of the information architecture, anchoring navigation, content hierarchy and user flows on strategic objectives.',
      },
      {
        pt: 'Design e engenharia sem base comum de interface: construí o caso de negócio de um Design System (ROI, escala, consistência) e alinhei os times em torno de componentes reutilizáveis.',
        en: 'Design and engineering had no shared interface foundation: built the business case for a Design System (ROI, scale, consistency) and aligned teams around reusable components.',
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
        pt: 'Entregas digitais que precisavam escalar sem retrabalho: estruturei templates de email marketing e sites corporativos e de eventos como sistemas reutilizáveis, com foco em performance e consistência de marca.',
        en: 'Digital deliverables had to scale without rework: structured email marketing templates and corporate and event websites as reusable systems, focused on performance and brand consistency.',
      },
      {
        pt: 'Design e tecnologia falando línguas diferentes: atuei como ponte técnica, traduzindo diretrizes de design e conceitos criativos em experiências web funcionais.',
        en: 'Design and technology spoke different languages: acted as the technical bridge, translating design guidelines and creative concepts into functional web experiences.',
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
      pt: 'Estúdio de design editorial. Levei para a web relatórios e pesquisas de organizações como Fundação Tide Setúbal, Transparência Internacional e Brasil de Tuhu (mapeamento nacional de educação musical).',
      en: 'Editorial design studio. Brought reports and research to the web for organizations such as Fundação Tide Setúbal, Transparency International and Brasil de Tuhu (national survey of music education).',
    },
    points: [
      {
        pt: 'Relatórios densos em dados, pensados para o impresso, precisavam ser lidos na web: transformei pesquisas e relatórios em web reports com visualização de dados, do desenho da experiência ao código.',
        en: 'Data-heavy reports designed for print had to be read on the web: turned research and reports into web reports with data visualization, from experience design to code.',
      },
      {
        pt: 'Estúdio sem referência técnica interna: fui o ponto focal de tecnologia, garantindo performance e consistência de marca em cada entrega.',
        en: 'The studio had no in-house technical lead: served as the technology focal point, ensuring performance and brand consistency in every delivery.',
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
      pt: 'Lançamento das operações do Viber no Brasil, em disputa direta com o WhatsApp pelo usuário brasileiro.',
      en: "Launch of Viber's operations in Brazil, competing head to head with WhatsApp for Brazilian users.",
    },
    points: [
      {
        pt: 'Crescer sem depender de mídia paga: liderei BI e estratégia de growth do lançamento, usando dados de uso e penetração regional para decidir onde e como investir. Resultado: base de usuários de 10MM para 17MM com investimento mínimo em mídia.',
        en: 'Growing without relying on paid media: led BI and growth strategy for the launch, using usage and regional penetration data to decide where and how to invest. Result: user base grew from 10M to 17M with minimal media investment.',
      },
      {
        pt: 'Sem visão de quem usava o produto e onde: criei as metodologias e relatórios de perfis de uso, penetração regional e tendências que orientaram campanhas, PR e posicionamento.',
        en: 'No view of who used the product and where: created the methodologies and reports on usage profiles, regional penetration and trends that guided campaigns, PR and positioning.',
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
      pt: 'Programa de fidelidade Santander Esfera, com foco em retenção de clientes e uso do cartão.',
      en: 'Santander Esfera loyalty program, focused on customer retention and card usage.',
    },
    points: [
      {
        pt: 'Dados de CRM, transações e parceiros sem visão única do cliente: integrei as fontes em uma visão unificada que orientou a estratégia multicanal de ciclo de vida (email, web, social, mobile, parceiros) e o playbook de aquisição e retenção.',
        en: 'CRM, transaction and partner data had no single customer view: integrated the sources into a unified view that guided the multichannel lifecycle strategy (email, web, social, mobile, partners) and the acquisition and retention playbook.',
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
      pt: 'Startup de pesquisa de consumo que acompanhava comunidades online privadas por até seis meses, para marcas como Danone, Casas Bahia e Ponto Frio.',
      en: 'Consumer research startup that followed private online communities for up to six months, for brands such as Danone, Casas Bahia and Ponto Frio.',
    },
    points: [
      {
        pt: 'Pesquisa tradicional não capturava o comportamento do consumidor ao longo do tempo: construí do zero a plataforma de comunidades que viabilizou o modelo, da marca e do site ao código e à operação.',
        en: 'Traditional research could not capture consumer behavior over time: built from zero the community platform that made the model possible, from brand and website to code and operations.',
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
      pt: 'Campanha ao governo do estado do Rio de Janeiro.',
      en: 'Campaign for the Rio de Janeiro state government.',
    },
    points: [
      {
        pt: 'Demandas sociais dispersas nas redes: transformei análises de site e redes sociais em sinais que orientaram mensagens e estratégia da campanha, com planejamento digital de objetivos claros.',
        en: 'Social demands scattered across the web: turned website and social media analysis into signals that shaped campaign messaging and strategy, with a digital plan built on clear objectives.',
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
    context: { pt: 'Site do canal GNT.', en: 'GNT channel website.' },
    points: [
      {
        pt: 'Pauta editorial sem dados de interesse do público: usei as buscas internas do site para revelar interesses e lacunas de conteúdo, e análises de performance para orientar crescimento de audiência e planejamento editorial.',
        en: "Editorial planning had no data on audience interest: used the site's internal search to surface interests and content gaps, and performance analysis to guide audience growth and editorial planning.",
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
      pt: 'Estruturação do departamento digital recém-criado da agência, onde introduzi o Google Analytics na mensuração, com clientes como Kraft Foods (Club Social, Trakinas), SCJohnson, Gafisa e Hopi Hari.',
      en: "Building the agency's newly created digital department, where I introduced Google Analytics for measurement, with clients such as Kraft Foods (Club Social, Trakinas), SCJohnson, Gafisa and Hopi Hari.",
    },
    points: [
      {
        pt: 'Trakinas vinha de cinco anos crescendo um dígito e foi reposicionado para falar com crianças e mães, voltando a crescer dois dígitos. Nas crianças, conduzi a frente digital do Trakinas 3.0, um jogo online transmídia em que as crianças desbloqueavam níveis ao longo do ano com pistas na TV, em revistas e banners, aprovando o trabalho da W3Haus, produtora do jogo. A primeira versão passou de 2 milhões de visitantes.',
        en: "Trakinas had spent five years growing in single digits and was repositioned to speak to both kids and mothers, returning to double-digit growth. For kids, led the digital front of Trakinas 3.0, a transmedia online game where kids unlocked levels throughout the year with clues on TV, in magazines and banners, approving the work of W3Haus, the game's production studio. The first version passed 2 million visitors.",
      },
      {
        pt: 'Nas mães, concebi do zero o Mãe com Filhos: em vez de um blog de leitura passiva, uma régua de engajamento em que cada seção pedia um pouco mais da visitante, de enquetes até o envio das próprias histórias.',
        en: 'For mothers, conceived Mãe com Filhos from scratch: instead of a passive-reading blog, an engagement ladder where each section asked a little more of visitors, from polls to submitting their own stories.',
      },
      {
        pt: 'No Club Social #inconfundível, primeiro projeto do mundo a usar influenciadores como criadores de conteúdo no Twitter, inventei e coloquei no ar um banner que se atualizava sozinho a cada 30 minutos com o tweet mais recente do influenciador em destaque, da solução técnica à operação.',
        en: "On Club Social #inconfundível, the first project in the world to use influencers as content creators on Twitter, invented and shipped a self-updating banner that refreshed every 30 minutes with the featured influencer's latest tweet, from the technical solution to operations.",
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
      pt: "Planejamento estratégico para Oi, GNT e Bob's.",
      en: "Strategic planning for Oi, GNT and Bob's.",
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

export const education: {
  school: string
  course: Bilingual
  dates?: Bilingual
}[] = [
  {
    school: 'Tera',
    course: {
      pt: 'MBA em Liderança e Estratégia de Produtos Digitais',
      en: 'MBA in Digital Product Leadership and Strategy',
    },
    dates: {
      pt: 'fevereiro de 2025 – novembro de 2025',
      en: 'February 2025 – November 2025',
    },
  },
  {
    school: 'TheStarter · Cursos Avançados de UX Design',
    course: {
      pt: 'Psicologia e Gamificação aplicada a UX Design',
      en: 'Psychology and Gamification Applied to UX Design',
    },
    dates: { pt: 'abril de 2026 – maio de 2026', en: 'April 2026 – May 2026' },
  },
  {
    school: 'Tera',
    course: {
      pt: 'Digital Product Leadership, Product Analytics, Liderança e Estratégia de Negócios',
      en: 'Digital Product Leadership, Product Analytics, Leadership and Business Strategy',
    },
  },
  {
    school: 'Product Arena',
    course: {
      pt: 'Pensamento Crítico e Analítico, Growth, Métricas, Plataforma para PMs, AI + NoCode, Product Management',
      en: 'Critical and Analytical Thinking, Growth, Metrics, Platform for PMs, AI + NoCode, Product Management',
    },
  },
  {
    school: 'Pontifícia Universidade Católica do Rio de Janeiro',
    course: {
      pt: 'Bacharelado, Desenho Industrial · Programação Visual',
      en: 'BA, Industrial Design (Visual Communication)',
    },
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
