'use client'

import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Twitter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type ToolboxProps = {
  items: {
    title: string
    icon: React.ElementType
  }[]
  itemsWrapperClassName?: string
  className?: string
}

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolboxProps) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6',
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-lg hover:-translate-y-1'
              >
                {React.createElement(item.icon, { className: "w-6 h-6" })}
                <span className='font-semibold'>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef(null)
  const heroImageRef = useRef(null)

  useEffect(() => {
    function handleMouseLeave(event:any) {
      if (!popupRef.current?.contains(event.relatedTarget) && !heroImageRef.current?.contains(event.relatedTarget)) {
        setShowPopup(false)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave, true)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store",
      details: "Built with React, Node.js, and MongoDB. Features include user authentication, product catalog, and payment integration.",
      liveLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/johndoe/ecommerce-platform",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Task Management App",
      description: "Streamline your workflow",
      details: "Developed using React and Firebase. Includes features like task creation, assignment, and real-time updates.",
      liveLink: "https://taskmanager-example.com",
      githubLink: "https://github.com/johndoe/task-manager",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      title: "Portfolio Website",
      description: "Showcase your work",
      details: "Designed and built using Next.js and Tailwind CSS. Responsive design with dark mode support.",
      liveLink: "https://portfolio-example.com",
      githubLink: "https://github.com/johndoe/portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    }
  ]

  const technologies = [
    { title: "JavaScript", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" /> },
    { title: "React", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" /> },
    { title: "Node.js", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" /> },
    { title: "TypeScript", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" /> },
    { title: "MongoDB", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" /> },
    { title: "AWS", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-6 h-6" /> },
    { title: "Python", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" /> },
    { title: "Docker", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" /> },
    { title: "GraphQL", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" className="w-6 h-6" /> },
    { title: "Redux", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-6 h-6" /> },
    { title: "Sass", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" className="w-6 h-6" /> },
    { title: "Git", icon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" /> }
  ]

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-4 px-6 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="John Doe"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link href="#" className="text-2xl font-bold text-blue-400">JD</Link>
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
      </header>

      <AnimatePresence>
        {isMenuOpen && (
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
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <nav className="flex flex-col space-y-6 text-2xl">
              <Link href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="#toolbox" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Toolbox</Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">John Doe</h1>
              <p className="text-2xl mb-8">Crafting Digital Experiences with Code</p>
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
                  Contact Me
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
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {showPopup && (
                <div 
                  ref={popupRef}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-6 rounded-3xl shadow-lg"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #ffffff, #f0f0f0)",
                    border: "2px solid #e0e0e0",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative">
                    <p className="text-gray-800 text-sm mb-4">See my project journey on:</p>
                    <div className="flex justify-center space-x-6">
                      <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        <Linkedin className="h-8 w-8 text-blue-600" />
                      </Link>
                      <Link href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <Twitter className="h-8 w-8 text-blue-400" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-8">About Me</h2>
            <p className="text-gray-300 text-lg max-w-3xl">
              I'm a passionate full stack developer with 5 years of experience in building web applications. I
              specialize in React, Node.js, and cloud technologies, creating efficient and scalable solutions for complex problems.
              My goal is to craft exceptional digital experiences that make a positive impact.
            </p>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-700 text-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer transform hover:scale-105">
                  <Link href={project.liveLink} passHref>
                    <Link href={project.liveLink}>
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-300 mb-4">{project.details}</p>
                        <div className="flex space-x-4">
                          <Button variant="outline" size="sm" className="group bg-gray-600 hover:bg-gray-500 transition-colors">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </Button>
                          <Button variant="outline" size="sm" className="group bg-gray-600 hover:bg-gray-500 transition-colors" asChild>
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="toolbox" className="py-20 px-6 overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-8">My Toolbox</h2>
            <p className="text-gray-300 mb-8">Technologies and tools I use to bring ideas to life:</p>
            <ToolboxItems
              items={technologies}
              className="mb-8"
              itemsWrapperClassName="animate-marquee"
            />
            <ToolboxItems
              items={technologies}
              itemsWrapperClassName="animate-marquee-reverse"
            />
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gray-800">
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
              <Link href="mailto:john.doe@example.com" className="inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="mailto:john.doe@example.com" className="hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-center text-sm">© 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}