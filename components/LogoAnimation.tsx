"use client"

import Image from "next/image";
import {motion} from "framer-motion";
// Remove the unnecessary import
// import { div } from "framer-motion/client";

const images = [
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    alt: "Material UI",
   },
   {
    src: "https://ui.shadcn.com/favicon.ico",
    alt: "Shadcn UI",
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
   },
 
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React.js",
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    alt: "Vite", 
   },
   {
    src: "https://zustand-demo.pmnd.rs/favicon.ico",
    alt: "Zustand", 
   },
   {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
   },
  
]


export const LogoAnimation = () => {

    return(
        <div className="py-8 bg-gray-800 opacity-80 ">
            <div className="container mx-auto max-w-xl">
                <div className="overflow-hidden  [mask-image:linear-gradient(to_right,_transparent,_black_25%,black_75%,_transparent)]">

                    <motion.div className="flex gap-14 flex-none pr-14"
                    animate ={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 35 ,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }}
                    >
                        {images.map((image,index) => (
                           <Image
                           key={index}
                           src={image.src}
                           alt={image.alt}
                           width={30}
                           height={30}
                           unoptimized={true}
                           /> 
                        ))}
                        
                    </motion.div>

                </div>

            </div>
        </div>
    )
}