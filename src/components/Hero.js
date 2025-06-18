import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="title" className="relative min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      </div>
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold mb-8 sm:mb-8 font-title">Graphic Designer & Web Developer</h1>
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <p className="text-base sm:text-lg md:text-2xl mb-6 mt-20 sm:mb-8 leading-relaxed">
            My name Ilyas live in Morroco multidisciplinary designer blending tradition with innovation. With a background in graphic design, illustration, and web development, I craft powerful visual identities, functional web experiences, and print-ready designs rooted in culture and storytelling. From logo creation and T-shirt graphics to full-stack portfolio sites and Excel-based business systems, I bring creative problem-solving and technical skill together. Fluent in English, French, and Arabic, I collaborate across cultures always learning, always evolving.
          </p>
        </div>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="inline-block bg-white text-black px-6 py-3 rounded-full mt-20 font-bold hover:bg-gray-200 transition cursor-pointer text-sm sm:text-base md:px-8 md:py-4 md:text-lg"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 