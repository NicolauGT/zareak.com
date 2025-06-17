
const About = () => {
  return <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-golden/20 to-red-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-light-beige/40 to-golden/30 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            ¿Qué es la Terapia Gestalt?
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-medium-gray leading-relaxed">
              La terapia Gestalt es un enfoque humanístico que se centra en el <strong>aquí y ahora</strong>, 
              ayudándote a tomar conciencia de tus pensamientos, emociones y comportamientos en el momento presente.
            </p>
            <p className="text-lg text-medium-gray leading-relaxed">
              Como terapeuta gestalt, ofrezco un proceso de autoconocimiento profundo 
              donde podrás integrar aspectos fragmentados de tu personalidad y encontrar un mayor 
              equilibrio emocional y bienestar personal.
            </p>
            <div className="bg-light-beige p-6 rounded-lg border-l-4 border-golden">
              <p className="text-dark-gray font-medium italic">"La terapia individual te invita a ser protagonista de tu propia transformación, desarrollando una mayor conciencia de ti mismo y de tus relaciones."</p>
            </div>
          </div>
          
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800" alt="Terapia Gestalt - Paisaje sereno representando la paz interior" className="rounded-lg shadow-xl w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-golden opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
