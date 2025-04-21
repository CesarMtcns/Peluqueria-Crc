import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-salon-black min-h-screen text-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-salon-gold/5 rounded-2xl p-8 shadow-lg backdrop-blur">
        <h1 className="text-4xl font-bold text-salon-gold mb-6 border-b border-salon-gold pb-2">
          Condiciones de Servicio
        </h1>

        <p className="mb-4 leading-relaxed">
          Al reservar un servicio en <strong>Salón de Belleza Cristina Romero</strong>, aceptas las siguientes condiciones. Te pedimos leerlas con atención para garantizar una experiencia clara, segura y satisfactoria.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">1. Reservas</h2>
        <p className="mb-4 leading-relaxed">
          Las reservas se realizan exclusivamente a través de nuestro número de WhatsApp. Al enviar tu solicitud, confirmamos la hora según disponibilidad.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">2. Puntualidad</h2>
        <p className="mb-4 leading-relaxed">
          Te pedimos llegar a la hora acordada. En caso de retrasos mayores a 10 minutos, la reserva puede ser reagendada para no afectar a otros clientes.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">3. Cancelaciones</h2>
        <p className="mb-4 leading-relaxed">
          Las cancelaciones deben informarse con al menos 4 horas de anticipación. Si no se avisa, podríamos priorizar a otras clientas en futuras reservas.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">4. Métodos de pago</h2>
        <p className="mb-4 leading-relaxed">
          Aceptamos pagos en efectivo, transferencia y algunos servicios pueden requerir un abono previo para confirmar la hora.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">5. Cambios en los servicios</h2>
        <p className="mb-4 leading-relaxed">
          Nos reservamos el derecho de actualizar precios, disponibilidad o servicios ofrecidos. Siempre te informaremos con anticipación si aplica.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">6. Contacto</h2>
        <p className="mb-4 leading-relaxed">
          Si tienes dudas sobre estas condiciones, escríbenos a{" "}
          <a
            href="https://wa.me/56956639851"
            className="text-salon-gold underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5663 9851
          </a>.
        </p>

        <p className="text-sm text-gray-400 mt-12 italic">
          Última actualización: Abril 2025.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
