import React from 'react';
import MediaModal from './MediaModal';

const MobileMediaGallery = ({ mediaFiles, title, onMediaClick }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMedia, setModalMedia] = React.useState(null);

  const handleItemClick = (media) => {
    setModalMedia(media);
    setModalOpen(true);
    if (onMediaClick) {
      onMediaClick(media);
    }
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl font-title font-bold mb-6 text-center">{title}</h2>
        )}
        <div className="space-y-6">
          {mediaFiles.map((file, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:shadow-neon-purple transition-all duration-300"
              onClick={() => handleItemClick(file)}
            >
              <div className="relative w-full aspect-[3/4]">
                {file.type === 'image' ? (
                  <img 
                    src={file.src} 
                    alt={file.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video 
                    src={file.src} 
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <MediaModal
            file={modalMedia}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default MobileMediaGallery; 