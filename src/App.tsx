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
          <div className="flex flex-col gap-8 md:flex-row md:items-start lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="pt-4 md:pt-8">
                <p className="text-xs uppercase tracking-[0.4em] text-primary-500 dark:text-primary-300 mb-2">Building products with intent</p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance headline-gradient">{profile.name}</h1>
              </div>
              <ul className="flex flex-wrap gap-2 text-xs md:text-sm font-medium text-primary-600 dark:text-primary-300">
                <li className="tag">Full-Stack Engineer – React & Django</li>
                <li className="tag">Frontend Specialist – Next.js & TypeScript</li>
                <li className="tag">Backend Engineer – FastAPI & PostgreSQL</li>
              </ul>
              <AnimatedTitles />
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-balance max-w-2xl">
                {profile.summary}
              </p>
              <ul className="flex flex-wrap gap-3 text-sm">
                <li className="tag inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Toronto, Canada (GMT-5)
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-3 text-sm">
                <a className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-primary-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60" href="mailto:almamun.codes@gmail.com">
                  Let's work together
                  <span aria-hidden>↗</span>
                </a>
                <a className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 px-5 py-2 font-medium text-primary-600 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-neutral-900/40 transition-colors" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-1 text-sm text-primary-600 dark:text-primary-400">
                <a className="hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:underline" href={`mailto:${profile.email}`}>Email</a>
              </div>
            </div>
            <div className="w-full md:w-72 lg:w-80">
              <div className="card p-6 space-y-6 h-full">
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Quick Snapshot</p>
                  <p className="text-xl font-semibold mt-1 text-neutral-900 dark:text-white">Hands-on full-stack delivery.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-primary-50/70 dark:bg-primary-500/10 p-4">
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-300">2+</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Years experience</p>
                  </div>
                  <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4">
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">8+</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Projects shipped</p>
                  </div>
                  <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4">
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">4</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Cloud platforms</p>
                  </div>
                  <div className="rounded-lg bg-primary-50/70 dark:bg-primary-500/10 p-4">
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-300">99.9%</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Payment uptime</p>
                  </div>
                </div>
                <a href="/Resume.pdf" download target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60">
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="summary" subtitle="Summary" title="Professional Snapshot & Value">
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 text-balance">Full-stack engineer blending strong frontend product focus with pragmatic backend design. Post-Graduate Full-Stack Software Development (Lambton College, Toronto) and B.Sc. in Computer Science & Engineering (East West University). Experienced in delivering production-ready features across web & mobile, async media processing pipelines, and cloud deployment strategies with measurable impact.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Delivered payment integrations (Stripe, Apple Pay, Google Pay) with 99.9% transaction success rate and AI-powered systems processing thousands of events per minute.</span></li>
              <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Built adaptive video player & caption pipeline (React Native + Django + Celery) improving playback reliability by 35% and reducing media load times by 40%.</span></li>
              <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Reduced API latency by 25% through query optimization and caching strategies, and expanded automated regression coverage by 40%.</span></li>
              <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span><span>Advocate for clean architecture, type safety, automated testing, and repeatable delivery workflows (CI/CD).</span></li>
            </ul>
          </div>
        </Section>

        <Section id="skills" subtitle="Skills" title="Core Technologies & Competencies">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cat, index) => (
              <div 
                key={cat.title} 
                className="group relative card p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/5" />
                <div className="relative z-10 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-primary-500 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-semibold text-sm tracking-wide uppercase text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{cat.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <TechIcon name={item} size={18} className="shrink-0" />
                      <span className="leading-tight">{item.replace(' basics (TensorFlow, PyTorch, Scikit-learn)','')}</span>
                    </li>
                  ))}
                </ul>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary-500/30 transition-all duration-300" />
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
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-tight text-balance">{contactCTA.headline}</h3>
                {contactCTA.subheadline && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{contactCTA.subheadline}</p>
                )}
              </div>
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
