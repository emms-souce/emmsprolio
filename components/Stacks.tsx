import { color } from 'framer-motion'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from'react-icons/si'
import { SiNextdotjs as FaNextjs } from 'react-icons/si'
import { SiTailwindcss as FaTailwind } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'


const stackItems =[
    {
        id:1,
        title:"React",
        icon:"FaReact",
        color:"#61DAFB",
    },
    {
        id:2,
        title:"Next",
        icon:"FaNextjs", 
        color:"#090808",
    },
    {
        id:3,
        title:"Tailwind",
        icon:"FaTailwind",
        color:"#38B2AC",
    },
    {
        id:4,
        title:"typescript",
        icon:"SiTypescript",
        color:"#007ACC",
    },
    {
        id:5,
        title:"Postgresql",
        icon:"FaDatabase",
        color:"#336791",
      
    },
    {
        id:6,
        title:"Nestjs",
        icon:"FaNextjs",
        color:"#E0234E",
    }


]

function Stacks() {
  // Mapping des noms d'icônes aux composants d'icônes réels
  const iconComponents = {
    FaReact,
    FaNextjs,
    FaTailwind,
    SiTypescript,
    FaDatabase
  };

  return (
    <section id='stack' className="py-16 glass">
      <h2 className="text-2xl font-bold mb-6 text-center">My Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-5 max-w-[1200px] mx-auto">
        {stackItems.map((stack) => {
          const IconComponent = iconComponents[stack.icon as keyof typeof iconComponents];
          return (
            <div key={stack.id} className="flex flex-col items-center bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
              {IconComponent && (
                <IconComponent 
                  size={40} 
                  color={stack.color} 
                  className="mb-2"
                />
              )}
              <span className="text-sm font-medium">{stack.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Stacks