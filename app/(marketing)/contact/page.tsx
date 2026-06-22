import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Romyq project team.",
};

const B = "1px solid var(--border)";

const contacts = [
  {
    alias: "hello@romyq.com",
    label: "General",
    desc: "General inquiries, questions about the project, or anything that does not fit the categories below.",
  },
  {
    alias: "support@romyq.com",
    label: "Support",
    desc: "Bug reports, usage questions, and support requests. Including your OS, Python version, and Romyq version helps.",
  },
  {
    alias: "security@romyq.com",
    label: "Security",
    desc: "Security vulnerability disclosures. Please use this address instead of opening a public GitHub issue. PGP key available on request.",
    highlight: true,
  },
  {
    alias: "opensource@romyq.com",
    label: "Open source",
    desc: "Licensing questions, contribution discussions, or partnership inquiries related to the open-source project.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-10" style={{ borderBottom: B, paddingBottom: "2rem" }}>
        <p className="eyebrow mb-3">Romyq</p>
        <h1
          className="text-[28px] sm:text-[34px] font-semibold mb-3"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          Contact
        </h1>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          For bugs and feature requests, prefer{" "}
          <a
            href="https://github.com/Webrowse/romyq/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "var(--text-2)" }}
          >
            GitHub Issues ↗
          </a>
          . For everything else, use the addresses below.
        </p>
      </div>

      <ul className="space-y-3">
        {contacts.map(({ alias, label, desc, highlight }) => (
          <li
            key={alias}
            className="p-4 rounded-md"
            style={{
              border: highlight
                ? "1px solid rgba(248,113,113,0.25)"
                : B,
              background: highlight
                ? "rgba(248,113,113,0.04)"
                : undefined,
            }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-1.5">
              <a
                href={`mailto:${alias}`}
                className="mono text-[13px] font-semibold underline underline-offset-2"
                style={{ color: highlight ? "var(--danger)" : "var(--accent)" }}
              >
                {alias}
              </a>
              <span className="tag tag-neutral">{label}</span>
              {highlight && (
                <span className="tag tag-red">Security disclosure</span>
              )}
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              {desc}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-8 text-[13px]" style={{ borderTop: B, color: "var(--text-3)" }}>
        <p>
          Response times are best-effort. This is an independent open-source
          project maintained in personal time.
        </p>
        <p className="mt-2">
          For faster responses to common questions, check the{" "}
          <a
            href="https://github.com/Webrowse/romyq/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "var(--text-2)" }}
          >
            GitHub Discussions ↗
          </a>{" "}
          first.
        </p>
      </div>
    </main>
  );
}
