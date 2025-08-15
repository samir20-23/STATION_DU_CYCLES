"use client"

import type React from "react"

import { useState } from "react"
import { Send, MessageCircle, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    model: "",
    message: "",
    agree: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using a simple API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          fullName: "",
          phone: "",
          city: "",
          model: "",
          message: "",
          agree: false,
        })

        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="glass rounded-[28px] border border-white/10 overflow-hidden animate-slide-in">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-600/20 via-blue-600/10 to-purple-600/20 border-b border-white/10">
          <h2 className="text-3xl sm:text-4xl font-black text-center animate-glow">هل تريد دراجة مناسبة لك؟</h2>
          <p className="text-center text-gray-300 mt-2">
            اترك معلوماتك وسنتواصل معك فوراً لتقديم أفضل العروض وخيارات التمويل.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-gray-300">الاسم الكامل *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="مثل: مصطفى أحمد"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">رقم الهاتف *</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9+\-\s]{8,}"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+212 6 00 00 00 00"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">المدينة</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                placeholder="الدار البيضاء / طنجة / فاس ..."
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">الماركة / الموديل (اختياري)</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="form-input"
                placeholder="SYM / KYMCO / ENZO ..."
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block mb-2 text-sm text-gray-300">رسالتك</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-none"
                placeholder="اذكر ميزانيتك، نوع الاستعمال، أو أي سؤال يخطر ببالك..."
              />
            </div>

            <div className="lg:col-span-2 flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                name="agree"
                required
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 h-5 w-5 rounded border-white/20 bg-black/40"
              />
              <label htmlFor="agree" className="text-gray-300 text-sm">
                أوافق على الاتصال بي عبر الهاتف أو واتساب لتأكيد الطلب وتقديم العروض.
              </label>
            </div>

            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 mt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-primary py-3.5 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    أرسل طلبي الآن
                  </>
                )}
              </button>

              <a
                href="https://wa.me/212608788782"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 rounded-2xl text-lg font-bold border border-emerald-400/40 hover:bg-emerald-500/10 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب مباشر
              </a>
            </div>

            {isSuccess && (
              <div className="lg:col-span-2 success-message flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً جداً.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
