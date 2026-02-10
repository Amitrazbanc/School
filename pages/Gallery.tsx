
import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "School Building" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Classroom Learning" },
    { url: "https://images.unsplash.com/photo-1523050853063-913639473ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Library Hall" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Annual Sports Meet" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Science Lab" },
    { url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Cultural Program" },
    { url: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Teachers Seminar" },
    { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Convocation Ceremony" },
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-indigo-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
          <Camera className="mr-4 w-10 h-10 text-indigo-400" /> School Gallery
        </h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">Capturing the vibrant moments and beautiful memories of our school life.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => setSelectedImg(img.url)}
            >
              <img src={img.url} alt={img.title} className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <Maximize2 className="w-10 h-10 mb-2 transform scale-50 group-hover:scale-100 transition-transform" />
                <span className="font-bold text-sm">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-indigo-400 transition-colors">
            <X className="w-12 h-12" />
          </button>
          <img src={selectedImg} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain" alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
