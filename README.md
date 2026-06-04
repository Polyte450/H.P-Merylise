
# Polyte Portfolio (Vue 3 + Vite)

This repository is a scaffolded, production-ready Vue 3 portfolio using Vite and Tailwind CSS. It includes:

- Vue 3 with Vue Router and Vue I18n (English and Portuguese presets)
- Tailwind CSS with class-based dark mode support
- Simple theme toggle and language switcher
- Lazy-loaded routes: Home, About, Projects, Contact
- Vercel deployment config (`vercel.json`)

Quick start

```bash
npm install
npm run dev
```

Build for production

```bash
npm run build
npm run preview
```

Deployment (Vercel)

1. Connect this repository to Vercel.
2. Set the build command to `npm run build` and the output directory to `dist` (Vite default).
3. Vercel will serve `index.html` for all routes thanks to `vercel.json`.

Project structure

- `src/` — Vue app source
	- `components/` — shared UI components (`Header`, `ThemeToggle`, `LanguageSwitcher`)
	- `pages/` — page routes (`Home`, `About`, `Projects`, `Contact`)
	- `router/` — Vue Router setup
	- `i18n/` — translations and i18n setup
	- `assets/` — Tailwind entry CSS and other static assets
- `public/` — static files (`logo.svg`, `favicon.svg`, `icon.svg`)

Notes & Recommendations

- The project currently uses `vue-i18n` v9 which shows a deprecation notice; consider upgrading to v11. Upgrading may require changes to the i18n setup.
- `npm audit` reported a few moderate vulnerabilities. I avoided forcing major upgrades to dependencies to prevent breaking changes. To attempt automatic fixes (may upgrade major versions), run:

```bash
npm audit fix --force
```

- To further professionalize: add unit tests, CI (GitHub Actions), and a code formatter/linter (Prettier + ESLint).

If you want, I can:
- Migrate your existing portfolio content into the new pages and components.
- Upgrade dependencies and resolve audit issues (I'll coordinate upgrades to avoid breaking changes).
- Add CI and linting setup.

