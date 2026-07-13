import Link from "next/link";

const sections = [
  {
    title: "Documentation",
    links: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/lifecycle", label: "Lifecycle" },
      { href: "/docs/commands", label: "Commands" },
      { href: "/docs/faq", label: "FAQ" },
    ],
  },
  {
    title: "Project",
    links: [
      { href: "/roadmap", label: "Roadmap" },
      { href: "/releases", label: "Releases" },
      { href: "/about", label: "About" },
      { href: "/sponsor", label: "Sponsor" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "External",
    links: [
      { href: "https://github.com/Webrowse/romyq", label: "GitHub", external: true },
      { href: "https://pypi.org/project/romyq/", label: "PyPI", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-3"
            >
              <div
                className="flex h-5 w-5 items-center justify-center rounded flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
              >
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M2 11L7 2L12 11L7 8L2 11Z" fill="#052e16" />
                </svg>
              </div>
              <span className="mono font-semibold text-[13px]" style={{ color: "var(--text)" }}>
                romyq
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed mb-3" style={{ color: "var(--text-3)" }}>
              Software lifecycle management for AI-assisted development.
            </p>
            <p className="text-[12px] mono" style={{ color: "var(--text-4)" }}>
              MIT License · v0.11.0
            </p>
          </div>

          {/* Link groups */}
          {sections.map((section) => (
            <div key={section.title}>
              <div className="eyebrow mb-3">{section.title}</div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] link-quiet"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] link-quiet"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between gap-3 pt-6 text-[12px]"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-4)" }}
        >
          <div className="mono">© 2025 Romyq contributors · MIT License</div>
          <div className="mono flex gap-4">
            <span>No telemetry</span>
            <span>·</span>
            <span>No cloud</span>
            <span>·</span>
            <span>Runs locally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
