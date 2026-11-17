export type Language = 'es' | 'en';

type Role = { company: string; role: string; period: string; details: string[]; tech: string };
type Project = { name: string; description: string; tech: string; url?: string; linkLabel?: string };

export const email = "isaacdavidgordilloromero3@gmail.com"
export const portfolio = {
  es: {
    nav: [['#sobre-mi', 'sobre mí'], ['#experiencia', 'experiencia'], ['#proyectos', 'proyectos'], ['#contacto', 'contacto']],
    greeting: '¡hola, mundo!',
    title: 'Desarrollador de software',
    subtitle: 'Backend & Full-Stack · videojuegos · sistemas con intención.',
    intro: 'Construyo productos claros, escalables y con un poco de magia.',
    cta: 'ver proyectos', cv: 'descargar CV', contact: 'hablemos', language: 'EN',
    aboutTitle: 'un poco sobre mí',
    about: 'Desarrollador de software con experiencia en desarrollo backend, aplicaciones web, automatización e integración de servicios. Me gusta transformar problemas complejos en sistemas mantenibles, eficientes y agradables de usar.',
    skillsTitle: 'caja de herramientas',
    skills: [
      ['lenguajes', 'C · C++ · C# · Java · Python · JavaScript · TypeScript · Rust · Kotlin · Go · SQL · Bash'],
      ['frameworks & librerías', '.NET · Spring Boot · Ktor · NestJS · Vue · Nuxt · React · Next.js · Astro · Unity · raylib · PyTorch · scikit-learn'],
      ['datos & almacenamiento', 'PostgreSQL · MySQL · MongoDB · Redis · SQLite'],
      ['infraestructura', 'Git · GitHub · Linux · Docker · Nginx · CMake · Azure · GCP · AWS · Vercel · Netlify · Render'],
      ['IA & sistemas', 'OpenCode · OpenAI Codex · AI Coding Agents · integración de modelos · automatización · gestión de memoria · programación gráfica'],
      ['machine learning', 'Aprendizaje automático · procesamiento de datos · modelos predictivos · redes neuronales']
    ],
    experienceTitle: 'experiencia',
    roles: [
      { company: 'Nullity Studio', role: 'Ingeniero de Software y Líder de Proyectos', period: 'Mayo 2024 — Actualidad', details: ['Desarrollo de sistemas y mecánicas para videojuegos con Unity y C#.', 'Arquitecturas modulares, herramientas internas y componentes reutilizables.', 'Coordinación técnica y optimización de rendimiento, CPU y memoria.'], tech: 'Unity · C#' },
      { company: 'Lecape México', role: 'Programador de Software', period: 'Octubre 2025 — Febrero 2026', details: ['Servicio proxy para integrar Shopify y proveedores de paquetería.', 'Webhooks y procesos concurrentes para integración y logística.', 'Despliegue y operación de aplicaciones en servidores Linux.'], tech: 'Java · Spring Boot · Shopify · Linux' },
      { company: 'Freelancer', role: 'Desarrollador de Software', period: 'Marzo 2022 — Junio 2024', details: ['Videojuegos, generación procedural y sistemas de inventario e IA.', 'Sitios web estáticos y dinámicos, frontend y backend.', 'Patrones de diseño, POO y despliegues cloud.'], tech: 'Unity · C# · Web · Cloud' }
    ] as Role[],
    projectsTitle: 'proyectos seleccionados',
    projects: [
      { name: 'The Foundation Survive', description: 'Juego 3D single-player ambientado en el universo SCP, publicado en Steam e itch.io. Sistemas de inventario, audio, lógica de juego y optimización.', tech: 'Unity · C#', url: 'https://store.steampowered.com/app/4087840/The_Foundation_Survive_Hogar_Artificial/', linkLabel: 'ver en Steam ↗' },
      { name: 'Nullity Studio', description: 'Plataforma para presentar los proyectos del estudio, con arquitectura frontend/backend y caché para un mejor rendimiento.', tech: 'Vue · NestJS · MongoDB', url: 'https://nullitystudio.com/home', linkLabel: 'visitar sitio ↗' },
      { name: 'RMT-Downloader', description: 'Herramienta Python para descargar audio de videos con procesamiento local o remoto mediante yt-dlp.', tech: 'Python', url: 'https://github.com/ImpGamer/Remote-Downloader', linkLabel: 'ver código ↗' },
      { name: 'Lengine 2D', description: 'Motor 2D experimental y juego procedural inspirado en Backrooms con generación de grafos y arquitectura por componentes.', tech: 'C++ · Game Engine', url: 'https://github.com/ImpGamer/2D-engine-Game', linkLabel: 'ver código ↗' },
      { name: 'Pint', description: 'Aplicación de dibujo para navegador inspirada en Paint, con Canvas API y herramientas de figuras y borrado.', tech: 'HTML · CSS · JavaScript', url: 'https://github.com/ImpGamer/paint-web', linkLabel: 'ver código ↗' }
    ] as Project[],
    educationTitle: 'formación, certificaciones & lenguajes',
    education: ['UNAM — FES Cuautitlán · Licenciatura en Informática (en curso)', 'Hybridge · Ingeniería en Ciberseguridad e Infraestructura Tecnológica (en curso)'],
    certifications: ['Microsoft · Cursos y certificaciones técnicas', 'Google · Cursos y certificaciones técnicas', 'Platzi · Desarrollo de software y tecnologías', 'EDteam · Programación y desarrollo de software'],
    languages: 'Español nativo · Inglés B2 · Portugués A1',
    contactTitle: '¿construimos algo genial?', contactText: 'Estoy disponible para conversar sobre software, colaboraciones y nuevos retos.',
    footer: 'Hecho con Astro y mucho cariño.',
  },
  en: {
    nav: [['#about', 'about'], ['#experience', 'experience'], ['#projects', 'projects'], ['#contact', 'contact']],
    greeting: 'hello, world!', title: 'Software developer', subtitle: 'Backend & Full-Stack · games · systems with purpose.', intro: 'I build clear, scalable products with a little bit of magic.', cta: 'see projects', cv: 'download résumé', contact: 'let’s talk', language: 'ES',
    aboutTitle: 'a little about me', about: 'Software developer experienced in backend development, web applications, automation, and service integration. I enjoy turning complex problems into maintainable, efficient, and enjoyable systems.',
    skillsTitle: 'toolbox', skills: [['languages', 'C · C++ · C# · Java · Python · JavaScript · TypeScript · Rust · Kotlin · Go · SQL · Bash'], ['frameworks & libraries', '.NET · Spring Boot · Ktor · NestJS · Vue · Nuxt · React · Next.js · Astro · Unity · raylib · PyTorch · scikit-learn'], ['data & storage', 'PostgreSQL · MySQL · MongoDB · Redis · SQLite'], ['infrastructure', 'Git · GitHub · Linux · Docker · Nginx · CMake · Azure · GCP · AWS · Vercel · Netlify · Render'], ['AI & systems', 'OpenCode · OpenAI Codex · AI Coding Agents · model integration · automation · memory management · graphics programming'], ['machine learning', 'Machine learning · data processing · predictive models · neural networks']],
    experienceTitle: 'experience',
    roles: [
      { company: 'Nullity Studio', role: 'Software Engineer & Project Lead', period: 'May 2024 — Present', details: ['Game systems and gameplay features with Unity and C#.', 'Modular architectures, internal tools, and reusable components.', 'Technical coordination and performance optimization for CPU and memory.'], tech: 'Unity · C#' },
      { company: 'Lecape México', role: 'Software Developer', period: 'October 2025 — February 2026', details: ['Proxy service integrating Shopify and shipping providers.', 'Webhooks and concurrent processes for integration and logistics.', 'Deployment and operation of applications on Linux servers.'], tech: 'Java · Spring Boot · Shopify · Linux' },
      { company: 'Freelance', role: 'Software Developer', period: 'March 2022 — June 2024', details: ['Games, procedural generation, inventory systems, and AI.', 'Static and dynamic web apps across frontend and backend.', 'Design patterns, OOP, and cloud deployment.'], tech: 'Unity · C# · Web · Cloud' }
    ] as Role[],
    projectsTitle: 'selected projects',
    projects: [
      { name: 'The Foundation Survive', description: 'A single-player 3D SCP-universe game, released on Steam and itch.io. Inventory, audio, gameplay, and optimization systems.', tech: 'Unity · C#', url: 'https://store.steampowered.com/app/4087840/The_Foundation_Survive_Hogar_Artificial/', linkLabel: 'view on Steam ↗' },
      { name: 'Nullity Studio', description: 'A platform showcasing the studio’s projects, with a frontend/backend architecture and caching for improved performance.', tech: 'Vue · NestJS · MongoDB', url: 'https://nullitystudio.com/home', linkLabel: 'visit website ↗' },
      { name: 'RMT-Downloader', description: 'A Python tool that downloads video audio with local or remote processing via yt-dlp.', tech: 'Python', url: 'https://github.com/ImpGamer/Remote-Downloader', linkLabel: 'view code ↗' },
      { name: 'Lengine 2D', description: 'An experimental 2D engine and procedural Backrooms-inspired game with graph generation and component architecture.', tech: 'C++ · Game Engine', url: 'https://github.com/ImpGamer/2D-engine-Game', linkLabel: 'view code ↗' },
      { name: 'Pint', description: 'A browser drawing app inspired by Paint, featuring Canvas API shapes and erasing tools.', tech: 'HTML · CSS · JavaScript', url: 'https://github.com/ImpGamer/paint-web', linkLabel: 'view code ↗' }
    ] as Project[],
    educationTitle: 'education, training & languages', education: ['UNAM — FES Cuautitlán · BSc in Computer Science (in progress)', 'Hybridge · BSc in Cybersecurity & Technology Infrastructure Engineering (in progress)'], certifications: ['Microsoft · Technical courses and certifications', 'Google · Technical courses and certifications', 'Platzi · Software development and technology', 'EDteam · Programming and software development'], languages: 'Spanish native · English B2 · Portuguese A1',
    contactTitle: 'shall we build something cool?', contactText: 'I am available to chat about software, collaborations, and new challenges.', footer: 'Made with Astro and lots of care.'
  }
} as const;
