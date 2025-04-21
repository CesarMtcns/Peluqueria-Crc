import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-salon-gold">
              Cristina Romero
            </h2>
            <p className="text-gray-400 mt-2">
              Servicios de peluquería de lujo
            </p>
          </div>
        </div>

        <div className="border-t border-salon-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Salón de Belleza Cristina Romero. Todos los
              derechos reservados.
            </p>

            <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-center md:text-left">
              <Link
                to="/privacidad"
                className="text-gray-400 hover:text-salon-gold mb-2 md:mb-0"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/condiciones"
                className="text-gray-400 hover:text-salon-gold mb-2 md:mb-0"
              >
                Condiciones de Servicio
              </Link>
              <a
                href="https://wa.me/56956639851"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-salon-gold"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
