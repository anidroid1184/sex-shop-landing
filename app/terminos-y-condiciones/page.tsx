import React from "react"

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Términos y Condiciones</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Al utilizar los servicios de DiverseLove, aceptas los siguientes términos y condiciones.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Uso del Sitio</h2>
          <p className="text-gray-700 mb-4">
            Debes tener al menos 18 años para usar nuestros servicios. No debes usar nuestro sitio para ningún propósito
            ilegal o no autorizado.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Compras</h2>
          <p className="text-gray-700 mb-4">
            Al realizar una compra, aceptas proporcionar información precisa y completa. Nos reservamos el derecho de
            rechazar o cancelar pedidos en cualquier momento.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Devoluciones</h2>
          <p className="text-gray-700 mb-4">
            Aceptamos devoluciones dentro de los 14 días posteriores a la recepción del producto, siempre que el
            producto esté sin usar y en su embalaje original.
          </p>
        </div>
      </div>
    </div>
  )
}

