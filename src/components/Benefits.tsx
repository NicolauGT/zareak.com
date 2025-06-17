
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

        <div className="relative mx-auto w-[600px] h-[600px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden mb-12">
          
          {/* Persona en el centro */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <User className="w-10 h-10 text-gray-700" />
            </div>
          </div>

          {/* Beneficios en posiciones fijas alrededor del círculo */}
          
          {/* Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[0].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[0].text}</p>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute top-16 right-8">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[1].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[1].text}</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[2].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[2].text}</p>
              </div>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-16 right-8">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[3].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[3].text}</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[4].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[4].text}</p>
              </div>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-16 left-8">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[5].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[5].text}</p>
              </div>
            </div>
          </div>

          {/* Left */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[6].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[6].text}</p>
              </div>
            </div>
          </div>

          {/* Top Left */}
          <div className="absolute top-16 left-8">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <benefits[7].icon className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-white border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-gray-800 text-center">{benefits[7].text}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Resultado final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-1">Resultado</h3>
            <p className="text-lg font-semibold">Bienestar Psicoemocional Integral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
