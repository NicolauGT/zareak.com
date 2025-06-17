
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Terapia Gestalt
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Un espacio seguro para tu crecimiento personal y bienestar emocional. 
              Acompañándote en tu proceso de autodescubrimiento y transformación.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Servicios
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Terapia Individual</li>
              <li>Terapia de Pareja</li>
              <li>Sesiones Online</li>
              <li>Workshops Intensivos</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Contacto
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>Nicolau Gómez</p>
              <p>Ngt.terapeuta@gmail.com</p>
              <p>Lunes - Viernes: 9:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Terapia Gestalt. Todos los derechos reservados. | 
            <span className="text-green-400"> Colegiado Nº 12345</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
