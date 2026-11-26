/**
 * ============================================================================
 * @fileoverview Main Application Orchestrator
 * @module       js/main
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @version      5.0.0 (Phase 5 - Modular Architecture & Clean Separation of Concerns)
 * @description  Coordinates application state, delegates rendering to
 *               `js/modules/i18n.js`, `js/modules/renderers.js`, and
 *               `js/modules/modal.js`, and manages event listeners, keyboard
 *               navigation, clipboard utilities, and URL hash deep-linking.
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. REACTIVE APPLICATION STATE
   ========================================================================== */

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

const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalPrevBtn = document.getElementById("modal-prev-btn");
const modalNextBtn = document.getElementById("modal-next-btn");

/* ==========================================================================
   3. ORCHESTRATED UI RENDERING PIPELINE
   ========================================================================== */

/**
 * Synchronizes the entire UI with the current active language (`currentLang`).
 */
function renderUI() {
  translateStaticDOM(currentLang, langToggle);
  renderHeroStats();
  renderSystemExplorer();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderTimeline();

  // Refresh open modal content if active during language toggle
  if (activeModalProjectId !== null) {
    const activeProject = PROJECTS.find((p) => p.id === activeModalProjectId);
    if (activeProject) {
      populateModalContent(activeProject, activeGalleryIndex);
    }
  }
}

/**
 * Delegates Hero KPI stats rendering to `js/modules/renderers.js`.
 */
function renderHeroStats() {
  renderHeroStatsSection(statsGrid, currentLang);
}

/**
 * Delegates interactive Sim-to-Real System Explorer rendering to `js/modules/renderers.js`.
 */
function renderSystemExplorer() {
  renderExplorerSection(
    {
      tabsEl: explorerTabsEl,
      titleEl: explorerTitleEl,
      subtitleEl: explorerSubtitleEl,
      pipelineEl: explorerPipelineEl
    },
    activeDomainId,
    currentLang,
    (newDomainId) => {
      activeDomainId = newDomainId;
      renderSystemExplorer();
    }
  );
}

/**
 * Delegates category filter bar rendering to `js/modules/renderers.js`.
 */
function renderProjectFilters() {
  renderFilterControls(projectFiltersEl, activeProjectFilter, currentLang, (newFilterId) => {
    activeProjectFilter = newFilterId;
    renderProjectFilters();
    renderProjects();
  });
}

/**
 * Delegates project cards grid rendering to `js/modules/renderers.js`.
 */
function renderProjects() {
  renderProjectCardsGrid(projectsGrid, activeProjectFilter, currentLang, openModal);
}

/**
 * Delegates 6-domain technical competencies rendering to `js/modules/renderers.js`.
 */
function renderSkills() {
  renderSkillsMatrix(skillsGrid, currentLang);
}

/**
 * Delegates chronological milestone timeline rendering to `js/modules/renderers.js`.
 */
function renderTimeline() {
  renderTimelineSection(timelineListEl, currentLang);
}

/* ==========================================================================
   4. MODAL LIFECYCLE & NAVIGATION DELEGATION
   ========================================================================== */

/**
 * Populates modal content via `js/modules/modal.js`.
 *
 * @param {Object} project - Project object
 * @param {number} [galleryIdx=0] - Selected image index
 */
function populateModalContent(project, galleryIdx = 0) {
  populateCaseStudyModal(project, galleryIdx, currentLang, (idx) => {
    activeGalleryIndex = idx;
  });
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

  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) modalContent.scrollTop = 0;

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
   5. CLIPBOARD COPY & URL HASH ROUTER
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
   6. EVENT LISTENERS & APPLICATION BOOTSTRAP
   ========================================================================== */

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    saveLanguagePreference(currentLang);
    renderUI();
  });
}

if (mobileMenuBtn && navActionsEl) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navActionsEl.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenuBtn.textContent = isOpen ? "✕" : "☰";
  });

  navActionsEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navActionsEl.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.textContent = "☰";
    });
  });
}

if (copyEmailBtn && typeof PROFILE_DATA !== "undefined") {
  copyEmailBtn.addEventListener("click", () => copyToClipboard(PROFILE_DATA.email));
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
if (modalPrevBtn) modalPrevBtn.addEventListener("click", () => navigateModalProject(-1));
if (modalNextBtn) modalNextBtn.addEventListener("click", () => navigateModalProject(1));

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
