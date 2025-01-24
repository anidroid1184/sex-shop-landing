import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: number
  name: string
  description: string
}

export default function ProductCard({ id, name, description }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
      <h4 className="text-lg font-semibold mb-2 text-purple-600">{name}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={`/producto/${id}`}>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300">
          Ver Detalles
        </Button>
      </Link>
    </div>
  )
}

