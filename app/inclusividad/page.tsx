import React from "react"
import { Button } from "@/components/ui/button"

export default function InclusividadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Inclusividad</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          En DiverseLove, celebramos todas las identidades y expresiones de género. Nuestra misión es crear un espacio
          seguro y acogedor para todos.
        </p>
        <div className="max-w-md mx-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">Comparte tu historia</Button>
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white mb-4">Únete a nuestro foro</Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Recursos de inclusividad</Button>
        </div>
      </div>
    </div>
  )
}

