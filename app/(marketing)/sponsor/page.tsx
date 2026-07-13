import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor",
  description:
    "Support Romyq development. Romyq is an independent open-source project with no corporate backing.",
};

const B = "1px solid var(--border)";

export default function SponsorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-10" style={{ borderBottom: B, paddingBottom: "2rem" }}>
        <p className="eyebrow mb-3">Support the project</p>
        <h1
          className="text-[28px] sm:text-[34px] font-semibold mb-3"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          Sponsor Romyq
        </h1>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          Romyq is an independent open-source project. No company backs it. No
          venture capital funds it. Development time, testing infrastructure, and
          ongoing maintenance come out of the developer&apos;s time.
        </p>
      </div>

      <section className="mb-10">
        <h2
          className="text-[16px] font-semibold mb-4"
          style={{ color: "var(--text)" }}
        >
          Current status
        </h2>
        <dl
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-md"
          style={{ border: B, background: "var(--bg-subtle)" }}
        >
          {[
            ["Version", "v0.11.0"],
            ["Status", "Active"],
            ["Funding", "Unfunded"],
            ["License", "MIT"],
          ].map(([label, value]) => (
            <div key={label as string}>
              <dt className="eyebrow mb-1">{label}</dt>
              <dd className="mono text-[13px]" style={{ color: "var(--text)" }}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-10">
        <h2
          className="text-[16px] font-semibold mb-4"
          style={{ color: "var(--text)" }}
        >
          Why sponsorship matters
        </h2>
        <div className="text-[14px] leading-relaxed space-y-3" style={{ color: "var(--text-2)" }}>
          <p>
            Romyq is MIT licensed and will remain free. Sponsorship does not
            unlock features or change the license. It supports:
          </p>
          <ul className="space-y-2 pl-4">
            {[
              "Development time — the project is maintained in personal time",
              "Better documentation — the current docs need more depth and examples",
              "Infrastructure — testing, CI, domain hosting",
              "Faster releases — more time spent on the project means more frequent improvements",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span style={{ color: "var(--accent)" }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Romyq will not become a SaaS, will not add telemetry, and will not
            restrict features to paid tiers. These are design commitments, not
            temporary policies.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2
          className="text-[16px] font-semibold mb-4"
          style={{ color: "var(--text)" }}
        >
          How to support
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="https://github.com/sponsors/Webrowse"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-md text-[13px]"
            style={{ border: B }}
          >
            <div className="font-semibold mb-1" style={{ color: "var(--text)" }}>
              GitHub Sponsors
            </div>
            <div style={{ color: "var(--text-3)" }}>
              Recurring monthly or one-time sponsorship
            </div>
            <div className="mt-3">
              <iframe
                src="https://github.com/sponsors/Webrowse/button"
                title="Sponsor Webrowse"
                height="32"
                width="114"
                style={{ border: 0, borderRadius: 6 }}
              />
            </div>
          </a>
          <div
            className="block p-4 rounded-md text-[13px]"
            style={{ border: B }}
          >
            <div className="font-semibold mb-1" style={{ color: "var(--text)" }}>
              Direct payment
            </div>
            <div style={{ color: "var(--text-3)" }}>
              Razorpay link coming soon
            </div>
            <div className="mt-3 mono text-[11px]" style={{ color: "var(--text-4)" }}>
              Until then, GitHub Sponsors is the way to contribute
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2
          className="text-[16px] font-semibold mb-4"
          style={{ color: "var(--text)" }}
        >
          Other ways to help
        </h2>
        <ul className="space-y-2 text-[14px]" style={{ color: "var(--text-2)" }}>
          {[
            "Report bugs on GitHub — actionable bug reports are valuable",
            "Improve documentation — open a PR with corrections or additions",
            "Share Romyq with developers who might find it useful",
            "Open GitHub Discussions with feedback or use cases",
          ].map((item) => (
            <li key={item} className="flex gap-2.5">
              <span style={{ color: "var(--text-4)" }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
