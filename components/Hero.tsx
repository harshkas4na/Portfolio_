'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { TwitterLogo, XLogo } from "@phosphor-icons/react";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef(null)
  const heroImageRef = useRef(null)

  useEffect(() => {
    function handleMouseLeave(event: any) {
      if (!popupRef.current?.contains(event.relatedTarget) && !heroImageRef.current?.contains(event.relatedTarget)) {
        setShowPopup(false)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave, true)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  return (
    <section className="bg-gradient-to-r from-gray-800 to-black py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Harsh Kasana</h1>
          <p className="text-4xl font-bold mb-8 text-violet-400 dark:text-white">
            Transforming Vision into Reality: <span className="text-blue-400">Pixel by Pixel, Block by Block</span>
          </p>
          <div className="space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-600 hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-lg"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-600 hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-lg"
            >
              <a href='mailto:harshkasana05@gmail.com'>
                Contact Me
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div
            ref={heroImageRef}
            className="rounded-full w-64 h-64 mx-auto border-4 border-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-3"
            onMouseEnter={() => setShowPopup(true)}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {showPopup && (
            <div 
              ref={popupRef}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 p-6 rounded-3xl shadow-lg"
              style={{
                background: "radial-gradient(circle at 30% 30%, #f0f0f0)",
                border: "2px solid #e0e0e0",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <div className="relative">
                <p className="text-gray-100 text-sm mb-4">Explore my professional journey and connect with me on:</p>
                <div className="flex justify-center space-x-6">
                  <Link href="https://www.linkedin.com/in/harsh-kasana-8b6a79258/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </Link>
                  <Link href="https://x.com/HarshKasan89518" target="_blank" rel="noopener noreferrer">
                    <XLogo size={32} weight="bold" className="text-gray-200" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
