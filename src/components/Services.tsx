
import React from 'react';
import { Scissors, Brush, Sparkles, Droplets } from 'lucide-react';

const serviceItems = [
  {
    icon: <Scissors className="w-12 h-12 text-salon-gold" />,
    title: "Cortes de cabello y peinados",
    description: "Cortes profesionales diseñados para realzar tus rasgos únicos. Desde estilos clásicos hasta contemporáneos.",
  },
  {
    icon: <Brush className="w-12 h-12 text-salon-gold" />,
    title: "Color",
    description: "Servicios de color premium que utilizan productos de primera calidad para obtener resultados vibrantes y duraderos.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-salon-gold" />,
    title: "Ocasión especial",
    description: "Estilismo elegante para bodas, galas y eventos especiales que exigen una presentación impecable.",
  },
  {
    icon: <Droplets className="w-12 h-12 text-salon-gold" />,
    title: "Tratamientos",
    description: "Tratamientos rejuvenecedores para restaurar la salud y el brillo del cabello dañado o estresado.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-salon-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient">Nuestros Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de servicios capilares premium diseñados para realzar su belleza natural y expresar su estilo único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-salon-black p-6 rounded-lg border border-salon-gold/20 hover:border-salon-gold transition-colors">
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-salon-gold text-center">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
