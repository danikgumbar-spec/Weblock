// IMPORTANT: Replace this with the URL of your published Windows release on GitHub.
const DOWNLOAD_URL = "https://github.com/danikgumbar-spec/Weblock/releases/download/v1.0.0/Weblock.rar";

const translations = {
  en: {
    announcement:"Meet a more visual way to build for the web.",discover:"Discover BlockCode",
    navFeatures:"Features",navHow:"How it works",navDownload:"Download",navCta:"Get BlockCode",
    eyebrow:"A NEW WAY TO CREATE",heroTitle:'Your ideas.<br><span class="gradient-text">Beautifully built.</span>',
    heroDescription:"Create websites by connecting visual blocks. See your changes live, explore real code, and bring your ideas to the web — all in one creative workspace.",
    heroCta:"Download for Windows",heroSecondary:"Explore the features",heroNote:"Made for Windows · Download details coming soon",
    live:"Live",blocks:"BLOCKS",layout:"Layout",text:"Text",media:"Media",style:"Style",logic:"Logic",
    yourPage:"YOUR PAGE",blockSection:"Create section",blockHeading:"Add heading",blockText:"Add text",blockImage:"Add image",dragHint:"Drag blocks to create your page",preview:"PREVIEW",previewHeading:"Make room<br>for ideas.",previewButton:"Explore more",allChangesSaved:"All changes saved",chipAi:"AI-assisted editing",chipPreview:"Live preview",scroll:"SCROLL TO EXPLORE",
    proofOne:"Think visually",proofTwo:"Build with blocks",proofThree:"See it come alive",proofFour:"Explore the code",
    featuresEyebrow:"MADE TO MAKE CREATING FEEL NATURAL",featuresTitle:'Less wrestling with code.<br><span class="muted-heading">More making things happen.</span>',featuresIntro:"A visual workspace that helps you move from an idea to a working web page — while keeping the code within reach.",
    f1Title:"Build with blocks.",f1Text:"Put together page elements in a visual workspace. Arrange, connect, and shape your website without starting from a blank code editor.",
    f2Title:"See every change.",f2Text:"Use live preview to see how your page is coming together as you work.",
    f3Title:"The code is yours.",f3Text:"View and copy HTML, CSS, and JavaScript. Connect the visual result with the code that powers it.",
    f4Title:"A little help from AI.",f4Text:"Use AI-assisted editing to help refine your work and explore new directions.",
    howEyebrow:"FROM IDEA TO WEB PAGE",howTitle:'A simpler way<br>to get <span>started.</span>',howIntro:"You bring the idea. BlockCode gives you a visual place to shape it, test it, and understand what you've made.",
    howCta:"Try BlockCode",step1Title:"Choose your blocks",step1Text:"Find the elements you need in the block library.",step2Title:"Shape your page",step2Text:"Arrange elements and build the structure visually.",step3Title:"Preview and refine",step3Text:"Check your result, make changes, and explore the code.",
    downloadEyebrow:"YOUR NEXT IDEA STARTS HERE",downloadTitle:'Ready to build<br><span class="gradient-text">something great?</span>',downloadText:"Bring your ideas into a visual workspace. Download BlockCode for Windows and start creating.",downloadCta:"Download for Windows",windowsApp:"Windows application",releaseInfo:"Release information will appear here",downloadStatus:"The download link will be activated when the first release is published.",
    footerTagline:"A visual space for web ideas.",footerMade:"Made for curious creators.",contact:"Contact"
  },
  ru: {
    announcement:"Открой для себя новый визуальный способ создавать сайты.",discover:"Познакомиться с BlockCode",
    navFeatures:"Возможности",navHow:"Как это работает",navDownload:"Скачать",navCta:"Попробовать BlockCode",
    eyebrow:"НОВЫЙ СПОСОБ СОЗДАВАТЬ",heroTitle:'Твои идеи.<br><span class="gradient-text">Воплощённые красиво.</span>',
    heroDescription:"Создавай сайты, соединяя визуальные блоки. Смотри изменения в реальном времени, изучай настоящий код и воплощай идеи в интернете — в одном творческом пространстве.",
    heroCta:"Скачать для Windows",heroSecondary:"Посмотреть возможности",heroNote:"Для Windows · Скоро появится ссылка на скачивание",
    live:"Онлайн",blocks:"БЛОКИ",layout:"Макет",text:"Текст",media:"Медиа",style:"Стиль",logic:"Логика",
    yourPage:"ТВОЯ СТРАНИЦА",blockSection:"Создать секцию",blockHeading:"Добавить заголовок",blockText:"Добавить текст",blockImage:"Добавить изображение",dragHint:"Перетаскивай блоки и создавай страницу",preview:"ПРЕДПРОСМОТР",previewHeading:"Дай место<br>своим идеям.",previewButton:"Подробнее",allChangesSaved:"Все изменения сохранены",chipAi:"Редактирование с ИИ",chipPreview:"Живой предпросмотр",scroll:"ЛИСТАЙ НИЖЕ",
    proofOne:"Думай визуально",proofTwo:"Создавай из блоков",proofThree:"Смотри результат",proofFour:"Изучай код",
    featuresEyebrow:"СОЗДАВАТЬ ДОЛЖНО БЫТЬ ПРОСТО",featuresTitle:'Меньше борьбы с кодом.<br><span class="muted-heading">Больше настоящего творчества.</span>',featuresIntro:"Визуальная среда, которая помогает превратить идею в работающую веб-страницу и при этом держать код под рукой.",
    f1Title:"Создавай из блоков.",f1Text:"Собирай элементы страницы в визуальном редакторе. Располагай их и соединяй, не начиная каждый раз с пустого окна редактора кода.",
    f2Title:"Видь каждое изменение.",f2Text:"Используй живой предпросмотр и наблюдай, как страница меняется прямо во время работы.",
    f3Title:"Код остаётся твоим.",f3Text:"Просматривай и копируй HTML, CSS и JavaScript. Связывай визуальный результат с кодом, который за ним стоит.",
    f4Title:"Немного помощи от ИИ.",f4Text:"Используй ИИ-помощника, чтобы улучшать проект и пробовать новые идеи.",
    howEyebrow:"ОТ ИДЕИ ДО ВЕБ-СТРАНИЦЫ",howTitle:'Начать<br><span>проще, чем кажется.</span>',howIntro:"Ты придумываешь идею. BlockCode даёт визуальное пространство, чтобы собрать её, проверить и понять, как всё устроено.",
    howCta:"Попробовать BlockCode",step1Title:"Выбери блоки",step1Text:"Найди нужные элементы в библиотеке блоков.",step2Title:"Собери страницу",step2Text:"Расположи элементы и создай структуру визуально.",step3Title:"Проверь и улучши",step3Text:"Посмотри результат, внеси изменения и изучи код.",
    downloadEyebrow:"ТВОЯ СЛЕДУЮЩАЯ ИДЕЯ НАЧИНАЕТСЯ ЗДЕСЬ",downloadTitle:'Готов создать<br><span class="gradient-text">что-то классное?</span>',downloadText:"Перенеси свои идеи в визуальную среду. Скачай BlockCode для Windows и начни создавать.",downloadCta:"Скачать для Windows",windowsApp:"Приложение для Windows",releaseInfo:"Информация о версии появится здесь",downloadStatus:"Ссылка на скачивание станет активной после публикации первой версии.",
    footerTagline:"Визуальное пространство для веб-идей.",footerMade:"Для тех, кто любит создавать.",contact:"Связаться"
  }
};

let currentLanguage = "en";
const languageToggle = document.getElementById("languageToggle");
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === "en" ? "RU" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Russian" : "Switch to English");
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ru" : "en"));

const downloadButton = document.getElementById("downloadButton");
const downloadStatus = document.getElementById("downloadStatus");
if (DOWNLOAD_URL.startsWith("https://")) {
  downloadButton.href = DOWNLOAD_URL;
  downloadButton.addEventListener("click", () => {
    downloadStatus.textContent = currentLanguage === "en" ? "Your download should begin shortly." : "Скачивание должно начаться в ближайшее время.";
  });
} else {
  downloadButton.addEventListener("click", event => {
    event.preventDefault();
    downloadStatus.textContent = currentLanguage === "en"
      ? "The download link is not set yet. Add your GitHub Release URL in script.js."
      : "Ссылка пока не добавлена. Вставь URL своего GitHub Release в файл script.js.";
  });
}

const menuButton = document.getElementById("mobileMenuButton");
const mobileNav = document.getElementById("mobileNav");
menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
