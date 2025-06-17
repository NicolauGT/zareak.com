
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
    // Distribución circular equidistante con 8 posiciones
    const angle = (index * 360) / 8 - 90; // -90 para empezar desde arriba
    const radius = 200; // Radio aumentado para evitar superposiciones
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      marginLeft: '-60px', // Centro del elemento ajustado
      marginTop: '-30px'   // Centro del elemento ajustado
    };
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
        <div className="relative mx-auto max-w-5xl h-[700px] bg-gradient-to-br from-light-beige/30 to-light-beige/10 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona en el centro con estilo simple y geométrico */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="100" height="120" viewBox="0 0 100 120" className="text-dark-gray">
              {/* Cabeza - círculo simple */}
              <circle cx="50" cy="20" r="15" fill="#F5E6D3" stroke="#2D3748" strokeWidth="3"/>
              
              {/* Cara - puntos para ojos */}
              <circle cx="45" cy="18" r="1.5" fill="#2D3748"/>
              <circle cx="55" cy="18" r="1.5" fill="#2D3748"/>
              
              {/* Sonrisa simple */}
              <path d="M45 23 Q50 26 55 23" stroke="#2D3748" strokeWidth="2" fill="none"/>
              
              {/* Cuello */}
              <rect x="47" y="35" width="6" height="8" fill="#F5E6D3" stroke="#2D3748" strokeWidth="2"/>
              
              {/* Torso - rectángulo simple */}
              <rect x="35" y="43" width="30" height="35" fill="#D4AF37" stroke="#2D3748" strokeWidth="3" rx="3"/>
              
              {/* Brazos - líneas simples */}
              <rect x="20" y="50" width="15" height="6" fill="#E53E3E" stroke="#2D3748" strokeWidth="2" rx="3"/>
              <rect x="65" y="50" width="15" height="6" fill="#E53E3E" stroke="#2D3748" strokeWidth="2" rx="3"/>
              
              {/* Piernas - rectángulos */}
              <rect x="40" y="78" width="8" height="25" fill="#718096" stroke="#2D3748" strokeWidth="2" rx="2"/>
              <rect x="52" y="78" width="8" height="25" fill="#718096" stroke="#2D3748" strokeWidth="2" rx="2"/>
              
              {/* Pies - óvalos pequeños */}
              <ellipse cx="44" cy="108" rx="6" ry="3" fill="#2D3748"/>
              <ellipse cx="56" cy="108" rx="6" ry="3" fill="#2D3748"/>
            </svg>
          </div>

          {/* Beneficios distribuidos circularmente */}
          <div className="absolute inset-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group"
                style={{
                  ...getPositionClasses(index),
                  animation: `float ${3 + (index * 0.3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col items-center w-28">
                  {/* Círculo del beneficio */}
                  <div className="w-12 h-12 bg-white border-3 border-golden rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mb-3">
                    <benefit.icon className="w-5 h-5 text-red-accent" />
                  </div>
                  
                  {/* Texto del beneficio - siempre visible */}
                  <div className="bg-white border-2 border-golden/30 rounded-lg px-3 py-2 shadow-md">
                    <p className="text-xs font-medium text-dark-gray text-center leading-tight">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Línea conectora hacia el centro */}
                  <div 
                    className="absolute w-20 h-0.5 bg-golden/40 origin-left"
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
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
