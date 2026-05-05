"use server";

// Mapa en memoria para Rate Limiting simple (limitado al tiempo de vida del servidor/función)
const rateLimitMap = new Map<string, number>();

export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}) {
  // 1. Verificación del Honeypot (bot detectado)
  if (formData.honeypot) {
    return { success: false, error: "Bot detectado" };
  }

  // 2. Validación básica de campos
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, error: "Todos los campos son requeridos" };
  }

  if (formData.message.length > 1500) {
    return { success: false, error: "Mensaje muy largo" };
  }

  // 3. Rate Limiting por IP/identificador
  // En Next.js App Router no tenemos acceso directo a la IP de forma sencilla sin headers() 
  // pero usaremos el email como identificador para limitar a 1 correo por hora.
  const now = Date.now();
  const lastSent = rateLimitMap.get(formData.email);
  if (lastSent && now - lastSent < 1000 * 60 * 60) {
    return { success: false, error: "Rate limit exceeded" };
  }

  // Obtenemos las variables de entorno (preferiblemente usar variables sin NEXT_PUBLIC_ para máxima seguridad)
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error("Faltan credenciales de EmailJS");
    return { success: false, error: "Configuración del servidor incompleta" };
  }

  try {
    // 4. Enviar a EmailJS vía API REST para no exponer lógica en el cliente
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Mensaje desde portafolio (Backend Secure)",
          date: new Date().toLocaleString(),
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`EmailJS API Error: ${response.status} - ${text}`);
      throw new Error(`EmailJS respondió con status: ${response.status} - ${text}`);
    }

    // Guardar en el rate limit
    rateLimitMap.set(formData.email, now);

    return { success: true };
  } catch (error) {
    console.error("Error enviando email vía Server Action:", error);
    return { success: false, error: "No se pudo enviar el mensaje" };
  }
}
