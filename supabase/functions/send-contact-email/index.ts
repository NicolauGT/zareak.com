import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono: string;
  mensaje?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, telefono, mensaje }: ContactEmailRequest = await req.json();

    console.log("Enviando email de contacto:", { nombre, email, telefono });

    // Send email to the therapist
    const emailResponse = await resend.emails.send({
      from: "Terapia Gestalt <onboarding@resend.dev>",
      to: ["ngt.terapeuta@gmail.com"],
      subject: "Nueva Solicitud de Cita - Terapia Gestalt",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Nueva Solicitud de Cita
          </h2>
          
          <div style="background-color: #f9f7f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8B4513; margin-top: 0;">Datos del Cliente:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            ${mensaje ? `<p><strong>Mensaje:</strong><br>${mensaje}</p>` : ''}
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2c5282;">
              <strong>Responde a este email o contacta directamente con el cliente para coordinar la cita.</strong>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Este email fue enviado automáticamente desde el formulario de contacto de tu sitio web de Terapia Gestalt.</p>
          </div>
        </div>
      `,
    });

    console.log("Email enviado exitosamente:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email enviado correctamente",
      id: emailResponse.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error al enviar email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Error al enviar el email",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);