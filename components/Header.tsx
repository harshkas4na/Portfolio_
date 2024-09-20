// components/Header.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-transparent py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Harsh's Portfolio"
            width={50}
            height={50}
            className="rounded-full"
          />
          <Link href="#" className="text-2xl font-bold text-blue-400">HK</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#toolbox" className="hover:text-blue-400 transition-colors">Toolbox</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}