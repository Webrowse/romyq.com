import Link from "next/link";
import { releasesLoader } from "@/lib/source";

export const metadata = {
  title: "Releases",
  description: "Romyq release history and changelogs.",
};

const TAG_STYLES: Record<string, string> = {
  minor: "tag-blue",
  patch: "tag-neutral",
  major: "tag-amber",
  stable: "tag-green",
};

export default function ReleasesPage() {
  const pages = releasesLoader.getPages();

  const sorted = [...pages].sort((a, b) => {
    const av = (a.data as { version?: string }).version ?? "";
    const bv = (b.data as { version?: string }).version ?? "";
    return bv.localeCompare(av, undefined, { numeric: true });
  });

  const latest = sorted[0];

  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="mb-14 reveal">
          <div className="eyebrow mb-4">Releases</div>
          <h1 className="display text-[40px] lg:text-[56px] mb-4">Changelog</h1>
          <p className="text-[16px]" style={{ color: "var(--text-2)" }}>
            Every release of Romyq. MDX-driven — adding a release means adding one file.
          </p>
        </div>

        <div className="space-y-4">
          {sorted.map((page) => {
            const data = page.data as {
              version?: string;
              date?: string;
              tag?: string;
              highlights?: string[];
              title?: string;
            };
            const isLatest = page.slugs.join("/") === latest.slugs.join("/");

            return (
              <Link
                key={page.url}
                href={page.url}
                className="card p-6 flex items-start gap-6 lift block"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="mono text-[18px] font-bold">{data.version}</span>
                    {isLatest && <span className="tag tag-green">Latest</span>}
                    {data.tag && (
                      <span className={`tag ${TAG_STYLES[data.tag] ?? "tag-neutral"}`}>
                        {data.tag}
                      </span>
                    )}
                    {data.date && (
                      <span className="mono text-[12px]" style={{ color: "var(--text-4)" }}>
                        {data.date}
                      </span>
                    )}
                  </div>
                  {data.highlights && data.highlights.length > 0 && (
                    <ul className="space-y-1 mt-3">
                      {data.highlights.slice(0, 4).map((h: string) => (
                        <li key={h} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--text-2)" }}>
                          <span style={{ color: "var(--accent)" }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-1"
                  style={{ color: "var(--text-4)" }}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
