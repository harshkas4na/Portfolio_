import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Toolbox from '@/components/Toolbox'
import React from 'react'


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-100">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

