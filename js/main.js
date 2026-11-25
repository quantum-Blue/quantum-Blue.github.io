let currentLang = "tr";

const projectsGrid = document.getElementById("projects-grid");
const skillsGrid = document.getElementById("skills-grid");
const langToggle = document.getElementById("lang-toggle");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");

function renderUI() {
  document.documentElement.lang = currentLang;
  langToggle.textContent = currentLang === "tr" ? "EN" : "TR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_TEXT[currentLang][key]) {
      el.textContent = UI_TEXT[currentLang][key];
    }
  });

  renderProjects();
  renderSkills();
}

function renderProjects() {
  projectsGrid.innerHTML = "";
  PROJECTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div>
        <span class="badge">\${p.category[currentLang]}</span>
        <h3>\${p.title[currentLang]}</h3>
        <p>\${p.summary[currentLang]}</p>
      </div>
      <div class="tags">
        \${p.tags.slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    projectsGrid.appendChild(card);
  });
}

function renderSkills() {
  skillsGrid.innerHTML = "";
  SKILLS.forEach((s) => {
    const div = document.createElement("div");
    div.className = "skill-card";
    div.innerHTML = `
      <h3>\${s.title[currentLang]}</h3>
      <p>\${s.items}</p>
    `;
    skillsGrid.appendChild(div);
  });
}

function openModal(project) {
  document.getElementById("modal-category").textContent = project.category[currentLang];
  document.getElementById("modal-title").textContent = project.title[currentLang];
  document.getElementById("modal-summary").textContent = project.summary[currentLang];

  const detailsList = document.getElementById("modal-details");
  detailsList.innerHTML = project.details[currentLang].map((d) => `<li>\${d}</li>`).join("");

  const tagsDiv = document.getElementById("modal-tags");
  tagsDiv.innerHTML = project.tags.map((t) => `<span class="tag">\${t}</span>`).join("");

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";
  renderUI();
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderUI();