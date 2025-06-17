
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
    const radius = 280; // Radio reducido para mejor distribución
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      marginLeft: '-75px', // Centrado para elementos de 150px de ancho
      marginTop: '-40px'   // Centrado para elementos de 80px de alto
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

        <div className="relative mx-auto max-w-6xl h-[700px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona en el centro */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
              {/* Cabeza */}
              <circle cx="40" cy="20" r="15" fill="#FED7AA" stroke="#374151" strokeWidth="3"/>
              
              {/* Cara */}
              <circle cx="35" cy="18" r="1.5" fill="#374151"/>
              <circle cx="45" cy="18" r="1.5" fill="#374151"/>
              <path d="M35 24 Q40 27 45 24" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Cuello */}
              <rect x="37" y="35" width="6" height="8" fill="#FED7AA" stroke="#374151" strokeWidth="3" rx="3"/>
              
              {/* Torso */}
              <rect x="28" y="43" width="24" height="32" fill="#FDE047" stroke="#374151" strokeWidth="3" rx="10"/>
              
              {/* Brazos */}
              <rect x="15" y="50" width="13" height="6" fill="#F87171" stroke="#374151" strokeWidth="3" rx="3"/>
              <rect x="52" y="50" width="13" height="6" fill="#F87171" stroke="#374151" strokeWidth="3" rx="3"/>
              
              {/* Piernas */}
              <rect x="32" y="75" width="6" height="25" fill="#6B7280" stroke="#374151" strokeWidth="3" rx="3"/>
              <rect x="42" y="75" width="6" height="25" fill="#6B7280" stroke="#374151" strokeWidth="3" rx="3"/>
              
              {/* Pies */}
              <ellipse cx="35" cy="105" rx="5" ry="2.5" fill="#374151"/>
              <ellipse cx="45" cy="105" rx="5" ry="2.5" fill="#374151"/>
            </svg>
          </div>

          {/* Beneficios distribuidos sin superposición */}
          <div className="absolute inset-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group"
                style={{
                  ...getPositionClasses(index),
                  animation: `float ${3 + (index * 0.2)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="flex flex-col items-center w-[150px]">
                  {/* Círculo del icono */}
                  <div className="w-14 h-14 bg-white border-4 border-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mb-3 z-10">
                    <benefit.icon className="w-6 h-6 text-red-500" />
                  </div>
                  
                  {/* Texto del beneficio */}
                  <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-4 py-3 shadow-md w-full">
                    <p className="text-sm font-semibold text-gray-800 text-center leading-tight">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Línea conectora más visible */}
                  <div 
                    className="absolute w-20 h-1 bg-yellow-500/40 origin-left"
                    style={{
                      top: '28px',
                      left: '28px',
                      transform: `rotate(${(index * 360) / 8 + 90}deg)`,
                      transformOrigin: '0 50%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partículas decorativas */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-red-400/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Resultado final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-1">Resultado</h3>
            <p className="text-lg font-semibold">Bienestar Psicoemocional Integral</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
