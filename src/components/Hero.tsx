
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Imagen de fondo sin transparencia */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2000')`,
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Marco con fondo transparente para el contenido */}
        <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-12 shadow-2xl">
          {/* Overlay de la imagen con transparencia solo dentro del marco */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 rounded-3xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2000')`,
            }}
          />
          
          {/* Contenido del texto */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Terapia Individual
              <span className="block text-green-600">Gestalt</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre tu potencial interior y encuentra el equilibrio emocional que buscas. 
              Un espacio seguro para tu crecimiento personal y bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Cita
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Conoce Más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
