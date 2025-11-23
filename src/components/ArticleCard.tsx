import type { Article } from '../data';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="group relative card p-5 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-500/5 via-primary-500/0 to-primary-500/10" />
      <div className="relative z-10 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{article.title}</h3>
          {article.source && (
            <span className="tag text-xs">{article.source}</span>
          )}
        </div>
        {article.excerpt && <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{article.excerpt}</p>}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{article.date}</div>
          <a href={article.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
            Read on {article.source || 'link'}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary-500/40" />
    </div>
  );
}
