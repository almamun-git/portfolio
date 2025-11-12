import './index.css';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { TechIcon } from './components/TechIcon';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { profile, skills, experience, contactCTA } from './data';
import { Suspense, lazy } from 'react';
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid').then(m => ({ default: m.ProjectsGrid })));
import { ContactForm } from './components/ContactForm';
import { AnimatedTitles } from './components/AnimatedTitles';


function App() {
  return (
    <div className="font-sans" id="home">
      <Header />
      <main id="main" className="space-y-32 pb-32 mt-4">
        <Section id="about">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance headline-gradient">{profile.name}</h1>
              <AnimatedTitles />
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-balance">{profile.summary}</p>
              <ul className="flex flex-wrap gap-3 text-sm">
                <li className="tag">Toronto, Canada</li>
                <li className="tag">React / TypeScript</li>
                <li className="tag">Django</li>
                <li className="tag">Cloud & Scalability</li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-2 text-sm">
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href={profile.links.portfolio} target="_blank" rel="noreferrer">Website</a>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href={`mailto:${profile.email}`}>Email</a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="summary" subtitle="Summary" title="Professional Snapshot & Value">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3 md:col-span-2">
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 text-balance">Full-stack engineer blending strong frontend product focus with pragmatic backend design. Post-Graduate Full-Stack Software Development (Lambton College) and B.Sc. in Computer Science & Engineering (East West University). Experienced in delivering end-to-end features across web & mobile, async media processing pipelines, and cloud deployment strategies.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Built adaptive video player & caption pipeline (React Native + Django + Celery + cloud storage).</span></li>
                <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Improved backend performance through query optimization and caching strategies.</span></li>
                <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Advocate for clean architecture, type safety, and repeatable delivery workflows (CI/CD).</span></li>
              </ul>
            </div>
            <div className="card p-5 space-y-4 self-start">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-700 dark:text-neutral-300">Currently Focused</h3>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                <li>Building scalable media and payment services</li>
                <li>Exploring advanced React and Next.js patterns</li>
                <li>Enhancing observability, performance, and reliability</li>
                <li>Automating developer workflows for faster, safer delivery</li>
              </ul>
              <a href="/resume.pdf" className="inline-flex items-center justify-center w-full rounded-md bg-primary-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">Resume (PDF)</a>
            </div>
          </div>
        </Section>

        <Section id="skills" subtitle="Skills" title="Core Technologies & Competencies">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map(cat => (
              <div key={cat.title} className="card p-5 flex flex-col gap-4">
                <h3 className="font-semibold text-sm tracking-wide uppercase text-neutral-700 dark:text-neutral-300">{cat.title}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      <TechIcon name={item} size={18} className="shrink-0" />
                      <span className="leading-tight">{item.replace(' basics (TensorFlow, PyTorch, Scikit-learn)','')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" subtitle="Projects" title="Selected Work">
          <ErrorBoundary>
            <Suspense fallback={<p className="text-sm text-neutral-500">Loading projects…</p>}>
              <ProjectsGrid />
            </Suspense>
          </ErrorBoundary>
        </Section>

        <Section id="experience" subtitle="Experience" title="Professional Timeline">
          <Timeline items={experience} />
        </Section>

        <Section id="contact" subtitle="Contact" title="Let's Connect">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="card p-8 flex flex-col items-start gap-6">
              <h3 className="text-xl font-semibold leading-tight text-balance">{contactCTA.headline}</h3>
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${contactCTA.email}`} className="inline-flex items-center rounded-md bg-primary-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">Email Me</a>
                <a href={contactCTA.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-primary-600/40 text-primary-600 dark:text-primary-400 px-4 py-2 text-sm font-medium hover:bg-primary-50 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40">LinkedIn</a>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">Prefer direct email? Form opens your mail client.</p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
