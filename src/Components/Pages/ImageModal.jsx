import React from 'react';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={onClose}>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg shadow-lavender-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-magenta-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-magenta-600 transition">    
          &times;
        </button>
        <img src={imageSrc} alt="Enlarged" className="max-w-full max-h-[80vh] object-cover" />
      </div>
    </div>
  );
};

export default ImageModal;
