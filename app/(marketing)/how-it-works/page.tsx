import { ArrowDown } from "lucide-react";

const stages = [
  {
    step: "01",
    title: "Mission",
    desc: "Every project starts with a mission. Define the purpose, scope, and objectives. The mission becomes the north star that guides every decision throughout the lifecycle.",
    detail:
      "Without a clear mission, projects drift. Romyq makes the mission explicit and ties every phase back to it.",
  },
  {
    step: "02",
    title: "Lifecycle",
    desc: "The lifecycle is the high-level framework that organizes work into sequential phases. Romyq tracks which phase your project is in and what needs to happen to progress.",
    detail:
      "Lifecycles are configurable. Use the default 6-phase model or define your own.",
  },
  {
    step: "03",
    title: "Phases",
    desc: "Each lifecycle phase has defined entry criteria, tasks, and exit criteria. Phases provide structure without rigidity — you can move freely while Romyq tracks compliance.",
    detail:
      "Phases include: Initiate, Plan, Execute, Validate, Govern, and Recommend.",
  },
  {
    step: "04",
    title: "Tasks",
    desc: "Tasks are the unit of work within each phase. Romyq tracks completion status, ownership, dependencies, and associated artifacts for every task.",
    detail:
      "Tasks can be created manually, imported from issue trackers, or generated from phase templates.",
  },
  {
    step: "05",
    title: "Execution",
    desc: "Work happens in your tools — editor, terminal, git. Romyq monitors progress through git commits, task updates, and configurable check-ins without getting in your way.",
    detail:
      "Romyq never writes code or makes changes. It observes, tracks, and reports.",
  },
  {
    step: "06",
    title: "Validation",
    desc: "Every task and phase is validated against governance rules, quality criteria, and compliance requirements. Validation can be automated or manual.",
    detail:
      "Validation gates prevent incomplete work from advancing to the next phase.",
  },
  {
    step: "07",
    title: "Readiness",
    desc: "A readiness score is calculated from completion rates, validation results, governance compliance, and phase progression. This gives you an at-a-glance health check.",
    detail:
      "Readiness is scored 0-100%. Phase transitions require minimum readiness thresholds.",
  },
  {
    step: "08",
    title: "Recommendation",
    desc: "Romyq analyzes the project state and recommends the single most impactful next action. No noise, no guesswork — just clear direction.",
    detail:
      "Recommendations are context-aware and prioritize based on urgency, dependencies, and project goals.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
          How Romyq Works
        </h1>
        <p className="mt-2 text-lg text-zinc-400">
          From mission to recommendation — a visual guide to the lifecycle.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-emerald-500/50 via-zinc-800 to-zinc-800" />

        <div className="space-y-12">
          {stages.map((stage, index) => (
            <div key={stage.step} className="relative pl-20">
              <div
                className={`absolute left-4 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  index < stages.length - 1
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                    : "border-emerald-500 bg-emerald-500 text-zinc-950"
                }`}
              >
                {stage.step}
              </div>

              {index < stages.length - 1 && (
                <div className="absolute left-[25px] top-10 flex justify-center text-zinc-700">
                  <ArrowDown size={16} />
                </div>
              )}

              <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700/50">
                <h2 className="text-xl font-semibold text-zinc-200">
                  {stage.title}
                </h2>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {stage.desc}
                </p>
                <div className="mt-4 rounded-lg bg-zinc-900/50 border border-zinc-800/30 px-4 py-3 text-sm text-zinc-500">
                  <span className="text-emerald-400/80 font-medium">
                    Why it matters:
                  </span>{" "}
                  {stage.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
