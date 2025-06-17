
import { CheckCircle, ArrowRight } from "lucide-react";

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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Beneficios de la Terapia Gestalt
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            La terapia Gestalt ofrece herramientas poderosas para el crecimiento personal 
            y la transformación positiva de tu vida.
          </p>
        </div>

        <div className="relative">
          {/* Red de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{benefit}</p>
                  </div>
                </div>
                
                {/* Líneas conectoras - solo para algunos elementos para crear efecto de red */}
                {(index === 2 || index === 5) && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-green-400" />
                  </div>
                )}
                
                {(index === 0 || index === 3 || index === 6) && (
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Líneas conectoras centrales */}
          <div className="hidden lg:flex justify-center items-center mb-8">
            <div className="flex space-x-4">
              <ArrowRight className="h-6 w-6 text-green-500" />
              <ArrowRight className="h-6 w-6 text-green-500" />
              <ArrowRight className="h-6 w-6 text-green-500" />
            </div>
          </div>

          {/* Resultado central */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl shadow-xl max-w-md text-center transform hover:scale-105 transition-transform duration-300">
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
