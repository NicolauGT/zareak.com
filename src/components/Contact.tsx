
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Calendar, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Comienza tu Proceso de Cambio
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estoy aquí para acompañarte en tu camino hacia el bienestar. 
            Contacta conmigo para agendar tu primera consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-green-600" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Dra. María González</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">info@terapiagestalt.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">+34 600 123 456</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-800 mb-2">Primera Consulta Gratuita</h4>
                <p className="text-green-700">
                  Te ofrezco una primera sesión de 30 minutos sin costo para que puedas 
                  conocerme y decidir si mi enfoque es el adecuado para ti.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-800">Horarios de Atención</h4>
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Solicita tu Cita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos
                    </label>
                    <Input placeholder="Tus apellidos" className="border-gray-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="tu@email.com" className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input type="tel" placeholder="+34 600 000 000" className="border-gray-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntame brevemente qué te trae aquí
                  </label>
                  <Textarea 
                    placeholder="Describe brevemente lo que te gustaría trabajar en terapia..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
