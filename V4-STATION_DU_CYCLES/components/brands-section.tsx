"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const BRANDS = [
  {
    id: "SYM",
    name: "SYM",
    description: "دراجات حضرية عملية وأنيقة",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    products: ["ORBIT 2", "SYMPHONY S", "FIDOLE 2"],
  },
  {
    id: "KYMCO",
    name: "KYMCO",
    description: "أداء عالي وموثوقية يومية",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    products: ["AGILITY 50", "PEOPLE S", "XCITING"],
  },
  {
    id: "FICE_SANYA",
    name: "FICE SANYA",
    description: "نسبة ممتازة بين الجودة والسعر",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
    products: ["INSTA SANYA X", "SANYA R1000", "SANYA X1000"],
  },
  {
    id: "LEONARDO",
    name: "LEONARDO SCOTER",
    description: "تصميم أنيق مع لمسة راقية",
    image: "https://images.unsplash.com/photo-1516727003284-a96541e51e9b?w=800&h=600&fit=crop",
    products: ["ENZO", "PICASSO", "DAVINCI"],
  },
  {
    id: "HENSIM",
    name: "HENSIM",
    description: "روح كلاسيكية، لمسات عصرية",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    products: ["MUSTANG", "CLASSIC", "SPORT"],
  },
  {
    id: "CAPPUCINO",
    name: "CAPPUCINO",
    description: "اقتصادية مع جودة جيدة",
    image: "https://images.unsplash.com/photo-1558431382-27bbae175c40?w=800&h=600&fit=crop",
    products: ["CAPPUCINOS", "CAPPUCINO PLUS", "MOKITO"],
  },
]

export function BrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  return (
    <section id="brands" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 animate-glow">الماركات المتوفرة</h2>
        <p className="text-xl text-gray-300">اختر من مجموعة واسعة من أفضل الماركات العالمية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map((brand, index) => (
          <div
            key={brand.id}
            className="card-hover glass rounded-2xl overflow-hidden cursor-pointer animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedBrand(selectedBrand === brand.id ? null : brand.id)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">{brand.name}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-4">{brand.description}</p>

              {selectedBrand === brand.id && (
                <div className="animate-slide-in">
                  <h4 className="font-semibold mb-2 text-blue-400">المنتجات المتوفرة:</h4>
                  <ul className="space-y-1 mb-4">
                    {brand.products.map((product) => (
                      <li key={product} className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-3 h-3 text-blue-400" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-between items-center">
                <button className="btn-primary px-4 py-2 rounded-lg text-sm">عرض التفاصيل</button>
                <span className="text-xs text-gray-400">{brand.products.length} منتج</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
