"use client"

import type React from "react"

import { Github, Linkedin, Mail, Twitter, Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
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
    { icon: Mail, label: "Email", href: "mailto:yesison714@gmail.com", color: "hover:bg-red-500/10 hover:border-red-500" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/3162115964",
      color: "hover:bg-green-500/10 hover:border-green-500",
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance mb-6">Trabajemos juntos</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o
              simplemente quieres charlar, no dudes en contactarme.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl p-8 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-mono text-muted-foreground">
                Teléfono
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+57 313434..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background border-border focus:border-primary focus:ring-primary/20 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              Enviar mensaje
              <Send className="w-4 h-4" />
            </Button>
          </form>

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
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">© 2025 Yesid Banguera. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
