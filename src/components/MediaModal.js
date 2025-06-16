import React from 'react';

const MediaModal = ({ file, onClose }) => {
  if (!file) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div className="relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-3xl font-bold z-10">&times;</button>
        {file.type === 'image' ? (
          <img src={file.src} alt="" className="max-w-full max-h-[90vh] rounded shadow-lg" style={{ display: 'block' }} />
        ) : (
          <video src={file.src} controls autoPlay className="max-w-full max-h-[90vh] rounded shadow-lg" style={{ display: 'block' }} />
        )}
      </div>
    </div>
  );
};

export default MediaModal; 