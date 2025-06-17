
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Calendar, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Sesiones Individuales",
      description: "Terapia personalizada uno a uno, adaptada a tus necesidades específicas y ritmo de crecimiento personal.",
      duration: "50 minutos",
      price: "50€"
    },
    {
      icon: Users,
      title: "Terapia de Pareja",
      description: "Espacio seguro para mejorar la comunicación y fortalecer la relación a través del enfoque gestáltico.",
      duration: "60 minutos",
      price: "Desde €80"
    },
    {
      icon: Calendar,
      title: "Sesiones Intensivas",
      description: "Workshops y sesiones extendidas para trabajo profundo en momentos de crisis o cambios importantes.",
      duration: "2-3 horas",
      price: "Desde €150"
    },
    {
      icon: Headphones,
      title: "Terapia Online",
      description: "Sesiones virtuales con la misma calidad y efectividad, desde la comodidad de tu hogar.",
      duration: "50 minutos",
      price: "50€"
    }
  ];

  return (
    <section className="py-20 px-6 bg-light-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            Servicios de Terapia Individual
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Ofrezco diferentes modalidades de terapia individual para adaptarme a tus necesidades 
            y circunstancias personales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-light-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-golden" />
                </div>
                <CardTitle className="text-xl text-dark-gray">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-medium-gray leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-golden font-medium">Duración: {service.duration}</p>
                  <p className="text-lg font-bold text-dark-gray">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
