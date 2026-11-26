/**
 * ============================================================================
 * @fileoverview Engineering Case Study Modal & Deep-Link Controller Module
 * @module       js/modules/modal
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @description  Manages the project Case Study modal lifecycle, interactive
 *               multi-image gallery with thumbnail strip, 3-stage system
 *               architecture flow renderer, My Contribution callout, hardware &
 *               benchmark comparison tables, PDF page deep-linking (#page=X),
 *               and shareable URL hash routing (#project-1..8).
 * ============================================================================
 */

"use strict";

/**
 * Renders the main image, caption, and clickable thumbnails inside the project modal.
 *
 * @param {Object} project - Active project object
 * @param {number} index - Selected image index inside `project.gallery`
 * @param {"tr" | "en"} lang - Active language code
 * @param {Function} onGalleryIndexChange - Callback updating active gallery state
 */
function renderModalGalleryView(project, index, lang, onGalleryIndexChange) {
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
  if (onGalleryIndexChange) onGalleryIndexChange(safeIndex);

  const activeItem = gallery[safeIndex];
  mainImg.src = activeItem.src;
  mainImg.alt = activeItem.caption[lang];
  captionEl.textContent = `${safeIndex + 1} / ${gallery.length} — ${activeItem.caption[lang]}`;

  thumbsEl.innerHTML = "";
  if (gallery.length > 1) {
    gallery.forEach((item, idx) => {
      const thumbBtn = document.createElement("button");
      thumbBtn.type = "button";
      thumbBtn.className = `gallery-thumb ${idx === safeIndex ? "active" : ""}`;
      thumbBtn.setAttribute("aria-label", `View image ${idx + 1}`);
      thumbBtn.innerHTML = `<img src="${item.src}" alt="" loading="lazy" />`;
      thumbBtn.addEventListener("click", () =>
        renderModalGalleryView(project, idx, lang, onGalleryIndexChange)
      );
      thumbsEl.appendChild(thumbBtn);
    });
  }
}

/**
 * Populates all sections of the Case Study Modal for the selected project.
 *
 * @param {Object} project - Project object from `PROJECTS`
 * @param {number} galleryIdx - Active gallery image index
 * @param {"tr" | "en"} lang - Active language code
 * @param {Function} onGalleryIndexChange - Callback updating active gallery state
 */
function populateCaseStudyModal(project, galleryIdx, lang, onGalleryIndexChange) {
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

  if (categoryEl) categoryEl.textContent = project.category[lang];
  if (codeEl) codeEl.textContent = project.code;
  if (titleEl) titleEl.textContent = project.title[lang];
  if (summaryEl) summaryEl.textContent = project.summary[lang];

  if (metricsEl && Array.isArray(project.metrics)) {
    metricsEl.innerHTML = project.metrics
      .map((m) => `<span class="metric-chip">${m[lang]}</span>`)
      .join("");
  }

  renderModalGalleryView(project, galleryIdx, lang, onGalleryIndexChange);

  if (archGridEl && Array.isArray(project.architecture)) {
    archGridEl.innerHTML = project.architecture
      .map(
        (node) => `
          <div class="arch-node">
            <h5>${node.title[lang]}</h5>
            <ul>
              ${node.items[lang].map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      )
      .join("");
  }

  if (contribTextEl && project.myContribution) {
    contribTextEl.textContent = project.myContribution[lang];
  }

  if (detailsList && Array.isArray(project.details[lang])) {
    detailsList.innerHTML = project.details[lang]
      .map((detailItem) => `<li>${detailItem}</li>`)
      .join("");
  }

  if (tableSectionEl && tableHeadEl && tableBodyEl) {
    if (project.specsTable) {
      tableSectionEl.style.display = "block";
      const headers = project.specsTable.headers[lang];
      const rows = project.specsTable.rows[lang];

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

  if (challengesListEl && project.challenges && Array.isArray(project.challenges[lang])) {
    challengesListEl.innerHTML = project.challenges[lang]
      .map((ch) => `<li>${ch}</li>`)
      .join("");
  }

  if (tagsDiv && Array.isArray(project.tags)) {
    tagsDiv.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }

  if (pdfLinkEl && typeof PROFILE_DATA !== "undefined" && PROFILE_DATA.pdfs) {
    const pdfBase = PROFILE_DATA.pdfs[lang] || PROFILE_DATA.pdfs.tr;
    const pageSuffix = project.pdfPage ? `#page=${project.pdfPage}` : "";
    pdfLinkEl.href = `${pdfBase}${pageSuffix}`;
    const pageText =
      lang === "tr"
        ? `📄 PDF Portfolyoda Bu Projeyi Aç (Sayfa ${project.pdfPage})`
        : `📄 Open This Project in PDF Portfolio (Page ${project.pdfPage})`;
    pdfLinkEl.textContent = pageText;
  }
}
