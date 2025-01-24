import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacidadPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Política de Privacidad
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Introducción</h2>
          <p className="mb-4 text-gray-700">
            En DiverseLove, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y
            protegemos tu información personal.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Información que recopilamos</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Información de contacto (nombre, email, dirección)</li>
            <li>Información de pago</li>
            <li>Historial de compras</li>
            <li>Preferencias de productos</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Cómo usamos tu información</h2>
          <p className="mb-4 text-gray-700">
            Utilizamos tu información para procesar pedidos, mejorar nuestros servicios, y personalizar tu experiencia
            de compra. No compartimos tu información con terceros sin tu consentimiento.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Tus derechos</h2>
          <p className="mb-4 text-gray-700">
            Tienes derecho a acceder, corregir o eliminar tu información personal. Si tienes preguntas sobre nuestra
            política de privacidad, contáctanos.
          </p>

          <div className="mt-8 text-center">
            <Link href="/contacto">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
                Contáctanos para más información
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

