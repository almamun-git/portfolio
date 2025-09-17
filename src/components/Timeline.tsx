import type { ExperienceItem } from '../data';

export function Timeline({ items }: { items: ExperienceItem[] }) {
  const ordered = [...items].reverse(); // show latest first
  return (
    <ol className="relative ml-4 pl-6">
      <span aria-hidden className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary-500 via-primary-500/30 to-transparent" />
      {ordered.map((item, idx) => {
        const number = ordered.length - idx; // descending numbers
        return (
        <li key={item.timeframe + item.role} className="relative mb-10 group">
            <div className="absolute -left-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-xs font-semibold ring-4 ring-white dark:ring-neutral-950 shadow group-hover:scale-110 transition-transform" aria-label={`Timeline position ${number} of ${ordered.length} (most recent first)`}>{number}</div>
            <div className="pl-10">
              <h3 className="font-semibold leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.timeframe} • {item.role} @ {item.org}</h3>
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-400">{item.summary}</p>
              {item.details && (
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.details.map((d,i)=><li key={i}>{d}</li>)}
                </ul>
              )}
            </div>
        </li>);
      })}
    </ol>
  );
}
