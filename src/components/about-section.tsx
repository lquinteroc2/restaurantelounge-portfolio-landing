"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Utensils, Clock, Award } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-600 font-medium">Nuestra Historia</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Descubre la pasión y dedicación detrás de cada plato que servimos
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/aboutus.jpg"
                alt="Chef preparando comida"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Años de Experiencia</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold">Una tradición culinaria desde 2008</h3>
            <p className="text-muted-foreground">
              Fundado por el reconocido chef Antonio Martínez, nuestro restaurante ha sido un referente gastronómico en
              la ciudad durante más de 15 años. Combinamos técnicas tradicionales con toques modernos para crear
              experiencias culinarias memorables.
            </p>
            <p className="text-muted-foreground">
              Cada ingrediente es cuidadosamente seleccionado de productores locales, asegurando la máxima frescura y
              calidad en cada plato que servimos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-slate-50">
                <Utensils className="h-8 w-8 text-amber-600 mb-2" />
                <h4 className="font-medium">Cocina Gourmet</h4>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-slate-50">
                <Clock className="h-8 w-8 text-amber-600 mb-2" />
                <h4 className="font-medium">Abierto a Diario</h4>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-slate-50">
                <Award className="h-8 w-8 text-amber-600 mb-2" />
                <h4 className="font-medium">Chef Premiado</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
