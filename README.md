# michael banf · personal site

Static site built with [Astro](https://astro.build), deployed to GitHub Pages.
Two views of the same work — **by time** (eras) and **by topic** — plus one page
per project, a filterable publication list, and a machine-readable context pack
per project for a future "ask about this project" assistant.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
```

## Deploy to GitHub Pages

1. Create a repository named `mbanf.github.io` (user site, served at the root).
   If you use another name, set `base: '/<repo-name>'` in `astro.config.mjs`.
2. Push this folder to the `main` branch.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

Custom domain later: add a `public/CNAME` file with the domain and set `site:` in
`astro.config.mjs` accordingly.

## Where things live

```
src/data/profile.json        name, tagline, intro, links
src/data/eras.json           the timeline periods (id, title, place, start, end, kind, blurb)
src/data/topics.json         the topic axis (id, title, short, color, blurb)
src/data/publications.json   full publication list; `project` links an entry to a project page
src/content/projects/*.md    one file per project (frontmatter + body)
public/images/projects/      hero and figure images
src/components/demos/        interactive islands (currently: FormanDemo)
src/pages/context/[slug].json.ts   context pack per project → /context/<slug>.json
```

### Adding a project

Create `src/content/projects/<slug>.md`:

```yaml
---
title: "…"
subtitle: "…"            # one line under the title
start: 2024
end: null                # null = ongoing
era: perelyn             # an id from eras.json
topics: [geometric-dl]   # ids from topics.json
status: ongoing          # published | ongoing | legacy
order: 40                # lower = earlier within a group
hero: { src: /images/projects/x.png, alt: "…", caption: "…", fit: contain }
thumb: /images/projects/x-thumb.png   # optional 16:9 card image
summary: "Two or three sentences shown as the pull quote."
role: "…"
collaborators: ["…"]
links: [{ label: "Paper", url: "https://…" }]
figures: [{ src: /images/projects/x-fig2.png, alt: "…", caption: "…" }]
demo: forman             # optional: mounts a demo component by name
---
Markdown body.
```

It appears automatically in both views, on the publications page (for entries
whose `project` matches the slug) and at `/context/<slug>.json`.

### Adding a demo

Write a component in `src/components/demos/`, then mount it in
`src/pages/projects/[slug].astro` behind a `demo:` key, as `FormanDemo` is.

## Planned: the AI layer

GitHub Pages is static, so a chat needs a small proxy in front of the model API
(a Cloudflare Worker is the simplest). The site already exposes everything the
assistant needs per project at `/context/<slug>.json`; the chat widget would send
that pack plus the visitor's question to the proxy.
