import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ValueCardProps {
  title: string
  description: string
  link: string
}

export default function ValueCard({ title, description, link }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-4 text-pink-600">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link}>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300">
          Saber más
        </Button>
      </Link>
    </div>
  )
}

