import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductosPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Nuestros Productos
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Explora nuestra colección</h2>
          <p className="mb-4 text-gray-700">
            En DiverseLove, ofrecemos una amplia gama de productos diseñados para celebrar la diversidad y el placer.
            Nuestra colección está cuidadosamente seleccionada para satisfacer todas las necesidades y preferencias.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Categorías principales</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Juguetes para todos los géneros</li>
            <li>Lencería inclusiva</li>
            <li>Productos para el cuidado íntimo</li>
            <li>Accesorios BDSM seguros</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Nuestro compromiso</h2>
          <p className="mb-4 text-gray-700">
            Todos nuestros productos son seleccionados teniendo en cuenta la calidad, la seguridad y la inclusividad.
            Trabajamos con marcas que comparten nuestros valores de respeto a la diversidad.
          </p>

          <div className="mt-8 text-center">
            <Link href="https://tu-tienda.myshopify.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
                Explorar todos los productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

