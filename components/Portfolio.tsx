"use client";


import Image from 'next/image';
import React, {useState, } from 'react'


const projects = [
    {
        id:1,
        title:"Project 1",
        year:"2024",
        description:'project 1 description here lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, amet consectetur adipisicing elit. Quisquam quos?',
        image:"/window.svg",
        Link:"" 
    } ,
    {
        id:2,
        title:"Project 2",
        year:"2024",
        description:'project 1 description here lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit. Quisquam Quisquam, quos?',
        image:"/file.svg",
        Link:"" 
    } ,
    {
        id:3,
        title:"Project 3",
        year:"2025",
        description:'project 1 description here lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, amet consectetur adipisicing elit. Quisquam quos?',
        image:"/globe.svg",
        Link:"" 
    } 
]



export const  Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(projects[0]);
    return(
        <section id="portfolio" className='py-32  text-white '>
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 py-2'>
                <div>
            <h2 className='text-6xl font-bold mb-10 '> Selected <span className='text-gray-400 '> Projects</span></h2>
            {
                projects.map((project)=>{
                    return (
                        <div onClick={()=> setSelectedProject(project)} key={project.id} className='cursor-pointer mb-8 group'>
                           <p className='text-gray-400 textt-lg mb-2'>{project.year}</p>
                           <h3 className={`text-3xl fonst-semibold group-hover:text-gray-400 trasition-colors duration-300 ${selectedProject.id === project.id ? 'text-gray-200':''}`}> {project.title}</h3>
                           {
                            selectedProject.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4'></div>
                            )
                           }
                           {selectedProject.id === project.id &&(
                            <p className='text-gray-400transition-all duration-500 ease-in-out '>
                                {project.description}
                            </p>
                           )}
                        </div>
                    );
                })
            }
            </div>
           
            <Image width={800} height={450} alt={selectedProject.title} src={selectedProject.image} className='rounded-xl shadow-lg trasition-opactity duration-500 ease-in-out'/ >
            </div>
        </section>
    );
}