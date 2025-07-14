import gestaltImage from "@/assets/gestalt-psychology.jpg";
import gestaltSmall from "@/assets/gestalt-small.jpg";
const About = () => {
  return <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo más visibles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-golden/60 to-red-accent/50 rounded-full blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-light-beige/80 to-golden/65 rounded-full blur-sm"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            ¿Qué es la Terapia Gestalt?
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-12">
          {/* Primera sección: imagen izquierda + primer párrafo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img src={gestaltSmall} alt="Principios de psicología Gestalt" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-light-blue/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-medium-gray leading-relaxed">
                La terapia Gestalt es un enfoque humanístico que se centra en el <strong>aquí y ahora</strong>, 
                ayudándote a tomar conciencia de tus pensamientos, emociones y comportamientos en el momento presente.
              </p>
            </div>
          </div>

          {/* Segunda sección: segundo párrafo + imagen derecha */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-1">
              <p className="text-medium-gray leading-relaxed mx-[7px] text-lg">
                Como terapeuta gestalt, ofrezco un proceso de autoconocimiento profundo donde podrás integrar aspectos conflictivos de tu personalidad y encontrar un mayor equilibrio emocional y bienestar personal.
              </p>
            </div>
            <div className="flex justify-center md:justify-end md:order-2 px-[44px] mx-[10px] my-0">
              <div className="relative">
                <img src={gestaltImage} alt="Psicología de la forma y principios Gestalt" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-golden/20 to-transparent my-0 py-0"></div>
              </div>
            </div>
          </div>

          {/* Tercera sección: bocadillos centrados */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-medium-gray leading-relaxed text-lg">La terapia individual te invita a ser protagonista de tu propia transformación, desarrollando una mayor conciencia de ti mismo y de tus relaciones.</p>
            
            <div className="bg-light-blue p-6 rounded-lg border-l-4 border-red-accent py-0">
              <p className="text-dark-gray font-medium italic py-[20px] mx-0 my-0 px-[11px]">"Nuestra verdad es algo que hace que prestemos atención a una parte de la realidad, al mismo tiempo ignorando otras."</p>
              <p className="text-medium-gray text-sm mt-2 text-right font-normal">— Y. N. Harari</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;