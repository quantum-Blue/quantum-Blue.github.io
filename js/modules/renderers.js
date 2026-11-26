/**
 * ============================================================================
 * @fileoverview Section & Component DOM Renderers Module (Zero-Emoji SVG Edition)
 * @module       js/modules/renderers
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @description  Pure/Modular UI rendering functions using crisp vector SVG icons
 *               matching the PDF Technical Portfolio aesthetic.
 * ============================================================================
 */

"use strict";

/**
 * Vector SVG icons matching PDF Page 3 Technical Competencies icons.
 * @constant {Object<string, string>}
 */
const SKILL_SVG_ICONS = {
  ai: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>`,
  vision: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  robotics: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M12 4v4"/><path d="M8 4h8"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/></svg>`,
  slam: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>`,
  embedded: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="6" y="6" rx="2"/><path d="M9 2v4"/><path d="M15 2v4"/><path d="M9 18v4"/><path d="M15 18v4"/><path d="M2 9h4"/><path d="M2 15h4"/><path d="M18 9h4"/><path d="M18 15h4"/></svg>`,
  software: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" x2="10" y1="4" y2="20"/></svg>`
};

/**
 * Renders the 4 quantitative engineering KPI stat cards below the Hero section.
 */
function renderHeroStatsSection(containerEl, lang) {
  if (!containerEl || typeof HERO_STATS === "undefined" || !Array.isArray(HERO_STATS)) return;

  containerEl.innerHTML = HERO_STATS.map(
    (stat) => `
      <div class="stat-card">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label[lang]}</div>
        <div class="stat-sub">${stat.sub[lang]}</div>
      </div>
    `
  ).join("");
}

/**
 * Renders the interactive Air (UAV), Sea (AUV), and Ground (Level 4 UGV)
 * 4-stage autonomy pipeline explorer.
 */
function renderExplorerSection(domRefs, activeDomainId, lang, onSelectDomain) {
  const { tabsEl, titleEl, subtitleEl, pipelineEl } = domRefs;
  if (!tabsEl || !pipelineEl || typeof OPERATION_DOMAINS === "undefined" || !Array.isArray(OPERATION_DOMAINS)) {
    return;
  }

  const currentDomain =
    OPERATION_DOMAINS.find((d) => d.id === activeDomainId) || OPERATION_DOMAINS[0];

  tabsEl.innerHTML = "";
  OPERATION_DOMAINS.forEach((domain) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `explorer-tab ${domain.id === currentDomain.id ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", domain.id === currentDomain.id ? "true" : "false");
    btn.textContent = domain.tabLabel[lang];
    btn.addEventListener("click", () => onSelectDomain(domain.id));
    tabsEl.appendChild(btn);
  });

  if (titleEl) titleEl.textContent = currentDomain.title[lang];
  if (subtitleEl) subtitleEl.textContent = currentDomain.subtitle[lang];

  pipelineEl.innerHTML = currentDomain.stages
    .map(
      (stage) => `
        <div class="pipeline-stage">
          <span class="pipeline-stage-num">${stage.step}</span>
          <h4>${stage.title[lang]}</h4>
          <ul>
            ${stage.items[lang].map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");
}

/**
 * Renders the project domain filter buttons with live project counts.
 */
function renderFilterControls(containerEl, activeFilter, lang, onSelectFilter) {
  if (!containerEl || typeof PROJECTS === "undefined" || !Array.isArray(PROJECTS)) return;

  const filterDefs = [
    { id: "all", label: UI_TEXT[lang].filter_all, count: PROJECTS.length },
    {
      id: "robotics",
      label: UI_TEXT[lang].filter_robotics,
      count: PROJECTS.filter((p) => p.domain === "robotics").length
    },
    {
      id: "cv-ai",
      label: UI_TEXT[lang].filter_cv,
      count: PROJECTS.filter((p) => p.domain === "cv-ai").length
    },
    {
      id: "embedded",
      label: UI_TEXT[lang].filter_embedded,
      count: PROJECTS.filter((p) => p.domain === "embedded").length
    },
    {
      id: "nlp-game",
      label: UI_TEXT[lang].filter_nlp_game,
      count: PROJECTS.filter((p) => p.domain === "nlp-game").length
    }
  ];

  containerEl.innerHTML = "";
  filterDefs.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn ${activeFilter === f.id ? "active" : ""}`;
    btn.innerHTML = `${f.label} <span class="filter-count">${f.count}</span>`;
    btn.addEventListener("click", () => onSelectFilter(f.id));
    containerEl.appendChild(btn);
  });
}

/**
 * Dynamically renders the filtered project cards into `#projects-grid`.
 */
function renderProjectCardsGrid(gridEl, activeFilter, lang, onOpenProject) {
  if (!gridEl || typeof PROJECTS === "undefined" || !Array.isArray(PROJECTS)) return;

  gridEl.innerHTML = "";

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === activeFilter);

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card has-cover";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `${project.title[lang]} - ${project.category[lang]}`
    );

    const metricsHtml = Array.isArray(project.metrics)
      ? project.metrics
          .map((m) => `<span class="metric-chip">${m[lang]}</span>`)
          .join("")
      : "";

    const previewTagsHtml = project.tags
      .slice(0, 4)
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const pdfPageLabel = lang === "tr" ? `PDF Sayfa ${project.pdfPage}` : `PDF Page ${project.pdfPage}`;

    card.innerHTML = `
      <div class="card-cover">
        <img
          src="${project.coverImage}"
          alt="${project.title[lang]}"
          loading="lazy"
          width="500"
          height="280"
        />
        <span class="card-code-overlay">${project.code}</span>
        <span class="card-pdf-badge">${pdfPageLabel}</span>
      </div>
      <div class="card-body">
        <span class="badge">${project.category[lang]}</span>
        <h3>${project.title[lang]}</h3>
        <p>${project.summary[lang]}</p>
        <div class="card-metrics">${metricsHtml}</div>
      </div>
      <div class="card-footer">
        <div class="tags">${previewTagsHtml}</div>
        <span class="card-inspect-link">${UI_TEXT[lang].card_inspect}</span>
      </div>
    `;

    card.addEventListener("click", () => onOpenProject(project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpenProject(project);
      }
    });

    gridEl.appendChild(card);
  });
}

/**
 * Renders all 6 technical competency categories from PDF Page 3 using SVG icons.
 */
function renderSkillsMatrix(gridEl, lang) {
  if (!gridEl || typeof SKILLS === "undefined" || !Array.isArray(SKILLS)) return;

  gridEl.innerHTML = "";

  SKILLS.forEach((skillGroup) => {
    const div = document.createElement("div");
    div.className = "skill-card";

    const badgesHtml = Array.isArray(skillGroup.badges)
      ? skillGroup.badges.map((b) => `<span class="skill-badge">${b}</span>`).join("")
      : "";

    const svgIcon = SKILL_SVG_ICONS[skillGroup.iconKey] || SKILL_SVG_ICONS.embedded;

    div.innerHTML = `
      <div class="skill-card-header">
        <span class="skill-icon" aria-hidden="true">${svgIcon}</span>
        <h3>${skillGroup.title[lang]}</h3>
      </div>
      <p>${skillGroup.summary ? skillGroup.summary[lang] : skillGroup.items}</p>
      <div class="skill-badges">${badgesHtml}</div>
    `;
    gridEl.appendChild(div);
  });
}

/**
 * Renders the chronological competition, research grant, and academic timeline.
 */
function renderTimelineSection(listEl, lang) {
  if (!listEl || typeof TIMELINE === "undefined" || !Array.isArray(TIMELINE)) return;

  listEl.innerHTML = TIMELINE.map(
    (item) => `
      <div class="timeline-item">
        <div class="timeline-meta">
          <span class="timeline-period">${item.period}</span>
          <span class="timeline-tag">${item.tag[lang]}</span>
        </div>
        <h3>${item.title[lang]}</h3>
        <p>${item.desc[lang]}</p>
      </div>
    `
  ).join("");
}
