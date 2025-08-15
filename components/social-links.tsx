"use client"

import { MessageCircle, Facebook, Instagram } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/212608788782",
      color: "text-green-400 hover:text-green-300",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "text-pink-400 hover:text-pink-300",
    },
  ]

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full glass transition-all duration-300 hover:scale-110 ${link.color}`}
          title={link.name}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}
