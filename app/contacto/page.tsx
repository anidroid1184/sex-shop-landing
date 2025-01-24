import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Contacto
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Estamos aquí para ayudarte</h2>
          <p className="mb-4 text-gray-700">
            Si tienes alguna pregunta, sugerencia o simplemente quieres charlar, no dudes en ponerte en contacto con
            nosotros. Estamos comprometidos a proporcionar un servicio amigable y respetuoso a todos nuestros clientes.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Información de contacto</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Email: info@diverselove.com</li>
            <li>Teléfono: +1 (555) 123-4567</li>
            <li>Dirección: 123 Calle Inclusiva, Ciudad Diversa, 12345</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Formulario de contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

