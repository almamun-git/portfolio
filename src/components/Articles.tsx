import { ArticleCard } from './ArticleCard';
import { articles } from '../data';

export function Articles() {
  if (!articles || articles.length === 0) {
    return <p className="text-sm text-neutral-500">No articles yet — check back soon.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.url} article={a} />
      ))}
    </div>
  );
}
