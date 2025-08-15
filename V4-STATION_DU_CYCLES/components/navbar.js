export function createNavbar() {
  return `
    <nav class="sticky top-0 z-50 glass">
      <div class="container mx-auto px-4 py-4 grid grid-cols-3 items-center">
        <!-- يسار: الشعار -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <i class="fas fa-motorcycle text-white text-lg"></i>
          </div>
          <span class="text-xl font-bold neon-glow flex items-center gap-2">
            STATION DU CYCLES
            <span class="truck-badge"><i class="fa-solid fa-truck-fast"></i></span>
          </span>
        </div>

        <!-- وسط: أزرار الملاحة -->
        <div class="hidden md:flex justify-center gap-6">
          <a href="#home" class="nav-cta is-primary"><i class="fa-solid fa-house"></i><span>الرئيسية</span></a>
          <a href="#brands" class="nav-cta is-pink" id="go-brands"><i class="fa-solid fa-tags"></i><span>الماركات</span></a>
          <a href="#store-info" class="nav-cta is-blue"><i class="fa-solid fa-circle-info"></i><span>معلومات المحل</span></a>
          <a href="#store-hours" class="nav-cta is-green"><i class="fa-regular fa-clock"></i><span>توقيت المحل</span></a>
        </div>

        <!-- يمين: مبدّل الثيم + وسائل التواصل -->
        <div class="flex items-center justify-end gap-3">
          <!-- Social Media Buttons -->
          <a href="https://wa.me/212608788782" target="_blank" class="social-btn social-whatsapp" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com" target="_blank" class="social-btn social-facebook" title="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="social-btn social-instagram" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          
          <!-- Dark Mode Toggle -->
          <button id="theme-toggle" class="theme-toggle" title="الوضع الداكن" aria-label="Toggle theme">
            <i id="theme-icon" class="fa-solid fa-moon"></i>
          </button>
        </div>
      </div>
    </nav>
  `
}
