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
    title: 'Automatic Video Generating AI Engine',
    description: 'Automated video content pipeline: FastAPI backend + React/Vite dashboard for end-to-end short-form video generation—from AI-powered ideation and scripting to asset sourcing, programmatic editing, and rendering.',
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
    title: 'Intelligent Operations Workflow Assistant'
,
    description: 'Intelligent incident response platform: FastAPI backend + Next.js dashboard for real-time event ingestion, automatic incident detection, and AI-assisted classification.',
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
    title: 'To-Do List App',
    description: 'A React and TypeScript to-do list application using Context API for global state management and Session Storage for client-side persistence—delivering a responsive, DaisyUI-styled interface for creating, updating, and tracking tasks across a browsing session.',
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
      github: 'https://github.com/almamun-git/to-do'
    },
    highlight: 'Context-driven task state with session-backed persistence'
  },
  {
  title: 'File Locker – Secure File Hiding Desktop App',
  description:
    'Desktop application to securely hide and manage files with OTP-based email verification for sign-up and login. Supports hiding/unhiding files, backed by a MySQL database and a user-friendly Java Swing GUI.',
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
