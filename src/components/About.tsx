import gestaltImage from "@/assets/gestalt-psychology.jpg";
import gestaltSmall from "@/assets/gestalt-small.jpg";
const About = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            ¿Qué es la Terapia Gestalt?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Contenido principal */}
        <div className="space-y-16">
          {/* Primera sección */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img 
                src={gestaltSmall} 
                alt="Principios de psicología Gestalt" 
                className="relative w-full max-w-xs mx-auto h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La terapia Gestalt es un enfoque humanístico que se centra en el <span className="font-semibold text-foreground">aquí y ahora</span>, 
                ayudándote a tomar conciencia de tus pensamientos, emociones y comportamientos en el momento presente.
              </p>
            </div>
          </div>

          {/* Segunda sección */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como terapeuta gestalt, ofrezco un proceso de <span className="font-semibold text-foreground">autoconocimiento profundo</span> donde podrás integrar aspectos conflictivos de tu personalidad y encontrar un mayor equilibrio emocional y bienestar personal.
              </p>
            </div>
            <div className="relative group md:order-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img 
                src={gestaltImage} 
                alt="Psicología de la forma y principios Gestalt" 
                className="relative w-full max-w-xs mx-auto h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Texto adicional y cita */}
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              La terapia individual te invita a ser protagonista de tu propia transformación, desarrollando una mayor conciencia de ti mismo y de tus relaciones.
            </p>
            
            <div className="relative p-8 bg-card border border-border/50 rounded-2xl shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl"></div>
              <blockquote className="text-lg text-card-foreground font-medium leading-relaxed italic">
                "Nuestra verdad es algo que hace que prestemos atención a una parte de la realidad, al mismo tiempo ignorando otras."
              </blockquote>
              <cite className="block text-sm text-muted-foreground mt-4 not-italic font-normal">
                — Y. N. Harari
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;