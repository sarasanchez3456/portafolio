"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-20 bg-burgundy-dark text-white">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-2xl font-bold text-rosado-light">SS</div>
          <p className="text-sm text-rosado-light/80">© {currentYear} Sara Sánchez. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-rosado-light/60">Hecho con</span>
            <Heart className="w-4 h-4 fill-burgundy-red text-burgundy-red" />
            <span className="text-rosado-light/60">y mucho café</span>
          </div>
          <div className="flex gap-6 mt-2">
            <a href="https://github.com/sarasanchez3456" target="_blank" rel="noopener noreferrer" className="text-rosado-light/60 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sara-sanchez-775a1a3ab/" target="_blank" rel="noopener noreferrer" className="text-rosado-light/60 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
