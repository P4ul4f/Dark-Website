import EcosystemIcon from '../assets/icons/ecosystem.svg';
import {motion} from 'framer-motion';
import { Feature } from './Feature';
import GlobeIcon from '../assets/images/globo.png';
import SpeedometerIcon from '../assets/images/speer.png';
import LinkIcon from '../assets/images/link.png';
import PaletteIcon from '../assets/images/palette.png';
import ShoppingCartIcon from '../assets/images/shopping.png';
import ServerIcon from '../assets/images/server.png';

const features = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building end-to-end web applications, from frontend design to backend architecture.",
    icon: GlobeIcon,
  },
  {
    title: "Website Optimization",
    description:
      "Enhancing site performance, user experience, and overall functionality to meet modern standards.",
    icon: SpeedometerIcon,  
  },
  {
    title: "API Integration",
    description:
      "Seamless integration of third-party services and APIs, allowing for better communication and automation.",
    icon: LinkIcon,
  },
  {
    title: "Custom Web Design",
    description:
      "Crafting unique, responsive, and user-friendly interfaces that are fully aligned with your brand identity.",
    icon: PaletteIcon,
  },
  {
    title: "E-commerce Development",
    description:
      "Implementing e-commerce functionalities that improve sales conversions and customer retention.",
    icon: ShoppingCartIcon,
  },
  {
    title: "High-Performance Backend Solutions",
    description:
      "Designing secure, scalable backend systems that can handle your growing business needs.",
    icon: ServerIcon,
  },

];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" >
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          Services I Offer
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70 '>
          Whether you are looking to create a new platform from scratch or optimize an existing one, 
          I provide comprehensive web development services that cover a wide range of technologies and practices. 
          Here&apos;s what I can help you with:
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 '>
          {features.map(({title,description,icon}) =>
            <Feature title={title} description={description} icon={icon} key={title}/>
          )}
        </div>
      </div>

    </div>
  );
};
