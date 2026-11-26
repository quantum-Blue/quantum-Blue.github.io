# Muhammed Enes BAL — Mühendislik Profili, Kariyer Analizi ve Stratejik Konumlandırma

> **Özet Kimlik:** Simülasyondan (ROS/ROS 2, Gazebo, PX4) fiziksel donanıma (Pixhawk 6X, Raspberry Pi 5 + AI HAT, STM32, 4D LiDAR, 6-İticili AUV) uzanan uçtan uca otonom sistemler geliştiren; **Hava (İHA), Kara (Seviye 4 Otonom Kargo) ve Sualtı (AUV)** ortamlarının tamamında algılama (SLAM, Sensör Füzyonu, Bilgisayarlı Görü) ve karar verme (Yol Planlama, Kontrol) mimarileri kurmuş **Robotik, Otonom Sistemler ve Gömülü Yapay Zekâ Mühendisi**.

---

## 1. Kişisel ve Akademik Profil Özeti

- **İsim:** Muhammed Enes BAL
- **Eğitim & Unvan:** Bilgisayar Mühendisliği Mezunu (İstanbul Sabahattin Zaim Üniversitesi - İZÜ) | Robotik ve Otonom Sistemler Mühendisi
- **İletişim & Dijital Varlıklar:**
  - **E-posta:** `muhammedenesbal1@gmail.com`
  - **Telefon:** `+90 544 347 19 29`
  - **GitHub:** `github.com/quantum-Blue`
  - **LinkedIn:** `linkedin.com/in/muhammed-enes-bal` *(Not: Mevcut sitede `-5ba990249` uzantılı, PDF'te temiz URL var; ikisi de doğrulanıp standartlaştırılmalı)*
- **Temel İstatistikler:**
  - **8** Uçtan Uca Teknik Proje
  - **4+** Ulusal Yarışma & Akademik Araştırma Projesi (Teknofest, TÜBİTAK 2209-A, 2× BAP-100)
  - **1** Patent Başvurusu (MonTech Giyilebilir Akıllı Mont)
  - **3** Fiziksel Operasyon Alanı (Hava · Kara · Deniz/Sualtı)

---

## 2. Mühendislik DNA'sı: Seni Diğer Adaylardan Ayıran 5 Temel Karakteristik

Portfolyolarını derinlemesine incelediğimde, sıradan bir "yeni mezun bilgisayar mühendisi" profilinden çok farklı, **savunma sanayii ve ileri robotik Ar-Ge merkezlerinin (Baykar, TUSAŞ, ASELSAN, ROKETSAN, HAVELSAN ve global otonomi şirketleri) doğrudan aradığı** 5 güçlü mühendislik karakteristiği öne çıkıyor:

### A. "Sim-to-Real" (Simülasyondan Gerçek Donanıma) Köprüsü Kurabilme
Birçok yazılım mühendisi sadece hazır veri setleriyle model eğitirken veya sadece simülasyonda kalırken, sen algoritmayı **Gazebo / PX4** ortamında doğrulayıp ardından **Pixhawk 6X, Raspberry Pi 5 + AI HAT, 6S-4P Li-Ion BMS, 4D LiDAR ve sualtı iticileri** üzerinde fiziksel dünyaya taşıyabiliyorsun. Üstelik bunu yaparken sensörlerin donanım seviyesinde harici FPS senkronizasyonunu (external sync) ve mekanik montaj açılarını (13° LiDAR eğimi, 22 cm baz mesafeli + 40° eğimli stereo kamera) bizzat hesaplayacak kadar donanım-yazılım bütünlüğüne hâkimsin.

### B. Üç Boyutlu Operasyonel Çeşitlilik: Hava (Air), Kara (Ground), Sualtı (Sea)
Projelerin tek bir platforma sıkışmış değil:
1. **Hava (UAV / İHA):** GNSS-denied (GPS olmayan) ortamlarda 4D LiDAR + Stereo Kamera ile gerçek zamanlı 3B haritalama, Fast-LIO2 + RTAB-Map hibrit SLAM ve VisDrone2019 üzerinde gerçek zamanlı hedef tespiti / görsel konum kestirimi.
2. **Sualtı (AUV):** Auvtech (YTÜ, İZÜ, Haliç Üni. 15 kişilik ekip) çatısı altında kaplumbağa biyomimetiğinden esinlenen 6 iticili sualtı aracında sualtı görüntü iyileştirme, YOLO ile şamandıra/ipucu tespiti ve IMU + basınç + LiDAR füzyonuyla kapalı çevrim derinlik/intikal kontrolü (2024 KTR Türkiye 4.'lüğü, 2026 İleri Kategori hedefi).
3. **Kara (UGV / Otonom Araç):** TÜBİTAK 2209-A Proje Yürütücüsü olarak Seviye 4 otonom kargo dağıtım aracının kamera-LiDAR-radar füzyonu, trafik işareti/yaya tespiti ve dinamik rota optimizasyonu.

### C. Kısıtlı Kaynaklarda (Edge AI) Algoritmik Optimizasyon ve Hibrit Mimari Tasarımı
Hazır bir kütüphaneyi olduğu gibi kullanmak yerine, **hız ve doğruluk (latency vs. accuracy) ödünleşimini** mühendislik metrikleriyle yönetiyorsun:
- İHA projesinde gerçek zamanlı uçuş için hafif **Fast-LIO2**'yi frontend olarak koşturup, biriken kayma (drift) hatasını **RTAB-Map** loop closure ile çevrimdışı (backend) düzeltmen ve hıza göre ızgara boyutu büyüyen **Dinamik Voxel Filtresi (20 cm³)** tasarlaman.
- Havacılıkta Yapay Zekâ projesinde **RT-DETR**'ın yüksek doğruluğunu ama düşük hızını tespit edip, gerçek zamanlı (7.5+ FPS eşiği) gereksinimi sağlamak için **YOLOv12n + RT-DETR ağırlıklı hibrit çıkarım (inference) kodu** yazman.
- Stereo kameranın derinlik hatası uzakta arttığı için sadece **5 metre ve altında** devreye girmesini sağlayan çift kademeli sensör füzyonu kurgulaman.

### D. Matematiksel ve Geometrik Problem Çözme Yaklaşımı
Algoritmaları ezbere değil, geometrik ve matematiksel temelleriyle kurguluyorsun:
- **Lawnmower (Çim Biçme Makinesi) Faz 1 Tarama İyileştirmesi:** 15 m irtifada 13.23 m tarama yarıçapıyla şeritler arasında SLAM loop closure için kritik olan **6.46 m örtüşmeyi (overlap)** hesaplaman; sabit 20 m yerine kısa kenara göre uyarlanabilir şerit üretimi yapman; karekök yavaşlama (square-root deceleration) ile sarsıntısız frenleme ve rota kaybında **A* kurtarma + dinamik şerit budama (pruning)** eklemen.

### E. Veri Mühendisliği Disiplini ve Araştırma Metodolojisi
Hem görüntü işleme hem de NLP projelerinde "veri kalitesi ve deneysel dürüstlük" ön planda:
- İZÜ kampüsünde bizzat **2.501 görsel / 2.633 etiketli** 5 sınıflı atık veri seti toplayıp elle etiketlemen ve beyaz zemin üzerindeki siyah yazılı etiketlerin "kâğıt" sanılması gibi hata modlarını (failure modes) şeffafça analiz etmen.
- House M.D. Türkçe NLP projesinde **7.281 cümle, 8 sezon, 146 bölüm** verisinde veri sızıntısını (data leakage) önlemek için **bölüm bazlı tabakalı ayrım (episode-based stratified split)** yapman ve 200+ gürültülü etiketi 9-11 temiz sınıfa indirgemen.

---

## 3. Proje Portföyünün Stratejik Sınıflandırması ve Teknik Derinlik Tablosu

Web sitesinde projelerin düz bir liste yerine, senin uzmanlık dikeylerini yansıtan **3 Ana Mühendislik Kümesi** altında (veya filtrelenebilir olarak) sunulmalıdır:

| # | Proje Adı | Rol & Kurumsal Bağlam | Küme / Alan | Öne Çıkan Mühendislik Metrikleri & Katkı |
| :- | :--- | :--- | :--- | :--- |
| **01** | **Otonom İHA: 3B Haritalama, Bölütleme ve Konumlandırma** | Bitirme Projesi · **2× BAP-100 Destekli** | Otonom Sistemler & SLAM | • **Hibrit SLAM:** Fast-LIO2 (Frontend) + RTAB-Map (Backend) + PCA izdüşümüyle eşzamanlı 2B/3B SLAM<br>• **Yol Planlama:** 4 Fazlı mimari; 15m irtifa, 6.46m şerit örtüşmesi, Bug-esinli engelden kaçınma (20m ön, 4m güvenlik payı), A* kurtarma<br>• **Donanım:** Pixhawk 6X, RPi 5 + AI HAT, Unitree L1 4D LiDAR (13° eğim), 22cm bazlı 40° eğimli Stereo Kamera (≤5m aktif) |
| **02** | **İnsansız Sualtı Aracı (AUV)** | **Teknofest 2026 İleri Kategori** · Auvtech (15 Kişilik Üniversitelerarası Ekip) | Otonom Sistemler & GNC | • **Başarı:** 2024 KTR Aşaması **Türkiye 4.'lüğü**<br>• **Tasarım:** Kaplumbağa biyomimetikli 6 iticili simetrik yerleşim<br>• **Algılama & GNC:** Sualtı renk/netlik iyileştirme, YOLO ile şamandıra/boru hattı ipucu tespiti, IMU + Basınç + LiDAR füzyonuyla kapalı çevrim derinlik kontrolü ve kare kapı 3B hizalama |
| **03** | **Otonom Kargo Dağıtım Aracı Simülasyonu** | **TÜBİTAK 2209-A Proje Yürütücüsü** (Danışman: Dr. Öğr. Üyesi Zahra Elmi) | Otonom Sistemler & Simülasyon | • **Seviye 4 Otonomi:** ROS & Gazebo'da kentsel trafik simülasyonu<br>• **Füzyon & Planlama:** Kamera-LiDAR-Radar füzyonu, YOLO+OpenCV ile trafik işareti/yaya tespiti, trafik yoğunluğuna duyarlı en kısa yol ve şifreli hazne teslimatı |
| **04** | **Havacılıkta Yapay Zekâ: Nesne Tespiti & Konum Kestirimi** | **Teknofest** · Havacılıkta Yapay Zekâ Yarışması | Bilgisayarlı Görü & İHA | • **Benchmark:** VisDrone2019-VID (90° kamera, 15-25m irtifa) üzerinde A100 GPU ile YOLOv5/v8/v11/v12, YOLOS, Faster R-CNN kıyaslaması<br>• **Hibrit Çözüm:** En iyi hız/mAP dengesi **YOLOv12n**'de; doğruluk için **YOLO + RT-DETR ağırlıklı hibrit çıkarım**<br>• **Görev 2:** GPS olmadan kamera parametreleriyle 3B hedef konum kestirimi ve güvenli düz iniş alanı tespiti |
| **05** | **MonTech — Giyilebilir Akıllı Mont** | **Teknofest** İnsanlık Yararına Teknoloji & **BAP-100** · **Patent Başvurusu** | Gömülü Sistemler & IoT | • **Otonom Koruma:** Vücut ısısı `< 35 °C` olduğunda 5V ısıtıcı pedleri devreye alan düşük güçlü Arduino Pro Mini sistemi<br>• **Sensör & Enerji:** MAX30102 nabız, NTC termistör, GPS NEO-6M, HC-06 Bluetooth mobil uygulama (canlı harita), **12 esnek güneş paneli** (sırt 6, göğüs 4, kol 2) |
| **06** | **Atık Türü Tanıma ve Geri Dönüşüm Asistanı** | Akademik Ar-Ge Projesi (İZÜ Kampüs Veri Seti) | Bilgisayarlı Görü & Mobil | • **Özgün Veri Seti:** İZÜ kampüsünde toplanıp elle etiketlenen **2.501 görsel / 2.633 etiket** (5 sınıf: cam, kâğıt, metal, plastik, organik)<br>• **Model:** YOLOv8n vs YOLOv11m vs YOLOv11s/m-seg; **YOLOv11m-seg ile %85 mAP** ve kutu rengi yönlendirmeli mobil uygulama |
| **07** | **Çok Görevli Türkçe NLP Pipeline (House M.D.)** | Doğal Dil İşleme Ar-Ge Projesi | Yapay Zekâ & Türkçe NLP | • **Kapsam:** 8 sezon, 146 bölüm, **7.281 Türkçe diyalog cümlesi**, 6 görev (Niyet, Duygu, Alaycılık, Teşhis Aşaması, Konuşmacı, 3.000+ terimli Tıbbi NER - 13.239 varlık)<br>• **Sonuç:** Sızıntısız (episode-based) bölünmüş veride **Türkçe BERT (`dbmdz/bert-turkish`)** tüm görevlerde Klasik ML'i geçti (Niyet **+21.8%**, Duygu **+19.6%**, Konuşmacı **+16.0%**); Gradio canlı demo |
| **08** | **The Narrator's Game** | **Re:Zero Studio** · Bağımsız Oyun Geliştirme | Oyun AI & 3B Sistemler | • **Geliştirme:** Portal ve The Stanley Parable esintili 3B hikâye/korku/parkur oyunu (Unity / C#)<br>• **Katkı:** 2. Bölüm canavarlarının 3B modellenmesi ve davranış yapay zekâsı (Game AI), karakter mekanikleri (Kronos Enjektörü, Sıçrayış Serumu), web sitesi ve pazarlama |

---

## 4. Hedef Kariyer Alanları ve Sektörel Konumlandırma

Bu portfolyo seni aşağıdaki **4 kritik pozisyon** için çok güçlü bir aday yapıyor:

1. **Otonom Sistemler / Robotik Yazılım Mühendisi (Robotics & Autonomy Engineer):**
   - *Odak:* ROS 2, SLAM (Fast-LIO2, RTAB-Map, LIO-SAM), Sensör Füzyonu (Kalman, LiDAR-Kamera-IMU), Yol Planlama (Nav2, A*, Coverage Planning).
2. **İnsansız Sistemler Güdüm, Navigasyon ve Kontrol / Algılama Mühendisi (UAV / AUV / UGV Perception & GNC Engineer):**
   - *Odak:* PX4, Pixhawk 6X, Cube Orange, GNSS-denied navigasyon, sualtı ve hava araçları için kapalı çevrim kontrol ve çevre algılama.
3. **Bilgisayarlı Görü ve Gömülü Yapay Zekâ Mühendisi (Computer Vision & Edge AI Engineer):**
   - *Odak:* Gerçek zamanlı nesne tespiti ve bölütleme (YOLOv5–v12, RT-DETR, Instance Segmentation), Raspberry Pi 5 + AI HAT / Jetson / STM32 üzerinde uçta çıkarım (edge inference).
4. **Yapay Zekâ / Makine Öğrenmesi Ar-Ge Mühendisi (AI / ML Research Engineer):**
   - *Odak:* PyTorch, Transformer mimarileri (ViT, RT-DETR, BERT), özel veri seti kürasyonu ve çok görevli (multi-task) öğrenme hatları.

---

## 5. Web Sitesinin Yansıtması Gereken Kişisel Marka ve Tasarım Kimliği

Mevcut web siten şu an standart bir "yazılımcı kartviziti" görünümünde. Oysa senin profilin **"Ground Control Station (Yer Kontrol İstasyonu) & Otonom Sistemler Telemetri Laboratuvarı"** hissiyatı vermeli:

- **Tasarım Konsepti:** *"Precision Autonomy & Tactical Engineering"* — Koyu uzay/derin deniz laciverti (`#070B14`) zemin üzerinde, PDF portfolyondaki kurumsal altın/kehribar (`#D99B26` / `#F59E0B`) vurguları ve LiDAR/SLAM telemetrisini çağrıştıran siber camgöbeği (`#38BDF8`) aksanları.
- **Görsel Dil:** Sadece düz metin kartları değil; PDF'lerinde zaten var olan **kampüs camisi 3B nokta bulutu/mesh çıktısı, İHA CAD montaj çizimleri, 6S-4P batarya ve 22 cm stereo kamera donanım fotoğrafları, AUV sualtı prototipi ve akış şemaları, YOLOv12n mAP/FPS grafikleri, MonTech prototipi ve mobil uygulama ekranları** doğrudan web sitesinin içinde interaktif olarak yer almalı.
- **Anlatım Dili:** "Şunu kullandım" diyen pasif bir dil yerine; **"Problem → Mühendislik Mimarisi → Benim Katkım → Kantitatif Sonuç (mAP, FPS, örtüşme metresi, Δ doğruluk)"** yapısında kanıta dayalı (evidence-based) mühendislik anlatımı.
