'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";


const projects = [
  {
    title: "MERCADO",
    description: "A Dynamic NFTs Marketplace",
    details: "Built with React, Node.js, and MongoDB. Features include user authentication, product catalog, and payment integration.",
    liveLink: "https://ecommerce-example.com",
    githubLink: "https://github.com/johndoe/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "FIDUCIA",
    description: "Streamline your workflow",
    details: "Developed using React and Firebase. Includes features like task creation, assignment, and real-time updates.",
    liveLink: "https://taskmanager-example.com",
    githubLink: "https://github.com/johndoe/task-manager",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    title: "SUBASTA",
    description: "Showcase your work",
    details: "Designed and built using Next.js and Tailwind CSS. Responsive design with dark mode support.",
    liveLink: "https://portfolio-example.com",
    githubLink: "https://github.com/johndoe/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
  },
  {
    title: "HEALTHSPHERE",
    description: "Showcase your work",
    details: "Designed and built using Next.js and Tailwind CSS. Responsive design with dark mode support.",
    liveLink: "https://portfolio-example.com",
    githubLink: "https://github.com/johndoe/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
  },
  {
    title: "REACTIVE TEMPLATE GENERATOR",
    description: "Showcase your work",
    details: "Designed and built using Next.js and Tailwind CSS. Responsive design with dark mode support.",
    liveLink: "https://portfolio-example.com",
    githubLink: "https://github.com/johndoe/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
  },
  {
    title: "SECUREID-CHAIN",
    description: "Showcase your work",
    details: "Designed and built using Next.js and Tailwind CSS. Responsive design with dark mode support.",
    liveLink: "https://portfolio-example.com",
    githubLink: "https://github.com/johndoe/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
  }
]


const ProjectCard = ({ project }) => (
  <Card className="bg-black text-gray-100  transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer transform hover:scale-105 w-full max-w-sm mx-auto">
    <Link href={project.liveLink}>
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-xs text-gray-300 mb-4">{project.details}</p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="group bg-gray-600 hover:bg-gray-500 transition-colors text-xs">
            <ExternalLink className="mr-1 h-3 w-3" />
            View Project
          </Button>
          <Button variant="outline" size="sm" className="group bg-gray-600 hover:bg-gray-500 transition-colors text-xs" asChild>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <Github className="mr-1 h-3 w-3" />
              GitHub
            </Link>
          </Button>
        </div>
      </CardContent>
    </Link>
  </Card>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + projectsPerPage) % projects.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - projectsPerPage + projects.length) % projects.length
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 ">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
            View All Projects
          </Link>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center space-x-6">
            <Button
              onClick={prevSlide}
              className="bg-gray-700 hover:bg-gray-600 transition-colors"
              size="icon"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex space-x-6  ">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % projects.length;
                return <ProjectCard key={index} project={projects[index]} />;
              })}
            </div>
            <Button
              onClick={nextSlide}
              className="bg-gray-700 hover:bg-gray-600 transition-colors"
              size="icon"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}