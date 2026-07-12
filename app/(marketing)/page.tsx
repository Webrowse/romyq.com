import Link from "next/link";
import { InstallPicker } from "@/components/install-picker";

export const metadata = {
  title: "Romyq — Software Lifecycle Management",
  description:
    "Open-source software lifecycle management for AI-assisted development. Local-first, terminal-native. brew install webrowse/street/romyq",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Romyq",
  description:
    "Open-source software lifecycle management for AI-assisted development.",
  url: "https://romyq.com",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS, Windows",
  softwareVersion: "0.10.3",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  license: "https://opensource.org/licenses/MIT",
  downloadUrl: "https://pypi.org/project/romyq/",
  codeRepository: "https://github.com/Webrowse/romyq",
};

const B = "1px solid var(--border)";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Facts />
        <WhatIsRomyq />
        <Comparison />
        <Implemented />
        <Install />
      </main>
    </>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="py-16 lg:py-20" style={{ borderBottom: B }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Open source · local-first · v0.10.3</p>

          <h1
            className="text-[28px] sm:text-[36px] font-semibold leading-tight mb-4"
            style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
          >
            Software lifecycle management
            <br className="hidden sm:block" /> for AI-assisted development.
          </h1>

          <p
            className="text-[16px] leading-relaxed mb-8 max-w-2xl"
            style={{ color: "var(--text-2)" }}
          >
            Romyq turns software ideas into structured lifecycles with phases,
            governance, readiness tracking, and project memory. Runs locally.
            No cloud. No telemetry.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link href="/docs/getting-started" className="btn-primary">
              Get Started
            </Link>
            <Link href="/docs" className="btn-secondary">
              Documentation
            </Link>
            <a
              href="https://github.com/Webrowse/romyq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
          </div>

          <InstallPicker variant="hero" />
        </div>
      </div>
    </section>
  );
}

/* ─── Facts bar ─── */
function Facts() {
  const facts = [
    { label: "Version", value: "v0.10.3" },
    { label: "Tests", value: "1,500+" },
    { label: "License", value: "MIT" },
    { label: "Cloud dependency", value: "None" },
    { label: "Telemetry", value: "None" },
    { label: "Runs", value: "Locally" },
  ];

  return (
    <section className="py-5" style={{ borderBottom: B }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <dl className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12">
          {facts.map(({ label, value }) => (
            <div key={label}>
              <dt className="eyebrow mb-1">{label}</dt>
              <dd className="mono text-[13px]" style={{ color: "var(--text)" }}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── What is Romyq ─── */
function WhatIsRomyq() {
  const concepts = [
    {
      term: "Mission",
      def: "The definition of what a project should accomplish. Every phase and task is evaluated against the mission.",
    },
    {
      term: "Lifecycle",
      def: "Eight ordered stages from intent to verified completion. Projects advance through stages in sequence.",
    },
    {
      term: "Governance",
      def: "Rules defined in a project constitution, enforced before execution. Violations trigger replanning.",
    },
    {
      term: "Memory",
      def: "Persistent state in .romyq/: task history, knowledge base, execution memory, rules, decisions, capabilities, and lifecycle data. Human-readable JSON.",
    },
    {
      term: "Readiness",
      def: "A continuous score derived from phase completion, capability coverage, done criteria, and governance state.",
    },
    {
      term: "Recommendations",
      def: "After each task Romyq emits Continue, Pause, Review, or Stop based on current project state. The operator decides.",
    },
  ];

  return (
    <section className="py-14 lg:py-16" style={{ borderBottom: B }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          className="text-[22px] font-semibold mb-3"
          style={{ color: "var(--text)" }}
        >
          What is Romyq?
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-10 max-w-2xl"
          style={{ color: "var(--text-2)" }}
        >
          Romyq is a terminal-based software lifecycle management system. It
          coordinates between a planning provider and an execution provider to
          move a software project from idea to working code — structured by
          phases, governed by rules, and tracked by readiness. All state lives
          locally in{" "}
          <code>.romyq/</code> within your project directory.
        </p>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {concepts.map(({ term, def }) => (
            <div
              key={term}
              className="p-4 rounded-md"
              style={{ background: "var(--bg-subtle)", border: B }}
            >
              <dt
                className="mono text-[12px] font-semibold mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                {term}
              </dt>
              <dd className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                {def}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── Comparison ─── */
function Comparison() {
  const rows = [
    ["Scope", "Individual task", "Full project lifecycle"],
    ["State", "Stateless", "Stateful across sessions"],
    ["Tracking", "Nothing persisted", "Phases, capabilities, readiness"],
    ["Governance", "None", "Constitution-based rule enforcement"],
    ["Memory", "Context window only", "Persistent state in .romyq/ across sessions"],
    ["Stopping signal", "None", "Continue / Pause / Review / Stop"],
    ["Execution model", "Generates code directly", "Coordinates planning + execution providers"],
    ["Cloud", "Usually required", "None — runs locally"],
    ["Telemetry", "Often included", "None"],
  ];

  return (
    <section className="py-14 lg:py-16" style={{ borderBottom: B }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          className="text-[22px] font-semibold mb-3"
          style={{ color: "var(--text)" }}
        >
          How Romyq differs from AI coding assistants
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-8 max-w-2xl"
          style={{ color: "var(--text-2)" }}
        >
          AI coding assistants are task-oriented and stateless. Romyq is
          project-oriented and stateful. It tracks what phase the project is
          in, what rules apply, what capabilities are missing, and whether the
          project is actually ready to ship.
        </p>

        <div className="overflow-x-auto rounded-md" style={{ border: B }}>
          <table
            className="w-full text-[13px]"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: B,
                  background: "var(--bg-subtle)",
                }}
              >
                <th
                  className="text-left px-4 py-2.5 font-medium"
                  style={{ color: "var(--text-3)", width: "24%" }}
                >
                  Dimension
                </th>
                <th
                  className="text-left px-4 py-2.5 font-medium"
                  style={{ color: "var(--text-3)", width: "38%" }}
                >
                  AI coding assistant
                </th>
                <th
                  className="text-left px-4 py-2.5 font-medium"
                  style={{ color: "var(--text-3)", width: "38%" }}
                >
                  Romyq
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([dim, left, right], i) => (
                <tr
                  key={dim}
                  style={{ borderBottom: i < rows.length - 1 ? B : undefined }}
                >
                  <td
                    className="px-4 py-2.5 mono"
                    style={{ color: "var(--text-4)" }}
                  >
                    {dim}
                  </td>
                  <td className="px-4 py-2.5" style={{ color: "var(--text-3)" }}>
                    {left}
                  </td>
                  <td className="px-4 py-2.5" style={{ color: "var(--text-2)" }}>
                    {right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── Implemented today ─── */
function Implemented() {
  const items = [
    {
      feature: "Lifecycle generation",
      detail: "8-stage lifecycle from mission definition to verified completion.",
    },
    {
      feature: "Complexity profiles",
      detail: "Basic (3 phases), Intermediate (5 phases), Advanced (7 phases).",
    },
    {
      feature: "Project memory",
      detail: "Repository, execution history, knowledge, and constitution layers.",
    },
    {
      feature: "Governance rules",
      detail: "Constitution enforcement. Violations trigger replanning, not failures.",
    },
    {
      feature: "Readiness scoring",
      detail: "Weighted aggregate of phase completion, capabilities, and done criteria.",
    },
    {
      feature: "Recommendation engine",
      detail: "Continue, Pause, Review, or Stop emitted after every task.",
    },
    {
      feature: "Timeline",
      detail: "Chronological log of every phase transition, task, and operator command.",
    },
    {
      feature: "Operator shell",
      detail: "Built-in commands: status, roadmap, phase, readiness, recommendation, pause, resume, stop, rules, knowledge, dashboard. Free-text sends a steering instruction.",
    },
    {
      feature: "Provider transparency",
      detail: "Configurable planning and execution providers. Swap without data migration.",
    },
  ];

  return (
    <section className="py-14 lg:py-16" style={{ borderBottom: B }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h2
            className="text-[22px] font-semibold"
            style={{ color: "var(--text)" }}
          >
            What exists today
          </h2>
          <span className="tag tag-green">v0.10.3</span>
        </div>
        <p
          className="text-[15px] leading-relaxed mb-8 max-w-2xl"
          style={{ color: "var(--text-2)" }}
        >
          These features are implemented and available in the current release.
          For what&apos;s planned next, see the{" "}
          <Link
            href="/roadmap"
            className="underline underline-offset-2"
            style={{ color: "var(--text-2)" }}
          >
            full roadmap →
          </Link>
        </p>

        <ul className="grid sm:grid-cols-2 gap-2.5">
          {items.map(({ feature, detail }) => (
            <li
              key={feature}
              className="flex gap-3 p-3 rounded-md"
              style={{ border: B }}
            >
              <span
                className="flex-shrink-0 mt-0.5 mono text-[13px]"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <div
                  className="text-[13px] font-medium mb-0.5"
                  style={{ color: "var(--text)" }}
                >
                  {feature}
                </div>
                <div className="text-[12px]" style={{ color: "var(--text-3)" }}>
                  {detail}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Install ─── */
function Install() {
  return (
    <section className="py-14 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          className="text-[22px] font-semibold mb-2"
          style={{ color: "var(--text)" }}
        >
          Install Romyq
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-8"
          style={{ color: "var(--text-2)" }}
        >
          No cloud account, no signup, no telemetry.
        </p>

        <div className="mb-8">
          <InstallPicker variant="full" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/docs/getting-started" className="btn-primary">
            Get Started
          </Link>
          <Link href="/docs/installation" className="btn-secondary">
            Installation guide
          </Link>
          <Link href="/docs/quick-start" className="btn-secondary">
            Example walkthrough
          </Link>
          <a
            href="https://github.com/Webrowse/romyq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
