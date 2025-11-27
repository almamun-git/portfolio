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
  summary: `Full-stack engineer with end-to-end experience across frontend, backend, QA, and support. I build scalable React/Next.js + Django/FastAPI applications and ship impactful features—from AI video generation to incident-tracking systems and secure payment flows—focused on reliability and real user value.`
};

export interface SkillCategory { title: string; items: string[] }
export const skills: SkillCategory[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'React Native','Context API', 'Zustand', 'Redux','Tailwind CSS','Conversational UI'] },
  { title: 'Backend', items: ['Node.js', 'Django/DRF', 'FastAPI', 'Spring Boot', 'REST APIs', 'Python'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'PL/SQL', 'SQLAlchemy'] },
  { title: 'Testing & QA', items: ['Cypress', 'Postman', 'Automated Testing', 'Regression Testing', 'API Testing'] },
  { title: 'Tools & Cloud', items: ['Git/GitHub', 'Jira', 'AWS (S3, CloudFront)', 'Docker', 'CI/CD', 'Vercel', 'Railway'] },
  { title: 'AI & Integrations', items: ['AI Interface Integration', 'Dynamic Variable Mapping (JSON Path)', 'Real-time AI Interaction', 'Third-party AI APIs (ElevenLabs)'] },
  { title: 'Other', items: ['Agile', 'OOP', 'Design Patterns', 'Payment Integration (Stripe)', 'Machine Learning basics (TensorFlow, PyTorch, Scikit-learn)'] }
];

export interface Project { title: string; description: string; tech: string[]; links: { github?: string; demo?: string }; highlight?: string }
export const projects: Project[] = [
  {
    title: 'Automatic Video Generating AI Engine',
    description: 'Production-ready automated video content pipeline. FastAPI workers + React/Vite dashboard orchestrate ideation, scripting, asset sourcing, editing, and rendering—cutting manual video creation time by 90% and enabling daily batch drops with audit trails.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'FastAPI',
      'Uvicorn',
      'Python',
      'Google Gemini API',
      'Pexels API',
      'ElevenLabs API',
      'Shotstack API',
      'Docker',
      'Nginx',
      'Render'
    ],
    links: {
      github: 'https://github.com/almamun-git/automatic-video-generating-ai-engine',
      demo: 'https://autovidai-web.onrender.com'
    },
    highlight: 'AI-orchestrated 5-stage video production'
  },
  {
    title: 'Intelligent Operations Workflow Assistant',
    description: 'Enterprise incident response platform combining FastAPI ingestion services with a Next.js dashboard. Handles thousands of events per minute with sub-second triage, AI-assisted severity scoring, and automated playbooks that shrink MTTR for on-call teams.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'SQLAlchemy',
      'Uvicorn',
      'PostgreSQL',
      'Supabase',
      'OpenAI',
      'Docker',
      'Railway',
      'Vercel'
    ],
    links: {
      github: 'https://github.com/almamun-git/Ops-Assist-AI',
      demo: 'https://ops-assist-ai-frontend.vercel.app'
    },
    highlight: 'AI-powered incident triage'
  },
  {
    title: 'Trello‑inspired kanban task manager',
    description: 'Lightweight, open-source kanban tool with visual boards, lists, and cards for small teams. Built with React + TypeScript + Context API for snappy offline-friendly planning with zero backend.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Context API',
      'Tailwind CSS',
      'DaisyUI',
      'Session Storage',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    links: {
      github: 'https://github.com/almamun-git/to-do',
      demo: 'https://taskmanager-mamun.netlify.app/'
    },
    highlight: 'Visual boards and flexible task organization'
  },
  {
  title: 'File Locker – Secure File Hiding Desktop App',
  description:
    'Desktop application to securely hide and manage files with OTP-based email verification for sign-up and login. Adds instant hide/unhide workflows on top of a MySQL datastore with a Java Swing UI.',
  tech: [
    'Java',
    'Java Swing',
    'MySQL',
    'JDBC',
    'OTP Email Verification'
  ],
  links: {
    github: 'https://github.com/almamun-git/FileLocker'
    // demo: '' // add a demo link here if you have one
  },
  highlight: 'OTP-secured file hiding and management'
}
];

export interface Article { title: string; excerpt?: string; url: string; date?: string; tags?: string[]; source?: string }
// Add your Medium articles here. Update the `url` field to the real Medium link.
export const articles: Article[] = [
  {
    title: 'Software Design Patterns — Factory, Singleton, Builder, Adapter & More',
    excerpt: 'A concise walkthrough of common design patterns with practical examples and UML diagrams: Factory Method, Abstract Factory, Singleton, Builder, Prototype, Adapter, Decorator, and Strategy.',
    url: 'https://medium.com/@aalmamunapu/software-design-pattern-f62ac02e89cc',
    date: 'Mar 26, 2025',
    tags: ['Design Patterns', 'Architecture', 'OOP', 'Object-Oriented Design', 'Backend Development'],
    source: 'Medium'
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
    role: 'Full-Time Frontend & QA Engineer',
    org: 'Goonfol Technologies',
    summary: 'Owned delivery for multi-tenant customer portals—pairing React frontends with Python/Java services and raising release confidence through test automation and performance tuning.',
    details: [
      'Launched 10+ customer-facing modules covering onboarding, billing, and analytics dashboards',
      'Reduced API latency 25% via query tuning and Redis caching while keeping error budgets green',
      'Expanded automated regression coverage by 40% with Cypress, Playwright, and Postman collections'
    ]
  },
  {
    timeframe: '2023 – 2025',
    role: 'Post-Graduate Certificate in Full-Stack Software Development',
    org: 'Lambton College, Toronto',
    summary: 'Intensive Full-Stack Software Development program culminating in a Work-Integrated Learning capstone focused on React/Node SaaS delivery.',
    details: [
      'Led frontend development on the WIL capstone using React, TypeScript, Zustand, and component testing',
      'Integrated Node.js + PostgreSQL services with CI/CD pipelines and cloud deployments on Vercel/Railway',
      'Mentored peers on clean code, accessibility, and developer experience practices'
    ]
  },
  {
    timeframe: 'August – October 2025',
    role: 'React Native Software Engineer Intern',
    org: 'Vibes Meet LLC',
    summary: 'Full-stack mobile + backend engineering for a social video platform—owning streaming reliability, payments, and infrastructure optimization.',
    details: [
      'Developed adaptive video player with real-time captions and multi-bitrate streaming, improving playback reliability by 35%',
      'Architected cloud storage + CDN workflows that reduced media load times by 40% and trimmed storage spend',
      'Integrated Apple Pay, Google Pay, Stripe, and card payments with 99.9% transaction success and detailed analytics dashboards'
    ]
  }
  ,
  {
    timeframe: 'November 2025 – Present',
    role: 'Intermediate Frontend Developer',
    org: 'Futuretalk Inc.',
    summary: 'Frontend developer contributing to an AI-driven learning platform, focusing on conversational user interfaces and real-time voice-enabled experiences.',
    details: [
      'Developing React + Next.js interfaces for AI-powered learning sessions, quizzes, and mastery workflows used by active learners',
      'Integrated ElevenLabs voice APIs with dynamic variable assignment and JSON-path mappings to enable real-time spoken AI interactions'
    ]
  }
];

export const contactCTA = {
  headline: '🚀 Open to Software Engineer roles (Frontend/Full-Stack) in Canada',
  subheadline: 'I love partnering with product and design teams to ship measurable outcomes—clean code, real user empathy, and scalable systems.',
  email: 'almamun.codes@gmail.com',
  linkedin: 'https://linkedin.com/in/almamun-in'
};
