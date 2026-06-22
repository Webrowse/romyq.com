import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { docs, releases } from "../.source/server";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const releasesLoader = loader({
  baseUrl: "/releases",
  source: toFumadocsSource(releases, []),
});
