
const Therapist = () => {
  return <section className="py-20 px-6 bg-light-beige relative overflow-hidden">
      {/* Elementos decorativos de fondo más visibles */}
      <div className="absolute top-0 left-1/3 w-44 h-44 bg-gradient-to-br from-golden/60 to-red-accent/45 rounded-full blur-sm"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-red-accent/50 to-light-beige/80 rounded-full blur-sm"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
        </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-dark-gray">Nicolau Gómez</h3>
            <h4 className="text-xl text-golden font-semibold">Terapeuta Individual</h4>
            
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                Como terapeuta gestalt, creo firmemente en la capacidad innata de cada persona para crecer 
                y sanar. Mi rol es acompañarte en este proceso de autodescubrimiento 
                desde un espacio de respeto, empatía y profesionalidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-golden">
                <h4 className="font-bold text-dark-gray">Formación</h4>
                <p className="text-sm text-medium-gray">Terapia Gestalt<br />Psicología Integral</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-accent">
                <h4 className="font-bold text-dark-gray">Especialidades</h4>
                <p className="text-sm text-medium-gray">Sistémica<br />Teatro Terapéutico<br />Adolescencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Therapist;
