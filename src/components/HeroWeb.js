import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function HeroWeb() {
  return (
    <div id="title" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20"
        >
          Graphic Designer & Web Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-20 max-w-6xl"
        >
          My name Ilyas live in Morroco multidisciplinary designer blending tradition with innovation. With a background in graphic design, illustration, and web development, I craft powerful visual identities, functional web experiences, and print-ready designs rooted in culture and storytelling. From logo creation and T-shirt graphics to full-stack portfolio sites and Excel-based business systems, I bring creative problem-solving and technical skill together. Fluent in English, French, and Arabic, I collaborate across cultures always learning, always evolving.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to="contact" 
            smooth={true}
            duration={500}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 