/**
 * ============================================================================
 * @fileoverview Section & Component DOM Renderers Module
 * @module       js/modules/renderers
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @description  Pure/Modular UI rendering functions for:
 *               - Hero KPI Telemetry Statistics Cards (`renderHeroStatsSection`)
 *               - Interactive Sim-to-Real System Architecture Explorer (`renderExplorerSection`)
 *               - Project Category Filter Controls (`renderFilterControls`)
 *               - Engineering Case Study Cards Grid (`renderProjectCardsGrid`)
 *               - 6-Domain Technical Competencies Matrix (`renderSkillsMatrix`)
 *               - Chronological Engineering Milestones Timeline (`renderTimelineSection`)
 * ============================================================================
 */

"use strict";

/**
 * Renders the 4 quantitative engineering KPI stat cards below the Hero section.
 *
 * @param {HTMLElement|null} containerEl - `#stats-grid` element
 * @param {"tr" | "en"} lang - Active language code
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
 *
 * @param {Object} domRefs - Object containing `{ tabsEl, titleEl, subtitleEl, pipelineEl }`
 * @param {string} activeDomainId - Currently selected operational domain ID
 * @param {"tr" | "en"} lang - Active language code
 * @param {Function} onSelectDomain - Callback invoked when user switches tab
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
 *
 * @param {HTMLElement|null} containerEl - `#project-filters` element
 * @param {string} activeFilter - Currently active filter key ("all" | "robotics" | "cv-ai" | "embedded" | "nlp-game")
 * @param {"tr" | "en"} lang - Active language code
 * @param {Function} onSelectFilter - Callback invoked when user clicks a filter button
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
    btn.innerHTML = `${f.label} <span class="filter-count">(${f.count})</span>`;
    btn.addEventListener("click", () => onSelectFilter(f.id));
    containerEl.appendChild(btn);
  });
}

/**
 * Dynamically renders the filtered project cards into `#projects-grid`.
 *
 * @param {HTMLElement|null} gridEl - `#projects-grid` element
 * @param {string} activeFilter - Active domain filter ID
 * @param {"tr" | "en"} lang - Active language code
 * @param {Function} onOpenProject - Callback invoked when a project card is activated
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

    const pdfPageLabel = lang === "tr" ? `PDF s.${project.pdfPage}` : `PDF p.${project.pdfPage}`;

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
 * Renders all 6 technical competency categories from PDF Page 3 into `#skills-grid`.
 *
 * @param {HTMLElement|null} gridEl - `#skills-grid` element
 * @param {"tr" | "en"} lang - Active language code
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

    div.innerHTML = `
      <div class="skill-card-header">
        <span class="skill-icon" aria-hidden="true">${skillGroup.icon || "⚡"}</span>
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
 *
 * @param {HTMLElement|null} listEl - `#timeline-list` element
 * @param {"tr" | "en"} lang - Active language code
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
