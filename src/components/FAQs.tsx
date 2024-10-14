"use client";
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import clsx from 'clsx';
import MinusIcon from '../assets/icons/minus.svg';
import {AnimatePresence, motion} from 'framer-motion';

const items = [
  {
    question: "Tailored Solutions",
    answer:
      "Every project is unique, and I ensure that my solutions are custom-fitted to your specific needs.",
  },
  {
    question: "Timely Delivery",
    answer:
      "I value your time and make it a priority to meet deadlines while maintaining quality.",
  },
  {
    question: "Clear Communication",
    answer:
      "I keep you updated throughout the entire development process, ensuring full transparency and collaboration.",
  },
  {
    question: "Scalable Solutions",
    answer:
      " Whether you need a solution for today or one that can grow with your business, I focus on creating systems that adapt and scale.",
  },
];

const AccordionItem = ({
  question, 
  answer
}:{
  question:string, 
  answer:string
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='py-7 border-b border-white/30' onClick={() => setIsOpen(!isOpen)}>
              <div className='flex items-center '>
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon/> : <PlusIcon/>}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{
                      opacity:0,
                      height:0,
                      marginTop:0,
                    }}
                    animate={{
                      opacity:1,
                      height:"auto",
                      marginTop:'16px',
                    }}
                    exit={{
                      opacity:0,
                      height:0,
                      marginTop:0,
                    }}
                  >
                    {answer}
                  </motion.div>
                  
                )}
              </AnimatePresence>
            </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] py-24">
      <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>
          Why Work With Me?
        </h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({question, answer}) => (
            <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>
        
      </div>
    </div>
  );
};
