"use client"

import { useState } from "react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { Check, Send, Users, UtensilsCrossed } from "lucide-react"

interface FormState {
  name: string
  email: string
  attending: boolean | null
  guests: number
  dietaryRestrictions: string
  message: string
}

export function RSVPSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    attending: null,
    guests: 1,
    dietaryRestrictions: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section 
        id="rsvp"
        className="relative py-32 px-4"
        aria-label="Confirmacion"
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-accent/40 
                        flex items-center justify-center animate-fade-in-scale">
            <Check className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Gracias por Confirmar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hemos recibido tu respuesta. Te esperamos con mucha ilusion para celebrar 
            juntos este dia tan especial.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section 
      id="rsvp"
      className="relative py-32 px-4"
      aria-label="Confirmar asistencia"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Confirma tu Asistencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            R.S.V.P
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Por favor confirma tu asistencia antes del evento para que podamos 
            preparar todo con amor.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Attendance buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => setFormState(s => ({ ...s, attending: true }))}
              className={`px-8 py-4 border transition-all duration-300 text-sm tracking-[0.2em] uppercase
                        ${formState.attending === true 
                          ? "border-accent bg-accent/10 text-accent" 
                          : "border-border text-foreground/60 hover:border-accent/50"}`}
            >
              Con gusto asistire
            </button>
            <button
              type="button"
              onClick={() => setFormState(s => ({ ...s, attending: false }))}
              className={`px-8 py-4 border transition-all duration-300 text-sm tracking-[0.2em] uppercase
                        ${formState.attending === false 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border text-foreground/60 hover:border-primary/50"}`}
            >
              No podre asistir
            </button>
          </div>

          {formState.attending === true && (
            <div className="space-y-6 animate-fade-up">
              {/* Name and Email row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-accent tracking-[0.2em] uppercase mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground
                             focus:border-accent focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-accent tracking-[0.2em] uppercase mb-2">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground
                             focus:border-accent focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Guests and Dietary */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-xs text-accent tracking-[0.2em] uppercase mb-2">
                    <Users className="w-3 h-3" />
                    Numero de Invitados
                  </label>
                  <select
                    value={formState.guests}
                    onChange={(e) => setFormState(s => ({ ...s, guests: Number(e.target.value) }))}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground
                             focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n} className="bg-background">
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs text-accent tracking-[0.2em] uppercase mb-2">
                    <UtensilsCrossed className="w-3 h-3" />
                    Restricciones Alimentarias
                  </label>
                  <input
                    type="text"
                    value={formState.dietaryRestrictions}
                    onChange={(e) => setFormState(s => ({ ...s, dietaryRestrictions: e.target.value }))}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground
                             focus:border-accent focus:outline-none transition-colors"
                    placeholder="Vegetariano, alergias, etc."
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-accent tracking-[0.2em] uppercase mb-2">
                  Mensaje para {BIRTHDAY_CONFIG.name} (Opcional)
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  rows={3}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground
                           focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Un mensaje especial..."
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 px-10 py-4 
                           bg-accent text-accent-foreground
                           text-sm tracking-[0.2em] uppercase
                           hover:bg-accent/90 transition-colors duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground 
                                     rounded-full animate-spin" />
                      Enviando
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Confirmar Asistencia
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {formState.attending === false && (
            <div className="text-center animate-fade-up space-y-6">
              <p className="text-muted-foreground">
                Lamentamos que no puedas asistir. Si cambias de opinion, siempre seras bienvenido/a.
              </p>
              <div>
                <label className="block text-xs text-accent tracking-[0.2em] uppercase mb-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                  className="w-full max-w-md mx-auto bg-transparent border-b border-border py-3 text-foreground text-center
                           focus:border-accent focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !formState.name}
                className="inline-flex items-center gap-3 px-10 py-4 
                         border border-border text-foreground
                         text-sm tracking-[0.2em] uppercase
                         hover:border-accent hover:text-accent transition-colors duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Respuesta"}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
