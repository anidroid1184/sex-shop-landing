'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import NewsletterForm from './NewsletterForm'

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 5000) // Muestra el popup después de 5 segundos

        return () => clearTimeout(timer)
    }, [])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-purple-800">¡Únete a nuestra comunidad!</h2>
                <p className="mb-4 text-gray-600">
                    Suscríbete para recibir las últimas novedades, ofertas exclusivas y contenido educativo.
                </p>
                <NewsletterForm />
                <Button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300"
                >
                    No, gracias
                </Button>
            </div>
        </div>
    )
}
