export function createFooter() {
  return `
    <footer class="relative mt-20">
      <section class="relative container mx-auto px-4">
        <div class="rounded-[28px] glass border border-white/10 overflow-hidden">
          <div class="p-6 sm:p-8 bg-gradient-to-r from-emerald-600/20 via-blue-600/10 to-purple-600/20 border-b border-white/10">
            <h2 class="text-3xl sm:text-4xl font-black hero-title text-center">هل تريد دراجة مناسبة لك؟</h2>
            <p class="text-center text-gray-300 mt-2">اترك معلوماتك وسنتواصل معك فوراً لتقديم أفضل العروض وخيارات التمويل.</p>
          </div>

          <div class="p-6 sm:p-10">
            <form id="cta-contact-form" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 text-sm text-gray-300">الاسم الكامل *</label>
                <input type="text" name="fullName" required class="w-full rounded-2xl px-4 py-3.5 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="مثل: مصطفى أحمد">
              </div>
              <div>
                <label class="block mb-2 text-sm text-gray-300">رقم الهاتف *</label>
                <input type="tel" name="phone" required pattern="[0-9+\\-\\s]{8,}" class="w-full rounded-2xl px-4 py-3.5 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="+212 6 00 00 00 00">
              </div>
              <div>
                <label class="block mb-2 text-sm text-gray-300">المدينة</label>
                <input type="text" name="city" class="w-full rounded-2xl px-4 py-3.5 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="الدار البيضاء / طنجة / فاس ...">
              </div>
              <div>
                <label class="block mb-2 text-sm text-gray-300">الماركة / الموديل (اختياري)</label>
                <input type="text" name="model" class="w-full rounded-2xl px-4 py-3.5 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="SYM / KYMCO / ENZO ...">
              </div>
              <div class="lg:col-span-2">
                <label class="block mb-2 text-sm text-gray-300">رسالتك</label>
                <textarea name="message" rows="4" class="w-full rounded-2xl px-4 py-3.5 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="اذكر ميزانيتك، نوع الاستعمال، أو أي سؤال يخطر ببالك..."></textarea>
              </div>
              <div class="lg:col-span-2 flex items-start gap-3">
                <input id="agree" type="checkbox" required class="mt-1 h-5 w-5 rounded border-white/20 bg-black/40">
                <label for="agree" class="text-gray-300 text-sm">أوافق على الاتصال بي عبر الهاتف أو واتساب لتأكيد الطلب وتقديم العروض.</label>
              </div>
              <div class="lg:col-span-2 flex flex-col sm:flex-row gap-4 mt-1">
                <button type="submit" class="flex-1 btn-primary py-3.5 rounded-2xl text-lg font-bold">أرسل طلبي الآن</button>
                <a href="https://wa.me/212608788782" target="_blank" class="flex-1 text-center py-3.5 rounded-2xl text-lg font-bold border border-emerald-400/40 hover:bg-emerald-500/10 transition">تواصل واتساب مباشر</a>
              </div>
              <div id="cta-success" class="hidden lg:col-span-2 p-4 rounded-xl border border-emerald-400/40 bg-emerald-600/15 text-emerald-300 text-center">✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً جداً.</div>
            </form>
          </div>
        </div>
      </section>

      <div class="mt-10 border-t border-white/10">
        <div class="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <i class="fas fa-motorcycle text-white text-lg"></i>
              </div>
              <span class="text-xl font-black neon-glow">STATION DU CYCLES</span>
            </div>
            <p class="text-gray-300 mt-4 leading-relaxed">متخصصون في بيع الدراجات النارية والسكوترات مع ضمان وخدمات ما بعد البيع. اختَر راحتك وسنُنجز الباقي.</p>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4 text-blue-400">روابط</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#home" class="hover:text-white">الرئيسية</a></li>
              <li><a href="#brands" class="hover:text-white">الماركات</a></li>
              <li><a href="#offers" class="hover:text-white">عروض وتمويل</a></li>
              <li><a href="#contact" class="hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4 text-purple-400">المواعيد</h4>
            <ul class="space-y-1 text-gray-300">
              <li>الإثنين – السبت: 9:00–19:00</li>
              <li>الأحد: مغلق</li>
              <li class="mt-2"><span>العنوان</span>: <span id="footer-address">365, Bd El Fida, Casablanca</span></li>
              <li><span>الهاتف</span>: +212 608 788 782</li>
            </ul>
            <div class="flex gap-3 mt-4">
              <a href="https://wa.me/212608788782" target="_blank" class="p-3 rounded-xl bg-emerald-600/20 border border-emerald-400/40 hover:bg-emerald-600/30"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="https://facebook.com" target="_blank" class="p-3 rounded-xl bg-blue-600/20 border border-blue-400/40 hover:bg-blue-600/30"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" class="p-3 rounded-xl bg-pink-600/20 border border-pink-400/40 hover:bg-pink-600/30"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4 text-pink-400">اشترك ليصلك كل جديد</h4>
            <form id="newsletter" class="space-y-3">
              <input type="email" required placeholder="بريدك الإلكتروني" class="w-full rounded-2xl px-4 py-3 bg-black/40 border border-white/15 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400">
              <button class="w-full btn-primary py-3 rounded-2xl font-bold">اشترك الآن</button>
              <p id="news-ok" class="hidden text-emerald-300 text-sm">تم الاشتراك بنجاح ✅</p>
            </form>
          </div>
        </div>
        <div class="text-center text-gray-300/80 pb-8" id="copyright">
          © 2025 مصطفى للدراجات النارية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  `
}
