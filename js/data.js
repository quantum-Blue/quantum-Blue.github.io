/**
 * ============================================================================
 * @fileoverview Comprehensive Bilingual (TR/EN) Engineering Portfolio Data Layer
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @version      7.0.0 (Phase 7 - Senior Corporate Refinement & Zero-Emoji Clean Data)
 * @description  Single Source of Truth (SSOT) data store powering the portfolio.
 *               Synchronizes 100% of the technical depth, metrics, system
 *               architecture diagrams, benchmark tables, hardware specifications,
 *               PDF deep-links (#page=X), and 29 extracted high-resolution assets
 *               from the 20-page TR and EN Technical Portfolio PDFs.
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. PERSONAL PROFILE, ASSETS & CONTACT METADATA
   ========================================================================== */

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
   2. BILINGUAL UI LOCALIZATION DICTIONARY (TR / EN) — ZERO EMOJI, SENIOR COPY
   ========================================================================== */

const UI_TEXT = {
  tr: {
    // Navigation
    nav_role_tag: "Robotik & Otonom Sistemler",
    nav_about: "Hakkımda",
    nav_architecture: "Sistem Mimarisi",
    nav_projects: "Projeler",
    nav_skills: "Yetkinlikler",
    nav_timeline: "Deneyim",
    nav_contact: "İletişim",

    // Hero Section
    hero_status: "Otonom Sistemler, Robotik ve Savunma Teknolojileri Fırsatlarına Açık",
    hero_role: "TEKNİK PORTFOLYO",
    hero_domains: "Robotik · Otonom Sistemler · Yapay Zekâ · Gömülü Sistemler",
    hero_desc:
      "Otonom hava, kara ve sualtı araçları için SLAM, sensör füzyonu, bilgisayarlı görü ve derin öğrenme sistemlerini simülasyondan fiziksel donanıma uçtan uca geliştiriyorum.",
    triad_air: "Hava (İHA): 4B LiDAR + Stereo SLAM",
    triad_sea: "Sualtı (AUV): 6-İticili Biyomimetik GNC",
    triad_ground: "Kara (UGV): Seviye 4 Otonom Sürüş",
    btn_explore_projects: "Projeleri İncele",
    btn_pdf_tr: "Portfolyo (TR — PDF)",
    btn_pdf_en: "Portfolio (EN — PDF)",
    portrait_badge: "ROS 2 · PX4 · Edge AI",

    // About Section (PDF Page 2)
    about_kicker: "HAKKIMDA",
    about_title: "Robotik ve Otonom Sistemler Mühendisi",
    about_heading: "Simülasyondan Fiziksel Donanıma Uçtan Uca Sistem Mühendisliği",
    about_p1:
      "Robotik, otonom sistemler ve yapay zekâ alanlarına odaklanan yeni mezun bir bilgisayar mühendisiyim. Teknofest yarışmaları ve TÜBİTAK projelerindeki deneyimimle; insansız hava ve sualtı araçları, SLAM, sensör füzyonu ve bilgisayarlı görü üzerine uçtan uca sistemler geliştiriyorum.",
    about_p2:
      "Projelerimi simülasyondan (Gazebo / PX4 / ROS 2) fiziksel donanıma (Pixhawk 6X, Raspberry Pi 5 + AI HAT, 4B LiDAR, stereo kamera ve sualtı itki sistemleri) taşıyabiliyor, derin öğrenme ile gömülü sistemleri bir arada kullanabiliyorum.",

    // Interactive System Architecture Explorer
    explorer_kicker: "MÜHENDİSLİK MİMARİSİ",
    explorer_title: "Operasyon Alanlarına Göre Otonomi Mimarisi",
    explorer_sub:
      "Hava, Sualtı ve Kara platformlarında kurduğum Sensör, Füzyon/SLAM, Planlama/Kontrol ve Görev Çıktısı katmanlarını incelemek için bir platform seçin.",

    // Projects Section
    projects_kicker: "SEÇİLİ PROJELER",
    projects_title: "Teknik Projeler ve Vaka Analizleri",
    projects_sub:
      "Sistem mimarisi şemalarını, kantitatif metrikleri, projedeki katkılarımı ve teknik çıktıları incelemek için bir projeye tıklayın.",
    filter_all: "Tümü",
    filter_robotics: "Robotik ve Otonomi",
    filter_cv: "Bilgisayarlı Görü ve AI",
    filter_embedded: "Gömülü Sistemler",
    filter_nlp_game: "Türkçe NLP ve Oyun AI",
    card_inspect: "İncele →",

    // Skills Section (PDF Page 3)
    skills_kicker: "YETENEKLER",
    skills_title: "Teknik Yetkinlikler",
    skills_sub:
      "Otonom navigasyon, SLAM, bilgisayarlı görü, gömülü donanım ve yazılım geliştirme alanlarında kullandığım teknolojiler.",

    // Timeline Section
    timeline_kicker: "DENEYİM VE ARAŞTIRMA",
    timeline_title: "Yarışmalar, Projeler ve Akademik Yolculuk",
    timeline_sub:
      "TÜBİTAK 2209-A, Teknofest, BAP-100 araştırma projeleri ve patent başvurusuyla desteklenen mühendislik çalışmalarım.",

    // Contact Section (PDF Page 20)
    contact_kicker: "İLETİŞİM",
    contact_title: "Birlikte çalışalım",
    contact_desc:
      "Otonom sistemler, robotik ve savunma teknolojileri alanındaki fırsatlara açığım.",
    contact_email_label: "E-Posta (Kopyalamak için tıklayın)",
    contact_phone_label: "Telefon",
    contact_github_label: "GitHub",
    contact_linkedin_label: "LinkedIn",
    btn_send_email: "E-Posta Gönder",
    toast_copied: "Panoya kopyalandı: ",

    // Modal Dialog
    modal_gallery_title: "Proje Görselleri ve Teknik Çıktılar",
    modal_arch_title: "Sistem Mimarisi ve Operasyon Akışı",
    modal_contrib_title: "Benim Katkım",
    modal_details_title: "Teknik Detaylar ve Uygulama",
    modal_challenges_title: "Karşılaşılan Sorunlar ve Çözümler",
    modal_table_title: "Sistem Elemanları ve Karşılaştırma Tablosu",
    modal_pdf_btn: "PDF Portfolyoda Görüntüle",
    modal_prev_btn: "← Önceki",
    modal_next_btn: "Sonraki →"
  },

  en: {
    // Navigation
    nav_role_tag: "Robotics & Autonomous Systems",
    nav_about: "About",
    nav_architecture: "Architecture",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_timeline: "Experience",
    nav_contact: "Contact",

    // Hero Section
    hero_status: "Open to Opportunities in Autonomous Systems, Robotics & Defense Technologies",
    hero_role: "TECHNICAL PORTFOLIO",
    hero_domains: "Robotics · Autonomous Systems · Artificial Intelligence · Embedded Systems",
    hero_desc:
      "Developing end-to-end SLAM, sensor fusion, computer vision, and deep learning systems for autonomous aerial, ground, and underwater vehicles—from simulation to physical hardware.",
    triad_air: "Air (UAV): 4D LiDAR + Stereo SLAM",
    triad_sea: "Sea (AUV): 6-Thruster Biomimetic GNC",
    triad_ground: "Ground (UGV): Level 4 Autonomous Driving",
    btn_explore_projects: "Explore Projects",
    btn_pdf_tr: "Portfolio (TR — PDF)",
    btn_pdf_en: "Portfolio (EN — PDF)",
    portrait_badge: "ROS 2 · PX4 · Edge AI",

    // About Section (PDF Page 2)
    about_kicker: "ABOUT ME",
    about_title: "Robotics and Autonomous Systems Engineer",
    about_heading: "End-to-End Systems Engineering from Simulation to Physical Hardware",
    about_p1:
      "I am a recent computer engineering graduate focused on robotics, autonomous systems, and artificial intelligence. Through my experience in Teknofest competitions and TÜBİTAK projects, I develop end-to-end systems for unmanned aerial and underwater vehicles, SLAM, sensor fusion, and computer vision.",
    about_p2:
      "I take my projects from simulation (Gazebo / PX4 / ROS 2) to physical hardware (Pixhawk 6X, Raspberry Pi 5 + AI HAT, 4D LiDAR, custom stereo rigs, and underwater thrusters), combining deep learning with embedded systems.",

    // Interactive System Architecture Explorer
    explorer_kicker: "SYSTEM ARCHITECTURE",
    explorer_title: "Autonomy Pipeline Across Operational Domains",
    explorer_sub:
      "Select an operational domain (Air, Sea, or Ground) to inspect the Sensors, Fusion/SLAM, Planning/Control, and Mission Output layers.",

    // Projects Section
    projects_kicker: "SELECTED PROJECTS",
    projects_title: "Technical Projects & Case Studies",
    projects_sub:
      "Click any project card to inspect system architecture diagrams, quantitative metrics, my contributions, and high-resolution technical outputs.",
    filter_all: "All Projects",
    filter_robotics: "Robotics & Autonomy",
    filter_cv: "Computer Vision & AI",
    filter_embedded: "Embedded Systems",
    filter_nlp_game: "Turkish NLP & Game AI",
    card_inspect: "View Details →",

    // Skills Section (PDF Page 3)
    skills_kicker: "SKILLS",
    skills_title: "Technical Competencies",
    skills_sub:
      "Core engineering frameworks, hardware platforms, and algorithms across autonomous navigation, SLAM, computer vision, and deep learning.",

    // Timeline Section
    timeline_kicker: "EXPERIENCE & RESEARCH",
    timeline_title: "Competitions, Grants & Academic Journey",
    timeline_sub:
      "Engineering milestones backed by TÜBİTAK 2209-A, Teknofest, BAP-100 research grants, and a patent application.",

    // Contact Section (PDF Page 20)
    contact_kicker: "CONTACT",
    contact_title: "Let's work together",
    contact_desc:
      "I am open to opportunities in autonomous systems, robotics, and defense technologies.",
    contact_email_label: "Email (Click to copy)",
    contact_phone_label: "Phone",
    contact_github_label: "GitHub",
    contact_linkedin_label: "LinkedIn",
    btn_send_email: "Send Email",
    toast_copied: "Copied to clipboard: ",

    // Modal Dialog
    modal_gallery_title: "Project Visuals & Technical Outputs",
    modal_arch_title: "System Architecture & Operational Flow",
    modal_contrib_title: "My Contribution",
    modal_details_title: "Technical Details & Implementation",
    modal_challenges_title: "Problems Encountered & Solutions",
    modal_table_title: "System Elements & Benchmark Comparison",
    modal_pdf_btn: "View in PDF Portfolio",
    modal_prev_btn: "← Previous",
    modal_next_btn: "Next →"
  }
};

/* ==========================================================================
   3. HERO KPI STATISTICS CARDS (PDF PAGE 2)
   ========================================================================== */

const HERO_STATS = [
  {
    value: "8",
    label: { tr: "Teknik Proje", en: "Technical Projects" },
    sub: { tr: "İHA, AUV, UGV, Bilgisayarlı Görü, Gömülü, NLP", en: "UAV, AUV, UGV, Computer Vision, Embedded, NLP" }
  },
  {
    value: "4+",
    label: { tr: "Yarışma ve Araştırma", en: "Competitions & Research" },
    sub: { tr: "Teknofest, TÜBİTAK 2209-A Yürütücüsü, 2× BAP-100", en: "Teknofest, TÜBİTAK 2209-A PI, 2× BAP-100 Grants" }
  },
  {
    value: "3",
    label: { tr: "Otonom Operasyon Alanı", en: "Operational Domains" },
    sub: { tr: "Hava (Quadrotor) · Sualtı (AUV) · Kara (Seviye 4)", en: "Air (Quadrotor) · Sea (AUV) · Ground (Level 4)" }
  },
  {
    value: "Teknofest",
    label: { tr: "ve TÜBİTAK Projeleri", en: "and TÜBİTAK Projects" },
    sub: { tr: "Patent Başvurusu & 2024 AUV KTR Türkiye 4.'lüğü", en: "Patent Pending & 2024 AUV CDR 4th Place Nationally" }
  }
];

/* ==========================================================================
   4. INTERACTIVE "SIM-TO-REAL" SYSTEM ARCHITECTURE EXPLORER DATA
   ========================================================================== */

const OPERATION_DOMAINS = [
  {
    id: "air",
    tabLabel: { tr: "01 · Hava (Otonom İHA)", en: "01 · Air (Autonomous UAV)" },
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
        step: "KATMAN 01 · SENSÖRLER",
        title: { tr: "Sensör ve Donanım Katmanı", en: "Sensors & Hardware Layer" },
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
        step: "KATMAN 02 · FÜZYON & SLAM",
        title: { tr: "Füzyon ve Hibrit SLAM", en: "Sensor Fusion & Hybrid SLAM" },
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
        step: "KATMAN 03 · PLANLAMA",
        title: { tr: "4-Fazlı Uçuş ve Yol Planlama", en: "4-Phase Flight & Path Planning" },
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
        step: "KATMAN 04 · ÇIKTILAR",
        title: { tr: "Çıktılar ve Hava Görüsü", en: "Mission Outputs & Aerial AI" },
        items: {
          tr: [
            "Yüksekliğe göre renklendirilmiş 3B Nokta Bulutu ve 3B Mesh (Kampüs Camisi)",
            "PCA izdüşümüyle eşzamanlı 3B ve 2B SLAM & 6-DoF Konum",
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
    tabLabel: { tr: "02 · Sualtı (Biyomimetik AUV)", en: "02 · Sea (Biomimetic AUV)" },
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
        step: "KATMAN 01 · BİYOMİMETİK TASARIM",
        title: { tr: "Mekanik ve Sensör Donanımı", en: "Biomimetic Hardware & Sensors" },
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
        step: "KATMAN 02 · SUALTI GÖRÜSÜ",
        title: { tr: "Sualtı Görüntü İyileştirme ve Algılama", en: "Underwater Vision & Enhancement" },
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
        step: "KATMAN 03 · GÜDÜM VE KONTROL",
        title: { tr: "Güdüm, Navigasyon ve Kontrol (GNC)", en: "Guidance, Navigation & Control" },
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
        step: "KATMAN 04 · GÖREV İCRASI",
        title: { tr: "Görev Aşamaları ve Yer İstasyonu", en: "Mission Stages & Ground Station" },
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
    tabLabel: { tr: "03 · Kara (Seviye 4 Otonom Kargo)", en: "03 · Ground (Level 4 Cargo UGV)" },
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
        step: "KATMAN 01 · KENTSEL SENSÖRLER",
        title: { tr: "Çoklu Sensör ve Simülasyon", en: "Multi-Sensor Suite & Simulation" },
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
        step: "KATMAN 02 · TRAFİK ALGILAMA",
        title: { tr: "Trafik ve Çevre Algılama", en: "Urban Traffic Perception" },
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
        step: "KATMAN 03 · ROTA OPTİMİZASYONU",
        title: { tr: "Dinamik Rota ve Engelden Kaçınma", en: "Dynamic Routing & Avoidance" },
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
        step: "KATMAN 04 · GÜVENLİ TESLİMAT",
        title: { tr: "Güvenli ve Şifreli Teslimat", en: "Encrypted Last-Mile Delivery" },
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
   5. TECHNICAL COMPETENCIES MATRIX (ALL 6 CATEGORIES FROM PDF PAGE 3 — SVG KEYS)
   ========================================================================== */

const SKILLS = [
  {
    iconKey: "ai",
    title: { tr: "Yapay Zekâ ve ML", en: "AI and ML" },
    summary: {
      tr: "Derin Öğrenme, Yapay Sinir Ağları, PyTorch, TensorFlow/Keras, Transfer Öğrenme",
      en: "Deep Learning, Artificial Neural Networks, PyTorch, TensorFlow/Keras, Transfer Learning"
    },
    items: "Deep Learning, Artificial Neural Networks, PyTorch, TensorFlow/Keras, Transfer Learning",
    badges: ["PyTorch", "TensorFlow / Keras", "Deep Learning", "ANN", "Transfer Learning"]
  },
  {
    iconKey: "vision",
    title: { tr: "Bilgisayarlı Görü", en: "Computer Vision" },
    summary: {
      tr: "YOLO v5–v12, YOLO-Seg, RT-DETR, Örnek Bölütleme, OpenCV, ViT",
      en: "YOLO v5–v12, YOLO-Seg, RT-DETR, Instance Segmentation, OpenCV, ViT"
    },
    items: "YOLO v5–v12, YOLO-Seg, RT-DETR, Instance Segmentation, OpenCV, ViT",
    badges: ["YOLOv5–v12", "YOLOv11m-Seg", "RT-DETR", "Instance Segmentation", "OpenCV", "ViT"]
  },
  {
    iconKey: "robotics",
    title: { tr: "Robotik ve Otonomi", en: "Robotics and Autonomy" },
    summary: {
      tr: "ROS/ROS 2, PX4, Pixhawk, Cube Orange, Nav2, Gazebo, A*, Yol Planlama",
      en: "ROS/ROS 2, PX4, Pixhawk, Cube Orange, Nav2, Gazebo, A*, Path Planning"
    },
    items: "ROS/ROS 2, PX4, Pixhawk 6X, Cube Orange, Nav2, Gazebo, A*, Path Planning",
    badges: ["ROS / ROS 2", "PX4", "Pixhawk 6X", "Cube Orange", "Nav2", "Gazebo", "A* Path Planning"]
  },
  {
    iconKey: "slam",
    title: { tr: "SLAM ve Konumlandırma", en: "SLAM and Localization" },
    summary: {
      tr: "RTAB-Map, Fast-LIO2, LIO-SAM, Kalman Filtresi, LiDAR, Nokta Bulutu",
      en: "RTAB-Map, Fast-LIO2, LIO-SAM, Kalman Filter, LiDAR, Point Cloud"
    },
    items: "RTAB-Map, Fast-LIO2, LIO-SAM, Kalman Filter, 4D LiDAR, Point Cloud, Sensor Fusion",
    badges: ["Fast-LIO2", "RTAB-Map", "LIO-SAM", "Kalman Filter", "4D LiDAR", "Point Cloud"]
  },
  {
    iconKey: "embedded",
    title: { tr: "Gömülü Sistemler ve Donanım", en: "Embedded Systems and Hardware" },
    summary: {
      tr: "STM32, Arduino, Raspberry Pi, Uç Yapay Zekâ, IMU/Barometre, Fusion 360",
      en: "STM32, Arduino, Raspberry Pi, Edge AI, IMU/Barometer, Fusion 360"
    },
    items: "STM32, Arduino, Raspberry Pi 5 + AI HAT, Edge AI, IMU/Barometer, Fusion 360",
    badges: ["STM32", "Raspberry Pi 5 + AI HAT", "Arduino", "Edge AI", "IMU / Barometer", "Fusion 360"]
  },
  {
    iconKey: "software",
    title: { tr: "Yazılım ve NLP", en: "Software and NLP" },
    summary: {
      tr: "Python, C/C++, Java, SQL, BERT, Transformers, Gradio, Git, Linux, Unity/C#",
      en: "Python, C/C++, Java, SQL, BERT, Transformers, Gradio, Git, Linux, Unity/C#"
    },
    items: "Python, C/C++, Java, SQL, BERT, Transformers, Gradio, Git, Linux, Unity/C#",
    badges: ["Python", "C / C++", "Java", "SQL", "Turkish BERT", "Transformers", "Gradio", "Git / Linux", "Unity / C#"]
  }
];

/* ==========================================================================
   6. ENGINEERING CASE STUDIES (ALL 8 PROJECTS WITH FULL PDF DATA & GALLERIES)
   ========================================================================== */

const PROJECTS = [
  {
    id: 1,
    code: "01",
    domain: "robotics",
    pdfPage: 5,
    category: {
      tr: "Bitirme Projesi · 2× BAP-100",
      en: "Capstone Project · 2× BAP-100"
    },
    title: {
      tr: "Otonom İHA: 3B Haritalama, Bölütleme ve Konumlandırma",
      en: "Autonomous UAV: 3D Mapping, Segmentation and Localization"
    },
    summary: {
      tr: "GNSS sinyalinin olmadığı dış ortamlarda LiDAR ve stereo görüntü verisini birleştirerek gerçek zamanlı 3B haritalama, yüksek hassasiyetli konumlandırma ve nesne bölütlemesi yapan ROS 2 tabanlı uçtan uca otonom quadrotor İHA.",
      en: "End-to-end ROS 2 autonomous quadrotor UAV performing real-time 3D mapping, high-precision localization, and AI object segmentation in GNSS-denied outdoor environments by fusing LiDAR and stereo image data."
    },
    metrics: [
      { tr: "6.46 m Şerit Örtüşmesi", en: "6.46 m Strip Overlap" },
      { tr: "Fast-LIO2 + RTAB-Map", en: "Fast-LIO2 + RTAB-Map" },
      { tr: "22 cm / 40° Stereo", en: "22 cm / 40° Stereo" }
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
          tr: "Kampüsün Gazebo dijital ikizi",
          en: "Gazebo digital twin of the campus"
        }
      },
      {
        src: "assets/img/projects/uav/phase1_point_cloud.jpeg",
        caption: {
          tr: "Faz 1 nokta bulutu çıktısı",
          en: "Phase 1 point cloud output"
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
          tr: "6S-4P Li-Ion batarya paketi + BMS",
          en: "6S-4P Li-Ion battery pack + BMS"
        }
      },
      {
        src: "assets/img/projects/uav/stereo_camera_22cm.jpeg",
        caption: {
          tr: "22 cm bazlı stereo kamera düzeneği",
          en: "Stereo camera setup with 22 cm baseline"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Sensörler", en: "1. Sensors" },
        items: {
          tr: [
            "LiDAR (Unitree L1 · 4B, 13° eğimli aparat)",
            "Stereo Kamera ×2 (22 cm baz, 40° eğim)",
            "IMU & Barometre (Pixhawk 6X)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS"
          ],
          en: [
            "LiDAR (Unitree L1 · 4D, 13° tilted mount)",
            "Stereo Camera ×2 (22 cm baseline, 40° tilt)",
            "IMU & Barometer (Pixhawk 6X)",
            "Raspberry Pi 5 + AI HAT & 6S-4P Li-Ion BMS"
          ]
        }
      },
      {
        title: { tr: "2. Füzyon ve SLAM", en: "2. Fusion and SLAM" },
        items: {
          tr: [
            "Kalman Filtresi & Donanım External FPS Sync",
            "Fast-LIO2 (Gerçek Zamanlı Frontend)",
            "RTAB-Map (Çevrimdışı Backend & Loop Closure)",
            "Dinamik Voxel Filtresi (20 cm³, hıza duyarlı)"
          ],
          en: [
            "Kalman Filter & Hardware External FPS Sync",
            "Fast-LIO2 (Real-Time Frontend)",
            "RTAB-Map (Offline Backend & Loop Closure)",
            "Dynamic Voxel Filter (20 cm³, speed-adaptive)"
          ]
        }
      },
      {
        title: { tr: "3. 4-Fazlı Uçuş ve Çıktılar", en: "3. 4-Phase Flight & Outputs" },
        items: {
          tr: [
            "Faz 1: Lawnmower Tarama + A* Kurtarma",
            "Faz 2: Güvenli Bölge Analizi",
            "Faz 3: Bina Bazlı Haritalama",
            "Faz 4: 3B Nokta Bulutu, 3B Mesh, 6-DoF Konum"
          ],
          en: [
            "Phase 1: Lawnmower Scan + A* Recovery",
            "Phase 2: Safe Zone Analysis",
            "Phase 3: Building-Based Mapping",
            "Phase 4: 3D Point Cloud, 3D Mesh, 6-DoF Pose"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Faz 1 otonom tarama (Lawnmower) algoritmasını iyileştirdim: kapsama boşluklarını giderdim; uyarlanabilir şerit üretimini ve A* tabanlı kurtarma mekanizmasını ekledim. Ayrıca düşük derinlik hatası için kameralar arası 22 cm baz mesafesi ve 40° eğim açılarını bizzat hesapladım.",
      en: "I improved the Phase 1 autonomous scanning (Lawnmower) algorithm: I eliminated coverage gaps and added adaptive strip generation and an A*-based recovery mechanism. I also personally calculated the 22 cm camera baseline and 40° tilt for low depth error."
    },
    details: {
      tr: [
        "Simülasyondan (Gazebo/PX4) fiziksel donanıma (Pixhawk 6X, Raspberry Pi 5 + AI HAT) kadar uçtan uca geliştirildi (2× BAP-100 destekli).",
        "15 m irtifada 13,23 m yarıçaplı tarama ile şeritler arası 6,46 m örtüşme sağlandı (SLAM loop closure için kritik).",
        "Bug algoritmasından esinlenen engelden kaçınma: ön 20 m, alt 2 m algılama (5 m'de tam duruş), 20 cm ızgara çözünürlüğü, engel etrafında 4 m güvenlik payı ve 1,5 m aralıklı waypoint konturu.",
        "Karekök yavaşlamayla sarsıntısız frenleme; açık alanda 5 m/s hız; rota kaybında A* ile en yakın haritalanmamış şerit noktasına dönüş ve dinamik şerit budama.",
        "4B LiDAR ile 3B ve 2B SLAM eşzamanlı koşturuldu (PCA izdüşümüyle boyut indirgeme); uçuş verisi ROS 2 Bag olarak kaydedilip çevrimdışı optimize edildi."
      ],
      en: [
        "Developed from simulation (Gazebo/PX4) through to physical hardware (Pixhawk 6X, Raspberry Pi 5 + AI HAT), backed by 2× BAP-100 grants.",
        "Scanning with a 13.23 m radius at 15 m altitude ensures a 6.46 m overlap between strips (critical for SLAM loop closure).",
        "Obstacle avoidance inspired by the Bug algorithm: 20 m detection ahead, 2 m below (full stop at 5 m); 20 cm grid resolution; 4 m safety margin and 1.5 m waypoint contour.",
        "Smooth braking with square-root deceleration and 5 m/s speed in open areas; A* return to the nearest unmapped strip point with dynamic strip pruning.",
        "Simultaneous 3D and 2D SLAM with the 4D LiDAR (dimensionality reduction via PCA projection) and ROS 2 bag recording for iterative offline optimization."
      ]
    },
    challenges: {
      tr: [
        "Uzun Menzilde Stereo Derinlik Hatası → Stereo kameranın yalnızca 5 m ve altında devreye girdiği çift düzeyli LiDAR–Kamera sensör füzyonu uygulandı.",
        "Yüksek Hızda Nokta Bulutu Yoğunluğu → 20 cm³ tabanlı, hıza göre ızgara boyutu otomatik büyüyen Dinamik Voxel Filtresi ve donanım seviyesinde harici FPS senkronizasyonu eklendi."
      ],
      en: [
        "Long-Range Stereo Depth Error → Implemented two-level LiDAR–Camera fusion where the stereo camera is active strictly at 5 m and below.",
        "Point Cloud Density at Speed → Added a 20 cm³ Dynamic Voxel Filter whose grid size grows automatically with speed, paired with hardware-level external FPS sync."
      ]
    },
    tags: ["ROS 2", "Fast-LIO2", "RTAB-Map", "PX4", "Pixhawk 6X", "4D LiDAR", "Raspberry Pi 5 + AI HAT", "Gazebo", "Kalman"]
  },

  {
    id: 2,
    code: "02",
    domain: "robotics",
    pdfPage: 8,
    category: {
      tr: "Teknofest 2026 · İleri Kategori",
      en: "Teknofest 2026 · Advanced Category"
    },
    title: {
      tr: "İnsansız Sualtı Aracı (AUV) — Tasarım ve Otonomi",
      en: "Unmanned Underwater Vehicle (AUV) — Design & Autonomy"
    },
    summary: {
      tr: "Auvtech (Yıldız Teknik Üniversitesi öncülüğünde; İstanbul Sabahattin Zaim ve Haliç üniversitelerinden 15 kişilik ekip) çatısı altında geliştirilen; sualtı çizgi takibi, kapı/hedef tespiti ve tam otonom sualtı intikali yapan 6 iticili biyomimetik sualtı aracı.",
      en: "Fully autonomous 6-thruster biomimetic underwater vehicle developed under Auvtech (a 15-member team led by YTU with IZU and Halic universities), performing underwater line following, gate/target detection, and submerged autonomous transit."
    },
    metrics: [
      { tr: "2024 KTR Türkiye 4.'sü", en: "2024 CDR 4th Place" },
      { tr: "6-İticili Biyomimetik", en: "6-Thruster Biomimetic" },
      { tr: "Kapalı Çevrim GNC", en: "Closed-Loop Subsea GNC" }
    ],
    coverImage: "assets/img/projects/auv/auv_physical_prototype.jpeg",
    gallery: [
      {
        src: "assets/img/projects/auv/auv_physical_prototype.jpeg",
        caption: {
          tr: "Aracın önceki nesil fiziksel prototipi (algoritma testlerinde kullanıldı)",
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
          tr: "Çizgi takibi kontrol akışı",
          en: "Line-following control flow"
        }
      },
      {
        src: "assets/img/projects/auv/autonomous_transit_flow.jpeg",
        caption: {
          tr: "Otonom intikal ve navigasyon akışı",
          en: "Autonomous transit and navigation flow"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Biyomimetik Tasarım", en: "1. Biomimetic Design" },
        items: {
          tr: [
            "Kaplumbağa hareket dinamiğinden esinlenen 6 simetrik itici",
            "Boyut ve ağırlığın en aza indirilmesiyle yüksek stabilite",
            "Maksimum görüş açısı için stratejik kamera yerleşimi"
          ],
          en: [
            "Symmetric placement of 6 thrusters inspired by turtle dynamics",
            "High maneuverability and stability by minimizing size and weight",
            "Strategic positioning of camera systems for maximum FOV"
          ]
        }
      },
      {
        title: { tr: "2. Algılama ve Görüntü İşleme", en: "2. Perception & Image Processing" },
        items: {
          tr: [
            "Sualtı görüntü iyileştirme: renk dengesi, arka plan çıkarımı, parlaklık",
            "YOLO ile boru hattı görev ipucu ve dönüş/bitiş şamandıraları tespiti",
            "Kontrast şerit merkezine göre itki komutları"
          ],
          en: [
            "Underwater image enhancement: color balance, background removal, brightness",
            "YOLO object detection: pipeline mission clue and turn/finish buoys",
            "Line following thrust commands based on contrast strip center"
          ]
        }
      },
      {
        title: { tr: "3. Güdüm, Navigasyon ve Kontrol", en: "3. Guidance, Navigation & Control" },
        items: {
          tr: [
            "IMU, basınç ve LiDAR füzyonuyla dinamik rota",
            "Kapalı çevrim derinlik kontrolüyle tamamen sualtından intikal",
            "Kare geçiş alanı tanıma + 3B hizalama ve yer istasyonu IMU hata ayıklama"
          ],
          en: [
            "Dynamic route via IMU, pressure, and LiDAR sensor fusion",
            "Closed-loop depth control for fully submerged transit",
            "Square gate recognition + 3D alignment & ground station IMU debugging"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Python tabanlı sualtı görüntü iyileştirme (renk dengesi, arka plan çıkarımı, parlaklık), YOLO tabanlı görev ipucu ve şamandıra tespiti ile IMU + basınç + kamera + LiDAR sensör füzyonuna dayalı çizgi takibi ve kapalı çevrim sualtı intikal algoritmalarının geliştirilmesinde görev aldım.",
      en: "Contributed to Python underwater image enhancement (color balance, background removal, brightness), YOLO-based mission clue and buoy detection, and closed-loop line-following and submerged transit algorithms fusing IMU, pressure, camera, and LiDAR data."
    },
    details: {
      tr: [
        "2024'te Kritik Tasarım Raporu (KTR) aşamasında Türkiye dördüncülüğü elde edildi; 2026'da derece hedefleniyor.",
        "Çizgi takibi: Kontrast şeridin merkezine göre itki komutları üretilir; IMU + kamera + basınç + LiDAR ile mesafe kestirimi yapılır.",
        "Otonom intikal: IMU, basınç ve LiDAR sensör füzyonuyla şamandıra dönüşü ve bitiş noktasına tamamen sualtından dinamik rota.",
        "Kare geçiş alanı tanıma ve 3B hizalama; merkeze gelince otonom yüzeye çıkış."
      ],
      en: [
        "Placed fourth at the Critical Design Report stage in 2024; a top placement is targeted in 2026.",
        "Line following: thrust commands based on the center of the contrast strip; distance estimation with IMU + camera + pressure + LiDAR.",
        "Autonomous transit: dynamic route to the buoy turn and finish point via IMU, pressure, and LiDAR sensor fusion entirely underwater.",
        "Square gate recognition + 3D alignment; autonomous surfacing once centered."
      ]
    },
    challenges: {
      tr: [
        "Sualtı Bulanıklığı ve Renk Bozulması → YOLO nesne tespiti öncesinde renk dengesi, arka plan çıkarımı ve parlaklık ayarıyla netlik artırma katmanı uygulandı.",
        "Sualtında Konumlandırma → Dead Reckoning + Kalman filtresi ve kapalı çevrim PID basınç/derinlik kontrolüyle yüzeye çıkmadan intikal sağlandı."
      ],
      en: [
        "Underwater Turbidity & Color Distortion → Applied real-time color balance, background removal, and brightness adjustment prior to YOLO detection.",
        "Submerged Localization → Combined Dead Reckoning + Kalman filtering with closed-loop PID pressure/depth control for fully underwater transit."
      ]
    },
    tags: ["ROS 2", "Python", "C++", "YOLO", "OpenCV", "PID", "Kalman Filter", "Sensor Fusion"]
  },

  {
    id: 3,
    code: "03",
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
      tr: "Yapay zekâ ve görüntü işleme teknikleriyle, kargo paketlerini trafik kurallarına uygun ve güvenli şekilde doğru kişiye teslim eden Seviye 4 otonom bir kargo aracının ROS ve Gazebo ortamında simülasyonu.",
      en: "A simulation, in ROS and Gazebo, of a Level 4 autonomous cargo vehicle that uses artificial intelligence and image processing techniques to deliver cargo packages to the right person safely and in compliance with traffic rules."
    },
    metrics: [
      { tr: "TÜBİTAK Yürütücüsü", en: "TÜBİTAK 2209-A PI" },
      { tr: "Hedef Seviye 4 Otonomi", en: "Target Level 4 Autonomy" },
      { tr: "Kamera–LiDAR–Radar", en: "Camera–LiDAR–Radar" }
    ],
    coverImage: "assets/img/projects/cargo/urban_yolo_detection.jpeg",
    gallery: [
      {
        src: "assets/img/projects/cargo/urban_yolo_detection.jpeg",
        caption: {
          tr: "Bilgisayarlı görü ve nesne tespiti (yaya, araç, trafik öğeleri)",
          en: "Computer vision and object detection (pedestrians, vehicles, traffic elements)"
        }
      },
      {
        src: "assets/img/projects/cargo/sae_autonomy_levels.jpeg",
        caption: {
          tr: "Otonom sürüş seviyeleri — hedef Seviye 4",
          en: "Levels of driving automation — target Level 4"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Çevre Algılama", en: "1. Perception" },
        items: {
          tr: [
            "YOLO + OpenCV ile trafik işaretleri tespiti",
            "Yayalar, araçlar ve canlıların gerçek zamanlı algılanması",
            "Kamera–LiDAR–Radar sensör füzyonu"
          ],
          en: [
            "Traffic sign detection with YOLO + OpenCV",
            "Real-time detection of pedestrians, vehicles, and living beings",
            "Camera–LiDAR–Radar sensor fusion"
          ]
        }
      },
      {
        title: { tr: "2. Rota Optimizasyonu", en: "2. Route Optimization" },
        items: {
          tr: [
            "En kısa yol algoritmaları",
            "Anlık trafik yoğunluğuna göre rota optimizasyonu",
            "Kaza durumunda engelden kaçınma ve yeniden rotalama"
          ],
          en: [
            "Shortest-path algorithms",
            "Route optimization based on real-time traffic density",
            "Obstacle avoidance and rerouting in case of an accident"
          ]
        }
      },
      {
        title: { tr: "3. Şifreli Teslimat", en: "3. Encrypted Delivery" },
        items: {
          tr: [
            "Kullanıcıya özel şifreli teslimat (hazne + kod)",
            "Müşteri veri tabanı entegrasyonu",
            "Seviye 4 yüksek otomasyon standardı"
          ],
          en: [
            "User-specific encrypted delivery (compartment + code)",
            "Customer database integration",
            "SAE Level 4 high driving automation standard"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Proje yürütücüsü — Danışmanlığını Dr. Öğr. Üyesi Zahra Elmi'nin yaptığı TÜBİTAK 2209-A araştırma projesinde simülasyon ortamı, nesne tespiti ve rota planlaması süreçlerini yürüttüm.",
      en: "Principal investigator (advised by Asst. Prof. Dr. Zahra Elmi) — Led the simulation environment setup, object detection, and route planning."
    },
    details: {
      tr: [
        "YOLO + OpenCV ile trafik işaretleri, yayalar, araçlar ve canlıların gerçek zamanlı tespiti.",
        "En kısa yol algoritmaları ve anlık trafik yoğunluğuna göre dinamik rota optimizasyonu.",
        "Kamera–LiDAR–radar füzyonuyla engelden kaçınma ve kaza durumunda yeniden rotalama.",
        "Kullanıcıya özel şifreli teslimat (hazne + kod) ve müşteri veri tabanı."
      ],
      en: [
        "Detection of traffic signs, pedestrians, vehicles, and living beings with YOLO + OpenCV.",
        "Shortest-path algorithms and route optimization based on real-time traffic density.",
        "Obstacle avoidance and rerouting in case of an accident through camera–LiDAR–radar fusion.",
        "User-specific encrypted delivery (compartment + code) and a customer database."
      ]
    },
    challenges: {
      tr: [
        "Kaza ve Yoğun Trafik Durumlarında Dinamik Yeniden Rotalama → Kamera–LiDAR–radar füzyonundan gelen engel bilgisiyle en kısa yol grafının anlık güncellenmesi sağlandı."
      ],
      en: [
        "Dynamic Rerouting Under Traffic Accidents → Integrated camera–LiDAR–radar obstacle detections directly into the shortest-path graph for real-time rerouting."
      ]
    },
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV", "Path Planning", "Sensor Fusion"]
  },

  {
    id: 4,
    code: "04",
    domain: "cv-ai",
    pdfPage: 11,
    category: {
      tr: "Teknofest · Havacılıkta Yapay Zekâ",
      en: "Teknofest · AI in Aviation"
    },
    title: {
      tr: "Nesne Tespiti — Model Karşılaştırması ve Konum Kestirimi",
      en: "Object Detection — Model Comparison & Position Estimation"
    },
    summary: {
      tr: "İHA görüntülerinden insan ve taşıt tespiti için gerçek zamanlı çalışacak en uygun modelin VisDrone2019-VID üzerinde sistematik olarak belirlenmesi, YOLO + RT-DETR hibrit çıkarımı ve GPS'e ihtiyaç duymadan 3B görsel konum/iniş alanı kestirimi.",
      en: "Systematic determination of the most suitable real-time model for detecting people and vehicles in VisDrone2019-VID UAV imagery, weighted YOLO + RT-DETR hybrid inference, and GPS-free 3D visual position and safe landing zone estimation."
    },
    metrics: [
      { tr: "YOLOv12n + RT-DETR", en: "YOLOv12n + RT-DETR" },
      { tr: ">7.5 FPS Gerçek Zamanlı", en: ">7.5 FPS Real-Time" },
      { tr: "GPS-Bağımsız 3B Konum", en: "GPS-Free 3D Position" }
    ],
    coverImage: "assets/img/projects/aviation-ai/yolo_map_comparison.jpeg",
    gallery: [
      {
        src: "assets/img/projects/aviation-ai/yolo_map_comparison.jpeg",
        caption: {
          tr: "mAP@0.5:0.95 karşılaştırması — YOLOv12n en yüksek",
          en: "mAP@0.5:0.95 comparison — YOLOv12n is the highest"
        }
      },
      {
        src: "assets/img/projects/aviation-ai/yolo_fps_comparison.jpeg",
        caption: {
          tr: "FPS karşılaştırması — n serileri en hızlı (7,5 FPS eşiği aşıldı)",
          en: "FPS comparison — n series are the fastest (7.5 FPS threshold exceeded)"
        }
      },
      {
        src: "assets/img/projects/aviation-ai/train_val_loss_curve.jpeg",
        caption: {
          tr: "Eğitim ve doğrulama kaybı (Train vs Validation Loss) — erken durdurma ile denge",
          en: "Training and validation loss (Train vs Validation Loss) — balance achieved with early stopping"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Veri Seti ve Eğitim", en: "1. Dataset & Training" },
        items: {
          tr: [
            "VisDrone2019-VID (90° kamera, 15–25 m irtifa)",
            "Colab Pro+ / NVIDIA A100 GPU",
            "128×128 çözünürlük, yığın boyutu (batch) 32"
          ],
          en: [
            "VisDrone2019-VID (90° camera, 15–25 m altitude)",
            "Colab Pro+ / NVIDIA A100 GPU",
            "128×128 resolution, batch size 32"
          ]
        }
      },
      {
        title: { tr: "2. Model Kıyaslaması ve Hibrit RT-DETR", en: "2. Model Comparison & Hybrid RT-DETR" },
        items: {
          tr: [
            "YOLOv5/v8/v11/v12, YOLOS ve Faster R-CNN test edildi",
            "mAP@0.5:0.95 ve FPS dengesinde YOLOv12n birinci",
            "YOLO ile ağırlıklandırılmış RT-DETR hibrit kullanım kodu"
          ],
          en: [
            "Tested YOLOv5/v8/v11/v12, YOLOS, and Faster R-CNN",
            "YOLOv12n achieved top mAP@0.5:0.95 and real-time FPS",
            "Hybrid inference script weighted between YOLO and RT-DETR"
          ]
        }
      },
      {
        title: { tr: "3. Görev 2 — Görsel Konum Kestirimi", en: "3. Task 2 — Visual Position Estimation" },
        items: {
          tr: [
            "Kamera parametreleri ve referans koordinatlarla 3B konum tahmini",
            "GPS'e ihtiyaç duymadan en düz ve güvenli iniş alanının belirlenmesi"
          ],
          en: [
            "3D position estimation of ground targets using camera parameters",
            "Determining the flattest and safest landing area without GPS"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Uygun veri setlerini araştırıp işlenebilir hâle getirdim; tüm YOLO modellerini bizzat deneyip mAP50 / mAP50-95 / FPS / çıkarım süresi metriklerine göre raporladım ve tablolaştırdım. Rapor sonrasında RT-DETR ile YOLO'yu birleştiren ağırlıklı hibrit kullanım kodunu yazdım.",
      en: "I researched suitable datasets and made them usable; I personally tried all the YOLO models and reported and tabulated them by mAP50 / mAP50-95 / FPS / inference time metrics. Post-report, I wrote the hybrid usage code weighted between RT-DETR and YOLO."
    },
    details: {
      tr: [
        "VisDrone2019-VID üzerinde YOLOv5/v8/v11/v12, YOLOS ve Faster R-CNN modelleri NVIDIA A100 üzerinde karşılaştırıldı.",
        "Transformer tabanlı RT-DETR eğitildi; doğruluğu daha yüksekti ancak gerçek zamanlı kullanım için yavaş kaldığından YOLO ile ağırlıklandırılmış hibrit kod geliştirildi.",
        "Kamera parametreleri ve referans koordinatlar kullanılarak yerdeki hedeflerin 3B konum tahmini ve GPS olmadan güvenli iniş alanı tespiti yapıldı."
      ],
      en: [
        "Tested YOLOv5/v8/v11/v12, YOLOS, and Faster R-CNN on VisDrone2019-VID using Colab Pro+ / NVIDIA A100.",
        "Trained transformer-based RT-DETR; since it had higher accuracy but was too slow for real-time use, a hybrid usage code weighted with YOLO was written.",
        "Performed 3D position estimation of ground targets using camera parameters and reference coordinates, identifying safe landing zones without GPS."
      ]
    },
    challenges: {
      tr: [
        "Düşük mAP → Veri formatı ve sınıf eşleme uyumsuzluğu tespit edildi; etiket formatı yeniden düzenlendi.",
        "Aşırı Veri Artırımı (Augmentation) → Aşırı öğrenme (overfitting); erken durdurma (early stopping) ve doğrulama kaybı takibiyle dengelendi.",
        "Colab'da Değişken Çıkarım Süreleri → Test birden çok kez çalıştırılıp ortalaması alındı."
      ],
      en: [
        "Low mAP → Data format and class mapping mismatch; label format was reorganized.",
        "Excessive Augmentation → Overfitting; balanced with early stopping and validation loss monitoring.",
        "Variable Inference Times on Colab → The test was run multiple times and averaged."
      ]
    },
    tags: ["Python", "YOLOv12n", "RT-DETR", "VisDrone2019", "OpenCV", "NVIDIA A100"]
  },

  {
    id: 5,
    code: "05",
    domain: "embedded",
    pdfPage: 13,
    category: {
      tr: "Teknofest ve BAP-100 · Patent Başvurusu",
      en: "Teknofest and BAP-100 · Patent Application"
    },
    title: {
      tr: "MonTech — Giyilebilir Akıllı Mont",
      en: "MonTech — Wearable Smart Jacket"
    },
    summary: {
      tr: "Zorlu doğa koşullarında ve afet anlarında görev yapan bireyler için tasarlanan; nabız ve iç/dış sıcaklık sensörleriyle sağlık durumunu sürekli izleyen, hipotermi riskinde ısıtıcı pedleri otomatik devreye alan ve kritik durumda GPS konumunu ileten güneş enerjili akıllı mont.",
      en: "A multipurpose smart jacket designed for people working in harsh outdoor conditions and during disasters. Continuously monitors health status with pulse and internal/external temperature sensors, automatically activates heating pads below 35 °C, and sends GPS location in critical situations."
    },
    metrics: [
      { tr: "Patent Başvurusu", en: "Patent Pending" },
      { tr: "12 Esnek Güneş Paneli", en: "12 Flexible Solar Panels" },
      { tr: "<35 °C Otomatik Isıtma", en: "<35 °C Auto-Heating" }
    ],
    coverImage: "assets/img/projects/montech/smart_jacket_prototype.jpeg",
    gallery: [
      {
        src: "assets/img/projects/montech/smart_jacket_prototype.jpeg",
        caption: {
          tr: "Geliştirilen akıllı mont prototipi — sensör, ısıtma ve enerji entegrasyonu",
          en: "Developed smart jacket prototype — sensor, heating and energy integration"
        }
      },
      {
        src: "assets/img/projects/montech/app_bluetooth_devices.jpeg",
        caption: {
          tr: "Mobil uygulama — cihaz bağlantısı",
          en: "Mobile app — device connection"
        }
      },
      {
        src: "assets/img/projects/montech/app_live_gps_location.jpeg",
        caption: {
          tr: "Mobil uygulama — canlı konum takibi",
          en: "Mobile app — live location tracking"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Sensör İzleme", en: "1. Sensor Monitoring" },
        items: {
          tr: [
            "Arduino Pro Mini (düşük güç) denetleyici",
            "MAX30102 (kırmızı/IR) nabız sensörü",
            "NTC termistör (vücut ısısı) & <35 °C 5V ısıtıcı pedler"
          ],
          en: [
            "Arduino Pro Mini (low power) controller",
            "MAX30102 (red/IR) pulse sensor",
            "NTC thermistor (body temp) & <35 °C 5V heating pads"
          ]
        }
      },
      {
        title: { tr: "2. Kritik Durum ve Onay", en: "2. Critical Condition & Prompt" },
        items: {
          tr: [
            "Anormal sağlık verisinde Kritik Durum tetiklenir",
            "Titreşim motoru + piezo buzzer + LED uyarısı",
            "Buton ile 'İyi misin?' kullanıcı doğrulaması"
          ],
          en: [
            "Critical Condition triggered on abnormal vitals",
            "Vibration motor + piezo buzzer + LED alert",
            "LED + Button 'Are you okay?' user verification"
          ]
        }
      },
      {
        title: { tr: "3. GPS Konumu ve Güneş Enerjisi", en: "3. GPS Location & Solar Energy" },
        items: {
          tr: [
            "Yanıt yoksa GPS NEO-6M konumu HC-06 Bluetooth ile uygulamaya iletilir",
            "12 esnek güneş paneli (sırt 6, kol 1+1, göğüs 2+2) + powerbank",
            "Modüler ve yıkanabilir tasarım"
          ],
          en: [
            "No response → GPS NEO-6M location sent via HC-06 Bluetooth to app",
            "12 flexible solar panels (back 6, arms 1+1, chest 2+2) + power bank",
            "Modular and washable design"
          ]
        }
      }
    ],
    specsTable: {
      headers: {
        tr: ["Sistem Elemanı", "Donanım ve Teknik Özellik"],
        en: ["System Element", "Hardware & Specification"]
      },
      rows: {
        tr: [
          ["Denetleyici", "Arduino Pro Mini (düşük güç)"],
          ["Nabız", "MAX30102 (kırmızı/IR)"],
          ["Sıcaklık", "NTC termistör (vücut ısısı)"],
          ["Konum", "GPS NEO-6M"],
          ["İletişim", "HC-06 Bluetooth → mobil uygulama"],
          ["Isıtma", "5 V ısıtıcı pedler (35 °C'nin altında otomatik)"],
          ["Enerji", "12 adet esnek güneş paneli + powerbank"],
          ["Uyarı", "Titreşim motoru + piezo buzzer"]
        ],
        en: [
          ["Controller", "Arduino Pro Mini (low power)"],
          ["Pulse", "MAX30102 (red/IR)"],
          ["Temperature", "NTC thermistor (body temperature)"],
          ["Location", "GPS NEO-6M"],
          ["Communication", "HC-06 Bluetooth → mobile app"],
          ["Heating", "5 V heating pads (automatic below 35 °C)"],
          ["Energy", "12 flexible solar panels + power bank"],
          ["Alert", "Vibration motor + piezo buzzer"]
        ]
      }
    },
    myContribution: {
      tr: "Proje, Teknofest İnsanlık Yararına Teknoloji Yarışması ve BAP-100 kapsamında kabul edilip başarıyla tamamlandı; patent başvurusu yapıldı (sonuç bekleniyor). Gömülü kontrol sistemi, sensör-ısıtıcı-güneş paneli donanım entegrasyonu ve Bluetooth canlı konum mobil uygulaması geliştirildi.",
      en: "Accepted and successfully completed within the Teknofest Technology for Humanity Competition and BAP-100; a patent application was filed (result pending). Developed the embedded control system, sensor/heater/solar hardware integration, and Bluetooth live-location mobile app."
    },
    details: {
      tr: [
        "Hipotermi koruması: Vücut ısısı 35 °C'nin altına düşünce 5 V ısıtıcı pedler otomatik devreye girer.",
        "Acil durum senaryosu: Sensör İzleme › Kritik Durum › LED + Buton 'İyi misin?' › Yanıt Yok → GPS Konumu paylaşımı.",
        "Güneş panelleri: Sırt (6), kol (1+1), göğüs (2+2) olmak üzere toplam 12 adet esnek güneş paneliyle sürdürülebilir enerji."
      ],
      en: [
        "Hypothermia protection: heating pads activate automatically when body temperature falls below 35 °C.",
        "Emergency scenario: Sensor Monitoring › Critical Condition › LED + Button 'Are you okay?' › No Response → GPS Location.",
        "Solar panels: back (6), arms (1+1), chest (2+2) — 12 flexible solar panels in total for sustainable energy."
      ]
    },
    challenges: {
      tr: [
        "Zorlu Doğa Koşullarında Enerji Sürekliliği ve Yıkanabilirlik → Düşük güç tüketimli Arduino Pro Mini, 12 esnek güneş paneli ve modüler çıkarılabilir elektronik tasarım uygulandı."
      ],
      en: [
        "Energy Sustainability & Washability in Harsh Outdoors → Combined a low-power Arduino Pro Mini with 12 flexible solar panels in a modular, washable architecture."
      ]
    },
    tags: ["Embedded C", "Arduino", "Bluetooth", "GPS", "Mobile App", "Renewable Energy"]
  },

  {
    id: 6,
    code: "06",
    domain: "cv-ai",
    pdfPage: 15,
    category: {
      tr: "Bilgisayarlı Görü · Bölütleme",
      en: "Computer Vision · Segmentation"
    },
    title: {
      tr: "Atık Türü Tanıma ve Geri Dönüşüm Asistanı",
      en: "Waste Type Recognition and Recycling Assistant"
    },
    summary: {
      tr: "Kampüs ortamındaki atıkları bilgisayarlı görüyle tespit edip doğru geri dönüşüm kutusuna yönlendiren; önce nesne tespiti, ardından örnek bölütleme (instance segmentation) yapan sistem.",
      en: "A system that detects waste in a campus environment with computer vision and directs it to the correct recycling bin; performs object detection first, then instance segmentation."
    },
    metrics: [
      { tr: "%85 mAP (YOLOv11m-seg)", en: "85% mAP (YOLOv11m-seg)" },
      { tr: "2.501 Görsel / 2.633 Etiket", en: "2,501 Images / 2,633 Labels" },
      { tr: "5 Sınıf + Mobil Uygulama", en: "5 Classes + Mobile App" }
    ],
    coverImage: "assets/img/projects/waste-cv/yolov11m_seg_masks.jpeg",
    gallery: [
      {
        src: "assets/img/projects/waste-cv/yolov11m_seg_masks.jpeg",
        caption: {
          tr: "YOLOv11m-seg örnek bölütleme çıktıları (piksel düzeyinde maske)",
          en: "YOLOv11m-seg instance segmentation outputs (pixel-level masks)"
        }
      },
      {
        src: "assets/img/projects/waste-cv/confusion_matrix.jpeg",
        caption: {
          tr: "Karışıklık matrisi — YOLOv11m-seg",
          en: "Confusion matrix — YOLOv11m-seg"
        }
      },
      {
        src: "assets/img/projects/waste-cv/test_samples_confidence.jpeg",
        caption: {
          tr: "Test örnekleri — güven skorlu tespitler",
          en: "Test samples — detections with confidence scores"
        }
      },
      {
        src: "assets/img/projects/waste-cv/app_waste_routing.jpeg",
        caption: {
          tr: "Uygulama — atık tespiti ve kutu yönlendirmesi",
          en: "App — waste detection and bin routing"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Veri Seti ve Eğitim", en: "1. Dataset and Training" },
        items: {
          tr: [
            "İZÜ kampüsünden toplandı, elle etiketlendi",
            "5 sınıf: cam, kâğıt, metal, plastik, organik (2.501 görsel / 2.633 etiket)",
            "640×640; yatay/dikey çevirme, ±15° döndürme"
          ],
          en: [
            "Collected on İZÜ campus and labeled by hand",
            "5 classes: glass, paper, metal, plastic, organic (2,501 images / 2,633 labels)",
            "640×640; horizontal/vertical flip, ±15° rotation"
          ]
        }
      },
      {
        title: { tr: "2. Modeller", en: "2. Models" },
        items: {
          tr: [
            "Google Colab A100 · 150 epoch · batch 32 · lr 0,01",
            "YOLOv8n (referans), YOLOv11m, YOLOv11s-seg, YOLOv11m-seg",
            "En iyi sonuç: YOLOv11m-seg — %85 mAP"
          ],
          en: [
            "Google Colab A100 · 150 epochs · batch 32 · lr 0.01",
            "YOLOv8n (baseline), YOLOv11m, YOLOv11s-seg, YOLOv11m-seg",
            "Best result: YOLOv11m-seg — 85% mAP"
          ]
        }
      },
      {
        title: { tr: "3. Mobil Uygulama", en: "3. Mobile Application" },
        items: {
          tr: [
            "Fotoğraf çek veya galeriden seç",
            "Tespit edilen atık türü ve güven skoru gösterilir",
            "Gideceği kutu rengi belirtilir (ör. Kâğıt %91 · Metal %53 → gri kutu)"
          ],
          en: [
            "Take a photo or select from gallery",
            "Displays detected waste type and confidence score",
            "Shows target bin color (e.g., Paper 91% · Metal 53% → gray bin)"
          ]
        }
      }
    ],
    myContribution: {
      tr: "Veri setinin İZÜ kampüsünden toplanması, elle etiketlenmesi, Google Colab A100 üzerinde YOLOv8 ve YOLOv11 bölütleme modellerinin eğitilip kıyaslanması ve %85 mAP sağlayan YOLOv11m-seg modelinin mobil uygulamaya entegre edilmesini gerçekleştirdim.",
      en: "Collected and hand-labeled the dataset on the İZÜ campus, trained and compared YOLOv8 and YOLOv11 segmentation models on Google Colab A100, and integrated the 85% mAP YOLOv11m-seg model into the mobile app."
    },
    details: {
      tr: [
        "5 sınıf: cam, kâğıt, metal, plastik, organik — 2.501 görsel / 2.633 etiket.",
        "YOLOv11m-seg %85 mAP ile en tutarlı model oldu ve bölütleme doğruluğunu artırdığı için mobil uygulamada tercih edildi.",
        "Fotoğraf çekildiğinde tespit edilen atık türü, güven skoru ve gideceği kutu rengi gösterilir."
      ],
      en: [
        "5 classes: glass, paper, metal, plastic, organic — 2,501 images / 2,633 labels.",
        "YOLOv11m-seg was the most consistent model with 85% mAP, improving segmentation accuracy for the mobile app.",
        "Taking a photo displays the detected waste type, confidence score, and the color of the recycling bin it goes to."
      ]
    },
    challenges: {
      tr: [
        "Etiket Yanılsaması → Beyaz zemin + siyah yazılı ambalaj etiketleri zaman zaman 'kâğıt' olarak algılandı; mobil uygulamada çoklu tespit ve güven skorları birlikte gösterilerek çözüldü."
      ],
      en: [
        "Label Ambiguity → Labels with black text on a white background were occasionally detected as 'paper'; addressed by displaying multi-object confidence scores and bin routing."
      ]
    },
    tags: ["YOLOv11m-Seg", "YOLOv8n", "Instance Segmentation", "Computer Vision", "Python", "Mobile App"]
  },

  {
    id: 7,
    code: "07",
    domain: "nlp-game",
    pdfPage: 17,
    category: {
      tr: "BERT · Türkçe NLP",
      en: "BERT · Turkish NLP"
    },
    title: {
      tr: "Çok Görevli NLP Pipeline — House M.D.",
      en: "Multi-Task NLP Pipeline — House M.D."
    },
    summary: {
      tr: "Türkçe altyazı temelli House M.D. diyalog veri seti (7.281 cümle · 8 sezon · 146 bölüm) üzerine kurulmuş, altı görevli bir NLP işlem hattı. Her görev için hem klasik makine öğrenmesi (TF-IDF + LogReg/SVM/RF) hem de Türkçe BERT karşılaştırıldı.",
      en: "A six-task NLP pipeline built on a Turkish-subtitle-based House M.D. dialogue dataset (7,281 sentences · 8 seasons · 146 episodes). For each task, both classical machine learning (TF-IDF + LogReg/SVM/RF) and Turkish BERT were compared."
    },
    metrics: [
      { tr: "7.281 Cümle · 146 Bölüm", en: "7,281 Sentences · 146 Ep." },
      { tr: "+22 Puan BERT Niyet Farkı", en: "+22 pts BERT Intent Gain" },
      { tr: "6 Görev + Gradio Demo", en: "6 Tasks + Gradio Demo" }
    ],
    coverImage: "assets/img/projects/nlp-house/bert_vs_ml_accuracy.jpeg",
    gallery: [
      {
        src: "assets/img/projects/nlp-house/bert_vs_ml_accuracy.jpeg",
        caption: {
          tr: "Test doğruluğu — BERT ve klasik ML",
          en: "Test accuracy — BERT vs classical ML"
        }
      },
      {
        src: "assets/img/projects/nlp-house/bert_vs_ml_macro_f1.jpeg",
        caption: {
          tr: "Test Macro-F1 — sınıf dengesizliğinin etkisi",
          en: "Test Macro-F1 — effect of class imbalance"
        }
      },
      {
        src: "assets/img/projects/nlp-house/most_frequent_speakers.jpeg",
        caption: {
          tr: "Veri setinde en sık konuşan karakterler",
          en: "Most frequently speaking characters in the dataset"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Veri ve Ön İşleme", en: "1. Data and Preprocessing" },
        items: {
          tr: [
            "Etiket temizliği: Niyet 218→9, Duygu 249→9, Konuşmacı 241→11 değer",
            "Türkçeye duyarlı normalleştirme (İ→i), 148 durak sözcük, JSON düzeltmeleri",
            "Bölüm bazlı tabakalı (stratified) ayrım (sızıntı önleme): 5.905 / 679 / 697"
          ],
          en: [
            "Label cleaning: Intent 218→9, Emotion 249→9, Speaker 241→11 values",
            "Turkish-aware normalization (İ→i), 148 stopwords, JSON fixes",
            "Episode-based stratified split (leakage prevention): 5,905 / 679 / 697"
          ]
        }
      },
      {
        title: { tr: "2. Altı Görev (Six Tasks)", en: "2. Six Tasks" },
        items: {
          tr: [
            "Niyet Sınıflandırma, Duygu, Alaycılık Tespiti",
            "Teşhis Aşaması, Konuşmacı Kimliği",
            "Tıbbi NER: 3.000+ terimlik sözlük; toplam 13.239 varlık"
          ],
          en: [
            "Intent Classification, Emotion, Sarcasm Detection",
            "Diagnosis Stage, Speaker Identity",
            "Medical NER: dictionary of 3,000+ terms; 13,239 entities in total"
          ]
        }
      },
      {
        title: { tr: "3. Modeller ve Canlı Demo", en: "3. Models & Live Demo" },
        items: {
          tr: [
            "Klasik ML (TF-IDF + LogReg/SVM/RF) vs Türkçe BERT (dbmdz/bert-turkish)",
            "TF-IDF tabanlı retrieval chatbot'u",
            "Gradio ile çok sekmeli canlı demo"
          ],
          en: [
            "Classical ML (TF-IDF + LogReg/SVM/RF) vs Turkish BERT (dbmdz/bert-turkish)",
            "TF-IDF-based retrieval chatbot",
            "Multi-tab live demo with Gradio"
          ]
        }
      }
    ],
    specsTable: {
      headers: {
        tr: ["Görev", "Klasik ML", "BERT", "Fark (Δ)"],
        en: ["Task", "Classical ML", "BERT", "Difference (Δ)"]
      },
      rows: {
        tr: [
          ["Niyet", "0,386", "0,604", "+0,218"],
          ["Duygu", "0,405", "0,601", "+0,196"],
          ["Alaycılık", "0,912", "0,953", "+0,041"],
          ["Teşhis Aşaması", "0,288", "0,382", "+0,094"],
          ["Konuşmacı", "0,235", "0,395", "+0,160"]
        ],
        en: [
          ["Intent", "0.386", "0.604", "+0.218"],
          ["Emotion", "0.405", "0.601", "+0.196"],
          ["Sarcasm", "0.912", "0.953", "+0.041"],
          ["Diagnosis Stage", "0.288", "0.382", "+0.094"],
          ["Speaker", "0.235", "0.395", "+0.160"]
        ]
      }
    },
    myContribution: {
      tr: "Veri toplama, ön işleme ve veriyi işlenebilir hâle getirme sürecini üstlendim; ayrıca Türkçe BERT ile model eğitimini gerçekleştirdim. Ek olarak TF-IDF tabanlı bir retrieval chatbot'u ve Gradio ile çok sekmeli canlı demo geliştirildi.",
      en: "I took on data collection, preprocessing and making the data usable; I also carried out model training with Turkish BERT. In addition, a TF-IDF-based retrieval chatbot and a multi-tab live demo with Gradio were developed."
    },
    details: {
      tr: [
        "BERT, beş görevin tümünde doğrulukta (test accuracy) klasik ML'i geçti; Niyet (+22 puan), Duygu (+20) ve Konuşmacı (+16) en belirgin kazanımlar oldu.",
        "Zengin morfolojik bağlam gerektiren görevlerde transformer üstünlüğü net biçimde görülüyor.",
        "Tıbbi NER görevinde 3.000+ terimlik sözlükle toplam 13.239 tıbbi varlık etiketlendi."
      ],
      en: [
        "BERT outperformed classical ML in test accuracy on all five tasks; the most notable gains were in Intent (+22 points), Emotion (+20), and Speaker (+16).",
        "The superiority of transformers is clearly seen in tasks that require rich morphological context.",
        "Medical NER identified 13,239 entities in total using a dictionary of 3,000+ terms."
      ]
    },
    challenges: {
      tr: [
        "Veri Sızıntısı (Data Leakage) ve Gürültülü Etiketler → Bölüm bazlı tabakalı (episode-based stratified) ayrım (5.905 / 679 / 697) uygulandı ve 200+ ham etiket 9–11 temiz sınıfa indirgendi."
      ],
      en: [
        "Data Leakage & Noisy Labels → Applied episode-based stratified splitting (5,905 / 679 / 697) and consolidated 200+ raw labels into 9–11 canonical classes."
      ]
    },
    tags: ["Turkish BERT", "TF-IDF", "Transformers", "Gradio Demo", "dbmdz/bert-turkish"]
  },

  {
    id: 8,
    code: "08",
    domain: "nlp-game",
    pdfPage: 19,
    category: {
      tr: "Unity · Re:Zero Studio",
      en: "Unity · Re:Zero Studio"
    },
    title: {
      tr: "The Narrator's Game",
      en: "The Narrator's Game"
    },
    summary: {
      tr: "Unity ile geliştirilen; gerilim, komedi ve parkur öğelerini birleştiren, anlatıcı odaklı bir hikâye/korku oyunu. Hafızasını kaybetmiş ana karakter, üzerinde deneyler yapılan bir tesisten kaçmaya ve geçmişini hatırlamaya çalışır (Portal ve The Stanley Parable esintileri taşır).",
      en: "A narrator-driven story/horror game developed with Unity, combining suspense, comedy and parkour elements. The amnesiac main character tries to escape from a facility where experiments are conducted on them (with echoes of Portal and The Stanley Parable)."
    },
    metrics: [
      { tr: "Unity & C#", en: "Unity & C#" },
      { tr: "Oyun Yapay Zekâsı", en: "Behavioral Game AI" },
      { tr: "3B Modelleme", en: "3D Modeling" }
    ],
    coverImage: "assets/img/projects/narrator-game/narrator_game_poster.jpeg",
    gallery: [
      {
        src: "assets/img/projects/narrator-game/narrator_game_poster.jpeg",
        caption: {
          tr: "Tanıtım afişi — Re:Zero Studio",
          en: "Promotional poster — Re:Zero Studio"
        }
      }
    ],
    architecture: [
      {
        title: { tr: "1. Oyun Yapay Zekâsı ve 3B Modelleme", en: "1. Game AI & 3D Modeling" },
        items: {
          tr: [
            "2. bölümdeki korkunç canavarların 3B modellenmesi",
            "Canavarların yapay zekâ (davranış) sistemlerinin geliştirilmesi"
          ],
          en: [
            "Modeling the terrifying monsters in Chapter 2",
            "Developing their AI (behavior) systems"
          ]
        }
      },
      {
        title: { tr: "2. Karakter ve Yetenek Kodlaması", en: "2. Character & Ability Coding" },
        items: {
          tr: [
            "Karakter hareketlerinin C# ile kodlanması",
            "Özel tüplerle kazanılan yetenekler: Kronos Enjektörü, Sıçrayış Serumu"
          ],
          en: [
            "Coding the character movements in C#",
            "Coding abilities gained with special tubes: Kronos Injector, Leap Serum"
          ]
        }
      },
      {
        title: { tr: "3. Web ve Pazarlama", en: "3. Web and Marketing" },
        items: {
          tr: [
            "Oyunun tanıtım web sitesinin hazırlanması",
            "Re:Zero Studio pazarlama çalışmalarının yürütülmesi"
          ],
          en: [
            "Preparing the game's promotional website",
            "Executing marketing work under Re:Zero Studio"
          ]
        }
      }
    ],
    myContribution: {
      tr: "2. bölümdeki korkunç canavarların modellenmesi ve yapay zekâ (davranış) sistemlerinin geliştirilmesi, karakter hareketlerinin ve özel tüplerle kazanılan yeteneklerin (Kronos Enjektörü, Sıçrayış Serumu) kodlanması, oyunun tanıtım web sitesinin hazırlanması ve pazarlama çalışmalarını üstlendim.",
      en: "Modeled the terrifying monsters in Chapter 2 and developed their AI (behavior) systems; coded the character movements and special tube abilities (Kronos Injector, Leap Serum); prepared the game's promotional website and marketing work."
    },
    details: {
      tr: [
        "2. bölümdeki korkunç canavarların modellenmesi ve yapay zekâ (davranış) sistemlerinin geliştirilmesi.",
        "Karakter hareketlerinin kodlanması.",
        "Özel tüplerle kazanılan yeteneklerin (Kronos Enjektörü, Sıçrayış Serumu) kodlanması.",
        "Oyunun tanıtım web sitesinin hazırlanması ve pazarlama çalışmaları."
      ],
      en: [
        "Modeling the terrifying monsters in Chapter 2 and developing their AI (behavior) systems.",
        "Coding the character movements.",
        "Coding the abilities gained with special tubes (Kronos Injector, Leap Serum).",
        "Preparing the game's promotional website and marketing work."
      ]
    },
    challenges: {
      tr: [
        "Yetenek Tüpleriyle Değişen Karakter Fiziği → Kronos Enjektörü ve Sıçrayış Serumu geçişlerinde parkur akıcılığını koruyan modüler C# hareket kontrolcüsü geliştirildi."
      ],
      en: [
        "Parkour Physics Transitions with Special Tubes → Engineered a modular C# movement controller to keep Kronos Injector and Leap Serum transitions fluid."
      ]
    },
    tags: ["Unity", "C#", "Game AI", "3D Modeling", "Web and Marketing"]
  }
];

/* ==========================================================================
   7. ENGINEERING MILESTONES, COMPETITIONS & ACADEMIC TIMELINE
   ========================================================================== */

const TIMELINE = [
  {
    period: "2024 – 2026",
    tag: { tr: "Teknofest İleri Kategori · Türkiye 4.'lüğü", en: "Teknofest Advanced Category · 4th Place" },
    title: {
      tr: "Auvtech İnsansız Sualtı Aracı (AUV) — Otonomi ve Görüntü İşleme",
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
      tr: "Seviye 4 Otonom Kargo Dağıtım Aracının ROS ve Gazebo Simülasyonu",
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
      tr: "Gerçek Zamanlı İHA Nesne Tespiti (YOLOv12n + RT-DETR) ve 3B Görsel Konum",
      en: "Real-Time Aerial Object Detection (YOLOv12n + RT-DETR) & 3D Visual Pose"
    },
    desc: {
      tr: "VisDrone2019-VID üzerinde NVIDIA A100 ile kapsamlı YOLO/Transformer kıyaslaması, ağırlıklı hibrit çıkarım kodu ve GPS bağımsız güvenli düz iniş alanı tespiti.",
      en: "Comprehensive YOLO/Transformer benchmarking on VisDrone2019-VID using NVIDIA A100, weighted hybrid inference script, and GPS-independent safe landing zone detection."
    }
  },
  {
    period: "2023 – 2025",
    tag: { tr: "Teknofest ve BAP-100 · Patent Başvurusu", en: "Teknofest & BAP-100 · Patent Pending" },
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
