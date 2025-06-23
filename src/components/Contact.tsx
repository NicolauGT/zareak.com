import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Calendar, User, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de contacto:", formData);
    
    // Crear el enlace mailto con los datos del formulario
    const subject = encodeURIComponent("Solicitud de Cita - Terapia Gestalt");
    const body = encodeURIComponent(
      `Hola Nicolau,

Me gustaría solicitar una cita para terapia individual.

Mis datos de contacto son:

Nombre: ${formData.nombre} ${formData.apellidos}
Email: ${formData.email}
Teléfono: ${formData.telefono}

${formData.mensaje ? `Mensaje: ${formData.mensaje}` : ''}

Quedo a la espera de tu respuesta.

Saludos cordiales.`
    );
    
    const mailtoLink = `mailto:ngt.terapeuta@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Redirigiendo a tu cliente de correo",
      description: "Se abrirá tu aplicación de correo con los datos completados.",
    });
    
    setFormData({ nombre: "", apellidos: "", email: "", telefono: "", mensaje: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta - Terapia Gestalt Pamplona");
    const body = encodeURIComponent("Hola Nicolau,\n\nMe gustaría obtener más información sobre tus servicios de terapia.\n\nSaludos cordiales.");
    const mailtoLink = `mailto:ngt.terapeuta@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo más visibles */}
      <div className="absolute top-10 left-0 w-52 h-52 bg-gradient-to-br from-golden/40 to-red-accent/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-gradient-to-tl from-light-beige/80 to-golden/55 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-l from-red-accent/45 to-golden/40 rounded-full blur-sm"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            Reserva tu Cita de Terapia Individual
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Estoy aquí para acompañarte en tu camino hacia el bienestar. 
            Contacta conmigo para agendar tu primera consulta de terapia gestalt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-dark-gray flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-golden" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-golden" />
                  <span className="text-medium-gray">Nicolau Gómez - Terapeuta Gestalt</span>
                </div>
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 hover:text-golden transition-colors cursor-pointer text-left"
                >
                  <MessageSquare className="h-5 w-5 text-golden" />
                  <span className="text-medium-gray hover:text-golden">Ngt.terapeuta@gmail.com</span>
                </button>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-golden" />
                  <span className="text-medium-gray">Consulta en Pamplona</span>
                </div>
              </div>
              
              <div className="bg-light-beige p-6 rounded-lg border-l-4 border-golden">
                <h4 className="font-bold text-dark-gray mb-2">Primera Consulta</h4>
                <p className="text-medium-gray">
                  Te ofrezco una primera sesión de 30 minutos que solo tiene un 
                  coste de 10€ para que puedas conocerme y decidir si mi enfoque 
                  es el adecuado para ti.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-dark-gray">Horarios de Atención</h4>
                <p className="text-medium-gray">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-medium-gray">Sábados: 10:00 - 14:00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-dark-gray">
                Solicita tu Cita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Nombre
                    </label>
                    <Input 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre" 
                      className="border-medium-gray"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Apellidos
                    </label>
                    <Input 
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      placeholder="Tus apellidos" 
                      className="border-medium-gray"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Email
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com" 
                    className="border-medium-gray"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Teléfono
                  </label>
                  <Input 
                    name="telefono"
                    type="tel" 
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+34 600 000 000" 
                    className="border-medium-gray"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Cuéntame brevemente qué te trae aquí
                  </label>
                  <Textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Describe brevemente lo que te gustaría trabajar en terapia..."
                    className="border-medium-gray min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-golden hover:bg-red-accent text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar por Correo
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
