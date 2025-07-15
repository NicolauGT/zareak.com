
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
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

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

${formData.mensaje ? `Mensaje adicional: ${formData.mensaje}` : ''}

Quedo a la espera de tu respuesta.

Saludos cordiales.`
    );
    
    const mailtoLink = `mailto:ngt.terapeuta@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Redirigiendo a tu cliente de correo",
      description: "Se abrirá tu aplicación de correo con los datos completados.",
    });
    
    setOpen(false);
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Imagen de fondo sin transparencia */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2000')`,
          filter: 'contrast(0.7) saturate(0.8) brightness(0.9)',
        }}
      />
      
      {/* Overlay granulado */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="relative bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-12 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 rounded-3xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2000')`,
            }}
          />
          
          <div className="absolute inset-0 bg-white/40 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-gray mb-6 leading-tight">
              Terapia Individual
              <span className="block text-golden">Pamplona</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-gray mb-4">
              Terapia Gestalt con Nicolau Gómez
            </h2>
            <p className="text-xl md:text-2xl text-medium-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre tu potencial interior y encuentra el equilibrio emocional que buscas. 
              Un espacio seguro para tu crecimiento personal y bienestar.
            </p>
            <div className="flex justify-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-golden text-golden hover:bg-light-beige px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Reservar Cita
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-golden">Reservar Cita</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="Tu número de teléfono"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos brevemente qué te gustaría trabajar..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-golden hover:bg-red-accent">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar por Correo
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
