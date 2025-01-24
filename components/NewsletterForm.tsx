"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterForm() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el email a tu servicio de marketing
        console.log("Email submitted:", email)
        setEmail("")
        alert("¡Gracias por suscribirte!")
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
                Dirección de email
            </label>
            <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 sm:max-w-xs"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                >
                    Suscribirse
                </Button>
            </div>
        </form>
    )
}

