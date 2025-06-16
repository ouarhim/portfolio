import React from 'react';
import Section from './Section'; // Assuming Section component is in the same directory
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Section id="contact" title="CONTACT US" subtitle="Get in touch.">
      {<div className="flex flex-col items-center pb-10 space-y-4 mt-8">
        <a
          href="https://wa.me/212631056652"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full flex items-center transition"
        >
          <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 32 32">
            <g>
              <circle cx="16" cy="16" r="16" fill="#fff"/>
              <path fill="#25d366" d="M23.47 19.6c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.17-.17.39-.45.58-.68.19-.23.25-.39.37-.65.12-.26.06-.48-.03-.66-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.8-.61-.21-.01-.45-.01-.7-.01-.24 0-.62.09-.94.43-.32.34-1.23 1.23-1.22 2.99.01 1.76 1.26 3.46 1.44 3.7.18.24 2.47 3.8 6 5.19.84.36 1.5.57 2.01.72.84.27 1.6.23 2.19.15.67-.1 2.01-.81 2.29-1.6.28-.79.28-1.46.19-1.6-.09-.14-.33-.23-.7-.41z"/>
            </g>
          </svg>
          WhatsApp
        </a>
        <a
          href="https://t.me/yourtelegramusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full flex items-center transition"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.371 0 12c0 6.629 5.371 12 12 12s12-5.371 12-12c0-6.629-5.371-12-12-12zm5.707 8.293l-1.414 8.485c-.107.646-.465.803-.941.594l-2.609-1.926-1.259 1.213c-.139.139-.256.256-.525.256l.188-2.668 4.859-4.389c.211-.188-.045-.293-.328-.105l-6.012 3.783-2.588-.808c-.562-.176-.573-.562.117-.781l10.117-3.111c.469-.137.879.105.729.779z"/></svg>
          Telegram
        </a>
      </div>}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl mb-4 font-body">You can reach me at:</p>
        <p className="text-lg font-bold font-body">Ilyasouarhim@gmail.com</p>
        {/* Add more contact details or a form as needed */}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[8vw] h-[8vw] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[8vw] h-[8vw] bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[9vw] h-[9vw] bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
      </div>
    </Section>
  );
};

export default Contact; 