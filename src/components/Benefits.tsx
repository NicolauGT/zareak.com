
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
    const radius = 250; // Radio aumentado para separar bien los elementos
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      marginLeft: '-70px', // Centro del elemento ajustado
      marginTop: '-40px'   // Centro del elemento ajustado
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
        <div className="relative mx-auto max-w-5xl h-[800px] bg-gradient-to-br from-light-beige/30 to-light-beige/10 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona en el centro con estilo más parecido a la referencia */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="120" height="160" viewBox="0 0 120 160" className="text-dark-gray">
              {/* Cabeza - círculo más redondeado */}
              <circle cx="60" cy="25" r="20" fill="#F5E6D3" stroke="#2D3748" strokeWidth="3" strokeLinecap="round"/>
              
              {/* Cara - puntos para ojos */}
              <circle cx="53" cy="22" r="2" fill="#2D3748"/>
              <circle cx="67" cy="22" r="2" fill="#2D3748"/>
              
              {/* Sonrisa redondeada */}
              <path d="M52 30 Q60 35 68 30" stroke="#2D3748" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Cuello redondeado */}
              <rect x="55" y="45" width="10" height="12" fill="#F5E6D3" stroke="#2D3748" strokeWidth="3" rx="5"/>
              
              {/* Torso - más alto y redondeado */}
              <rect x="40" y="57" width="40" height="50" fill="#D4AF37" stroke="#2D3748" strokeWidth="3" rx="8" strokeLinecap="round"/>
              
              {/* Brazos - más redondeados y largos */}
              <rect x="20" y="65" width="20" height="8" fill="#E53E3E" stroke="#2D3748" strokeWidth="3" rx="4" strokeLinecap="round"/>
              <rect x="80" y="65" width="20" height="8" fill="#E53E3E" stroke="#2D3748" strokeWidth="3" rx="4" strokeLinecap="round"/>
              
              {/* Piernas - más largas y redondeadas */}
              <rect x="47" y="107" width="10" height="35" fill="#718096" stroke="#2D3748" strokeWidth="3" rx="5" strokeLinecap="round"/>
              <rect x="63" y="107" width="10" height="35" fill="#718096" stroke="#2D3748" strokeWidth="3" rx="5" strokeLinecap="round"/>
              
              {/* Pies - más redondeados */}
              <ellipse cx="52" cy="148" rx="8" ry="4" fill="#2D3748"/>
              <ellipse cx="68" cy="148" rx="8" ry="4" fill="#2D3748"/>
            </svg>
          </div>

          {/* Beneficios distribuidos en círculo completo */}
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
                <div className="flex flex-col items-center w-36">
                  {/* Círculo del beneficio */}
                  <div className="w-14 h-14 bg-white border-3 border-golden rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mb-3">
                    <benefit.icon className="w-6 h-6 text-red-accent" />
                  </div>
                  
                  {/* Texto del beneficio - siempre visible */}
                  <div className="bg-white border-2 border-golden/30 rounded-lg px-4 py-3 shadow-md">
                    <p className="text-sm font-medium text-dark-gray text-center leading-tight">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Línea conectora hacia el centro */}
                  <div 
                    className="absolute w-24 h-0.5 bg-golden/40 origin-left"
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
