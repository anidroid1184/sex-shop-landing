import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Producto {params.id}</h1>
      <div className="bg-gray-200 h-64 w-64 rounded-md mb-4"></div>
      <p className="mb-4">Descripción detallada del producto.</p>
      <Link href="https://tu-tienda.myshopify.com/product-url" target="_blank" rel="noopener noreferrer">
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
          Comprar ahora
        </Button>
      </Link>
    </div>
  )
}

