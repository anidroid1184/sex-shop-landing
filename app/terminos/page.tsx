import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TerminosPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Términos y Condiciones
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Aceptación de los términos</h2>
          <p className="mb-4 text-gray-700">
            Al utilizar nuestro sitio web y servicios, aceptas estos términos y condiciones en su totalidad. Si no estás
            de acuerdo con estos términos, por favor, no uses nuestro sitio.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Uso del sitio</h2>
          <p className="mb-4 text-gray-700">
            Nuestro sitio está destinado a personas mayores de 18 años. Al usar nuestro sitio, confirmas que tienes al
            menos 18 años de edad.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Productos y precios</h2>
          <p className="mb-4 text-gray-700">
            Nos esforzamos por proporcionar información precisa sobre nuestros productos y precios. Sin embargo, nos
            reservamos el derecho de corregir errores y cambiar precios sin previo aviso.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Envíos y devoluciones</h2>
          <p className="mb-4 text-gray-700">
            Consulta nuestra política de envíos y devoluciones para obtener información detallada sobre estos procesos.
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

