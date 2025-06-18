import React from 'react';
import { motion } from 'framer-motion';
import MediaModal from './MediaModal';
import MobileMediaGallery from './MobileMediaGallery';

// Dynamically import all images and videos from src/poster
const mediaContext = require.context('../poster', false, /\.(png|jpe?g|gif|mp4|webm)$/);
const mediaFiles = mediaContext.keys().map((key) => {
  try {
    return {
      src: mediaContext(key),
      name: key.replace(/^\.\//, '').replace(/\.[^/.]+$/, ''),
      type: key.match(/\.(mp4|webm)$/) ? 'video' : 'image',
    };
  } catch (error) {
    console.error(`Error loading media file ${key}:`, error);
    return null;
  }
}).filter(Boolean);

const Poster = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMedia, setModalMedia] = React.useState(null);

  return (
    <section id="poster" className="w-full py-20 bg-black text-white relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-[16vw] h-[16vw] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute right-1/4 top-1/2 w-[16vw] h-[16vw] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute left-1/2 top-1/2 w-[14vw] h-[14vw] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[16vw] h-[16vw] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden w-full">
        <MobileMediaGallery
          mediaFiles={mediaFiles}
          title="Poster"
          onMediaClick={(media) => {
            setModalMedia(media);
            setModalOpen(true);
          }}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full">
        <motion.div 
          className="w-full max-w-7xl mx-auto px-4 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-8xl font-title font-bold mb-20 text-center">Poster</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
            {mediaFiles.map((file, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center bg-gray-900 rounded-lg p-2 md:p-4 cursor-pointer hover:shadow-neon-purple transition-all duration-300"
                onClick={() => { setModalMedia(file); setModalOpen(true); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden rounded">
                  {file.type === 'image' ? (
                    <img 
                      src={file.src} 
                      alt={file.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Error loading image: ${file.src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <video 
                      src={file.src} 
                      className="w-full h-full object-cover"
                      controls
                      onError={(e) => {
                        console.error(`Error loading video: ${file.src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Shared Modal */}
      {modalOpen && <MediaModal file={modalMedia} onClose={() => setModalOpen(false)} />}
    </section>
  );
};

export default Poster; 