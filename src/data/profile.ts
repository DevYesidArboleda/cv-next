export type Localized = { es: string; en: string }

export const CAREER_START_YEAR = 2018

export const profile = {
  name: "Yesid Banguera",
  role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  focus: { es: "Especialista en VTEX IO, React y Next.js", en: "VTEX IO, React & Next.js specialist" },
  location: "Colombia",
  photo: "/foto.png",
  email: "yesison714@gmail.com",
  phone: "+57 316 211 5964",
  whatsapp: "https://wa.me/573162115964",
  github: "https://github.com/DevYesidArboleda",
  linkedin: "https://www.linkedin.com/in/yesid-banguera-arboleda-042280167/",
  summary: {
    es: "Construyo tiendas e-commerce y aplicaciones web de alto rendimiento. Llevo años trabajando en el punto donde se cruzan el diseño y la ingeniería: interfaces accesibles y fieles al diseño, respaldadas por una arquitectura sólida y mantenible.",
    en: "I build high-performance e-commerce stores and web applications. For years I've worked where design meets engineering: accessible, pixel-accurate interfaces backed by solid, maintainable architecture.",
  },
  about: [
    {
      es: "Mi foco principal es el ecosistema VTEX IO: desde componentes custom en React y personalización del checkout hasta servicios en Node.js con GraphQL, Admin Apps y Pixel Apps para marcas de retail en Latinoamérica.",
      en: "My main focus is the VTEX IO ecosystem: from custom React components and checkout customization to Node.js services with GraphQL, Admin Apps and Pixel Apps for retail brands across Latin America.",
    },
    {
      es: "Antes de especializarme en e-commerce trabajé con Angular, PHP, .NET, Azure y administración de servidores Linux, lo que me da una visión completa del stack y facilita la comunicación con equipos de diseño, backend e infraestructura.",
      en: "Before specializing in e-commerce I worked with Angular, PHP, .NET, Azure and Linux server administration, which gives me a full view of the stack and makes collaborating with design, backend and infrastructure teams easier.",
    },
  ],
  highlights: [
    {
      title: { es: "E-commerce en VTEX IO", en: "VTEX IO e-commerce" },
      body: {
        es: "Home, PDP, PLP, checkout, hooks, Admin y Pixel Apps.",
        en: "Home, PDP, PLP, checkout, hooks, Admin and Pixel Apps.",
      },
    },
    {
      title: { es: "Frontend moderno", en: "Modern frontend" },
      body: {
        es: "React, Next.js y TypeScript con componentes reutilizables.",
        en: "React, Next.js and TypeScript with reusable components.",
      },
    },
    {
      title: { es: "Servicios y APIs", en: "Services & APIs" },
      body: {
        es: "Node.js, GraphQL y REST integrados con plataformas externas.",
        en: "Node.js, GraphQL and REST integrated with external platforms.",
      },
    },
    {
      title: { es: "Rendimiento y accesibilidad", en: "Performance & accessibility" },
      body: {
        es: "Interfaces rápidas, responsivas y fieles al diseño en Figma.",
        en: "Fast, responsive interfaces that stay true to the Figma design.",
      },
    },
  ],
} as const

export type Experience = {
  start: string
  end: string | null
  title: Localized
  company: string
  summary: Localized
  points: Localized[]
  stack: string[]
}

const VTEX_STORE_POINTS: Localized[] = [
  { es: "Creación de tiendas con VTEX IO (Home, PDP, PLP)", en: "Built VTEX IO storefronts (Home, PDP, PLP)" },
  { es: "Desarrollo de componentes custom con React", en: "Developed custom React components" },
  { es: "Personalización del checkout", en: "Customized the checkout" },
]

export const experience: Experience[] = [
  {
    start: "2024",
    end: null,
    title: { es: "Desarrollador VTEX IO", en: "VTEX IO Developer" },
    company: "Balloon Group",
    summary: {
      es: "Desarrollo frontend y de servicios sobre VTEX IO para marcas de retail en México.",
      en: "Frontend and service development on VTEX IO for retail brands in Mexico.",
    },
    points: [
      ...VTEX_STORE_POINTS,
      { es: "Servicios con Node.js, GraphQL y la API de VTEX", en: "Services with Node.js, GraphQL and the VTEX API" },
      { es: "Implementación de hooks de VTEX", en: "Implemented VTEX hooks" },
      { es: "Desarrollo de Admin Apps y Pixel Apps", en: "Built Admin Apps and Pixel Apps" },
    ],
    stack: ["VTEX IO", "React", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    start: "2023",
    end: "2024",
    title: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    company: "Dropi",
    summary: {
      es: "Desarrollo de aplicaciones web con React (Next.js) y Node.js.",
      en: "Web application development with React (Next.js) and Node.js.",
    },
    points: [
      { es: "Creación de aplicaciones web con Next.js", en: "Built web applications with Next.js" },
      { es: "Consumo de APIs REST y GraphQL", en: "Consumed REST and GraphQL APIs" },
      { es: "Componentes reutilizables con React", en: "Reusable React components" },
      { es: "Maquetación web responsive a partir de Figma", en: "Responsive layouts from Figma designs" },
    ],
    stack: ["Next.js", "React", "JavaScript", "CSS", "Figma"],
  },
  {
    start: "2022",
    end: "2023",
    title: { es: "Desarrollador VTEX IO", en: "VTEX IO Developer" },
    company: "Balloon Group",
    summary: {
      es: "Componentes custom con React, desarrollo frontend sobre VTEX IO y maquetación.",
      en: "Custom React components, VTEX IO frontend development and layout.",
    },
    points: [
      ...VTEX_STORE_POINTS,
      { es: "Servicios con Node.js, GraphQL y la API de VTEX", en: "Services with Node.js, GraphQL and the VTEX API" },
      { es: "Desarrollo de Admin Apps y Pixel Apps", en: "Built Admin Apps and Pixel Apps" },
    ],
    stack: ["VTEX IO", "React", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    start: "2022",
    end: "2022",
    title: { es: "Desarrollador VTEX IO", en: "VTEX IO Developer" },
    company: "Xtrategik",
    summary: {
      es: "Desarrollo de tiendas VTEX IO, entre ellas Sportage y Colchones El Dorado.",
      en: "VTEX IO store development, including Sportage and Colchones El Dorado.",
    },
    points: [
      ...VTEX_STORE_POINTS,
      { es: "Servicios con Node.js, GraphQL y la API de VTEX", en: "Services with Node.js, GraphQL and the VTEX API" },
    ],
    stack: ["VTEX IO", "JavaScript", "GraphQL", "HTML", "CSS"],
  },
  {
    start: "2021",
    end: "2022",
    title: { es: "Desarrollador VTEX IO", en: "VTEX IO Developer" },
    company: "Summa Solution",
    summary: {
      es: "Desarrollo de tiendas VTEX IO, entre ellas Día Online (Argentina).",
      en: "VTEX IO store development, including Día Online (Argentina).",
    },
    points: [...VTEX_STORE_POINTS, { es: "Implementación de hooks de VTEX", en: "Implemented VTEX hooks" }],
    stack: ["VTEX IO", "JavaScript", "GraphQL", "HTML", "CSS"],
  },
  {
    start: "2021",
    end: "2021",
    title: { es: "Desarrollador VTEX IO", en: "VTEX IO Developer" },
    company: "Jump Digital",
    summary: {
      es: "Componentes reutilizables y mantenimiento de tiendas VTEX IO.",
      en: "Reusable components and maintenance of VTEX IO stores.",
    },
    points: [
      VTEX_STORE_POINTS[0],
      VTEX_STORE_POINTS[1],
      { es: "Maquetación y estilos CSS", en: "Layout and CSS styling" },
    ],
    stack: ["VTEX IO", "JavaScript", "HTML", "CSS"],
  },
  {
    start: "2021",
    end: "2022",
    title: { es: "Desarrollador de Software", en: "Software Developer" },
    company: "DevbotStudio S.A.S",
    summary: {
      es: "Aplicaciones web con Angular y backend con PHP y .NET.",
      en: "Web applications with Angular and backends with PHP and .NET.",
    },
    points: [
      { es: "Aplicaciones web con Angular", en: "Web applications with Angular" },
      { es: "Backend con PHP y .NET", en: "Backends with PHP and .NET" },
      { es: "Componentes nativos y custom en VTEX IO", en: "Native and custom VTEX IO components" },
    ],
    stack: ["Angular", "PHP", ".NET", "VTEX IO", "JavaScript"],
  },
  {
    start: "2020",
    end: "2021",
    title: { es: "Desarrollador de Software", en: "Software Developer" },
    company: "Intelecto S.A.S",
    summary: {
      es: "Soluciones web a medida con JavaScript y despliegue en Azure.",
      en: "Custom web solutions with JavaScript, deployed on Azure.",
    },
    points: [
      { es: "Desarrollo web con JavaScript", en: "Web development with JavaScript" },
      { es: "Despliegue y gestión de aplicaciones en Azure", en: "Deployed and managed applications on Azure" },
      { es: "Integración de servicios en la nube", en: "Cloud services integration" },
    ],
    stack: ["JavaScript", "Azure", "HTML", "CSS"],
  },
  {
    start: "2018",
    end: "2020",
    title: { es: "Consultor de Sistemas", en: "Systems Consultant" },
    company: "MasterTics S.A.S",
    summary: {
      es: "Sitios en WordPress, servidores Linux (nube y físicos) y bases de datos.",
      en: "WordPress sites, Linux servers (cloud and on-premise) and databases.",
    },
    points: [
      { es: "Sitios web con WordPress", en: "Websites with WordPress" },
      { es: "Creación y mantenimiento de bases de datos MySQL", en: "MySQL database creation and maintenance" },
      { es: "Administración de servidores Linux", en: "Linux server administration" },
    ],
    stack: ["WordPress", "Linux", "MySQL", "JavaScript"],
  },
]

export type Project = {
  /** Used for the live-preview endpoint: /api/preview/<slug> */
  slug: string
  title: string
  company?: string
  country: Localized
  summary: Localized
  url: string
  /** Local fallback shown while (or if) the live capture is unavailable. */
  image: string
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: "maidenform",
    title: "Maidenform",
    company: "Balloon Group",
    country: { es: "México", en: "Mexico" },
    summary: {
      es: "Tienda e-commerce de lencería construida sobre VTEX IO.",
      en: "Lingerie e-commerce store built on VTEX IO.",
    },
    url: "https://www.maidenform.com.mx/",
    image: "/Maidenform.png",
    stack: ["VTEX IO", "TypeScript", "Node.js", "Figma"],
  },
  {
    slug: "sportage",
    title: "Sportage",
    company: "Xtrategik",
    country: { es: "Colombia", en: "Colombia" },
    summary: {
      es: "Tienda e-commerce de artículos deportivos sobre VTEX IO.",
      en: "Sporting goods e-commerce store on VTEX IO.",
    },
    url: "https://www.sportagetienda.com/",
    image: "/Sportage.png",
    stack: ["VTEX IO", "React", "TypeScript", "Node.js"],
  },
  {
    slug: "dia",
    title: "Día Online",
    company: "Summa Solution",
    country: { es: "Argentina", en: "Argentina" },
    summary: {
      es: "Supermercado online de la cadena Día sobre VTEX IO.",
      en: "Online supermarket for the Día chain on VTEX IO.",
    },
    url: "https://diaonline.supermercadosdia.com.ar/",
    image: "/Dia.png",
    stack: ["VTEX IO", "TypeScript", "Tailwind"],
  },
  {
    slug: "berlei",
    title: "Berlei",
    company: "Balloon Group",
    country: { es: "México", en: "Mexico" },
    summary: {
      es: "Tienda e-commerce de moda íntima sobre VTEX IO.",
      en: "Intimate apparel e-commerce store on VTEX IO.",
    },
    url: "https://www.berlei.com.mx/",
    image: "/berlei.png",
    stack: ["VTEX IO", "TypeScript", "Tailwind"],
  },
  {
    slug: "autocolombiana",
    title: "Autocolombiana",
    company: "Legger",
    country: { es: "Colombia", en: "Colombia" },
    summary: {
      es: "E-commerce de vehículos y repuestos sobre VTEX IO.",
      en: "Vehicle and parts e-commerce on VTEX IO.",
    },
    url: "https://www.autocolombiana.com.co/",
    image: "/autocolombiana.png",
    stack: ["VTEX IO", "TypeScript", "Tailwind"],
  },
  {
    slug: "eldorado",
    title: "Colchones El Dorado",
    company: "Xtrategik",
    country: { es: "Colombia", en: "Colombia" },
    summary: {
      es: "Tienda e-commerce de colchones y descanso sobre VTEX IO.",
      en: "Mattress and sleep e-commerce store on VTEX IO.",
    },
    url: "https://www.colchoneseldorado.com/",
    image: "/eldorado.webp",
    stack: ["VTEX IO", "React", "GraphQL"],
  },
  {
    slug: "bmw",
    title: "BMW Colombia",
    // TODO: agencia/empresa con la que se hizo este proyecto
    country: { es: "Colombia", en: "Colombia" },
    summary: {
      es: "Sitio de la marca BMW en Colombia construido sobre VTEX IO.",
      en: "BMW's brand site for Colombia, built on VTEX IO.",
    },
    url: "https://www.bmw.com.co/",
    image: "/bmw.webp",
    stack: ["VTEX IO", "React"],
  },
]

export const skills: { group: Localized; items: string[] }[] = [
  {
    group: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Angular", "Vue.js", "Astro", "HTML", "CSS"],
  },
  {
    group: { es: "E-commerce", en: "E-commerce" },
    items: ["VTEX IO", "VTEX Checkout", "Admin Apps", "Pixel Apps", "WordPress"],
  },
  {
    group: { es: "Backend y datos", en: "Backend & data" },
    items: ["Node.js", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "MariaDB", "Oracle", "PHP", ".NET", "Java", "Python"],
  },
  {
    group: { es: "Cloud y herramientas", en: "Cloud & tooling" },
    items: ["AWS", "Azure", "Docker", "Linux", "Git", "Figma", "VS Code"],
  },
]

export const PROJECT_COUNT = 35

export type JourneyStop = {
  year: Localized
  where: string
  title: Localized
  body: Localized
  tags: string[]
}

/** Copy for the scroll-driven career flight — one stop per island, in order. */
export const journey: JourneyStop[] = [
  {
    year: { es: "2018", en: "2018" },
    where: "MasterTics",
    title: { es: "Empecé por la infraestructura.", en: "I started with infrastructure." },
    body: {
      es: "Servidores Linux, bases de datos y sitios en WordPress: entender cómo corre todo por debajo.",
      en: "Linux servers, databases and WordPress sites: learning how everything runs underneath.",
    },
    tags: ["Linux", "MySQL", "WordPress"],
  },
  {
    year: { es: "2020", en: "2020" },
    where: "Intelecto · DevbotStudio",
    title: { es: "Software a medida, de punta a punta.", en: "Custom software, end to end." },
    body: {
      es: "Aplicaciones con Angular, backends en PHP y .NET, y despliegues en Azure.",
      en: "Angular applications, PHP and .NET backends, and deployments on Azure.",
    },
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    year: { es: "2021", en: "2021" },
    where: "Jump Digital · Summa · Xtrategik",
    title: { es: "Me especialicé en e-commerce.", en: "I specialized in e-commerce." },
    body: {
      es: "Tiendas VTEX IO para marcas de Colombia y Argentina, como Sportage y Día Online.",
      en: "VTEX IO stores for brands in Colombia and Argentina, such as Sportage and Día Online.",
    },
    tags: ["VTEX IO", "React", "GraphQL"],
  },
  {
    year: { es: "2023", en: "2023" },
    where: "Dropi",
    title: { es: "Aplicaciones web con Next.js.", en: "Web applications with Next.js." },
    body: {
      es: "Componentes reutilizables, APIs REST y GraphQL, y maquetación fiel al diseño en Figma.",
      en: "Reusable components, REST and GraphQL APIs, and layouts true to the Figma design.",
    },
    tags: ["Next.js", "React", "Figma"],
  },
  {
    year: { es: "Hoy", en: "Today" },
    where: "Balloon Group",
    title: { es: `+${PROJECT_COUNT} proyectos entregados.`, en: `${PROJECT_COUNT}+ projects delivered.` },
    body: {
      es: "VTEX IO de punta a punta para retail en México: checkout, servicios en Node.js, Admin Apps y Pixel Apps.",
      en: "End-to-end VTEX IO for retail in Mexico: checkout, Node.js services, Admin Apps and Pixel Apps.",
    },
    tags: ["VTEX IO", "Node.js", "TypeScript"],
  },
]
