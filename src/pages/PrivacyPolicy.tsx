import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-salon-black min-h-screen text-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-salon-gold/5 rounded-2xl p-8 shadow-lg backdrop-blur">
        <h1 className="text-4xl font-bold text-salon-gold mb-6 border-b border-salon-gold pb-2">
          Política de Privacidad
        </h1>
        <p className="mb-4 leading-relaxed">
          En <strong>Salón de Belleza Cristina Romero</strong>, tu privacidad es importante para
          nosotras. Esta política explica cómo recopilamos, usamos y protegemos tu información
          personal cuando reservas una cita con nosotras o utilizas nuestros servicios.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">1. Información que recopilamos</h2>
        <p className="mb-4 leading-relaxed">
          Recopilamos tu nombre, número de WhatsApp y preferencias de horario cuando reservas una cita. Esta
          información es usada exclusivamente para coordinar tu atención y brindarte un servicio personalizado.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">2. Uso de la información</h2>
        <p className="mb-4 leading-relaxed">
          Utilizamos tu información para agendar tu hora, enviarte recordatorios por WhatsApp y
          entregarte una experiencia de calidad. No compartimos tus datos con terceros.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">3. Seguridad</h2>
        <p className="mb-4 leading-relaxed">
          Nos comprometemos a proteger tu información usando medidas adecuadas para evitar accesos no autorizados o usos indebidos.
        </p>

        <h2 className="text-2xl text-salon-gold mt-8 mb-2 font-semibold">4. Contacto</h2>
        <p className="mb-4 leading-relaxed">
          Si tienes preguntas sobre esta política, puedes escribirnos directamente por WhatsApp al{" "}
          <a
            href="https://wa.me/56956639851"
            className="text-salon-gold underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5663 9851
          </a>
          .
        </p>

        <p className="text-sm text-gray-400 mt-12 italic">
          Última actualización: Abril 2025.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
