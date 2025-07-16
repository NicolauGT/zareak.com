
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import zareakLogo from "@/assets/zareak-logo-earth.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Enviando datos de contacto:", formData);
    
    try {
      const response = await fetch('https://qvuaweuwotjckowukxlp.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "¡Email enviado correctamente!",
          description: "Nicolau recibirá tu solicitud y te contactará pronto.",
        });
        
        setOpen(false);
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        throw new Error(result.error || 'Error desconocido');
      }
    } catch (error) {
      console.error("Error al enviar email:", error);
      toast({
        title: "Error al enviar el email",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      {/* Imagen de fondo sin transparencia */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2000')`,
          filter: 'saturate(0.85) brightness(1.05) blur(1.5px)',
        }}
      />
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/6" />
      
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
              <span className="block text-red-accent">Pamplona</span>
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
                    <Button type="submit" className="w-full bg-golden hover:bg-red-accent" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Mail className="mr-2 h-4 w-4" />
                      )}
                      {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
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
