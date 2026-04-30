"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Zap,
  FileCode,
  Terminal,
  Database,
  GitBranch,
  Palette,
  Braces,
  Globe,
  Box,
  Hash,
  Coffee,
} from "lucide-react";

const technologies = [
  { name: "React", icon: Atom, color: "text-cyan-400" },
  { name: "Next.js", icon: Zap, color: "text-white" },
  { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-300" },
  { name: "MySQL", icon: Database, color: "text-orange-400" },
  { name: "Git & GitHub", icon: GitBranch, color: "text-orange-500" },
  { name: "Python", icon: Terminal, color: "text-green-400" },
  { name: "Docker", icon: Box, color: "text-blue-400" },
  { name: "CSS", icon: Globe, color: "text-blue-300" },
  { name: "C#", icon: Hash, color: "text-purple-500" },
  { name: "Java", icon: Coffee, color: "text-red-400" },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-28 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-burgundy-dark mb-4">TECNOLOGÍAS</h2>
          <div className="w-24 h-1 bg-burgundy-red mx-auto rounded-full" />
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-rosado-light rounded-2xl p-6 border border-rosado-pastel hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4">
                  <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                    <Icon className={`w-10 h-10 ${tech.color}`} />
                  </div>
                  <span className="font-semibold text-burgundy-dark">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
