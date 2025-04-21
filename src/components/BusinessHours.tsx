
import React from 'react';
import { Clock } from 'lucide-react';

const hours = [
  { day: "Lunes", hours: "11:00 AM - 20:00 PM" },
  { day: "Martes", hours: "11:00 AM - 20:00 PM" },
  { day: "Miércoles", hours: "11:00 AM - 20:00 PM" },
  { day: "Jueves", hours: "11:00 AM - 20:00 PM" },
  { day: "Viernes", hours: "11:00 AM - 20:00 PM" },
  { day: "Sábado", hours: "11:00 AM - 18:00 PM" },
  { day: "Domingo", hours: "Cerrado" },
];

const BusinessHours = () => {
  return (
    <section className="py-16 bg-salon-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient">Horario de trabajo</span>
          </h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Clock className="text-salon-gold" />
            Estamos abiertos de lunes a sábado para atenderle.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-salon-black rounded-lg border border-salon-gold/30 overflow-hidden">
          <div className="divide-y divide-salon-gold/20">
            {hours.map((item, index) => (
              <div 
                key={index} 
                className={`flex justify-between px-6 py-4 ${item.day === "Sunday" ? "bg-salon-black/50" : ""}`}
              >
                <span className="font-medium">{item.day}</span>
                <span 
                  className={`${
                    item.hours === "Closed" ? "text-red-400" : "text-salon-gold"
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
