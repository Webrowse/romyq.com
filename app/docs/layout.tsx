import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { pageTree } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Romyq Docs",
        url: "/docs",
      }}
      links={[
        { url: "/",         text: "← romyq.com" },
        { url: "/releases", text: "Releases" },
        { url: "/roadmap",  text: "Roadmap" },
        { url: "/contact",  text: "Contact" },
        { url: "https://github.com/Webrowse/romyq", text: "GitHub ↗" },
        { url: "https://pypi.org/project/romyq/",   text: "PyPI ↗" },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
