"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Heart, Zap } from "lucide-react";

export default function AboutMe() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Creativa",
      description: "Transformo ideas abstractas en soluciones digitales innovadoras y atractivas.",
    },
    {
      icon: Target,
      title: "Orientada a Resultados",
      description: "Enfocada en entregar proyectos de alta calidad que superen expectativas.",
    },
    {
      icon: Heart,
      title: "Apasionada",
      description: "Amo lo que hago y eso se refleja en cada línea de código que escribo.",
    },
    {
      icon: Zap,
      title: "Eficiente",
      description: "Optimizo procesos y código para lograr el mejor rendimiento posible.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-28 px-6 md:px-20 bg-rosado-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-burgundy-dark mb-4">SOBRE MÍ</h2>
          <div className="w-24 h-1 bg-burgundy-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4 text-lg text-gray-medium leading-relaxed">
              <p>
                ¡Hola!, soy Sara Sánchez.
              </p>
              <p>
                Construyo ideas.
              </p>
              <p>
                A veces empiezan como una necesidad, otras como una simple curiosidad… pero siempre terminan convirtiéndose en algo funcional: sistemas, dashboards o plataformas que resuelven problemas reales.
                Trabajo entre el desarrollo web y el análisis de datos, conectando lógica, diseño y estructura para que todo tenga sentido, no solo por fuera, sino por dentro.
                Me gusta entender cómo funcionan las cosas, desarmarlas y volverlas a crear mejor.
                Y cuando no estoy programando, probablemente estoy pensando en el siguiente proyecto que quiero construir.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <a
                href="#contacto"
                className="inline-block px-8 py-4 bg-burgundy-red text-white font-semibold rounded-full hover:bg-burgundy-dark transition-colors shadow-soft"
              >
                Hablemos de tu proyecto
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-soft"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-burgundy-dark text-white rounded-xl mb-4">
                  <highlight.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-burgundy-dark mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
