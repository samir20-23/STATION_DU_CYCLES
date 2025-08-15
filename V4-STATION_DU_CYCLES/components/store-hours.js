export function createStoreHours() {
  return `
    <section id="store-hours" class="container mx-auto px-4 py-16">
      <h2 class="section-title text-center">Store Hours</h2>

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <i class="fa-regular fa-clock text-purple-300 text-xl"></i>
            </div>
            <h3 class="text-2xl font-bold">Opening Hours</h3>
          </div>
          <div id="hours-list" class="space-y-3">
            <div class="flex justify-between items-center p-3 rounded-lg today-row">
              <span class="font-medium">Everyday</span>
              <span class="text-green-400 font-semibold">09:00 - 19:00</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-2xl p-6 text-white gradient-box">
            <div class="flex items-center gap-3 mb-3">
              <i class="fa-regular fa-calendar text-2xl"></i>
              <h3 class="text-xl font-bold">Today's Status</h3>
            </div>
            <div class="text-center">
              <p id="today-status" class="text-2xl font-extrabold mb-1">مفتوح الآن</p>
              <p id="today-range" class="text-lg opacity-90">09:00 - 19:00</p>
            </div>
          </div>

          <!-- بطاقة الكرونو -->
          <div class="chrono-card glass rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <i class="fa-solid fa-stopwatch text-xl"></i>
              <h4 class="text-xl font-bold">العدّاد اليومي (09:00 → 19:00)</h4>
            </div>
            <div class="chrono-body">
              <div class="chrono-badges">
                <span id="chrono-status" class="badge"></span>
                <span id="chrono-time-window" class="badge slim">09:00–19:00</span>
              </div>
              <div id="chrono-remaining" class="chrono-remaining">00:00:00</div>
              <div class="chrono-progress">
                <div id="chrono-progress-bar" class="chrono-bar" style="width:0%;"></div>
              </div>
              <small id="chrono-hint" class="chrono-hint">—</small>
            </div>
          </div>

          <div class="glass rounded-2xl p-6">
            <h4 class="text-xl font-bold mb-3">ملاحظات خاصة</h4>
            <ul class="text-gray-300 space-y-1">
              <li>• متوفر على مدار الاسبوع كامل</li>
              <li>• عروض خاصة في نهاية الأسبوع</li>
              <li>• يُفضّل الاتصال قبل الزيارة</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}
