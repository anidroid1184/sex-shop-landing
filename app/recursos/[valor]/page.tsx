import { Button } from "@/components/ui/button"

export default function RecursoPage({ params }: { params: { valor: string } }) {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Recursos sobre {params.valor}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Introducción</h2>
          <p className="mb-4 text-gray-700">
            Aquí puedes poner una introducción sobre {params.valor} y su importancia en el contexto de la diversidad
            sexual y de género.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Puntos Clave</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Aquí puedes poner un punto clave sobre {params.valor}</li>
            <li>Aquí puedes poner otro punto clave sobre {params.valor}</li>
            <li>Aquí puedes poner un tercer punto clave sobre {params.valor}</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Recursos Adicionales</h2>
          <p className="mb-4 text-gray-700">
            Aquí puedes poner enlaces a recursos adicionales, libros, artículos o videos relacionados con {params.valor}
            .
          </p>

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
              Explorar Productos Relacionados
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

