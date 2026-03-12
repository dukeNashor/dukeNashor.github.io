# ChatGPT History Manager Site

Official marketing website for **ChatGPT History Manager**, built for GitHub Pages.

## Stack

- Vite + TypeScript + vanilla HTML/CSS
- Multi-page static output
- Chinese/English route split (`/` + `/en/`)

## Local Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run preview
```

## Routes

- `/` and `/en/`
- `/install/` and `/en/install/`
- `/privacy/` and `/en/privacy/`
- `/faq/` and `/en/faq/`
- `/changelog/` and `/en/changelog/`

## Content Maintenance

- Edit site copy and CTA links in `src/content.ts`.
- Keep feature descriptions aligned with plugin capabilities.
- Update `changelog` data per release.

## GitHub Pages

1. Push to `main`.
2. Workflow `.github/workflows/deploy.yml` builds and deploys `dist/`.
3. In repo settings, ensure Pages source is **GitHub Actions**.

## Notes

- `SITE_LINKS` in `src/content.ts` contains external links (userscript, CRX, repo, issues).
- Replace placeholder org/user URLs if your GitHub namespace differs.