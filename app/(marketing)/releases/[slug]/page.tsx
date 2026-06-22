import { notFound } from "next/navigation";
import Link from "next/link";
import { releasesLoader } from "@/lib/source";

export async function generateStaticParams() {
  return releasesLoader.getPages().map((page) => ({
    slug: page.slugs.join("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = releasesLoader.getPage([slug]);
  if (!page) return {};
  const data = page.data as { version?: string };
  return {
    title: `Romyq ${data.version ?? slug}`,
    description: `Release notes for Romyq ${data.version ?? slug}.`,
  };
}

const TAG_STYLES: Record<string, string> = {
  minor: "tag-blue",
  patch: "tag-neutral",
  major: "tag-amber",
  stable: "tag-green",
};

export default async function ReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = releasesLoader.getPage([slug]);
  if (!page) notFound();

  const data = page.data as {
    version?: string;
    date?: string;
    tag?: string;
    highlights?: string[];
  };

  const MDX = page.data.body;

  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="mb-10">
          <Link
            href="/releases"
            className="flex items-center gap-2 text-[13px] mb-8 transition-colors hover:text-white"
            style={{ color: "var(--text-3)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            All Releases
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="display text-[40px] lg:text-[52px]">
              v{data.version}
            </h1>
            {data.tag && (
              <span className={`tag ${TAG_STYLES[data.tag] ?? "tag-neutral"}`}>
                {data.tag}
              </span>
            )}
          </div>

          {data.date && (
            <div className="mono text-[13px] mb-6" style={{ color: "var(--text-4)" }}>
              Released {data.date}
            </div>
          )}

          {data.highlights && data.highlights.length > 0 && (
            <div className="card p-5 mb-10">
              <div className="eyebrow mb-3">Highlights</div>
              <ul className="space-y-2">
                {data.highlights.map((h: string) => (
                  <li key={h} className="flex items-center gap-2 text-[14px]">
                    <span style={{ color: "var(--accent)" }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-sm max-w-none prose-headings:font-mono prose-headings:tracking-tight prose-a:text-emerald-400 prose-code:text-emerald-300 prose-pre:bg-transparent prose-pre:p-0">
          <MDX />
        </div>

        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
          <Link
            href="/releases"
            className="flex items-center gap-2 text-[13px] transition-colors hover:text-white"
            style={{ color: "var(--text-3)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            All Releases
          </Link>
          <div className="mono text-[12px] p-3 rounded-md" style={{ background: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--text-3)" }}>
            <span>$ </span>
            <span style={{ color: "var(--text-2)" }}>pip install romyq=={data.version}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
