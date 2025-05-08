"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, MapPin, Phone, Mail } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [date, setDate] = useState<Date>()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-600 font-medium">Contáctanos</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Reserva Tu Mesa</h2>
          <div className="w-20 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Haz tu reservación o contáctanos para cualquier consulta
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Información de Contacto</h3>
            <p className="text-muted-foreground">
              Estamos disponibles para atender tus consultas y reservaciones. No dudes en contactarnos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-muted-foreground">Av. Principal 123, Ciudad</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-muted-foreground">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@restaurantesabores.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium">Horario</h4>
                  <p className="text-muted-foreground">Lun-Vie: 12:00 - 23:00</p>
                  <p className="text-muted-foreground">Sáb-Dom: 12:00 - 00:00</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                className="w-full h-[250px] rounded-lg border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Haz tu Reservación</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="phone" placeholder="Tu teléfono" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Fecha
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Hora
                  </label>
                  <Input id="time" placeholder="Ej: 19:00" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium">
                  Número de Personas
                </label>
                <Input id="guests" type="number" placeholder="Número de personas" min="1" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje (Opcional)
                </label>
                <Textarea id="message" placeholder="Peticiones especiales o comentarios" />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Reservar Ahora
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
