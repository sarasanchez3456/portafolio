"use client";

import { motion } from "framer-motion";
import { Calendar, FolderOpen, Coffee, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Stats() {
  const [reposCount, setReposCount] = useState<number | string>("+5");

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const res = await fetch("https://api.github.com/users/sarasanchez3456");
        if (res.ok) {
          const data = await res.json();
          // Solo actualizamos si nos devuelve un número válido
          if (data.public_repos !== undefined) {
            setReposCount(data.public_repos);
          }
        }
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      }
    }
    
    fetchGitHubStats();
  }, []);

  const stats = [
    { icon: Calendar, value: "1 año", label: "de estudio" },
    { icon: FolderOpen, value: reposCount.toString(), label: "repositorios (Live)" },
    { icon: Coffee, value: "+1000", label: "tazas de café" },
    { icon: Heart, value: "100%", label: "pasión" },
  ];

  return (
    <section className="py-28 px-6 md:px-20 -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-rosado-pastel rounded-3xl p-8 shadow-xl border border-rosado-light"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 p-3 bg-burgundy-dark/10 rounded-full">
                  <stat.icon className="w-6 h-6 text-burgundy-dark" />
                </div>
                <div className="text-3xl font-bold text-burgundy-dark">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
