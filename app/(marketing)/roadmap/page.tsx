import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Romyq public roadmap. What is implemented, what is planned, what is under research, and what is not planned.",
};

const B = "1px solid var(--border)";

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-10" style={{ borderBottom: B, paddingBottom: "2rem" }}>
        <p className="eyebrow mb-3">Romyq · Public Roadmap</p>
        <h1
          className="text-[28px] sm:text-[34px] font-semibold mb-3"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          Roadmap
        </h1>
        <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: "var(--text-2)" }}>
          This roadmap is honest about the current state of the project. Each section
          is clearly labeled. Features are not presented as available until they are
          available.
        </p>
      </div>

      <Section
        id="implemented"
        label="Implemented"
        badge={{ text: "v0.10.3", cls: "tag-green" }}
        description="These features are available in the current release."
      >
        <ItemList
          items={[
            { title: "Lifecycle generation", detail: "8-stage lifecycle from mission definition to verified completion. Persists across sessions in .romyq/." },
            { title: "Complexity profiles", detail: "Three profiles: Basic (3 phases), Intermediate (5 phases), Advanced (7 phases). Selected at init." },
            { title: "Project memory", detail: "Persistent state in .romyq/: task history, knowledge base, execution memory, rules, decisions, capabilities, lifecycle, and project constitution. Human-readable JSON and Markdown." },
            { title: "Governance engine", detail: "Constitution-based rule enforcement. Proposed tasks evaluated before execution. Violations trigger replanning." },
            { title: "Readiness scoring", detail: "Weighted aggregate of phase completion, capability coverage, done criteria, and governance state." },
            { title: "Recommendation engine", detail: "Emits Continue, Pause, Review, or Stop after every task. Re-evaluated after every operator command." },
            { title: "Timeline", detail: "Chronological, append-only log of every phase transition, task outcome, and operator command." },
            { title: "Operator shell", detail: "Interactive REPL with built-in commands: status, roadmap, phase, readiness, recommendation, pause, resume, stop, rules, knowledge, dashboard. Free-text sends a steering instruction." },
            { title: "Provider transparency", detail: "Planning and execution providers are configurable independently. DeepSeek, Gemini, Claude, OpenAI-compatible." },
            { title: "Multi-project support", detail: "Multiple projects managed from a single session. Each maintains independent state, memory, and rules." },
            { title: "Decision log", detail: "Every governance decision recorded in .romyq/decisions.json. Human-readable. Diffable." },
            { title: "Error recovery", detail: "Lifecycle state preserved on failure. Resume from last checkpoint with romyq resume." },
          ]}
          status="done"
        />
      </Section>

      <Section
        id="in-progress"
        label="In Progress"
        badge={{ text: "active", cls: "tag-amber" }}
        description="Work underway in the current development cycle."
      >
        <ItemList
          items={[
            { title: "Documentation", detail: "Expanding coverage of all commands, concepts, and lifecycle stages." },
            { title: "Test coverage", detail: "Expanding test suite beyond the current 1,500+ tests." },
          ]}
          status="active"
        />
      </Section>

      <Section
        id="planned"
        label="Planned"
        badge={{ text: "v0.11", cls: "tag-blue" }}
        description="Confirmed scope for the next minor release. Not yet implemented."
      >
        <ItemList
          items={[
            { title: "Bounded improvement cycles", detail: "Allow multiple revision passes per task. Current implementation does a single pass then moves on." },
            { title: "Structured lifecycle reviews", detail: "Formal review step at the boundary between phases. Currently phase transitions happen automatically." },
            { title: "Enhanced visibility tooling", detail: "Better dashboard output and status reporting. The current dashboard is functional but limited in what it exposes." },
            { title: "Improved provider coordination", detail: "Better handling of planning provider failures and fallback behavior." },
          ]}
          status="planned"
        />
      </Section>

      <Section
        id="research"
        label="Research"
        badge={{ text: "exploring", cls: "tag-neutral" }}
        description="Being evaluated. No timeline. Not committed."
      >
        <ItemList
          items={[
            { title: "Checkpoint and rollback", detail: "Ability to snapshot lifecycle state at arbitrary points and restore. Architecture not yet decided." },
            { title: "Better knowledge extraction", detail: "More accurate extraction of project facts from large codebases. Current approach works but has precision limits." },
            { title: "Lifecycle templating", detail: "Pre-defined lifecycle templates for common project types (REST API, CLI tool, library). Under consideration." },
          ]}
          status="research"
        />
      </Section>

      <Section
        id="potential"
        label="Potential"
        badge={{ text: "future", cls: "tag-neutral" }}
        description="Ideas that may or may not ever happen. Not commitments."
      >
        <ItemList
          items={[
            { title: "Desktop UI", detail: "A graphical interface for the dashboard. Low priority. The terminal interface is the intended primary interface." },
            { title: "Team workflows", detail: "Multiple operators contributing to a single lifecycle. Significant architecture work required. Not currently planned." },
            { title: "Cloud-optional sync", detail: "Optional sync of lifecycle state across machines. Explicitly not planned in the near term. Local-first is not a constraint we plan to relax." },
          ]}
          status="potential"
        />
      </Section>

      <Section
        id="not-planned"
        label="Not Planned"
        badge={{ text: "out of scope", cls: "tag-red" }}
        description="Features explicitly outside the scope of this project."
      >
        <ItemList
          items={[
            { title: "SaaS or hosted offering", detail: "Romyq will not become a cloud service. This is a design principle, not a temporary constraint." },
            { title: "Telemetry or analytics", detail: "No usage data will ever be collected. The project has no server-side infrastructure to receive it." },
            { title: "AI model fine-tuning", detail: "Romyq orchestrates existing LLM providers. It does not train or fine-tune models." },
            { title: "IDE plugin", detail: "Not planned. The CLI interface is the intended interface. IDE integration would add maintenance burden without clear benefit." },
          ]}
          status="not-planned"
        />
      </Section>

      <div
        className="pt-8 text-[13px] leading-relaxed"
        style={{ borderTop: B, color: "var(--text-3)" }}
      >
        <p>
          Questions about the roadmap?{" "}
          <a
            href="https://github.com/Webrowse/romyq/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "var(--text-2)" }}
          >
            Open a GitHub Discussion ↗
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2"
            style={{ color: "var(--text-2)" }}
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

function Section({
  id,
  label,
  badge,
  description,
  children,
}: {
  id: string;
  label: string;
  badge: { text: string; cls: string };
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h2
          className="text-[16px] font-semibold"
          style={{ color: "var(--text)" }}
        >
          {label}
        </h2>
        <span className={`tag ${badge.cls}`}>{badge.text}</span>
      </div>
      <p className="text-[13px] mb-5" style={{ color: "var(--text-3)" }}>
        {description}
      </p>
      {children}
    </section>
  );
}

type Status = "done" | "active" | "planned" | "research" | "potential" | "not-planned";

function ItemList({
  items,
  status,
}: {
  items: { title: string; detail: string }[];
  status: Status;
}) {
  const icon: Record<Status, string> = {
    done: "✓",
    active: "→",
    planned: "□",
    research: "?",
    potential: "◇",
    "not-planned": "✕",
  };
  const color: Record<Status, string> = {
    done: "var(--accent)",
    active: "var(--warn)",
    planned: "var(--info)",
    research: "var(--text-3)",
    potential: "var(--text-4)",
    "not-planned": "var(--danger)",
  };

  return (
    <ul className="space-y-2">
      {items.map(({ title, detail }) => (
        <li
          key={title}
          className="flex gap-3 p-3 rounded-md text-[13px]"
          style={{ border: B }}
        >
          <span
            className="flex-shrink-0 mono mt-0.5"
            style={{ color: color[status] }}
            aria-hidden="true"
          >
            {icon[status]}
          </span>
          <div>
            <div
              className="font-medium mb-0.5"
              style={{ color: "var(--text)" }}
            >
              {title}
            </div>
            <div style={{ color: "var(--text-3)" }}>{detail}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
