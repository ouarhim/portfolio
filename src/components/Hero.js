import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="title" className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      </div>
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4 font-title">Graphic Designer & Web Developer</h1>
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-xl mb-8">My name Ilyas live in Morroco multidisciplinary designer blending tradition with innovation. With a background in graphic design, illustration, and web development, I craft powerful visual identities, functional web experiences, and print-ready designs rooted in culture and storytelling. From logo creation and T-shirt graphics to full-stack portfolio sites and Excel-based business systems, I bring creative problem-solving and technical skill together. Fluent in English, French, and Arabic, I collaborate across cultures always learning, always evolving.</p>
        </div>
        <Link to="contact" smooth={true} duration={500} className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition cursor-pointer">Contact Me</Link>
      </motion.div>
    </section>
  );
};

export default Hero; 