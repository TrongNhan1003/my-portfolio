import { motion } from "framer-motion";
import { FaReact, FaFigma, FaGitAlt, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={50} className="text-cyan-400" />, name: "ReactJS" },
    { icon: <FaFigma size={50} className="text-pink-400" />, name: "Figma" },
    { icon: <FaGitAlt size={50} className="text-orange-400" />, name: "Git/GitHub" },
    { icon: <FaDatabase size={50} className="text-green-400" />, name: "SQL" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-blue-500/40 transition"
            whileHover={{ scale: 1.15, rotate: 3 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {s.icon}
            <p className="mt-4 font-medium text-gray-200">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
