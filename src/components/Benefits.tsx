
import { CheckCircle, User, Heart, Brain, Eye, Lightbulb, Star, ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { text: "Mayor autoconocimiento", icon: Eye, position: "top-left" },
    { text: "Gestión emocional", icon: Heart, position: "top-right" },
    { text: "Relaciones auténticas", icon: User, position: "left" },
    { text: "Resolución de conflictos", icon: Brain, position: "right" },
    { text: "Autoestima y confianza", icon: Star, position: "bottom-left" },
    { text: "Mejor comunicación", icon: Lightbulb, position: "bottom-right" },
    { text: "Claridad en decisiones", icon: CheckCircle, position: "top-center" },
    { text: "Liberación de patrones", icon: ArrowRight, position: "bottom-center" }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute top-8 left-8 md:top-12 md:left-16";
      case "top-right":
        return "absolute top-8 right-8 md:top-12 md:right-16";
      case "top-center":
        return "absolute top-4 left-1/2 transform -translate-x-1/2";
      case "left":
        return "absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2";
      case "right":
        return "absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2";
      case "bottom-left":
        return "absolute bottom-8 left-8 md:bottom-12 md:left-16";
      case "bottom-right":
        return "absolute bottom-8 right-8 md:bottom-12 md:right-16";
      case "bottom-center":
        return "absolute bottom-4 left-1/2 transform -translate-x-1/2";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            Beneficios de la Terapia Gestalt
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-xl text-medium-gray mb-8 leading-relaxed max-w-3xl mx-auto">
            Un viaje transformador hacia tu bienestar emocional y crecimiento personal.
          </p>
        </div>

        {/* Ilustración principal */}
        <div className="relative mx-auto max-w-4xl h-96 md:h-[500px] bg-gradient-to-br from-light-beige/30 to-light-beige/10 rounded-3xl overflow-hidden mb-12">
          
          {/* Camino/sendero */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-full">
            <div className="w-full h-full bg-gradient-to-t from-golden/40 via-golden/20 to-transparent rounded-t-full"></div>
          </div>

          {/* Figura de la persona caminando (usando formas SVG simples) */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
            <div className="relative">
              {/* Cuerpo */}
              <div className="w-8 h-12 bg-dark-gray rounded-full mb-2"></div>
              {/* Cabeza */}
              <div className="w-6 h-6 bg-medium-gray rounded-full mx-auto -mt-2"></div>
              {/* Brazos en movimiento */}
              <div className="absolute top-2 -left-2 w-3 h-8 bg-dark-gray rounded-full transform rotate-12"></div>
              <div className="absolute top-2 -right-2 w-3 h-8 bg-dark-gray rounded-full transform -rotate-12"></div>
              {/* Piernas */}
              <div className="absolute bottom-0 left-1 w-3 h-6 bg-dark-gray rounded-full transform rotate-6"></div>
              <div className="absolute bottom-0 right-1 w-3 h-6 bg-dark-gray rounded-full transform -rotate-6"></div>
            </div>
          </div>

          {/* Beneficios flotantes alrededor */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${getPositionClasses(benefit.position)} group cursor-pointer`}
              style={{
                animation: `float ${3 + (index * 0.5)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative">
                {/* Círculo del beneficio */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-golden rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-red-accent" />
                </div>
                
                {/* Línea conectora */}
                <div className="absolute top-1/2 left-1/2 w-16 md:w-24 h-0.5 bg-golden/50 transform -translate-y-1/2 origin-left"
                     style={{
                       transform: `translate(-50%, -50%) rotate(${
                         benefit.position.includes('left') ? '45deg' :
                         benefit.position.includes('right') ? '-45deg' :
                         benefit.position.includes('top') ? '90deg' : '-90deg'
                       })`
                     }}>
                </div>

                {/* Tooltip con el texto */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-dark-gray text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                    {benefit.text}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-gray"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Partículas flotantes decorativas */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-accent/60 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-golden/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-red-accent/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-golden/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Resultado final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-golden to-red-accent text-white px-8 py-4 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Resultado</h3>
            <p className="text-xl font-semibold">Bienestar Psicoemocional Integral</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
