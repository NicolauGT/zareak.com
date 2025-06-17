
const Therapist = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Sobre el Terapeuta
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800" 
              alt="Persona contemplando el horizonte"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Nicolau Gómez</h3>
            <div className="text-lg text-green-600 font-medium space-y-1">
              <p>Formado en Terapia Gestalt</p>
              <p>Psicología Integral</p>
              <p>Sistémica</p>
              <p>Teatro Terapéutico</p>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Creo firmemente en la capacidad innata de cada persona para crecer 
                y sanar, y mi rol es acompañarte en este proceso de autodescubrimiento 
                desde un espacio de respeto, empatía y profesionalidad.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800">Formación</h4>
                <p className="text-sm text-gray-600">Terapia Gestalt<br/>Psicología Integral</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800">Especialidades</h4>
                <p className="text-sm text-gray-600">Sistémica<br/>Teatro Terapéutico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapist;
