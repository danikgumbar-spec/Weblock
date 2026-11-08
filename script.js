// ═══════════════════════════════════════════════════════════════
//  SETTINGS — the only things you need to edit
// ═══════════════════════════════════════════════════════════════

// IMPORTANT: the URL of your published Windows release on GitHub.
const DOWNLOAD_URL = "https://github.com/danikgumbar-spec/Weblock/releases/download/v1.0.0/Weblock.rar";

// The name shown everywhere on the page (nav, footer, texts, tab title).
const BRAND = "BlockCode";

// Optional: where the "Contact" link in the footer goes, e.g. "mailto:you@example.com"
// or a Telegram link. Leave empty to hide the link.
const CONTACT_URL = "";

// ═══════════════════════════════════════════════════════════════
//  TEXTS  (English / Русский)   —   {brand} is replaced by BRAND
// ═══════════════════════════════════════════════════════════════
const translations = {
  en: {
    metaTitle: "{brand} — Build websites with blocks",
    metaDesc: "Build real websites by connecting visual blocks. A live preview that matches your site exactly, an AI assistant and live collaboration. Free for Windows.",
    navFeatures: "Features", navHow: "How it works", navDownload: "Download", navCta: "Get {brand}",
    eyebrow: "Free · Made for Windows",
    heroTitle: 'Build websites<br><span class="grad">with blocks.</span>',
    heroDesc: "Snap visual blocks together and watch a real website appear. A live preview that matches your site exactly, an AI that actually understands, and a friend editing next to you.",
    heroCta: "Download for Windows", heroSecondary: "See what's inside",
    heroNote: "Free to use · No account needed to start",
    live: "Live", blocks: "BLOCKS", preview: "PREVIEW",
    previewHeading: "Make room<br>for ideas.", previewButton: "Explore more", allChangesSaved: "All changes saved",
    fAiTitle: "AI assistant", fAiText: "“Make it friendlier”",
    fTipTitle: "Hover any block", fTipText: "See how it looks on the site",
    m1: "Visual blocks", m2: "Live Preview", m3: "AI assistant", m4: "Live collaboration", m5: "Themes & templates", m6: "HTML export", m7: "Publish online", m8: "Phone preview",
    s1: "visual blocks", s2: "live preview", s3: "creators in one live session", s4n: "Free", s4: "no subscriptions",
    featuresEyebrow: "THE GOOD PARTS",
    featuresTitle: 'Everything you need.<br><span class="muted">Nothing in the way.</span>',
    featuresIntro: "A visual workspace that takes you from an idea to a real web page — and keeps the code one click away.",
    c1Title: "Blocks, not boilerplate.", c1Text: "Over 120 blocks — headings, heroes, galleries, forms, pricing tables, animations, effects, sound. Snap them together instead of starting from an empty file.",
    c2Title: "A preview that is the site.", c2Text: "Live Preview renders the very same page your visitors will see — and updates while you type. No more guessing, no more clicking “Preview” again and again.",
    c3Title: "An AI that understands.", c3Text: "Ask it to build a whole page — or select one sentence and say “fix the mistakes”, “shorter”, “translate”. It works on the text you actually have.",
    aiBefore: "Avocadoes are grean and creamy.", aiAfter: "Avocados are green and creamy.", aiChip: "Fix mistakes",
    c4Title: "Build together, live.", c4Text: "Share a code and edit the same project at the same time. You see the same blocks — each with your own camera, looking at different parts of the page.",
    c5Title: "Hover to see.", c5Text: "Rest the mouse on any block and a tiny window shows exactly how it looks on the site, before you place it.",
    c6Title: "Studio: themes & templates.", c6Text: "Restyle everything in one click with design themes, start from ready-made site templates, or share yours with the community.",
    c7Title: "Your code. Your site.", c7Text: "View and copy clean HTML, CSS and JavaScript, export the page, publish it with a shareable link, or scan a QR code to check it on your phone.",
    howEyebrow: "FROM IDEA TO WEB PAGE",
    howTitle: 'Three steps.<br><span class="muted">That\'s all it takes.</span>',
    step1Title: "Pick your blocks", step1Text: "Find what you need in the block library and drop it on the canvas.",
    step2Title: "Shape the page", step2Text: "Arrange, connect and style the blocks. The preview follows every change.",
    step3Title: "Preview & publish", step3Text: "Check it on any screen size, grab the code, or publish and share a link.",
    dlEyebrow: "YOUR NEXT IDEA STARTS HERE",
    dlTitle: 'Ready to build<br><span class="grad">something great?</span>',
    dlText: "Download {brand} for Windows and start creating in minutes.",
    dlCta: "Download for Windows", dlStatus: "Free download · Windows application",
    dlChip1: "Windows", dlChip2: "Free", dlChip3: ".rar archive",
    dlStep1: "Download the archive", dlStep2: "Extract it with WinRAR or 7-Zip", dlStep3: "Run the app and start building",
    faqTitle: "Questions",
    q1: "Is it really free?", a1: "Yes. {brand} is free to use. An account is free too — you only need one for the AI assistant, live collaboration and community templates.",
    q2: "Which systems does it run on?", a2: "Windows, for now.",
    q3: "Do I get the code?", a3: "Yes. View, copy and export clean HTML, CSS and JavaScript. The site you build is yours to host anywhere.",
    q4: "How do I install it?", a4: "Download the archive, extract it with WinRAR or 7-Zip, then run the app.",
    q5: "Windows warns about an unknown publisher. Is that normal?", a5: "New apps that are not code-signed yet can trigger Windows SmartScreen. If you downloaded the file from this page, choose “More info”, then “Run anyway”.",
    footerTagline: "A visual space for web ideas.", footerMade: "Made for curious creators.", contact: "Contact", backTop: "Back to top ↑",
    msgStart: "Your download should begin shortly.",
    msgNotSet: "The download link is not set yet. Add your GitHub Release URL in script.js.",
    switchTo: "Switch to Russian"
  },
  ru: {
    metaTitle: "{brand} — Создавай сайты из блоков",
    metaDesc: "Создавай настоящие сайты, соединяя визуальные блоки. Живой просмотр, который точно совпадает с сайтом, ИИ-помощник и совместная работа. Бесплатно для Windows.",
    navFeatures: "Возможности", navHow: "Как это работает", navDownload: "Скачать", navCta: "Скачать {brand}",
    eyebrow: "Бесплатно · Для Windows",
    heroTitle: 'Создавай сайты<br><span class="grad">из блоков.</span>',
    heroDesc: "Соединяй визуальные блоки и смотри, как появляется настоящий сайт. Живой просмотр, точно как на сайте, ИИ, который действительно понимает, и друг, который правит рядом с тобой.",
    heroCta: "Скачать для Windows", heroSecondary: "Что внутри",
    heroNote: "Бесплатно · Для начала аккаунт не нужен",
    live: "Онлайн", blocks: "БЛОКИ", preview: "ПРОСМОТР",
    previewHeading: "Дай место<br>своим идеям.", previewButton: "Подробнее", allChangesSaved: "Все изменения сохранены",
    fAiTitle: "ИИ-помощник", fAiText: "«Сделай дружелюбнее»",
    fTipTitle: "Наведи на любой блок", fTipText: "Увидишь, как он выглядит на сайте",
    m1: "Визуальные блоки", m2: "Живой просмотр", m3: "ИИ-помощник", m4: "Совместная работа", m5: "Темы и шаблоны", m6: "Экспорт HTML", m7: "Публикация онлайн", m8: "Просмотр на телефоне",
    s1: "визуальных блоков", s2: "живой просмотр", s3: "человек в одной сессии", s4n: "Бесплатно", s4: "никаких подписок",
    featuresEyebrow: "САМОЕ ВКУСНОЕ",
    featuresTitle: 'Всё, что нужно.<br><span class="muted">И ничего лишнего.</span>',
    featuresIntro: "Визуальная среда, которая ведёт от идеи к настоящей веб-странице — а код всегда в одном клике.",
    c1Title: "Блоки вместо рутины.", c1Text: "Больше 120 блоков: заголовки, обложки, галереи, формы, тарифы, анимации, эффекты, звук. Собирай их, а не начинай с пустого файла.",
    c2Title: "Просмотр — это и есть сайт.", c2Text: "Живой просмотр показывает ту же страницу, которую увидят посетители, и обновляется, пока ты печатаешь. Больше не нужно гадать и снова и снова нажимать «Просмотр».",
    c3Title: "ИИ, который понимает.", c3Text: "Попроси собрать целую страницу — или выдели одно предложение и скажи «исправь ошибки», «короче», «переведи». Он работает с тем текстом, который у тебя уже есть.",
    aiBefore: "Авакадо зелёное и сливочьное.", aiAfter: "Авокадо зелёное и сливочное.", aiChip: "Исправить ошибки",
    c4Title: "Создавайте вместе, онлайн.", c4Text: "Поделись кодом и правьте один проект одновременно. Блоки у вас общие, а камера у каждого своя: можно смотреть на разные части страницы.",
    c5Title: "Наведи — и увидишь.", c5Text: "Задержи мышь на любом блоке, и маленькое окно покажет, как он выглядит на сайте, ещё до того, как ты его поставишь.",
    c6Title: "Студия: темы и шаблоны.", c6Text: "Меняй оформление всего сайта в один клик, начинай с готовых шаблонов или делись своими с сообществом.",
    c7Title: "Твой код. Твой сайт.", c7Text: "Смотри и копируй чистый HTML, CSS и JavaScript, экспортируй страницу, публикуй со ссылкой или проверь на телефоне по QR-коду.",
    howEyebrow: "ОТ ИДЕИ ДО ВЕБ-СТРАНИЦЫ",
    howTitle: 'Три шага.<br><span class="muted">Это всё.</span>',
    step1Title: "Выбери блоки", step1Text: "Найди нужное в библиотеке блоков и перетащи на холст.",
    step2Title: "Собери страницу", step2Text: "Располагай, соединяй и оформляй блоки. Просмотр следует за каждым изменением.",
    step3Title: "Проверь и опубликуй", step3Text: "Посмотри на любом размере экрана, забери код или опубликуй и поделись ссылкой.",
    dlEyebrow: "ТВОЯ СЛЕДУЮЩАЯ ИДЕЯ НАЧИНАЕТСЯ ЗДЕСЬ",
    dlTitle: 'Готов создать<br><span class="grad">что-то классное?</span>',
    dlText: "Скачай {brand} для Windows и начни творить уже через несколько минут.",
    dlCta: "Скачать для Windows", dlStatus: "Бесплатное скачивание · Приложение для Windows",
    dlChip1: "Windows", dlChip2: "Бесплатно", dlChip3: "Архив .rar",
    dlStep1: "Скачай архив", dlStep2: "Распакуй его через WinRAR или 7-Zip", dlStep3: "Запусти приложение и начни создавать",
    faqTitle: "Вопросы",
    q1: "Это правда бесплатно?", a1: "Да. {brand} можно пользоваться бесплатно. Аккаунт тоже бесплатный — он нужен только для ИИ-помощника, совместной работы и шаблонов сообщества.",
    q2: "На каких системах работает?", a2: "Пока на Windows.",
    q3: "Получу ли я код?", a3: "Да. Смотри, копируй и экспортируй чистый HTML, CSS и JavaScript. Сайт, который ты создашь, можно разместить где угодно.",
    q4: "Как установить?", a4: "Скачай архив, распакуй его через WinRAR или 7-Zip и запусти приложение.",
    q5: "Windows предупреждает о неизвестном издателе. Это нормально?", a5: "Новые приложения без цифровой подписи могут вызывать предупреждение Windows SmartScreen. Если ты скачал файл с этой страницы, нажми «Подробнее», затем «Выполнить в любом случае».",
    footerTagline: "Визуальное пространство для веб-идей.", footerMade: "Для тех, кто любит создавать.", contact: "Связаться", backTop: "Наверх ↑",
    msgStart: "Скачивание должно начаться в ближайшее время.",
    msgNotSet: "Ссылка пока не добавлена. Вставь URL своего GitHub Release в файл script.js.",
    switchTo: "Переключить на английский"
  }
};

// ═══════════════════════════════════════════════════════════════
//  LANGUAGE
// ═══════════════════════════════════════════════════════════════
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let currentLanguage = "en";

function tr(key) {
  const dict = translations[currentLanguage] || translations.en;
  return (dict[key] ?? translations.en[key] ?? "").replaceAll("{brand}", BRAND);
}

function setLanguage(lang, save = true) {
  currentLanguage = translations[lang] ? lang : "en";
  document.documentElement.lang = currentLanguage;
  $$("[data-i18n]").forEach(el => { const v = tr(el.dataset.i18n); if (v) el.textContent = v; });
  $$("[data-i18n-html]").forEach(el => { const v = tr(el.dataset.i18nHtml); if (v) el.innerHTML = v; });
  $$("[data-brand]").forEach(el => { el.textContent = BRAND; });
  document.title = tr("metaTitle");
  const md = $('meta[name="description"]'); if (md) md.content = tr("metaDesc");
  const lt = $("#languageToggle");
  lt.textContent = currentLanguage === "en" ? "RU" : "EN";
  lt.setAttribute("aria-label", tr("switchTo"));
  refreshStatus();
  if (save) { try { localStorage.setItem("lang", currentLanguage); } catch (e) {} }
}

$("#languageToggle").addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ru" : "en"));

// ═══════════════════════════════════════════════════════════════
//  DOWNLOAD
// ═══════════════════════════════════════════════════════════════
const downloadButton = $("#downloadButton");
const downloadStatus = $("#downloadStatus");
const urlReady = DOWNLOAD_URL.startsWith("https://");
let statusKey = "dlStatus";           // what the line under the button currently says

function refreshStatus() { downloadStatus.textContent = tr(statusKey); }

$$("[data-download], #downloadButton").forEach(a => {
  if (urlReady) {
    a.href = DOWNLOAD_URL;
    a.addEventListener("click", () => { statusKey = "msgStart"; refreshStatus(); });
  } else if (a === downloadButton) {
    a.addEventListener("click", e => { e.preventDefault(); statusKey = "msgNotSet"; refreshStatus(); });
  }
});

// ═══════════════════════════════════════════════════════════════
//  MOBILE MENU · NAV · MISC
// ═══════════════════════════════════════════════════════════════
const menuButton = $("#mobileMenuButton");
const mobileNav = $("#mobileNav");
function closeMenu() {
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}
menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
$$("a", mobileNav).forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

$("#year").textContent = new Date().getFullYear();
const contactLink = $("#contactLink");
if (CONTACT_URL) { contactLink.href = CONTACT_URL; contactLink.hidden = false; }

// ═══════════════════════════════════════════════════════════════
//  MOTION  (all of it is skipped for people who prefer reduced motion)
// ═══════════════════════════════════════════════════════════════
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// block "wave" grid in the first feature card
const grid = $(".minigrid");
const palette = ["#4C97FF", "#9966FF", "#FF6680", "#FFAB19", "#7ee0b0", "#22d3ee"];
for (let i = 0; i < 30; i++) {
  const s = document.createElement("span");
  s.style.setProperty("--c", palette[(i * 7 + Math.floor(i / 10)) % palette.length]);
  s.style.setProperty("--d", ((i % 10) * 0.12 + Math.floor(i / 10) * 0.2).toFixed(2) + "s");
  grid.appendChild(s);
}

// reveal on scroll (with a small stagger inside each group)
const revealEls = $$(".reveal");
revealEls.forEach(el => {
  const group = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains("reveal")) : [];
  el.style.setProperty("--rd", (Math.max(0, group.indexOf(el)) * 0.08).toFixed(2) + "s");
});
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in"));
}

if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  // the product window leans toward the mouse
  const hero = $("#hero"), win = $("#window");
  let raf = 0;
  hero.addEventListener("mousemove", e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      win.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
      win.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
    });
  });
  hero.addEventListener("mouseleave", () => { win.style.setProperty("--rx", "0deg"); win.style.setProperty("--ry", "0deg"); });

  // soft spotlight that follows the mouse on the feature cards
  $$(".card").forEach(card => card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  }));
}

// ═══════════════════════════════════════════════════════════════
//  START — pick the saved language, else the browser's
// ═══════════════════════════════════════════════════════════════
let startLang = "en";
try { startLang = localStorage.getItem("lang") || ""; } catch (e) {}
if (!translations[startLang]) startLang = (navigator.language || "en").toLowerCase().startsWith("ru") ? "ru" : "en";
setLanguage(startLang, false);
