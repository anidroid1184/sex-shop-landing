import React from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="py-6 px-4 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            DiverseLove - logo a cambiar
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Inicio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Productos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Celebra tu diversidad
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Descubre una experiencia única de placer y autoexpresión
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
              Explora Ahora
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-center text-purple-800">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-pink-600">Inclusividad</h4>
                <p className="text-gray-700">Celebramos todas las identidades y expresiones de género.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-purple-600">Educación</h4>
                <p className="text-gray-700">Promovemos el conocimiento y la exploración segura.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-pink-600">Calidad</h4>
                <p className="text-gray-700">Ofrecemos productos de alta calidad para tu bienestar.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-center text-purple-800">Productos Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
                  <h4 className="text-lg font-semibold mb-2 text-purple-600">Producto {item}</h4>
                  <p className="text-gray-700 mb-4">Descripción breve del producto.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300">
                    Ver Detalles
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">DiverseLove</h4>
            <p>Celebrando la diversidad y el placer desde 2023.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-300">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-pink-300">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-pink-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-300">Facebook</a>
              <a href="#" className="hover:text-pink-300">Instagram</a>
              <a href="#" className="hover:text-pink-300">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}