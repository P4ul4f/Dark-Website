"use client";
import react from "../assets/images/react.png";
import aws from "../assets/images/aws.png";
import nodejs from "../assets/images/nodejs.png";
import api from "../assets/images/api.png";
import python from "../assets/images/python.png";
import sql from "../assets/images/sql.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import Image from "next/image";
import {motion} from 'framer-motion';


const images = [
  { src: react, alt: "Acme Logo" },
  { src: aws, alt: "Quantum Logo" },
  { src: nodejs, alt: "Echo Logo" },
  { src: api, alt: "Celestial Logo" },
  { src: python, alt: "Pulse Logo" },
  { src: js, alt: "Apex Logo" },
  { src: sql, alt: "Pulse Logo" },
  { src: java, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (

    <div className="bg-black text-white py-[72px] py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Technologies I Use to Elevate Your Project</h2>
      </div>
      <div 
        className="flex text-white/70 overflow-hidden mt-9 before:content-[&apos;&apos;] before:z-10 after:content-[&apos;&apos;] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:before:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]"
      >
        <motion.div
          transition={{
            duration:15,
            ease:"linear",
            repeat:Infinity,
          }}
          initial={{translateX: 0}}
          animate={{translateX: "-50%"}}
          className="flex gap-16 flex-none pr-16">
          {images.map(({ src, alt }, index) => (
            <Image 
              key={index} 
              src={src} alt={alt} 
              className="flex-none h-8 w-auto"/>
          ))}
          {images.map(({ src, alt }, index) => (
            <Image 
              key={index} 
              src={src} alt={alt} 
              className="flex-none h-8 w-auto"/>
          ))}
          {images.map(({ src, alt }, index) => (
            <Image 
              key={index} 
              src={src} alt={alt} 
              className="flex-none h-8 w-auto"/>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
