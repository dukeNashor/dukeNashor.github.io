export type Lang = "zh" | "en";

export type PageKey = "home" | "install" | "privacy" | "faq" | "changelog";

export type SiteLinks = {
  userscript: string;
  crx: string;
  repo: string;
  siteRepo: string;
  releases: string;
  issues: string;
};

export type NavLabels = Record<PageKey, string>;

export type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

export type FeatureCard = {
  title: string;
  description: string;
  chip: string;
};

export type HomeContent = {
  badge: string;
  title: string;
  subtitle: string;
  actions: HeroAction[];
  metrics: Array<{ label: string; value: string }>;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureCard[];
  trustTitle: string;
  trustItems: string[];
  ctaTitle: string;
  ctaText: string;
};

export type InstallSection = {
  title: string;
  subtitle: string;
  cards: Array<{
    title: string;
    hint: string;
    actionLabel: string;
    actionHref: string;
    steps: string[];
  }>;
  compatibilityTitle: string;
  compatibilityItems: string[];
};

export type PrivacySection = {
  title: string;
  intro: string;
  blocks: Array<{
    heading: string;
    bullets: string[];
  }>;
  contactLabel: string;
};

export type FaqSection = {
  title: string;
  intro: string;
  items: Array<{
    q: string;
    a: string;
  }>;
};

export type ChangelogSection = {
  title: string;
  intro: string;
  entries: Array<{
    version: string;
    date: string;
    highlights: string[];
  }>;
};

export type FooterContent = {
  tagline: string;
  linksLabel: string;
  legalNote: string;
};

export type LanguageUiText = {
  langSwitchLabel: string;
  zhLabel: string;
  enLabel: string;
  updatedLabel: string;
  feedbackLabel: string;
};

export type SiteLocaleContent = {
  langCode: string;
  pageTitleSuffix: string;
  brand: string;
  nav: NavLabels;
  ui: LanguageUiText;
  home: HomeContent;
  install: InstallSection;
  privacy: PrivacySection;
  faq: FaqSection;
  changelog: ChangelogSection;
  footer: FooterContent;
};