"use client"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="hero-bg relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 animate-glow text-responsive">
          أفضل الدراجات النارية والسكوترات بالمغرب
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-in">
          جودة مضمونة • تمويل مرن • خدمة ما بعد البيع
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in">
          <button
            onClick={() => document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-4 rounded-full text-lg font-bold"
          >
            استكشف الماركات
          </button>
          <a
            href="https://wa.me/212608788782"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
