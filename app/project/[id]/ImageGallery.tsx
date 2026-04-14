'use client';

import React, { useState } from 'react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative w-full overflow-hidden bg-gray-100" style={{ paddingBottom: '75%' }}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 md:-top-4 md:-right-4 text-white bg-black/50 hover:bg-sky-500 rounded-full p-2 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
            />
          </div>
        </div>
      )}
    </>
  );
}
