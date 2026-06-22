import { defineDocs, defineConfig, defineCollections } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
});

export const releases = defineCollections({
  type: "doc",
  dir: "content/releases",
  schema: z.object({
    version: z.string(),
    date: z.string(),
    tag: z.enum(["stable", "patch", "minor", "major"]).default("stable"),
    highlights: z.array(z.string()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    preset: "fumadocs",
  },
});
