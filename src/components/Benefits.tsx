
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

          {/* Figura de la persona en estilo modernista de líneas */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
            <svg width="60" height="80" viewBox="0 0 60 80" className="text-dark-gray">
              {/* Cabeza */}
              <circle cx="30" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
              
              {/* Torso */}
              <line x1="30" y1="27" x2="30" y2="50" stroke="currentColor" strokeWidth="3"/>
              
              {/* Brazo izquierdo en movimiento */}
              <line x1="30" y1="35" x2="20" y2="45" stroke="currentColor" strokeWidth="3"/>
              <line x1="20" y1="45" x2="15" y2="55" stroke="currentColor" strokeWidth="3"/>
              
              {/* Brazo derecho en movimiento */}
              <line x1="30" y1="35" x2="40" y2="40" stroke="currentColor" strokeWidth="3"/>
              <line x1="40" y1="40" x2="45" y2="50" stroke="currentColor" strokeWidth="3"/>
              
              {/* Pierna izquierda */}
              <line x1="30" y1="50" x2="22" y2="65" stroke="currentColor" strokeWidth="3"/>
              <line x1="22" y1="65" x2="18" y2="78" stroke="currentColor" strokeWidth="3"/>
              
              {/* Pierna derecha */}
              <line x1="30" y1="50" x2="38" y2="65" stroke="currentColor" strokeWidth="3"/>
              <line x1="38" y1="65" x2="42" y2="78" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>

          {/* Beneficios flotantes alrededor */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${getPositionClasses(benefit.position)} group`}
              style={{
                animation: `float ${3 + (index * 0.5)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative flex flex-col items-center">
                {/* Círculo del beneficio */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-golden rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mb-2">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-red-accent" />
                </div>
                
                {/* Texto del beneficio siempre visible */}
                <div className="bg-white/90 backdrop-blur-sm border border-golden/30 rounded-lg px-3 py-2 shadow-md max-w-32 md:max-w-40">
                  <p className="text-xs md:text-sm font-medium text-dark-gray text-center leading-tight">
                    {benefit.text}
                  </p>
                </div>

                {/* Línea conectora */}
                <div className="absolute top-6 md:top-8 left-1/2 w-8 md:w-12 h-0.5 bg-golden/50 transform -translate-x-1/2 -translate-y-1/2"
                     style={{
                       transform: `translate(-50%, -50%) rotate(${
                         benefit.position.includes('left') ? '45deg' :
                         benefit.position.includes('right') ? '-45deg' :
                         benefit.position.includes('top') ? '90deg' : '-90deg'
                       })`
                     }}>
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
