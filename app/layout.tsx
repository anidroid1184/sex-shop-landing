import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DiverseLove - Sex Shop Inclusiva",
  description: "Celebrando la diversidad y el placer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="py-6 px-4 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
              <Link
                href="/"
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              >
                DiverseLove
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-purple-600">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/catalogo" className="text-gray-600 hover:text-purple-600">
                      Catálogo
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-purple-600">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-purple-600">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {children}

          <footer className="bg-purple-900 text-white py-8 px-4 mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">DiverseLove</h4>
                <p>Celebrando la diversidad y el placer desde 2023.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-pink-300">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-pink-300">
                      Términos y Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-pink-300">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-pink-300">
                    Facebook
                  </Link>
                  <Link href="#" className="hover:text-pink-300">
                    Instagram
                  </Link>
                  <Link href="#" className="hover:text-pink-300">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

