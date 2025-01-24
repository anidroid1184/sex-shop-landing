import React from "react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Preguntas Frecuentes</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">¿Cómo se realizan los envíos?</h2>
            <p className="text-gray-700">
              Realizamos envíos discretos en empaques sin marca. Tu privacidad es nuestra prioridad.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">¿Cuál es el tiempo de entrega?</h2>
            <p className="text-gray-700">
              El tiempo de entrega varía según tu ubicación, pero generalmente es de 3 a 5 días hábiles.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">¿Puedo devolver un producto?</h2>
            <p className="text-gray-700">
              Sí, aceptamos devoluciones dentro de los 14 días posteriores a la recepción, siempre que el producto esté
              sin usar y en su embalaje original.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">¿Los productos son seguros?</h2>
            <p className="text-gray-700">
              Todos nuestros productos son de alta calidad y seguros para usar. Siempre recomendamos seguir las
              instrucciones de uso proporcionadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

