import React, { useEffect } from 'react';

const MediaModal = ({ file, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!file) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Media container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {file.type === 'image' ? (
          <img
            src={file.src}
            alt={file.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            loading="eager"
          />
        ) : (
          <video
            src={file.src}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        )}
      </div>

      {/* Touch indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-50 sm:hidden">
        Tap outside to close
      </div>
    </div>
  );
};

export default MediaModal; 