
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
    const radius = 240; // Radio optimizado para evitar superposiciones
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      marginLeft: '-50px', // Centrado para elementos de 100px de ancho
      marginTop: '-40px'   // Centrado para elementos de 80px de alto
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

        {/* Ilustración principal con altura aumentada */}
        <div className="relative mx-auto max-w-5xl h-[700px] bg-gradient-to-br from-light-beige/30 to-light-beige/10 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona rediseñada - estilo simple y minimalista como la imagen de referencia */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="80" height="120" viewBox="0 0 80 120" className="text-dark-gray">
              {/* Cabeza - círculo simple */}
              <circle cx="40" cy="18" r="15" fill="#F5E6D3" stroke="#2D3748" strokeWidth="3" strokeLinecap="round"/>
              
              {/* Cara minimalista - solo puntos para ojos y sonrisa */}
              <circle cx="35" cy="16" r="1.5" fill="#2D3748"/>
              <circle cx="45" cy="16" r="1.5" fill="#2D3748"/>
              <path d="M35 22 Q40 25 45 22" stroke="#2D3748" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Cuello */}
              <rect x="37" y="33" width="6" height="8" fill="#F5E6D3" stroke="#2D3748" strokeWidth="3" rx="3" strokeLinecap="round"/>
              
              {/* Torso - rectángulo redondeado */}
              <rect x="28" y="41" width="24" height="35" fill="#D4AF37" stroke="#2D3748" strokeWidth="3" rx="8" strokeLinecap="round"/>
              
              {/* Brazos - líneas simples redondeadas */}
              <rect x="15" y="48" width="13" height="5" fill="#E53E3E" stroke="#2D3748" strokeWidth="3" rx="2.5" strokeLinecap="round"/>
              <rect x="52" y="48" width="13" height="5" fill="#E53E3E" stroke="#2D3748" strokeWidth="3" rx="2.5" strokeLinecap="round"/>
              
              {/* Piernas - rectángulos redondeados */}
              <rect x="32" y="76" width="6" height="28" fill="#718096" stroke="#2D3748" strokeWidth="3" rx="3" strokeLinecap="round"/>
              <rect x="42" y="76" width="6" height="28" fill="#718096" stroke="#2D3748" strokeWidth="3" rx="3" strokeLinecap="round"/>
              
              {/* Pies - óvalos simples */}
              <ellipse cx="35" cy="110" rx="5" ry="2.5" fill="#2D3748"/>
              <ellipse cx="45" cy="110" rx="5" ry="2.5" fill="#2D3748"/>
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
                  animation: `float ${3 + (index * 0.2)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col items-center w-[100px]">
                  {/* Círculo del beneficio */}
                  <div className="w-10 h-10 bg-white border-2 border-golden rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mb-2">
                    <benefit.icon className="w-4 h-4 text-red-accent" />
                  </div>
                  
                  {/* Texto del beneficio */}
                  <div className="bg-white border-2 border-golden/30 rounded-lg px-2 py-1.5 shadow-md w-full">
                    <p className="text-xs font-medium text-dark-gray text-center leading-tight">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Línea conectora hacia el centro */}
                  <div 
                    className="absolute w-20 h-0.5 bg-golden/40 origin-left"
                    style={{
                      top: '20px',
                      left: '20px',
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
