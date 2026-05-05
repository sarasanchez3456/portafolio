"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import Image from "next/image";

// ✅ Imágenes locales en /public/projects/
// Para migrar: descarga cada imagen de Pinterest y guárdala en public/projects/
// Ejemplo: public/projects/sienna.jpg, public/projects/colombia.jpg, etc.
// Si prefieres mantener URLs externas temporalmente, considera usar next/image
// con dominios permitidos en next.config.js en lugar de <img> directa.

export default function Projects() {
  const projects = [
    {
      title: "Sienna",
      description:
        "Tienda de moda online con catálogo de ropa, carrito de compras y navegación multipágina. Desarrollada con HTML, CSS y JavaScript vanilla.",
      // ✅ Imagen local — guarda el archivo en public/projects/sienna.jpg
      image: "/sienna.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarasanchez3456/sienna",
    },
    {
      title: "Proyecto React",
      description:
        "Directorio turístico de Colombia construido con Next.js y TypeScript, donde los usuarios pueden explorar destinos, regiones y lugares de interés del país.",
      // ✅ Imagen local — guarda el archivo en public/projects/colombia.jpg
      image: "/colombia.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/sarasanchez3456/proyecto-react",
    },
    {
      title: "Liga Fútbol",
      description:
        "Sistema de gestión de liga de fútbol con backend en ASP.NET y C#, base de datos SQL y frontend en JavaScript para administrar equipos y resultados.",
      // ✅ Imagen local — guarda el archivo en public/projects/futbol.jpg
      image: "/futbol.jpg",
      tags: ["C#", "ASP.NET", "SQL", "JavaScript"],
      github: "https://github.com/sarasanchez3456/ligafutbol",
    },
    {
      title: "Rick and Morty App",
      description:
        "Aplicación web para explorar personajes del universo de Rick and Morty, construida con Next.js y TypeScript con integración a base de datos SQL.",
      // ✅ Imagen local — guarda el archivo en public/projects/rickandmorty.jpg
      image: "/rickandmorty.jpg",
      tags: ["Next.js", "TypeScript", "SQL"],
      github: "https://github.com/juanpablodev-ship/rickandmorty_app",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-dark mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes donde combino creatividad y funcionalidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-rosado-light rounded-3xl overflow-hidden group"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-burgundy-dark/0 group-hover:bg-burgundy-dark/80 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código fuente de ${project.title} en GitHub`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 bg-white text-burgundy-dark rounded-full"
                  >
                    <GitBranch size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-burgundy-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-medium text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-burgundy-red text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}