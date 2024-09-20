'use client'

import React from 'react'
import Link from 'next/link'
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gray-800 z-20 flex flex-col items-center justify-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <nav className="flex flex-col space-y-6 text-2xl">
            <Link href="#about" className="hover:text-blue-400 transition-colors" onClick={onClose}>About</Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors" onClick={onClose}>Projects</Link>
            <Link href="#toolbox" className="hover:text-blue-400 transition-colors" onClick={onClose}>Toolbox</Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors" onClick={onClose}>Contact</Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
