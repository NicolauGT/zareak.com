
const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-golden">
              Terapia Gestalt Pamplona
            </h3>
            <p className="text-light-beige leading-relaxed">
              Un espacio seguro para tu crecimiento personal y bienestar emocional. 
              Acompañándote en tu proceso de autodescubrimiento y transformación.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">
              Servicios
            </h4>
            <ul className="space-y-2 text-light-beige">
              <li>Terapia Individual</li>
              <li>Terapia de Pareja</li>
              <li>Sesiones Online</li>
              <li>Workshops Intensivos</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">
              Contacto
            </h4>
            <div className="space-y-2 text-light-beige">
              <p>Nicolau Gómez - Terapeuta Gestalt</p>
              <p>Ngt.terapeuta@gmail.com</p>
              <p>Consulta en Pamplona</p>
              <p>Lunes - Viernes: 9:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-medium-gray mt-8 pt-8 text-center">
          <p className="text-light-beige">
            © 2024 Terapia Gestalt Pamplona - Nicolau Gómez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
