import Link from "next/link";
import { Bug, Lightbulb, ShieldAlert, ArrowUpRight } from "lucide-react";

const reportTypes = [
  {
    icon: Bug,
    title: "Bug Report",
    desc: "Something is not working as expected.",
    items: [
      "Clear description of the issue",
      "Steps to reproduce",
      "Expected vs actual behavior",
      "Environment details (OS, Python version)",
    ],
    href: "#",
    cta: "Report a Bug",
  },
  {
    icon: Lightbulb,
    title: "Feature Request",
    desc: "Have an idea for improving Romyq?",
    items: [
      "Description of the feature",
      "Use case and motivation",
      "Any implementation ideas",
    ],
    href: "#",
    cta: "Request Feature",
  },
  {
    icon: ShieldAlert,
    title: "Security Issue",
    desc: "Found a security vulnerability?",
    items: [
      "Do NOT open a public issue",
      "Describe the vulnerability",
      "Include reproduction steps",
    ],
    href: "#",
    cta: "Report Security Issue",
    highlight: true,
  },
];

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
          Report an Issue
        </h1>
        <p className="mt-2 text-lg text-zinc-400">
          Help us make Romyq better. Choose the type of issue you want to
          report.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reportTypes.map((type) => (
          <div
            key={type.title}
            className={`rounded-xl border p-6 ${
              type.highlight
                ? "border-red-900/50 bg-red-950/20"
                : "border-zinc-800/50 bg-zinc-900/30"
            }`}
          >
            <div
              className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                type.highlight
                  ? "bg-red-500/10 text-red-400"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              <type.icon size={20} />
            </div>
            <h3
              className={`text-lg font-semibold ${
                type.highlight ? "text-red-300" : "text-zinc-200"
              }`}
            >
              {type.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500">{type.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {type.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-zinc-500"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={type.href}
              className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                type.highlight
                  ? "text-red-400 hover:text-red-300"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {type.cta}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
