import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Preguntas Frecuentes (FAQ)
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">¿Cómo puedo realizar un pedido?</h2>
          <p className="mb-4 text-gray-700">
            Puedes realizar un pedido fácilmente a través de nuestra tienda en línea. Simplemente agrega los productos
            que deseas a tu carrito y sigue el proceso de pago.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">¿Cuáles son las opciones de envío?</h2>
          <p className="mb-4 text-gray-700">
            Ofrecemos envío estándar y express. Los tiempos de entrega varían según tu ubicación. Puedes ver las
            opciones disponibles durante el proceso de pago.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">¿Cómo puedo devolver un producto?</h2>
          <p className="mb-4 text-gray-700">
            Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Por favor, contacta con nuestro
            servicio al cliente para iniciar el proceso de devolución.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">¿Los productos son discretos?</h2>
          <p className="mb-4 text-gray-700">
            Sí, todos nuestros envíos se realizan en empaques discretos sin ninguna referencia al contenido o a nuestra
            tienda en el exterior.
          </p>

          <div className="mt-8 text-center">
            <Link href="/contacto">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
                ¿Tienes más preguntas? Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

