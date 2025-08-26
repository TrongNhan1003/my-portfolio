import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center 
                 text-center relative overflow-hidden 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      {/* Hiệu ứng nền tròn mờ */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-20 right-10"></div>

      {/* Avatar */}
      <motion.img
        src="/images/avatar.png"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-purple-400 shadow-lg mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1.2 }}
        transition={{ duration: 1 }}
      />

      {/* Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-purple-400">Trong Nhan</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A passionate <span className="text-blue-400">Frontend Developer</span> who loves building interactive and beautiful web experiences.
      </motion.p>
    </section>
  );
}
