
import React, { useState } from 'react';
import { Calendar, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `*Solicitud de nueva cita*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Fecha:* ${formData.date}\n` +
      `*Tiempo:* ${formData.time}\n` +
      `*Servicio:* ${formData.service}\n` +
      `*Mensaje:* ${formData.message}`
    );

    // WhatsApp business number (replace with actual number)
    const phoneNumber = "56956639851";
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    
    // Show success toast
    toast({
      title: "Solicitud de cita preparada",
      description: "Serás redirigido a WhatsApp para enviar los detalles de tu cita.s.",
    });
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="appointment" className="section-padding bg-salon-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient">Reservar una cita</span>
          </h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Agenda tu cita y te confirmamos vía WhatsApp
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-salon-black rounded-lg border border-salon-gold/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-salon-gray-dark border-salon-gold/30 focus:border-salon-gold text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                Número de teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}

                  required
                  className="bg-salon-gray-dark border-salon-gold/30 focus:border-salon-gold text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                Dirección de correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-salon-gray-dark border-salon-gold/30 focus:border-salon-gold text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium">
                Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-salon-gray-dark border border-salon-gold/30 focus:border-salon-gold text-white rounded-md px-3 py-2"
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Haircut">Haircut</option>
                  <option value="Color">Color</option>
                  <option value="Highlights">Highlights</option>
                  <option value="Styling">Styling</option>
                  <option value="Treatment">Treatment</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium">
                Fecha preferida
                </label>
                <div className="relative">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-salon-gray-dark border-salon-gold/30 focus:border-salon-gold text-white"
                  />
                  <Calendar className="absolute top-2.5 right-3 h-5 w-5 text-salon-gold pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium">
                Hora preferida
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-salon-gray-dark border border-salon-gold/30 focus:border-salon-gold text-white rounded-md px-3 py-2"
                >
                  <option value="" disabled>Select a Time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
              Notas adicionales (Opcional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-salon-gray-dark border-salon-gold/30 focus:border-salon-gold text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                type="submit" 
                className="bg-salon-gold hover:bg-salon-gold-light text-salon-black flex items-center gap-2"
              >
                <Phone size={16} />
                Solicitar vía WhatsApp
              </Button>
            </div>

            <p className="text-sm text-gray-400 text-center mt-4">
            Recibirás tu solicitud de cita por WhatsApp. Confirmaremos tu reserva lo antes posible.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
