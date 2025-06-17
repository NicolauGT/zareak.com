
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Calendar, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Sesiones Individuales Pamplona",
      description: "Terapia personalizada uno a uno en Pamplona, adaptada a tus necesidades específicas y ritmo de crecimiento personal.",
      duration: "50 minutos",
      price: "50€"
    },
    {
      icon: Users,
      title: "Terapia de Pareja Pamplona",
      description: "Espacio seguro en Pamplona para mejorar la comunicación y fortalecer la relación a través del enfoque gestáltico.",
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
      title: "Terapia Online desde Pamplona",
      description: "Sesiones virtuales con la misma calidad y efectividad, desde la comodidad de tu hogar.",
      duration: "50 minutos",
      price: "50€"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Servicios de Terapia Individual en Pamplona
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrezco diferentes modalidades de terapia individual en Pamplona para adaptarme a tus necesidades 
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-green-600 font-medium">Duración: {service.duration}</p>
                  <p className="text-lg font-bold text-gray-800">{service.price}</p>
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
