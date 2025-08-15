// ================== I18N ==================
let translations = {}; // Will store loaded translations
const LANG_CONFIG = {
  ar: { dir: 'rtl', lang: 'ar' },
  fr: { dir: 'ltr', lang: 'fr' },
  en: { dir: 'ltr', lang: 'en' }
};

async function loadTranslations(lang) {
  try {
    const response = await fetch(`/public/multi/${lang}.json`);
    if (!response.ok) throw new Error(`Could not load ${lang} translations.`);
    translations = await response.json();
    return true;
  } catch (error) {
    console.error("Error loading translations:", error);
    translations = {}; // Fallback to empty or default
    return false;
  }
}

function t(key) {
  return translations[key] ?? key;
}

function getLang() { return localStorage.getItem('lang') || 'ar'; }

async function setLang(lang) {
  localStorage.setItem('lang', lang);
  const config = LANG_CONFIG[lang] || LANG_CONFIG.ar; // Fallback to Arabic
  document.documentElement.lang = config.lang;
  document.documentElement.dir = config.dir;

  await loadTranslations(lang); // Load new translations

  document.getElementById('lang-current')?.replaceChildren(document.createTextNode(lang.toUpperCase()));
  applyTranslations();
  router?.handleRoute();
  // Specific elements that are not data-i18n but need translation
  const cp = document.getElementById('copyright');
  if (cp) cp.textContent = t('copyright');
  const addr = '365, Bd El Fida, Casablanca'; // Address is static, not translated
  document.getElementById('store-address-text')?.replaceChildren(document.createTextNode(addr));
  document.getElementById('map-address-small')?.replaceChildren(document.createTextNode(addr));
  document.getElementById('footer-address')?.replaceChildren(document.createTextNode(addr));
  buildHours();
}

// يطبّق الترجمة على الع��اصر ذات data-i18n و placeholders
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val != null) el.setAttribute('placeholder', val);
  });
  const currentLang = getLang();
  const dir = LANG_CONFIG[currentLang]?.dir || 'rtl'; // Default to rtl for safety
  document.querySelectorAll('[data-dir-sync]').forEach(el => el.setAttribute('dir', dir));
}

// ================== THEME (Dark / Light) ==================
const THEME_KEY = 'theme'; // 'dark' | 'light'
function applyTheme(mode){
  const BODY = document.body;
  const iconTheme = document.getElementById('theme-icon');
  if(mode === 'light'){
    BODY.classList.remove('theme-dark','text-white');
    BODY.classList.add('theme-light');
    if(iconTheme) iconTheme.className = 'fa-solid fa-sun';
  }else{
    BODY.classList.remove('theme-light');
    BODY.classList.add('theme-dark','text-white');
    if(iconTheme) iconTheme.className = 'fa-solid fa-moon';
  }
}
function initTheme(){
  let saved = localStorage.getItem(THEME_KEY);
  if(!saved){
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    saved = prefersDark ? 'dark' : 'light';
  }
  applyTheme(saved);
  localStorage.setItem(THEME_KEY, saved);

  // تبديل عند الضغط على زر الثيم
  const btnTheme = document.getElementById('theme-toggle');
  if(btnTheme && !btnTheme._bound){
    btnTheme._bound = true;
    btnTheme.addEventListener('click', ()=>{
      const isLight = document.body.classList.contains('theme-light');
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // متابعة تغيّر تفضيل النظام (إذا المستخدم ما اختارش يدوياً)
  if(window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = e=>{
      const userSet = localStorage.getItem(THEME_KEY);
      if(userSet !== 'dark' && userSet !== 'light'){
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    if(mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
  }
}

// ================== DATA ==================
const BRANDS = [
  { id: 'SYM',        name: 'SYM',        description: 'Draisiennes urbaines pratiques et élégantes', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop' },
  { id: 'KYMCO',      name: 'KYMCO',      description: 'Performance élevée et fiabilité au quotidien', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop' },
  { id: 'FICE_SANYA', name: 'FICE SANYA', description: 'Excellent rapport qualité-prix', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop' },
  { id: 'LEONARDO',   name: 'LEONARDO SCOTER', description: 'Design élégant avec une touche premium', image: 'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop' },
  { id: 'HENSIM',     name: 'HENSIM',     description: 'Esprit classique, finitions modernes', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop' },
  { id: 'CAPPUCINO',  name: 'CAPPUCINO',  description: 'Économique avec bonne qualité', image: 'https://images.unsplash.com/photo-1558431382-27bbae175c40?w=800&h=600&fit=crop' },
  { id: 'TZM_CADY',   name: 'TZM CADY C50', description: 'Idéales pour la ville', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop' }
];

const PRODUCTS = [
  // SYM
  { id:'sym-orbit2', brandId:'SYM', name:'ORBIT 2', rating:4.5, images:[
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'Moto classique au design élégant, idéale pour la ville.',
  table:{ etat:'Neuf', typeVehicule:'Scooter / Cyclomoteur', marque:'SYM', modele:'ORBIT 2', kilometrage:'0 km', carburant:'Essence – 4-Temps (125 cc)', annee:'2024–2025' } },
  { id:'sym-symphony-s', brandId:'SYM', name:'SYMPHONY S', rating:4.8, images:[
    'https://images.unsplash.com/photo-1549921296-3a6694e1c3e8?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'SYM SYMPHONY S légère et économique, parfaite pour les trajets courts.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'SYM', modele:'SYMPHONY S', kilometrage:'0 km', carburant:'Essence – 150cc – 4-Temps', annee:'2024–2025' } },
  { id:'sym-fidole2', brandId:'SYM', name:'FIDOLE 2', rating:4.6, images:[
    'https://images.unsplash.com/photo-1606991965781-3cbc5e81df72?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop'
  ],
  description:'SYM FIDOLE 2, style classique et performance fiable.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'SYM', modele:'FIDOLE 2', kilometrage:'0 km', carburant:'Essence – 125cc – 4-Temps', annee:'2024–2025' } },

  // KYMCO
  { id:'kymco-agility50', brandId:'KYMCO', name:'AGILITY 50', rating:4.4, images:[
    'https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'KYMCO AGILITY 50, légère et facile à conduire, parfaite pour débuter.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'KYMCO', modele:'AGILITY 50', kilometrage:'0 km', carburant:'Essence – 50cc – 2-Temps', annee:'2024–2025' } },

  // FICE SANYA
  { id:'ficesanya-insta-sanya-x', brandId:'FICE_SANYA', name:'INSTA SANYA X', rating:4.2, images:[
    'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'INSTA SANYA X économique, bonne performance en ville.',
  table:{ etat:'Neuf', typeVehicule:'Moto', marque:'FICE SANYA', modele:'INSTA SANYA X', kilometrage:'0 km', carburant:'Essence – 125cc – 4-Temps', annee:'2024–2025' } },
  { id:'ficesanya-sanya-r1000', brandId:'FICE_SANYA', name:'SANYA R1000', rating:4.3, images:[
    'https://images.unsplash.com/photo-1622675363314-f1e8a15a69f0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'SANYA R1000 puissante, adaptée aux longues distances.',
  table:{ etat:'Neuf', typeVehicule:'Moto', marque:'FICE SANYA', modele:'SANYA R1000', kilometrage:'0 km', carburant:'Essence – 150cc – 4-Temps', annee:'2024–2025' } },
  { id:'ficesanya-sanya-x1000', brandId:'FICE_SANYA', name:'SANYA X1000', rating:4.5, images:[
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1622675363314-f1e8a15a69f0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'SANYA X1000 design moderne et performances élevées.',
  table:{ etat:'Neuf', typeVehicule:'Moto', marque:'FICE SANYA', modele:'SANYA X1000', kilometrage:'0 km', carburant:'Essence – 200cc – 4-Temps', annee:'2024–2025' } },

  // LEONARDO SCOTER
  { id:'leonardo-enzo', brandId:'LEONARDO', name:'ENZO', rating:4.7, images:[
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'LEONARDO ENZO, idéale pour longues distances.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'LEONARDO', modele:'ENZO', kilometrage:'0 km', carburant:'Essence – 180cc – 4-Temps', annee:'2024–2025' } },
  { id:'leonardo-picasso', brandId:'LEONARDO', name:'PICASSO', rating:4.6, images:[
    'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'LEONARDO PICASSO élégante et urbaine.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'LEONARDO', modele:'PICASSO', kilometrage:'0 km', carburant:'Essence – 150cc – 4-Temps', annee:'2024–2025' } },

  // HENSIM
  { id:'hensim-mustang', brandId:'HENSIM', name:'HENSIM MUSTANG', rating:4.5, images:[
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'HENSIM MUSTANG robuste pour conditions difficiles.',
  table:{ etat:'Neuf', typeVehicule:'Moto', marque:'HENSIM', modele:'MUSTANG', kilometrage:'0 km', carburant:'Essence – 200cc – 4-Temps', annee:'2024–2025' } },

  // CAPPUCINO
  { id:'cappucino-cappucinos', brandId:'CAPPUCINO', name:'CAPPUCINOS', rating:4.2, images:[
    'https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'CAPPUCINOS design moderne et compact.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'CAPPUCINO', modele:'CAPPUCINOS', kilometrage:'0 km', carburant:'Essence – 125cc – 4-Temps', annee:'2024–2025' } },
  { id:'cappucino-plus', brandId:'CAPPUCINO', name:'CAPPUCINO PLUS', rating:4.3, images:[
    'https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'CAPPUCINO PLUS plus puissante, plus d’espace.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'CAPPUCINO', modele:'CAPPUCINO PLUS', kilometrage:'0 km', carburant:'Essence – 150cc – 4-Temps', annee:'2024–2025' } },
  { id:'cappucino-mokito', brandId:'CAPPUCINO', name:'MOKITO', rating:4.1, images:[
    'https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'MOKITO économique et pratique.',
  table:{ etat:'Neuf', typeVehicule:'Scooter', marque:'CAPPUCINO', modele:'MOKITO', kilometrage:'0 km', carburant:'Essence – 110cc – 4-Temps', annee:'2024–2025' } },

  // TZM CADY C50
  { id:'tzm-cady-c50-nouveau', brandId:'TZM_CADY', name:'NOUVEAU MODEL', rating:4.0, images:[
    'https://images.unsplash.com/photo-1558980394-0aaff773e1e5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  description:'TZM CADY C50 nouveau modèle, simple et économique.',
  table:{ etat:'Neuf', typeVehicule:'Cyclomoteur', marque:'TZM CADY C50', modele:'NOUVEAU MODEL', kilometrage:'0 km', carburant:'Essence – 50cc – 2-Temps', annee:'2024–2025' } },
];

// ================== ROUTER ==================
class Router{
  constructor(){
    this.routes = { home:this.renderHome, brand:this.renderBrand, product:this.renderProduct };
    window.addEventListener('hashchange',()=>this.handleRoute());
    window.addEventListener('load',()=>this.handleRoute());
  }
  handleRoute(){
    const hash = window.location.hash.slice(1) || 'home';
    const [route,...params] = hash.split('/');
    (this.routes[route] || this.renderHome).call(this, params);
  }

  renderHome(){
    const content = document.getElementById('main-content');
    content.innerHTML = `
      <section class="hero-bg relative"><div class="absolute inset-0 bg-black/20"></div></section>

      <section id="brands-section" class="container mx-auto px-4 py-14">
        <h2 class="text-4xl font-bold text-center mb-12 neon-glow">${t('home.brandsTitle')}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${BRANDS.map(b=>`
            <div class="card-hover glass rounded-2xl p-6 cursor-pointer" onclick="location.hash='brand/${b.id}'">
              <img src="${b.image}" alt="${b.name}" class="w-full h-48 object-cover rounded-xl mb-4" loading="lazy">
              <h3 class="text-2xl font-bold mb-2 text-blue-400">${b.name}</h3>
              <p class="text-gray-300 mb-4">${b.description}</p>
              <div class="text-center">
                <span class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">${t('home.viewDetails')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
    enableSmoothNav();
  }

  renderBrand(params){
    const brandId = params[0];
    const brand = BRANDS.find(b=>b.id===brandId);
    if(!brand){ location.hash='home'; return; }
    const items = PRODUCTS.filter(p=>p.brandId===brandId);

    const content = document.getElementById('main-content');
    content.innerHTML = `
      <section class="container mx-auto px-4 py-8" data-dir-sync>
        <nav class="mb-8">
          <a href="#home" class="text-blue-400 hover:text-blue-300">${t('product.breadcrumbHome')}</a>
          <span class="mx-2 text-gray-500">←</span>
          <span class="text-white">${brand.name}</span>
        </nav>
        <div class="text-center mb-12">
          <h1 class="text-5xl font-black mb-4 hero-title">${brand.name}</h1>
          <p class="text-xl text-gray-300">${brand.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${items.map(p=>`
            <div class="card-hover glass rounded-2xl overflow-hidden">
              <img src="${p.images[0]}" alt="${p.name}" class="w-full h-48 object-cover cursor-pointer" onclick="location.hash='product/${p.id}'" loading="lazy">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${p.name}</h3>
                <div class="flex items-center mb-3">
                  ${generateStars(p.rating)}
                  <span class="mr-2 text-gray-400">(${p.rating})</span>
                </div>
                <p class="text-gray-300 mb-4">${p.description.slice(0,90)}...</p>
                <div class="flex justify-end">
                  <button onclick="location.hash='product/${p.id}'" class="btn-primary px-4 py-2 rounded-lg text-sm">${t('home.viewDetails')}</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
    enableSmoothNav();
  }

  renderProduct(params){
    const productId = params[0];
    const product = PRODUCTS.find(p=>p.id===productId);
    const brand = BRANDS.find(b=>b.id===product?.brandId);
    if(!product || !brand){ location.hash='home'; return; }

    const content = document.getElementById('main-content');
    content.innerHTML = `
      <section class="container mx-auto px-4 py-8" data-dir-sync>
        <nav class="mb-8">
          <a href="#home" class="text-blue-400 hover:text-blue-300">${t('product.breadcrumbHome')}</a>
          <span class="mx-2 text-gray-500">←</span>
          <a href="#brand/${brand.id}" class="text-blue-400 hover:text-blue-300">${brand.name}</a>
          <span class="mx-2 text-gray-500">←</span>
          <span class="text-white">${product.name}</span>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <img id="main-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-80 object-cover rounded-2xl mb-4">
            <div class="grid grid-cols-4 gap-2">
              ${product.images.map((img,i)=>`
                <img src="${img}" class="h-20 object-cover rounded-lg cursor-pointer thumbnail ${i===0?'thumbnail-active':''}"
                     onclick="changeMainImage('${img}', this)" loading="lazy" alt="${product.name} ${i+1}">
              `).join('')}
            </div>
          </div>

          <div>
            <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
            <div class="flex items-center mb-6">
              ${generateStars(product.rating)}
              <span class="mr-3 text-gray-400">(${product.rating} ${t('product.ratingOf')})</span>
            </div>
            <p class="text-gray-300 mb-6 text-lg leading-relaxed">${product.description}</p>

            <div class="glass rounded-2xl p-6 mb-8">
              <h3 class="text-xl font-bold mb-4 text-blue-400">${t('product.specs')}</h3>
              <div class="space-y-3">
                ${Object.entries(product.table).map(([k,v])=>`
                  <div class="flex justify-between border-b border-gray-700 pb-2">
                    <span class="text-gray-400">${getTableKeyName(k)}</span>
                    <span class="font-medium">${v}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button onclick="openPurchaseModal('${product.id}')" class="flex-1 btn-primary py-4 px-8 text-xl font-bold rounded-2xl">${t('product.buy')}</button>
              <button onclick="openWhatsApp()" class="flex-1 bg-green-600 hover:bg-green-700 py-4 px-8 text-xl font-bold rounded-2xl transition-all">${t('product.whatsapp')}</button>
            </div>
          </div>
        </div>
      </section>
    `;
    enableSmoothNav();
  }
}

let router = null;

// ================== UTILS ==================
function generateStars(r){
  const f=Math.floor(r), half=r%1>=0.5, empty=5-f-(half?1:0);
  let h=''; for(let i=0;i<f;i++) h+='<i class="fas fa-star text-yellow-400"></i>';
  if(half) h+='<i class="fas fa-star-half-alt text-yellow-400"></i>';
  for(let i=0;i<empty;i++) h+='<i class="far fa-star text-gray-400"></i>';
  return h;
}
function getTableKeyName(k){
  const lang = getLang();
  const mapAR={ etat:'حالة المركبة', typeVehicule:'نوع المركبة', marque:'الماركة', modele:'الموديل', kilometrage:'عدد الكيلومترات', carburant:'نوع الوقود', annee:'السنة' };
  const mapFR={ etat:'État', typeVehicule:'Type de véhicule', marque:'Marque', modele:'Modèle', kilometrage:'Kilométrage', carburant:'Carburant', annee:'Année' };
  return (lang==='ar'?mapAR:mapFR)[k] || k;
}
function changeMainImage(src, el){
  const main=document.getElementById('main-image'); if(main) main.src=src;
  document.querySelectorAll('.thumbnail').forEach(t=>t.classList.remove('thumbnail-active'));
  el.classList.add('thumbnail-active');
}
function openWhatsApp(){ window.open('https://wa.me/212608788782','_blank'); }

// سكرول ناعم + تفعيل زر نشط
function enableSmoothNav(){
  document.querySelectorAll('a.nav-cta, footer a[href^="index.html#"], footer a[href^="#"]').forEach(a=>{
    if (a._bound) return; a._bound = true;
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href') || '';
      const hash = href.includes('#') ? ('#' + href.split('#')[1]) : '';
      if(hash){
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          document.querySelectorAll('a.nav-cta').forEach(x=>x.classList.remove('active'));
          if(a.classList.contains('nav-cta')) a.classList.add('active');
        }
      }
    });
  });

  const goBrands = document.getElementById('go-brands');
  if (goBrands && !goBrands._bound){
    goBrands._bound = true;
    goBrands.addEventListener('click', function (e) {
      const mc = document.getElementById('main-content');
      if (!mc) return;
      const candidates = [
        '#main-content #brands',
        '#main-content section#brands',
        '#main-content [id*="brands"]',
        '#main-content [class*="brands"]',
        '#main-content [id*="brand"]',
        '#main-content [class*="brand"]'
      ];
      let target = null;
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el) { target = el; break; }
      }
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        document.querySelectorAll('a.nav-cta').forEach(x=>x.classList.remove('active'));
        this.classList.add('active');
      }
    });
  }
}

// ساعات العمل + حالة اليوم
const HOURS = [
  {dayIdx:0, key:'Sunday',    range:'09:00 - 19:00', closed:false},
  {dayIdx:1, key:'Monday',    range:'09:00 - 19:00', closed:false},
  {dayIdx:2, key:'Tuesday',   range:'09:00 - 19:00', closed:false},
  {dayIdx:3, key:'Wednesday', range:'09:00 - 19:00', closed:false},
  {dayIdx:4, key:'Thursday',  range:'09:00 - 19:00', closed:false},
  {dayIdx:5, key:'Friday',    range:'09:00 - 19:00', closed:false},
  {dayIdx:6, key:'Saturday',  range:'09:00 - 19:00', closed:false},
];

function buildHours(){
  const list = document.getElementById('hours-list');
  if (!list) return;
  list.innerHTML = '';
  const lang = getLang();
  const dayNames = I18N[lang].hours.days;
  const dayIdx = new Date().getDay(); // 0=Sunday
  HOURS.forEach((h,i)=>{
    const isToday = i===dayIdx;
    const row = document.createElement('div');
    row.className = 'flex justify-between items-center p-3 rounded-lg ' + (isToday ? 'today-row' : 'row-muted');
    const dayName = dayNames[i] || h.key;
    row.innerHTML = `<span class="font-medium">${dayName}</span>
      <span class="${h.closed?'text-red-400':'text-green-400'} font-semibold">${h.range}</span>`;
    list.appendChild(row);
    if(isToday){
      document.getElementById('today-status').textContent = h.closed ? I18N[lang].hours.closedToday : I18N[lang].hours.openNow;
      document.getElementById('today-range').textContent = h.range;
    }
  });
}

// Newsletter demo
function initNewsletter(){
  const news = document.getElementById('newsletter');
  const newsOk = document.getElementById('news-ok');
  if (news && !news._bound) {
    news._bound = true;
    news.addEventListener('submit', e => {
      e.preventDefault();
      newsOk.classList.remove('hidden');
      news.reset();
      setTimeout(()=> newsOk.classList.add('hidden'), 4000);
    });
  }
}

// ======== خريطة Leaflet ========
async function initMap(){
  const address = '365, Bd El Fida, Casablanca';
  const mapBox = document.getElementById('map');
  if (!mapBox) return;

  try {
    const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&q=' + encodeURIComponent(address);
    const res = await fetch(url, { headers: { 'Accept-Language': getLang()==='ar'?'ar':'fr' }});
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      mapBox.innerHTML = '<div class="p-4 text-center text-sm text-gray-300">تعذر تحديد العنوان تلقائياً.</div>';
      return;
    }

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    const map = L.map('map', { scrollWheelZoom: false }).setView([lat, lon], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup('<b>' + address + '</b>').openPopup();

  } catch (err) {
    mapBox.innerHTML = '<div class="p-4 text-center text-sm text-rose-300">حدث خطأ أثناء تحميل الخريطة.</div>';
    console.error(err);
  }
}

// مبدّل اللغة (قائمة صغيرة)
function initLangMenu(){
  const btn = document.getElementById('lang-toggle');
  const menu = document.getElementById('lang-menu');
  if (!btn || !menu) return;
  if (!btn._bound){
    btn._bound = true;
    btn.addEventListener('click', ()=>{
      const open = !menu.classList.contains('hidden');
      if (open) { menu.classList.add('hidden'); btn.setAttribute('aria-expanded','false'); }
      else { menu.classList.remove('hidden'); btn.setAttribute('aria-expanded','true'); }
    });
    document.addEventListener('click', (e)=>{
      if (!menu.contains(e.target) && e.target!==btn && !btn.contains(e.target)){
        menu.classList.add('hidden'); btn.setAttribute('aria-expanded','false');
      }
    });
  }
  menu.querySelectorAll('[data-set-lang]').forEach(item=>{
    if (!item._bound){
      item._bound = true;
      item.addEventListener('click', ()=>{
        const lang = item.getAttribute('data-set-lang');
        setLang(lang);
        menu.classList.add('hidden'); btn.setAttribute('aria-expanded','false');
      });
    }
  });
}

// Modal (placeholder)
let currentProductId=null;
function openPurchaseModal(id){
  currentProductId=id;
  // For now, we'll just log and keep the alert replacement for the main form
  console.log(`Purchase request for product ID: ${id}`);
  alert(t('form.success')); // Keeping this alert for now as per original, but will be replaced by a proper modal later if needed.
}
function closePurchaseModal(){ currentProductId=null; }

// Function to display inline validation messages
function showValidationMessage(inputElement, message) {
  const validationMessageElement = document.querySelector(`[data-validation-for="${inputElement.id}"]`);
  if (validationMessageElement) {
    validationMessageElement.textContent = message;
    validationMessageElement.classList.remove('hidden');
  }
}

// Function to hide inline validation messages
function hideValidationMessage(inputElement) {
  const validationMessageElement = document.querySelector(`[data-validation-for="${inputElement.id}"]`);
  if (validationMessageElement) {
    validationMessageElement.classList.add('hidden');
    validationMessageElement.textContent = '';
  }
}

// Handle form submission with inline validation
function initContactForm() {
  const form = document.getElementById('cta-contact-form');
  const successMessage = document.getElementById('cta-success');

  if (form && !form._bound) {
    form._bound = true;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let formIsValid = true;

      // Clear previous messages
      form.querySelectorAll('[data-validation-for]').forEach(el => el.classList.add('hidden'));
      successMessage.classList.add('hidden');

      // Validate each required input
      form.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
        if (!input.checkValidity()) {
          formIsValid = false;
          showValidationMessage(input, input.validationMessage || t('form.validation.required'));
        } else {
          hideValidationMessage(input);
        }
      });

      // Specific validation for the 'agree' checkbox
      const agreeCheckbox = document.getElementById('agree');
      if (agreeCheckbox && !agreeCheckbox.checked) {
        formIsValid = false;
        showValidationMessage(agreeCheckbox, t('form.validation.agree'));
      } else if (agreeCheckbox) {
        hideValidationMessage(agreeCheckbox);
      }

      if (formIsValid) {
        // Simulate form submission
        console.log("Form submitted successfully!");
        successMessage.classList.remove('hidden');
        form.reset();
        // Hide success message after a few seconds
        setTimeout(() => successMessage.classList.add('hidden'), 5000);
      } else {
        console.log("Form has validation errors.");
      }
    });

    // Add input event listeners for real-time validation feedback
    form.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          hideValidationMessage(input);
        }
      });
      input.addEventListener('change', () => {
        if (input.checkValidity()) {
          hideValidationMessage(input);
        }
      });
    });
  }
}

// Newsletter demo (kept for now, but can be integrated into a more general form handler if needed)
function initNewsletter(){
  const news = document.getElementById('newsletter');
  const newsOk = document.getElementById('news-ok');
  if (news && !news._bound) {
    news._bound = true;
    news.addEventListener('submit', e => {
      e.preventDefault();
      newsOk.classList.remove('hidden');
      news.reset();
      setTimeout(()=> newsOk.classList.add('hidden'), 4000);
    });
  }
}
