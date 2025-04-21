
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient">Salon Belleza</span> 
            <br />
            <span className="text-white">Cristina Romero</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Donde la elegancia se fusiona con la experiencia. Experimente la combinación perfecta de estilo y sofisticación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#appointment" className="salon-btn text-center">
            Reservar cita
            </a>
            <a href="#services" className="salon-outline-btn text-center">
            Nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
