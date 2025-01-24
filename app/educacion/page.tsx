import React from "react"
import { Button } from "@/components/ui/button"

export default function EducacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Educación</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Promovemos el conocimiento y la exploración segura. Nuestro objetivo es proporcionar información precisa y
          útil sobre salud sexual y bienestar.
        </p>
        <div className="max-w-md mx-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">Artículos educativos</Button>
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white mb-4">Talleres en línea</Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Preguntas frecuentes</Button>
        </div>
      </div>
    </div>
  )
}

