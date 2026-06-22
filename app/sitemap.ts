import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://romyq.com";
const NOW = new Date();

const staticPages: MetadataRoute.Sitemap = [
  { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/docs`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/docs/getting-started`, lastModified: NOW, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/docs/installation`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/docs/quick-start`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/docs/concepts`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
  { url: `${BASE}/docs/lifecycle`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/docs/governance`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
  { url: `${BASE}/docs/complexity-profiles`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/rules`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/knowledge`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/capabilities`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/readiness`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/dashboard`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/docs/commands`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/docs/architecture`, lastModified: NOW, changeFrequency: "monthly", priority: 0.65 },
  { url: `${BASE}/docs/faq`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
  { url: `${BASE}/releases`, lastModified: NOW, changeFrequency: "monthly", priority: 0.75 },
  { url: `${BASE}/releases/0.10.3`, lastModified: NOW, changeFrequency: "yearly", priority: 0.7 },
  { url: `${BASE}/releases/0.10.2`, lastModified: NOW, changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE}/releases/0.10.1`, lastModified: NOW, changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE}/releases/0.10.0`, lastModified: NOW, changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE}/releases/0.9.1`, lastModified: NOW, changeFrequency: "yearly", priority: 0.5 },
  { url: `${BASE}/releases/0.9.0`, lastModified: NOW, changeFrequency: "yearly", priority: 0.5 },
  { url: `${BASE}/roadmap`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sponsor`, lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages;
}
