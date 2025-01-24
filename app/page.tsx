import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Celebra tu diversidad
          </h1>
          <p className="text-xl mb-8 text-gray-700">Descubre una experiencia única de placer y autoexpresión</p>
          <Link href="/catalogo">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
              Explora Ahora
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Inclusividad</h3>
              <p className="text-gray-700 mb-4">Celebramos todas las identidades y expresiones de género.</p>
              <Link href="/inclusividad">
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Más información</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Educación</h3>
              <p className="text-gray-700 mb-4">Promovemos el conocimiento y la exploración segura.</p>
              <Link href="/educacion">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Más información</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Calidad</h3>
              <p className="text-gray-700 mb-4">Ofrecemos productos de alta calidad para tu bienestar.</p>
              <Link href="/calidad">
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Más información</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

