/**
 * ============================================================================
 * @fileoverview Comprehensive Bilingual (TR/EN) Engineering Portfolio Data Layer
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @version      3.0.0 (Phase 3 - Multi-Layered Engineering Data Architecture)
 * @description  Single Source of Truth (SSOT) data store powering the portfolio.
 *               Synchronizes 100% of the technical depth, metrics, system
 *               architecture diagrams, benchmark tables, hardware specifications,
 *               PDF deep-links (#page=X), and 29 extracted high-resolution assets
 *               from the 20-page TR and EN Technical Portfolio PDFs.
 *
 * DATA MODULES:
 *   1. PROFILE_DATA      - Personal metadata, portraits, PDF paths & contact links
 *   2. UI_TEXT           - Bilingual (TR/EN) static UI dictionary for [data-i18n]
 *   3. HERO_STATS        - 4 Key Performance Indicator (KPI) cards from PDF Page 2
 *   4. OPERATION_DOMAINS - Interactive "Sim-to-Real" Air / Sea / Ground architecture
 *   5. SKILLS            - All 6 Technical Competency domains from PDF Page 3
 *   6. PROJECTS          - 8 Full Case Studies with galleries, flows, tables & metrics
 *   7. TIMELINE          - Competition, research grant & academic milestones
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. PERSONAL PROFILE, ASSETS & CONTACT METADATA
   ========================================================================== */

/**
 * Core profile metadata, asset file paths, and external links.
 * Verified against PDF Page 1, Page 2, and Page 20.
 */
const PROFILE_DATA = {
  fullName: "Muhammed Enes BAL",
  handle: "quantum-Blue",
  email: "muhammedenesbal1@gmail.com",
  phone: "+90 544 347 19 29",
  phoneHref: "tel:+905443471929",
  github: "https://github.com/quantum-Blue",
  linkedin: "https://linkedin.com/in/muhammed-enes-bal",
  portraits: {
    heroBw: "assets/img/profile/hero_portrait_bw.jpeg",
    aboutColor: "assets/img/profile/about_portrait_color.jpeg"
  },
  pdfs: {
    tr: "assets/pdf/Muhammed_Enes_BAL_Portfolio_TR.pdf",
    en: "assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf"
  }
};

/* ==========================================================================
   2. BILINGUAL UI LOCALIZATION DICTIONARY (TR / EN)
   ========================================================================== */

/**
 * UI string dictionary mapped by language key ("tr" | "en").
 * Consumed by `renderUI()` in `js/main.js` via `[data-i18n]` attributes.
 */
const UI_TEXT = {
  tr: {
    // Navigation
    nav_about: "Hakkımda",
    nav_architecture: "Sistem Mimarisi",
    nav_projects: "Projeler",
    nav_skills: "Yetkinlikler",
    nav_timeline: "Deneyim & Başarılar",
    nav_contact: "İletişim",

    // Hero Section
    hero_status: "Otonom Sistemler, Robotik ve Savunma Teknolojileri Fırsatlarına Açık",
    hero_role: "Robotik ve Otonom Sistemler Mühendisi",
    hero_domains: "Robotik · Otonom Sistemler · Yapay Zekâ · Gömülü Sistemler",
    hero_desc:
      "İnsansız hava (İHA), kara (UGV) ve sualtı (AUV) araçları için SLAM, sensör füzyonu, bilgisayarlı görü ve gömülü yapay zekâ sistemlerini simülasyondan fiziksel donanıma uçtan uca taşıyorum.",
    triad_air: "Hava (İHA): 4B LiDAR + Stereo SLAM",
    triad_sea: "Sualtı (AUV): 6-İticili Biyomimetik GNC",
    triad_ground: "Kara (UGV): Seviye 4 Otonom Sürüş",
    btn_explore_projects: "🚀 Projeleri İncele",
    btn_pdf_tr: "📄 Portfolyo (TR - PDF)",
    btn_pdf_en: "📄 Portfolio (EN - PDF)",
    portrait_badge: "SIM-TO-REAL // ROS 2 & PX4",

    // About Section (PDF Page 2)
    about_kicker: "HAKKIMDA · MÜHENDİSLİK PROFİLİ",
    about_title: "Simülasyondan Fiziksel Donanıma Uçtan Uca Otonomi",
    about_heading: "Bilgisayar Mühendisi | Robotik, Otonom Sistemler ve Gömülü Yapay Zekâ",
    about_p1:
      "Robotik, otonom sistemler ve yapay zekâ alanlarına odaklanan bir bilgisayar mühendisiyim. Teknofest yarışmaları, TÜBİTAK 2209-A yürütücülüğü ve BAP-100 araştırma projelerindeki deneyimimle; insansız hava, kara ve sualtı araçları, SLAM, sensör füzyonu ve bilgisayarlı görü üzerine uçtan uca sistemler geliştiriyorum.",
    about_p2:
      "Algoritmalarımı yalnızca simülasyon (Gazebo / PX4 / ROS 2) ortamında bırakmıyor; Pixhawk 6X, Raspberry Pi 5 + AI HAT, 4B LiDAR, özel stereo kamera düzenekleri ve sualtı itki sistemleri üzerinde fiziksel donanıma taşıyarak derin öğrenme ile gömülü sistemleri gerçek zamanlı birleştiriyorum.",

    // Interactive System Architecture Explorer
    explorer_kicker: "SİM-TO-REAL MİMARİ LABORATUVARI",
    explorer_title: "Operasyon Alanlarına Göre Otonomi Boru Hattı",
    explorer_sub:
      "Hava, Sualtı ve Kara platformlarında kurduğum Sensör ➔ Füzyon/SLAM ➔ Planlama/Kontrol ➔ Çıktı mimarisini incelemek için bir platform seçin.",

    // Projects Section
    projects_kicker: "SEÇİLİ TEKNİK PROJELER",
    projects_title: "Mühendislik Vaka Analizleri (Case Studies)",
    projects_sub:
      "Sistem mimarisi şemalarını, kantitatif metrikleri, katkılarımı ve proje görsellerini incelemek için herhangi bir proje kartına tıklayın.",
    filter_all: "Tümü",
    filter_robotics: "Robotik & Otonomi",
    filter_cv: "Bilgisayarlı Görü & AI",
    filter_embedded: "Gömülü Sistem & IoT",
    filter_nlp_game: "Türkçe NLP & Oyun AI",
    card_inspect: "Detaylı İncele ↗",

    // Skills Section (PDF Page 3)
    skills_kicker: "YETENEKLER · TEKNİK MATRİS",
    skills_title: "Teknik Yetkinlikler",
    skills_sub:
      "Otonom navigasyon, SLAM, bilgisayarlı görü, gömülü donanım ve derin öğrenme dikeylerinde kullandığım mühendislik araçları.",

    // Timeline Section
    timeline_kicker: "KİLOMETRE TAŞLARI & ARAŞTIRMALAR",
    timeline_title: "Yarışmalar, Projeler ve Akademik Yolculuk",
    timeline_sub:
      "TÜBİTAK, Teknofest, BAP-100 araştırma fonları ve patent başvurusuyla desteklenen mühendislik yolculuğum.",

    // Contact Section (PDF Page 20)
    contact_kicker: "İLETİŞİM · İŞ BİRLİĞİ",
    contact_title: "Birlikte Çalışalım",
    contact_desc:
      "Otonom sistemler, robotik, bilgisayarlı görü ve savunma teknolojileri alanındaki Ar-Ge ve mühendislik fırsatlarına açığım.",
    contact_email_label: "E-Posta (Tıkla & Kopyala)",
    contact_phone_label: "Telefon",
    contact_github_label: "GitHub Profili",
    contact_linkedin_label: "LinkedIn Profili",
    toast_copied: "✓ Panoya kopyalandı: ",

    // Modal Dialog
    modal_gallery_title: "Proje Görselleri & Teknik Çıktılar",
    modal_arch_title: "Sistem Mimarisi & Operasyon Akışı",
    modal_contrib_title: "Benim Katkım",
    modal_details_title: "Teknik Detaylar & Mühendislik Uygulaması",
    modal_challenges_title: "Karşılaşılan Mühendislik Sorunları & Çözümler",
    modal_table_title: "Teknik Bileşenler & Karşılaştırma Tablosu",
    modal_pdf_btn: "📄 PDF Portfolyoda Bu Projeyi Aç",
    modal_prev_btn: "← Önceki Proje",
    modal_next_btn: "Sonraki Proje →"
  },

  en: {
    // Navigation
    nav_about: "About",
    nav_architecture: "System Architecture",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_timeline: "Milestones",
    nav_contact: "Contact",

    // Hero Section
    hero_status: "Open to Opportunities in Autonomous Systems, Robotics & Defense Tech",
    hero_role: "Robotics & Autonomous Systems Engineer",
    hero_domains: "Robotics · Autonomous Systems · Artificial Intelligence · Embedded Systems",
    hero_desc:
      "Developing end-to-end SLAM, sensor fusion, computer vision, and embedded AI systems for unmanned aerial (UAV), ground (UGV), and underwater (AUV) vehicles—from simulation to physical hardware.",
    triad_air: "Air (UAV): 4D LiDAR + Stereo SLAM",
    triad_sea: "Sea (AUV): 6-Thruster Biomimetic GNC",
    triad_ground: "Ground (UGV): Level 4 Autonomous Driving",
    btn_explore_projects: "🚀 Explore Projects",
    btn_pdf_tr: "📄 Portfolio (TR - PDF)",
    btn_pdf_en: "📄 Portfolio (EN - PDF)",
    portrait_badge: "SIM-TO-REAL // ROS 2 & PX4",

    // About Section (PDF Page 2)
    about_kicker: "ABOUT ME · ENGINEERING PROFILE",
    about_title: "End-to-End Autonomy from Simulation to Physical Hardware",
    about_heading: "Computer Engineer | Robotics, Autonomous Systems & Embedded AI",
    about_p1:
      "I am a computer engineering graduate focused on robotics, autonomous systems, and artificial intelligence. Through my experience in Teknofest competitions, as a TÜBİTAK 2209-A Principal Investigator, and in BAP-100 research grants, I develop end-to-end systems for unmanned aerial, ground, and underwater vehicles, SLAM, sensor fusion, and computer vision.",
    about_p2:
      "Rather than confining algorithms to simulation (Gazebo / PX4 / ROS 2), I deploy them onto physical hardware—integrating Pixhawk 6X, Raspberry Pi 5 + AI HAT, 4D LiDAR, custom-calibrated stereo rigs, and underwater thrusters to bridge deep learning with embedded systems in real time.",

    // Interactive System Architecture Explorer
    explorer_kicker: "SIM-TO-REAL ARCHITECTURE LAB",
    explorer_title: "Autonomy Pipeline Across Operational Domains",
    explorer_sub:
      "Select an operational domain (Air, Sea, or Ground) to inspect the Sensors ➔ Fusion/SLAM ➔ Planning/Control ➔ Mission Output pipeline I engineered.",

    // Projects Section
    projects_kicker: "SELECTED TECHNICAL PROJECTS",
    projects_title: "Engineering Case Studies",
    projects_sub:
      "Click any project card to inspect system architecture diagrams, quantitative metrics, my contributions, and high-resolution technical visuals.",
    filter_all: "All Projects",
    filter_robotics: "Robotics & Autonomy",
    filter_cv: "Computer Vision & AI",
    filter_embedded: "Embedded & IoT",
    filter_nlp_game: "Turkish NLP & Game AI",
    card_inspect: "Inspect Case Study ↗",

    // Skills Section (PDF Page 3)
    skills_kicker: "SKILLS · TECHNICAL MATRIX",
    skills_title: "Technical Competencies",
    skills_sub:
      "Core engineering frameworks, hardware platforms, and algorithms across autonomous navigation, SLAM, computer vision, and deep learning.",

    // Timeline Section
    timeline_kicker: "MILESTONES & RESEARCH",
    timeline_title: "Competitions, Grants & Academic Journey",
    timeline_sub:
      "Key engineering achievements backed by TÜBİTAK, Teknofest, BAP-100 research grants, and a pending patent application.",

    // Contact Section (PDF Page 20)
    contact_kicker: "CONTACT · COLLABORATION",
    contact_title: "Let's Work Together",
    contact_desc:
      "I am open to R&D and engineering roles in autonomous systems, robotics, computer vision, and defense technologies.",
    contact_email_label: "Email (Click to Copy)",
    contact_phone_label: "Phone",
    contact_github_label: "GitHub Profile",
    contact_linkedin_label: "LinkedIn Profile",
    toast_copied: "✓ Copied to clipboard: ",

    // Modal Dialog
    modal_gallery_title: "Project Visuals & Technical Outputs",
    modal_arch_title: "System Architecture & Operational Flow",
    modal_contrib_title: "My Contribution",
    modal_details_title: "Technical Details & Implementation",
    modal_challenges_title: "Engineering Challenges & Solutions",
    modal_table_title: "Technical Specifications & Benchmark Table",
    modal_pdf_btn: "📄 Open This Project in PDF Portfolio",
    modal_prev_btn: "← Previous Project",
    modal_next_btn: "Next Project →"
  }
};

/* ==========================================================================
   3. HERO KPI STATISTICS CARDS (PDF PAGE 2)
   ========================================================================== */

/**
 * Quantitative summary cards displayed below the Hero section.
 */
const HERO_STATS = [
  {
    value: "8",
    label: { tr: "Uçtan Uca Teknik Proje", en: "End-to-End Technical Projects" },
    sub: { tr: "İHA, AUV, UGV, CV, Gömülü, NLP & Oyun AI", en: "UAV, AUV, UGV, CV, Embedded, NLP & Game AI" }
  },
  {
    value: "4+",
    label: { tr: "Yarışma ve Akademik Araştırma", en: "Competitions & Funded Research" },
    sub: { tr: "Teknofest, TÜBİTAK 2209-A Yürütücüsü, 2× BAP-100", en: "Teknofest, TÜBİTAK 2209-A PI, 2× BAP-100 Grants" }
  },
  {
    value: "3",
    label: { tr: "Otonom Operasyon Alanı", en: "Autonomous Operational Domains" },
    sub: { tr: "Hava (Quadrotor) · Sualtı (AUV) · Kara (Seviye 4)", en: "Air (Quadrotor) · Sea (AUV) · Ground (Level 4)" }
  },
  {
    value: "1",
    label: { tr: "Patent Başvurusu & Türkiye 4.'lüğü", en: "Patent Pending & 4th Place National" },
    sub: { tr: "MonTech Akıllı Mont & Teknofest AUV KTR", en: "MonTech Smart Jacket & Teknofest AUV CDR" }
  }
];

/* ==========================================================================
   4. INTERACTIVE "SIM-TO-REAL" SYSTEM ARCHITECTURE EXPLORER DATA
   ========================================================================== */

/**
 * Structured 4-stage pipeline data for the Air / Sea / Ground interactive
 * system architecture explorer on the main page.
 */
const OPERATION_DOMAINS = [
  {
    id: "air",
    tabLabel: { tr: "✈️ Hava (Otonom İHA / UAV)", en: "✈️ Air (Autonomous UAV)" },
    title: {
      tr: "GNSS Olmayan Ortamlarda 3B Haritalama ve Hibrit SLAM Mimarisi",
      en: "GNSS-Denied 3D Mapping & Hybrid SLAM Quadrotor Architecture"
    },
    subtitle: {
      tr: "Gazebo/PX4 dijital ikizinden Pixhawk 6X ve Raspberry Pi 5 + AI HAT fiziksel uçuş donanımına",
      en: "From Gazebo/PX4 digital twin to Pixhawk 6X and Raspberry Pi 5 + AI HAT physical flight hardware"
    },
    stages: [
      {
        step: "01 // SENSORS & HARDWARE",
        title: { tr: "Sensör & Donanım Katmanı", en: "Sensors & Hardware Layer" },
        items: {
          tr: [
            "Unitree L1 4B LiDAR (13° eğimli özel CAD montaj aparatı)",
            "22 cm baz mesafeli + 40° eğimli çift Stereo Kamera (harici FPS sync)",
            "Pixhawk 6X Uçuş Kontrolcüsü (Dahili IMU + Barometre)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS Batarya Paketi"
          ],
          en: [
            "Unitree L1 4D LiDAR (custom 13° tilted CAD mounting bracket)",
            "22 cm baseline + 40° tilted dual Stereo Cameras (hardware external sync)",
            "Pixhawk 6X Flight Controller (Built-in IMU + Barometer)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS Battery Pack"
          ]
        }
      },
      {
        step: "02 // FUSION & SLAM",
        title: { tr: "Füzyon & Hibrit SLAM", en: "Sensor Fusion & Hybrid SLAM" },
        items: {
          tr: [
            "Frontend (Gerçek Zamanlı): Fast-LIO2 ile hafif, GNSS bağımsız konumlandırma",
            "Backend (Çevrimdışı): RTAB-Map graf optimizasyonu ve Loop Closure",
            "Çift Düzey Füzyon: Stereo kamera yalnızca ≤ 5 m menzilde aktif",
            "Dinamik Voxel Filtresi (20 cm³ taban, hıza göre otomatik büyüyen ızgara)"
          ],
          en: [
            "Frontend (Real-Time): Fast-LIO2 lightweight GNSS-independent localization",
            "Backend (Offline): RTAB-Map graph optimization & Loop Closure",
            "Two-Level Fusion: Stereo camera active strictly at ≤ 5 m range",
            "Dynamic Voxel Filter (20 cm³ base grid scaling automatically with speed)"
          ]
        }
      },
      {
        step: "03 // PLANNING & CONTROL",
        title: { tr: "4-Fazlı Uçuş & Yol Planlama", en: "4-Phase Flight & Path Planning" },
        items: {
          tr: [
            "Faz 1 Lawnmower: 15 m irtifa, 13.23 m yarıçap → 6.46 m şerit örtüşmesi",
            "Kısa kenara göre uyarlanabilir akıllı şerit aralığı (sabit 20 m yerine)",
            "Bug-esinli engelden kaçınma (ön 20 m, alt 2 m, 4 m güvenlik payı)",
            "Karekök yavaşlama (5 m/s açık alan) ve rota kaybında A* + şerit budama"
          ],
          en: [
            "Phase 1 Lawnmower: 15 m altitude, 13.23 m radius → 6.46 m strip overlap",
            "Adaptive strip spacing computed from short edge (replacing fixed 20 m)",
            "Bug-inspired obstacle avoidance (20 m ahead, 2 m below, 4 m safety margin)",
            "Square-root braking (5 m/s open area) & A* recovery with dynamic pruning"
          ]
        }
      },
      {
        step: "04 // OUTPUTS & AI",
        title: { tr: "Çıktılar & Hava Görüsü", en: "Mission Outputs & Aerial AI" },
        items: {
          tr: [
            "Yüksekliğe göre renklendirilmiş 3B Nokta Bulutu ve 3B Mesh (Kampüs Camisi)",
            "PCA izdüşümüyle eşzamanlı 3B ve 2B SLAM & 6-DoF Pose",
            "VisDrone2019 üzerinde YOLOv12n + RT-DETR ağırlıklı hibrit nesne tespiti",
            "GPS olmadan kamera parametreleriyle 3B hedef konumu ve düz iniş alanı tespiti"
          ],
          en: [
            "Height-colored 3D Point Cloud and 3D Mesh (Campus Mosque reconstruction)",
            "Simultaneous 3D & 2D SLAM via PCA projection & 6-DoF Pose estimation",
            "YOLOv12n + RT-DETR weighted hybrid object detection on VisDrone2019",
            "GPS-free visual 3D target localization and flat landing zone detection"
          ]
        }
      }
    ]
  },
  {
    id: "sea",
    tabLabel: { tr: "🌊 Sualtı (Biyomimetik AUV)", en: "🌊 Sea (Biomimetic AUV)" },
    title: {
      tr: "6 İticili Biyomimetik İnsansız Sualtı Aracı (AUV) Otonomi Mimarisi",
      en: "6-Thruster Biomimetic Autonomous Underwater Vehicle (AUV) Architecture"
    },
    subtitle: {
      tr: "Auvtech Ekibi · Teknofest 2024 KTR Türkiye 4.'lüğü & 2026 İleri Kategori",
      en: "Auvtech Team · Teknofest 2024 CDR 4th Place Nationally & 2026 Advanced Category"
    },
    stages: [
      {
        step: "01 // BIOMIMETIC DESIGN",
        title: { tr: "Mekanik & Sensör Donanımı", en: "Biomimetic Hardware & Sensors" },
        items: {
          tr: [
            "Kaplumbağa hareket dinamiğinden esinlenen 6 iticili simetrik yerleşim",
            "Maksimum görüş açısı için stratejik konumlandırılmış sualtı kameraları",
            "IMU, Derinlik/Basınç Sensörü ve sualtı mesafe/LiDAR sensör paketi",
            "Minyatürleştirilmiş sızdırmaz gövde ve güç dağıtım elektroniği"
          ],
          en: [
            "Symmetric 6-thruster placement inspired by sea turtle locomotion dynamics",
            "Strategically positioned underwater cameras for maximum field of view",
            "IMU, Depth/Pressure Sensor, and underwater range/LiDAR sensor suite",
            "Miniaturized watertight hull and custom power distribution electronics"
          ]
        }
      },
      {
        step: "02 // UNDERWATER VISION",
        title: { tr: "Sualtı Görüntü İyileştirme & Algılama", en: "Underwater Vision & Enhancement" },
        items: {
          tr: [
            "Python ile gerçek zamanlı renk dengesi, arka plan çıkarımı ve parlaklık ayarı",
            "YOLO tabanlı nesne tespiti: boru hattı görev ipucu ve dönüş/bitiş şamandıraları",
            "Kontrast şerit merkezi tespiti ve kamera sapma açısı hesaplama",
            "Kare geçiş kapısı tanıma ve 3B merkezleme hizalaması"
          ],
          en: [
            "Real-time color balance, background removal, and brightness enhancement in Python",
            "YOLO-based detection of pipeline mission clues and turn/finish buoys",
            "Contrast strip centerline extraction and camera yaw deviation calculation",
            "Square gate recognition and 3D centering alignment"
          ]
        }
      },
      {
        step: "03 // SUBSEA GNC",
        title: { tr: "Güdüm, Navigasyon & Kontrol (GNC)", en: "Guidance, Navigation & Control" },
        items: {
          tr: [
            "IMU + Basınç + Kamera + LiDAR füzyonuyla mesafe ve konum kestirimi",
            "Dead Reckoning + Kalman Filtresi ile sualtı rota takibi",
            "PID kontrolcü ile tamamen sualtında kapalı çevrim sabit derinlikte intikal",
            "Şamandıra etrafında dairesel dönüş manevrası ve çarpışma önleme"
          ],
          en: [
            "Distance and pose estimation via IMU + Pressure + Camera + LiDAR fusion",
            "Underwater trajectory tracking with Dead Reckoning + Kalman Filtering",
            "Closed-loop PID depth & heading control for fully submerged transit",
            "Circular buoy-turn maneuvers and critical LiDAR proximity recovery"
          ]
        }
      },
      {
        step: "04 // MISSION EXECUTION",
        title: { tr: "Görev Aşamaları & Yer İstasyonu", en: "Mission Stages & Ground Station" },
        items: {
          tr: [
            "Tam otonom sualtı çizgi/boru hattı takibi ve Mini ROV yönlendirme",
            "4 sarı şamandıra görsel konum doğrulaması ve orta nokta tespiti",
            "Hedef kapı merkezlemesi tamamlandığında otonom yüzeye çıkış",
            "Yer istasyonunda IMU verisinin canlı görselleştirilmesiyle anlık hata ayıklama"
          ],
          en: [
            "Fully autonomous underwater line/pipeline following & Mini ROV guidance",
            "Visual position verification across 4 yellow buoys & midpoint detection",
            "Autonomous surfacing upon completing square gate 3D alignment",
            "Real-time ground station debugging via live IMU telemetry visualization"
          ]
        }
      }
    ]
  },
  {
    id: "ground",
    tabLabel: { tr: "🚚 Kara (Seviye 4 Otonom Kargo)", en: "🚚 Ground (Level 4 Cargo UGV)" },
    title: {
      tr: "TÜBİTAK 2209-A Seviye 4 Otonom Kargo Dağıtım Aracı Simülasyon Mimarisi",
      en: "TÜBİTAK 2209-A Level 4 Autonomous Cargo Delivery Vehicle Architecture"
    },
    subtitle: {
      tr: "Proje Yürütücüsü · ROS ve Gazebo Kentsel Trafik Otonomi Simülasyonu",
      en: "Principal Investigator · ROS & Gazebo Urban Traffic Autonomy Simulation"
    },
    stages: [
      {
        step: "01 // URBAN SENSORS",
        title: { tr: "Çoklu Sensör & Simülasyon", en: "Multi-Sensor Suite & Simulation" },
        items: {
          tr: [
            "ROS ve Gazebo üzerinde yüksek gerçeklikli kentsel trafik ortamı",
            "RGB Kamera, 3B LiDAR ve Radar sensör modellerinin entegrasyonu",
            "SAE Seviye 4 (Yüksek Otomasyon) otonom sürüş gereksinimleri",
            "Şifreli kargo haznesi ve müşteri veri tabanı simülasyonu"
          ],
          en: [
            "High-fidelity urban traffic environment built in ROS and Gazebo",
            "Integrated RGB Camera, 3D LiDAR, and Radar sensor models",
            "Engineered to SAE Level 4 (High Driving Automation) standards",
            "Encrypted delivery compartment and customer database integration"
          ]
        }
      },
      {
        step: "02 // TRAFFIC PERCEPTION",
        title: { tr: "Trafik & Çevre Algılama", en: "Urban Traffic Perception" },
        items: {
          tr: [
            "YOLO + OpenCV ile trafik işaretleri ve ışıklarının gerçek zamanlı tespiti",
            "Yaya, araç ve canlı engellerin sınıflandırılması ve takibi",
            "Kamera–LiDAR–Radar sensör füzyonu ile 360° güvenli çevre modeli",
            "Şerit ve yol sınırı algılama"
          ],
          en: [
            "Real-time traffic sign and signal detection using YOLO + OpenCV",
            "Pedestrian, vehicle, and dynamic obstacle classification & tracking",
            "360° environmental safety model via Camera–LiDAR–Radar fusion",
            "Lane boundary and drivable road surface extraction"
          ]
        }
      },
      {
        step: "03 // ROUTE OPTIMIZATION",
        title: { tr: "Dinamik Rota & Engelden Kaçınma", en: "Dynamic Routing & Avoidance" },
        items: {
          tr: [
            "Anlık trafik yoğunluğuna göre en kısa yol algoritmalarıyla rota optimizasyonu",
            "Trafik kurallarına tam uyumlu hız ve kavşak karar mekanizması",
            "Kaza veya yol kapanması durumunda gerçek zamanlı yeniden rotalama (rerouting)",
            "Dinamik engellere karşı güvenli takip mesafesi ve acil frenleme"
          ],
          en: [
            "Traffic-density-aware shortest-path route optimization algorithms",
            "Traffic-rule-compliant velocity profiling and intersection decision-making",
            "Real-time dynamic rerouting in response to accidents or roadblocks",
            "Safe following distance control and emergency collision avoidance"
          ]
        }
      },
      {
        step: "04 // SECURE DELIVERY",
        title: { tr: "Güvenli & Şifreli Teslimat", en: "Encrypted Last-Mile Delivery" },
        items: {
          tr: [
            "Hedef teslimat konumuna otonom yanaşma ve park",
            "Kullanıcıya özel üretilen şifreli kargo bölmesi (hazne + doğrulama kodu)",
            "Müşteri veri tabanı üzerinden teslimat doğrulaması",
            "Sonraki teslimat noktasına otonom görev geçişi"
          ],
          en: [
            "Autonomous curb docking and precision parking at target address",
            "User-specific encrypted cargo compartment (locker + verification code)",
            "Delivery authentication linked to the customer database",
            "Autonomous mission handoff to the subsequent delivery waypoint"
          ]
        }
      }
    ]
  }
];

/* ==========================================================================
   5. TECHNICAL COMPETENCIES MATRIX (ALL 6 CATEGORIES FROM PDF PAGE 3)
   ========================================================================== */

/**
 * Complete 6-category technical skills structure matching PDF Page 3.
 */
const SKILLS = [
  {
    icon: "🧠",
    title: { tr: "Yapay Zekâ ve ML", en: "AI and Machine Learning" },
    summary: {
      tr: "Derin öğrenme mimarileri, model eğitimi, hiperparametre optimizasyonu ve transfer öğrenme.",
      en: "Deep learning architectures, model training, hyperparameter tuning, and transfer learning."
    },
    items: "Deep Learning, Artificial Neural Networks, PyTorch, TensorFlow/Keras, Transfer Learning",
    badges: ["PyTorch", "TensorFlow / Keras", "Deep Learning", "ANN", "Transfer Learning", "NVIDIA A100"]
  },
  {
    icon: "👁️",
    title: { tr: "Bilgisayarlı Görü", en: "Computer Vision" },
    summary: {
      tr: "İHA ve sualtı görüntülerinde gerçek zamanlı nesne tespiti, piksel düzeyinde örnek bölütleme ve hibrit çıkarım.",
      en: "Real-time aerial/underwater object detection, pixel-level instance segmentation, and hybrid inference."
    },
    items: "YOLO v5–v12, YOLO-Seg, RT-DETR, Instance Segmentation, OpenCV, ViT",
    badges: ["YOLOv5–v12", "YOLOv11m-Seg", "RT-DETR", "Instance Segmentation", "OpenCV", "ViT"]
  },
  {
    icon: "🤖",
    title: { tr: "Robotik ve Otonomi", en: "Robotics and Autonomy" },
    summary: {
      tr: "İnsansız hava, kara ve sualtı araçları için uçuş/sürüş kontrolü, simülasyon ve otonom yol planlama.",
      en: "Flight/drive control, digital twin simulation, and autonomous path planning for UAV, UGV, and AUV platforms."
    },
    items: "ROS/ROS 2, PX4, Pixhawk 6X, Cube Orange, Nav2, Gazebo, A*, Path Planning",
    badges: ["ROS / ROS 2", "PX4 Autopilot", "Pixhawk 6X", "Cube Orange", "Nav2", "Gazebo", "A* / Bug Path Planning"]
  },
  {
    icon: "📡",
    title: { tr: "SLAM ve Konumlandırma", en: "SLAM and Localization" },
    summary: {
      tr: "GNSS olmayan ortamlarda 3B/2B eşzamanlı haritalama, loop closure ve çoklu sensör füzyonu.",
      en: "GNSS-denied simultaneous 3D/2D mapping, graph loop closure, and multi-modal sensor fusion."
    },
    items: "RTAB-Map, Fast-LIO2, LIO-SAM, Kalman Filter, 4D LiDAR, Point Cloud, Sensor Fusion",
    badges: ["Fast-LIO2", "RTAB-Map", "LIO-SAM", "Kalman Filter", "4D LiDAR", "3D Point Cloud / Mesh", "PCA"]
  },
  {
    icon: "⚡",
    title: { tr: "Gömülü Sistemler ve Donanım", en: "Embedded Systems and Hardware" },
    summary: {
      tr: "Uçta yapay zekâ (Edge AI) çıkarımı, donanım seviyesi sensör senkronizasyonu, güç/BMS ve CAD tasarım.",
      en: "Edge AI inference, hardware-level external sensor sync, power/BMS integration, and 3D CAD design."
    },
    items: "STM32, Arduino, Raspberry Pi 5 + AI HAT, Edge AI, IMU/Barometer, Fusion 360",
    badges: ["STM32", "Raspberry Pi 5 + AI HAT", "Arduino Pro Mini", "Edge AI", "IMU / Barometer / GPS", "Fusion 360"]
  },
  {
    icon: "💻",
    title: { tr: "Yazılım, Türkçe NLP ve Oyun AI", en: "Software, Turkish NLP and Game AI" },
    summary: {
      tr: "Sistem programlama, çok görevli Türkçe BERT NLP boru hatları, Gradio arayüzleri ve Unity 3B oyun yapay zekâsı.",
      en: "Systems programming, multi-task Turkish BERT NLP pipelines, Gradio demos, and Unity 3D game AI."
    },
    items: "Python, C/C++, Java, SQL, BERT, Transformers, Gradio, Git, Linux, Unity/C#",
    badges: ["Python", "C / C++", "Turkish BERT", "Transformers", "Gradio", "Linux / Git", "Unity / C#", "Java / SQL"]
  }
];

/* ==========================================================================
   6. ENGINEERING CASE STUDIES (ALL 8 PROJECTS WITH FULL PDF DATA & GALLERIES)
   ========================================================================== */

/**
 * Full 8-project repository.
 * Every image path in `coverImage` and `gallery` is binary-verified against `assets/img/`.
 */
const PROJECTS = [
  /* ------------------------------------------------------------------------
     PROJECT 01: AUTONOMOUS UAV - 3D MAPPING, SEGMENTATION & LOCALIZATION
     ------------------------------------------------------------------------ */
  {
    id: 1,
    code: "PRJ-01 // UAV-SLAM",
    domain: "robotics",
    pdfPage: 5,
    category: {
      tr: "Bitirme Projesi (Capstone) · 2× BAP-100 Destekli",
      en: "Capstone Project · 2× BAP-100 Research Grant"
    },
    title: {
      tr: "Otonom İHA: 3B Haritalama, Bölütleme ve Konumlandırma",
      en: "Autonomous UAV: 3D Mapping, Segmentation and Localization"
    },
    summary: {
      tr: "GNSS sinyalinin olmadığı dış ortamlarda 4B LiDAR ve stereo görüntü verisini birleştirerek gerçek zamanlı 3B haritalama, yüksek hassasiyetli konumlandırma ve nesne bölütlemesi yapan ROS 2 tabanlı uçtan uca otonom quadrotor İHA.",
      en: "End-to-end ROS 2 autonomous quadrotor UAV performing real-time 3D mapping, high-precision localization, and AI object segmentation in GNSS-denied outdoor environments by fusing 4D LiDAR and stereo vision."
    },
    metrics: [
      { tr: "6.46m Loop Overlap", en: "6.46m Loop Overlap" },
      { tr: "Fast-LIO2 + RTAB-Map", en: "Fast-LIO2 + RTAB-Map" },
      { tr: "22cm / 40° Stereo", en: "22cm / 40° Stereo Rig" }
    ],
    coverImage: "assets/img/projects/uav/campus_mosque_3d_mesh.jpeg",
    gallery: [
      {
        src: "assets/img/projects/uav/campus_mosque_3d_mesh.jpeg",
        caption: {
          tr: "Kampüs camisinin 3B mesh çıktısı (yüksekliğe göre renklendirilmiş)",
          en: "3D mesh output of the campus mosque (colored by height)"
        }
      },
      {
        src: "assets/img/projects/uav/campus_gazebo_digital_twin.jpeg",
        caption: {
          tr: "Kampüsün Gazebo dijital ikizi (simülasyon test ortamı)",
          en: "Gazebo digital twin of the campus environment"
        }
      },
      {
        src: "assets/img/projects/uav/phase1_point_cloud.jpeg",
        caption: {
          tr: "Faz 1 Lawnmower taraması 3B nokta bulutu çıktısı",
          en: "Phase 1 Lawnmower scan 3D point cloud output"
        }
      },
      {
        src: "assets/img/projects/uav/obstacle_test_map_gazebo.jpeg",
        caption: {
          tr: "Engel test haritası — farklı geometrilerde otonomi senaryoları (Gazebo)",
          en: "Obstacle test map — autonomy scenarios with different geometries (Gazebo)"
        }
      },
      {
        src: "assets/img/projects/uav/uav_cad_13deg_lidar.jpeg",
        caption: {
          tr: "İHA CAD tasarımı — LiDAR 13° eğimli montaj aparatı",
          en: "UAV CAD design — mounting bracket with 13° LiDAR tilt"
        }
      },
      {
        src: "assets/img/projects/uav/battery_6s4p_bms.jpeg",
        caption: {
          tr: "6S-4P Li-Ion batarya paketi + BMS güç sistemi",
          en: "6S-4P Li-Ion battery pack + BMS power integration"
        }
      },
      {
        src: "assets/img/projects/uav/stereo_camera_22cm.jpeg",
        caption: {
          tr: "22 cm baz mesafeli ve 40° eğimli stereo kamera düzeneği",
          en: "Stereo camera setup with 22 cm baseline and 40° tilt"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Sensörler & Donanım", en: "1. Sensors & Hardware" },
        items: {
          tr: [
            "LiDAR (Unitree L1 · 4B, 13° eğimli aparat)",
            "Stereo Kamera ×2 (22 cm baz, 40° eğim)",
            "IMU & Barometre (Pixhawk 6X dahili)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS"
          ],
          en: [
            "LiDAR (Unitree L1 · 4D, 13° tilted mount)",
            "Stereo Camera ×2 (22 cm baseline, 40° tilt)",
            "IMU & Barometer (Pixhawk 6X built-in)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS"
          ]
        }
      },
      {
        title: { tr: "2. Füzyon & Hibrit SLAM", en: "2. Fusion & Hybrid SLAM" },
        items: {
          tr: [
            "Kalman Filtresi & Donanım External FPS Sync",
            "Fast-LIO2 (Gerçek Zamanlı Frontend)",
            "RTAB-Map (Çevrimdışı Backend & Loop Closure)",
            "Dinamik Voxel Filtresi (20 cm³, hıza duyarlı)"
          ],
          en: [
            "Kalman Filter & Hardware External FPS Sync",
            "Fast-LIO2 (Real-Time Frontend Localization)",
            "RTAB-Map (Offline Backend & Loop Closure)",
            "Dynamic Voxel Filter (20 cm³, velocity-adaptive)"
          ]
        }
      },
      {
        title: { tr: "3. 4-Fazlı Uçuş Mimarisi", en: "3. 4-Phase Flight Architecture" },
        items: {
          tr: [
            "Faz 1: Lawnmower Tarama + A* Kurtarma",
            "Faz 2: Güvenli Bölge Analizi",
            "Faz 3: Bina Bazlı Detaylı Haritalama",
            "Faz 4: 3B Nokta Bulutu, 3B Mesh & Bölütleme"
          ],
          en: [
            "Phase 1: Lawnmower Scan + A* Recovery",
            "Phase 2: Safe Zone Analysis",
            "Phase 3: Building-Based Detailed Mapping",
            "Phase 4: 3D Point Cloud, 3D Mesh & Segmentation"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Faz 1 otonom tarama (Lawnmower) algoritmasını iyileştirdim: kapsama boşluklarını giderdim, kısa kenara göre uyarlanabilir akıllı şerit üretimini ve A* tabanlı rota kurtarma + dinamik şerit budama mekanizmasını geliştirdim. Ayrıca düşük derinlik hatası için kameralar arası 22 cm baz mesafesi ve 40° eğim açılarını bizzat hesapladım.",
      en: "I improved the Phase 1 autonomous scanning (Lawnmower) algorithm: eliminated coverage gaps, engineered adaptive strip generation from the short edge, and added an A*-based route recovery mechanism with dynamic strip pruning. I also personally calculated the 22 cm camera baseline and 40° tilt angle for low depth error."
    },
    details: {
      tr: [
        "Simülasyondan (Gazebo / PX4) fiziksel donanıma (Pixhawk 6X, Raspberry Pi 5 + AI HAT) uçtan uca geliştirildi ve 2× BAP-100 projesiyle desteklendi.",
        "Faz 1 Lawnmower Kapsama: 15 m irtifada 13,23 m yarıçaplı tarama ile şeritler arasında SLAM loop closure için kritik olan 6,46 m örtüşme sağlandı.",
        "Bug algoritmasından esinlenen engelden kaçınma: ön 20 m, alt 2 m algılama (5 m'de tam duruş), 20 cm ızgara çözünürlüğü, engel etrafında 4 m güvenlik payı ve 1,5 m aralıklı waypoint konturu.",
        "Karekök yavaşlamayla sarsıntısız frenleme ve açık alanda 5 m/s seyir hızı; rota kaybında A* ile en yakın haritalanmamış şerit noktasına dönüş.",
        "4B LiDAR ile 3B ve 2B SLAM eşzamanlı koşturuldu (PCA izdüşümüyle boyut indirgeme); uçuş verisi ROS 2 Bag olarak kaydedilip çevrimdışı RTAB-Map optimizasyonu yapıldı."
      ],
      en: [
        "Developed end-to-end from simulation (Gazebo / PX4) to physical hardware (Pixhawk 6X, Raspberry Pi 5 + AI HAT), backed by 2× BAP-100 research grants.",
        "Phase 1 Lawnmower Coverage: scanning with a 13.23 m radius at 15 m altitude guarantees a 6.46 m overlap between strips—critical for SLAM loop closure.",
        "Bug-algorithm-inspired obstacle avoidance: 20 m forward & 2 m downward detection (full stop at 5 m), 20 cm grid resolution, 4 m obstacle safety margin, and 1.5 m waypoint contour spacing.",
        "Smooth braking via square-root deceleration with 5 m/s open-area cruise speed; A* recovery to the nearest unmapped strip point with dynamic strip pruning.",
        "Simultaneous 3D and 2D SLAM with 4D LiDAR (dimensionality reduction via PCA projection) and ROS 2 bag recording for iterative offline RTAB-Map graph optimization."
      ]
    },
    challenges: {
      tr: [
        "Uzun Menzilde Stereo Derinlik Hatası → Stereo kameranın yalnızca 5 m ve altında devreye girdiği, uzak menzilde 4B LiDAR'ın baskın olduğu çift düzeyli sensör füzyonu kurgulandı.",
        "Yüksek Hızda Nokta Bulutu Yoğunluğu & Gecikme → 20 cm³ tabanlı, İHA hızlandıkça ızgara boyutu otomatik büyüyen Dinamik Voxel Filtresi ve donanım seviyesinde harici FPS senkronizasyonu uygulandı."
      ],
      en: [
        "Long-Range Stereo Depth Error → Engineered a two-level sensor fusion scheme where the stereo camera is active strictly at ≤ 5 m while 4D LiDAR dominates long range.",
        "Point Cloud Density & Latency at High Speed → Implemented a velocity-adaptive Dynamic Voxel Filter (20 cm³ base grid) alongside hardware-level external FPS synchronization."
      ]
    },
    tags: ["ROS 2", "Fast-LIO2", "RTAB-Map", "PX4", "Pixhawk 6X", "Unitree L1 4D LiDAR", "Raspberry Pi 5 + AI HAT", "Gazebo", "A* Path Planning"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 02: UNMANNED UNDERWATER VEHICLE (AUV) - TEKNOFEST 2026
     ------------------------------------------------------------------------ */
  {
    id: 2,
    code: "PRJ-02 // AUV-GNC",
    domain: "robotics",
    pdfPage: 8,
    category: {
      tr: "Teknofest 2026 İleri Kategori · 2024 KTR Türkiye 4.'lüğü",
      en: "Teknofest 2026 Advanced Category · 2024 CDR 4th Place"
    },
    title: {
      tr: "İnsansız Sualtı Aracı (AUV) — Tasarım ve Otonomi",
      en: "Unmanned Underwater Vehicle (AUV) — Design & Autonomy"
    },
    summary: {
      tr: "Auvtech (YTÜ öncülüğünde İZÜ ve Haliç üniversitelerinden 15 kişilik ekip) çatısı altında geliştirilen; sualtı çizgi takibi, hedef/kapı tespiti ve kapalı çevrim tam otonom sualtı intikali yapan 6 iticili biyomimetik sualtı aracı.",
      en: "Biomimetic 6-thruster autonomous underwater vehicle developed under Auvtech (15-member inter-university team led by YTU with IZU and Halic Univ.), performing underwater line following, gate/buoy detection, and closed-loop submerged transit."
    },
    metrics: [
      { tr: "KTR Türkiye 4.'sü", en: "4th Place CDR Stage" },
      { tr: "6-İticili Biyomimetik", en: "6-Thruster Biomimetic" },
      { tr: "Kapalı Çevrim GNC", en: "Closed-Loop Subsea GNC" }
    ],
    coverImage: "assets/img/projects/auv/auv_physical_prototype.jpeg",
    gallery: [
      {
        src: "assets/img/projects/auv/auv_physical_prototype.jpeg",
        caption: {
          tr: "Aracın önceki nesil fiziksel prototipi (algoritma ve sızdırmazlık testlerinde kullanıldı)",
          en: "Previous-generation physical prototype of the vehicle (used for algorithm testing)"
        }
      },
      {
        src: "assets/img/projects/auv/auv_subcomponents_diagram.jpeg",
        caption: {
          tr: "Sistem alt bileşenleri: tasarım, yazılım, elektronik, otonom sürüş, görev aşamaları ve üretim",
          en: "System subcomponents: design, software, electronics, autonomous driving, mission stages and production"
        }
      },
      {
        src: "assets/img/projects/auv/line_following_flow.jpeg",
        caption: {
          tr: "Sualtı çizgi/boru hattı takibi ve Mini ROV kontrol akış şeması",
          en: "Underwater line-following and Mini ROV control flow diagram"
        }
      },
      {
        src: "assets/img/projects/auv/autonomous_transit_flow.jpeg",
        caption: {
          tr: "Otonom sualtı intikal, şamandıra dönüşü ve navigasyon akış şeması",
          en: "Autonomous underwater transit, buoy turn, and navigation flow diagram"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Biyomimetik & Donanım", en: "1. Biomimetic Design" },
        items: {
          tr: [
            "Kaplumbağa dinamiğinden esinlenen 6 simetrik itici",
            "Düşük boyut/ağırlık ile yüksek manevra ve stabilite",
            "Maksimum görüş açılı stratejik kamera yerleşimi",
            "IMU, Basınç/Derinlik ve LiDAR sensör paketi"
          ],
          en: [
            "6 symmetric thrusters inspired by turtle dynamics",
            "High maneuverability & stability via compact mass",
            "Strategic camera placement for maximum FOV",
            "IMU, Pressure/Depth, and LiDAR sensor suite"
          ]
        }
      },
      {
        title: { tr: "2. Algılama & Görüntü İşleme", en: "2. Underwater Perception" },
        items: {
          tr: [
            "Renk dengesi, arka plan çıkarımı ve parlaklık iyileştirme",
            "YOLO ile boru hattı görev ipucu ve şamandıra tespiti",
            "Kontrast şerit merkezine göre itki komutları",
            "Kare geçiş alanı tanıma + 3B hizalama"
          ],
          en: [
            "Color balance, background removal & clarity boost",
            "YOLO detection of pipeline clues & turn/finish buoys",
            "Thrust commands driven by contrast strip centerline",
            "Square gate recognition + 3D alignment"
          ]
        }
      },
      {
        title: { tr: "3. Güdüm, Navigasyon & Kontrol", en: "3. Subsea GNC" },
        items: {
          tr: [
            "IMU + Basınç + LiDAR füzyonuyla dinamik rota",
            "Dead Reckoning + Kalman Filtresi ile konum takibi",
            "Kapalı çevrim PID derinlik kontrolü (tam sualtı intikal)",
            "Yer istasyonunda canlı IMU görselleştirme ve hata ayıklama"
          ],
          en: [
            "Dynamic routing via IMU + Pressure + LiDAR fusion",
            "Dead Reckoning + Kalman Filter trajectory tracking",
            "Closed-loop PID depth control (fully submerged transit)",
            "Live ground station IMU visualization & debugging"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Sualtı görüntü iyileştirme (renk dengesi, arka plan çıkarımı, parlaklık ayarı), YOLO tabanlı görev ipucu ve şamandıra tespiti ile IMU + basınç + kamera + LiDAR sensör füzyonuna dayalı çizgi takibi ve kapalı çevrim otonom intikal kontrol algoritmalarının geliştirilmesinde görev aldım.",
      en: "Contributed to underwater image enhancement (color balance, background removal, brightness adjustment), YOLO-based mission clue and buoy detection, and closed-loop line-following and autonomous underwater transit algorithms fusing IMU, pressure, camera, and LiDAR data."
    },
    details: {
      tr: [
        "2024 Teknofest Kritik Tasarım Raporu (KTR) aşamasında Türkiye 4.'lüğü elde edildi; 2026 İleri Kategori yarışmasında derece hedefleniyor.",
        "Çizgi Takibi: Kontrast şeridin merkezine göre kamera sapma açısı hesaplanarak itki komutları üretilir; IMU + kamera + basınç + LiDAR ile mesafe kestirimi yapılır.",
        "Otonom İntikal: Başlangıç noktası kaydedildikten sonra dalış manevrası, PID ile sabit derinlikte intikal, Dead Reckoning + Kalman filtresi ve şamandıra etrafında dairesel dönüş manevrası uygulanır.",
        "Kare geçiş alanı (gate) tanıma ve 3B merkezleme hizalaması tamamlandığında araç otonom olarak yüzeye çıkış yapar."
      ],
      en: [
        "Placed 4th nationally at the 2024 Teknofest Critical Design Report (CDR) stage; targeting a top podium finish in the 2026 Advanced Category.",
        "Line Following: computes camera deviation from the contrast strip centerline to command thrusters while estimating distance via IMU + camera + pressure + LiDAR.",
        "Autonomous Transit: records home position, executes diving maneuver, maintains submerged depth via PID + Dead Reckoning/Kalman filter, and performs circular buoy turns.",
        "Recognizes the square gate, performs 3D centering alignment, and autonomously surfaces once centered."
      ]
    },
    challenges: {
      tr: [
        "Sualtı Bulanıklığı ve Mavi/Yeşil Renk Baskınlığı → YOLO çıkarımı öncesinde Python ile gerçek zamanlı renk dengesi, arka plan çıkarımı ve kontrast/parlaklık iyileştirme katmanı eklendi.",
        "Sualtında GPS Sinyalinin Olmaması → Yüzeye çıkmadan tamamen sualtından intikal edebilmek için basınç sensörü (PID derinlik), IMU ve Dead Reckoning + Kalman Filtresi füzyonu kuruldu."
      ],
      en: [
        "Underwater Turbidity & Color Cast → Pre-processed camera frames with real-time Python color balancing, background subtraction, and brightness normalization prior to YOLO inference.",
        "Complete Absence of GPS Underwater → Combined pressure-based PID depth control with IMU Dead Reckoning and Kalman Filtering to execute the entire transit submerged."
      ]
    },
    tags: ["ROS 2", "Python", "C++", "YOLO", "OpenCV", "PID Control", "Kalman Filter", "Sensor Fusion", "AUV"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 03: AUTONOMOUS CARGO DELIVERY VEHICLE SIMULATION (TÜBİTAK 2209-A)
     ------------------------------------------------------------------------ */
  {
    id: 3,
    code: "PRJ-03 // UGV-L4",
    domain: "robotics",
    pdfPage: 10,
    category: {
      tr: "TÜBİTAK 2209-A · Proje Yürütücüsü",
      en: "TÜBİTAK 2209-A · Principal Investigator"
    },
    title: {
      tr: "Otonom Kargo Dağıtım Aracının Simülasyonu",
      en: "Simulation of an Autonomous Cargo Delivery Vehicle"
    },
    summary: {
      tr: "Yapay zekâ ve görüntü işleme teknikleriyle kargo paketlerini trafik kurallarına uygun ve güvenli şekilde doğru kişiye teslim eden Seviye 4 otonom bir kargo aracının ROS ve Gazebo ortamında simülasyonu.",
      en: "ROS and Gazebo simulation of a SAE Level 4 autonomous cargo vehicle using artificial intelligence and computer vision to deliver packages safely in full compliance with urban traffic rules."
    },
    metrics: [
      { tr: "TÜBİTAK Yürütücüsü", en: "TÜBİTAK 2209-A PI" },
      { tr: "SAE Seviye 4 Otonomi", en: "SAE Level 4 Autonomy" },
      { tr: "Kamera+LiDAR+Radar", en: "Camera+LiDAR+Radar" }
    ],
    coverImage: "assets/img/projects/cargo/urban_yolo_detection.jpeg",
    gallery: [
      {
        src: "assets/img/projects/cargo/urban_yolo_detection.jpeg",
        caption: {
          tr: "Kentsel simülasyon ortamında bilgisayarlı görü ve nesne tespiti (yaya, araç, trafik öğeleri)",
          en: "Computer vision and object detection in urban simulation (pedestrians, vehicles, traffic elements)"
        }
      },
      {
        src: "assets/img/projects/cargo/sae_autonomy_levels.jpeg",
        caption: {
          tr: "SAE Otonom sürüş seviyeleri — proje hedefi Seviye 4 (Yüksek Otomasyon)",
          en: "SAE Levels of driving automation — target Level 4 (High Automation)"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Kentsel Algılama", en: "1. Urban Perception" },
        items: {
          tr: [
            "YOLO + OpenCV ile trafik işaretleri tespiti",
            "Yaya, araç ve canlı engellerin gerçek zamanlı takibi",
            "Kamera–LiDAR–Radar üçlü sensör füzyonu"
          ],
          en: [
            "Traffic sign detection with YOLO + OpenCV",
            "Real-time tracking of pedestrians & vehicles",
            "Camera–LiDAR–Radar tri-modal sensor fusion"
          ]
        }
      },
      {
        title: { tr: "2. Rota & Karar Planlama", en: "2. Route & Decision Planning" },
        items: {
          tr: [
            "En kısa yol algoritmaları ile rota hesabı",
            "Anlık trafik yoğunluğuna göre dinamik optimizasyon",
            "Kaza durumunda engelden kaçınma ve yeniden rotalama"
          ],
          en: [
            "Shortest-path route calculation algorithms",
            "Real-time traffic-density route optimization",
            "Obstacle avoidance & dynamic accident rerouting"
          ]
        }
      },
      {
        title: { tr: "3. Güvenli Teslimat", en: "3. Secure Delivery" },
        items: {
          tr: [
            "Kullanıcıya özel şifreli teslimat haznesi (hazne + kod)",
            "Müşteri veri tabanı entegrasyonu",
            "SAE Seviye 4 yüksek otonomi standardı"
          ],
          en: [
            "User-specific encrypted compartment (locker + code)",
            "Customer database authentication",
            "SAE Level 4 high automation compliance"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Proje Yürütücüsü (Principal Investigator) — Danışmanlığını Dr. Öğr. Üyesi Zahra Elmi'nin yaptığı TÜBİTAK 2209-A araştırma projesinde ROS/Gazebo simülasyon ortamının kurulması, YOLO tabanlı nesne tespiti ve trafik yoğunluğuna duyarlı rota planlama algoritmalarını geliştirdim.",
      en: "Principal Investigator (advised by Asst. Prof. Dr. Zahra Elmi) — Led the TÜBİTAK 2209-A research project, building the ROS/Gazebo simulation environment, YOLO-based traffic/pedestrian detection, and dynamic route planning algorithms."
    },
    details: {
      tr: [
        "YOLO ve OpenCV kullanılarak kentsel ortamda trafik işaretleri, yayalar, araçlar ve canlılar gerçek zamanlı tespit edildi.",
        "En kısa yol algoritmaları, anlık trafik yoğunluğu verisiyle birleştirilerek teslimat süresi ve güvenliği optimize edildi.",
        "Kamera, LiDAR ve radar sensör füzyonu ile dinamik engellerden kaçınma ve kaza/yol kapanması durumunda otonom yeniden rotalama sağlandı.",
        "Doğru kişiye güvenli teslimat için kullanıcıya özel şifreli bölme (hazne + doğrulama kodu) ve müşteri veri tabanı mimarisi kurgulandı."
      ],
      en: [
        "Detected traffic signs, pedestrians, vehicles, and living beings in real time within urban environments using YOLO and OpenCV.",
        "Combined shortest-path algorithms with real-time traffic density metrics to optimize delivery time and safety.",
        "Achieved robust obstacle avoidance and automatic rerouting in accident scenarios via camera–LiDAR–radar sensor fusion.",
        "Designed a user-specific encrypted compartment delivery mechanism (compartment + PIN code) integrated with a customer database."
      ]
    },
    challenges: {
      tr: [
        "Kentsel Trafikte Beklenmedik Kaza ve Tıkanıklıklar → Kamera-LiDAR-radar füzyonundan gelen engel verisiyle graf ağırlıklarını anlık güncelleyen dinamik yeniden rotalama (rerouting) mekanizması eklendi."
      ],
      en: [
        "Unexpected Urban Accidents & Congestion → Integrated dynamic graph weight updates driven by camera-LiDAR-radar fusion to trigger real-time rerouting around blocked lanes."
      ]
    },
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV", "Path Planning", "Sensor Fusion", "Level 4 Autonomy", "TÜBİTAK 2209-A"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 04: TEKNOFEST AI IN AVIATION - OBJECT DETECTION & POSITION ESTIMATION
     ------------------------------------------------------------------------ */
  {
    id: 4,
    code: "PRJ-04 // AERIAL-AI",
    domain: "cv-ai",
    pdfPage: 11,
    category: {
      tr: "Teknofest · Havacılıkta Yapay Zekâ Yarışması",
      en: "Teknofest · AI in Aviation Competition"
    },
    title: {
      tr: "Havacılıkta Yapay Zekâ: Nesne Tespiti ve Görsel Konum Kestirimi",
      en: "AI in Aviation: Object Detection & Visual Position Estimation"
    },
    summary: {
      tr: "İHA görüntülerinden insan ve taşıt tespiti için gerçek zamanlı çalışacak en uygun modelin VisDrone2019-VID üzerinde sistematik olarak belirlenmesi, YOLO + RT-DETR hibrit çıkarımı ve GPS olmadan 3B görsel konum/iniş alanı kestirimi.",
      en: "Systematic real-time model benchmarking on VisDrone2019-VID UAV imagery for human/vehicle detection, weighted YOLOv12n + RT-DETR hybrid inference, and GPS-free 3D visual position & safe landing zone estimation."
    },
    metrics: [
      { tr: "YOLOv12n + RT-DETR", en: "YOLOv12n + RT-DETR" },
      { tr: ">7.5 FPS Gerçek Zamanlı", en: ">7.5 FPS Real-Time" },
      { tr: "GPS-Bağımsız 3B Konum", en: "GPS-Free 3D Pose" }
    ],
    coverImage: "assets/img/projects/aviation-ai/yolo_map_comparison.jpeg",
    gallery: [
      {
        src: "assets/img/projects/aviation-ai/yolo_map_comparison.jpeg",
        caption: {
          tr: "YOLO Modelleri mAP@0.5:0.95 karşılaştırması — YOLOv12n en yüksek doğruluğa ulaştı",
          en: "YOLO Models mAP@0.5:0.95 comparison — YOLOv12n achieved the highest accuracy"
        }
      },
      {
        src: "assets/img/projects/aviation-ai/yolo_fps_comparison.jpeg",
        caption: {
          tr: "YOLO Modelleri FPS karşılaştırması — n serileri 7,5 FPS gerçek zamanlı eşiğini fazlasıyla aştı",
          en: "YOLO Models FPS comparison — nano series easily exceeded the 7.5 FPS real-time threshold"
        }
      },
      {
        src: "assets/img/projects/aviation-ai/train_val_loss_curve.jpeg",
        caption: {
          tr: "Model XY V2 Eğitim ve Doğrulama Kaybı (Train vs Validation Loss) — erken durdurma ile denge",
          en: "Model XY V2 Train vs Validation Loss curve — balance achieved via early stopping"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Veri Seti & Eğitim", en: "1. Dataset & Training" },
        items: {
          tr: [
            "VisDrone2019-VID (90° kamera açısı, 15–25 m irtifa)",
            "Google Colab Pro+ / NVIDIA A100 GPU",
            "128×128 çözünürlük, yığın boyutu (batch) 32"
          ],
          en: [
            "VisDrone2019-VID (90° camera angle, 15–25 m altitude)",
            "Google Colab Pro+ / NVIDIA A100 GPU",
            "128×128 resolution, batch size 32"
          ]
        }
      },
      {
        title: { tr: "2. Model Kıyaslaması & Hibrit Kod", en: "2. Benchmarking & Hybrid Inference" },
        items: {
          tr: [
            "YOLOv5n, YOLOv8n, YOLOv11n, YOLOv12n, YOLOS, Faster R-CNN",
            "En iyi tekil denge: YOLOv12n (en yüksek mAP + >35 FPS)",
            "Yüksek doğruluk için YOLO + RT-DETR ağırlıklı hibrit çıkarım"
          ],
          en: [
            "YOLOv5n, YOLOv8n, YOLOv11n, YOLOv12n, YOLOS, Faster R-CNN",
            "Best single model: YOLOv12n (highest mAP + >35 FPS)",
            "Weighted YOLO + RT-DETR hybrid inference for peak accuracy"
          ]
        }
      },
      {
        title: { tr: "3. Görev 2: Görsel Konum Kestirimi", en: "3. Task 2: Visual Position Estimation" },
        items: {
          tr: [
            "Kamera parametreleri + referans koordinatlarla 3B hedef konumu",
            "GPS olmadan yalnızca görüntüyle en düz ve güvenli iniş alanı tespiti"
          ],
          en: [
            "3D ground target position via camera intrinsics & reference coords",
            "GPS-free flattest and safest landing zone identification"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Uygun İHA veri setlerini araştırıp işlenebilir hâle getirdim; tüm YOLO modellerini (v5/v8/v11/v12), YOLOS ve Faster R-CNN'i bizzat eğitip mAP50 / mAP50-95 / FPS / çıkarım süresi metriklerine göre raporladım ve tablolaştırdım. Rapor sonrasında RT-DETR ile YOLO'yu birleştiren ağırlıklı hibrit çıkarım kodunu geliştirdim.",
      en: "Researched and preprocessed suitable UAV datasets; personally trained and benchmarked all YOLO models (v5/v8/v11/v12), YOLOS, and Faster R-CNN across mAP50, mAP50-95, FPS, and latency metrics. Post-report, engineered the weighted YOLO + RT-DETR hybrid inference script."
    },
    details: {
      tr: [
        "VisDrone2019-VID veri setinde 15–25 m irtifa ve 90° kamera açısına uygun olarak NVIDIA A100 GPU üzerinde kapsamlı model kıyaslaması yapıldı.",
        "YOLOv12n hem mAP@0.5:0.95 değerinde birinci oldu hem de 7,5 FPS olan gerçek zamanlı yarışma eşiğini (>35 FPS ile) fazlasıyla geçti.",
        "Görev 2 kapsamında kamera iç/dış parametreleri ve referans koordinatlar kullanılarak yerdeki hedeflerin 3B konum tahmini ve GPS bağımsız güvenli düz iniş alanı tespiti gerçekleştirildi."
      ],
      en: [
        "Conducted a systematic benchmark on VisDrone2019-VID (90° camera, 15–25 m altitude) using an NVIDIA A100 GPU.",
        "YOLOv12n achieved the highest mAP@0.5:0.95 while surpassing the 7.5 FPS real-time threshold (reaching >35 FPS).",
        "In Task 2, estimated 3D ground target coordinates using camera parameters and reference points, and detected the flattest safe landing zones without GPS."
      ]
    },
    challenges: {
      tr: [
        "Düşük Başlangıç mAP Değeri → Veri formatı ve sınıf eşleme (class mapping) uyumsuzluğu tespit edilip etiket formatı yeniden düzenlendi.",
        "Aşırı Veri Artırımı (Augmentation) Kaynaklı Overfitting → Erken durdurma (early stopping) ve doğrulama kaybı (validation loss) takibiyle30 epoch'ta optimal denge sağlandı.",
        "RT-DETR Modelinin Gerçek Zamanlı Kullanım İçin Yavaş Kalması → Transformer tabanlı RT-DETR daha yüksek doğruluk verse de FPS düşüktü; YOLO ile ağırlıklandırılmış hibrit bir çıkarım kodu yazılarak hız ve doğruluk birleştirildi.",
        "Colab'da Değişken Çıkarım Süreleri → Testler birden çok kez çalıştırılıp istatistiksel ortalaması alındı."
      ],
      en: [
        "Low Initial mAP → Identified data format and class mapping mismatches; reorganized the annotation pipeline.",
        "Overfitting from Excessive Augmentation → Balanced training via early stopping and validation loss monitoring across 30 epochs.",
        "RT-DETR Latency Bottleneck → While transformer-based RT-DETR yielded higher accuracy, it was too slow for real-time flight; solved by writing a weighted YOLO + RT-DETR hybrid inference script.",
        "Variable Colab Inference Times → Executed multiple benchmark runs and reported averaged latency metrics."
      ]
    },
    tags: ["YOLOv12n", "RT-DETR", "PyTorch", "OpenCV", "VisDrone2019-VID", "3D Visual Localization", "NVIDIA A100"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 05: MONTECH - WEARABLE SMART JACKET (PATENT PENDING)
     ------------------------------------------------------------------------ */
  {
    id: 5,
    code: "PRJ-05 // WEARABLE-IOT",
    domain: "embedded",
    pdfPage: 13,
    category: {
      tr: "Teknofest & BAP-100 · Patent Başvurusu",
      en: "Teknofest & BAP-100 · Patent Pending"
    },
    title: {
      tr: "MonTech — Giyilebilir Akıllı Mont",
      en: "MonTech — Wearable Smart Jacket"
    },
    summary: {
      tr: "Zorlu doğa koşullarında ve afet anlarında görev yapan bireyler için nabız ve iç/dış sıcaklık sensörleriyle sağlık durumunu izleyen, hipotermi riskinde 5V ısıtıcı pedleri otomatik devreye alan, 12 esnek güneş panelli ve acil durum GPS bildirimli akıllı mont.",
      en: "Solar-powered multipurpose smart jacket for disaster responders and harsh outdoor environments; continuously monitors pulse and body temperature, automatically activates 5V heating pads below 35 °C, and transmits emergency GPS coordinates via mobile app."
    },
    metrics: [
      { tr: "Patent Başvurusu", en: "Patent Pending" },
      { tr: "12 Esnek Güneş Paneli", en: "12 Flexible Solar Panels" },
      { tr: "<35°C Otomatik Isıtma", en: "<35°C Auto-Heating" }
    ],
    coverImage: "assets/img/projects/montech/smart_jacket_prototype.jpeg",
    gallery: [
      {
        src: "assets/img/projects/montech/smart_jacket_prototype.jpeg",
        caption: {
          tr: "Geliştirilen akıllı mont prototipi — sensör, 5V ısıtıcı pedler ve enerji entegrasyonu",
          en: "Developed smart jacket prototype — sensor, 5V heating pads, and energy integration"
        }
      },
      {
        src: "assets/img/projects/montech/app_bluetooth_devices.jpeg",
        caption: {
          tr: "Mobil uygulama — HC-06 Bluetooth üzerinden cihaz bağlantısı",
          en: "Mobile application — HC-06 Bluetooth device pairing interface"
        }
      },
      {
        src: "assets/img/projects/montech/app_live_gps_location.jpeg",
        caption: {
          tr: "Mobil uygulama — acil durumda canlı GPS konum takibi",
          en: "Mobile application — live emergency GPS location tracking on map"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Sürekli Sensör İzleme", en: "1. Sensor Monitoring" },
        items: {
          tr: [
            "MAX30102 (Kırmızı/IR) ile sürekli nabız takibi",
            "NTC Termistör ile vücut ve dış ortam ısısı ölçümü",
            "Vücut ısısı < 35 °C olduğunda 5V ısıtıcı pedler aktif"
          ],
          en: [
            "Continuous pulse monitoring via MAX30102 (Red/IR)",
            "Body & ambient temperature sensing via NTC thermistor",
            "Automatic 5V heating pad activation below 35 °C"
          ]
        }
      },
      {
        title: { tr: "2. Kritik Durum & Kullanıcı Onayı", en: "2. Critical Alert Verification" },
        items: {
          tr: [
            "Anormal nabız/sıcaklık durumunda Kritik Durum tetiklenir",
            "Titreşim motoru + piezo buzzer + LED ile 'İyi misin?' uyarısı",
            "Yanlış alarmları önlemek için kullanıcı buton onayı beklenir"
          ],
          en: [
            "Critical Condition triggered on abnormal vitals",
            "Vibration motor + piezo buzzer + LED 'Are you okay?' prompt",
            "Awaits user button response to prevent false alarms"
          ]
        }
      },
      {
        title: { tr: "3. Acil GPS & Yenilenebilir Enerji", en: "3. Emergency GPS & Solar Power" },
        items: {
          tr: [
            "Yanıt yoksa GPS NEO-6M konumu Bluetooth ile mobil uygulamaya iletilir",
            "Acil durum kişilerine canlı harita konumu gönderilir",
            "12 esnek güneş paneli (sırt 6, göğüs 4, kol 2) + powerbank"
          ],
          en: [
            "If no response, GPS NEO-6M coordinates sent via Bluetooth to app",
            "Live map location transmitted to emergency contacts",
            "12 flexible solar panels (6 back, 4 chest, 2 arms) + power bank"
          ]
        }
      }
    ],
    specsTable: {
      headers: {
        tr: ["Sistem Elemanı", "Donanım & Teknik Özellik"],
        en: ["System Element", "Hardware & Technical Specification"]
      },
      rows: {
        tr: [
          ["Denetleyici", "Arduino Pro Mini (düşük güç tüketimli gömülü kontrol)"],
          ["Nabız Sensörü", "MAX30102 (Kırmızı / IR fotopletismografi)"],
          ["Sıcaklık Sensörü", "NTC Termistör (hassas vücut ısısı takibi)"],
          ["Konumlandırma", "GPS NEO-6M Uydu Modülü"],
          ["Kablosuz İletişim", "HC-06 Bluetooth ➔ Android Mobil Uygulama"],
          ["Termal Koruma / Isıtma", "5 V Isıtıcı Pedler (35 °C altında otomatik devreye girer)"],
          ["Yenilenebilir Enerji", "12 Adet Esnek Güneş Paneli (Sırt: 6, Göğüs: 2+2, Kol: 1+1) + Powerbank"],
          ["Uyarı & Etkileşim", "Titreşim Motoru + Piezo Buzzer + LED + 'İyi misin?' Onay Butonu"]
        ],
        en: [
          ["Controller", "Arduino Pro Mini (low-power embedded microcontroller)"],
          ["Pulse Sensor", "MAX30102 (Red / IR photoplethysmography)"],
          ["Temperature Sensor", "NTC Thermistor (continuous body temperature sensing)"],
          ["Location Module", "GPS NEO-6M Satellite Receiver"],
          ["Communication", "HC-06 Bluetooth ➔ Android Mobile Application"],
          ["Thermal Heating", "5 V Heating Pads (automatic activation below 35 °C)"],
          ["Renewable Energy", "12 Flexible Solar Panels (Back: 6, Chest: 2+2, Arms: 1+1) + Power Bank"],
          ["Alert & Interaction", "Vibration Motor + Piezo Buzzer + LED + 'Are you okay?' Button"]
        ]
      }
    },
    myContribution: {
      tr: "Gömülü kontrol algoritması (Arduino Pro Mini üzerinde sensör okuma, <35 °C otomatik ısıtma kontrolü ve 'İyi misin?' acil durum karar akışı), elektronik donanım entegrasyonu ve Bluetooth tabanlı canlı GPS takip mobil uygulamasının geliştirilmesinde rol aldım. Proje Teknofest İnsanlık Yararına Teknoloji Yarışması ve BAP-100 kapsamında başarıyla tamamlandı; patent başvurusu yapıldı.",
      en: "Developed the embedded control logic (vital monitoring, <35 °C automatic heating pad activation, and the 'Are you okay?' fail-safe emergency state machine), hardware sensor integration, and the Bluetooth live-GPS mobile app. Successfully completed under Teknofest Technology for Humanity and BAP-100; patent application filed."
    },
    details: {
      tr: [
        "Hipotermi koruması: Vücut ısısı 35 °C'nin altına düştüğünde 5V ısıtıcı pedler otonom olarak devreye girer.",
        "Acil durum senaryosu: Sensör İzleme ➔ Kritik Durum ➔ LED + Buton 'İyi misin?' ➔ Yanıt Yoksa GPS Konumunun acil durum kişilerine iletilmesi.",
        "12 adet esnek güneş paneliyle (sırt 6, kol 1+1, göğüs 2+2) sahada sürdürülebilir enerji; modüler ve yıkanabilir tasarım."
      ],
      en: [
        "Hypothermia protection: 5V heating pads automatically activate when body temperature falls below 35 °C.",
        "Fail-safe emergency flow: Sensor Monitoring ➔ Critical Condition ➔ LED + Button 'Are you okay?' ➔ No Response triggers automatic GPS transmission.",
        "Sustainable off-grid power via 12 flexible solar panels (6 back, 1+1 arms, 2+2 chest) in a modular, washable jacket design."
      ]
    },
    challenges: {
      tr: [
        "Sahada Enerji Sürekliliği ve Yıkanabilirlik → Elektronik devre ve 12 esnek güneş paneli modüler (çıkarılabilir) yapıda tasarlandı ve düşük güçlü Arduino Pro Mini tercih edildi."
      ],
      en: [
        "Off-Grid Power Endurance & Washability → Engineered a modular, detachable wiring harness powered by 12 flexible solar panels and a low-power Arduino Pro Mini."
      ]
    },
    tags: ["Embedded C", "Arduino Pro Mini", "MAX30102", "GPS NEO-6M", "Bluetooth HC-06", "Mobile App", "Solar Energy", "Patent Pending"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 06: WASTE TYPE RECOGNITION & RECYCLING ASSISTANT
     ------------------------------------------------------------------------ */
  {
    id: 6,
    code: "PRJ-06 // VISION-SEG",
    domain: "cv-ai",
    pdfPage: 15,
    category: {
      tr: "Bilgisayarlı Görü · Örnek Bölütleme (Instance Segmentation)",
      en: "Computer Vision · Instance Segmentation"
    },
    title: {
      tr: "Atık Türü Tanıma ve Geri Dönüşüm Asistanı",
      en: "Waste Type Recognition and Recycling Assistant"
    },
    summary: {
      tr: "İZÜ kampüsünde toplanıp elle etiketlenen 2.501 görsellik özgün veri setiyle 5 atık sınıfını önce tespit edip ardından piksel düzeyinde örnek bölütleme (YOLOv11m-seg ile %85 mAP) yaparak doğru geri dönüşüm kutusuna yönlendiren mobil sistem.",
      en: "Computer vision system and mobile app trained on a custom hand-labeled 2,501-image İZÜ campus dataset, performing object detection and pixel-level instance segmentation (85% mAP with YOLOv11m-seg) across 5 waste classes to route items to the correct recycling bin."
    },
    metrics: [
      { tr: "%85 mAP (YOLOv11m-seg)", en: "85% mAP (YOLOv11m-seg)" },
      { tr: "2.501 Özgün Görsel", en: "2,501 Custom Images" },
      { tr: "5 Atık Sınıfı + Mobil", en: "5 Waste Classes + App" }
    ],
    coverImage: "assets/img/projects/waste-cv/yolov11m_seg_masks.jpeg",
    gallery: [
      {
        src: "assets/img/projects/waste-cv/yolov11m_seg_masks.jpeg",
        caption: {
          tr: "YOLOv11m-seg örnek bölütleme (instance segmentation) çıktıları — piksel düzeyinde maskeler",
          en: "YOLOv11m-seg instance segmentation outputs — pixel-level masks"
        }
      },
      {
        src: "assets/img/projects/waste-cv/confusion_matrix.jpeg",
        caption: {
          tr: "YOLOv11m-seg Karışıklık Matrisi (Confusion Matrix) — 5 sınıf doğruluk dağılımı",
          en: "YOLOv11m-seg Confusion Matrix across the 5 waste categories"
        }
      },
      {
        src: "assets/img/projects/waste-cv/test_samples_confidence.jpeg",
        caption: {
          tr: "Test örnekleri — farklı aydınlatma ve arka planlarda güven skorlu tespitler",
          en: "Test samples — detections with confidence scores across varied backgrounds"
        }
      },
      {
        src: "assets/img/projects/waste-cv/app_waste_routing.jpeg",
        caption: {
          tr: "Mobil uygulama — fotoğraf çekerek atık tespiti, güven skoru ve kutu rengi yönlendirmesi",
          en: "Mobile app — waste detection, confidence score, and target bin color routing"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Kampüs Veri Seti", en: "1. Custom Campus Dataset" },
        items: {
          tr: [
            "İZÜ kampüsünde bizzat toplanıp elle etiketlendi",
            "5 Sınıf: Cam, Kâğıt, Metal, Plastik, Organik",
            "2.501 görsel / 2.633 etiket (640×640, ±15° döndürme & flip)"
          ],
          en: [
            "Collected & hand-annotated on the İZÜ campus",
            "5 Classes: Glass, Paper, Metal, Plastic, Organic",
            "2,501 images / 2,633 labels (640×640, ±15° rotation & flip)"
          ]
        }
      },
      {
        title: { tr: "2. Model Eğitimi & Kıyaslama", en: "2. Training & Benchmarking" },
        items: {
          tr: [
            "Google Colab NVIDIA A100 · 150 epoch · batch 32 · lr 0.01",
            "Kıyaslanan: YOLOv8n, YOLOv11m, YOLOv11s-seg, YOLOv11m-seg",
            "En iyi model: YOLOv11m-seg (%85 mAP)"
          ],
          en: [
            "Google Colab NVIDIA A100 · 150 epochs · batch 32 · lr 0.01",
            "Compared: YOLOv8n, YOLOv11m, YOLOv11s-seg, YOLOv11m-seg",
            "Best model: YOLOv11m-seg (85% mAP)"
          ]
        }
      },
      {
        title: { tr: "3. Mobil Asistan", en: "3. Mobile Recycling Assistant" },
        items: {
          tr: [
            "Kamera veya galeriden fotoğraf yükleme",
            "Tespit edilen atık türü ve güven skoru gösterimi",
            "Atılacak geri dönüşüm kutusu rengine (ör. Gri Kutu) yönlendirme"
          ],
          en: [
            "Capture photo or upload from gallery",
            "Displays detected waste types and confidence scores",
            "Routes user to the exact recycling bin color (e.g., Gray Bin)"
          ]
        }
      }
    ],
    myContribution: {
      tr: "İZÜ kampüsünde 2.501 görsellik özgün veri setinin toplanması, elle piksel düzeyinde etiketlenmesi, Google Colab A100 üzerinde YOLOv8 ve YOLOv11 nesne tespiti / örnek bölütleme (instance segmentation) modellerinin eğitilip kıyaslanması ve %85 mAP sağlayan YOLOv11m-seg modelinin mobil uygulamaya entegre edilmesini gerçekleştirdim.",
      en: "Collected and hand-annotated the 2,501-image campus dataset, trained and benchmarked YOLOv8 and YOLOv11 detection/segmentation variants on an NVIDIA A100 GPU, and integrated the winning YOLOv11m-seg model (85% mAP) into the mobile recycling assistant app."
    },
    details: {
      tr: [
        "Veri seti 5 ana sınıftan (cam, kâğıt, metal, plastik, organik) oluşmakta olup yatay/dikey çevirme ve ±15° döndürme veri artırımı (augmentation) ile zenginleştirildi.",
        "Sadece sınırlayıcı kutu (bounding box) yerine örnek bölütleme (instance segmentation) kullanılarak üst üste duran veya karmaşık şekilli atıkların sınırları piksel düzeyinde ayrıştırıldı.",
        "Mobil arayüzde tek karede birden fazla atık (ör. Kâğıt %91 ve Metal %53 → Gri Kutu) aynı anda tespit edilip kullanıcıya yönlendirme sunuluyor."
      ],
      en: [
        "Built a 5-class dataset (glass, paper, metal, plastic, organic) enriched with horizontal/vertical flips and ±15° rotation augmentations.",
        "Employed pixel-level instance segmentation rather than bounding boxes alone, improving accuracy on overlapping or deformable waste items.",
        "The mobile interface detects multiple waste items in a single frame (e.g., Paper 91% & Metal 53% → Gray Bin) and guides the user immediately."
      ]
    },
    challenges: {
      tr: [
        "Metal/Plastik Ambalaj Üzerindeki Beyaz Etiketlerin 'Kâğıt' Sanılması → Karışıklık matrisi (Confusion Matrix) analizinde, metal spreylerin üzerindeki beyaz zeminli siyah yazılı etiketlerin yüksek güvenle 'kâğıt' olarak da algılandığı tespit edildi; bölütleme maskeleri ve çoklu tespit gösterimiyle hem ana materyal hem etiket raporlandı."
      ],
      en: [
        "White Printed Labels on Metal/Plastic Cans Detected as 'Paper' → Confusion matrix and error analysis revealed that high-contrast black text on white product labels triggered secondary 'paper' detections; addressed by surfacing multi-class instance masks with confidence rankings in the mobile UI."
      ]
    },
    tags: ["YOLOv11m-Seg", "YOLOv8", "Instance Segmentation", "Computer Vision", "Python", "Mobile App", "NVIDIA A100"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 07: MULTI-TASK TURKISH NLP PIPELINE (HOUSE M.D.)
     ------------------------------------------------------------------------ */
  {
    id: 7,
    code: "PRJ-07 // TURKISH-NLP",
    domain: "nlp-game",
    pdfPage: 17,
    category: {
      tr: "Türkçe Doğal Dil İşleme (NLP) · BERT vs Klasik ML",
      en: "Turkish Natural Language Processing · BERT vs Classical ML"
    },
    title: {
      tr: "Çok Görevli Türkçe NLP Pipeline — House M.D.",
      en: "Multi-Task Turkish NLP Pipeline — House M.D."
    },
    summary: {
      tr: "Türkçe altyazı temelli 7.281 cümlelik (8 sezon, 146 bölüm) House M.D. diyalog veri seti üzerinde 6 farklı NLP görevi (Niyet, Duygu, Alaycılık, Teşhis Aşaması, Konuşmacı Kimliği ve 3.000+ terimli Tıbbi NER) için Klasik ML ile Türkçe BERT'in karşılaştırılması ve çok sekmeli Gradio canlı demosu.",
      en: "Six-task Turkish NLP pipeline built on a 7,281-sentence (8 seasons, 146 episodes) House M.D. dialogue dataset, systematically comparing Classical ML (TF-IDF + LogReg/SVM/RF) against Turkish BERT across Intent, Emotion, Sarcasm, Diagnosis Stage, Speaker Identity, and Medical NER (13,239 entities)."
    },
    metrics: [
      { tr: "7.281 Türkçe Cümle", en: "7,281 Turkish Sentences" },
      { tr: "+21.8% BERT Niyet Farkı", en: "+21.8% BERT Intent Gain" },
      { tr: "6 NLP Görevi + Gradio", en: "6 NLP Tasks + Gradio" }
    ],
    coverImage: "assets/img/projects/nlp-house/bert_vs_ml_accuracy.jpeg",
    gallery: [
      {
        src: "assets/img/projects/nlp-house/bert_vs_ml_accuracy.jpeg",
        caption: {
          tr: "Klasik ML vs Türkçe BERT — 5 sınıflandırma görevinde Test Doğruluğu (Accuracy) karşılaştırması",
          en: "Classical ML vs Turkish BERT — Test Accuracy comparison across all 5 classification tasks"
        }
      },
      {
        src: "assets/img/projects/nlp-house/bert_vs_ml_macro_f1.jpeg",
        caption: {
          tr: "Klasik ML vs Türkçe BERT — Test Macro-F1 karşılaştırması (sınıf dengesizliğinin etkisi)",
          en: "Classical ML vs Turkish BERT — Test Macro-F1 comparison (effect of class imbalance)"
        }
      },
      {
        src: "assets/img/projects/nlp-house/most_frequent_speakers.jpeg",
        caption: {
          tr: "8 sezon / 146 bölümlük veri setinde en sık konuşan karakterlerin diyalog dağılımı",
          en: "Distribution of most frequently speaking characters across 8 seasons / 146 episodes"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Veri Mühendisliği & Temizlik", en: "1. Data Engineering & Cleaning" },
        items: {
          tr: [
            "7.281 cümle · 8 sezon · 146 bölüm Türkçe diyalog",
            "Etiket konsolidasyonu: Niyet 218→9, Duygu 249→9, Konuşmacı 241→11",
            "Türkçeye duyarlı normalleştirme (İ→i), 148 stopword, JSON onarımı",
            "Sızıntı önleyici Bölüm Bazlı Tabakalı Ayrım (5.905 / 679 / 697)"
          ],
          en: [
            "7,281 sentences · 8 seasons · 146 episodes of Turkish dialogue",
            "Label cleaning: Intent 218→9, Emotion 249→9, Speaker 241→11",
            "Turkish-aware normalization (İ→i), 148 stopwords, JSON fixes",
            "Leakage-free Episode-Based Stratified Split (5,905 / 679 / 697)"
          ]
        }
      },
      {
        title: { tr: "2. Altı Görevli (6-Task) Mimari", en: "2. Six-Task NLP Architecture" },
        items: {
          tr: [
            "1. Niyet Sınıflandırma (Intent) & 2. Duygu Analizi (Emotion)",
            "3. Alaycılık Tespiti (Sarcasm) & 4. Teşhis Aşaması (Diagnosis Stage)",
            "5. Konuşmacı Kimliği (Speaker) & 6. Tıbbi NER (3.000+ terim, 13.239 varlık)"
          ],
          en: [
            "1. Intent Classification & 2. Emotion Recognition",
            "3. Sarcasm Detection & 4. Medical Diagnosis Stage",
            "5. Speaker Identity & 6. Medical NER (3,000+ terms, 13,239 entities)"
          ]
        }
      },
      {
        title: { tr: "3. Modeller & Canlı Gradio Demo", en: "3. Models & Live Gradio Demo" },
        items: {
          tr: [
            "Klasik ML: TF-IDF + Lojistik Regresyon / SVM / Random Forest",
            "Transformer: Türkçe BERT (dbmdz/bert-turkish)",
            "TF-IDF tabanlı retrieval chatbot ve çok sekmeli Gradio arayüzü"
          ],
          en: [
            "Classical ML: TF-IDF + Logistic Regression / SVM / Random Forest",
            "Transformer: Turkish BERT (dbmdz/bert-turkish)",
            "TF-IDF retrieval chatbot & multi-tab interactive Gradio demo"
          ]
        }
      }
    ],
    specsTable: {
      headers: {
        tr: ["NLP Görevi (Task)", "Klasik ML (Accuracy)", "Türkçe BERT (Accuracy)", "Fark (Δ Kazanım)"],
        en: ["NLP Task", "Classical ML (Accuracy)", "Turkish BERT (Accuracy)", "Difference (Δ Gain)"]
      },
      rows: {
        tr: [
          ["Niyet Sınıflandırma (Intent)", "0,386", "0,604", "+0,218 (+21,8 Puan)"],
          ["Duygu Analizi (Emotion)", "0,405", "0,601", "+0,196 (+19,6 Puan)"],
          ["Konuşmacı Kimliği (Speaker)", "0,235", "0,395", "+0,160 (+16,0 Puan)"],
          ["Teşhis Aşaması (Diagnosis Stage)", "0,288", "0,382", "+0,094 (+9,4 Puan)"],
          ["Alaycılık Tespiti (Sarcasm)", "0,912", "0,953", "+0,041 (+4,1 Puan)"]
        ],
        en: [
          ["Intent Classification", "0.386", "0.604", "+0.218 (+21.8 pts)"],
          ["Emotion Recognition", "0.405", "0.601", "+0.196 (+19.6 pts)"],
          ["Speaker Identity", "0.235", "0.395", "+0.160 (+16.0 pts)"],
          ["Diagnosis Stage", "0.288", "0.382", "+0.094 (+9.4 pts)"],
          ["Sarcasm Detection", "0.912", "0.953", "+0.041 (+4.1 pts)"]
        ]
      }
    },
    myContribution: {
      tr: "Veri toplama, gürültülü etiketlerin temizlenmesi (200+ etiketten ana sınıflara indirgeme), Türkçeye duyarlı ön işleme ve bölüm bazlı sızıntısız (leakage-free) veri bölme sürecini üstlendim; ayrıca Türkçe BERT (`dbmdz/bert-turkish`) ile model eğitimlerini gerçekleştirdim. Ek olarak TF-IDF tabanlı bir retrieval chatbot'u ve Gradio ile çok sekmeli canlı demo geliştirdim.",
      en: "Led data collection, noisy label consolidation (reducing 200+ raw labels into clean canonical classes), Turkish-aware preprocessing, and episode-based leakage-free splitting; carried out Turkish BERT (`dbmdz/bert-turkish`) fine-tuning across all tasks, and built a TF-IDF retrieval chatbot with a multi-tab Gradio live demo."
    },
    details: {
      tr: [
        "Türkçe BERT (`dbmdz/bert-turkish`), beş sınıflandırma görevinin tamamında doğrulukta (accuracy) klasik makine öğrenmesi modellerini geride bıraktı.",
        "Zengin morfolojik bağlam gerektiren Niyet (+21,8 puan), Duygu (+19,6 puan) ve Konuşmacı Kimliği (+16,0 puan) görevlerinde Transformer üstünlüğü net biçimde kanıtlandı.",
        "3.000'den fazla tıbbi terim içeren sözlükle veri seti genelinde toplam 13.239 Tıbbi Varlık (Medical NER) etiketlendi."
      ],
      en: [
        "Turkish BERT (`dbmdz/bert-turkish`) outperformed classical machine learning across all five classification tasks in test accuracy.",
        "Transformer superiority was most pronounced in tasks requiring rich Turkish morphological context: Intent (+21.8 pts), Emotion (+19.6 pts), and Speaker Identity (+16.0 pts).",
        "Extracted 13,239 medical named entities across the corpus using a curated dictionary of 3,000+ Turkish medical terms."
      ]
    },
    challenges: {
      tr: [
        "Bölüm İçi Diyalog Benzerliğinden Kaynaklı Veri Sızıntısı (Data Leakage) Riski → Rastgele cümle bölme yerine Bölüm Bazlı Tabakalı Ayrım (Episode-Based Stratified Split: 5.905 eğitim / 679 doğrulama / 697 test) uygulandı.",
        "Aşırı Gürültülü Ham Etiketler ve Türkçe Büyük/Küçük Harf ('İ/i') Sorunu → Standart `lower()` yerine Türkçeye duyarlı karakter normalleştirmesi yazıldı ve 218 niyet etiketi 9 ana sınıfa konsolide edildi."
      ],
      en: [
        "Data Leakage Risk from Intra-Episode Dialogue Context → Prevented context leakage by implementing an Episode-Based Stratified Split (5,905 train / 679 val / 697 test) instead of random sentence splitting.",
        "Severe Label Noise & Turkish 'İ/i' Casing Pitfalls → Implemented Turkish-aware character normalization and consolidated 218 raw intent labels into 9 canonical classes."
      ]
    },
    tags: ["Turkish BERT", "dbmdz/bert-turkish", "Transformers", "TF-IDF", "Medical NER", "Gradio", "Python", "NLP"]
  },

  /* ------------------------------------------------------------------------
     PROJECT 08: THE NARRATOR'S GAME (UNITY · RE:ZERO STUDIO)
     ------------------------------------------------------------------------ */
  {
    id: 8,
    code: "PRJ-08 // GAME-AI",
    domain: "nlp-game",
    pdfPage: 19,
    category: {
      tr: "Unity & C# · Re:Zero Studio",
      en: "Unity & C# · Re:Zero Studio"
    },
    title: {
      tr: "The Narrator's Game — 3B Hikâye ve Oyun Yapay Zekâsı",
      en: "The Narrator's Game — 3D Story & Game AI"
    },
    summary: {
      tr: "Unity ile geliştirilen; Portal ve The Stanley Parable esintileri taşıyan, gerilim, komedi ve parkur öğelerini birleştiren anlatıcı odaklı 3B kaçış oyunu.",
      en: "Narrator-driven 3D story, suspense, comedy, and parkour game developed in Unity (with echoes of Portal and The Stanley Parable), where an amnesiac protagonist escapes an experimental facility."
    },
    metrics: [
      { tr: "Unity 3B & C#", en: "Unity 3D & C#" },
      { tr: "Davranışsal Oyun AI", en: "Behavioral Game AI" },
      { tr: "Re:Zero Studio", en: "Re:Zero Studio" }
    ],
    coverImage: "assets/img/projects/narrator-game/narrator_game_poster.jpeg",
    gallery: [
      {
        src: "assets/img/projects/narrator-game/narrator_game_poster.jpeg",
        caption: {
          tr: "The Narrator's Game resmi tanıtım afişi — Re:Zero Studio (Kronos Enjektörü & Sıçrayış Serumu)",
          en: "The Narrator's Game promotional poster — Re:Zero Studio (Kronos Injector & Leap Serum)"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Oyun Yapay Zekâsı & 3B Modelleme", en: "1. Game AI & 3D Modeling" },
        items: {
          tr: [
            "2. Bölümdeki korkunç canavarların 3B modellenmesi",
            "Canavarların algılama, takip ve saldırı davranış AI sistemleri"
          ],
          en: [
            "3D modeling of terrifying Chapter 2 monsters",
            "Monster perception, pursuit, and behavioral AI state machines"
          ]
        }
      },
      {
        title: { tr: "2. Karakter & Yetenek Mekanikleri (C#)", en: "2. Character & Ability Mechanics" },
        items: {
          tr: [
            "Parkur odaklı akıcı 3B karakter hareket kontrolcüsü",
            "Kronos Enjektörü (zaman manipülasyonu) ve Sıçrayış Serumu mekanikleri"
          ],
          en: [
            "Parkour-oriented 3D character movement controller in C#",
            "Special serum mechanics: Kronos Injector & Leap Serum"
          ]
        }
      },
      {
        title: { tr: "3. Web Platformu & Pazarlama", en: "3. Web Presence & Marketing" },
        items: {
          tr: [
            "Oyunun resmi tanıtım web sitesinin geliştirilmesi",
            "Re:Zero Studio bünyesinde dijital pazarlama çalışmaları"
          ],
          en: [
            "Designed and built the game's promotional website",
            "Led digital marketing and presentation under Re:Zero Studio"
          ]
        }
      }
    ],
    myContribution: {
      tr: "2. bölümdeki korkunç canavarların 3B modellenmesi ve yapay zekâ (davranış) sistemlerinin geliştirilmesi, karakter hareketlerinin ve özel tüplerle kazanılan yeteneklerin (Kronos Enjektörü, Sıçrayış Serumu) C# ile kodlanması ve oyunun tanıtım web sitesi ile pazarlama çalışmalarının yürütülmesini üstlendim.",
      en: "Modeled the Chapter 2 monsters in 3D and programmed their behavioral AI systems; coded the core 3D character parkour movement and special tube abilities (Kronos Injector, Leap Serum) in C#; built the game's promotional website and handled marketing."
    },
    details: {
      tr: [
        "Hafızasını kaybetmiş ana karakterin üzerinde deneyler yapılan bir tesisten kaçmaya çalıştığı, anlatıcının (Narrator) oyuncuyu dinamik olarak yönlendirdiği/kandırdığı hikâye yapısı.",
        "Özel yetenek tüpleri (Kronos Enjektörü ve Sıçrayış Serumu) ile fizik ve zaman tabanlı parkur bulmacaları.",
        "Bölüm 2 düşman yapay zekâları için durum makinesi (State Machine) tabanlı devriye, kovalama ve etkileşim sistemleri."
      ],
      en: [
        "Narrator-driven gameplay loop inspired by Portal and The Stanley Parable where an amnesiac test subject escapes an experimental facility.",
        "Physics and time-manipulation parkour mechanics powered by special ability tubes (Kronos Injector and Leap Serum).",
        "Finite-state-machine (FSM) enemy AI controlling patrol, sensory detection, and pursuit behaviors in Chapter 2."
      ]
    },
    challenges: {
      tr: [
        "Yetenek Tüpleriyle Değişen Fizik Kurallarının Akıcılığı → Kronos Enjektörü ve Sıçrayış Serumu aktifken karakter ivmelenmesi ve çarpışma fiziğinin bozulmaması için C# üzerinde modüler bir durum/fizik yöneticisi yazıldı."
      ],
      en: [
        "Maintaining Fluid Parkour Physics During Ability Activation → Engineered a modular C# movement and physics modifier controller so Kronos Injector and Leap Serum transitions feel responsive without breaking collision bounds."
      ]
    },
    tags: ["Unity", "C#", "Game AI", "3D Modeling", "Character Mechanics", "Web & Marketing", "Re:Zero Studio"]
  }
];

/* ==========================================================================
   7. ENGINEERING MILESTONES, COMPETITIONS & ACADEMIC TIMELINE
   ========================================================================== */

/**
 * Chronological milestones highlighting competitions, grants, patent, and degree.
 */
const TIMELINE = [
  {
    period: "2024 – 2026",
    tag: { tr: "Teknofest İleri Kategori · Türkiye 4.'lüğü", en: "Teknofest Advanced Category · 4th Place" },
    title: {
      tr: "Auvtech İnsansız Sualtı Aracı (AUV) — Otonomi & Görüntü İşleme",
      en: "Auvtech Unmanned Underwater Vehicle (AUV) — Autonomy & Vision"
    },
    desc: {
      tr: "Yıldız Teknik, İstanbul Sabahattin Zaim ve Haliç üniversitelerinden 15 kişilik ekiple geliştirilen 6 iticili biyomimetik sualtı aracı. 2024 Kritik Tasarım Raporu (KTR) aşamasında Türkiye 4.'lüğü elde edildi; 2026 İleri Kategori için kapalı çevrim GNC ve YOLO tabanlı sualtı algılama sistemleri geliştiriliyor.",
      en: "6-thruster biomimetic AUV developed with a 15-member inter-university team (YTU, IZU, Halic Univ.). Placed 4th nationally at the 2024 Critical Design Report stage; advancing closed-loop subsea GNC and YOLO perception for 2026."
    }
  },
  {
    period: "2025 – 2026",
    tag: { tr: "Bitirme Projesi · 2× BAP-100 Araştırma Fonu", en: "Capstone Project · 2× BAP-100 Grants" },
    title: {
      tr: "Otonom İHA: GNSS Olmayan Ortamlarda 3B Haritalama ve Hibrit SLAM",
      en: "Autonomous UAV: GNSS-Denied 3D Mapping & Hybrid SLAM"
    },
    desc: {
      tr: "ROS 2, Pixhawk 6X, Raspberry Pi 5 + AI HAT, Unitree L1 4B LiDAR ve 22 cm stereo kamera füzyonuyla gerçek zamanlı Fast-LIO2 + çevrimdışı RTAB-Map hibrit SLAM ve A* kurtarmalı 4-fazlı Lawnmower uçuş mimarisi.",
      en: "End-to-end quadrotor combining ROS 2, Pixhawk 6X, Raspberry Pi 5 + AI HAT, Unitree L1 4D LiDAR, and a 22 cm stereo rig with Fast-LIO2 + RTAB-Map hybrid SLAM and 4-phase Lawnmower + A* flight planning."
    }
  },
  {
    period: "2024 – 2025",
    tag: { tr: "TÜBİTAK 2209-A · Proje Yürütücüsü", en: "TÜBİTAK 2209-A · Principal Investigator" },
    title: {
      tr: "Seviye 4 Otonom Kargo Dağıtım Aracının ROS & Gazebo Simülasyonu",
      en: "SAE Level 4 Autonomous Cargo Delivery Vehicle Simulation"
    },
    desc: {
      tr: "Dr. Öğr. Üyesi Zahra Elmi danışmanlığında yürütülen TÜBİTAK 2209-A projesinde kamera-LiDAR-radar füzyonu, YOLO ile trafik/yaya algılama ve trafik yoğunluğuna duyarlı dinamik rota optimizasyonu geliştirildi.",
      en: "Led the TÜBİTAK 2209-A project advised by Asst. Prof. Dr. Zahra Elmi, developing camera-LiDAR-radar fusion, YOLO traffic perception, and traffic-aware dynamic route optimization."
    }
  },
  {
    period: "2024 – 2025",
    tag: { tr: "Teknofest · Havacılıkta Yapay Zekâ", en: "Teknofest · AI in Aviation" },
    title: {
      tr: "Gerçek Zamanlı İHA Nesne Tespiti (YOLOv12n + RT-DETR) & 3B Görsel Konum",
      en: "Real-Time Aerial Object Detection (YOLOv12n + RT-DETR) & 3D Visual Pose"
    },
    desc: {
      tr: "VisDrone2019-VID üzerinde NVIDIA A100 ile kapsamlı YOLO/Transformer kıyaslaması, ağırlıklı hibrit çıkarım kodu ve GPS bağımsız güvenli düz iniş alanı tespiti.",
      en: "Comprehensive YOLO/Transformer benchmarking on VisDrone2019-VID using NVIDIA A100, weighted hybrid inference script, and GPS-independent safe landing zone detection."
    }
  },
  {
    period: "2023 – 2025",
    tag: { tr: "Teknofest & BAP-100 · Patent Başvurusu", en: "Teknofest & BAP-100 · Patent Pending" },
    title: {
      tr: "MonTech — Hipotermi Korumalı ve Güneş Enerjili Giyilebilir Akıllı Mont",
      en: "MonTech — Solar-Powered Wearable Smart Jacket for Disaster Response"
    },
    desc: {
      tr: "Teknofest İnsanlık Yararına Teknoloji Yarışması ve BAP-100 kapsamında tamamlanan, <35 °C'de otomatik ısıtma ve acil durum Bluetooth/GPS konum paylaşımı yapan giyilebilir sistem; patent başvurusu yapıldı.",
      en: "Completed under Teknofest Technology for Humanity and BAP-100; features <35 °C autonomous heating pad activation, 12 flexible solar panels, and emergency GPS tracking. Patent application filed."
    }
  },
  {
    period: "Mezuniyet",
    tag: { tr: "Bilgisayar Mühendisliği (B.Sc.)", en: "B.Sc. in Computer Engineering" },
    title: {
      tr: "İstanbul Sabahattin Zaim Üniversitesi — Bilgisayar Mühendisliği",
      en: "İstanbul Sabahattin Zaim University — Computer Engineering"
    },
    desc: {
      tr: "Robotik, otonom sistemler, derin öğrenme, bilgisayarlı görü, Türkçe doğal dil işleme ve gömülü sistemler odaklı mühendislik eğitimi ve 8 uçtan uca teknik proje.",
      en: "Computer engineering education focused on robotics, autonomous systems, deep learning, computer vision, Turkish NLP, and embedded systems across 8 technical projects."
    }
  }
];
