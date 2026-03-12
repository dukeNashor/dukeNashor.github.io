import "./styles.css";
import { SITE_CONTENT, SITE_LINKS } from "./content";
import type { Lang, PageKey, SiteLocaleContent } from "./types";

const PAGE_SUFFIX: Record<PageKey, string> = {
  home: "",
  install: "install/",
  privacy: "privacy/",
  faq: "faq/",
  changelog: "changelog/",
};

const PAGE_TITLE_KEY: Record<PageKey, keyof SiteLocaleContent["nav"]> = {
  home: "home",
  install: "install",
  privacy: "privacy",
  faq: "faq",
  changelog: "changelog",
};

function assertLang(raw: string | undefined): Lang {
  return raw === "en" ? "en" : "zh";
}

function assertPage(raw: string | undefined): PageKey {
  if (raw === "install" || raw === "privacy" || raw === "faq" || raw === "changelog") return raw;
  return "home";
}

function normalizeRootPrefix(raw: string | undefined): string {
  if (!raw || !raw.trim()) return "./";
  const value = raw.trim();
  return value.endsWith("/") ? value : `${value}/`;
}

function joinRoot(rootPrefix: string, path: string): string {
  return `${rootPrefix}${path}`.replace(/\\/g, "/");
}

function pageHref(rootPrefix: string, lang: Lang, page: PageKey): string {
  const langPrefix = lang === "en" ? "en/" : "";
  return joinRoot(rootPrefix, `${langPrefix}${PAGE_SUFFIX[page]}`);
}

function anchor(
  label: string,
  href: string,
  className: string,
  targetBlank = false,
): string {
  if (targetBlank) {
    return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }
  return `<a class="${className}" href="${href}">${label}</a>`;
}

function renderHeader(content: SiteLocaleContent, rootPrefix: string, lang: Lang, page: PageKey): string {
  const navItems = (Object.keys(content.nav) as PageKey[])
    .map((item) => {
      const href = pageHref(rootPrefix, lang, item);
      const activeClass = item === page ? "is-active" : "";
      return `<a class="site-nav-link ${activeClass}" href="${href}">${content.nav[item]}</a>`;
    })
    .join("");

  const zhHref = pageHref(rootPrefix, "zh", page);
  const enHref = pageHref(rootPrefix, "en", page);
  return `
    <header class="site-header">
      <div class="logo-chip">
        <span class="pixel-dot"></span>
        <span class="logo-text">${content.brand}</span>
      </div>
      <nav class="site-nav" aria-label="site nav">${navItems}</nav>
      <div class="lang-switch" aria-label="${content.ui.langSwitchLabel}">
        <a class="lang-pill ${lang === "zh" ? "is-active" : ""}" href="${zhHref}">${content.ui.zhLabel}</a>
        <a class="lang-pill ${lang === "en" ? "is-active" : ""}" href="${enHref}">${content.ui.enLabel}</a>
      </div>
    </header>
  `;
}

function renderHome(content: SiteLocaleContent, rootPrefix: string, lang: Lang): string {
  const actions = content.home.actions
    .map((action) => {
      const cls = action.variant === "primary" ? "cta-btn cta-primary" : "cta-btn cta-ghost";
      return anchor(action.label, action.href, cls, true);
    })
    .join("");

  const metrics = content.home.metrics
    .map((metric, index) =>
      `<div class="metric-card reveal" style="--delay:${index * 80}ms"><span>${metric.label}</span><strong>${metric.value}</strong></div>`)
    .join("");

  const features = content.home.features
    .map(
      (feature, index) => `
      <article class="feature-card reveal" style="--delay:${index * 90}ms">
        <span class="feature-chip">${feature.chip}</span>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `,
    )
    .join("");

  const trustItems = content.home.trustItems.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="hero-panel reveal" style="--delay:10ms">
      <div class="hero-copy">
        <span class="hero-badge">${content.home.badge}</span>
        <h1>${content.home.title}</h1>
        <p>${content.home.subtitle}</p>
        <div class="cta-group">${actions}</div>
      </div>
      <div class="hero-orb" aria-hidden="true">
        <div class="orb-grid"></div>
      </div>
    </section>

    <section class="metrics-grid">${metrics}</section>

    <section class="section-head reveal" style="--delay:40ms">
      <h2>${content.home.featuresTitle}</h2>
      <p>${content.home.featuresSubtitle}</p>
    </section>
    <section class="feature-grid">${features}</section>

    <section class="trust-panel reveal" style="--delay:120ms">
      <h2>${content.home.trustTitle}</h2>
      <ul class="neo-list">${trustItems}</ul>
    </section>

    <section class="closing-cta reveal" style="--delay:140ms">
      <h2>${content.home.ctaTitle}</h2>
      <p>${content.home.ctaText}</p>
      <div class="cta-group">
        ${anchor(content.nav.install, pageHref(rootPrefix, lang, "install"), "cta-btn cta-primary")}
        ${anchor(content.ui.feedbackLabel, SITE_LINKS.issues, "cta-btn cta-ghost", true)}
      </div>
    </section>
  `;
}

function renderInstall(content: SiteLocaleContent): string {
  const cards = content.install.cards
    .map(
      (card, index) => `
      <article class="install-card reveal" style="--delay:${index * 90}ms">
        <header>
          <h3>${card.title}</h3>
          <p>${card.hint}</p>
        </header>
        ${anchor(card.actionLabel, card.actionHref, "cta-btn cta-primary", true)}
        <ol>
          ${card.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </article>
    `,
    )
    .join("");

  const compatibility = content.install.compatibilityItems.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="page-intro reveal" style="--delay:20ms">
      <h1>${content.install.title}</h1>
      <p>${content.install.subtitle}</p>
    </section>
    <section class="install-grid">${cards}</section>
    <section class="trust-panel reveal" style="--delay:110ms">
      <h2>${content.install.compatibilityTitle}</h2>
      <ul class="neo-list">${compatibility}</ul>
    </section>
  `;
}

function renderPrivacy(content: SiteLocaleContent): string {
  const blocks = content.privacy.blocks
    .map(
      (block, index) => `
      <article class="policy-block reveal" style="--delay:${index * 85}ms">
        <h3>${block.heading}</h3>
        <ul>
          ${block.bullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");

  return `
    <section class="page-intro reveal" style="--delay:20ms">
      <h1>${content.privacy.title}</h1>
      <p>${content.privacy.intro}</p>
      <p class="tiny-note">${content.ui.updatedLabel}: 2026-03-09</p>
    </section>
    <section class="policy-grid">${blocks}</section>
    <section class="trust-panel reveal" style="--delay:130ms">
      <h2>${content.ui.feedbackLabel}</h2>
      <p>${content.privacy.contactLabel} ${anchor("GitHub Issues", SITE_LINKS.issues, "inline-link", true)}</p>
    </section>
  `;
}

function renderFaq(content: SiteLocaleContent): string {
  const items = content.faq.items
    .map(
      (item, index) => `
      <details class="faq-item reveal" style="--delay:${index * 70}ms">
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `,
    )
    .join("");

  return `
    <section class="page-intro reveal" style="--delay:20ms">
      <h1>${content.faq.title}</h1>
      <p>${content.faq.intro}</p>
    </section>
    <section class="faq-grid">${items}</section>
  `;
}

function renderChangelog(content: SiteLocaleContent): string {
  const entries = content.changelog.entries
    .map(
      (entry, index) => `
      <article class="log-entry reveal" style="--delay:${index * 90}ms">
        <header>
          <h3>${entry.version}</h3>
          <span>${entry.date}</span>
        </header>
        <ul>
          ${entry.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");

  return `
    <section class="page-intro reveal" style="--delay:20ms">
      <h1>${content.changelog.title}</h1>
      <p>${content.changelog.intro}</p>
    </section>
    <section class="log-grid">${entries}</section>
    <section class="trust-panel reveal" style="--delay:120ms">
      ${anchor("Full Releases", SITE_LINKS.releases, "cta-btn cta-ghost", true)}
    </section>
  `;
}

function renderPageBody(page: PageKey, content: SiteLocaleContent, rootPrefix: string, lang: Lang): string {
  switch (page) {
    case "install":
      return renderInstall(content);
    case "privacy":
      return renderPrivacy(content);
    case "faq":
      return renderFaq(content);
    case "changelog":
      return renderChangelog(content);
    default:
      return renderHome(content, rootPrefix, lang);
  }
}

function renderFooter(content: SiteLocaleContent): string {
  return `
    <footer class="site-footer">
      <div>
        <strong>${content.brand}</strong>
        <p>${content.footer.tagline}</p>
      </div>
      <div>
        <h4>${content.footer.linksLabel}</h4>
        <div class="footer-links">
          ${anchor("Plugin Repo", SITE_LINKS.repo, "inline-link", true)}
          ${anchor("Site Repo", SITE_LINKS.siteRepo, "inline-link", true)}
          ${anchor("Issues", SITE_LINKS.issues, "inline-link", true)}
        </div>
      </div>
      <p class="tiny-note">${content.footer.legalNote}</p>
    </footer>
  `;
}

function bootstrap(): void {
  const root = document.getElementById("app");
  if (!(root instanceof HTMLElement)) return;

  const lang = assertLang(document.documentElement.dataset.lang);
  const page = assertPage(document.documentElement.dataset.page);
  const rootPrefix = normalizeRootPrefix(document.documentElement.dataset.rootPrefix);
  const content = SITE_CONTENT[lang];

  document.documentElement.lang = content.langCode;
  const pageLabel = content.nav[PAGE_TITLE_KEY[page]];
  document.title = `${pageLabel} · ${content.pageTitleSuffix}`;

  root.innerHTML = `
    <div class="bg-layer" aria-hidden="true"></div>
    ${renderHeader(content, rootPrefix, lang, page)}
    <main class="main-content">${renderPageBody(page, content, rootPrefix, lang)}</main>
    ${renderFooter(content)}
  `;
}

bootstrap();
