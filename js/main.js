/**
 * ============================================================================
 * @fileoverview Main Application Controller for Muhammed Enes BAL's Portfolio
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @version      4.0.0 (Phase 4 - Interactive Engineering Modules & Case Study Engine)
 * @description  Orchestrates bilingual (TR/EN) localization (i18n), KPI stat cards,
 *               the interactive "Sim-to-Real" Air/Sea/Ground System Architecture
 *               Explorer, domain-filtered project showcase cards, 6-category
 *               technical competencies matrix, chronological milestone timeline,
 *               click-to-copy contact center, URL hash deep-linking (#project-1..8),
 *               and the multi-image Case Study Modal with PDF page deep-links.
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. APPLICATION STATE & LOCALIZATION (i18n) INITIALIZATION
   ========================================================================== */

/**
 * Storage key used to persist the user's preferred language in localStorage.
 * @constant {string}
 */
const LANG_STORAGE_KEY = "meb_lang";

/**
 * Resolves the initial language preference using a 3-tier fallback strategy:
 * 1. Explicit user preference saved in `localStorage`
 * 2. Browser UI language (`navigator.language`)
 * 3. Default fallback ("tr")
 *
 * @returns {"tr" | "en"} Resolved language code
 */
function resolveInitialLanguage() {
  try {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang === "tr" || savedLang === "en") {
      return savedLang;
    }
  } catch (err) {
    console.warn("[i18n] localStorage access restricted, falling back to browser locale.", err);
  }

  const browserLang =
    typeof navigator !== "undefined" &&
    navigator.language &&
    navigator.language.toLowerCase().startsWith("tr")
      ? "tr"
      : "en";

  return browserLang || "tr";
}

/**
 * Global reactive UI state.
 */
let currentLang = resolveInitialLanguage();
let activeDomainId = "air";
let activeProjectFilter = "all";
let activeModalProjectId = null;
let activeGalleryIndex = 0;

/* ==========================================================================
   2. DOM ELEMENT REFERENCES
   ========================================================================== */

const scrollProgressEl = document.getElementById("scroll-progress");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navActionsEl = document.getElementById("nav-actions");
const langToggle = document.getElementById("lang-toggle");

const statsGrid = document.getElementById("stats-grid");
const explorerTabsEl = document.getElementById("explorer-tabs");
const explorerTitleEl = document.getElementById("explorer-domain-title");
const explorerSubtitleEl = document.getElementById("explorer-domain-subtitle");
const explorerPipelineEl = document.getElementById("explorer-pipeline");

const projectFiltersEl = document.getElementById("project-filters");
const projectsGrid = document.getElementById("projects-grid");
const skillsGrid = document.getElementById("skills-grid");
const timelineListEl = document.getElementById("timeline-list");

const copyEmailBtn = document.getElementById("copy-email-btn");
const copyToastEl = document.getElementById("copy-toast");

// Modal DOM Elements
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalPrevBtn = document.getElementById("modal-prev-btn");
const modalNextBtn = document.getElementById("modal-next-btn");

/* ==========================================================================
   3. MASTER RENDERING PIPELINE
   ========================================================================== */

/**
 * Synchronizes the entire UI with the current active language (`currentLang`).
 * Re-renders all static `[data-i18n]` nodes and dynamic data modules, including
 * any currently open project modal.
 */
function renderUI() {
  document.documentElement.lang = currentLang;

  if (langToggle) {
    langToggle.textContent = currentLang === "tr" ? "EN" : "TR";
    langToggle.setAttribute(
      "aria-label",
      currentLang === "tr" ? "Switch language to English" : "Dili Türkçeye çevir"
    );
  }

  // Translate all static DOM nodes decorated with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_TEXT[currentLang] && UI_TEXT[currentLang][key]) {
      el.textContent = UI_TEXT[currentLang][key];
    }
  });

  renderHeroStats();
  renderSystemExplorer();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderTimeline();

  // If the modal is currently open, refresh its localized content seamlessly
  if (activeModalProjectId !== null) {
    const activeProject = PROJECTS.find((p) => p.id === activeModalProjectId);
    if (activeProject) {
      populateModalContent(activeProject, activeGalleryIndex);
    }
  }
}

/* ==========================================================================
   4. HERO KPI STATISTICS RENDERER (PDF PAGE 2)
   ========================================================================== */

/**
 * Renders the 4 quantitative engineering KPI stat cards below the Hero section.
 */
function renderHeroStats() {
  if (!statsGrid || !Array.isArray(HERO_STATS)) return;

  statsGrid.innerHTML = HERO_STATS.map(
    (stat) => `
      <div class="stat-card">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label[currentLang]}</div>
        <div class="stat-sub">${stat.sub[currentLang]}</div>
      </div>
    `
  ).join("");
}

/* ==========================================================================
   5. INTERACTIVE "SIM-TO-REAL" SYSTEM ARCHITECTURE EXPLORER
   ========================================================================== */

/**
 * Renders the interactive Air (UAV), Sea (AUV), and Ground (Level 4 UGV)
 * 4-stage autonomy pipeline explorer.
 */
function renderSystemExplorer() {
  if (!explorerTabsEl || !explorerPipelineEl || !Array.isArray(OPERATION_DOMAINS)) return;

  const currentDomain =
    OPERATION_DOMAINS.find((d) => d.id === activeDomainId) || OPERATION_DOMAINS[0];

  // Render domain selector tabs
  explorerTabsEl.innerHTML = "";
  OPERATION_DOMAINS.forEach((domain) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `explorer-tab ${domain.id === currentDomain.id ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", domain.id === currentDomain.id ? "true" : "false");
    btn.textContent = domain.tabLabel[currentLang];
    btn.addEventListener("click", () => {
      activeDomainId = domain.id;
      renderSystemExplorer();
    });
    explorerTabsEl.appendChild(btn);
  });

  // Update header metadata
  if (explorerTitleEl) explorerTitleEl.textContent = currentDomain.title[currentLang];
  if (explorerSubtitleEl) explorerSubtitleEl.textContent = currentDomain.subtitle[currentLang];

  // Render 4-stage engineering pipeline cards
  explorerPipelineEl.innerHTML = currentDomain.stages
    .map(
      (stage) => `
        <div class="pipeline-stage">
          <span class="pipeline-stage-num">${stage.step}</span>
          <h4>${stage.title[currentLang]}</h4>
          <ul>
            ${stage.items[currentLang].map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");
}

/* ==========================================================================
   6. PROJECT FILTER BAR & ENGINEERING CASE STUDY CARDS
   ========================================================================== */

/**
 * Renders the project domain filter buttons with live project counts.
 */
function renderProjectFilters() {
  if (!projectFiltersEl || !Array.isArray(PROJECTS)) return;

  const filterDefs = [
    { id: "all", label: UI_TEXT[currentLang].filter_all, count: PROJECTS.length },
    {
      id: "robotics",
      label: UI_TEXT[currentLang].filter_robotics,
      count: PROJECTS.filter((p) => p.domain === "robotics").length
    },
    {
      id: "cv-ai",
      label: UI_TEXT[currentLang].filter_cv,
      count: PROJECTS.filter((p) => p.domain === "cv-ai").length
    },
    {
      id: "embedded",
      label: UI_TEXT[currentLang].filter_embedded,
      count: PROJECTS.filter((p) => p.domain === "embedded").length
    },
    {
      id: "nlp-game",
      label: UI_TEXT[currentLang].filter_nlp_game,
      count: PROJECTS.filter((p) => p.domain === "nlp-game").length
    }
  ];

  projectFiltersEl.innerHTML = "";
  filterDefs.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn ${activeProjectFilter === f.id ? "active" : ""}`;
    btn.innerHTML = `${f.label} <span class="filter-count">(${f.count})</span>`;
    btn.addEventListener("click", () => {
      activeProjectFilter = f.id;
      renderProjectFilters();
      renderProjects();
    });
    projectFiltersEl.appendChild(btn);
  });
}

/**
 * Dynamically renders the filtered project cards into `#projects-grid`.
 * Includes cover image, telemetry project code, PDF page indicator, quantitative
 * metric chips, and keyboard accessibility.
 */
function renderProjects() {
  if (!projectsGrid || !Array.isArray(PROJECTS)) return;

  projectsGrid.innerHTML = "";

  const filteredProjects =
    activeProjectFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === activeProjectFilter);

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card has-cover";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `${project.title[currentLang]} - ${project.category[currentLang]}`
    );

    const metricsHtml = Array.isArray(project.metrics)
      ? project.metrics
          .map((m) => `<span class="metric-chip">${m[currentLang]}</span>`)
          .join("")
      : "";

    const previewTagsHtml = project.tags
      .slice(0, 4)
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const pdfPageLabel = currentLang === "tr" ? `PDF s.${project.pdfPage}` : `PDF p.${project.pdfPage}`;

    card.innerHTML = `
      <div class="card-cover">
        <img
          src="${project.coverImage}"
          alt="${project.title[currentLang]}"
          loading="lazy"
          width="500"
          height="280"
        />
        <span class="card-code-overlay">${project.code}</span>
        <span class="card-pdf-badge">${pdfPageLabel}</span>
      </div>
      <div class="card-body">
        <span class="badge">${project.category[currentLang]}</span>
        <h3>${project.title[currentLang]}</h3>
        <p>${project.summary[currentLang]}</p>
        <div class="card-metrics">${metricsHtml}</div>
      </div>
      <div class="card-footer">
        <div class="tags">${previewTagsHtml}</div>
        <span class="card-inspect-link">${UI_TEXT[currentLang].card_inspect}</span>
      </div>
    `;

    card.addEventListener("click", () => openModal(project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(project);
      }
    });

    projectsGrid.appendChild(card);
  });
}

/* ==========================================================================
   7. TECHNICAL COMPETENCIES (6 CATEGORIES) & TIMELINE RENDERERS
   ========================================================================== */

/**
 * Renders all 6 technical competency categories from PDF Page 3 into `#skills-grid`.
 */
function renderSkills() {
  if (!skillsGrid || !Array.isArray(SKILLS)) return;

  skillsGrid.innerHTML = "";

  SKILLS.forEach((skillGroup) => {
    const div = document.createElement("div");
    div.className = "skill-card";

    const badgesHtml = Array.isArray(skillGroup.badges)
      ? skillGroup.badges.map((b) => `<span class="skill-badge">${b}</span>`).join("")
      : "";

    div.innerHTML = `
      <div class="skill-card-header">
        <span class="skill-icon" aria-hidden="true">${skillGroup.icon || "⚡"}</span>
        <h3>${skillGroup.title[currentLang]}</h3>
      </div>
      <p>${skillGroup.summary ? skillGroup.summary[currentLang] : skillGroup.items}</p>
      <div class="skill-badges">${badgesHtml}</div>
    `;
    skillsGrid.appendChild(div);
  });
}

/**
 * Renders the chronological competition, research grant, and academic timeline.
 */
function renderTimeline() {
  if (!timelineListEl || !Array.isArray(TIMELINE)) return;

  timelineListEl.innerHTML = TIMELINE.map(
    (item) => `
      <div class="timeline-item">
        <div class="timeline-meta">
          <span class="timeline-period">${item.period}</span>
          <span class="timeline-tag">${item.tag[currentLang]}</span>
        </div>
        <h3>${item.title[currentLang]}</h3>
        <p>${item.desc[currentLang]}</p>
      </div>
    `
  ).join("");
}

/* ==========================================================================
   8. CASE STUDY ENGINEERING MODAL CONTROLLER (GALLERY, FLOWS, TABLES, DEEP-LINK)
   ========================================================================== */

/**
 * Populates all sections of the Case Study Modal for the selected project.
 *
 * @param {Object} project - Project object from `PROJECTS`
 * @param {number} [galleryIdx=0] - Active gallery image index
 */
function populateModalContent(project, galleryIdx = 0) {
  const categoryEl = document.getElementById("modal-category");
  const codeEl = document.getElementById("modal-code");
  const titleEl = document.getElementById("modal-title");
  const summaryEl = document.getElementById("modal-summary");
  const metricsEl = document.getElementById("modal-metrics");
  const archGridEl = document.getElementById("modal-arch-grid");
  const contribTextEl = document.getElementById("modal-contrib-text");
  const detailsList = document.getElementById("modal-details");
  const challengesListEl = document.getElementById("modal-challenges-list");
  const tableSectionEl = document.getElementById("modal-table-section");
  const tableHeadEl = document.getElementById("modal-table-head");
  const tableBodyEl = document.getElementById("modal-table-body");
  const tagsDiv = document.getElementById("modal-tags");
  const pdfLinkEl = document.getElementById("modal-pdf-deeplink");

  if (categoryEl) categoryEl.textContent = project.category[currentLang];
  if (codeEl) codeEl.textContent = project.code;
  if (titleEl) titleEl.textContent = project.title[currentLang];
  if (summaryEl) summaryEl.textContent = project.summary[currentLang];

  // Quantitative metrics
  if (metricsEl && Array.isArray(project.metrics)) {
    metricsEl.innerHTML = project.metrics
      .map((m) => `<span class="metric-chip">${m[currentLang]}</span>`)
      .join("");
  }

  // Visual Gallery & Thumbnails
  renderModalGallery(project, galleryIdx);

  // 3-Stage System Architecture Flow Blocks
  if (archGridEl && Array.isArray(project.architecture)) {
    archGridEl.innerHTML = project.architecture
      .map(
        (node) => `
          <div class="arch-node">
            <h5>${node.title[currentLang]}</h5>
            <ul>
              ${node.items[currentLang].map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      )
      .join("");
  }

  // My Contribution Callout
  if (contribTextEl && project.myContribution) {
    contribTextEl.textContent = project.myContribution[currentLang];
  }

  // Technical Implementation Details
  if (detailsList && Array.isArray(project.details[currentLang])) {
    detailsList.innerHTML = project.details[currentLang]
      .map((detailItem) => `<li>${detailItem}</li>`)
      .join("");
  }

  // Optional Technical Specs / Benchmark Table (MonTech & House M.D. NLP)
  if (tableSectionEl && tableHeadEl && tableBodyEl) {
    if (project.specsTable) {
      tableSectionEl.style.display = "block";
      const headers = project.specsTable.headers[currentLang];
      const rows = project.specsTable.rows[currentLang];

      tableHeadEl.innerHTML = `<tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>`;
      tableBodyEl.innerHTML = rows
        .map(
          (row) =>
            `<tr>${row
              .map((cell, idx) =>
                idx === row.length - 1 && cell.startsWith("+")
                  ? `<td class="highlight-cell">${cell}</td>`
                  : `<td>${cell}</td>`
              )
              .join("")}</tr>`
        )
        .join("");
    } else {
      tableSectionEl.style.display = "none";
    }
  }

  // Engineering Challenges & Solutions
  if (challengesListEl && project.challenges && Array.isArray(project.challenges[currentLang])) {
    challengesListEl.innerHTML = project.challenges[currentLang]
      .map((ch) => `<li>${ch}</li>`)
      .join("");
  }

  // Full Technology Tags
  if (tagsDiv && Array.isArray(project.tags)) {
    tagsDiv.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }

  // Direct PDF Page Deep-Link (e.g., Muhammed_Enes_BAL_Portfolio_TR.pdf#page=5)
  if (pdfLinkEl && PROFILE_DATA && PROFILE_DATA.pdfs) {
    const pdfBase = PROFILE_DATA.pdfs[currentLang] || PROFILE_DATA.pdfs.tr;
    const pageSuffix = project.pdfPage ? `#page=${project.pdfPage}` : "";
    pdfLinkEl.href = `${pdfBase}${pageSuffix}`;
    const pageText =
      currentLang === "tr"
        ? `📄 PDF Portfolyoda Bu Projeyi Aç (Sayfa ${project.pdfPage})`
        : `📄 Open This Project in PDF Portfolio (Page ${project.pdfPage})`;
    pdfLinkEl.textContent = pageText;
  }
}

/**
 * Renders the main image, caption, and clickable thumbnails inside the project modal.
 *
 * @param {Object} project - Active project object
 * @param {number} index - Selected image index inside `project.gallery`
 */
function renderModalGallery(project, index) {
  const galleryWrap = document.getElementById("modal-gallery-wrap");
  const mainImg = document.getElementById("modal-gallery-img");
  const captionEl = document.getElementById("modal-gallery-caption");
  const thumbsEl = document.getElementById("modal-gallery-thumbs");

  if (!galleryWrap || !mainImg || !captionEl || !thumbsEl) return;

  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  if (gallery.length === 0) {
    galleryWrap.style.display = "none";
    return;
  }

  galleryWrap.style.display = "block";
  const safeIndex = index >= 0 && index < gallery.length ? index : 0;
  activeGalleryIndex = safeIndex;

  const activeItem = gallery[safeIndex];
  mainImg.src = activeItem.src;
  mainImg.alt = activeItem.caption[currentLang];
  captionEl.textContent = `${safeIndex + 1} / ${gallery.length} — ${activeItem.caption[currentLang]}`;

  thumbsEl.innerHTML = "";
  if (gallery.length > 1) {
    gallery.forEach((item, idx) => {
      const thumbBtn = document.createElement("button");
      thumbBtn.type = "button";
      thumbBtn.className = `gallery-thumb ${idx === safeIndex ? "active" : ""}`;
      thumbBtn.setAttribute("aria-label", `View image ${idx + 1}`);
      thumbBtn.innerHTML = `<img src="${item.src}" alt="" loading="lazy" />`;
      thumbBtn.addEventListener("click", () => renderModalGallery(project, idx));
      thumbsEl.appendChild(thumbBtn);
    });
  }
}

/**
 * Opens the Case Study Modal for the given project, locks background scroll,
 * and updates the URL hash (`#project-1`) for direct shareability.
 *
 * @param {Object} project - Selected project from `PROJECTS`
 */
function openModal(project) {
  if (!modal || !project) return;

  activeModalProjectId = project.id;
  activeGalleryIndex = 0;

  populateModalContent(project, 0);

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Scroll modal container to top
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) modalContent.scrollTop = 0;

  // Update URL hash without triggering page jump
  if (history.replaceState) {
    history.replaceState(null, "", `#project-${project.id}`);
  }
}

/**
 * Closes the Case Study Modal and restores background scrolling.
 */
function closeModal() {
  if (!modal) return;

  activeModalProjectId = null;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (history.replaceState && window.location.hash.startsWith("#project-")) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

/**
 * Navigates to the previous or next project inside the modal without closing it.
 *
 * @param {-1 | 1} direction - `-1` for previous, `1` for next
 */
function navigateModalProject(direction) {
  if (activeModalProjectId === null || !Array.isArray(PROJECTS)) return;

  const currentIndex = PROJECTS.findIndex((p) => p.id === activeModalProjectId);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + direction + PROJECTS.length) % PROJECTS.length;
  openModal(PROJECTS[nextIndex]);
}

/* ==========================================================================
   9. CLIPBOARD COPY, MOBILE NAVIGATION, SCROLL PROGRESS & HASH ROUTING
   ========================================================================== */

/**
 * Copies text to the user's clipboard and displays a status toast notification.
 *
 * @param {string} text - Text to copy
 */
function copyToClipboard(text) {
  const showToast = () => {
    if (!copyToastEl) return;
    copyToastEl.textContent = `${UI_TEXT[currentLang].toast_copied}${text}`;
    copyToastEl.classList.add("show");
    setTimeout(() => copyToastEl.classList.remove("show"), 2600);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showToast).catch(() => fallbackCopy(text, showToast));
  } else {
    fallbackCopy(text, showToast);
  }
}

/**
 * Fallback clipboard helper for older browsers or non-HTTPS contexts.
 */
function fallbackCopy(text, callback) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (err) {
    console.warn("[Clipboard] Copy failed", err);
  }
  document.body.removeChild(textarea);
}

/**
 * Checks if the URL hash references a specific project (e.g., `#project-1`)
 * and automatically opens its Case Study modal on load.
 */
function checkUrlHashForProject() {
  const hash = window.location.hash;
  const match = /^#project-(\d+)$/.exec(hash);
  if (match && Array.isArray(PROJECTS)) {
    const projectId = parseInt(match[1], 10);
    const targetProject = PROJECTS.find((p) => p.id === projectId);
    if (targetProject) {
      openModal(targetProject);
    }
  }
}

/* ==========================================================================
   10. EVENT LISTENERS & APPLICATION BOOTSTRAP
   ========================================================================== */

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    try {
      localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    } catch (err) {
      console.warn("[i18n] Unable to persist language selection.", err);
    }
    renderUI();
  });
}

if (mobileMenuBtn && navActionsEl) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navActionsEl.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenuBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Close mobile menu when a navigation link is clicked
  navActionsEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navActionsEl.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.textContent = "☰";
    });
  });
}

if (copyEmailBtn && PROFILE_DATA) {
  copyEmailBtn.addEventListener("click", () => copyToClipboard(PROFILE_DATA.email));
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
if (modalPrevBtn) modalPrevBtn.addEventListener("click", () => navigateModalProject(-1));
if (modalNextBtn) modalNextBtn.addEventListener("click", () => navigateModalProject(1));

// Global Keyboard Shortcuts (Escape to close modal, Left/Right arrows to switch projects)
document.addEventListener("keydown", (e) => {
  if (!modal || modal.classList.contains("hidden")) return;

  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowLeft") {
    navigateModalProject(-1);
  } else if (e.key === "ArrowRight") {
    navigateModalProject(1);
  }
});

// Scroll Progress Bar Listener
window.addEventListener(
  "scroll",
  () => {
    if (!scrollProgressEl) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    scrollProgressEl.style.width = `${pct}%`;
  },
  { passive: true }
);

window.addEventListener("hashchange", checkUrlHashForProject);

// Bootstrap UI on load
renderUI();
checkUrlHashForProject();
