import { CheckCircle, User, Heart, Brain, Eye, Lightbulb, Star, ArrowRight } from "lucide-react";
const Benefits = () => {
  return <section id="benefits-section" className="py-12 px-6 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo más visibles */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-bl from-golden/55 to-red-accent/45 rounded-full blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-light-beige/70 to-golden/55 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 left-20 w-28 h-28 bg-gradient-to-r from-red-accent/40 to-golden/60 rounded-full blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Beneficios de la Terapia </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Un viaje transformador hacia tu bienestar emocional y crecimiento personal.
          </p>
        </div>

        <div className="relative mx-auto w-[1200px] h-[350px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden mb-8">
          
          {/* Imagen de terapia como fondo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/lovable-uploads/d00f9eb6-0b85-47c9-81bf-72184fb1f5b0.png" alt="Terapia Gestalt - Sesión de terapia" className="w-80 h-80 object-cover rounded-full opacity-20" />
          </div>

          {/* Fila superior */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-32 z-10">
            {/* Top Left - Liberación de patrones */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <ArrowRight className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Liberación de patrones</p>
              </div>
            </div>

            {/* Top Center - Mayor autoconocimiento */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <Eye className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Mayor autoconocimiento</p>
              </div>
            </div>

            {/* Top Right - Gestión emocional */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Gestión emocional</p>
              </div>
            </div>
          </div>

          {/* Fila media - lados */}
          <div className="absolute top-1/2 left-24 transform -translate-y-1/2 z-10">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Claridad en decisiones</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-24 transform -translate-y-1/2 z-10">
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <User className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Relaciones auténticas</p>
              </div>
            </div>
          </div>

          {/* Fila inferior */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-32 z-10">
            {/* Bottom Left - Mejor comunicación */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <Lightbulb className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Mejor comunicación</p>
              </div>
            </div>

            {/* Bottom Center - Resolución de conflictos */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <Brain className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Resolución de conflictos</p>
              </div>
            </div>

            {/* Bottom Right - Autoestima y confianza */}
            <div className="flex flex-col items-center w-32">
              <div className="w-12 h-12 bg-white border-3 border-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                <Star className="w-5 h-5 text-red-500" />
              </div>
              <div className="bg-light-beige border-2 border-yellow-400/60 rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-dark-gray text-center">Autoestima y confianza</p>
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
    </section>;
};
export default Benefits;