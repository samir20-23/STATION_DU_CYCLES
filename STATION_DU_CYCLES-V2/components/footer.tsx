"use client"

import { BikeIcon as Motorcycle, Phone, MapPin, Mail, Clock } from "lucide-react"
import { SocialLinks } from "./social-links"

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="mt-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-slide-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Motorcycle className="text-white text-lg" />
              </div>
              <span className="text-xl font-black animate-glow">STATION DU CYCLES</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              متخصصون في بيع الدراجات النارية والسكوترات مع ضمان وخدمات ما بعد البيع. اختَر راحتك وسنُنجز الباقي.
            </p>
          </div>

          {/* Links */}
          <div className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-bold mb-4 text-blue-400">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  الماركات
                </a>
              </li>
              <li>
                <a href="#store-info" className="hover:text-white transition-colors">
                  معلومات المحل
                </a>
              </li>
              <li>
                <a href="#store-hours" className="hover:text-white transition-colors">
                  أوقات العمل
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-bold mb-4 text-purple-400">معلومات التواصل</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>يومياً: 9:00–19:00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>365, Bd El Fida, Casablanca</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+212 608 788 782</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>aouladamarsamir@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-bold mb-4 text-pink-400">تابعنا</h4>
            <div className="mb-6">
              <SocialLinks />
            </div>

            <div className="space-y-3">
              <input type="email" placeholder="بريدك الإلكتروني" className="w-full form-input" />
              <button className="w-full btn-primary py-3 rounded-2xl font-bold">اشترك للحصول على العروض</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300/80 pb-8 border-t border-white/5 pt-8">
          <p className="animate-slide-in">© 2025 STATION DU CYCLES. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
