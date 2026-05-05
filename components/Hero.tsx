"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, ArrowRight, GitBranch, Users, Mail } from "lucide-react";

// ✅ Email construido en runtime para dificultar harvesting por bots
const CONTACT_EMAIL = ["saritasanche404", "gmail.com"].join("@");

export default function Hero() {
  const images = ["/seria.png", "/saludando.png", "/yo.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="min-h-screen pt-28 pb-20 px-6 md:px-20 bg-rosado-light relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cubo rosado - arriba derecha */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 right-8 w-14 h-14 bg-rosado-pastel rounded-2xl opacity-60"
          style={{ boxShadow: "var(--shadow-soft)" }}
        />

        {/* Esfera - esquina inferior derecha */}
        <motion.div
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 right-12 w-20 h-20 bg-burgundy-red/15 rounded-full"
        />

        {/* Ventana de código - abajo derecha, oculta en móvil */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-12 right-1/3 w-28 h-20 bg-burgundy-dark/8 rounded-lg border-2 border-burgundy-red/20 opacity-50"
        >
          <div className="p-2">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-burgundy-red/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="space-y-1">
              <div className="h-1 w-14 bg-burgundy-red/30 rounded" />
              <div className="h-1 w-12 bg-burgundy-red/20 rounded" />
              <div className="h-1 w-10 bg-burgundy-red/10 rounded" />
            </div>
          </div>
        </motion.div>

        {/* Diamante - arriba centro-derecha */}
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/3 right-[42%] w-10 h-10 bg-burgundy-medium/15 rotate-45 rounded-sm"
        />

        {/* Blur decorativo suave */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-rosado-pastel/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-burgundy-red/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-medium mb-2">HOLA, SOY ❤️</p>
              <h1 className="text-5xl md:text-7xl font-bold text-burgundy-dark mb-4 leading-tight">
                SARA SÁNCHEZ
              </h1>
              <p className="text-2xl md:text-3xl text-burgundy-red font-light">
                Analista y Desarrolladora
              </p>
            </div>

            <p className="text-lg text-gray-medium leading-relaxed">
              Apasionada por crear experiencias digitales únicas y funcionales.
              Especializada en desarrollo web moderno, análisis de datos y diseño de interfaces intuitivas.
            </p>

            {/* Main CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-dark text-white font-semibold rounded-full hover:bg-burgundy-medium transition-colors"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                VER PROYECTOS
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-burgundy-dark text-burgundy-dark font-semibold rounded-full hover:bg-burgundy-dark hover:text-white transition-all"
              >
                CONTACTAR
                <Heart size={20} className="fill-burgundy-red text-burgundy-red" />
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/sarasanchez3456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a mi GitHub"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 bg-burgundy-dark text-white rounded-full hover:bg-burgundy-red transition-colors"
              >
                <GitBranch size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sara-sanchez-775a1a3ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a mi LinkedIn"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 bg-burgundy-dark text-white rounded-full hover:bg-burgundy-red transition-colors"
              >
                <Users size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Avatar with floating 3D elements */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex justify-center items-center min-h-[400px] md:min-h-[480px]"
          >
            {/* Background glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-rosado-pastel/50 rounded-full blur-3xl"
            />

            {/* Dashed orbit ring */}
            <div className="absolute w-72 h-72 md:w-[340px] md:h-[340px] rounded-full border-2 border-dashed border-burgundy-red/20" />
            {/* Second orbit ring - rotated */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-burgundy-red/10 rotate-[30deg]" />

            {/* Floating code window - top right */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 right-2 md:right-6 z-20 w-22 h-16 md:w-28 md:h-20 bg-burgundy-dark rounded-xl overflow-hidden"
              style={{ boxShadow: "0 8px 24px rgba(107,15,26,0.3)" }}
            >
              <div className="p-2 md:p-2.5">
                <div className="flex gap-1 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-burgundy-red" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-[8px] md:text-[10px] leading-tight">
                  <span className="text-rosado-light/80">&lt;/&gt;</span>
                  <div className="h-[3px] w-14 bg-rosado-light/30 rounded mt-1" />
                  <div className="h-[3px] w-11 bg-rosado-light/20 rounded mt-0.5" />
                  <div className="h-[3px] w-8 bg-rosado-light/15 rounded mt-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Terminal window - bottom left */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-4 -left-2 md:left-2 z-20 w-24 h-16 md:w-28 bg-burgundy-dark/90 rounded-xl overflow-hidden"
              style={{ boxShadow: "0 8px 20px rgba(107,15,26,0.25)" }}
            >
              <div className="p-2">
                <div className="flex gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-burgundy-red" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-[7px] md:text-[9px] text-green-400/80 leading-tight">
                  <p>$ Hello World</p>
                  <p className="text-rosado-light/40">✓ ready</p>
                </div>
              </div>
            </motion.div>

            {/* Cubo rosado grande - top left */}
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 left-4 md:left-10 z-20 w-10 h-10 md:w-12 md:h-12 bg-rosado-pastel rounded-xl"
              style={{ boxShadow: "0 8px 20px rgba(107,15,26,0.15)" }}
            />

            {/* Cubo pequeño burgundy - mid left */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/3 -left-4 md:left-0 z-20 w-6 h-6 md:w-7 md:h-7 bg-burgundy-red/60 rounded-lg"
              style={{ boxShadow: "0 4px 12px rgba(107,15,26,0.2)" }}
            />

            {/* Diamante - mid right */}
            <motion.div
              animate={{ y: [0, 14, 0], x: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-2 md:right-0 z-20 w-7 h-7 md:w-8 md:h-8 bg-burgundy-red/25 rounded-sm rotate-45"
              style={{ boxShadow: "0 4px 12px rgba(107,15,26,0.1)" }}
            />

            {/* Esfera grande - bottom right */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-8 right-0 md:right-4 z-20 w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-burgundy-red to-burgundy-dark rounded-full"
              style={{ boxShadow: "0 6px 16px rgba(107,15,26,0.35)" }}
            />

            {/* Esfera pequeña - top center-right */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-12 right-1/4 z-20 w-4 h-4 md:w-5 md:h-5 bg-burgundy-medium/50 rounded-full"
            />

            {/* Anillo giratorio - right */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 -right-2 md:right-0 z-20 w-8 h-8 md:w-10 md:h-10 border-[3px] border-burgundy-red/30 rounded-full"
            />

            {/* Corazón flotante - top */}
            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 text-2xl md:text-3xl"
            >
              ❤️
            </motion.div>

            {/* Hexágono - bottom center-left */}
            <motion.div
              animate={{ rotate: [0, 60, 0], y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-16 left-8 md:left-14 z-20 w-8 h-8 md:w-9 md:h-9 bg-rosado-pastel/80 rounded-lg rotate-[30deg]"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                boxShadow: "0 4px 12px rgba(107,15,26,0.1)",
              }}
            />

            {/* Sparkles */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-1/3 z-20 text-burgundy-red/40 text-lg"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-24 right-1/4 z-20 text-burgundy-red/30 text-sm"
            >
              ✦
            </motion.div>

            {/* Cubo outline - mid bottom right */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute bottom-12 right-14 md:right-20 z-20 w-6 h-6 md:w-7 md:h-7 border-2 border-rosado-pastel rounded-md rotate-12"
            />

            {/* Avatar image */}
            <motion.img
              src={images[currentImageIndex]}
              alt="Sara Sánchez"
              className="relative z-10 w-56 md:w-68 drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}