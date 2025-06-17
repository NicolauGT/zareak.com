
import { CheckCircle, User, Heart, Brain, Eye, Lightbulb, Star, ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { text: "Mayor autoconocimiento", icon: Eye },
    { text: "Gestión emocional", icon: Heart },
    { text: "Relaciones auténticas", icon: User },
    { text: "Resolución de conflictos", icon: Brain },
    { text: "Autoestima y confianza", icon: Star },
    { text: "Mejor comunicación", icon: Lightbulb },
    { text: "Claridad en decisiones", icon: CheckCircle },
    { text: "Liberación de patrones", icon: ArrowRight }
  ];

  const getPositionClasses = (index: number) => {
    const angle = (index * 360) / 8 - 90; // -90 para empezar desde arriba
    const radius = 320; // Radio aumentado para evitar superposiciones
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      marginLeft: '-60px', // Centrado para elementos de 120px de ancho
      marginTop: '-30px'   // Centrado para elementos de 60px de alto
    };
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Beneficios de la Terapia Gestalt
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Un viaje transformador hacia tu bienestar emocional y crecimiento personal.
          </p>
        </div>

        {/* Ilustración principal completamente rediseñada */}
        <div className="relative mx-auto max-w-6xl h-[800px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona rediseñada - estilo simple y moderno */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="100" height="140" viewBox="0 0 100 140" className="drop-shadow-lg">
              {/* Cabeza - círculo simple */}
              <circle cx="50" cy="25" r="18" fill="#FED7AA" stroke="#374151" strokeWidth="4"/>
              
              {/* Cara minimalista */}
              <circle cx="44" cy="22" r="2" fill="#374151"/>
              <circle cx="56" cy="22" r="2" fill="#374151"/>
              <path d="M44 30 Q50 34 56 30" stroke="#374151" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Cuello */}
              <rect x="46" y="43" width="8" height="10" fill="#FED7AA" stroke="#374151" strokeWidth="4" rx="4"/>
              
              {/* Torso */}
              <rect x="35" y="53" width="30" height="40" fill="#FDE047" stroke="#374151" strokeWidth="4" rx="12"/>
              
              {/* Brazos */}
              <rect x="20" y="62" width="15" height="8" fill="#F87171" stroke="#374151" strokeWidth="4" rx="4"/>
              <rect x="65" y="62" width="15" height="8" fill="#F87171" stroke="#374151" strokeWidth="4" rx="4"/>
              
              {/* Piernas */}
              <rect x="40" y="93" width="8" height="32" fill="#6B7280" stroke="#374151" strokeWidth="4" rx="4"/>
              <rect x="52" y="93" width="8" height="32" fill="#6B7280" stroke="#374151" strokeWidth="4" rx="4"/>
              
              {/* Pies */}
              <ellipse cx="44" cy="130" rx="6" ry="3" fill="#374151"/>
              <ellipse cx="56" cy="130" rx="6" ry="3" fill="#374151"/>
            </svg>
          </div>

          {/* Beneficios distribuidos en círculo perfecto */}
          <div className="absolute inset-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group"
                style={{
                  ...getPositionClasses(index),
                  animation: `float ${3 + (index * 0.3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex flex-col items-center w-[120px]">
                  {/* Círculo del beneficio más grande */}
                  <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 mb-3">
                    <benefit.icon className="w-5 h-5 text-red-500" />
                  </div>
                  
                  {/* Texto del beneficio con mejor diseño */}
                  <div className="bg-white border-2 border-yellow-400/50 rounded-xl px-3 py-2 shadow-lg w-full">
                    <p className="text-sm font-semibold text-gray-800 text-center leading-tight">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Línea conectora hacia el centro */}
                  <div 
                    className="absolute w-24 h-0.5 bg-yellow-400/60 origin-left"
                    style={{
                      top: '24px',
                      left: '24px',
                      transform: `rotate(${(index * 360) / 8 + 90}deg)`,
                      transformOrigin: '0 50%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partículas decorativas mejoradas */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400/70 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-400/70 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-red-400/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-400/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Resultado final mejorado */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white px-10 py-5 rounded-3xl shadow-2xl">
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
