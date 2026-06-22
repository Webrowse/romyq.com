# romyq.com

Source code for the [romyq.com](https://romyq.com) marketing and documentation site.

**Romyq** is an open-source, local-first, terminal-native software lifecycle management (SLM) system for AI-assisted development. The `romyq` pip package lives at [github.com/Webrowse/romyq](https://github.com/Webrowse/romyq).

## Stack

- **Framework:** Next.js 16 (static export)
- **Documentation:** Fumadocs MDX
- **Styling:** Tailwind CSS v4 + custom CSS variables
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono
- **Deployment:** Cloudflare Pages (Wrangler)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output lands in `out/` — a fully static site ready to deploy.

## Deploy

```bash
npm run deploy
```

This builds the site and publishes it to Cloudflare Pages via Wrangler.

## License

MIT — see [LICENSE](LICENSE).
