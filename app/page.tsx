import React from "react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Celebra tu diversidad
          </h1>
          <p className="text-xl mb-8 text-gray-700">Descubre una experiencia única de placer y autoexpresión</p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
            Explora Ahora
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Inclusividad</h3>
              <p className="text-gray-700">Celebramos todas las identidades y expresiones de género.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Educación</h3>
              <p className="text-gray-700">Promovemos el conocimiento y la exploración segura.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Calidad</h3>
              <p className="text-gray-700">Ofrecemos productos de alta calidad para tu bienestar.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

