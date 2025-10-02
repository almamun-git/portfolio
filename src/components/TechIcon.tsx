import type { ComponentType, SVGProps } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiSpringboot,
  SiOpenapiinitiative,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiJira,
  SiDocker,
  SiScrumalliance,
  SiBlueprint,
  SiBookstack,
  SiTensorflow,
  SiExpo,
  SiCoder,
  SiAmazonaws,
  SiOracle,
} from '@icons-pack/react-simple-icons';

// Explicit string-keyed map of icon components. This avoids using dynamic variable
// lookup via bare identifiers and makes the runtime mapping clear and type-safe.
const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  SiReact: SiReact,
  SiNextdotjs: SiNextdotjs,
  SiRedux: SiRedux,
  SiTypescript: SiTypescript,
  SiJavascript: SiJavascript,
  SiTailwindcss: SiTailwindcss,
  SiNodedotjs: SiNodedotjs,
  SiDjango: SiDjango,
  SiSpringboot: SiSpringboot,
  SiOpenapiinitiative: SiOpenapiinitiative,
  SiMysql: SiMysql,
  SiMongodb: SiMongodb,
  SiPostgresql: SiPostgresql,
  SiGithub: SiGithub,
  SiJira: SiJira,
  SiDocker: SiDocker,
  SiScrumalliance: SiScrumalliance,
  SiBlueprint: SiBlueprint,
  SiBookstack: SiBookstack,
  SiTensorflow: SiTensorflow,
  SiExpo: SiExpo,
  SiCoder: SiCoder,
  SiAmazonaws: SiAmazonaws,
  SiOracle: SiOracle,
};

// Map human-readable names to simple-icons export keys
const NAME_MAP: Record<string, string> = {
  'React': 'SiReact',
  'Next.js': 'SiNextdotjs',
  'Redux': 'SiRedux',
  'TypeScript': 'SiTypescript',
  'JavaScript': 'SiJavascript',
  'Tailwind CSS': 'SiTailwindcss',
  'Node.js': 'SiNodedotjs',
  'Django/DRF': 'SiDjango',
  'Spring Boot': 'SiSpringboot',
  'REST APIs': 'SiOpenapiinitiative',
  'MySQL': 'SiMysql',
  'MongoDB': 'SiMongodb',
  'PostgreSQL': 'SiPostgresql',
  'PL/SQL': 'SiOracle',
  'Git/GitHub': 'SiGithub',
  'Jira': 'SiJira',
  'AWS (S3, CloudFront)': 'SiAmazonaws',
  'Docker': 'SiDocker',
  'Agile': 'SiScrumalliance',
  'OOP': 'SiBlueprint',
  'Design Patterns': 'SiBookstack',
  'Machine Learning basics (TensorFlow, PyTorch, Scikit-learn)': 'SiTensorflow',
  'React Native': 'SiReact',
  'Expo': 'SiExpo'
};

interface TechIconProps { 
  name: string; 
  size?: number; 
  className?: string; 
  label?: string;
}

export function TechIcon({ name, size = 18, className = '', label }: TechIconProps) {
  const key = NAME_MAP[name] || NAME_MAP[label || ''] || 'SiCoder';
  const Icon = ICONS[key] || SiCoder;
  
  return (
    <Icon
      aria-label={label || name}
      width={size}
      height={size}
      className={className}
      role="img"
    />
  );
}
