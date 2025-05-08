"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María García",
    role: "Cliente Frecuente",
    content:
      "Una experiencia gastronómica excepcional. Los sabores son únicos y el servicio impecable. Sin duda, mi restaurante favorito en la ciudad.",
    avatar: "/images/galeria.jpg",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Crítico Culinario",
    content:
      "La fusión de sabores tradicionales con técnicas modernas es magistral. Cada plato cuenta una historia y refleja la pasión del chef.",
    avatar: "/images/galeria1.jpg",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Influencer Gastronómica",
    content:
      "El ambiente elegante y acogedor complementa perfectamente la exquisita comida. Una visita obligada para los amantes de la buena cocina.",
    avatar: "/images/galeria2.jpg",
    rating: 4,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-600 font-medium">Testimonios</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-20 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Descubre las experiencias de quienes han disfrutado de nuestra cocina
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground flex-grow">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
