"use client"

import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { use, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const  COLORS_TOP = ["#7EF5C9", "#265695","#CE84CF"];
const obj = "/file.svg"


export const Hero=()=>{
    const color = useMotionValue(COLORS_TOP[0]);
    useEffect(() => {
      animate(color, COLORS_TOP,{
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      }) 
    }, [])

    const backgroundImage= useMotionTemplate `radial-gradient(125% 100% at 50%  0%, #000 50%, ${color})`
       
      const border = useMotionTemplate `1px solid ${color}`
      const boxShadow = useMotionTemplate `0px 4px 24px ${color}`


    return(
      <motion.section id="about"
     style ={ {
        backgroundImage
     }}
     className="relative grid min-h-screen place-content-center overflow-hidden  px-4 py-24 text-gray-200 "
     
       >
        <div className="z-10 flex flex-col items-center">
          <span className="mb-1.5 iline-block rounded-full bg-gray-600 px-3 py-1.5 ext-sm ">
            Open for Work 
          </span>
          <h1 className="text-white/40 text-7xl font-black "> Hi, I am </h1>
          <h1 className="maw-w-3xl bg-gradient-to-br from-white to-gray-400  bg-clip-text text-3xl my-5  font-black leading-tight text-transparent  "> Emmanuel Ngongang </h1>
          <div className="flex bg-white/10  shadow-xl p-3 rounded-3xl justify-center items-center  gap-2 mb-4">
          <Image src={obj}
          alt=""
          width={30}
          height={30}
          className="rounded-2xl mx-auto"
          />
          <Image src={obj}
          alt=""
          width={30}
          height={30}
          className="rounded-2xl mx-auto"
          />
          <Image src={obj}
          alt=""
          width={30}
          height={30}
          className="rounded-2xl mx-auto"
          />
         <p className="font-medium">15+ Happy clients</p>
        
          </div>
       
        <p className="my-6 max-w-xl">Fullstack Developer based in Cameroon, with over 2 years of experience</p>
        <motion.button
        style = {{
          border,
          boxShadow, 
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="flex w-fit items-center gap-2 rounded-full px-4 py-2 "
        >
          Download Cv
          <FiArrowRight className=""/>
          
        </motion.button>
        </div>

        <div className="bg-circle-container">
          <div className="bg-circle-background">

          </div>
          {/* <div className="bg-circle">

          </div> */}
        </div>

       </motion.section>
    )

}