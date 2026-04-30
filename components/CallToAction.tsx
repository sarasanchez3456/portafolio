"use client";

import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ✅ Variables de entorno — define estas en .env.local (nunca las subas a git)
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

// ✅ Email ofuscado: se construye en runtime para dificultar harvesting por bots
const CONTACT_EMAIL = ["saritasanche404", "gmail.com"].join("@");

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // ✅ Inicializar EmailJS con variable de entorno
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Mensaje desde portafolio",
          date: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

    } catch (error: unknown) {
      // ✅ Solo loggear en desarrollo, nunca exponer el objeto completo
      if (process.env.NODE_ENV === "development") {
        console.warn("EmailJS error:", (error as { status?: number })?.status);
      }
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-28 px-6 md:px-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-20 text-5xl opacity-10"
        >
          💌
        </motion.div>
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-24 text-4xl opacity-10"
        >
          ✉️
        </motion.div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-rosado-pastel/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-burgundy-red/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-burgundy-dark mb-4">CONTACTO</h2>
          <div className="w-24 h-1 bg-burgundy-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-burgundy-dark mb-6">
              ¿Listo para crear algo increíble?
            </h3>
            <p className="text-lg text-gray-medium mb-8 leading-relaxed">
              Estoy siempre abierta a nuevos proyectos, colaboraciones y oportunidades.
              ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu visión!
            </p>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-burgundy-dark text-white rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-medium">Email</p>
                  {/* ✅ Email construido en runtime, no expuesto en HTML estático */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-burgundy-dark font-semibold hover:text-burgundy-red transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-burgundy-dark text-white rounded-xl">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-medium">Respuesta</p>
                  <p className="text-burgundy-dark font-semibold">En menos de 24 horas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-rosado-light p-8 rounded-3xl shadow-soft">
              <div className="space-y-6">
                <div>
                  <label htmlFor="cta-name" className="block text-burgundy-dark font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="cta-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-rosado-pastel rounded-xl focus:border-burgundy-red focus:outline-none transition-colors text-gray-dark"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="cta-email" className="block text-burgundy-dark font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-rosado-pastel rounded-xl focus:border-burgundy-red focus:outline-none transition-colors text-gray-dark"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="cta-message" className="block text-burgundy-dark font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-rosado-pastel rounded-xl focus:border-burgundy-red focus:outline-none transition-colors resize-none text-gray-dark"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-semibold text-center"
                  >
                    ¡Mensaje enviado! Te responderé pronto.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 font-semibold text-center"
                  >
                    Hubo un error. Intenta de nuevo.
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-burgundy-dark text-white font-semibold rounded-full hover:bg-burgundy-red transition-colors flex items-center justify-center gap-2 shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}