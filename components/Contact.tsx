import React from 'react'
import Link from 'next/link'
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-600 hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-lg"
          asChild
        >
          <Link href="mailto:harshkasana05@gmail.com" className="inline-flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </Link>
        </Button>
      </div>
    </section>
  )
}