'use client';

import React, { useState, useRef } from 'react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailRef.current) {
      const scrollAmount = 300;
      thumbnailRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up opacity-0`}
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative w-full overflow-hidden bg-gray-100" style={{ paddingBottom: '75%' }}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          data-modal-open="true"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative inline-block max-w-full max-h-full">
              {/* Close button - positioned at the top-right of the image */}
              <button 
                className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-white hover:text-gray-300 p-2 transition-transform hover:scale-110 z-[10000] drop-shadow-md flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedImage} 
                alt="Full screen view" 
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div 
              className="mt-4 md:mt-6 w-full max-w-4xl relative flex items-center justify-center shrink-0 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button 
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors flex items-center justify-center shadow-md active:scale-95 border border-white/10"
                aria-label="Scroll thumbails left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Thumbnails Container */}
              <div 
                ref={thumbnailRef}
                onWheel={(e) => {
                  if (thumbnailRef.current) {
                    // Prevent page scroll and scroll the container horizontally instead
                    e.preventDefault();
                    e.stopPropagation();
                    thumbnailRef.current.scrollBy({
                      left: e.deltaY < 0 ? -100 : 100,
                      behavior: 'auto'
                    });
                  }
                }}
                className="flex gap-3 overflow-x-auto overscroll-none pb-4 pt-2 px-2 shrink-0 flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image.src)}
                    className={`relative h-16 md:h-20 w-24 md:w-32 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      selectedImage === image.src 
                        ? 'border-sky-500 scale-105 opacity-100 shadow-lg shadow-sky-500/20' 
                        : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="absolute inset-0 h-full w-full object-cover bg-white" 
                    />
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors flex items-center justify-center shadow-md active:scale-95 border border-white/10"
                aria-label="Scroll thumbails right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
