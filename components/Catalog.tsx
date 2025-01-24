"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Datos de ejemplo para los productos
const products = [
  { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 19.99 },
  { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 29.99 },
  { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 39.99 },
  { id: 4, name: "Producto 4", description: "Descripción del producto 4", price: 49.99 },
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
            <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-purple-600 font-bold mb-4">${product.price.toFixed(2)}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">Opción 1</Button>
              <Button className="bg-pink-600 hover:bg-pink-700">Opción 2</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Opción 3</Button>
              <Button className="bg-green-600 hover:bg-green-700">Opción 4</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

