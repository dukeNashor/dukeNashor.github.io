import type { SiteLinks, SiteLocaleContent, Lang } from "./types";

export const SITE_LINKS: SiteLinks = {
  userscript: "https://github.com/ADApps/chatgpt-history-manager/raw/main/dist/main.user.js",
  crx: "https://github.com/ADApps/chatgpt-history-manager/releases/latest",
  repo: "https://github.com/ADApps/chatgpt-history-manager",
  siteRepo: "https://github.com/dukeNashor/dukeNashor.github.io",
  releases: "https://github.com/ADApps/chatgpt-history-manager/releases",
  issues: "https://github.com/ADApps/chatgpt-history-manager/issues",
};

const zhContent: SiteLocaleContent = {
  langCode: "zh-CN",
  pageTitleSuffix: "ChatGPT History Manager 官网",
  brand: "ChatGPT History Manager",
  nav: {
    home: "首页",
    install: "安装",
    privacy: "隐私政策",
    faq: "常见问题",
    changelog: "更新日志",
  },
  ui: {
    langSwitchLabel: "语言",
    zhLabel: "中文",
    enLabel: "English",
    updatedLabel: "最近更新",
    feedbackLabel: "反馈与建议",
  },
  home: {
    badge: "Bright Web3 + Y2K Pixel UI",
    title: "把 ChatGPT 聊天记录，变成可管理的知识资产",
    subtitle:
      "ChatGPT History Manager 为左侧历史列表带来文件夹、标签、颜色、置顶、浮窗与删除同步保护。默认本地优先，快、稳、可控。",
    actions: [
      { label: "安装 Userscript", href: SITE_LINKS.userscript, variant: "primary" },
      { label: "下载 CRX", href: SITE_LINKS.crx, variant: "ghost" },
      { label: "查看源码", href: SITE_LINKS.repo, variant: "ghost" },
    ],
    metrics: [
      { label: "组织方式", value: "Folders + Tags + Color + Pin" },
      { label: "模式", value: "Docked / Floating" },
      { label: "数据策略", value: "Local-First" },
    ],
    featuresTitle: "核心能力",
    featuresSubtitle: "真实对应当前插件能力，不做夸大宣传。",
    features: [
      {
        title: "结构化整理会话",
        description: "通过分组、标签、颜色和置顶管理会话，降低聊天历史“越用越乱”的问题。",
        chip: "Organize",
      },
      {
        title: "浮窗侧栏与快速切换",
        description: "支持悬浮模式、最近会话、更新时间戳，保持在聊天区高频可见。",
        chip: "Floating",
      },
      {
        title: "删除同步保护",
        description: "识别原生删除动作并应用本地墓碑语义，避免会话被异常回灌。",
        chip: "Safe Delete",
      },
      {
        title: "本地缓存与可选同步",
        description: "默认仅本地保存；用户主动启用后，可使用同步能力进行跨设备同步。",
        chip: "Local-First",
      },
    ],
    trustTitle: "为什么值得长期使用",
    trustItems: [
      "不改写你的聊天内容，只管理元数据（如分组、标签、颜色、置顶等）。",
      "支持导入导出 JSON，可迁移、可备份、可回滚。",
      "出现网络或页面结构变化时，仍可保持本地数据完整性。",
    ],
    ctaTitle: "准备好让历史记录真正可用了？",
    ctaText: "5 分钟完成安装与配置，开始把会话管理从“凑合用”升级为“可持续”。",
  },
  install: {
    title: "安装指南",
    subtitle: "提供 Userscript 与 CRX 双入口，按你的习惯选择。",
    cards: [
      {
        title: "Tampermonkey / Userscript",
        hint: "推荐给脚本用户，更新路径简单。",
        actionLabel: "安装脚本",
        actionHref: SITE_LINKS.userscript,
        steps: [
          "安装 Tampermonkey（Chrome/Edge/Firefox）。",
          "打开脚本链接并确认安装。",
          "访问 chatgpt.com，刷新后在左栏看到 History Manager。",
        ],
      },
      {
        title: "CRX / 解压扩展",
        hint: "推荐给扩展安装习惯用户。",
        actionLabel: "打开发布页",
        actionHref: SITE_LINKS.crx,
        steps: [
          "从 Releases 下载 CRX 或 unpacked 包。",
          "打开 chrome://extensions 并启用开发者模式。",
          "加载扩展后刷新 chatgpt.com。",
        ],
      },
    ],
    compatibilityTitle: "兼容与建议",
    compatibilityItems: [
      "浏览器：Chrome / Edge / Firefox（建议使用最新版）。",
      "站点：ChatGPT Web（chatgpt.com）。",
      "首次启用后建议先在设置中导出一次 JSON 作为备份。",
    ],
  },
  privacy: {
    title: "隐私政策",
    intro: "我们坚持 Local-First。默认情况下，插件数据仅保存在你的浏览器本地。",
    blocks: [
      {
        heading: "我们收集什么",
        bullets: [
          "插件元数据：分组、标签、颜色、置顶、UI 设置、缓存索引。",
          "不会为了广告目的收集个人画像或行为追踪。",
          "不会将聊天内容作为商业数据出售。",
        ],
      },
      {
        heading: "数据存储与传输",
        bullets: [
          "默认本地存储（浏览器扩展存储或脚本存储）。",
          "仅当你主动开启同步时，才会发生跨设备数据传输。",
          "同步范围以插件元数据为主，不以广告分析为目的。",
        ],
      },
      {
        heading: "你的控制权",
        bullets: [
          "可随时关闭同步、清空缓存、导出或导入数据。",
          "可卸载插件终止后续数据写入。",
          "可通过 GitHub Issues 提交隐私相关请求。",
        ],
      },
    ],
    contactLabel: "隐私问题反馈：",
  },
  faq: {
    title: "常见问题",
    intro: "以下回答基于当前版本能力与默认配置。",
    items: [
      {
        q: "插件会读取我的完整对话内容吗？",
        a: "插件重点管理会话元数据与列表组织信息，不以抓取/出售对话正文为目标。",
      },
      {
        q: "为什么有时会看到“已删除”标记？",
        a: "这是删除同步保护机制，用于避免原生侧栏与本地缓存暂时不同步时把已删除会话误恢复。",
      },
      {
        q: "浮窗模式和原生左栏模式有什么区别？",
        a: "浮窗更适合高频切换与快速操作；原生左栏模式更贴近默认布局习惯。",
      },
      {
        q: "我可以迁移到另一台设备吗？",
        a: "可以。你可以导出 JSON 并导入，或主动启用同步能力。",
      },
      {
        q: "页面结构更新导致某些按钮异常怎么办？",
        a: "先刷新页面并更新到最新版本；若仍复现，请在 Issues 提交页面结构与复现步骤。",
      },
    ],
  },
  changelog: {
    title: "更新日志",
    intro: "这里展示面向用户可感知的版本变化摘要。",
    entries: [
      {
        version: "v0.1.0",
        date: "2026-03-09",
        highlights: [
          "新增浮窗会话更新时间戳（短格式，本地时区）。",
          "修复删除后 recent 标题回退问题，保留最后已知标题。",
          "浮窗会话点击改为优先走 SPA 路由，减少整页刷新。",
        ],
      },
      {
        version: "v0.0.x",
        date: "2026-Q1",
        highlights: [
          "完成分组、标签、颜色、置顶、导入导出与缓存治理。",
          "补齐删除协调、墓碑过滤与页面桥接捕获。",
        ],
      },
    ],
  },
  footer: {
    tagline: "Local-first chat organization for heavy ChatGPT users.",
    linksLabel: "相关链接",
    legalNote: "本项目与 OpenAI 无隶属关系。ChatGPT 为 OpenAI 的商标。",
  },
};

const enContent: SiteLocaleContent = {
  langCode: "en",
  pageTitleSuffix: "ChatGPT History Manager Website",
  brand: "ChatGPT History Manager",
  nav: {
    home: "Home",
    install: "Install",
    privacy: "Privacy",
    faq: "FAQ",
    changelog: "Changelog",
  },
  ui: {
    langSwitchLabel: "Language",
    zhLabel: "中文",
    enLabel: "English",
    updatedLabel: "Latest update",
    feedbackLabel: "Feedback",
  },
  home: {
    badge: "Bright Web3 + Y2K Pixel Style",
    title: "Turn ChatGPT history into a manageable knowledge system",
    subtitle:
      "ChatGPT History Manager adds folders, tags, color marks, pinning, floating mode, and deletion-safe sync behavior to the ChatGPT sidebar.",
    actions: [
      { label: "Install Userscript", href: SITE_LINKS.userscript, variant: "primary" },
      { label: "Download CRX", href: SITE_LINKS.crx, variant: "ghost" },
      { label: "Source Code", href: SITE_LINKS.repo, variant: "ghost" },
    ],
    metrics: [
      { label: "Organization", value: "Folders + Tags + Color + Pin" },
      { label: "Modes", value: "Docked / Floating" },
      { label: "Data Strategy", value: "Local-First" },
    ],
    featuresTitle: "Core capabilities",
    featuresSubtitle: "Aligned with actual plugin behavior.",
    features: [
      {
        title: "Structured conversation management",
        description: "Group and tag conversations, color-code context, and pin what matters.",
        chip: "Organize",
      },
      {
        title: "Floating sidebar for speed",
        description: "Use recent items and timestamp hints in a compact high-frequency workflow.",
        chip: "Floating",
      },
      {
        title: "Deletion-safe synchronization",
        description: "Native delete actions are coordinated with local tombstone semantics.",
        chip: "Safe Delete",
      },
      {
        title: "Local cache + optional sync",
        description: "Data stays local by default. Sync only happens after explicit opt-in.",
        chip: "Local-First",
      },
    ],
    trustTitle: "Why users keep it installed",
    trustItems: [
      "It manages metadata, not ad-tracking profiles.",
      "JSON import/export gives you migration and backup control.",
      "Built for resilience against transient page structure changes.",
    ],
    ctaTitle: "Ready to clean up your ChatGPT history workflow?",
    ctaText: "Install in minutes and keep conversations searchable, structured, and reusable.",
  },
  install: {
    title: "Installation",
    subtitle: "Choose the path that matches your workflow.",
    cards: [
      {
        title: "Tampermonkey / Userscript",
        hint: "Best for script users and lightweight updates.",
        actionLabel: "Install script",
        actionHref: SITE_LINKS.userscript,
        steps: [
          "Install Tampermonkey in your browser.",
          "Open the userscript URL and confirm installation.",
          "Reload chatgpt.com and verify History Manager is visible.",
        ],
      },
      {
        title: "CRX / Unpacked Extension",
        hint: "Best for extension-centric setups.",
        actionLabel: "Open releases",
        actionHref: SITE_LINKS.crx,
        steps: [
          "Download CRX or unpacked build from Releases.",
          "Enable Developer Mode in chrome://extensions.",
          "Load the extension and refresh chatgpt.com.",
        ],
      },
    ],
    compatibilityTitle: "Compatibility notes",
    compatibilityItems: [
      "Browsers: Chrome, Edge, Firefox (latest stable recommended).",
      "Target site: ChatGPT Web (chatgpt.com).",
      "Export JSON once after setup to keep a rollback snapshot.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro: "We follow a Local-First principle. By default, data remains in your browser environment.",
    blocks: [
      {
        heading: "What data is handled",
        bullets: [
          "Conversation metadata such as folders, tags, color labels, pin state, and UI preferences.",
          "No ad profiling or behavioral ad tracking purpose.",
          "No data selling policy.",
        ],
      },
      {
        heading: "Storage and transfer",
        bullets: [
          "Default: local storage in browser extension/userscript context.",
          "Sync traffic only occurs after explicit user opt-in.",
          "Sync scope focuses on plugin metadata rather than ad analytics.",
        ],
      },
      {
        heading: "User control",
        bullets: [
          "You can disable sync, clear cache, and export/import JSON at any time.",
          "Uninstalling stops future writes.",
          "Privacy requests can be submitted via GitHub Issues.",
        ],
      },
    ],
    contactLabel: "Privacy contact:",
  },
  faq: {
    title: "FAQ",
    intro: "Answers below reflect current functionality and defaults.",
    items: [
      {
        q: "Does it read full conversation bodies for monetization?",
        a: "No. The plugin is designed around sidebar metadata management, not ad monetization pipelines.",
      },
      {
        q: "Why do I sometimes see a deleted marker?",
        a: "It is a protective tombstone state to avoid accidental reappearance during transient sync mismatches.",
      },
      {
        q: "Docked vs floating mode?",
        a: "Docked keeps native layout. Floating is optimized for high-frequency switching and quick actions.",
      },
      {
        q: "Can I move data across devices?",
        a: "Yes. Use JSON export/import or opt-in sync features depending on your preference.",
      },
      {
        q: "What if ChatGPT UI changes break interactions?",
        a: "Update to latest version first, then report reproducible steps in GitHub Issues if needed.",
      },
    ],
  },
  changelog: {
    title: "Changelog",
    intro: "User-facing release highlights.",
    entries: [
      {
        version: "v0.1.0",
        date: "2026-03-09",
        highlights: [
          "Floating mode now shows compact updated timestamps.",
          "Recent list now preserves last known title after deletion.",
          "Floating conversation clicks prefer SPA navigation to avoid full reload.",
        ],
      },
      {
        version: "v0.0.x",
        date: "2026-Q1",
        highlights: [
          "Folder/tag/color/pin controls became production-ready.",
          "Deletion coordinator and tombstone filtering were stabilized.",
        ],
      },
    ],
  },
  footer: {
    tagline: "Local-first chat organization for heavy ChatGPT workflows.",
    linksLabel: "Links",
    legalNote: "This project is not affiliated with OpenAI. ChatGPT is a trademark of OpenAI.",
  },
};

export const SITE_CONTENT: Record<Lang, SiteLocaleContent> = {
  zh: zhContent,
  en: enContent,
};
