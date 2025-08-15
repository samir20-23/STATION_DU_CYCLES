"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar } from "lucide-react"

const HOURS = [
  { day: "الأحد", hours: "09:00 - 19:00", dayIndex: 0 },
  { day: "الإثنين", hours: "09:00 - 19:00", dayIndex: 1 },
  { day: "الثلاثاء", hours: "09:00 - 19:00", dayIndex: 2 },
  { day: "الأربعاء", hours: "09:00 - 19:00", dayIndex: 3 },
  { day: "الخميس", hours: "09:00 - 19:00", dayIndex: 4 },
  { day: "الجمعة", hours: "09:00 - 19:00", dayIndex: 5 },
  { day: "السبت", hours: "09:00 - 19:00", dayIndex: 6 },
]

export function StoreHours() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const [timeUntilChange, setTimeUntilChange] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)

      // Check if store is open (9 AM to 7 PM)
      const hour = now.getHours()
      const isCurrentlyOpen = hour >= 9 && hour < 19
      setIsOpen(isCurrentlyOpen)

      // Calculate time until next change
      let nextChange: Date
      if (isCurrentlyOpen) {
        // Store is open, calculate time until closing
        nextChange = new Date(now)
        nextChange.setHours(19, 0, 0, 0)
      } else {
        // Store is closed, calculate time until opening
        nextChange = new Date(now)
        if (hour >= 19) {
          // After closing, next opening is tomorrow
          nextChange.setDate(nextChange.getDate() + 1)
        }
        nextChange.setHours(9, 0, 0, 0)
      }

      const diff = nextChange.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeUntilChange(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const today = currentTime.getDay()

  return (
    <section id="store-hours" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 animate-glow">أوقات العمل</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Hours List */}
        <div className="glass rounded-2xl p-6 animate-slide-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Clock className="text-purple-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold">ساعات العمل</h3>
          </div>

          <div className="space-y-3">
            {HOURS.map((schedule, index) => (
              <div
                key={schedule.day}
                className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                  schedule.dayIndex === today
                    ? "bg-blue-500/20 border border-blue-400/40 animate-pulse-border"
                    : "bg-white/5"
                }`}
              >
                <span className="font-medium">{schedule.day}</span>
                <span className="text-green-400 font-semibold">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status and Timer */}
        <div className="space-y-6">
          {/* Current Status */}
          <div className="glass rounded-2xl p-6 animate-slide-in">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-2xl text-blue-400" />
              <h3 className="text-xl font-bold">الحالة الحالية</h3>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-extrabold mb-1 ${isOpen ? "text-green-400" : "text-red-400"}`}>
                {isOpen ? "مفتوح الآن" : "مغلق الآن"}
              </p>
              <p className="text-lg opacity-90">09:00 - 19:00</p>
            </div>
          </div>

          {/* Live Timer */}
          <div className="glass rounded-2xl p-6 animate-slide-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              <h4 className="text-xl font-bold">العدّاد المباشر</h4>
            </div>
            <div className="text-center">
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3 ${
                  isOpen ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {isOpen ? "✅ مفتوح" : "⛔ مغلق"}
              </div>
              <div className="text-3xl font-mono font-bold mb-2">{timeUntilChange}</div>
              <p className="text-sm text-gray-400">{isOpen ? "حتى الإغلاق" : "حتى الافتتاح"}</p>
            </div>
          </div>

          {/* Notes */}
          <div className="glass rounded-2xl p-6 animate-slide-in">
            <h4 className="text-xl font-bold mb-3 text-pink-400">ملاحظات خاصة</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                متوفر على مدار الأسبوع كامل
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                عروض خاصة في نهاية الأسبوع
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                يُفضّل الاتصال قبل الزيارة
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
