import React from 'react';
import { motion } from 'framer-motion';
import MediaModal from './MediaModal';

// Dynamically import all images and videos from src/webdesign
const mediaContext = require.context('../webdesign', false, /\.(png|jpe?g|gif|mp4|webm)$/);
const mediaFiles = mediaContext.keys().map((key) => ({
  src: mediaContext(key),
  name: key.replace(/^\.\//, '').replace(/\.[^/.]+$/, ''),
  type: key.match(/\.(mp4|webm)$/) ? 'video' : 'image',
}));

const WebDesign = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMedia, setModalMedia] = React.useState(null);
  return (
    <section id="webdesign" className="py-20 bg-black text-white relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-[16vw] h-[16vw] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute right-1/4 top-1/2 w-[16vw] h-[16vw] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute left-1/2 top-1/2 w-[14vw] h-[14vw] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
      </div>
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-title font-bold mb-8 text-center">Web Design & Developement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaFiles.map((file, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-900 rounded-lg p-4 cursor-pointer" onClick={() => { setModalMedia(file); setModalOpen(true); }}>
              {file.type === 'image' ? (
                <img src={file.src} alt="" className="w-full max-w-full h-64 object-cover rounded mb-2" />
              ) : (
                <video src={file.src} className="w-full max-w-full h-64 object-cover rounded mb-2" />
              )}
            </div>
          ))}
        </div>
        {modalOpen && <MediaModal file={modalMedia} onClose={() => setModalOpen(false)} />}
      </motion.div>
    </section>
  );
};

export default WebDesign; 