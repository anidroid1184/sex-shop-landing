import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobreNosotrosPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Sobre Nosotros
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Nuestra Historia</h2>
          <p className="mb-4 text-gray-700">
            DiverseLove nació de la pasión por crear un espacio inclusivo donde todas las personas puedan explorar y
            celebrar su sexualidad. Fundada en 2023, nuestra misión es proporcionar productos de calidad y educación
            sexual integral.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Nuestros Valores</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Inclusividad: Celebramos todas las identidades y expresiones de género.</li>
            <li>Educación: Promovemos el conocimiento y la exploración segura.</li>
            <li>Calidad: Ofrecemos productos de alta calidad para tu bienestar.</li>
            <li>Respeto: Fomentamos un ambiente libre de juicios y discriminación.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Nuestro Equipo</h2>
          <p className="mb-4 text-gray-700">
            Somos un equipo diverso de profesionales apasionados por la sexualidad positiva y la inclusión. Nuestro
            personal está capacitado para brindar asesoramiento respetuoso y conocedor a todos nuestros clientes.
          </p>

          <div className="mt-8 text-center">
            <Link href="/contacto">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

