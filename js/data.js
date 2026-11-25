const UI_TEXT = {
  tr: {
    nav_projects: "Projeler",
    nav_skills: "Yetkinlikler",
    nav_contact: "İletişim",
    hero_role: "Robotik ve Otonom Sistemler Mühendisi",
    hero_desc: "İnsansız hava, kara ve sualtı araçları için SLAM, sensör füzyonu, bilgisayarlı görü ve gömülü yapay zekâ sistemlerini simülasyondan fiziksel donanıma taşıyorum.",
    btn_pdf_tr: "📄 Portfolyo (TR - PDF)",
    btn_pdf_en: "📄 Portfolio (EN - PDF)",
    projects_title: "Seçili Projeler",
    projects_sub: "Teknik detayları, katkılarımı ve kullanılan teknolojileri görmek için bir karta tıklayın.",
    skills_title: "Teknik Yetkinlikler",
    contact_title: "Birlikte Çalışalım",
    contact_desc: "Otonom sistemler, robotik ve savunma teknolojileri alanındaki fırsatlara açığım.",
    modal_contrib: "Katkım & Teknik Detaylar"
  },
  en: {
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_role: "Robotics & Autonomous Systems Engineer",
    hero_desc: "Developing end-to-end SLAM, sensor fusion, computer vision, and embedded AI systems for unmanned aerial, ground, and underwater vehicles—from simulation to physical hardware.",
    btn_pdf_tr: "📄 Portfolio (TR - PDF)",
    btn_pdf_en: "📄 Portfolio (EN - PDF)",
    projects_title: "Selected Projects",
    projects_sub: "Click any card to view technical details, my contributions, and architecture.",
    skills_title: "Technical Competencies",
    contact_title: "Let's Work Together",
    contact_desc: "I am open to opportunities in autonomous systems, robotics, and defense technologies.",
    modal_contrib: "My Contribution & Technical Details"
  }
};

const SKILLS = [
  {
    title: { tr: "Robotik ve Otonomi", en: "Robotics & Autonomy" },
    items: "ROS / ROS 2, PX4, Pixhawk 6X, Cube Orange, Nav2, Gazebo, A*, Path Planning"
  },
  {
    title: { tr: "SLAM ve Konumlandırma", en: "SLAM & Localization" },
    items: "RTAB-Map, Fast-LIO2, LIO-SAM, Kalman Filter, 4D LiDAR, Point Cloud, Sensor Fusion"
  },
  {
    title: { tr: "Yapay Zekâ ve Bilgisayarlı Görü", en: "AI, ML & Computer Vision" },
    items: "PyTorch, TensorFlow/Keras, YOLO v5-v12, YOLO-Seg, RT-DETR, OpenCV, ViT, BERT"
  },
  {
    title: { tr: "Gömülü Sistemler ve Yazılım", en: "Embedded & Software" },
    items: "C/C++, Python, STM32, Raspberry Pi 5 + AI HAT, Arduino, Linux, Git, Docker, Unity/C#"
  }
];

const PROJECTS = [
  {
    id: 1,
    category: { tr: "Bitirme Projesi · 2x BAP-100", en: "Capstone Project · 2x BAP-100" },
    title: { tr: "Otonom İHA: 3B Haritalama ve Konumlandırma", en: "Autonomous UAV: 3D Mapping & Localization" },
    summary: {
      tr: "GNSS olmayan dış ortamlarda LiDAR ve stereo kamera füzyonuyla gerçek zamanlı 3B haritalama ve nesne bölütleme yapan ROS 2 tabanlı otonom İHA.",
      en: "ROS 2-based autonomous quadrotor performing real-time 3D mapping, localization, and object segmentation in GNSS-denied environments via LiDAR-stereo fusion."
    },
    details: {
      tr: [
        "Hibrit SLAM mimarisi: Gerçek zamanlı Fast-LIO2 (frontend) + çevrimdışı RTAB-Map (backend) ve Dinamik Voxel Filtresi.",
        "Faz 1 otonom Lawnmower tarama algoritmasını iyileştirdim; uyarlanabilir şerit üretimi ve A* tabanlı kurtarma mekanizması ekledim.",
        "22 cm baz mesafeli + 40° eğimli stereo kamera kalibrasyonu ve donanım seviyesi senkronizasyon (Raspberry Pi 5 + AI HAT, Pixhawk 6X)."
      ],
      en: [
        "Hybrid SLAM architecture: real-time Fast-LIO2 (frontend) + offline RTAB-Map (backend) with Dynamic Voxel Filtering.",
        "Improved Phase 1 autonomous Lawnmower scanning with adaptive strip generation and A*-based recovery.",
        "Designed 22 cm baseline + 40° tilt stereo camera setup with hardware-level sync on Raspberry Pi 5 + AI HAT and Pixhawk 6X."
      ]
    },
    tags: ["ROS 2", "Fast-LIO2", "RTAB-Map", "PX4", "Pixhawk 6X", "4D LiDAR", "Gazebo"]
  },
  {
    id: 2,
    category: { tr: "Teknofest 2026 İleri Kategori", en: "Teknofest 2026 Advanced Category" },
    title: { tr: "İnsansız Sualtı Aracı (AUV)", en: "Unmanned Underwater Vehicle (AUV)" },
    summary: {
      tr: "Auvtech ekibiyle geliştirilen; sualtı çizgi takibi, hedef tespiti ve tam otonom intikal yapabilen 6 iticili biyomimetik sualtı aracı.",
      en: "Biomimetic 6-thruster autonomous underwater vehicle performing line following, target/gate detection, and closed-loop underwater transit."
    },
    details: {
      tr: [
        "2024 Kritik Tasarım Raporu aşamasında 4. sırada yer alındı; 2026 ileri kategori için geliştiriliyor.",
        "Sualtı renk dengesi ve netlik iyileştirme, YOLO tabanlı görev ipucu ve şamandıra tespiti.",
        "IMU + basınç + LiDAR sensör füzyonu ile kapalı çevrim derinlik kontrolü ve otonom rota planlama."
      ],
      en: [
        "Placed 4th at the 2024 Critical Design Report stage; advancing for the 2026 competition.",
        "Underwater image enhancement (color balance, clarity) and YOLO-based buoy/target detection.",
        "Closed-loop depth control and dynamic navigation via IMU, pressure, and LiDAR fusion."
      ]
    },
    tags: ["ROS 2", "Python", "C++", "YOLO", "OpenCV", "PID", "Sensor Fusion"]
  },
  {
    id: 3,
    category: { tr: "TÜBİTAK 2209-A Proje Yürütücüsü", en: "TÜBİTAK 2209-A Principal Investigator" },
    title: { tr: "Otonom Kargo Dağıtım Aracı Simülasyonu", en: "Autonomous Cargo Delivery Vehicle Simulation" },
    summary: {
      tr: "Trafik kurallarına uygun, güvenli ve şifreli teslimat yapan Seviye 4 otonom kargo aracının ROS ve Gazebo simülasyonu.",
      en: "ROS and Gazebo simulation of a Level 4 autonomous cargo vehicle delivering packages safely in compliance with traffic rules."
    },
    details: {
      tr: [
        "YOLO + OpenCV ile trafik işaretleri, yayalar ve araçların gerçek zamanlı tespiti.",
        "Trafik yoğunluğuna göre en kısa yol optimizasyonu ve kamera-LiDAR-radar füzyonuyla engelden kaçınma.",
        "Kullanıcıya özel şifreli bölme teslimatı ve müşteri veri tabanı entegrasyonu."
      ],
      en: [
        "Real-time detection of traffic signs, pedestrians, and vehicles using YOLO + OpenCV.",
        "Traffic-aware shortest-path optimization and obstacle avoidance via camera-LiDAR-radar fusion.",
        "Encrypted user-specific compartment delivery with customer database integration."
      ]
    },
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV", "Path Planning", "Sensor Fusion"]
  },
  {
    id: 4,
    category: { tr: "Teknofest · Havacılıkta Yapay Zekâ", en: "Teknofest · AI in Aviation" },
    title: { tr: "Nesne Tespiti ve Görsel Konum Kestirimi", en: "Object Detection & Visual Position Estimation" },
    summary: {
      tr: "İHA görüntülerinde gerçek zamanlı insan/araç tespiti için sistematik model kıyaslaması ve GPS bağımsız güvenli iniş alanı tespiti.",
      en: "Systematic real-time model benchmarking on UAV imagery and GPS-independent visual 3D position estimation for safe landing."
    },
    details: {
      tr: [
        "VisDrone2019-VID üzerinde YOLOv5/v8/v11/v12, YOLOS ve Faster R-CNN modellerini A100 GPU ile kıyasladım.",
        "En yüksek mAP/FPS dengesi YOLOv12n ile sağlandı; ardından RT-DETR + YOLO ağırlıklı hibrit çıkarım kodu geliştirildi.",
        "Kamera parametreleri ve referans koordinatlarla GPS olmadan 3B konum kestirimi."
      ],
      en: [
        "Benchmarked YOLOv5/v8/v11/v12, YOLOS, and Faster R-CNN on VisDrone2019-VID using NVIDIA A100.",
        "Achieved best speed/accuracy balance with YOLOv12n and built a weighted YOLO + RT-DETR hybrid inference script.",
        "GPS-free 3D target position estimation and flat landing zone detection."
      ]
    },
    tags: ["YOLOv12n", "RT-DETR", "PyTorch", "OpenCV", "VisDrone2019"]
  },
  {
    id: 5,
    category: { tr: "Teknofest & BAP-100 · Patent Başvurusu", en: "Teknofest & BAP-100 · Patent Pending" },
    title: { tr: "MonTech — Giyilebilir Akıllı Mont", en: "MonTech — Wearable Smart Jacket" },
    summary: {
      tr: "Afet ve zorlu doğa koşullarında hipotermi koruması sağlayan, güneş enerjili ve acil durum GPS bildirimli akıllı mont.",
      en: "Solar-powered smart jacket for disaster response with automatic hypothermia protection and emergency GPS alerting."
    },
    details: {
      tr: [
        "Vücut ısısı 35 °C altına düştüğünde 5V ısıtıcı pedleri otomatik devreye alan gömülü kontrol sistemi.",
        "MAX30102 nabız, NTC termistör, GPS NEO-6M ve HC-06 Bluetooth ile mobil uygulama üzerinden canlı konum takibi.",
        "12 esnek güneş paneli ile sürdürülebilir enerji; patent başvurusu yapıldı."
      ],
      en: [
        "Embedded controller automatically activating 5V heating pads when body temperature drops below 35 °C.",
        "Live health monitoring (MAX30102, NTC) and emergency GPS location sharing via Bluetooth mobile app.",
        "Powered by 12 flexible solar panels; patent application filed."
      ]
    },
    tags: ["Embedded C", "Arduino", "GPS", "Bluetooth", "Mobile App", "Solar"]
  },
  {
    id: 6,
    category: { tr: "Bilgisayarlı Görü", en: "Computer Vision" },
    title: { tr: "Atık Tanıma ve Geri Dönüşüm Asistanı", en: "Waste Recognition & Recycling Assistant" },
    summary: {
      tr: "Kampüste toplanan özel veri setiyle 5 atık sınıfını piksel düzeyinde bölütleyip doğru kutuya yönlendiren mobil uygulama.",
      en: "Instance segmentation system and mobile app classifying 5 waste categories from a custom campus dataset."
    },
    details: {
      tr: [
        "İZÜ kampüsünde toplanıp etiketlenen 2.501 görsel / 2.633 etiketli 5 sınıflı veri seti (cam, kâğıt, metal, plastik, organik).",
        "YOLOv8n, YOLOv11m ve seg varyantları kıyaslandı; YOLOv11m-seg ile %85 mAP elde edildi.",
        "Fotoğraf çekerek atık türünü, güven skorunu ve kutu rengini gösteren mobil uygulama."
      ],
      en: [
        "Custom 5-class dataset (2,501 images / 2,633 labels) collected and hand-annotated on campus.",
        "Compared YOLOv8n and YOLOv11 variants; YOLOv11m-seg achieved 85% mAP.",
        "Mobile application displaying detected waste type, confidence score, and target recycling bin color."
      ]
    },
    tags: ["YOLOv11-Seg", "Computer Vision", "Python", "Mobile App"]
  },
  {
    id: 7,
    category: { tr: "Türkçe Doğal Dil İşleme", en: "Turkish NLP" },
    title: { tr: "Çok Görevli NLP Pipeline (House M.D.)", en: "Multi-Task NLP Pipeline (House M.D.)" },
    summary: {
      tr: "7.281 cümlelik Türkçe House M.D. diyalog veri seti üzerinde 6 farklı NLP görevi için BERT ve Klasik ML karşılaştırması.",
      en: "Six-task NLP pipeline comparing Turkish BERT against Classical ML on a 7,281-sentence House M.D. dialogue dataset."
    },
    details: {
      tr: [
        "6 görev: Niyet, Duygu, Alaycılık, Teşhis Aşaması, Konuşmacı Kimliği ve 3.000+ terimli Tıbbi NER.",
        "Türkçe BERT (dbmdz/bert-turkish) tüm görevlerde Klasik ML'i geçti (Niyet +22, Duygu +20, Konuşmacı +16 puan).",
        "Bölüm bazlı sızıntısız (leakage-free) veri bölme, TF-IDF chatbot ve çok sekmeli Gradio canlı demo."
      ],
      en: [
        "6 tasks: Intent, Emotion, Sarcasm, Diagnosis Stage, Speaker Identity, and Medical NER (3,000+ terms).",
        "Turkish BERT outperformed Classical ML across all tasks (+22 pts Intent, +20 Emotion, +16 Speaker).",
        "Episode-based leakage-free split, TF-IDF retrieval chatbot, and multi-tab Gradio demo."
      ]
    },
    tags: ["Turkish BERT", "Transformers", "TF-IDF", "NLP", "Gradio", "Python"]
  },
  {
    id: 8,
    category: { tr: "Unity · Re:Zero Studio", en: "Unity · Re:Zero Studio" },
    title: { tr: "The Narrator's Game", en: "The Narrator's Game" },
    summary: {
      tr: "Portal ve The Stanley Parable esintileri taşıyan; gerilim, komedi ve parkur öğelerini birleştiren anlatıcı odaklı 3B oyun.",
      en: "Narrator-driven 3D story/horror/parkour game blending suspense and comedy, inspired by Portal and The Stanley Parable."
    },
    details: {
      tr: [
        "2. bölümdeki canavarların 3B modellenmesi ve yapay zekâ (davranış) sistemlerinin geliştirilmesi.",
        "Karakter hareket mekanikleri ve özel yetenek tüplerinin (Kronos Enjektörü, Sıçrayış Serumu) C# ile kodlanması.",
        "Oyunun tanıtım web sitesi ve pazarlama çalışmalarının yürütülmesi."
      ],
      en: [
        "3D modeling of Chapter 2 monsters and development of their AI behavior systems.",
        "Coded character movement and special abilities (Kronos Injector, Leap Serum) in C#.",
        "Built the game's promotional website and handled marketing."
      ]
    },
    tags: ["Unity", "C#", "Game AI", "3D Modeling"]
  }
];