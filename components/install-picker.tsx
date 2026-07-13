"use client";

import { useState } from "react";

const B = "1px solid var(--border)";

type Variant = "hero" | "full";

export function InstallPicker({ variant = "full" }: { variant?: Variant }) {
  const [method, setMethod] = useState<"brew" | "pip">("brew");

  return (
    <div>
      <div className="flex gap-1 mb-3">
        {(["brew", "pip"] as const).map((id) => (
          <button
            key={id}
            onClick={() => setMethod(id)}
            className="mono text-[12px] px-3 py-1 rounded"
            style={{
              background: method === id ? "var(--accent)" : "var(--bg-subtle)",
              color: method === id ? "var(--bg)" : "var(--text-3)",
              border: method === id ? "1px solid var(--accent)" : B,
              cursor: "pointer",
              transition: "all 0.1s",
            }}
          >
            {id === "brew" ? "Homebrew" : "pip"}
          </button>
        ))}
      </div>

      <div className={`terminal ${variant === "hero" ? "max-w-lg" : "max-w-xl"}`}>
        <div className="terminal-header">
          <span className="term-dot" style={{ background: "#ff5f57" }} />
          <span className="term-dot" style={{ background: "#febc2e" }} />
          <span className="term-dot" style={{ background: "#28c840" }} />
          {variant === "hero" && (
            <span className="mono text-[11px] ml-2" style={{ color: "var(--text-3)" }}>
              terminal
            </span>
          )}
        </div>
        <div className="p-4 space-y-1">
          {method === "brew" ? (
            <>
              <div className="mono text-[13px]">
                <span style={{ color: "var(--text-3)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>brew install webrowse/street/romyq</span>
              </div>
              <div className="mono text-[13px]" style={{ color: "var(--text-3)" }}>
                Successfully installed romyq 0.11.0
              </div>
            </>
          ) : (
            <>
              <div className="mono text-[13px]">
                <span style={{ color: "var(--text-3)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>pip install romyq</span>
              </div>
              <div className="mono text-[13px]" style={{ color: "var(--text-3)" }}>
                Successfully installed romyq-0.11.0
              </div>
            </>
          )}
          <div className="mono text-[13px] mt-2">
            <span style={{ color: "var(--text-3)" }}>$</span>{" "}
            <span style={{ color: "var(--text)" }}>romyq init</span>
          </div>
          <div className="mono text-[13px]" style={{ color: "var(--accent)" }}>
            → Wizard launched. Follow the prompts.
          </div>
          {variant === "full" && (
            <>
              <div className="mono text-[13px] mt-2">
                <span style={{ color: "var(--text-3)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>romyq dashboard</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
