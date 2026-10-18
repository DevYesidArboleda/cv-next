"use client"

import type React from "react"
import { Check, Copy, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { profile } from "@/data/profile"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

function CopyEmailButton() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={t("Copiar email", "Copy email")}
    >
      {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
      <span aria-live="polite" className="sr-only">
        {copied ? t("Email copiado", "Email copied") : ""}
      </span>
    </button>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: "", company: "", message: "" })

  // No backend: compose the message in the visitor's own mail client so it actually gets delivered.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = form.company
      ? t(`Oportunidad en ${form.company} — ${form.name}`, `Opportunity at ${form.company} — ${form.name}`)
      : t(`Contacto desde tu portafolio — ${form.name}`, `Contact from your portfolio — ${form.name}`)
    const body = `${form.message}\n\n— ${form.name}${form.company ? `, ${form.company}` : ""}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: Linkedin, label: "LinkedIn", value: "yesid-banguera-arboleda", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "DevYesidArboleda", href: profile.github },
  ]

  return (
    <section id="contact" className="section">
      <Reveal>
        <SectionHeading eyebrow={t("Contacto", "Contact")} title={t("¿Construimos algo juntos?", "Shall we build something together?")}>
          {t(
            "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un rol o un proyecto en mente, escríbeme por el canal que prefieras.",
            "I'm open to new opportunities and collaborations. If you have a role or project in mind, reach out through whichever channel you prefer.",
          )}
        </SectionHeading>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-[1fr_1.15fr]">
        <Reveal className="space-y-3">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Mail className="size-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">Email</p>
              <a href={`mailto:${profile.email}`} className="block truncate font-medium hover:text-primary">
                {profile.email}
              </a>
            </div>
            <CopyEmailButton />
          </div>

          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <c.icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="truncate font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("Nombre", "Name")}
                </label>
                <Input
                  id="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  {t("Empresa", "Company")} <span className="font-normal text-muted-foreground">({t("opcional", "optional")})</span>
                </label>
                <Input
                  id="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="h-11"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {t("Mensaje", "Message")}
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                placeholder={t("Cuéntame sobre el rol o el proyecto…", "Tell me about the role or project…")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-36 resize-none"
              />
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                {t("Se abrirá tu cliente de correo con el mensaje listo.", "Your email client will open with the message ready.")}
              </p>
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("Enviar mensaje", "Send message")}
                <Send className="size-4" aria-hidden />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
