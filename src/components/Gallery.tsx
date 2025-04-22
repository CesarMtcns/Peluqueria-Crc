import React from 'react';

const galleryImages = [
  "/images/imagecinco.jpg",
  "/images/imagedoss.jpg",
  "/images/imagetres.jpg",
  "/images/imagecuatro.jpg",
  "/images/imagecinco.jpg",
  "/images/imageseis.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient">Nuestro Trabajo</span>
          </h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explora nuestra galería que muestra el arte y la experiencia de nuestras talentosas obras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Imagen ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">{`Estilo #${index + 1}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
