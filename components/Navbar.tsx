"use client"

import Link from "next/link"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const navlink = [
    {
        id:1,
        link:"#about",
        title:"About", }, 
    {
        id:2,
        link:"#portfolio",
        title:"Portfolio", }, 
    {
        id:3,
        link:"#stack",
        title:"Stack", },
    {
        id:4,
        link:"#contact",
        title:"Contact", },
    

]

export const Navbar =()=>{
    const [nav, setNav] = useState(false)

    const toggleNav = ()=>{
        setNav(!nav)
    }

    const closeNav = ()=>{
        setNav(false)
    }
   
    return(
   <div  className="z-50 flex justify-center w-full text-white font fixed bold">
    <div className="border border-white/20  mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto ">
    <ul className="flex flex-row p-2 space-x-8">
        {
            navlink.map(({id, link, title})=>(
                <li key={id}>
                    <Link className="transform hover:text-white/50 transition-all duration-300 ease-in-out" href={link} onClick={closeNav}>
                    {title}
                    </Link>
                </li>
            ))
        }
    </ul>
    </div>
    <div onClick={toggleNav} className=" md:hidden absolute text-white/70 right-14 boder  rounded z-50 p-2   ">
    {nav? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
    </div>
    <div className={`fixed w-full left-0 top-0 h-full   bg-black/90 tranform transition-trasform duration-300 ${nav? 'translate-x-0':'-translate-x-full'}`}>
    <ul className="flex flex-col items-center justify-center space-y-8 h-full ">
    {
            navlink.map(({id, link, title})=>(
                <li key={id}>
                    <Link  className="text-5xl" href={link} onClick={closeNav}>
                    {title}
                    </Link>
                </li>
            ))
        }
    </ul>
    </div>
   </div>
    )
}