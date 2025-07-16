import gestaltImage from "@/assets/gestalt-psychology.jpg";
import gestaltSmall from "@/assets/gestalt-small.jpg";
const About = () => {
  return <section className="py-16 px-6 bg-gradient-to-b from-white to-light-beige/30 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-golden/40 to-red-accent/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-light-blue/50 to-golden/40 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-golden/10 to-light-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">¿Qué es la Terapia?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-golden to-red-accent mx-auto mb-6"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
            La terapia individual te invita a ser protagonista de tu propia transformación, desarrollando una mayor conciencia de ti mismo y de tus relaciones.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Primera sección - Imagen izquierda, texto derecha */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-golden to-red-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <img src={gestaltSmall} alt="Principios de psicología Gestalt" className="relative w-80 h-80 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div className="space-y-6 max-w-md mx-auto md:mx-0">
                <h3 className="text-xl font-semibold text-dark-gray mb-4">¿Qué es la Gestalt?</h3>
                <p className="text-lg text-dark-gray leading-relaxed">
                  La terapia Gestalt es un enfoque humanístico que se centra en el <span className="font-semibold text-golden">aquí y ahora</span>, 
                  ayudándote a tomar conciencia de tus pensamientos, emociones y comportamientos en el momento presente.
                </p>
                <p className="text-medium-gray leading-relaxed">
                  Como terapeuta gestalt, ofrezco un proceso de autoconocimiento profundo donde podrás integrar aspectos conflictivos de tu personalidad y encontrar un mayor equilibrio emocional y bienestar personal.
                </p>
              </div>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-golden/20">
              <blockquote className="text-xl text-dark-gray text-center italic leading-relaxed">
                "Nuestra verdad es algo que hace que prestemos atención a una parte de la realidad, al mismo tiempo ignorando otras."
              </blockquote>
            </div>
          </div>

          {/* Segunda sección - Texto izquierda, imagen derecha */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="max-w-md mx-auto md:mx-0">
                <h3 className="text-2xl font-bold text-dark-gray mb-6">Psicoterapia Gestalt Integrativa</h3>
                <p className="text-lg text-dark-gray leading-relaxed mb-6">El trabajo con la psicoterapia Gestalt Integrativa se centra en el restablecimiento de tu equilibrio emocional y relacional con el objetivo de que puedas conseguir una vida más plena, mediante:</p>
                
                {/* Lista de beneficios */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-golden bg-golden/5">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">El reconocimiento y expresión de tus emociones.</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-red-accent bg-red-accent/5">
                    <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">El contacto con tus necesidades para poder satisfacerlas.</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-light-blue bg-light-blue/5">
                    <div className="w-2 h-2 bg-light-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">El aumento de tu autoestima y una mayor confianza en ti mismo/a.</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-golden bg-golden/5">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">El saneamiento de tus relaciones personales.</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-red-accent bg-red-accent/5">
                    <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">La superación de duelos, heridas y sufrimientos.</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 border-light-blue bg-light-blue/5">
                    <div className="w-2 h-2 bg-light-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-medium-gray text-sm">El afrontamiento y el logro de tus objetivos.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-light-blue to-golden rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <img src={gestaltImage} alt="Psicología de la forma y principios Gestalt" className="relative w-80 h-80 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;