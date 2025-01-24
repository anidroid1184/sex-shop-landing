import React from "react"

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Política de Privacidad</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            En DiverseLove, respetamos y protegemos tu privacidad. Esta política describe cómo recopilamos, usamos y
            protegemos tu información personal.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Recopilación de Información</h2>
          <p className="text-gray-700 mb-4">
            Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y
            detalles de pago cuando realizas una compra.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Uso de la Información</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos tu información para procesar pedidos, mejorar nuestros servicios y comunicarnos contigo sobre tu
            cuenta y nuevos productos.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Protección de la Información</h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado y uso
            indebido.
          </p>
        </div>
      </div>
    </div>
  )
}

