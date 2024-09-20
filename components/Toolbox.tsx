'use client'

import React from 'react'

const technologies = [
  { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { title: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { title: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { title: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { title: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { title: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { title: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { title: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { title: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { title: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { title: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { title: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { title: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { title: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { title: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { title: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { title: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { title: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { title: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { title: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { title: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { title: "Rust", icon: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" },
    { title: "Solana", icon: "https://cryptologos.cc/logos/solana-sol-logo.svg" },
  { title: "Recoil", icon: "https://seeklogo.com/images/R/recoil-js-logo-0FA612F129-seeklogo.com.png" },

];
const ToolboxItem = ({ title, icon }) => (
  <div className="flex flex-col items-center p-4 skew-x-2 transition-all duration-200 transform hover:scale-105 hover:rotate-1 hover:shadow-lg">
    <img src={icon} alt={title} className="w-16 h-16 mb-2" />
    <span className="text-sm text-center">{title}</span>
  </div>
)

const Toolbox = () => {
  const halfLength = Math.ceil(technologies.length / 2)
  const firstRow = technologies.slice(0, halfLength)
  const secondRow = technologies.slice(halfLength)

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Toolbox</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
  These are the technologies and tools I use to bring ideas to life. 
  From front-end frameworks to back-end solutions, and blockchain development 
  on Ethereum and Solana, I'm constantly expanding my full-stack expertise.
</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-wrap justify-center">
            {firstRow.map((tech, index) => (
              <ToolboxItem key={index} {...tech} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {secondRow.map((tech, index) => (
              <ToolboxItem key={`second-${index}`} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbox




