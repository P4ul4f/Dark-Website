"use client";
import { useEffect, useRef } from 'react';
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion';
import { StaticImageData } from 'next/image';
import GlobeIcon from '../assets/images/globo.png';
import SpeedometerIcon from '../assets/images/speer.png';
import LinkIcon from '../assets/images/link.png';
import PaletteIcon from '../assets/images/palette.png';
import ShoppingCartIcon from '../assets/images/shopping.png';
import ServerIcon from '../assets/images/server.png';
import Image from 'next/image';

export const Feature = ({
    title, 
    description,
    icon,
}:{
    title: string;
    description: string;
    icon: StaticImageData;
}) => {
    
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px at ${offsetX}px ${offsetY}px, black, transparent)`;

    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set (e.x - borderRect?.x);
            offsetY.set (e.y - borderRect?.y);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, [offsetX, offsetY]);

    return (
        <div className='max-w-lg mx-auto border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
            <motion.div 
                className='absolute inset-0 border-2 rounded-xl border-purple-400' 
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage:maskImage,
                }}
                 ref={border}   
                >
            </motion.div>
            <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
                <Image src={icon.src} alt={`${title} icon`} className='h-12 w-12' />
            </div>
            <h3 className='mt-6 font-bold'>{title}</h3>
            <p className='mt-2 text-white/70'>{description}</p>
        </div>
    );
};