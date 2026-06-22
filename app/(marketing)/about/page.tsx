import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Romyq exists, what it is not, and the design principles behind it.",
};

const B = "1px solid var(--border)";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-10" style={{ borderBottom: B, paddingBottom: "2rem" }}>
        <p className="eyebrow mb-3">Project</p>
        <h1
          className="text-[28px] sm:text-[34px] font-semibold mb-3"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          About Romyq
        </h1>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          Romyq is an open-source software lifecycle management system. It is
          not an AI coding assistant and not a SaaS product. It runs on your
          machine, stores all state locally, and has no telemetry.
        </p>
      </div>

      <Prose title="Why it exists">
        <p>
          AI coding assistants are very good at generating code. They are not
          good at managing a software project. They do not know what phase a
          project is in, whether tests exist, whether governance rules are being
          followed, or whether the project is ready to ship.
        </p>
        <p>
          The result is that developers using AI-assisted development often end
          up with code that works but projects that are hard to reason about.
          Nobody is tracking what was built, why, or whether it is complete.
        </p>
        <p>
          Romyq fills this gap. It takes a software idea, structures it into an
          ordered lifecycle with phases and done criteria, enforces the project
          constitution before execution, tracks readiness over time, and tells
          the operator when to stop.
        </p>
      </Prose>

      <Prose title="What Romyq is not">
        <ul>
          <li>Not an AI coding assistant — Romyq does not write code itself</li>
          <li>Not a task manager — it manages a lifecycle, not a to-do list</li>
          <li>Not a SaaS platform — there are no servers, no accounts, no subscriptions</li>
          <li>Not cloud-dependent — everything runs locally</li>
          <li>Not collecting your data — zero telemetry, zero outbound calls to Romyq</li>
          <li>Not a wrapper around a specific AI provider — providers are configurable</li>
        </ul>
      </Prose>

      <Prose title="Design principles">
        <dl className="space-y-4">
          {[
            ["Local first", "All state lives in .romyq/ within your project directory. Readable, diffable, versionable. Nothing requires a network connection to Romyq."],
            ["Operator authority", "Romyq advises. The operator decides. The recommendation engine tells you Continue, Pause, Review, or Stop. Execution only stops when you say so."],
            ["Transparency", "Every decision Romyq makes is recorded. Every governance evaluation, task rejection, and replanning step is in the decision log. Nothing happens silently."],
            ["Honesty about limitations", "The readiness score and recommendation engine are tools for estimation, not guarantees. They are as accurate as the done criteria and rules you define."],
            ["Open source", "MIT licensed. The code is auditable. The project has no business model that creates incentives to collect data or lock you in."],
          ].map(([term, def]) => (
            <div key={term as string}>
              <dt
                className="mono text-[13px] font-semibold mb-1"
                style={{ color: "var(--text)" }}
              >
                {term}
              </dt>
              <dd className="text-[14px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                {def}
              </dd>
            </div>
          ))}
        </dl>
      </Prose>

      <Prose title="Comparison with AI coding assistants">
        <p>
          Romyq uses AI coding assistants as execution providers. The planning
          provider (e.g., DeepSeek R1) decomposes the mission into phases and
          tasks. The execution provider (e.g., Claude Code) implements each
          task. Romyq coordinates between them, enforces governance, tracks
          readiness, and reports status to the operator.
        </p>
        <p>
          The intended workflow: you define a mission in <code>mission.md</code>,
          run <code>romyq init</code> or <code>romyq attach</code>, then
          <code>romyq run</code>. You steer from a second terminal with
          <code>romyq steer</code>, <code>romyq pause</code>, and
          <code>romyq rules add</code>. You observe readiness and recommendation
          in the dashboard. When the recommendation is Stop, you run
          <code>romyq stop</code>.
        </p>
      </Prose>

      <Prose title="Project status">
        <p>
          Romyq is in active development. The current stable release is v0.10.3.
          The core lifecycle engine, governance system, memory layers, readiness
          scoring, and recommendation engine are all implemented. Documentation
          and test coverage are expanding.
        </p>
        <p>
          The project is maintained by a single developer. It has no corporate
          backing. Contributions are welcome. If Romyq is useful to you,
          consider{" "}
          <Link href="/sponsor" className="underline underline-offset-2" style={{ color: "var(--text-2)" }}>
            sponsoring the project
          </Link>
          .
        </p>
      </Prose>

      <div className="pt-8 flex flex-wrap gap-3" style={{ borderTop: B }}>
        <Link href="/docs" className="btn-primary">
          Documentation
        </Link>
        <Link href="/roadmap" className="btn-secondary">
          Roadmap
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
    </main>
  );
}

function Prose({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-[16px] font-semibold mb-4"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="text-[14px] leading-relaxed space-y-3 [&_ul]:space-y-1.5 [&_ul]:pl-4 [&_li]:list-disc [&_li]:marker:text-text-3"
        style={{ color: "var(--text-2)" }}
      >
        {children}
      </div>
    </section>
  );
}
