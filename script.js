// --- 1. GECE MODU AYARLARI ---
const temaButonu = document.getElementById('tema-butonu');
const mevcutTema = localStorage.getItem('tema');

// Hafızada karanlık mod varsa sayfaya uygula
if (mevcutTema === 'dark') {
    document.body.classList.add('dark-mode');
    temaButonu.textContent = '☀️';
} else {
    temaButonu.textContent = '🌙';
}

// Butona tıklanınca temayı değiştir ve hafızaya kaydet
if (temaButonu) {
    temaButonu.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
            temaButonu.textContent = '☀️';
        } else {
            localStorage.setItem('tema', 'light');
            temaButonu.textContent = '🌙';
        }
    });
}

// --- 2. DİL SEÇENEKLERİ (5 DİL) ---
const diller = {
    tr: {
        ana_sayfa: "Ana Sayfa",
        hakkimizda: "Hakkımızda",
        uygulamalar: "Uygulamalar",
        iletisim: "İletişim",
        baslik: "Baran Core'a Hoş Geldiniz",
        alt_baslik: "Web, Mobil ve Oyun Geliştirme Merkezi",
        metin1: "Baran Core; yenilikçi web siteleri, dinamik mobil uygulamalar ve sürükleyici mobil oyunlar geliştirmek amacıyla kurulan bir yazılım stüdyosudur. Fikirleri modern kod mimarisi ile dijital gerçekliğe dönüştürüyoruz.",
        incele_buton: "Projeleri İncele",
        uyg_baslik: "Geliştirdiğimiz Uygulamalar",
        uyg1_isim: "TaskMaster Pro",
        uyg1_aciklama: "Günlük işlerinizi organize etmenizi sağlayan, minimalist ve yüksek performanslı görev yöneticisi.",
        uyg2_isim: "FitnessX",
        uyg2_aciklama: "Kişisel spor hedeflerinizi takip edebileceğiniz, detaylı analizler sunan sağlık asistanı.",
        uyg3_isim: "GeoTracker",
        uyg3_aciklama: "Anlık konum takibi ve rota optimizasyonu sunan gelişmiş harita servisi.",
        uzmanlik_baslik: "Uzmanlık Alanlarımız",
        web_baslik: "Web Tasarım & Geliştirme",
        web_aciklama: "Modern, hızlı ve mobil uyumlu kurumsal web siteleri, e-ticaret çözümleri ve kişisel portfolyolar.",
        mobil_baslik: "Mobil Uygulama",
        mobil_aciklama: "iOS ve Android platformları için kullanıcı odaklı, akıcı ve yüksek performanslı uygulama çözümleri.",
        oyun_baslik: "Oyun Geliştirme",
        oyun_aciklama: "Eğlenceyi teknolojiyle birleştiren, sürükleyici strateji ve mobil oyun projeleri.",
        yazilim_baslik: "Yazılım Geliştirme",
        yazilim_aciklama: "İhtiyaca özel yazılım mimarileri, veri tabanı çözümleri ve ölçeklenebilir arka plan sistemleri.",
        hak_baslik: "Biz Kimiz?",
        hak_metin1: "Baran Core, dijital dünyada iz bırakmak ve değer yaratmak amacıyla kurulan yenilikçi bir yazılım geliştirme stüdyosudur. Temel odak noktamız; modern teknolojiler ile kullanıcı dostu çözümler geliştirmektir.",
        hak_metin2: "Ürettiğimiz her projede performansı, güvenliği ve kusursuz kullanıcı deneyimini merkeze alıyoruz. Sadece kod yazmıyor; fikirlerinizi sağlam bir altyapı ile dijital ürünlere dönüştürüyoruz.",
        iletisim_baslik: "Bize Ulaşın",
        telefon: "Telefon:",
        eposta: "E-Posta:"
    },
    en: {
        ana_sayfa: "Home",
        hakkimizda: "About Us",
        uygulamalar: "Apps",
        iletisim: "Contact",
        baslik: "Welcome to Baran Core",
        alt_baslik: "Web, Mobile and Game Development Hub",
        metin1: "Baran Core is a software studio founded to develop innovative websites, dynamic mobile applications, and immersive mobile games. We turn ideas into digital reality with modern code architecture.",
        incele_buton: "View Projects",
        uyg_baslik: "Our Applications",
        uyg1_isim: "TaskMaster Pro",
        uyg1_aciklama: "A minimalist and high-performance task manager to organize your daily routines.",
        uyg2_isim: "FitnessX",
        uyg2_aciklama: "A health assistant offering detailed analytics to track your personal fitness goals.",
        uyg3_isim: "GeoTracker",
        uyg3_aciklama: "Advanced map service offering real-time location tracking and route optimization.",
        uzmanlik_baslik: "Our Expertise",
        web_baslik: "Web Design & Development",
        web_aciklama: "Modern, fast and mobile-friendly corporate websites, e-commerce solutions and personal portfolios.",
        mobil_baslik: "Mobile Applications",
        mobil_aciklama: "User-focused, smooth and high-performance app solutions for iOS and Android platforms.",
        oyun_baslik: "Game Development",
        oyun_aciklama: "Immersive strategy and mobile game projects that combine entertainment with technology.",
        yazilim_baslik: "Software Development",
        yazilim_aciklama: "Custom software architectures, database solutions and scalable backend systems.",
        hak_baslik: "Who Are We?",
        hak_metin1: "Baran Core is an innovative software development studio founded to leave a mark and create value in the digital world. Our main focus is developing user-friendly solutions with modern technologies.",
        hak_metin2: "In every project we produce, we center on performance, security, and a flawless user experience. We don't just write code; we transform your ideas into digital products with a solid infrastructure.",
        iletisim_baslik: "Contact Us",
        telefon: "Phone:",
        eposta: "Email:"
    },
    de: {
        ana_sayfa: "Startseite",
        hakkimizda: "Über Uns",
        uygulamalar: "Apps",
        iletisim: "Kontakt",
        baslik: "Willkommen bei Baran Core",
        alt_baslik: "Web-, Mobil- und Spieleentwicklungszentrum",
        metin1: "Baran Core ist ein Softwarestudio, das gegründet wurde, um innovative Websites, dynamische mobile Apps und fesselnde mobile Spiele zu entwickeln. Wir verwandeln Ideen mit moderner Code-Architektur in digitale Realität.",
        incele_buton: "Projekte Ansehen",
        uyg_baslik: "Unsere Anwendungen",
        uyg1_isim: "TaskMaster Pro",
        uyg1_aciklama: "Ein minimalistischer und leistungsstarker Task-Manager für Ihre täglichen Aufgaben.",
        uyg2_isim: "FitnessX",
        uyg2_aciklama: "Ein Gesundheitsassistent mit detaillierten Analysen für Ihre Fitnessziele.",
        uyg3_isim: "GeoTracker",
        uyg3_aciklama: "Erweiterter Kartendienst mit Echtzeit-Standortverfolgung und Routenoptimierung.",
        uzmanlik_baslik: "Unsere Fachgebiete",
        web_baslik: "Webdesign & Entwicklung",
        web_aciklama: "Moderne, schnelle und mobilfreundliche Unternehmenswebsites, E-Commerce-Lösungen und Portfolios.",
        mobil_baslik: "Mobile Anwendungen",
        mobil_aciklama: "Benutzerfreundliche, flüssige und leistungsstarke App-Lösungen für iOS und Android.",
        oyun_baslik: "Spieleentwicklung",
        oyun_aciklama: "Fesselnde Strategie- und Mobilspiele, die Unterhaltung mit Technologie verbinden.",
        yazilim_baslik: "Softwareentwicklung",
        yazilim_aciklama: "Benutzerdefinierte Softwarearchitekturen, Datenbankenlösungen und skalierbare Backend-Systeme.",
        hak_baslik: "Wer Sind Wir?",
        hak_metin1: "Baran Core ist ein innovatives Softwareentwicklungsstudio, das gegründet wurde, um in der digitalen Welt Werte zu schaffen. Unser Hauptaugenmerk liegt auf der Entwicklung benutzerfreundlicher Lösungen mit modernen Technologien.",
        hak_metin2: "Bei jedem Projekt stehen Leistung, Sicherheit und ein makelloses Benutzererlebnis im Mittelpunkt. Wir verwandeln Ideen mit einer soliden Infrastruktur in digitale Produkte.",
        iletisim_baslik: "Kontaktieren Sie Uns",
        telefon: "Telefon:",
        eposta: "E-Mail:"
    },
    ru: {
        ana_sayfa: "Главная",
        hakkimizda: "О нас",
        uygulamalar: "Приложения",
        iletisim: "Контакты",
        baslik: "Добро пожаловать в Baran Core",
        alt_baslik: "Центр веб-, мобильной и игровой разработки",
        metin1: "Baran Core — это студия, созданная для разработки инновационных веб-сайтов, мобильных приложений и увлекательных мобильных игр. Мы превращаем идеи в цифровую реальность с помощью современной архитектуры кода.",
        incele_buton: "Просмотр проектов",
        uyg_baslik: "Наши приложения",
        uyg1_isim: "TaskMaster Pro",
        uyg1_aciklama: "Минималистичный менеджер задач высокой производительности для организации ваших повседневных дел.",
        uyg2_isim: "FitnessX",
        uyg2_aciklama: "Помощник по здоровью, предлагающий подробную аналитику для отслеживания ваших целей.",
        uyg3_isim: "GeoTracker",
        uyg3_aciklama: "Продвинутый картографический сервис с отслеживанием в реальном времени и оптимизацией маршрутов.",
        uzmanlik_baslik: "Наша Специализация",
        web_baslik: "Веб-дизайн и разработка",
        web_aciklama: "Современные, быстрые и мобильные корпоративные веб-сайты, решения для электронной коммерции и портфолио.",
        mobil_baslik: "Мобильные приложения",
        mobil_aciklama: "Ориентированные на пользователя, плавные и высокопроизводительные приложения для iOS и Android.",
        oyun_baslik: "Разработка игр",
        oyun_aciklama: "Захватывающие стратегические и мобильные игры, объединяющие развлечение с технологией.",
        yazilim_baslik: "Разработка программного обеспечения",
        yazilim_aciklama: "Пользовательские архитектуры программного обеспечения, решения баз данных и масштабируемые серверные системы.",
        hak_baslik: "Кто мы?",
        hak_metin1: "Baran Core — это инновационная студия разработки программного обеспечения, созданная для создания ценности в цифровом мире. Наш основной фокус — разработка удобных для пользователя решений с современными технологиями.",
        hak_metin2: "В каждом проекте мы ориентируемся на производительность, безопасность и безупречный пользовательский опыт. Мы не просто пишем код; мы превращаем ваши идеи в цифровые продукты с надежной инфраструктурой.",
        iletisim_baslik: "Свяжитесь с нами",
        telefon: "Телефон:",
        eposta: "Эл. почта:"
    },
    zh: {
        ana_sayfa: "首页",
        hakkimizda: "关于我们",
        uygulamalar: "应用",
        iletisim: "联系方式",
        baslik: "欢迎来到 Baran Core",
        alt_baslik: "网页、移动端和游戏开发中心",
        metin1: "Baran Core 是一家致力于开发创新网站、动态移动应用和沉浸式移动游戏的软件工作室。我们用现代代码架构将想法转化为数字现实。",
        incele_buton: "查看项目",
        uyg_baslik: "我们的应用",
        uyg1_isim: "TaskMaster Pro",
        uyg1_aciklama: "一个极简且高性能的任务管理器，用于组织您的日常任务。",
        uyg2_isim: "FitnessX",
        uyg2_aciklama: "提供详细分析以跟踪您的个人健身目标的健康助手。",
        uyg3_isim: "GeoTracker",
        uyg3_aciklama: "提供实时位置跟踪和路线优化的高级地图服务。",
        uzmanlik_baslik: "我们的专业领域",
        web_baslik: "网页设计与开发",
        web_aciklama: "现代、快速和移动友好的公司网站、电子商务解决方案和个人作品集。",
        mobil_baslik: "移动应用",
        mobil_aciklama: "以用户为中心、流畅且高性能的 iOS 和 Android 应用解决方案。",
        oyun_baslik: "游戏开发",
        oyun_aciklama: "将娱乐与技术相结合的引人入胜的策略和移动游戏。",
        yazilim_baslik: "软件开发",
        yazilim_aciklama: "定制软件架构、数据库解决方案和可扩展的后端系统。",
        hak_baslik: "我们是谁？",
        hak_metin1: "Baran Core 是一家创新的软件开发工作室，致力于在数字世界中创造价值。我们的主要重点是用现代技术开发用户友好的解决方案。",
        hak_metin2: "在每个项目中，我们都以性能、安全性和无瑕疵的用户体验为中心。我们不仅仅是编写代码；我们用坚实的基础设施将您的想法转化为数字产品。",
        iletisim_baslik: "联系我们",
        telefon: "电话:",
        eposta: "电子邮件:"
    }
};

const dilSecici = document.getElementById('dil-secici');
const mevcutDil = localStorage.getItem('dil') || 'tr';

if (dilSecici) {
    // Sayfa yüklendiğinde hafızadaki dili seçili yap
    dilSecici.value = mevcutDil;

    function diliGuncelle(secilenDil) {
        const kelimeler = diller[secilenDil];
        // HTML içindeki data-dil etiketi olan tüm yazıları bul ve değiştir
        document.querySelectorAll('[data-dil]').forEach(element => {
            const anahtar = element.getAttribute('data-dil');
            if (kelimeler[anahtar]) {
                element.textContent = kelimeler[anahtar];
            }
        });
    }

    // İlk yüklemede dili uygula
    diliGuncelle(mevcutDil);

    // Liste değiştiğinde dili değiştir ve hafızaya al
    dilSecici.addEventListener('change', (e) => {
        const yeniDil = e.target.value;
        localStorage.setItem('dil', yeniDil);
        diliGuncelle(yeniDil);
    });
}

// --- 3. AÇILIŞ VE GEÇİŞ ANİMASYONU (LOADER) KONTROLÜ ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Sayfa yüklendikten yarım saniye (500ms) sonra animasyon kaybolur
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }, 500);
    }
});

// Sayfalar arası geçişlerde logoyu tekrar göstermek için
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        const hedef = this.getAttribute('href');
        // Eğer link yeni sekmede açılmıyorsa ve '#' (sayfa içi bağlantı) değilse
        if (this.getAttribute('target') !== '_blank' && !hedef.startsWith('#') && hedef !== '') {
            e.preventDefault(); // Varsayılan anında geçişi engelle
            const loader = document.getElementById('loader');
            if (loader) {
                // Loader'ı tekrar görünür yap
                loader.style.visibility = 'visible';
                loader.style.opacity = '1';
                // Biraz bekleyip (animasyonu gösterip) yeni sayfaya git
                setTimeout(() => {
                    window.location.href = hedef;
                }, 500);
            } else {
                window.location.href = hedef;
            }
        }
    });
});

// Hamburger Menü İşlevi
document.getElementById('hamburger-btn').addEventListener('click', () => {
    document.getElementById('mobil-menu').classList.toggle('active');
});
