import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/harshkas4na" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/harsh-kasana-8b6a79258/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://x.com/HarshKasan89518" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="mailto:john.doe@example.com" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-center text-sm">© 2024 Harsh Kasana. All rights reserved.</p>
      </div>
    </footer>
  )
}