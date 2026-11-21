# Kong Bunyim — React Portfolio

A responsive React + Vite portfolio closely following the supplied reference: centered hero, five-card banner, three service cards, charcoal callouts, a rounded About/skills/projects panel, and a two-column contact section. Uses the original Inter/Public Sans typography and #FAFAFA / #141010 / #0672F3 palette, with matching dark mode. Personal content comes from Kong Bunyim's CV and public GitHub projects.

## Run locally

Requires Node.js 20.19+ (or 22.12+).

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. To produce and preview a production build:

```sh
npm run build
npm run preview
```

## Features

- Exactly four featured projects on the homepage.
- Dedicated `/#/projects` page with live website cards, search, and filters.
- Cards open the published project website in a new tab. Repositories without a known demo are listed separately with explicit **View source** links.
- Light and dark themes, system preference detection, and a persistent theme button on every page.
- Mobile navigation, visible keyboard focus, reduced-motion support, and accessible button labels.
- CV download, email link, copy-email button, and phone link. The validated contact form opens the visitor’s email application with a composed message; it does not claim to send mail directly.
- Experience, education, and skills taken from the supplied CV.

## Edit content

- `src/projects.js`: curated projects, their hosted URLs, image URLs, featured flags, and skills.
- `src/repositories.json`: snapshot of the public GitHub repository collection.
- `src/main.jsx` and `src/App.jsx`: React entry point, shared layout, and routes.
- `src/pages/`: home, projects, and page-not-found screens.
- `src/components/`: shared UI and homepage sections, including navigation, experience, and contact.
- `src/hooks/useTheme.js`: system theme detection and saved theme preference.
- `src/profile.js`: email address and CV download path.
- `src/styles.css`: responsive styles and both theme palettes.
- `public/Kong-Bunyim-CV.pdf`: original CV download.
- `public/images/portrait-000.jpg`: portrait extracted from the supplied CV.

The project list is a static snapshot; add new repositories and deployments here as they become available. Keep exactly four projects marked `featured: true`.

## Hosting

The build is static. Upload `dist/` to any static host. Relative assets and hash-based routing support deployment under a subdirectory, including GitHub Pages, without server rewrite rules. `.openai/hosting.json` retains the registered Sites identity for a future deployment retry.

## Content sources and verification

- Personal information: `/home/kong-bunyim/Documents/Kong Bunyim - Full - Stack Developer.pdf`.
- Design reference: https://bunyim-kong.github.io/portfolio/ (source inspected through GitHub).
- Published URLs: https://github.com/bunyim-kong/project-show and repository homepage / GitHub Pages configuration.
- Project photography: existing assets in https://github.com/bunyim-kong/portfolio-vue, loaded from raw.githubusercontent.com. Image failures fall back to the colored project artwork and text; the CV and portrait are bundled locally.

The original reference is a portfolio made for a classmate, so its identity, biography, rating figures, and other template claims were replaced with CV-backed information. Reference contacts from the CV are not repeated on the page; the downloadable original PDF is unchanged.

The production build and server-rendered content checks passed in the workspace. Publication was attempted but blocked by DNS resolution for git.chatgpt-team.site; the Site is registered but not deployed. Local browser/preview startup and direct HTTP checks of live project websites are blocked by the environment, so visual QA and current demo uptime require verification outside it.
