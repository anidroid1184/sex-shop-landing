import React from "react"
import { Catalog } from "@/components/Catalog"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <main>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-8 text-center text-purple-800">Nuestro Catálogo</h1>
            <Catalog />
          </div>
        </section>
      </main>
    </div>
  )
}

