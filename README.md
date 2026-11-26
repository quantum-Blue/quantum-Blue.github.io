# Muhammed Enes BAL | Robotics, Autonomous Systems & Embedded AI Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-quantum--blue.github.io-38bdf8?style=for-the-badge&logo=github)](https://quantum-blue.github.io/)
[![Portfolio PDF (TR)](https://img.shields.io/badge/Portfolyo_PDF_(TR)-20_Sayfa-f59e0b?style=for-the-badge)](assets/pdf/Muhammed_Enes_BAL_Portfolio_TR.pdf)
[![Portfolio PDF (EN)](https://img.shields.io/badge/Portfolio_PDF_(EN)-20_Pages-10b981?style=for-the-badge)](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf)

> **Bilingual (TR / EN) Engineering Portfolio & Interactive Sim-to-Real Case Study Showcase**  
> Built for **Unmanned Aerial (UAV), Underwater (AUV), and Ground (SAE Level 4 UGV) Autonomous Systems, Hybrid 3D/2D SLAM, Multi-Modal Sensor Fusion, Real-Time Computer Vision, and Embedded AI**.

---

## 🧭 Quick Deep-Links to Engineering Case Studies

Every project card on the live website supports direct URL hash routing (`#project-1` .. `#project-8`) and links directly to its exact page (`#page=X`) inside the 20-page Technical Portfolio PDFs:

| Code | Case Study Title | Role & Institutional Context | Key Quantitative Metrics | Live Deep-Link | PDF Page |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **`PRJ-01`** | **Autonomous UAV: 3D Mapping, Segmentation & Localization** | Capstone Project · **2× BAP-100 Grants** | `6.46m Loop Overlap` · `Fast-LIO2 + RTAB-Map` · `22cm / 40° Stereo` | [Inspect `#project-1`](https://quantum-blue.github.io/#project-1) | [Page 5](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=5) |
| **`PRJ-02`** | **Unmanned Underwater Vehicle (AUV) — Design & Autonomy** | **Teknofest 2026 Advanced** · Auvtech (15-Member Team) | **4th Place National (2024 CDR)** · `6-Thruster Biomimetic` · `Closed-Loop Subsea GNC` | [Inspect `#project-2`](https://quantum-blue.github.io/#project-2) | [Page 8](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=8) |
| **`PRJ-03`** | **Autonomous Cargo Delivery Vehicle Simulation** | **TÜBİTAK 2209-A Principal Investigator** | `SAE Level 4 Autonomy` · `Camera + LiDAR + Radar` · `Dynamic Traffic Routing` | [Inspect `#project-3`](https://quantum-blue.github.io/#project-3) | [Page 10](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=10) |
| **`PRJ-04`** | **AI in Aviation: Object Detection & Visual Position Estimation** | **Teknofest** · AI in Aviation Competition | `YOLOv12n + RT-DETR Hybrid` · `>7.5 FPS Real-Time` · `GPS-Free 3D Pose` | [Inspect `#project-4`](https://quantum-blue.github.io/#project-4) | [Page 11](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=11) |
| **`PRJ-05`** | **MonTech — Wearable Smart Jacket** | **Teknofest & BAP-100** · **Patent Pending** | `12 Flexible Solar Panels` · `<35 °C Auto-Heating` · `Live Bluetooth GPS Alert` | [Inspect `#project-5`](https://quantum-blue.github.io/#project-5) | [Page 13](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=13) |
| **`PRJ-06`** | **Waste Type Recognition & Recycling Assistant** | Computer Vision & Mobile R&D (İZÜ Campus) | `85% mAP (YOLOv11m-seg)` · `2,501 Hand-Labeled Images` · `5 Classes + Mobile App` | [Inspect `#project-6`](https://quantum-blue.github.io/#project-6) | [Page 15](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=15) |
| **`PRJ-07`** | **Multi-Task Turkish NLP Pipeline (House M.D.)** | Turkish Natural Language Processing R&D | `7,281 Sentences (146 Episodes)` · **`+21.8% BERT Intent Gain`** · `6 Tasks + Gradio` | [Inspect `#project-7`](https://quantum-blue.github.io/#project-7) | [Page 17](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=17) |
| **`PRJ-08`** | **The Narrator's Game — 3D Story & Game AI** | **Re:Zero Studio** · Unity 3D Game Development | `Unity 3D & C#` · `Chapter 2 Behavioral Monster AI` · `Kronos & Leap Mechanics` | [Inspect `#project-8`](https://quantum-blue.github.io/#project-8) | [Page 19](assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf#page=19) |

---

## 🏗️ Modular Project Folder Structure

The repository follows a clean, dependency-free, modular full-stack folder structure compatible out-of-the-box with **GitHub Pages**:

```text
quantum-Blue.github.io/
├── index.html                          # Semantic HTML5 entry point (SEO, OpenGraph, JSON-LD)
├── README.md                           # Project showcase & technical documentation
├── assets/
│   ├── icons/
│   │   └── favicon.svg                 # Custom tactical autonomy vector emblem
│   ├── img/
│   │   ├── profile/                    # Hero B&W & About color portraits (2 assets)
│   │   └── projects/                   # 27 extracted high-res project visuals & plots
│   │       ├── uav/                    # 3D mosque mesh, Gazebo twin, CAD, 6S-4P BMS, 22cm stereo (7)
│   │       ├── auv/                    # Physical prototype, subcomponents, GNC flowcharts (4)
│   │       ├── cargo/                  # Urban YOLO detection & SAE Level 4 chart (2)
│   │       ├── aviation-ai/            # YOLOv12n mAP, FPS & Train/Val loss curves (3)
│   │       ├── montech/                # Smart jacket hardware & mobile Bluetooth/GPS screenshots (3)
│   │       ├── waste-cv/               # YOLOv11m-seg pixel masks, Confusion Matrix & mobile app (4)
│   │       ├── nlp-house/              # Turkish BERT vs Classical ML Accuracy, Macro-F1 & speakers (3)
│   │       └── narrator-game/          # Re:Zero Studio promotional poster (1)
│   └── pdf/
│       ├── Muhammed_Enes_BAL_Portfolio_TR.pdf   # 20-page Turkish Technical Portfolio
│       └── Muhammed_Enes_BAL_Portfolio_EN.pdf   # 20-page English Technical Portfolio
├── css/
│   ├── style.css                       # Main stylesheet entry ("Tactical Autonomy & Robotics Lab")
│   └── modules/                        # Modular CSS architecture reference layers
│       ├── tokens.css                  # 33 Design Tokens (:root variables) & Telemetry Grid
│       ├── components.css              # Navbar, Hero, KPI Stats, System Explorer, Cards, Timeline
│       └── modal-responsive.css        # Case Study Modal, Gallery, Flow Nodes, Tables & Breakpoints
├── js/
│   ├── data.js                         # Single Source of Truth (SSOT) bilingual data store
│   ├── main.js                         # Application orchestrator, event bindings & router
│   └── modules/                        # Modular Separation-of-Concerns (SoC) controllers
│       ├── i18n.js                     # 3-tier locale resolver, localStorage & [data-i18n] engine
│       ├── renderers.js                # Hero Stats, Sim-to-Real Explorer, Filter Bar, Cards & Skills
│       └── modal.js                    # Case Study Modal, Gallery, Flows, Specs Tables & PDF Deep-Link
├── docs/
│   ├── CAREER_PROFILE_ANALYSIS.md      # Deep engineering profile & career positioning analysis
│   ├── WEBSITE_TRANSFORMATION_PLAN.md  # Phase-by-phase engineering roadmap & QA test logs
│   └── ARCHITECTURE.md                 # Technical architecture & modularity guide
└── tests/
    └── run_all_tests.py                # Automated E2E & Phase 1–6 QA verification suite
```

---

## 🧪 Running the Automated Quality Assurance (QA) Test Suite

To verify bilingual data parity, CSS token integrity, all 29 binary image headers, DOM contracts, modular JS execution, and live HTTP server asset delivery:

```bash
python tests/run_all_tests.py
```

---

## 📬 Contact

- **Name:** Muhammed Enes BAL
- **Email:** [muhammedenesbal1@gmail.com](mailto:muhammedenesbal1@gmail.com)
- **Phone:** `+90 544 347 19 29`
- **GitHub:** [github.com/quantum-Blue](https://github.com/quantum-Blue)
- **LinkedIn:** [linkedin.com/in/muhammed-enes-bal](https://linkedin.com/in/muhammed-enes-bal)
