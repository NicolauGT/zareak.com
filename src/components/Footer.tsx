
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta - Terapia Gestalt Pamplona");
    const body = encodeURIComponent("Hola Nicolau,\n\nMe gustaría obtener más información sobre tus servicios de terapia.\n\nSaludos cordiales.");
    const mailtoLink = `mailto:ngt.terapeuta@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

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
            <div className="space-y-3 text-light-beige">
              <p className="font-medium">Nicolau Gómez - Terapeuta Gestalt</p>
              
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-golden transition-colors cursor-pointer text-left"
              >
                <Mail className="h-4 w-4" />
                Ngt.terapeuta@gmail.com
              </button>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Consulta en Pamplona</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Lunes - Viernes: 9:00 - 20:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
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
