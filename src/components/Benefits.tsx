
import { CheckCircle } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Beneficios de la Terapia Gestalt
            </h2>
            <div className="w-24 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La terapia Gestalt ofrece herramientas poderosas para el crecimiento personal 
              y la transformación positiva de tu vida.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
              alt="Naturaleza tranquila representando el crecimiento personal"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
