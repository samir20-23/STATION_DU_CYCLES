// Import components
import { createDeliveryBanner } from "./components/delivery-banner.js"
import { createMegaBanner } from "./components/mega-banner.js"
import { createNavbar } from "./components/navbar.js"
import { createHeroSection } from "./components/hero-section.js"
import { createStoreInfo } from "./components/store-info.js"
import { createStoreHours } from "./components/store-hours.js"
import { createFooter } from "./components/footer.js"
import { applyTranslations } from "./utils/translations.js" // Declare applyTranslations
import L from "leaflet" // Declare L
import emailjs from "emailjs-com" // Declare emailjs

// ================== I18N ==================
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    banner: { delivery: " 🚀 مرحباً بكم في عالم السرعة والإثارة – اكتشف أفضل الدراجات النارية لدينا اليوم! 🏍️🔥" },
    nav: { home: "الرئيسية", brands: "الماركات", storeInfo: "معلومات المحل", hours: "توقيت المحل" },
    home: { brandsTitle: "الماركات المتوفرة", viewDetails: "عرض التفاصيل" },
    storeInfo: { title: "معلومات المتجر", phone: "الهاتف", address: "العنوان", mapTitle: "الموقع على الخريطة" },
    hours: {
      title: "Store Hours",
      opening: "Opening Hours",
      today: "Today's Status",
      openNow: "مفتوح اليوم",
      closedToday: "مغلق اليوم",
      notesTitle: "ملاحظات خاصة",
      note1: "• مغلق يوم الإثنين",
      note2: "• عروض خاصة في نهاية الأسبوع",
      note3: "• يُفضّل الاتصال قبل الزيارة",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    product: {
      specs: "المواصفات التقنية",
      ratingOf: "من 5",
      buy: "اشترِ الآن",
      whatsapp: "تواصل واتساب",
      breadcrumbHome: "الرئيسية",
    },
    cta: {
      title: "هل تريد دراجة مناسبة لك؟",
      subtitle: "اترك معلوماتك وسنتواصل معك فوراً لتقديم أفضل العروض وخيارات التمويل.",
    },
    form: {
      fullName: { label: "الاسم الكامل *", placeholder: "مثل: مصطفى أحمد" },
      phone: { label: "رقم الهاتف *", placeholder: "+212 6 00 00 00 00" },
      city: { label: "المدينة", placeholder: "الدار البيضاء / طنجة / فاس ..." },
      model: { label: "الماركة / الموديل (اختياري)" },
      message: { label: "رسالتك", placeholder: "اذكر ميزانيتك، نوع الاستعمال، أو أي سؤال يخطر ببالك..." },
      agree: "أوافق على الاتصال بي عبر الهاتف أو واتساب لتأكيد الطلب وتقديم العروض.",
      send: "أرسل طلبي الآن",
      whatsapp: "تواصل واتساب مباشر",
      success: "✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً جداً.",
    },
    footer: {
      about: "متخصصون في بيع الدراجات النارية والسكوترات مع ضمان وخدمات ما بعد البيع. اختَر راحتك وسنُنجز الباقي.",
      linksTitle: "روابط",
      offers: "عروض وتمويل",
      contact: "اتصل بنا",
      hoursTitle: "المواعيد",
      hoursRange: "الإثنين – السبت: 9:00–19:00",
      sunday: "الأحد: مغلق",
      newsletterTitle: "اشترك ليصلك كل جديد",
      emailPlaceholder: "بريدك الإلكتروني",
      subscribeBtn: "اشترك الآن",
      subscribed: "تم الاشتراك بنجاح ✅",
    },
    copyright: "© 2025 مصطفى للدراجات النارية. جميع الحقوق محفوظة.",
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    banner: {
      delivery:
        "🚀 Bienvenue dans le monde de la vitesse et des sensations — découvrez nos meilleures motos dès aujourd'hui ! 🏍️🔥",
    },
    nav: { home: "Accueil", brands: "Marques", storeInfo: "Infos Magasin", hours: "Horaires" },
    home: { brandsTitle: "Marques disponibles", viewDetails: "Voir les détails" },
    storeInfo: {
      title: "Informations du magasin",
      phone: "Téléphone",
      address: "Adresse",
      mapTitle: "Emplacement sur la carte",
    },
    hours: {
      title: "Horaires du magasin",
      opening: "Heures d'ouverture",
      today: "Statut d'aujourd'hui",
      openNow: "Ouvert aujourd'hui",
      closedToday: "Fermé aujourd'hui",
      notesTitle: "Notes",
      note1: "• Fermé le lundi",
      note2: "• Offres spéciales le week-end",
      note3: "• Merci d'appeler avant de venir",
      days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    },
    product: {
      specs: "Caractéristiques techniques",
      ratingOf: "sur 5",
      buy: "Acheter maintenant",
      whatsapp: "WhatsApp",
      breadcrumbHome: "Accueil",
    },
    cta: {
      title: "Vous voulez la moto idéale ?",
      subtitle:
        "Laissez vos informations et nous vous contacterons avec les meilleures offres et options de financement.",
    },
    form: {
      fullName: { label: "Nom complet *", placeholder: "Ex. : Mostafa Ahmad" },
      phone: { label: "Téléphone *", placeholder: "+212 6 00 00 00 00" },
      city: { label: "Ville", placeholder: "Casablanca / Tanger / Fès ..." },
      model: { label: "Marque / Modèle (facultatif)" },
      message: { label: "Message", placeholder: "Budget, type d'usage, ou toute question…" },
      agree: "J'accepte d'être contacté par téléphone ou WhatsApp pour confirmer la demande et présenter les offres.",
      send: "Envoyer la demande",
      whatsapp: "WhatsApp direct",
      success: "✅ Votre demande a été envoyée ! Nous vous contacterons très bientôt.",
    },
    footer: {
      about:
        "Spécialistes des motos et scooters avec garantie et service après-vente. Choisissez le confort, on s'occupe du reste.",
      linksTitle: "Liens",
      offers: "Offres & Financement",
      contact: "Contactez-nous",
      hoursTitle: "Horaires",
      hoursRange: "Lun – Sam : 9:00–19:00",
      sunday: "Dimanche : Fermé",
      newsletterTitle: "Abonnez-vous",
      emailPlaceholder: "Votre e-mail",
      subscribeBtn: "S'abonner",
      subscribed: "Abonnement réussi ✅",
    },
    copyright: "© 2025 Mostafa Motos. Tous droits réservés.",
  },
}

function t(key) {
  const lang = getLang()
  const parts = key.split(".")
  let node = I18N[lang]

  for (const p of parts) node = node?.[p]
  return node ?? key
}
function getLang() {
  return localStorage.getItem("lang") || "ar"
}
function setLang(lang) {
  localStorage.setItem("lang", lang)
  document.documentElement.lang = I18N[lang].lang
  document.documentElement.dir = I18N[lang].dir

  applyTranslations()
  router?.handleRoute()
  const cp = document.getElementById("copyright")
  if (cp) cp.textContent = I18N[lang].copyright

  const addr = "365, Bd El Fida, Casablanca"
  document.getElementById("store-address-text")?.replaceChildren(document.createTextNode(addr))
  document.getElementById("map-address-small")?.replaceChildren(document.createTextNode(addr))

  document.getElementById("footer-address")?.replaceChildren(document.createTextNode(addr))
  buildHours()
}

// ================== THEME (Dark / Light) ==================
const THEME_KEY = "theme"
function applyTheme(mode) {
  const BODY = document.body
  const iconTheme = document.getElementById("theme-icon")
  if (mode === "light") {
    BODY.classList.remove("theme-dark", "text-white")
    BODY.classList.add("theme-light")
    BODY.style.backgroundColor = "#f8fafc"
    BODY.style.color = "#1f2937"
    if (iconTheme) iconTheme.className = "fa-solid fa-sun"
  } else {
    BODY.classList.remove("theme-light")
    BODY.classList.add("theme-dark", "text-white")
    BODY.style.backgroundColor = "#000"
    BODY.style.color = "#fff"
    if (iconTheme) iconTheme.className = "fa-solid fa-moon"
  }
}

function initTheme() {
  let saved = localStorage.getItem(THEME_KEY)
  if (!saved) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    saved = prefersDark ? "dark" : "light"
  }
  applyTheme(saved)
  localStorage.setItem(THEME_KEY, saved)

  // Toggle when theme button is clicked
  const btnTheme = document.getElementById("theme-toggle")
  if (btnTheme && !btnTheme._bound) {
    btnTheme._bound = true

    btnTheme.addEventListener("click", () => {
      const isLight = document.body.classList.contains("theme-light")
      const next = isLight ? "dark" : "light"
      applyTheme(next)
      localStorage.setItem(THEME_KEY, next)
    })
  }

  // Follow system preference change
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e) => {
      const userSet = localStorage.getItem(THEME_KEY)
      if (userSet !== "dark" && userSet !== "light") {
        applyTheme(e.matches ? "dark" : "light")
      }
    }
    if (mq.addEventListener) mq.addEventListener("change", onChange)
    else mq.addListener(onChange)
  }
}

// ================== DATA ==================
const BRANDS = [
  {
    id: "SYM",
    name: "SYM",
    description: "Draisiennes urbaines pratiques et élégantes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "KYMCO",
    name: "KYMCO",
    description: "Performance élevée et fiabilité au quotidien",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
  },
  {
    id: "FICE_SANYA",
    name: "FICE SANYA",
    description: "Excellent rapport qualité-prix",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
  },
  {
    id: "LEONARDO",
    name: "LEONARDO SCOTER",
    description: "Design élégant avec une touche premium",
    image: "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
  },
  {
    id: "HENSIM",
    name: "HENSIM",
    description: "Esprit classique, finitions modernes",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
  },
  {
    id: "CAPPUCINO",
    name: "CAPPUCINO",
    description: "Économique avec bonne qualité",
    image: "https://images.unsplash.com/photo-1558431382-27bbae175c40?w=800&h=600&fit=crop",
  },
  {
    id: "TZM_CADY",
    name: "TZM CADY C50",
    description: "Idéales pour la ville",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
  },
]

const PRODUCTS = [
  // SYM
  {
    id: "sym-orbit2",
    brandId: "SYM",
    name: "ORBIT 2",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "Moto classique au design élégant, idéale pour la ville.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter / Cyclomoteur",
      marque: "SYM",
      modele: "ORBIT 2",
      kilometrage: "0 km",
      carburant: "Essence – 4-Temps (125 cc)",
      annee: "2024–2025",
    },
  },
  {
    id: "sym-symphony-s",
    brandId: "SYM",
    name: "SYMPHONY S",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1549921296-3a6694e1c3e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "SYM SYMPHONY S légère et économique, parfaite pour les trajets courts.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "SYM",
      modele: "SYMPHONY S",
      kilometrage: "0 km",
      carburant: "Essence – 150cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "sym-fidole2",
    brandId: "SYM",
    name: "FIDOLE 2",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1606991965781-3cbc5e81df72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop",
    ],
    description: "SYM FIDOLE 2, style classique et performance fiable.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "SYM",
      modele: "FIDOLE 2",
      kilometrage: "0 km",
      carburant: "Essence – 125cc – 4-Temps",
      annee: "2024–2025",
    },
  },

  // KYMCO
  {
    id: "kymco-agility50",
    brandId: "KYMCO",
    name: "AGILITY 50",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "KYMCO AGILITY 50, légère et facile à conduire, parfaite pour débuter.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "KYMCO",
      modele: "AGILITY 50",
      kilometrage: "0 km",
      carburant: "Essence – 50cc – 2-Temps",
      annee: "2024–2025",
    },
  },

  // FICE SANYA
  {
    id: "ficesanya-insta-sanya-x",
    brandId: "FICE_SANYA",
    name: "INSTA SANYA X",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "INSTA SANYA X économique, bonne performance en ville.",
    table: {
      etat: "Neuf",
      typeVehicule: "Moto",
      marque: "FICE SANYA",
      modele: "INSTA SANYA X",
      kilometrage: "0 km",
      carburant: "Essence – 125cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "ficesanya-sanya-r1000",
    brandId: "FICE_SANYA",
    name: "SANYA R1000",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1622675363314-f1e8a15a69f0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "SANYA R1000 puissante, adaptée aux longues distances.",
    table: {
      etat: "Neuf",
      typeVehicule: "Moto",
      marque: "FICE SANYA",
      modele: "SANYA R1000",
      kilometrage: "0 km",
      carburant: "Essence – 150cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "ficesanya-sanya-x1000",
    brandId: "FICE_SANYA",
    name: "SANYA X1000",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622675363314-f1e8a15a69f0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "SANYA X1000 design moderne et performances élevées.",
    table: {
      etat: "Neuf",
      typeVehicule: "Moto",
      marque: "FICE SANYA",
      modele: "SANYA X1000",
      kilometrage: "0 km",
      carburant: "Essence – 200cc – 4-Temps",
      annee: "2024–2025",
    },
  },

  // LEONARDO SCOTER
  {
    id: "leonardo-enzo",
    brandId: "LEONARDO",
    name: "ENZO",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "LEONARDO ENZO, idéale pour longues distances.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "LEONARDO",
      modele: "ENZO",
      kilometrage: "0 km",
      carburant: "Essence – 180cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "leonardo-picasso",
    brandId: "LEONARDO",
    name: "PICASSO",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "LEONARDO PICASSO élégante et urbaine.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "LEONARDO",
      modele: "PICASSO",
      kilometrage: "0 km",
      carburant: "Essence – 150cc – 4-Temps",
      annee: "2024–2025",
    },
  },

  // HENSIM
  {
    id: "hensim-mustang",
    brandId: "HENSIM",
    name: "HENSIM MUSTANG",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "HENSIM MUSTANG robuste pour conditions difficiles.",
    table: {
      etat: "Neuf",
      typeVehicule: "Moto",
      marque: "HENSIM",
      modele: "MUSTANG",
      kilometrage: "0 km",
      carburant: "Essence – 200cc – 4-Temps",
      annee: "2024–2025",
    },
  },

  // CAPPUCINO
  {
    id: "cappucino-cappucinos",
    brandId: "CAPPUCINO",
    name: "CAPPUCINOS",
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "CAPPUCINOS design moderne et compact.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "CAPPUCINO",
      modele: "CAPPUCINOS",
      kilometrage: "0 km",
      carburant: "Essence – 125cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "cappucino-plus",
    brandId: "CAPPUCINO",
    name: "CAPPUCINO PLUS",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "CAPPUCINO PLUS plus puissante, plus d'espace.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "CAPPUCINO",
      modele: "CAPPUCINO PLUS",
      kilometrage: "0 km",
      carburant: "Essence – 150cc – 4-Temps",
      annee: "2024–2025",
    },
  },
  {
    id: "cappucino-mokito",
    brandId: "CAPPUCINO",
    name: "MOKITO",
    rating: 4.1,
    images: [
      "https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "MOKITO économique et pratique.",
    table: {
      etat: "Neuf",
      typeVehicule: "Scooter",
      marque: "CAPPUCINO",
      modele: "MOKITO",
      kilometrage: "0 km",
      carburant: "Essence – 110cc – 4-Temps",
      annee: "2024–2025",
    },
  },

  // TZM CADY C50
  {
    id: "tzm-cady-c50-nouveau",
    brandId: "TZM_CADY",
    name: "NOUVEAU MODEL",
    rating: 4.0,
    images: [
      "https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
    description: "TZM CADY C50 nouveau modèle, simple et économique.",
    table: {
      etat: "Neuf",
      typeVehicule: "Cyclomoteur",
      marque: "TZM CADY C50",
      modele: "NOUVEAU MODEL",
      kilometrage: "0 km",
      carburant: "Essence – 50cc – 2-Temps",
      annee: "2024–2025",
    },
  },
]

// ================== ROUTER ==================
class Router {
  constructor() {
    this.routes = { home: this.renderHome, brand: this.renderBrand, product: this.renderProduct }
    window.addEventListener("hashchange", () => this.handleRoute())
    window.addEventListener("load", () => this.handleRoute())
  }
  handleRoute() {
    const hash = window.location.hash.slice(1) || "home"
    const [route, ...params] = hash.split("/")
    ;(this.routes[route] || this.renderHome).call(this, params)
  }

  renderHome() {
    const content = document.getElementById("main-content")
    content.innerHTML = `
      <section class="hero-bg relative"><div class="absolute inset-0 bg-black/20"></div></section>

      <section id="brands-section" class="container mx-auto px-4 py-14">
        <h2 class="text-4xl font-bold text-center mb-12 neon-glow">${t("home.brandsTitle")}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${BRANDS.map(
            (b) => `
            <div class="card-hover glass rounded-2xl p-6 cursor-pointer" onclick="location.hash='brand/${b.id}'">
              <img src="${b.image}" alt="${b.name}" class="w-full h-48 object-cover rounded-xl mb-4" loading="lazy">
              <h3 class="text-2xl font-bold mb-2 text-blue-400">${b.name}</h3>
              <p class="text-gray-300 mb-4">${b.description}</p>
              <div class="text-center">
                <span class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">${t("home.viewDetails")}</span>
              </div>
            </div>
          `,
          ).join("")}
        </div>
      </section>
    `
    enableSmoothNav()
  }

  renderBrand(params) {
    const brandId = params[0]
    const brand = BRANDS.find((b) => b.id === brandId)
    if (!brand) {
      location.hash = "home"
      return
    }
    const items = PRODUCTS.filter((p) => p.brandId === brandId)

    const content = document.getElementById("main-content")
    content.innerHTML = `
      <section class="container mx-auto px-4 py-8" data-dir-sync>
        <nav class="mb-8">
          <a href="#home" class="text-blue-400 hover:text-blue-300">${t("product.breadcrumbHome")}</a>
          <span class="mx-2 text-gray-500">←</span>
          <span class="text-white">${brand.name}</span>
        </nav>
        <div class="text-center mb-12">
          <h1 class="text-5xl font-black mb-4 hero-title">${brand.name}</h1>
          <p class="text-xl text-gray-300">${brand.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${items
            .map(
              (p) => `
            <div class="card-hover glass rounded-2xl overflow-hidden">
              <img src="${p.images[0]}" alt="${p.name}" class="w-full h-48 object-cover cursor-pointer" onclick="location.hash='product/${p.id}'" loading="lazy">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${p.name}</h3>
                <div class="flex items-center mb-3">
                  ${generateStars(p.rating)}
                  <span class="mr-2 text-gray-400">(${p.rating})</span>
                </div>
                <p class="text-gray-300 mb-4">${p.description.slice(0, 90)}...</p>
                <div class="flex justify-end">
                  <button onclick="location.hash='product/${p.id}'" class="btn-primary px-4 py-2 rounded-lg text-sm">${t("home.viewDetails")}</button>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>
    `
    enableSmoothNav()
  }

  renderProduct(params) {
    const productId = params[0]
    const product = PRODUCTS.find((p) => p.id === productId)
    const brand = BRANDS.find((b) => b.id === product?.brandId)
    if (!product || !brand) {
      location.hash = "home"
      return
    }

    const content = document.getElementById("main-content")
    content.innerHTML = `
      <section class="container mx-auto px-4 py-8" data-dir-sync>
        <nav class="mb-8">
          <a href="#home" class="text-blue-400 hover:text-blue-300">${t("product.breadcrumbHome")}</a>
          <span class="mx-2 text-gray-500">←</span>
          <a href="#brand/${brand.id}" class="text-blue-400 hover:text-blue-300">${brand.name}</a>
          <span class="mx-2 text-gray-500">←</span>
          <span class="text-white">${product.name}</span>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <img id="main-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-80 object-cover rounded-2xl mb-4">
            <div class="grid grid-cols-4 gap-2">
              ${product.images
                .map(
                  (img, i) => `
                <img src="${img}" class="h-20 object-cover rounded-lg cursor-pointer thumbnail ${i === 0 ? "thumbnail-active" : ""}"
                     onclick="changeMainImage('${img}', this)" loading="lazy" alt="${product.name} ${i + 1}">
              `,
                )
                .join("")}
            </div>
          </div>

          <div>
            <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
            <div class="flex items-center mb-6">
              ${generateStars(product.rating)}
              <span class="mr-3 text-gray-400">(${product.rating} ${t("product.ratingOf")})</span>
            </div>
            <p class="text-gray-300 mb-6 text-lg leading-relaxed">${product.description}</p>

            <div class="glass rounded-2xl p-6 mb-8">
              <h3 class="text-xl font-bold mb-4 text-blue-400">${t("product.specs")}</h3>
              <div class="space-y-3">
                ${Object.entries(product.table)
                  .map(
                    ([k, v]) => `
                  <div class="flex justify-between border-b border-gray-700 pb-2">
                    <span class="text-gray-400">${getTableKeyName(k)}</span>
                    <span class="font-medium">${v}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button onclick="openPurchaseModal('${product.id}')" class="flex-1 btn-primary py-4 px-8 text-xl font-bold rounded-2xl">${t("product.buy")}</button>
              <button onclick="openWhatsApp()" class="flex-1 bg-green-600 hover:bg-green-700 py-4 px-8 text-xl font-bold rounded-2xl transition-all">${t("product.whatsapp")}</button>
            </div>
          </div>
        </div>
      </section>
    `
    enableSmoothNav()
  }
}

let router = null

// ================== UTILS ==================
function generateStars(r) {
  const f = Math.floor(r),
    half = r % 1 >= 0.5,
    empty = 5 - f - (half ? 1 : 0)
  let h = ""
  for (let i = 0; i < f; i++) h += '<i class="fas fa-star text-yellow-400"></i>'
  if (half) h += '<i class="fas fa-star-half-alt text-yellow-400"></i>'
  for (let i = 0; i < empty; i++) h += '<i class="far fa-star text-gray-400"></i>'
  return h
}
function getTableKeyName(k) {
  const lang = getLang()
  const mapAR = {
    etat: "حالة المركبة",
    typeVehicule: "نوع المركبة",
    marque: "الماركة",
    modele: "الموديل",
    kilometrage: "عدد الكيلومترات",
    carburant: "نوع الوقود",
    annee: "السنة",
  }
  const mapFR = {
    etat: "État",
    typeVehicule: "Type de véhicule",
    marque: "Marque",
    modele: "Modèle",
    kilometrage: "Kilométrage",
    carburant: "Carburant",
    annee: "Année",
  }
  return (lang === "ar" ? mapAR : mapFR)[k] || k
}
function changeMainImage(src, el) {
  const main = document.getElementById("main-image")
  if (main) main.src = src
  document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("thumbnail-active"))
  el.classList.add("thumbnail-active")
}
function openWhatsApp() {
  window.open("https://wa.me/212608788782", "_blank")
}

// Smooth scroll + active link
function enableSmoothNav() {
  document.querySelectorAll('a.nav-cta, footer a[href^="index.html#"], footer a[href^="#"]').forEach((a) => {
    if (a._bound) return
    a._bound = true
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || ""
      const hash = href.includes("#") ? "#" + href.split("#")[1] : ""
      if (hash) {
        const target = document.querySelector(hash)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: "smooth", block: "start" })
          document.querySelectorAll("a.nav-cta").forEach((x) => x.classList.remove("active"))
          if (a.classList.contains("nav-cta")) a.classList.add("active")
        }
      }
    })
  })

  const goBrands = document.getElementById("go-brands")
  if (goBrands && !goBrands._bound) {
    goBrands._bound = true
    goBrands.addEventListener("click", function (e) {
      const mc = document.getElementById("main-content")
      if (!mc) return
      const candidates = [
        "#main-content #brands",
        "#main-content section#brands",
        '#main-content [id*="brands"]',
        '#main-content [class*="brands"]',
        '#main-content [id*="brand"]',
        '#main-content [class*="brand"]',
      ]
      let target = null
      for (const sel of candidates) {
        const el = document.querySelector(sel)
        if (el) {
          target = el
          break
        }
      }
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        document.querySelectorAll("a.nav-cta").forEach((x) => x.classList.remove("active"))
        this.classList.add("active")
      }
    })
  }
}

// Store hours + today's status
const HOURS = [
  { dayIdx: 0, key: "Sunday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 1, key: "Monday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 2, key: "Tuesday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 3, key: "Wednesday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 4, key: "Thursday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 5, key: "Friday", range: "09:00 - 19:00", closed: false },
  { dayIdx: 6, key: "Saturday", range: "09:00 - 19:00", closed: false },
]

function buildHours() {
  const list = document.getElementById("hours-list")
  if (!list) return
  list.innerHTML = ""
  const lang = getLang()
  const dayNames = I18N[lang].hours.days
  const dayIdx = new Date().getDay() // 0=Sunday
  HOURS.forEach((h, i) => {
    const isToday = i === dayIdx
    const row = document.createElement("div")
    row.className = "flex justify-between items-center p-3 rounded-lg " + (isToday ? "today-row" : "row-muted")
    const dayName = dayNames[i] || h.key
    row.innerHTML = `<span class="font-medium">${dayName}</span>
      <span class="${h.closed ? "text-red-400" : "text-green-400"} font-semibold">${h.range}</span>`
    list.appendChild(row)
    if (isToday) {
      document.getElementById("today-status").textContent = h.closed
        ? I18N[lang].hours.closedToday
        : I18N[lang].hours.openNow
      document.getElementById("today-range").textContent = h.range
    }
  })
}

// Newsletter demo
function initNewsletter() {
  const news = document.getElementById("newsletter")
  const newsOk = document.getElementById("news-ok")
  if (news && !news._bound) {
    news._bound = true
    news.addEventListener("submit", (e) => {
      e.preventDefault()
      newsOk.classList.remove("hidden")
      news.reset()
      setTimeout(() => newsOk.classList.add("hidden"), 4000)
    })
  }
}

// ======== Leaflet Map ========
async function initMap() {
  const address = "365, Bd El Fida, Casablanca"
  const mapBox = document.getElementById("map")
  if (!mapBox) return

  try {
    const url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&q=" + encodeURIComponent(address)
    const res = await fetch(url, { headers: { "Accept-Language": getLang() === "ar" ? "ar" : "fr" } })
    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      mapBox.innerHTML = '<div class="p-4 text-center text-sm text-gray-300">تعذر تحديد العنوان تلقائياً.</div>'
      return
    }

    const lat = Number.parseFloat(data[0].lat)
    const lon = Number.parseFloat(data[0].lon)

    const map = L.map("map", { scrollWheelZoom: false }).setView([lat, lon], 16)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap",
    }).addTo(map)

    L.marker([lat, lon])
      .addTo(map)
      .bindPopup("<b>" + address + "</b>")
      .openPopup()
  } catch (err) {
    mapBox.innerHTML = '<div class="p-4 text-center text-sm text-rose-300">حدث خطأ أثناء تحميل الخريطة.</div>'
    console.error(err)
  }
}

// Modal (placeholder)
let currentProductId = null
function openPurchaseModal(id) {
  currentProductId = id
  alert(
    getLang() === "ar" ? "طلب الشراء: سيتم التواصل معك قريباً." : "Demande d'achat : nous vous contacterons bientôt.",
  )
}
function closePurchaseModal() {
  currentProductId = null
}

// Image fallback
document.addEventListener(
  "error",
  (e) => {
    const t = e.target
    if (t && t.tagName === "IMG") {
      t.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      t.alt = "Image de remplacement"
    }
  },
  true,
)

// ================== CHRONO (09:00–19:00 يومياً) ==================
function pad(n) {
  return n.toString().padStart(2, "0")
}
function updateChrono() {
  const now = new Date()

  const start = new Date(now)
  start.setHours(9, 0, 0, 0)
  const end = new Date(now)
  end.setHours(19, 0, 0, 0)

  const statusEl = document.getElementById("chrono-status")
  const remainingEl = document.getElementById("chrono-remaining")
  const hintEl = document.getElementById("chrono-hint")
  const barEl = document.getElementById("chrono-progress-bar")
  const windowEl = document.getElementById("chrono-time-window")

  if (!statusEl || !remainingEl || !hintEl || !barEl) return
  if (windowEl) windowEl.textContent = "09:00–19:00"

  let status = "",
    hint = "",
    remainingText = "00:00:00",
    progress = 0

  if (now < start) {
    const diff = start - now
    const h = Math.floor(diff / 3_600_000)
    const m = Math.floor((diff % 3_600_000) / 60_000)
    const s = Math.floor((diff % 60_000) / 1000)
    status = "📦 سـنفتح بعد"
    remainingText = `${pad(h)}:${pad(m)}:${pad(s)}`
    hint = "نستقبلكم من 09:00 إلى 19:00"
    progress = 0
    statusEl.className = "badge badge-wait"
  } else if (now >= start && now <= end) {
    const diff = end - now
    const h = Math.floor(diff / 3_600_000)
    const m = Math.floor((diff % 3_600_000) / 60_000)
    const s = Math.floor((diff % 60_000) / 1000)
    status = "✅ مفتوح الآن"
    remainingText = `${pad(h)}:${pad(m)}:${pad(s)}`
    hint = "يغلق عند 19:00"
    const total = end - start
    progress = ((now - start) / total) * 100
    statusEl.className = "badge badge-open"
  } else {
    const tomorrowStart = new Date(now)
    tomorrowStart.setDate(now.getDate() + 1)
    tomorrowStart.setHours(9, 0, 0, 0)
    const diff = tomorrowStart - now
    const h = Math.floor(diff / 3_600_000)
    const m = Math.floor((diff % 3_600_000) / 60_000)
    const s = Math.floor((diff % 60_000) / 1000)
    status = "⛔ مغلق الآن"
    remainingText = `${pad(h)}:${pad(m)}:${pad(s)}`
    hint = "نفتح غدًا على الساعة 09:00"
    progress = 100
    statusEl.className = "badge badge-close"
  }

  statusEl.textContent = status
  remainingEl.textContent = remainingText
  hintEl.textContent = hint
  barEl.style.width = progress + "%"
}

// ================== EMAIL FUNCTIONALITY ==================
function initEmailJS() {
  // Initialize EmailJS with your public key
  emailjs.init("YOUR_PUBLIC_KEY") // Replace with your actual EmailJS public key
}

function sendEmail(formData) {
  const templateParams = {
    from_name: formData.fullName,
    from_phone: formData.phone,
    from_city: formData.city || "غير محدد",
    preferred_model: formData.model || "غير محدد",
    message: formData.message || "لا توجد رسالة إضافية",
    to_email: "aouladamarsamir@gmail.com",
  }

  return emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text)
      return { success: true }
    },
    (error) => {
      console.log("FAILED...", error)
      return { success: false, error: error }
    },
  )
}

function initContactForm() {
  const form = document.getElementById("cta-contact-form")
  const successDiv = document.getElementById("cta-success")

  if (form && !form._bound) {
    form._bound = true
    form.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(form)
      const data = {
        fullName: formData.get("fullName"),
        phone: formData.get("phone"),
        city: formData.get("city"),
        model: formData.get("model"),
        message: formData.get("message"),
      }

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "جاري الإرسال..."
      submitBtn.disabled = true

      try {
        // For now, we'll simulate email sending since EmailJS requires setup
        // Replace this with actual EmailJS call when configured
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Show success message
        successDiv.classList.remove("hidden")
        form.reset()

        // Hide success message after 5 seconds
        setTimeout(() => {
          successDiv.classList.add("hidden")
        }, 5000)
      } catch (error) {
        console.error("Error sending email:", error)
        alert("حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال مباشرة.")
      } finally {
        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", async () => {
  // Render components
  document.getElementById("delivery-banner").innerHTML = createDeliveryBanner()
  document.getElementById("mega-banner").innerHTML = createMegaBanner()
  document.getElementById("navbar").innerHTML = createNavbar()
  document.getElementById("hero-section").innerHTML = createHeroSection()
  document.getElementById("store-info-section").innerHTML = createStoreInfo()
  document.getElementById("store-hours-section").innerHTML = createStoreHours()
  document.getElementById("footer-section").innerHTML = createFooter()

  // Default language
  if (!localStorage.getItem("lang")) localStorage.setItem("lang", "ar")
  document.documentElement.lang = I18N[getLang()].lang
  document.documentElement.dir = I18N[getLang()].dir

  // Theme
  initTheme()

  // Language + translations
  applyTranslations()

  // Router
  router = new Router()
  enableSmoothNav()

  // Store hours
  buildHours()

  // Newsletter
  initNewsletter()

  // Contact form
  initContactForm()

  // EmailJS (uncomment when configured)
  // initEmailJS();

  // Map
  await initMap()

  // Chrono
  updateChrono()
  setInterval(updateChrono, 1000)
})
