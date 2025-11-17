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
  summary: `Full‑stack engineer passionate about building products that matter. With experience across frontend, backend, QA, and technical support, I specialize in creating secure, scalable web applications using React, Next.js, TypeScript, Node.js, Python, Django, and FastAPI. I've delivered production-ready features including AI-powered video generation engines, intelligent incident tracking systems, and modern payment integrations—always prioritizing reliability, performance, and real user value.`
};

export interface SkillCategory { title: string; items: string[] }
export const skills: SkillCategory[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Django/DRF', 'FastAPI', 'Spring Boot', 'REST APIs', 'Python'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'PL/SQL', 'SQLAlchemy'] },
  { title: 'Testing & QA', items: ['Cypress', 'Postman', 'Automated Testing', 'Regression Testing', 'API Testing'] },
  { title: 'Tools & Cloud', items: ['Git/GitHub', 'Jira', 'AWS (S3, CloudFront)', 'Docker', 'CI/CD', 'Vercel', 'Railway'] },
  { title: 'Other', items: ['Agile', 'OOP', 'Design Patterns', 'Payment Integration (Stripe)', 'Machine Learning basics (TensorFlow, PyTorch, Scikit-learn)'] }
];

export interface Project { title: string; description: string; tech: string[]; links: { github?: string; demo?: string }; highlight?: string }
export const projects: Project[] = [
  {
    title: 'Automatic Video Generating AI Engine',
    description: 'Production-ready automated video content pipeline: FastAPI backend + React/Vite dashboard orchestrating end-to-end short-form video generation. Integrates AI-powered ideation, script generation, asset sourcing, programmatic editing, and rendering—reducing manual video production time by 90% and enabling scalable content creation workflows.',
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
    description: 'Enterprise-grade incident response platform: FastAPI backend + Next.js dashboard enabling real-time event ingestion, automatic incident detection, and AI-assisted classification. Processes thousands of events per minute with sub-second response times, reducing mean time to resolution (MTTR) through intelligent prioritization and automated triage workflows.',
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
    description: 'Lightweight, open-source task management app with visual boards, lists, and cards for flexible organization. Built with React and TypeScript for planning personal projects or small teams.',
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
    role: 'Full-Time Frontend & QA Engineer',
    org: 'Goonfol Technologies',
    summary: 'Full-time engineer owning frontend delivery and regression QA for customer portals; reduced API latency 25% through caching/query tuning and lifted release confidence with automated test suites.',
    details: [ 'Built scalable endpoints and data models', 'Improved API performance via caching & query tuning', 'Expanded automated regression coverage by 40% with Cypress and Postman suites' ]
  },
  {
    timeframe: '2023 – 2025',
    role: 'Post-Graduate Certificate in Full-Stack Software Development',
    org: 'Lambton College, Toronto',
    summary: 'Completed intensive Post-Graduate Certificate in modern full-stack engineering with hands-on Work-Integrated Learning (WIL) project. Mastered React, Node.js, databases, and cloud deployment through real-world application development.',
    details: [ 'Led frontend development on WIL project using React, TypeScript, and modern state management patterns', 'Collaborated in agile teams to deliver production-ready features with code reviews and CI/CD practices', 'Applied software engineering principles: clean code, testing, version control, and deployment automation' ]
  },
  {
    timeframe: 'August – October 2025',
    role: 'Software Engineer Intern',
    org: 'Vibes Meet LLC',
    summary: 'Full-stack mobile and backend engineering for production social video platform serving active users. Delivered critical features including adaptive video streaming, payment integrations, and cloud infrastructure optimizations.',
    details: [ 'Developed adaptive video player with real-time caption overlays and multi-quality streaming, improving playback reliability by 35%', 'Architected cloud storage and CDN delivery workflows reducing media load times by 40% and cutting infrastructure costs', 'Integrated comprehensive payment solutions (Apple Pay, Google Pay, Stripe) processing transactions with 99.9% success rate' ]
  }
];

export const contactCTA = {
  headline: '🚀 Open to Software Engineer roles (Frontend/Full-Stack) in Canada',
  subheadline: 'Seeking opportunities to build impactful products with modern technologies. Passionate about clean code, user experience, and scalable architecture.',
  email: 'almamun.codes@gmail.com',
  linkedin: 'https://linkedin.com/in/almamun-in'
};
