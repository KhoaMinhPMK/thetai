const translations = {
  vi: {
    navProfile: "Hồ sơ",
    navAcademics: "Học thuật",
    navCases: "Dự án",
    navVentures: "Khởi nghiệp",
    navJournal: "Nhật ký",
    navContact: "Liên hệ",
    heroLabel: "Portfolio cá nhân",
    heroCopy:
      "Một operator-builder có kỷ luật, được đào tạo qua kinh doanh quốc tế, logistics, supply chain, vận hành khởi nghiệp và giải quyết vấn đề dựa trên nghiên cứu.",
    heroCases: "Xem dự án",
    heroArchive: "Nội dung đầy đủ",
    statAchievements: "Thành tích học thuật",
    statDegrees: "Bằng cấp trọng điểm",
    statVentures: "Dự án khởi nghiệp",
    profileTitle: "Hồ sơ & Tổng quan",
    bioSentence:
      "Một người học có kỷ luật cao và năng lực vận hành thực chiến, với nền tảng mạnh về kinh doanh quốc tế, logistics, khởi nghiệp và giải quyết vấn đề dựa trên nghiên cứu.",
    academicsTitle: "Nền tảng học thuật",
    casesTitle: "Hồ sơ dự án",
    venturesTitle: "Ventures & Leadership Logs",
    journalTitle: "Long-form Journal",
    archiveTitle: "Complete Source Archive",
    archiveIntro: "Khu vực này render toàn bộ source file ngay trong trang để kiểm tra và đối chiếu.",
    contactTitle: "Thông tin liên hệ",
    readFull: "Đọc toàn bộ nội dung",
    openAsset: "Mở tư liệu",
    sourceFile: "Source file",
  },
  en: {
    navProfile: "Profile",
    navAcademics: "Academics",
    navCases: "Cases",
    navVentures: "Ventures",
    navJournal: "Journal",
    navContact: "Contact",
    heroLabel: "Personal Portfolio",
    heroCopy:
      "A disciplined operator-builder trained across international business, logistics, supply chain, venture execution, and research-based problem solving.",
    heroCases: "View Cases",
    heroArchive: "Full Content",
    statAchievements: "Academic achievements",
    statDegrees: "Top-tier degrees",
    statVentures: "Venture startups",
    profileTitle: "Profile & Overview",
    bioSentence:
      "A high-discipline learner and operator with strong foundations in international business, logistics, entrepreneurship, and research-driven problem solving.",
    academicsTitle: "Academic Foundation",
    casesTitle: "Project Dossiers",
    venturesTitle: "Ventures & Leadership Logs",
    journalTitle: "Long-form Journal",
    archiveTitle: "Complete Source Archive",
    archiveIntro: "This area renders the complete source files in-page for review and verification.",
    contactTitle: "Contact Information",
    readFull: "Read full content",
    openAsset: "Open material",
    sourceFile: "Source file",
  },
};

const EDIT_MODE = "off";
const MEDIA_OVERRIDE_STORAGE_KEY = "duong-the-tai-media-overrides-v1";
const GALLERY_STORAGE_KEY = "duong-the-tai-gallery-overrides-v1";
const MEDIA_OVERRIDES = {
  // Example for deployment:
  // "academics-gpa": "./assets/new-gpa.jpg",
};

const state = {
  lang: "vi",
  loadedSources: {},
  sections: {},
  projectFilter: "all",
  projectQuery: "",
};

const sourceFiles = [
  { key: "cases", title: "3. CASES", path: "./content/cases.txt", target: "cases-dossiers" },
  { key: "ventures", title: "4. VENTURES", path: "./content/ventures.txt", target: "ventures-dossiers" },
  { key: "journal", title: "5. JOURNAL", path: "./content/journal.txt", target: "journal-dossiers" },
];

const skills = [
  "Data Analytics",
  "Power BI",
  "SQL",
  "Tableau",
  "Gemini AI",
  "Incoterms",
  "Cross-Functional Leadership",
  "High-Stake Negotiation",
  "Conflict Resolution",
  "Public Speaking & Pitching",
];

const mediaLibrary = [
  {
    keys: ["MEALNIMALS", "GroWarriors", "STARTUP ZONE"],
    title: "Mealnimals / GroWarriors",
    url: "./Drive%20For%20Portfolio%20Website/Mealnimals_3.1/Quan_Quan_HRS.jpeg",
  },
  {
    keys: ["VILAW", "LEGIS", "LegalTech"],
    title: "VILAW LEGIS AI",
    url: "./Drive%20For%20Portfolio%20Website/Vilaw_Legis_AI_3.2/Quan_Quan_UII.jpeg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/Vilaw_Legis_AI_3.2/Innovation_Quest_2.jpg",
      "./Drive%20For%20Portfolio%20Website/Vilaw_Legis_AI_3.2/UII.jpeg",
      "./Drive%20For%20Portfolio%20Website/Vilaw_Legis_AI_3.2/Innovation_Quest.jpg",
    ],
  },
  {
    keys: ["CONT-TECT", "Digiport", "Motion Masters"],
    title: "Cont-Tect Motion Masters",
    url: "./Drive%20For%20Portfolio%20Website/CONT-TECT_-_Motion_Masters/MOTION_MASTERS_VIDEO_PROTOTYPE.mp4",
    poster: "./Drive%20For%20Portfolio%20Website/Camaco_3.11/Camaco_win.jpg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/CONT-TECT_-_Motion_Masters/MOTION_MASTERS.mp4",
      "./Drive%20For%20Portfolio%20Website/CONT-TECT_-_Motion_Masters/MOTION_MASTERS___FINALE_ROUND___CONTTECT.pdf",
    ],
  },
  {
    keys: ["MEAL-KIT", "VECOM", "KINH DOANH SỐ"],
    title: "Meal-Kit E-commerce Platform",
    url: "./Drive%20For%20Portfolio%20Website/MealKit_3.4.JPG",
  },
  {
    keys: ["MANAGEMENT TRAINEE", "NHÂN SỰ TÀI NĂNG", "HRS"],
    title: "Management Trainee Challenge",
    url: "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/IMG_20240507_221608.jpg",
  },
  {
    keys: ["OVINA", "COOP", "FARM-TO-TABLE"],
    title: "OVINA / COOP Challenge",
    url: "./Drive%20For%20Portfolio%20Website/COOP_3.6/Quan_Quan_COOP.JPG",
  },
  {
    keys: ["AGROBRICK", "FTU"],
    title: "Agrobrick",
    url: "./Drive%20For%20Portfolio%20Website/Agrobrick_3.7/Quan_Quan_FTU2.jpg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/Agrobrick_3.7/STartup_wheels.png",
      "./Drive%20For%20Portfolio%20Website/Agrobrick_3.7/QQ_ftu_2.jpg",
    ],
  },
  {
    keys: ["PUREVIA", "TDTU", "Eggshell"],
    title: "Purevia",
    url: "./Drive%20For%20Portfolio%20Website/Purevia_-_3.8/TDTU.jpg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/Purevia_-_3.8/Quy_Quan_TDTU.jpg",
      "./Drive%20For%20Portfolio%20Website/Purevia_-_3.8/TDTU_quy_quan.jpg",
    ],
  },
  {
    keys: ["5T", "GPA"],
    title: "Academic evidence",
    url: "./Drive%20For%20Portfolio%20Website/5T_3.9/5T.jpeg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/5T_3.9/5T.mp4",
      "./Drive%20For%20Portfolio%20Website/5T_3.9/GPA.jpg",
    ],
  },
  {
    keys: ["CAMACO"],
    title: "Camaco",
    url: "./Drive%20For%20Portfolio%20Website/Camaco_3.11/Camaco.jpg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/Camaco_3.11/Camaco_win.jpg",
    ],
  },
  {
    keys: ["BRAINWAVE", "AETERNA", "CICSIC"],
    title: "BrainWave / AETERNA",
    url: "./Drive%20For%20Portfolio%20Website/BrainWave_3.13/Brainwave.jpeg",
  },
  {
    keys: ["DEBATE"],
    title: "Debate",
    url: "./Drive%20For%20Portfolio%20Website/3.14_Debate/Quy_Quan_Debate_KQM.jpg",
  },
  {
    keys: ["EQUAL VOICE"],
    title: "Equal Voice",
    url: "./Drive%20For%20Portfolio%20Website/3.15_Equal_Voice/Quy_quan_Equalvoice.jpg",
  },
  {
    keys: ["UNISTAY"],
    title: "Unistay operations",
    url: "./Drive%20For%20Portfolio%20Website/5T_3.9/5T.jpeg",
  },
  {
    keys: ["EDUTYNKER", "TYNKER"],
    title: "EduTynker digital system",
    url: "./Drive%20For%20Portfolio%20Website/BrainWave_3.13/Ivennio.jpeg",
  },
  {
    keys: ["VOLUNTEER", "IBP002", "AIESEC", "VSIC", "L.A.E", "HRS"],
    title: "Leadership archive",
    url: "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/FB_IMG_1715154238230.jpg",
    gallery: [
      "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/FB_IMG_1715154232592.jpg",
      "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/1HTC7UQVC_5LBTB1.jpg",
      "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/1HTC7UQHQ_5LBTB1.jpg",
      "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/IMG_20240507_221608.jpg",
      "./Drive%20For%20Portfolio%20Website/QQ_HR_Regenz_3.12/1HTC7UQ6D_5LBTB1.jpg",
    ],
  },
  {
    keys: ["LOGISTICS", "CẢNG", "CHUỖI CUNG ỨNG"],
    title: "Logistics analysis",
    url: "./Drive%20For%20Portfolio%20Website/CONT-TECT_-_Motion_Masters/MOTION_MASTERS___FINALE_ROUND___CONTTECT.pdf",
  },
];

const fallbackMedia = {
  title: "Portfolio evidence",
  url: "./Drive%20For%20Portfolio%20Website/5T_3.9/5T.jpeg",
};

function applyLanguage() {
  const dict = translations[state.lang];
  document.documentElement.lang = state.lang;
  document.getElementById("language-label").textContent = state.lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-read-full]").forEach((node) => {
    node.textContent = dict.readFull;
  });
  document.querySelectorAll("[data-open-asset]").forEach((node) => {
    node.textContent = dict.openAsset;
  });
  sanitizeVisibleEmoji();
}

function sanitizeVisibleEmoji() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const cleaned = stripEmoji(node.nodeValue);
    if (cleaned !== node.nodeValue.trim()) node.nodeValue = cleaned ? ` ${cleaned} ` : "";
  });
}

function setActiveView(viewName, shouldUpdateHash = true) {
  const fallback = document.querySelector('[data-view="home"]');
  const target = document.querySelector(`[data-view="${viewName}"]`) || fallback;
  if (!target) return;

  const activeView = target.dataset.view;
  document.querySelectorAll("[data-view]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.view === activeView);
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewLink === activeView);
  });
  if (shouldUpdateHash) {
    history.replaceState(null, "", `#${activeView === "home" ? "home" : activeView}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindViewTabs() {
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveView(link.dataset.viewLink);
    });
  });

  window.addEventListener("hashchange", () => {
    const hashStr = location.hash.replace("#", "");
    if (hashStr.startsWith("post-")) {
      const parts = hashStr.split("-");
      if (parts.length >= 3) {
        openSinglePost(parts[1], parseInt(parts[2], 10));
        return;
      }
    }
    closeSinglePost();
    setActiveView(hashStr || "home", false);
  });
}

function stripEmoji(text) {
  return text
    .replace(/[\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1FAFF}\u{2300}-\u{27BF}\u{FE0F}]/gu, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function normalizeHeading(line) {
  return stripEmoji(line)
    .replace(/^[\s\-–—•\u{1F539}]+/u, "")
    .trim();
}

function isSectionHeading(line, key) {
  const clean = normalizeHeading(line);
  if (!clean) return false;
  if (key === "cases") return /^3\.\d+\./.test(clean);
  if (key === "ventures") return /^(\[VENTURE\s+\d+\]|\[LOG\s+\d+\]|[12]\.\s|[A-ZÀ-Ỹ].*\(CORE VENTURES\))/i.test(clean);
  if (key === "journal") return /^BLOG\s+\d+:/i.test(clean);
  return false;
}

function isSourceChapterHeading(line) {
  return /^(\d+(\.\d+)*\.|\[VENTURE\s+\d+\]|\[LOG\s+\d+\]|BLOG\s+\d+:)/i.test(normalizeHeading(line));
}

function isGenericSubheading(line) {
  return /^(Tổng quan dự án|Project overview|Full Text)$/i.test(normalizeHeading(line));
}

function stripSectionPrefix(line) {
  return normalizeHeading(line)
    .replace(/^\d+(\.\d+)*\.\s*/u, "")
    .replace(/^\[(VENTURE|LOG)\s+\d+\]\s*[—-]?\s*/iu, "")
    .replace(/^BLOG\s+\d+:\s*/iu, "")
    .trim();
}

function resolveSectionTitle(section, fallbackTitle) {
  const titleLine = section.lines
    .map(normalizeHeading)
    .find((line) => line && !isSourceChapterHeading(line) && !isGenericSubheading(line));
  const displayTitle = stripSectionPrefix(section.displayTitle);

  if (titleLine && titleLine.length <= 170) return titleLine;
  return displayTitle || titleLine || fallbackTitle;
}

function splitIntoSections(text, key, title) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const sections = [];
  let current = { displayTitle: title, lines: [] };
  let journalBlogStarted = false;

  lines.forEach((line) => {
    let isHeading = isSectionHeading(line, key);
    if (key === "journal") {
      const clean = normalizeHeading(line);
      const isBlogHeading = /^BLOG\s+\d+:/i.test(clean);
      if (isBlogHeading) journalBlogStarted = true;
      isHeading = isBlogHeading || (!journalBlogStarted && /^\d+\.\s/.test(clean));
    }

    if (isHeading) {
      if (current.lines.some((item) => item.trim())) sections.push(current);
      current = { displayTitle: normalizeHeading(line), lines: [] };
      return;
    }
    current.lines.push(line);
  });

  if (current.lines.some((item) => item.trim())) sections.push(current);
  return sections
    .map((section) => ({
      ...section,
      title: resolveSectionTitle(section, title),
    }))
    .filter((section) => {
      const body = section.lines.map(stripEmoji).join(" ").trim();
      if (!body) return false;
      if (/^(CASES|VENTURES|JOURNAL)$/i.test(section.title)) return false;
      return body !== stripEmoji(section.title);
    });
}

function firstMeaningfulParagraph(lines, title) {
  return (
    lines
      .map(stripEmoji)
      .filter((line) => line && !/^[-]+$/.test(line) && line !== stripEmoji(title) && !isGenericSubheading(line))
      .slice(0, 2)
      .join(" ") || "Full long-form source content is available in the expanded body."
  );
}

function findMedia(section) {
  const haystack = `${section.title}\n${section.lines.join("\n")}`.toUpperCase();
  return (
    mediaLibrary.find((item) => item.keys.some((key) => haystack.includes(key.toUpperCase()))) ||
    fallbackMedia
  );
}

function getStoredGalleries() {
  try {
    return JSON.parse(localStorage.getItem(GALLERY_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStoredGallery(key, items) {
  const galleries = getStoredGalleries();
  if (items.length) galleries[key] = items;
  else delete galleries[key];
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(galleries));
}

function getMediaTypeFromUrl(url) {
  if (/\.mp4($|\?)/i.test(url)) return "video";
  if (/\.pdf($|\?)/i.test(url)) return "pdf";
  return "image";
}

function getProjectGallery(media, galleryKey) {
  const builtInItems = (media.gallery || []).map((url, index) => ({
    title: `${media.title} material ${index + 1}`,
    url,
  }));
  const storedItems = (getStoredGalleries()[galleryKey] || []).map((item, index) => ({
    title: item.title || `Uploaded material ${index + 1}`,
    url: item.url,
  }));
  return [...builtInItems, ...storedItems];
}

function getProjectCategory(section) {
  const haystack = `${section.title}\n${section.lines.join("\n")}`.toUpperCase();
  if (/MEALNIMALS|VILAW|STARTUP|VENTURE|UNISTAY|EDUTYNKER/.test(haystack)) return "venture";
  if (/LOGISTICS|CONTAINER|CONT-TECT|CẢNG|SUPPLY CHAIN|CHUỖI CUNG ỨNG/.test(haystack)) return "logistics";
  if (/AI|TECH|AETERNA|BRAINWAVE|SIMULATION|AUTOMATED|DASHBOARD|PLATFORM/.test(haystack)) return "tech";
  return "venture";
}

function renderMediaElement(media, mediaId) {
  const frame = document.createElement("div");
  frame.className = "dossier-media-frame";

  if (getMediaTypeFromUrl(media.url) === "video") {
    const video = document.createElement("video");
    video.dataset.mediaId = mediaId;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = true;
    video.preload = "metadata";
    if (media.poster) video.poster = media.poster;
    const source = document.createElement("source");
    source.src = media.url;
    source.type = "video/mp4";
    video.appendChild(source);
    frame.appendChild(video);
  } else if (getMediaTypeFromUrl(media.url) === "pdf") {
    frame.classList.add("pdf-media-frame");
    const card = document.createElement("a");
    card.className = "pdf-media-card";
    card.href = media.url;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.dataset.mediaId = mediaId;
    card.ariaLabel = `Open ${media.title}`;

    const type = document.createElement("span");
    type.className = "pdf-media-type";
    type.textContent = "Portfolio Document";

    const title = document.createElement("strong");
    title.textContent = media.title;

    const cta = document.createElement("em");
    cta.textContent = "Open full material";

    card.append(type, title, cta);
    frame.appendChild(card);
  } else {
    const image = document.createElement("img");
    image.dataset.mediaId = mediaId;
    image.src = media.url;
    image.alt = media.title;
    image.loading = "lazy";
    frame.appendChild(image);
  }

  return frame;
}

function appendTextLines(root, lines, options = {}) {
  let buffer = [];
  const cleanLine = (line) => (options.preserveEmoji ? line.trim() : stripEmoji(line));

  const flush = () => {
    if (!buffer.length) return;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = buffer.map(escapeHtml).join("<br>");
    root.appendChild(paragraph);
    buffer = [];
  };

  lines.forEach((line) => {
    const clean = cleanLine(line);
    if (!clean) {
      flush();
      return;
    }
    if (/^(\[|[A-Z0-9].*:|[0-9]+\.\s|BLOG\s+\d+:)/i.test(clean) && clean.length < 150) {
      flush();
      const heading = document.createElement("p");
      heading.innerHTML = `<strong>${escapeHtml(clean)}</strong>`;
      root.appendChild(heading);
      return;
    }
    buffer.push(clean);
  });

  flush();
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function createDossier(section, index, sourceKey) {
  const media = findMedia(section);
  const article = document.createElement("article");
  article.className = "dossier";
  if (sourceKey === "ventures") article.classList.add("venture-log-card");
  if (sourceKey === "journal") article.classList.add("journal-card");
  article.dataset.category = sourceKey === "cases" ? getProjectCategory(section) : sourceKey;
  article.dataset.searchText = `${section.title} ${section.lines.join(" ")}`.toLowerCase();

  const mediaWrap = document.createElement("aside");
  mediaWrap.className = "dossier-media";
  
  const featuredBadge = document.createElement("span");
  featuredBadge.className = "dossier-featured";
  featuredBadge.textContent = "Featured";
  mediaWrap.appendChild(featuredBadge);

  mediaWrap.appendChild(renderMediaElement(media, `${sourceKey}-${index + 1}-media`));

  const content = document.createElement("div");
  content.className = "dossier-content";

  const metaRow = document.createElement("div");
  metaRow.className = "dossier-meta";
  const readTime = Math.max(1, Math.floor(section.lines.length / 4));
  metaRow.innerHTML = `Dossier ${String(index + 1).padStart(2, "0")} <span style="opacity: 0.5; margin: 0 8px;">|</span> ${readTime} phút đọc`;

  const title = document.createElement("h3");
  title.className = "dossier-title";
  let finalTitle = stripSectionPrefix(normalizeHeading(section.title));
  title.textContent = toTitleCase(finalTitle);

  const summary = document.createElement("p");
  summary.className = "dossier-summary";
  summary.textContent = firstMeaningfulParagraph(section.lines, section.title);

  const summaryToggle = document.createElement("div");
  summaryToggle.className = "dossier-footer";
  summaryToggle.onclick = () => {
    window.location.hash = `#post-${sourceKey}-${index}`;
  };

  const tags = document.createElement("div");
  tags.className = "dossier-tags";
  
  // Use the section key or category as tag
  const tagStr = (section.title.split(" ")[0] || "Portfolio").replace(/[^a-zA-Z]/g, '').toLowerCase() || "portfolio";
  const tag1 = document.createElement("span");
  tag1.className = "dossier-tag";
  tag1.textContent = sourceKey === "cases" ? article.dataset.category : tagStr;
  
  const tag2 = document.createElement("span");
  tag2.className = "dossier-tag";
  tag2.textContent = "case study";
  
  tags.append(tag1, tag2);

  const actions = document.createElement("div");
  actions.className = "dossier-actions";

  const readMore = document.createElement("span");
  readMore.className = "dossier-read-more";
  readMore.dataset.readFull = "";
  readMore.innerHTML = translations[state.lang].readFull + " &rarr;";

  actions.append(readMore);
  summaryToggle.append(tags, actions);

  content.append(metaRow, title, summary, summaryToggle);
  article.append(mediaWrap, content);
  return article;
}

function updateProjectCounts() {
  const cards = [...document.querySelectorAll("#cases-dossiers .dossier")];
  const countBy = (category) => cards.filter((card) => category === "all" || card.dataset.category === category).length;
  const projectCount = document.getElementById("project-count");
  const allCount = document.getElementById("filter-all-count");
  const ventureCount = document.getElementById("filter-venture-count");
  const logisticsCount = document.getElementById("filter-logistics-count");
  const techCount = document.getElementById("filter-tech-count");
  if (projectCount) projectCount.textContent = String(cards.length).padStart(2, "0");
  if (allCount) allCount.textContent = cards.length;
  if (ventureCount) ventureCount.textContent = countBy("venture");
  if (logisticsCount) logisticsCount.textContent = countBy("logistics");
  if (techCount) techCount.textContent = countBy("tech");
}

function applyProjectFilters() {
  const cards = [...document.querySelectorAll("#cases-dossiers .dossier")];
  const query = state.projectQuery.trim().toLowerCase();
  cards.forEach((card) => {
    const categoryMatch = state.projectFilter === "all" || card.dataset.category === state.projectFilter;
    const searchMatch = !query || card.dataset.searchText.includes(query);
    card.hidden = !(categoryMatch && searchMatch);
  });
}

function bindProjectControls() {
  const search = document.getElementById("project-search");
  if (search) {
    search.addEventListener("input", () => {
      state.projectQuery = search.value;
      applyProjectFilters();
    });
  }

  document.querySelectorAll("[data-project-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.projectFilter = button.dataset.projectFilter;
      document.querySelectorAll("[data-project-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      applyProjectFilters();
    });
  });
}

function renderSourceArchive() {
  const root = document.getElementById("source-archive");
  root.innerHTML = "";
  sourceFiles.forEach((source) => {
    const panel = document.createElement("article");
    panel.className = "source-panel";
    const header = document.createElement("header");
    const titleWrap = document.createElement("div");
    const meta = document.createElement("span");
    meta.className = "source-meta";
    meta.textContent = translations[state.lang].sourceFile;
    const title = document.createElement("h3");
    title.textContent = source.title;
    titleWrap.append(meta, title);
    const link = document.createElement("a");
    link.href = source.path;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.path;
    header.append(titleWrap, link);
    const body = document.createElement("div");
    body.className = "source-body";
    appendTextLines(body, state.loadedSources[source.key].split("\n"));
    panel.append(header, body);
    root.appendChild(panel);
  });
}

async function renderDossiers() {
  await Promise.all(
    sourceFiles.map(async (source) => {
      let text = window.PORTFOLIO_CONTENT?.[source.key];
      if (!text) {
        const response = await fetch(source.path);
        text = await response.text();
      }
      state.loadedSources[source.key] = text;
      const sections = splitIntoSections(text, source.key, source.title);
      state.sections[source.key] = sections;
      const target = document.getElementById(source.target);
      target.innerHTML = "";
      sections.forEach((section, index) => {
        target.appendChild(createDossier(section, index, source.key));
      });
      if (source.key === "cases") {
        updateProjectCounts();
        applyProjectFilters();
      }
    }),
  );
  renderSourceArchive();
  applyLanguage();
}

function renderSkills() {
  document.querySelectorAll("[data-skill-list]").forEach((root) => {
    root.innerHTML = "";
    skills.forEach((skill) => {
      const item = document.createElement("span");
      item.textContent = skill;
      root.appendChild(item);
    });
  });
}

function bindLanguageToggle() {
  document.getElementById("language-toggle").addEventListener("click", () => {
    state.lang = state.lang === "vi" ? "en" : "vi";
    applyLanguage();
  });
}

function editModeEnabled() {
  return String(EDIT_MODE).toLowerCase() === "on";
}

function readStoredMediaOverrides() {
  try {
    return JSON.parse(localStorage.getItem(MEDIA_OVERRIDE_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStoredMediaOverride(key, value) {
  const overrides = readStoredMediaOverrides();
  if (value) overrides[key] = value;
  else delete overrides[key];
  localStorage.setItem(MEDIA_OVERRIDE_STORAGE_KEY, JSON.stringify(overrides));
}

function getVideoSource(video) {
  return video.querySelector("source")?.getAttribute("src") || video.getAttribute("src") || "";
}

function ensureMediaKey(media, index) {
  if (media.dataset.mediaId) return media.dataset.mediaId;
  const originalSource = media.tagName === "VIDEO" ? getVideoSource(media) : media.getAttribute("src");
  const key = `media-${index}-${btoa(unescape(encodeURIComponent(originalSource || "asset"))).slice(0, 12)}`;
  media.dataset.mediaId = key;
  return key;
}

function captureOriginalMedia(media) {
  if (media.dataset.originalSrc) return;

  if (media.tagName === "VIDEO") {
    media.dataset.originalSrc = getVideoSource(media);
    if (media.poster) media.dataset.originalPoster = media.poster;
    return;
  }

  media.dataset.originalSrc = media.getAttribute("src") || "";
  media.closest("picture")?.querySelectorAll("source").forEach((source) => {
    source.dataset.originalSrcset = source.getAttribute("srcset") || "";
  });
}

function setMediaSource(media, value) {
  if (media.tagName === "VIDEO") {
    const source = media.querySelector("source");
    if (source) source.src = value;
    else media.src = value;
    media.load();
    return;
  }

  media.src = value;
  media.closest("picture")?.querySelectorAll("source").forEach((source) => {
    source.srcset = value;
  });
}

function resetMediaSource(media) {
  if (media.tagName === "VIDEO") {
    const source = media.querySelector("source");
    const original = media.dataset.originalSrc || "";
    if (source) source.src = original;
    else media.src = original;
    if (media.dataset.originalPoster) media.poster = media.dataset.originalPoster;
    media.load();
    return;
  }

  media.src = media.dataset.originalSrc || "";
  media.closest("picture")?.querySelectorAll("source").forEach((source) => {
    source.srcset = source.dataset.originalSrcset || media.dataset.originalSrc || "";
  });
}

function applyMediaOverrides() {
  const storedOverrides = readStoredMediaOverrides();
  const mediaNodes = [...document.querySelectorAll("img:not([hidden]), video")];

  mediaNodes.forEach((media, index) => {
    captureOriginalMedia(media);
    const key = ensureMediaKey(media, index);
    const override = storedOverrides[key] || MEDIA_OVERRIDES[key];
    if (override) setMediaSource(media, override);
  });
}

function createMediaEditorPanel(media, key) {
  const panel = document.createElement("form");
  panel.className = "media-editor-panel";
  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!urlInput.value.trim()) return;
    setMediaSource(media, urlInput.value.trim());
    writeStoredMediaOverride(key, urlInput.value.trim());
  });

  const label = document.createElement("span");
  label.textContent = key;

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = media.tagName === "VIDEO" ? "video/*" : "image/*";
  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const value = String(reader.result || "");
      setMediaSource(media, value);
      writeStoredMediaOverride(key, value);
    });
    reader.readAsDataURL(file);
  });

  const uploadButton = document.createElement("button");
  uploadButton.type = "button";
  uploadButton.textContent = "Thay file";
  uploadButton.addEventListener("click", () => fileInput.click());

  const urlInput = document.createElement("input");
  urlInput.type = "url";
  urlInput.placeholder = "URL media";
  urlInput.value = readStoredMediaOverrides()[key] || MEDIA_OVERRIDES[key] || "";

  const applyButton = document.createElement("button");
  applyButton.type = "submit";
  applyButton.textContent = "Áp dụng";

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", () => {
    urlInput.value = "";
    writeStoredMediaOverride(key, "");
    resetMediaSource(media);
  });

  panel.append(label, uploadButton, urlInput, applyButton, resetButton, fileInput);
  return panel;
}

function readFilesAsGalleryItems(files) {
  return Promise.all(
    [...files].map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            resolve({
              title: file.name.replace(/\.[^.]+$/, ""),
              url: String(reader.result || ""),
            });
          });
          reader.readAsDataURL(file);
        }),
    ),
  );
}

function createGalleryUploadForm(galleryKey, rerender) {
  const form = document.createElement("form");
  form.className = "post-gallery-editor";

  const label = document.createElement("span");
  label.textContent = "Edit gallery";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*,video/*";
  fileInput.multiple = true;

  const uploadButton = document.createElement("button");
  uploadButton.type = "button";
  uploadButton.textContent = "Thêm nhiều file";
  uploadButton.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", async () => {
    if (!fileInput.files?.length) return;
    const currentItems = getStoredGalleries()[galleryKey] || [];
    const nextItems = await readFilesAsGalleryItems(fileInput.files);
    writeStoredGallery(galleryKey, [...currentItems, ...nextItems]);
    rerender();
  });

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.textContent = "Xóa file đã upload";
  clearButton.addEventListener("click", () => {
    writeStoredGallery(galleryKey, []);
    rerender();
  });

  form.append(label, uploadButton, clearButton, fileInput);
  return form;
}

function renderPostGallery(media, sourceKey, index) {
  const galleryRoot = document.getElementById("post-gallery");
  const gallerySection = document.getElementById("post-gallery-section");
  const galleryKey = `${sourceKey}-${index + 1}-gallery`;
  const galleryItems = getProjectGallery(media, galleryKey);
  galleryRoot.innerHTML = "";

  if (editModeEnabled()) {
    galleryRoot.appendChild(
      createGalleryUploadForm(galleryKey, () => {
        renderPostGallery(media, sourceKey, index);
        initMediaEditor();
      }),
    );
  }

  galleryItems.forEach((item, itemIndex) => {
    const card = document.createElement("article");
    card.className = "post-gallery-card";
    card.appendChild(renderMediaElement(item, `${galleryKey}-${itemIndex + 1}-media`));
    galleryRoot.appendChild(card);
  });

  gallerySection.hidden = !editModeEnabled() && galleryItems.length === 0;
}

function initMediaEditor() {
  applyMediaOverrides();
  if (!editModeEnabled()) return;

  document.body.classList.add("is-edit-mode");
  [...document.querySelectorAll("img:not([hidden]), video")].forEach((media, index) => {
    const key = ensureMediaKey(media, index);
    const shell =
      media.closest(".dossier-media-frame, figure, .academic-band, .masterpiece-rail article, .hero") ||
      media.parentElement;

    if (!shell || shell.querySelector(`.media-editor-panel[data-editor-for="${CSS.escape(key)}"]`)) return;
    shell.classList.add("editable-media-shell");

    const panel = createMediaEditorPanel(media, key);
    panel.dataset.editorFor = key;
    shell.appendChild(panel);
  });
}

function autoplayVideosWhenVisible() {
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    },
    { threshold: 0.35 },
  );
  videos.forEach((video) => observer.observe(video));
}

async function init() {
  renderSkills();
  bindViewTabs();
  bindLanguageToggle();
  bindProjectControls();
  applyLanguage();
  await renderDossiers();
  initMediaEditor();
  autoplayVideosWhenVisible();
  const initialHash = location.hash.replace("#", "") || "home";
  if (initialHash.startsWith("post-")) {
    const parts = initialHash.split("-");
    if (parts.length >= 3) openSinglePost(parts[1], parseInt(parts[2], 10));
  } else {
    setActiveView(initialHash, false);
  }
}

init().catch((error) => {
  console.error(error);
  const archive = document.getElementById("source-archive");
  archive.textContent =
    "Content archive is temporarily unavailable. Please check that content-data.js is present.";
});


function openSinglePost(sourceKey, index) {
  const section = state.sections[sourceKey]?.[index];
  if (!section) return;

  const main = document.getElementById("home");
  const postView = document.getElementById("single-post-view");
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");
  if (header) header.style.display = "none";
  if (footer) footer.style.display = "none";
  main.style.display = "none";
  postView.style.display = "block";
  window.scrollTo(0, 0);

  const media = findMedia(section);
  const mediaContainer = document.getElementById("post-media-container");
  mediaContainer.innerHTML = "";
  mediaContainer.appendChild(renderMediaElement(media, `${sourceKey}-${index + 1}-cover-media`));

  const readTime = Math.max(1, Math.floor(section.lines.length / 4));
  document.getElementById("post-meta").innerHTML = `📅 Dossier ${String(index + 1).padStart(2, "0")} <span style="opacity: 0.5; margin: 0 8px;">|</span> ⏱️ ${readTime} phút đọc`;
  
  let finalPostTitle = stripSectionPrefix(normalizeHeading(section.title));
  document.getElementById("post-title").textContent = toTitleCase(finalPostTitle);

  const tagStr = (section.title.split(" ")[0] || "Portfolio").replace(/[^a-zA-Z]/g, '').toLowerCase() || "portfolio";
  document.getElementById("post-tags").innerHTML = `<span class="dossier-tag">${tagStr}</span><span class="dossier-tag">case study</span>`;

  const body = document.getElementById("post-body");
  body.innerHTML = "";
  appendTextLines(body, section.lines, { preserveEmoji: true });
  renderPostGallery(media, sourceKey, index);
  initMediaEditor();
}

function closeSinglePost() {
  document.getElementById("home").style.display = "block";
  document.getElementById("single-post-view").style.display = "none";
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");
  if (header) header.style.display = "flex";
  if (footer) footer.style.display = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("post-back-btn");
  if (backBtn) {
    backBtn.onclick = () => {
      // Go back to the previous section hash or home
      window.history.back();
    };
  }
});
