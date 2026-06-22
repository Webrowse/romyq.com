"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/docs",     label: "Docs" },
  { href: "/releases", label: "Releases" },
  { href: "/roadmap",  label: "Roadmap" },
  { href: "/about",    label: "About" },
  { href: "/sponsor",  label: "Sponsor" },
  { href: "/contact",  label: "Contact" },
];

function RomyqLogo() {
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded flex-shrink-0"
      style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M2 11L7 2L12 11L7 8L2 11Z" fill="#052e16" />
      </svg>
    </div>
  );
}

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Romyq home">
          <RomyqLogo />
          <span className="mono font-semibold text-[14px]" style={{ color: "var(--text)" }}>
            romyq
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[13px] rounded-md transition-colors"
              style={{
                color: isActive(link.href) ? "var(--text)" : "var(--text-2)",
                background: isActive(link.href) ? "var(--bg-inset)" : undefined,
                fontWeight: isActive(link.href) ? 500 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* PyPI */}
          <a
            href="https://pypi.org/project/romyq/"
            target="_blank"
            rel="noopener noreferrer"
            title="Romyq on PyPI"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded text-[12px] mono"
            style={{
              color: "var(--text-3)",
              border: "1px solid var(--border-strong)",
            }}
          >
            PyPI
          </a>

          {/* GitHub + Star */}
          <a
            href="https://github.com/Webrowse/romyq"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded text-[13px] font-medium"
            style={{
              color: "var(--text-2)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <GitHubIcon size={13} />
            <span>Star</span>
            <StarIcon />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded"
            style={{ color: "var(--text-2)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M2 5h12M2 8h12M2 11h12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)" }} className="lg:hidden">
          <nav
            className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-0.5 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-md"
                style={{
                  color: isActive(link.href) ? "var(--text)" : "var(--text-2)",
                  background: isActive(link.href) ? "var(--bg-inset)" : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} className="mt-1 pt-1 flex flex-col gap-0.5">
              <a
                href="https://github.com/Webrowse/romyq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm"
                style={{ color: "var(--text-2)" }}
              >
                <GitHubIcon size={14} />
                Star on GitHub
              </a>
              <a
                href="https://pypi.org/project/romyq/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm mono"
                style={{ color: "var(--text-3)" }}
              >
                PyPI ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
