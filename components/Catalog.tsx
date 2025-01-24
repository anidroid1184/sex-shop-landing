"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const products = [
  {
    id: 1,
    name: "Vibrador Mágico",
    description: "Potente vibrador con múltiples velocidades para máximo placer.",
    price: 39.99,
    image: "/images/vibrador-magico.jpg",
  },
  {
    id: 2,
    name: "Lubricante Natural",
    description: "Lubricante a base de agua, hipoalergénico y de larga duración.",
    price: 12.99,
    image: "/images/lubricante-natural.jpg",
  },
  {
    id: 3,
    name: "Kit de Bondage",
    description: "Set completo para principiantes en BDSM, incluye esposas y antifaz.",
    price: 49.99,
    image: "/images/kit-bondage.jpg",
  },
  {
    id: 4,
    name: "Dildo de Silicona",
    description: "Dildo de silicona premium, suave al tacto y fácil de limpiar.",
    price: 29.99,
    image: "/images/dildo-silicona.jpg",
  },
]

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 rounded-md mb-4 overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-purple-600 font-bold mb-4">${product.price.toFixed(2)}</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition duration-300">
              Añadir al Carrito
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

