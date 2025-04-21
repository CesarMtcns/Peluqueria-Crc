
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-salon-black sticky top-0 z-50 border-b border-salon-gold/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-salon-gold">
              Salon de belleza
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-salon-gold">Home</a>
            <a href="#services" className="text-white hover:text-salon-gold">Servicios</a>
            <a href="#gallery" className="text-white hover:text-salon-gold">Galería</a>
            <a href="#location" className="text-white hover:text-salon-gold">Ubicación</a>
            <a href="#appointment" className="text-white hover:text-salon-gold">Reservar cita</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-salon-gold focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-white hover:text-salon-gold">Home</a>
            <a href="#services" className="block text-white hover:text-salon-gold">Services</a>
            <a href="#gallery" className="block text-white hover:text-salon-gold">Gallery</a>
            <a href="#location" className="block text-white hover:text-salon-gold">Location</a>
            <a href="#appointment" className="block text-white hover:text-salon-gold">Book Appointment</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
