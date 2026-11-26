# Modular Frontend & Data Architecture Guide

This document details the modular Separation of Concerns (SoC) architecture of **Muhammed Enes BAL's Robotics & Autonomous Systems Portfolio**.

## 1. Architectural Principles

1. **Zero-Build GitHub Pages Compatibility:** Runs natively on GitHub Pages without requiring a bundler step while enforcing strict modular boundaries across `js/modules/`, `css/modules/`, `assets/`, `docs/`, and `tests/`.
2. **Single Source of Truth (`js/data.js`):** All bilingual text (`UI_TEXT`), KPI stats (`HERO_STATS`), 3-domain Sim-to-Real autonomy pipelines (`OPERATION_DOMAINS`), 6 skill categories (`SKILLS`), 8 case studies (`PROJECTS`), and career milestones (`TIMELINE`) live in one declarative schema.
3. **Separation of Concerns (`js/modules/`):**
   - `js/modules/i18n.js`: Locale detection (`localStorage` -> `navigator.language` -> `"tr"`), persistence, and `[data-i18n]` static DOM translation.
   - `js/modules/renderers.js`: Stateless section renderers for KPI cards, Sim-to-Real System Explorer, category filter bar, project showcase cards, 6-domain skills matrix, and timeline.
   - `js/modules/modal.js`: Case Study Modal controller (multi-image gallery with thumbnail strip, 3-stage system architecture diagram nodes, My Contribution callout, hardware/benchmark tables, and `#page=X` PDF deep-linking).
   - `js/main.js`: Top-level state orchestrator, keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), URL hash router (`#project-1`..`#project-8`), and clipboard toast controller.
