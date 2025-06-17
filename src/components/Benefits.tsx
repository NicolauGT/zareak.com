
import { CheckCircle, ArrowRight, ArrowDown } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Mayor autoconocimiento y conciencia personal",
    "Mejora en la gestión emocional y el estrés",
    "Desarrollo de relaciones más auténticas",
    "Resolución de conflictos internos",
    "Aumento de la autoestima y confianza",
    "Mejor comunicación interpersonal",
    "Claridad en la toma de decisiones",
    "Liberación de patrones limitantes"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            Beneficios de la Terapia Gestalt
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-xl text-medium-gray mb-8 leading-relaxed max-w-3xl mx-auto">
            La terapia Gestalt ofrece herramientas poderosas para el crecimiento personal 
            y la transformación positiva de tu vida.
          </p>
        </div>

        <div className="relative">
          {/* Red de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Benefit Card */}
                <div className="bg-light-beige p-4 rounded-lg border-2 border-golden hover:border-red-accent transition-all duration-300 shadow-sm hover:shadow-md w-full">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-golden mt-1 flex-shrink-0" />
                    <p className="text-dark-gray text-sm font-medium">{benefit}</p>
                  </div>
                </div>
                
                {/* Conexiones verticales para móvil */}
                {index < benefits.length - 1 && (
                  <div className="md:hidden flex flex-col items-center mt-4 mb-4">
                    <ArrowDown className="h-6 w-6 text-golden" />
                  </div>
                )}
                
                {/* Conexiones horizontales para tablet (2 columnas) */}
                {index % 2 === 0 && index < benefits.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-golden" />
                  </div>
                )}
                
                {/* Conexiones para escritorio (3 columnas) */}
                {/* Fila superior: conectar elementos 0->1 y 1->2 */}
                {(index === 0 || index === 1) && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-golden" />
                  </div>
                )}
                
                {/* Fila media: conectar elementos 3->4 y 4->5 */}
                {(index === 3 || index === 4) && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-golden" />
                  </div>
                )}
                
                {/* Fila inferior: conectar elementos 6->7 */}
                {index === 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-golden" />
                  </div>
                )}
                
                {/* Conexiones verticales para escritorio: conectar filas */}
                {(index === 1 || index === 4) && (
                  <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
                    <ArrowDown className="h-8 w-8 text-golden" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Separador visual antes del resultado */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          {/* Resultado central */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-golden to-red-accent text-white p-8 rounded-xl shadow-xl max-w-md text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Resultado</h3>
              <p className="text-xl font-semibold">
                Bienestar Psicoemocional
              </p>
              <div className="mt-4 w-16 h-1 bg-white mx-auto rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
