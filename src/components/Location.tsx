
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient">Encuéntranos</span>
          </h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Visita nuestro salón para una experiencia premium en el cuidado del cabello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-salon-black p-6 rounded-lg border border-salon-gold/30">
            <h3 className="text-xl font-semibold mb-6 text-salon-gold">Información del contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-salon-gold flex-shrink-0 mr-4 mt-1" />
                <div>
                  <p className="font-medium mb-1">Direccion</p>
                  <p className="text-gray-300">Los Boldos 222<br />Valle Volcanes<br />Puerto Montt, Chile</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-salon-gold flex-shrink-0 mr-4 mt-1" />
                <div>
                  <p className="font-medium mb-1">Contactanos</p>
                  <p className="text-gray-300">+569 78294219</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-salon-gold flex-shrink-0 mr-4 mt-1" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-gray-300">crc.cristinaromero@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 overflow-hidden rounded-lg border border-salon-gold/30 h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1234567890123!2d-73.1234567890123!3d-41.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9616361234567890%3A0x1234567890abcdef!2sLos%20Boldos%20222%2C%20Puerto%20Montt%2C%20Chile!5e0!3m2!1ses!2scl!4v1611234567890!5m2!1ses!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
