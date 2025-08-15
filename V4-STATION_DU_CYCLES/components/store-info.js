export function createStoreInfo() {
  return `
    <section id="store-info" class="container mx-auto px-4 py-16">
      <h2 class="section-title text-center">معلومات المتجر</h2>

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <!-- بطاقات تواصل -->
        <div class="space-y-4">
          <div class="info-card">
            <div class="info-icon bg-purple-600/20 text-purple-300"><i class="fa-solid fa-phone"></i></div>
            <div><h4 class="font-bold">الهاتف</h4><p class="text-gray-300">+212 608 788 782</p></div>
          </div>
          <div class="info-card">
            <div class="info-icon bg-green-600/20 text-green-300"><i class="fa-brands fa-whatsapp"></i></div>
            <div><h4 class="font-bold">WhatsApp</h4><p class="text-gray-300">+212 608 788 782</p></div>
          </div>
          <div class="info-card">
            <div class="info-icon bg-blue-600/20 text-blue-300"><i class="fa-solid fa-envelope"></i></div>
            <div><h4 class="font-bold">Email</h4><p class="text-gray-300">aouladamarsamir@gmail.com</p></div>
          </div>
          <div class="info-card">
            <div class="info-icon bg-rose-600/20 text-rose-300"><i class="fa-solid fa-location-dot"></i></div>
            <div><h4 class="font-bold">العنوان</h4><p class="text-gray-300" id="store-address-text">365, Bd El Fida, Casablanca</p></div>
          </div>
        </div>

        <!-- عنوان واضح + خريطة -->
        <div class="space-y-3">
          <div class="glass rounded-2xl p-4">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-map-location-dot text-pink-300 text-xl mt-1"></i>
              <div>
                <h4 class="font-bold mb-1">الموقع على الخريطة</h4>
                <p class="text-gray-300 text-sm" id="map-address-small">365, Bd El Fida, Casablanca</p>
              </div>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden glass p-2">
            <div id="map" style="height:420px; border-radius: 14px;"></div>
          </div>
        </div>
      </div>
    </section>
  `
}
