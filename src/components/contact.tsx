"use client"

import type React from "react"

import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DevYesidArboleda",
      color: "hover:bg-slate-500/10 hover:border-slate-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yesid-banguera-arboleda-042280167/",
      color: "hover:bg-blue-500/10 hover:border-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:yesison714@gmail.com",
      color: "hover:bg-red-500/10 hover:border-red-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/3162115964",
      color: "hover:bg-green-500/10 hover:border-green-500",
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold font-mono text-muted-foreground mb-6 uppercase tracking-wider">
              {t("Contacto", "Contact")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance mb-6 font-mono">
              {t("Trabajemos juntos", "Let's work together")}
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-mono">
              {t(
                "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres charlar, no dudes en contactarme.",
                "I am always open to new opportunities and collaborations. If you have a project in mind or just want to chat, don't hesitate to contact me.",
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-border"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                    {t("Nombre", "Name")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("Tu nombre", "Your name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary focus:ring-primary/20 font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("tu@email.com", "your@email.com")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary focus:ring-primary/20 font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-mono text-muted-foreground">
                  {t("Teléfono", "Phone")}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+57 313434..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 font-mono"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                  {t("Mensaje", "Message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("Cuéntame sobre tu proyecto...", "Tell me about your project...")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 resize-none font-mono"
                />
              </div>
              <Button
                type="submit"
                className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 font-mono"
              >
                {t("Enviar mensaje", "Send message")}
                <Send className="w-4 h-4" />
              </Button>
            </form>

            
          </div>      

          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-border ${social.color} transition-all group`}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium font-mono">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              {t(
                "© 2025 Yesid Banguera. Todos los derechos reservados.",
                "© 2025 Yesid Banguera. All rights reserved.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
