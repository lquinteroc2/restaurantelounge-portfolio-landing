"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const galleryImages = [
  {
    src: "/images/galeria2.jpg",
    alt: "Interior del restaurante",
  },
  {
    src: "/images/galeria4.jpg",
    alt: "Plato gourmet",
  },
  {
    src: "/images/galeria1.jpg",
    alt: "Chef preparando comida",
  },
  {
    src: "/images/galeria3.jpg",
    alt: "Barra de cócteles",
  },
  {
    src: "/images/galeria5.jpg",
    alt: "Postre elegante",
  },
  {
    src: "/images/galeria6.jpg",
    alt: "Mesa servida",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-600 font-medium">Nuestra Galería</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Momentos Especiales</h2>
          <div className="w-20 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Explora nuestro ambiente, platos y experiencias a través de imágenes
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
