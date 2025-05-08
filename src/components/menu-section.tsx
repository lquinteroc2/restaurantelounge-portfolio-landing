"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    id: "entradas",
    name: "Entradas",
    items: [
      {
        name: "Carpaccio de Res",
        description: "Finas láminas de res con aceite de oliva, limón y parmesano",
        price: "12.50",
        image: "/images/platop1.jpg",
      },
      {
        name: "Bruschetta Mediterránea",
        description: "Pan artesanal con tomate, albahaca y aceite de oliva",
        price: "9.00",
        image: "/images/entrada.jpg",
      },
      {
        name: "Ceviche de Camarón",
        description: "Camarones marinados en limón con cilantro y aguacate",
        price: "14.00",
        image: "/images/entrada2.jpg",
      },
    ],
  },
  {
    id: "principales",
    name: "Platos Principales",
    items: [
      {
        name: "Risotto de Hongos",
        description: "Cremoso risotto con variedad de hongos y trufa",
        price: "18.50",
        image: "/images/entrada1.jpg",
      },
      {
        name: "Salmón a la Parrilla",
        description: "Filete de salmón con salsa de eneldo y vegetales asados",
        price: "22.00",
        image: "/images/platop.jpg",
      },
      {
        name: "Filete Mignon",
        description: "Tierno filete con reducción de vino tinto y puré de papas",
        price: "26.00",
        image: "/images/platop2.jpg",
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    items: [
      {
        name: "Tiramisú Clásico",
        description: "Capas de bizcocho empapado en café con crema de mascarpone",
        price: "8.50",
        image: "/images/postre1.jpg",
      },
      {
        name: "Crème Brûlée",
        description: "Suave natilla con costra de azúcar caramelizada",
        price: "7.50",
        image: "/images/postre.jpg",
      },
      {
        name: "Fondant de Chocolate",
        description: "Bizcocho de chocolate con centro líquido y helado de vainilla",
        price: "9.00",
        image: "/images/postre2.jpg",
      },
    ],
  },
]

export function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="menu" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-600 font-medium">Delicias Culinarias</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestro Menú</h2>
          <div className="w-20 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground">
            Explora nuestra selección de platos preparados con los mejores ingredientes
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="entradas" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-amber-600 font-bold">${item.price}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Ver Menú Completo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
