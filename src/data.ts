// Central structured data for portfolio sections
export const profile = {
  name: 'Abdullah Al Mamun Apu',
  role: 'Full-Stack Engineer | Frontend, QA & Payment Integration Specialist',
  location: 'Toronto, ON, Canada',
  email: 'almamun.codes@gmail.com',
  links: {
    github: 'https://github.com/almamun-git',
    linkedin: 'https://linkedin.com/in/almamun-in',
    portfolio: 'https://mamunapu.tech'
  },
  summary: `Full-stack engineer with a strong foundation in frontend development, quality assurance, and technical support. I hold a Post-Graduate Certificate in Full-Stack Software Development from Lambton College, Toronto, and a B.Sc. in Computer Science & Engineering from East West University, Dhaka.

My recent work focuses on integrating secure and seamless payment systems using Stripe, Apple Pay, Google Pay, and Flutterwave, delivering smooth multi-currency transaction experiences for web and mobile users. On the frontend, I build modern, responsive interfaces with React, Next.js, and TypeScript, ensuring performance and accessibility.

Before moving into full-stack development, I gained hands-on experience as a QA Engineer, where I tested and validated complex user flows to maintain high product reliability, and as a Technical Support Specialist, where I developed strong diagnostic and communication skills that help me bridge technical and user perspectives.

I'm passionate about crafting clean, scalable, and maintainable systems that provide real value to both users and teams.`
};

export interface SkillCategory { title: string; items: string[] }
export const skills: SkillCategory[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Django/DRF', 'Spring Boot', 'REST APIs'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'PL/SQL'] },
  { title: 'Tools & Cloud', items: ['Git/GitHub', 'Jira', 'AWS (S3, CloudFront)', 'Docker'] },
  { title: 'Other', items: ['Agile', 'OOP', 'Design Patterns', 'Machine Learning basics (TensorFlow, PyTorch, Scikit-learn)'] }
];

export interface Project { title: string; description: string; tech: string[]; links: { github?: string; demo?: string }; highlight?: string }
export const projects: Project[] = [
  {
    title: 'E-Commerce ShopContext',
    description: 'React + Context API shop with dynamic cart management, product filtering, and state persistence.',
    tech: ['React', 'Context API', 'TypeScript'],
    links: { github: '#', demo: '#' },
  highlight: 'Dynamic cart & filtering'
  },
  {
    title: 'Trello-style Task Board',
    description: 'Drag-and-drop Kanban board with CRUD tasks, column re-ordering, and persistence layer.',
    tech: ['React', 'DnD'],
    links: { github: '#', demo: '#' },
  highlight: 'Drag-and-drop productivity'
  },
  {
    title: 'Captions Backend',
    description: 'Django + Celery pipeline for Whisper-based automatic media transcription & caption generation.',
    tech: ['Django', 'Celery', 'Redis', 'Whisper'],
    links: { github: '#'},
  highlight: 'Async caption generation'
  },
  {
    title: 'Adaptive Video Player (Mobile)',
    description: 'React Native + Expo adaptive video player with multi-quality selection and caption support.',
    tech: ['React Native', 'Expo'],
    links: { github: '#'},
  highlight: 'Multi-quality & captions'
  }
];

export interface ExperienceItem { timeframe: string; role: string; org: string; summary: string; details?: string[] }
export const experience: ExperienceItem[] = [
  {
    timeframe: '2016 – 2021',
    role: 'B.Sc. in Computer Science & Engineering',
    org: 'East West University',
    summary: 'Undergraduate degree focused on core CS fundamentals and software engineering.',
    details: [ 'Core CS: Data Structures, Algorithms, DBMS, OS', 'Capstone project applying full-stack development', 'Active in programming contests & study groups' ]
  },
  {
    timeframe: '2021 – 2023',
    role: 'Software Developer',
    org: 'Goonfol Technologies',
    summary: 'Developed web portals and REST APIs; optimized backend performance.',
    details: [ 'Built scalable endpoints and data models', 'Improved API performance via caching & query tuning' ]
  },
  {
    timeframe: '2023 – 2025',
    role: 'Post-Graduate Certificate in Full-Stack Software Development',
    org: 'Lambton College, Toronto',
    summary: 'Completed Post-Graduate Certificate focused on modern full-stack engineering with a hands-on WIL project.',
    details: [ 'Frontend Developer on WIL project', 'Applied modern React patterns and state management' ]
  },
  {
    timeframe: 'August – October 2025',
    role: 'Software Engineer Intern',
    org: 'Vibes Meet LLC',
    summary: 'Mobile + backend engineering for social video platform.',
    details: [ 'Developed adaptive video player with real-time caption overlays and multi-quality streaming', 'Architected cloud storage and CDN delivery workflows for optimal media performance', 'Integrated comprehensive payment solutions including Apple Pay, Google Pay, card payments, and Stripe payment links' ]
  }
];

export const contactCTA = {
  headline: '🚀 Open to Software Engineer roles (Frontend/Full-Stack) in Canada',
  email: 'almamun.codes@gmail.com',
  linkedin: 'https://linkedin.com/in/almamun-in'
};
