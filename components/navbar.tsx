"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X, BikeIcon as Motorcycle, Truck } from "lucide-react"
import { useTheme } from "next-themes"
import { SocialLinks } from "./social-links"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mega Banner */}
      <section className="glass container mx-auto px-4 mt-3 rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck className="text-2xl text-blue-400" />
            <span className="text-center font-bold animate-glow">
              🚚 توصيل سريع وآمن إلى جميع المدن المغربية — أثمنة مناسبة وخدمة ما بعد البيع ⭐
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-300">
              Livraison rapide et sécurisée partout au Maroc — Meilleurs prix & service après-vente.
            </p>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-float">
                <Motorcycle className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold animate-glow flex items-center gap-2">
                STATION DU CYCLES
                <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs">
                  <Truck className="w-3 h-3" />
                </span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="nav-cta">
                <span>الرئيسية</span>
              </button>
              <button onClick={() => scrollToSection("brands")} className="nav-cta">
                <span>الماركات</span>
              </button>
              <button onClick={() => scrollToSection("store-info")} className="nav-cta">
                <span>معلومات المحل</span>
              </button>
              <button onClick={() => scrollToSection("store-hours")} className="nav-cta">
                <span>توقيت المحل</span>
              </button>
            </div>

            {/* Right side - Social Links & Theme Toggle */}
            <div className="flex items-center gap-3">
              <SocialLinks />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="nav-cta"
                title="تبديل الوضع"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="hidden sm:inline">الوضع</span>
              </button>

              {/* Mobile menu button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden nav-cta">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 glass rounded-2xl animate-slide-in">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection("home")} className="nav-cta justify-start">
                  الرئيسية
                </button>
                <button onClick={() => scrollToSection("brands")} className="nav-cta justify-start">
                  الماركات
                </button>
                <button onClick={() => scrollToSection("store-info")} className="nav-cta justify-start">
                  معلومات المحل
                </button>
                <button onClick={() => scrollToSection("store-hours")} className="nav-cta justify-start">
                  توقيت المحل
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
