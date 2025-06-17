
const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ¿Qué es la Terapia Gestalt?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              La terapia Gestalt es un enfoque humanístico que se centra en el <strong>aquí y ahora</strong>, 
              ayudándote a tomar conciencia de tus pensamientos, emociones y comportamientos en el momento presente.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              A través de técnicas experienciales y un proceso de autoconocimiento profundo, 
              podrás integrar aspectos fragmentados de tu personalidad y encontrar un mayor 
              equilibrio emocional y bienestar personal.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-green-800 font-medium italic">
                "La terapia Gestalt te invita a ser protagonista de tu propia transformación, 
                desarrollando una mayor conciencia de ti mismo y de tus relaciones."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800" 
              alt="Paisaje sereno representando la paz interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
