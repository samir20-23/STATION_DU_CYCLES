"use client"

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export function StoreInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+212 608 788 782",
      color: "text-purple-400",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+212 608 788 782",
      color: "text-green-400",
      link: "https://wa.me/212608788782",
    },
    {
      icon: Mail,
      title: "Email",
      value: "aouladamarsamir@gmail.com",
      color: "text-blue-400",
      link: "mailto:aouladamarsamir@gmail.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "365, Bd El Fida, Casablanca",
      color: "text-rose-400",
    },
  ]

  return (
    <section id="store-info" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 animate-glow">معلومات المتجر</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Cards */}
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="glass rounded-2xl p-6 flex items-center gap-4 card-hover animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-full bg-black/20 flex items-center justify-center ${info.color}`}>
                <info.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">{info.title}</h4>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-4 animate-slide-in">
            <div className="flex items-start gap-3">
              <MapPin className="text-pink-400 text-xl mt-1" />
              <div>
                <h4 className="font-bold mb-1">الموقع على الخريطة</h4>
                <p className="text-gray-300 text-sm">365, Bd El Fida, Casablanca</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-2 animate-slide-in">
            <div className="h-96 rounded-xl bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-300">خريطة تفاعلية</p>
                <p className="text-sm text-gray-400">365, Bd El Fida, Casablanca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
